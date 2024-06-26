import prisma from "../prisma/prisma-client.js";
import bcrypt from "bcryptjs";
import generateTokenandSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  const { email, fullName, password } = req.body;
  if (!email || !password || !fullName) {
    return res.status(400).json({ error: "All the fields are required." });
  }

  try {
    const user = await prisma.user.findFirst({ where: { email } });

    if (user) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
      data: {
        email,
        fullname: fullName,
        password: hashedPassword,
      },
    });
    await generateTokenandSetCookie(newUser.email, res);

    // TODO: Dont send user password
    res.status(200).json(newUser);
  } catch (error) {
    console.log("Error in signup controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password." });
    }

    await generateTokenandSetCookie(user.email, res);

    return res.json(user);
  } catch (error) {
    console.log("Error in login controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export const logout = async (req, res) => {
  try {
    res.cookie("token", "", { maxAge: 0 });
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const allUsers = async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return res.status(200).json(allUsers);
  } catch (error) {
    console.log("Error in allUsers controller", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
