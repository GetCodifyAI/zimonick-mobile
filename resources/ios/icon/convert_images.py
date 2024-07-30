from PIL import Image

# Load the original image
original_image = Image.open("zimonickAppIcon.png")

# Define the desired sizes
sizes = [20, 29, 40, 48, 50, 55, 57, 58, 60, 72, 76, 80, 87, 88, 92, 100, 102, 108, 114, 120, 144, 152, 167, 172, 180, 216, 234, 258, 1024]

# Create resized versions
for size in sizes:
    resized_image = original_image.resize((size, size), Image.LANCZOS)
    resized_image.save(f"{size}.png")

print("Image conversion completed.")

