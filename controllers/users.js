var User = require('../models/user');
var express = require('express');
var router = express.Router();
var validator = require('../validation/users_validator');


// GET /users
// Get a list of users
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) {
            return res.status(500).json({
                error: "Error listing users: " + err
            });
        }

        res.json(users);
    });
});

// GET /users/:id
// Get a user by ID
router.get('/:id', function (req, res) {
    User.findOne({
        _id: req.params.id
    }, function (err, user) {
        if (err) {
            return res.status(500).json({
                error: "Error reading user: " + err
            });
        }

        if (!user) {
            return res.status(404).end();
        }

        res.json(user);
    });
});

// POST /users
// Creates user, pass user object in request
router.post('/', function (req, res) {
    var userModel = new User(req.body); //creates model usable by mongoose from JSON object in request
    validator.validate(null, req.body, function () {
        User.create(userModel, function (err, user) {
            if (err) {
                return res.status(500).json({
                    error: "Error creating user: " + err
                });
            }
            res.json(user);
        });
    }, function (message) {
        return res.status(400).json({
            error: message
        });
    });

});


// PUT /users/:id
// Updates user by ID, pass user object in request
router.put('/:id', function (req, res) {
    if (req.body._id) delete req.body._id; //just for sure, don't allow _id to be passed in object, it can't be changed
    validator.validate(req.params.id, req.body, function () {
        User.update({_id: req.params.id}, req.body, function (err, user) {
            if (err) {
                return res.status(500).json({
                    error: "Error updating user: " + err
                });
            }
            res.json(user);
        });
    }, function (message) {
        return res.status(400).json({
            error: message
        });
    });
});

// DELETE /users/:id
// Deletes user by ID
router.delete('/:id', function (req, res) {
    User.remove({_id: req.params.id}, function (err) {
        if (err) {
            return res.status(500).json({
                error: "Error deleting user: " + err
            });
        }
        res.status(200);
        res.json({});
    });
});

module.exports = router;
