import numpy as np
import cv2



image = cv2.imread('./images/test.jpg')

# Step 1: Convert the image to grayscale
gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Step 2: Apply Gaussian blur to reduce noise and improve edge detection
blurred = cv2.GaussianBlur(gray, (5, 5), 0)

# Step 3: Use Canny edge detection to find edges in the image
edges = cv2.Canny(blurred, 50, 150)

# Step 4: Find contours in the image
contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Step 5: Filter the contours and draw bounding boxes around potential signatures
for contour in contours:
    # Approximate the contour
    epsilon = 0.02 * cv2.arcLength(contour, True)
    approx = cv2.approxPolyDP(contour, epsilon, True)
    
    # Get bounding box around the contour
    x, y, w, h = cv2.boundingRect(approx)
    
    # Set a size threshold to ignore very small contours
    if w > 30 and h > 30:  # This threshold may vary based on the image resolution
        cv2.rectangle(image, (x, y), (x + w, y + h), (0, 255, 0), 2)

# Step 6: Display the original image with detected signatures/handwriting areas highlighted
cv2.imshow("Handwritten Signatures Detected", image)
cv2.waitKey(0)
cv2.destroyAllWindows()