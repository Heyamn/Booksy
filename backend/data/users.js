import bcrypt from "bcryptjs"

const users = [
	{
		name: "Admin User",
		email: "Admin@example.com",
		password: bcrypt.hashSync("123456", 10),
		isAdmin: true,
	},
	{
		name: "Aman",
		email: "Aman@example.com",
		password: bcrypt.hashSync("123456", 10),
	},
	{
		name: "Abhay",
		email: "Abhay@example.com",
		password: bcrypt.hashSync("123456", 10),
	},
]

export default users
