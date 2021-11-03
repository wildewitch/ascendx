const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db.js");
const nodemailer = require("nodemailer")

dotenv.config({path: "./config.env"})
// Middleware
app.use(cors());
app.use(express.json());

const sendEmail = async (options) => {
	const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

	    // 2) Define the Email Options
		const mailOptions = {
			from: 'Hot Coldman <cold.hot@ascendx@mail.com>',
			to: options.email,
			subject: options.subject,
			text: options.message,
			// html:
		};
		// 3) Actually send the email
		await transporter.sendMail(mailOptions);
}

app.post("/preorder", (req, res) => {
		const { productid, firstname, lastname, email, preorderdate } = req.body;
		console.log(req.body);
		console.log(firstname);
		console.log(productid);
		const submitForm = pool.query(
			"INSERT INTO preorders (product_id, first_name, last_name, email, preorder_date) VALUES ($1,$2,$3,$4,$5)",
			[productid, firstname, lastname, email, preorderdate],
		);
		try {
			sendEmail({
				email,
				subject: 'Thank you for your interest',
				message: ''
			})
		} catch (error) {
			console.log(error)
		}

		res.status(201).json({message:"success"});
});
console.log(process.env.EMAIL_HOST)
app.listen(3001, () => console.log("Ready at 3001."));
