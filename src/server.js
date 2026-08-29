const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "8byteorg application is running"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy"
  });
});

app.get("/tasks", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Learn CI/CD",
      completed: false
    },
    {
      id: 2,
      title: "Build Docker Image",
      completed: false
    }
  ]);
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
