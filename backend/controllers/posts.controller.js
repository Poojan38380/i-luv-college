import prisma from "../prisma/prisma-client.js";

export const createPost = async (req, res) => {
  try {
    const { userId, collegeId, postTitle, postDescription } = req.body;

    // Validate the required fields
    if (!userId || !collegeId || !postTitle || !postDescription) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Create a new post
    const newPost = await prisma.post.create({
      data: {
        postTitle,
        postDescription,
        userId,
        collegeId,
        createdAt: new Date(), // Optional, as it defaults to now()
      },
    });

    return res.status(201).json({ message: "Post created successfully." });
  } catch (error) {
    console.error("Error in createPost controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getPostsByCollege = async (req, res) => {
  try {
    const { collegeId } = req.params;

    // Validate that collegeId is provided
    if (!collegeId) {
      return res.status(400).json({ error: "collegeId is required." });
    }

    // Find all posts related to the specified college
    const posts = await prisma.post.findMany({
      where: {
        collegeId,
      },
      select: {
        createdAt: true,
        postTitle: true,
        postDescription: true,
        User: {
          select: {
            username: true, // Only include the username field from User
          },
        },
      },
    });

    return res.status(200).json(posts);
  } catch (error) {
    console.error("Error in getPostsByCollege controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
