import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
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

//admin
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

//driver

app.post("/driver", async (req: Request, res: Response) => {
  const token = generateAccessToken(req.body.email);

  const driver = await prisma.driver.create({
    data: { ...req.body },
  });

  res.json({ driver: driver, token: token });
});

app.post("/driver/:id/suspend", async (req: Request, res: Response) => {
  const token = generateAccessToken(req.body.email);

  const driver = await prisma.driver.update({
    where: {
      id: req.params.id,
    },
    data: {
      suspended: true,
    },
  });

  res.status(204).json({ token: token });
});

app.delete("/driver/:id/suspend", async (req: Request, res: Response) => {
  const token = generateAccessToken(req.body.email);

  const driver = await prisma.driver.update({
    where: {
      id: req.params.id,
    },
    data: {
      suspended: false,
    },
  });

  res.status(204).json({ token: token });
});

//passenger

app.post("/passanger", async (req: Request, res: Response) => {
  const token = generateAccessToken(req.body.email);

  const driver = await prisma.passenger.create({
    data: { ...req.body },
  });

  res.json({ driver: driver, token: token });
});

app.listen(3000, () =>
  console.log("REST API server ready at: http://localhost:3000")
);
