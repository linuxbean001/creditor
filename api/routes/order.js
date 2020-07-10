const express = require('express');
const router = express.Router();
const conOrder = require('../controller/con-order');

/* ****************************Login User and Authenticate**************************** */
router.post('/add', conOrder.addOrder);
router.get('/list/:id', conOrder.listOrder);
router.get('/alllist', conOrder.AllListOrder);

//calendar
router.get('/today', conOrder.TodayOrder);
router.get('/week', conOrder.WeekOrder);
router.get('/month', conOrder.MonthOrder);





module.exports = router;    