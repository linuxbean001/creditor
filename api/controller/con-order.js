
const Order = require('../model/order')


exports.addOrder = (req, res, next) => {

    const orderVo = new Order({
        userId: req.body.userId,
        orderValue: req.body.orderValue,
        orderClient: req.body.orderClient,
        orderDate: req.body.orderDate,
        orderUnique: req.body.orderUnique
    })
    orderVo
        .save()
        .then(result => {
            res.status(201).json({
                message: 'order Successfully',
                success: true,
            })

        })
        .catch(err => {
            res.status(400).json({
                message: 'Backend Error',
                success: false,
                body: err
            })
        })
    console.log('this is order', req.body)
}

exports.listOrder = (req, res, next) => {
    Order.find({ userId: req.params.id })
        .then(result => {
            if (result) {
                res.status(201).json({
                    success: true,
                    data: result || {}
                })
            }
        })
        .catch(err => {
            console.log('xxx x xxx', err)
            res.status(400).json({
                success: false,
                error: err
            })
        })

}

exports.AllListOrder = (req, res, next) => {
    Order.find({})
        .then(result => {
            if (result) {
                res.status(201).json({
                    success: true,
                    data: result || {}
                })
            }
        })
        .catch(err => {
            console.log('xxx x xxx', err)
            res.status(400).json({
                success: false,
                error: err
            })
        })

}

exports.TodayOrder = (req, res, next) => {
    Order.find({ orderDate: formatDate(new Date()) })
        .then(result => {
            if (result) {
                res.status(201).json({
                    success: true,
                    data: result || {}
                })
            }
        })
        .catch(err => {
            console.log('xxx x xxx', err)
            res.status(400).json({
                success: false,
                error: err
            })
        })

}
exports.WeekOrder = (req, res, next) => {

    Order.find({})
        .then(result => {
            if (result) {
                let sevevDayData = []
                for (let i = 0; i < result.length; i++) {
                    let dateSeven = new Date();
                    dateSeven.setDate(dateSeven.getDate() - 7);
                    let curr = new Date;
                    let firstday = formatDate(getMondayOfCurrentWeek(curr));
                    let lastday = formatDate(getSundayOfCurrentWeek(curr));
                    if (firstday <= formatDate(result[i].orderDate) && lastday >= formatDate(result[i].orderDate)) {
                        sevevDayData.push(result[i])
                    }
                }
                res.status(201).json({
                    success: true,
                    data: sevevDayData || {}
                })
            }
        })
        .catch(err => {
            console.log('xxx x xxx', err)
            res.status(400).json({
                success: false,
                error: err
            })
        })
}
exports.MonthOrder = (req, res, next) => {
    Order.find({})
        .then(result => {
            if (result) {
               
                res.status(201).json({
                    success: true,
                    data: result || {}
                })
            }
        })
        .catch(err => {
            console.log('xxx x xxx', err)
            res.status(400).json({
                success: false,
                error: err
            })
        })
}


function formatDate(date) {
    const eventDate = new Date(date)
    const monthIndex = ('0' + (eventDate.getMonth() + 1)).slice(-2)
    const day = ('0' + eventDate.getDate()).slice(-2)
    const year = eventDate.getFullYear()
    return year + '-' + monthIndex + '-' + day
}

function getMondayOfCurrentWeek(d) {
    var day = d.getDay();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day == 0 ? -6 : 1) - day);
}
function getSundayOfCurrentWeek(d) {
    var day = d.getDay();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() + (day == 0 ? 0 : 7) - day);
}





