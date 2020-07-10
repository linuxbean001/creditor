
// const domain = 'http://localhost:3300';
const domain = 'http://ec2-54-91-244-142.compute-1.amazonaws.com';

exports.url = {
    ADD_USERS: ` ${domain}/register/user`,
    USER_LOGIN: `${domain}/login/authenticate`,

    ADD_ORDER: `${domain}/order/add`,
    LIST_ORDER: `${domain}/order/list/`,
    LIST_ALL_ORDER: `${domain}/order/alllist`,

    //calander
    TODAY_ORDER: `${domain}/order/today`,
    WEEK_ORDER: `${domain}/order/week`,
    MONTH_ORDER: `${domain}/order/month`,


}
