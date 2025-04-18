const ADMIN_EMAIL = "aatizzaim232@gmail.com"; // Lock access

function authCheck(req, res, next) {
  const token = req.headers["x-rifza-auth"];

  // Basic token check (replace with proper Firebase Auth if needed)
  if (token !== process.env.RIFZA_SERVER_TOKEN) {
    return res.status(403).send({ error: "Unauthorized." });
  }

  next(); // All good
}

module.exports = { authCheck };
