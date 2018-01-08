const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const extensionRegExp = /\.\w+$/;
const imgTypeArray = ['.png', '.jpg', '.gif', '.svg', '.jpeg'];
const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, path.resolve(__dirname, '../../public/images'));
	},
	filename(req, file, cb) {
		console.log(file);
		cb(null, `${file.fieldname}-${Date.now()}${extensionRegExp.exec(file.originalname)[0]}`);
	},
});

const upload = multer({ storage }).array('pic');

router.post('/', (req, res) => {
	upload(req, res, function (err) {
		if (err) {
			// 发生错误
			console.log(err);
			return
		}
		res.json({
			status: 1,
			msg: 'success',
		})
		// 一切都好
	})
});


module.exports = router;
