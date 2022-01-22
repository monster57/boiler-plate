const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {

    return Tutorial.create({
        title: req.body.title,
        description: req.body.description,
        Tutorial,
        published: req.body.published
    }).then(tu => {
        return res.json(tu);
    });

};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    return Tutorial.findAll({}).then(data => {
        return ras.json(data);
    });

};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    return Tutorial.findOne({ id: req.params.id })
        .then(data => {
            return res.json({data});
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};