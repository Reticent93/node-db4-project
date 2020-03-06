exports.seed = async function(knex) {
	await knex('instructions').insert([
		{ step_number: 1, steps: 'get 2 slices of bread', recipe_id: 1 },
		{ step_number: 2, steps: 'add 2 cups of peanut butter to one slice of bread', recipe_id: 1 },
		{ step_number: 3, steps: 'add 2 tablespoons of jelly to other slice of bread', recipe_id: 1 },
		{ step_number: 4, steps: 'put both slices together and enjoy!' },
		{ step_number: 1, steps: 'turn stove on to meduim heat', recipe_id: 2 },
		{ step_number: 2, steps: 'combine one cup of flour with 3 pounds of raw chicken', recipe_id: 2 },
		{ step_number: 3, steps: 'add to pan and cook for 25 minutes', recipe_id: 2 },
		{ step_number: 4, steps: 'remove from heat and enjoy!', recipe_id: 2 },
		{ step_number: 1, steps: 'add 4 cups of water to pot and boil on meduim-high heat', recipe_id: 3 },
		{ step_number: 2, steps: 'peel 2 pounds of potatoes', recipe_id: 3 },
		{ step_number: 3, steps: 'add potatoes to water and boil for 20 minutes', recipe_id: 3 },
		{ step_number: 4, steps: 'remove from heat and drain water from pot', recipe_id: 3 },
		{ step_number: 5, steps: 'add one cup warm milk to potatoes', recipe_id: 3 },
		{ step_number: 6, steps: 'add one g of butter', recipe_id: 3 },
		{ step_number: 7, steps: 'mash together and enjoy', recipe_id: 3 }
	]);
};
