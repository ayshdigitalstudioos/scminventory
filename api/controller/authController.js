import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  //check existing users
  const q = "select * from users where email = ? or username = ?";

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User already found!");

    const hashpassword = bcrypt.hashSync(
      req.body.password,
      bcrypt.genSaltSync(10)
    );

    const q = "insert into users (`username`, `email`, `password`) values (?)";

    const values = [req.body.username, req.body.email, hashpassword];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User created successfully !");
    });
  });
};

export const login = (req, res) => {
  //checkuser is exist
  const qry = "select * from users where username = ?";

  db.query(qry, [req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json("user not found !");

    const isPassword = bcrypt.compareSync(req.body.password, data[0].password);

    if (!isPassword) return res.status(400).json("password is incorrect !");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...rest } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: 9000000,
        secure: false
      })
      .status(200)
      .json(rest);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("user is logout!");
};
