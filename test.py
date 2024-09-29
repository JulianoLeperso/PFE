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

# Function to merge nearby bounding boxes
def merge_close_rectangles(rectangles, proximity_threshold):
    merged_rectangles = []
    for rect in rectangles:
        x, y, w, h = rect
        merged = False
        for idx, merged_rect in enumerate(merged_rectangles):
            mx, my, mw, mh = merged_rect

            # Check if rectangles are close to each other
            if (abs(x - mx) <= proximity_threshold and abs(y - my) <= proximity_threshold):
                # Combine the rectangles into one big bounding box
                nx = min(x, mx)
                ny = min(y, my)
                nw = max(x + w, mx + mw) - nx
                nh = max(y + h, my + mh) - ny
                merged_rectangles[idx] = (nx, ny, nw, nh)
                merged = True
                break
        
        if not merged:
            merged_rectangles.append(rect)
    
    return merged_rectangles

# Function to process each image and detect signatures
def detect_signatures_in_image(image, proximity_threshold=50):
    # Step 1: Convert the image to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Step 2: Apply Gaussian blur to reduce noise and improve edge detection
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)

    # Step 3: Use Canny edge detection to find edges in the image
    edges = cv2.Canny(blurred, 50, 150)

    # Step 4: Find contours in the image
    contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Step 5: Extract bounding boxes from contours
    bounding_boxes = []
    for contour in contours:
        epsilon = 0.02 * cv2.arcLength(contour, True)
        approx = cv2.approxPolyDP(contour, epsilon, True)
        
        x, y, w, h = cv2.boundingRect(approx)
        
        # Set a size threshold to ignore very small contours
        if w > 30 and h > 30:
            bounding_boxes.append((x, y, w, h))
    
    # Step 6: Merge close rectangles based on the proximity threshold
    merged_rectangles = merge_close_rectangles(bounding_boxes, proximity_threshold)

    # Step 7: Draw bounding boxes on the image
    bounding_boxes_detected = len(merged_rectangles) > 0
    for rect in merged_rectangles:
        x, y, w, h = rect
        cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)

    return image, bounding_boxes_detected

# Main function to process a PDF
def process_pdf(file_path, proximity_threshold=50):
    pdf_document = fitz.open(file_path)

    # Create a folder to save processed images
    output_folder = create_directory_for_pdf(file_path)

    # Iterate through each page of the PDF
    for page_num in range(len(pdf_document)):
        print(f"Processing page {page_num + 1}...")

        # Convert PDF page to image
        image = pdf_page_to_image(pdf_document, page_num)

        # Detect signatures and draw bounding boxes with the specified proximity threshold
        processed_image, bounding_boxes_detected = detect_signatures_in_image(image, proximity_threshold)

        # Only save the image if bounding boxes are detected
        if bounding_boxes_detected:
            output_image_path = os.path.join(output_folder, f"page_{page_num + 1}_with_rectangles.png")
            cv2.imwrite(output_image_path, processed_image)
            print(f"Page {page_num + 1}: Detected and saved")
        else:
            print(f"Page {page_num + 1}: No rectangles detected, skipping save")

        # Optionally display the processed image with bounding boxes:
        #cv2.imshow(f"Page {page_num + 1} - Signatures Detected", processed_image)
        #cv2.waitKey(0)
        #cv2.destroyAllWindows()

    # Close the PDF document after processing
    pdf_document.close()

# Example usage
pdf_file_path = r"C:\Users\cleme\Desktop\PFE_files\testbailpdf.pdf"  
proximity_threshold = 125  # Set how close the rectangles need to be to merge

process_pdf(pdf_file_path, proximity_threshold)


