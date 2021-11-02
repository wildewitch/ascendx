const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const pool = require("./db.js");

// Middleware
app.use(cors());
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser());

// app.get("/", async (req, res) => {
// 	try {
// 		const allProducts = await pool.query(
// 			"SELECT product_id, product_name FROM products",
// 		);
// 		res.status(200).json(allProducts.rows);
// 		console.log(allProducts.rows);
// 	} catch (error) {
// 		console.log(error);
// 	}
// });

app.post("/", (req, res) => {
	try {
		const { productid, firstname, lastname, email, preorderdate } = req.body;
		console.log(req.body);
		console.log(firstname);

		const submitForm = pool.query(
			"INSERT INTO preorders (product_id, first_name, last_name, email, preorder_date) VALUES ($1,$2,$3,$4,$5)",
			[productid, firstname, lastname, email, preorderdate],
		);
		res.status(201);
	} catch (error) {
		console.log(error);
	}
});

app.listen(3001, () => console.log("Ready at 3001."));
