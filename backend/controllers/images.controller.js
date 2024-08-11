import prisma from "../prisma/prisma-client.js";

export const addImageToCollege = async (req, res) => {
  const { collegeId } = req.params;
  const { imageURLs, uploadedBy } = req.body; // Expecting imageURLs to be an array

  try {
    // Check if the college exists
    const college = await prisma.college.findUnique({
      where: { id: collegeId },
    });

    if (!college) {
      return res.status(404).json({ error: "College not found" });
    }

    // Create multiple images and associate them with the college
    await prisma.image.createMany({
      data: imageURLs.map((imageURL) => ({
        imageURL,
        uploadedBy,
        collegeId,
      })),
    });

    return res.status(201).json({
      message: "Images added successfully",
    });
  } catch (error) {
    console.error("Error adding images to college:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
