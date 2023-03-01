import express from "express";

import { getsingleUsers, getUsers } from "../controller/userController.js";
const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getsingleUsers);


export default router;