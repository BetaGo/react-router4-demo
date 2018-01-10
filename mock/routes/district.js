const fs = require('fs');
const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	const district = fs.readFileSync(
		path.resolve(__dirname, '../data/district.json'),
		'utf-8',
	);
	console.log(district);
	res.json({
		status: 1,
		msg: '',
		data: JSON.parse(district),
	});
});

module.exports = router;
