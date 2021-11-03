
// const getAllProducts = async () => {
// 	const res = await axios.get(`http://localhost:3001`);
// 	console.log(res.data);
// };

const getFirstName = document.querySelector("#firstname");
const getLastName = document.querySelector("#lastname");
const getEmail = document.querySelector("#email");
const signUp = document.querySelector("#preorder-form");
const productID = document.querySelector("#productid")
const timestamp = document.querySelector("#preorderdate")

// @ts-ignore
const handleSubmit = async (obj) => {
	try {
		await axios.post("http://localhost:3001/preorder", obj)
		window.alert("Your submissiion")
	} catch (error) {
		window.alert("Something went wrong. Please try again.")
	}

};

signUp.addEventListener('submit', (e) => {
	e.preventDefault();
	// @ts-ignore
	const formValues = {
	// @ts-ignore
	productid: +productID.value,
	// @ts-ignore
	firstname: getFirstName.value,
	// @ts-ignore
	lastname: getLastName.value,
	// @ts-ignore
	email: getEmail.value,
	// @ts-ignore
	preorderdate: timestamp.value
	}
	console.log(formValues)
	handleSubmit(formValues)
})