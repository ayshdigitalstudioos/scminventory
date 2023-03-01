import { db } from "../db.js";

export const getUsers = (req, res) => {
  const q = "SELECT * FROM inventorydb.users;";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const getsingleUsers = (req, res) => {
  const q = "SELECT * FROM inventorydb.mst_display where uid = ?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};
