import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (token) {
      jwt.verify(token, "test", (error, decodedData) => {
        if (error) {
          if (error instanceof jwt.TokenExpiredError) {
            // Handle expired token error
            return res.status(401).json({ message: "Token expired" });
          }
          // Handle other token verification errors
          return res.status(401).json({ message: "Invalid token" });
        }

        req.userId = decodedData?.id; // store user id
        next(); // Proceed to the next middleware or route
      });
    } else {
      res.status(401).json({ message: "No token found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

export default auth;
