import { PrismaClient } from "@prisma/client";
import express from "express";
import { env } from "process";

const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const app = express();

// get config vars
dotenv.config();
app.use(express.json());

function generateAccessToken(email: String) {
  return jwt.sign({ email }, process.env.TOKEN_SECRET);
}

// ... your REST API routes will go here

app.post(`/create/user`, async (req, res) => {
  const token = generateAccessToken(req.body.email);
  const result = await prisma.user.create({
    data: {
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    },
  });

  res.json({ token: token });
});

app.post(`/login/user`, async (req, res) => {
  const token = generateAccessToken(req.body.email);
  const user = await prisma.user.findUnique({
    where: {
      email: req.body.email,
    },
  });

  await bcrypt.compare(
    req.body.password,
    user?.password,
    function (err: any, result: any) {
      if (err) {
        throw err;
      } else if (!result) {
        return res.status(403).json({ message: "Wrong password" });
      } else {
        return res
          .status(200)
          .json({ token: token, message: "Login Successful" });
      }
    }
  );
});

app.listen(3000, () =>
  console.log("REST API server ready at: http://localhost:3000")
);
