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
