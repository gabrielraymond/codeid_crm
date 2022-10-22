import type { NextApiRequest, NextApiResponse } from 'next';

interface Account {
	email: string;
	password: string;
}

let accounts = [
	{
		email: 'admin@gmail.com',
		password: 'admin',
	},
];

const login = (req: NextApiRequest, res: NextApiResponse) => {
	const data = req.body;
	// let result: any = [];
	const find = (d: Account) => d.email === data.email;

	const idx = accounts.findIndex(find);
	if (idx < 0) {
		res.status(400).json({ msg: 'account not found' });
	} else {
		res.status(200).json(accounts[idx]);
	}
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	// let response: Account[] = [];

	switch (req.method) {
		case 'GET':
			res.status(200).json(accounts);
			break;
		case 'POST':
			login(req, res);
	}

	// setTimeout(() => {
	// 	res.setHeader('Content-Type', 'application/json');
	// 	res.statusCode = 200;
	// 	res.end(JSON.stringify(response));
	// }, 2000);
}
