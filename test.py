import numpy as np
import cv2
import fitz  # PyMuPDF
import os
from PIL import Image

# Function to create a directory if it doesn't exist
def create_directory_for_pdf(pdf_filename):
    folder_name = os.path.splitext(os.path.basename(pdf_filename))[0]
    if not os.path.exists(folder_name):
        os.makedirs(folder_name)
    return folder_name

# Function to convert a PDF page to an image
def pdf_page_to_image(pdf_document, page_number, zoom=2):
    page = pdf_document.load_page(page_number)  # Load the page
    matrix = fitz.Matrix(zoom, zoom)  # Zoom factor to improve resolution
    pix = page.get_pixmap(matrix=matrix)
    
    # Convert the Pixmap to a PIL Image and then to OpenCV image
    img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
    open_cv_image = np.array(img) 
    return cv2.cvtColor(open_cv_image, cv2.COLOR_RGB2BGR)  # Convert RGB to BGR for OpenCV

# Function to process each image and detect signatures
def detect_signatures_in_image(image):
    # Step 1: Convert the image to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Step 2: Apply Gaussian blur to reduce noise and improve edge detection
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)

    # Step 3: Use Canny edge detection to find edges in the image
    edges = cv2.Canny(blurred, 50, 150)

    # Step 4: Find contours in the image
    contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Step 5: Filter the contours and draw bounding boxes around potential signatures
    bounding_boxes_detected = False
    for contour in contours:
        epsilon = 0.02 * cv2.arcLength(contour, True)
        approx = cv2.approxPolyDP(contour, epsilon, True)
        
        x, y, w, h = cv2.boundingRect(approx)
        
        # Set a size threshold to ignore very small contours
        if w > 30 and h > 30:
            bounding_boxes_detected = True
            cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)

    return image, bounding_boxes_detected

# Main function to process a PDF
def process_pdf(file_path):
    pdf_document = fitz.open(file_path)

    # Create a folder to save processed images
    output_folder = create_directory_for_pdf(file_path)

    # Iterate through each page of the PDF
    for page_num in range(len(pdf_document)):
        print(f"Processing page {page_num + 1}...")

        # Convert PDF page to image
        image = pdf_page_to_image(pdf_document, page_num)

        # Detect signatures and draw bounding boxes
        processed_image, bounding_boxes_detected = detect_signatures_in_image(image)

        # Only save the image if bounding boxes are detected
        if bounding_boxes_detected:
            output_image_path = os.path.join(output_folder, f"page_{page_num + 1}_with_rectangles.png")
            cv2.imwrite(output_image_path, processed_image)
            print(f"Page {page_num + 1}: Detected and saved")
        else:
            print(f"Page {page_num + 1}: No rectangles detected, skipping save")

        # Optionally display the processed image with bounding boxes
        cv2.imshow(f"Page {page_num + 1} - Signatures Detected", processed_image)
        cv2.waitKey(0)
        cv2.destroyAllWindows()

    # Close the PDF document after processing
    pdf_document.close()

# Example usage
pdf_file_path = "./testbailpdf.pdf"
process_pdf(pdf_file_path)
