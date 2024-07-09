import JWT from "jsonwebtoken";
import { apiErrors } from "../Utils/apiErrors";
export const verifyToken = async (req, res, next) => {
  const { AccessToken } =
    req.body || req.header("Authorization") || req.cookies.AccessToken;

  if (!AccessToken) {
    res.status(401).json(new apiErrors(404, "Cookies Not Found"));
    throw new apiErrors(404, "Cookies Not Found");
  }

const decodedToken=

  next();
};
