const express = require('express');
const Food = require('../models/food');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let foods = null;
        const query = req.query.cuisine;
        if (query === undefined || query === 'all') {
            foods = await Food.find();
        } else {
            foods = await Food.find({ cuisine: query });
        }
        res.send(foods);
    } catch (error) {
        res.status(400).send({ error: 'Error loading foods' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const food = await Food.findById(req.params.id);
        res.send(food);
    } catch (error) {
        res.status(400).send({ error: 'Error loading food' });
    }
});

router.get('/name/:name', async (req, res) => {
    try {
        const name = req.params.name.toLowerCase();
        const foods = await Food.find();
        const possibleFoods = foods.filter(food => food.title.toLowerCase().indexOf(name) != -1);
        res.send(possibleFoods);
    } catch (error) {
        res.status(400).send({ error: 'Error loading food' });
    }
});

module.exports = app => app.use('/api/food', router);