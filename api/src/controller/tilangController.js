import express from 'express';
import Tilang from "../models/Tilang.js"

//Create 
export const createTilang = async (req, res, next) => {
    const newTilang = new Tilang(req.body)
    // res.send("Hello this is bike endpoint!")
    try {
        const savedTilang = await  newTilang.save()
        res.status(200).json(savedTilang)
    }catch(err) {
        res.status(500).json(err)
    }
}

//update
export const updateTilang = async (req, res, next) => {
    try {
        const updatedTilang = await  Tilang.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})
        res.status(200).json(updatedTilang)
    }catch(err) {
        res.status(500).json(err)
    }
}

//delete
export const deleteTilangById = async (req, res, next) => {
    try {
        await  Tilang.deleteOne({_id: req.params.id})
        res.status(200).json("Tilang has been deleted.")
    }catch(err) {
        res.status(500).json(err)
    }
}

//findById
export const findTilangById = async (req, res, next) => {
    try {
        const tilang = await  Tilang.findById(req.params.id)
        res.status(200).json(tilang)
    }catch(err) {
        res.status(500).json(err)
    }
}

// findAll
// Import necessary modules and models

export const findAllTilang = async (req, res, next) => {
    try {
        const searchTerm = req.query.search;

        // If there's a search term, construct a case-insensitive regular expression
        if (searchTerm) {
            const regex = new RegExp(searchTerm, 'i');
            const query = {
                nomorKendaraan: regex,
            };

            const tilangs = await Tilang.find(query);
            res.status(200).json(tilangs);
        } else {
            // If no search term provided, fetch all tilangs
            const tilangs = await Tilang.find();
            res.status(200).json(tilangs);
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

