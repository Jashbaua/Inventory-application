const pool = require("./pool");

async function getAllCategories() {
	const { rows } = await pool.query("SELECT * FROM categories ORDER BY id");
	return rows.map((row) => row.category);
}

async function createCategory(category) {
	await pool.query("INSERT INTO categories (category) VALUES ($1)", [category]);
}

async function deleteCategory(category) {
	await pool.query("DELETE FROM categories WHERE category=($1)", [category]);
}

async function updateCategory(oldName,newName) {
	await pool.query("UPDATE categories SET category=$1 WHERE category=$2", [newName,oldName]);
}

async function getItems(category) {
	let { rows } = await pool.query('SELECT id FROM categories WHERE category=$1', [category]);
	({ rows } = await pool.query('SELECT item FROM items WHERE category_id=$1', [rows[0].id]));
	return rows.map((row) => row.item)
}

module.exports = {
	getAllCategories,
	createCategory,
	deleteCategory,
	updateCategory,
	getItems
};
