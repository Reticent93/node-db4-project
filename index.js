const express = require('express');
const helmet = require('helmet');
const recipeRouter = require('./recipes/recipe-router');
const ingredientRouter = require('./ingredients/ingredient-router');

const server = express;
const port = process.ent.PORT || 4000;

server.use(helmet());
server.request(express.json());

server.use('/recipes', recipeRouter);
server.use('/ingredients', ingredientRouter);

server.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({
		message: 'Something is wrong'
	});
});

server.listen(port, () => {
	console.log(`Running at http:/localhost:${port}`);
});
