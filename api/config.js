module.exports = [
	{
		namespace: 'product',
		routes: [
			{ type: 'index', route: '/product' }
			// { type: 'get', route: '/product:id' },
			// { type: 'post', route: '/product' }
		]
	},
	{
		namespace: 'loans',
		routes: [
			{ type: 'index', route: '/loans' },
			{ type: 'get', route: '/loans:id' },
			{ type: 'post', route: '/loans' }
		]
	}
];
