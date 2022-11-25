module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "kevin" && req.body.password === "kevin") {
      return res.status(200).json({
        user: {
          token: "123",
        },
      });
    } else {
      return res.status(400).json({ message: "Invalid username or password" });
    }
  }
};

module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/register") {
    return res.status(200).json({
        user: {
            token: "123",
          },
    });
  }
};
