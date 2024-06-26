import jwt from "jsonwebtoken";

const generateTokenandSetCookie = (user, res) => {
  const token = jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    maxAge: 1 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
  });
};

export default generateTokenandSetCookie;
