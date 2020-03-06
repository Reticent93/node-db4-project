exports.seed = async function(knex) {
	// Deletes ALL existing entries
	await knex('ingredients').insert([
		{ name: '2 slices of bread' },
		{ name: ' half cup of peanut butter' },
		{ name: '2 tablespoon jelly' },
		{ name: '3 pounds of raw chicken' },
		{ name: 'cup milk' },
		{ name: '2 pounds of potatoes' },
		{ name: 'cup flour' },
		{ name: 'g of butter' },
		{ name: '4 cups of water' }
	]);
};
