exports.seed = async function(knex) {
	// Deletes ALL existing entries
	await knex('recipes').insert([ { name: 'PB & J' }, { name: 'fried chicken' }, { name: 'mashed potatoes' } ]);
};
