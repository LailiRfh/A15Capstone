import express from "express";
import Tilang from "../models/Tilang.js";
import {
  createTilang,
  updateTilang,
  deleteTilangById,
  findTilangById,
  findAllTilang,
} from "../controller/TilangController.js";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";

//cons express = require('express');
const router = express.Router();


//Create
//testing site without verifyToken re-activate when login token has been created
router.post("/", verifyToken, verifyAdmin, createTilang);
// router.post('/',  createBike)

//Update
router.put("/:id", verifyToken, verifyAdmin, updateTilang); //re-activate after testing or fixed login token

// testing side
// router.put('/:id',  updateBike)
// router.delete('/:id', deleteBikeById)

//Delete
router.delete("/:id", verifyToken, verifyAdmin, deleteTilangById); //re-activate after testing or fixed login token

//findById
router.get("/:id", findTilangById);

//findAll
router.get("/", findAllTilang);

router.get("/", async (req, res) => {
  res.send("hello this is tilang router endpoint!");
});

export default router;
