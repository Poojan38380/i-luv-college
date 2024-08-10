import prisma from "../prisma/prisma-client.js";

export const createCollege = async (req, res) => {
  const { createdBy, name, description, imageUrls } = req.body;

  if (!createdBy || !name || !description) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const college = await prisma.college.findFirst({ where: { name } });

    if (college) {
      return res
        .status(400)
        .json({ error: "College with the same name already exists" });
    }
    // Create a new college
    const newCollege = await prisma.college.create({
      data: {
        name,
        description,
        createdBy,
        images: {
          create: imageUrls.map((url) => ({
            imageURL: url,
            uploadedBy: createdBy,
          })),
        },
      },
    });

    return res.status(201).json({
      college: newCollege,
    });
  } catch (error) {
    console.error("Error in createCollege controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const AllColleges = async (req, res) => {
  try {
    const allColleges = await prisma.college.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        creator: {
          // Use the correct relation name here
          select: {
            username: true, // Include only the username of the creator
          },
        },
        images: true, // Include all associated images
        posts: true, // Include all associated posts
      },
    });

    return res.status(200).json(allColleges);
  } catch (error) {
    console.error("Error in AllColleges controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const SingleCollege = async (req, res) => {
  const { id } = req.params;
  try {
    const college = await prisma.college.findUnique({
      where: {
        id,
      },
      include: {
        creator: {
          // Use the correct relation name here
          select: {
            username: true, // Include only the username of the creator
          },
        },
        images: true, // Include all associated images
      },
    });

    return res.status(200).json(college);
  } catch (error) {
    console.error("Error in SingleCollege controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const hasUserLikedCollege = async (req, res) => {
  const { userId, collegeId } = req.body;

  try {
    // Check if the user has already liked the college
    const existingLike = await prisma.userCollegeLike.findUnique({
      where: {
        userId_collegeId: {
          userId: userId,
          collegeId: collegeId,
        },
      },
    });

    // If existingLike is found, it means the user has liked the college
    const hasLiked = existingLike !== null;

    return res.status(200).json({ hasLiked });
  } catch (error) {
    console.error("Error checking if user liked the college:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
};

export const likeCollege = async (req, res) => {
  const { userId, collegeId } = req.body;

  try {
    // Check if the user has already liked the college
    const existingLike = await prisma.userCollegeLike.findUnique({
      where: {
        userId_collegeId: {
          userId,
          collegeId,
        },
      },
    });

    if (existingLike) {
      return res
        .status(400)
        .json({ message: "You have already liked this college." });
    }

    // Create a new like
    await prisma.userCollegeLike.create({
      data: {
        userId,
        collegeId,
      },
    });

    // Get the current likes count
    const college = await prisma.college.findUnique({
      where: { id: collegeId },
      select: { likes: true },
    });

    if (college) {
      // Update the likes count
      await prisma.college.update({
        where: { id: collegeId },
        data: {
          likes: college.likes + 1,
        },
      });

      res.status(200).json({ message: "College liked successfully." });
    } else {
      res.status(404).json({ message: "College not found." });
    }
  } catch (error) {
    console.error("Error in likeCollege controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const unlikeCollege = async (req, res) => {
  const { userId, collegeId } = req.body;

  try {
    // Check if the user has already liked the college
    const existingLike = await prisma.userCollegeLike.findUnique({
      where: {
        userId_collegeId: {
          userId,
          collegeId,
        },
      },
    });

    if (!existingLike) {
      return res
        .status(400)
        .json({ message: "You have not liked this college yet." });
    }

    // Remove the like
    await prisma.userCollegeLike.delete({
      where: {
        userId_collegeId: {
          userId,
          collegeId,
        },
      },
    });

    // Get the current likes count
    const college = await prisma.college.findUnique({
      where: { id: collegeId },
      select: { likes: true },
    });

    if (college) {
      // Update the likes count
      await prisma.college.update({
        where: { id: collegeId },
        data: {
          likes: college.likes - 1,
        },
      });

      res.status(200).json({ message: "Like removed successfully." });
    } else {
      res.status(404).json({ message: "College not found." });
    }
  } catch (error) {
    console.error("Error in unlikeCollege controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
