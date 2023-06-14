export async function errorHandler(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    // jwt authentication error
    return res.status(401).json({ message: "Invalid Token" });
  }

  // default to 500 server error
  console.log(err)
  return res.status(500).json({ message: "Internal Server Error" });
}
