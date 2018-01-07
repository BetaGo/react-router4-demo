const express = require('express');

const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (
    username === 'gwt' && password === '123'
  ) {
    res.cookie('user', 'gwt');
    res.json({
      status: 1,
      msg: '登陆成功',
      data: {
        user: 'gwt',
      },
    });
  } else {
    res.json({
      status: 0,
      msg: '登陆失败',
    });
  }
});

module.exports = router;
