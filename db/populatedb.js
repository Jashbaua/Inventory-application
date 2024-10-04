#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  category VARCHAR ( 255 ) UNIQUE
);

INSERT INTO categories (category) 
VALUES
  ('Furniture'),
  ('Electronics');

  CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  item VARCHAR ( 255 ),
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);

INSERT INTO items (item, category_id)
VALUES
  ('Chair',1),
  ('TV',2);
`;

async function main() {
	console.log("seeding...");
	const client = new Client({
		connectionString: `postgresql://${process.env.user}:${process.env.password}@${process.env.host}:${process.env.port}/${process.env.database}`,
	});
	await client.connect();
	await client.query(SQL);
	await client.end();
	console.log("done");
}

main();
