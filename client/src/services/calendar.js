import axios from 'axios';
import { url } from '../config/url'
import decode from 'jwt-decode';
import AuthService from '../services/authService'


export default class Calendar extends AuthService {
      constructor() {
            super();
      }

      getTodayOrder() {
            return axios.get(`${url.TODAY_ORDER}`)
                  .then(res => {
                        return res.data;
                  }).catch(err => {
                        console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);
                  })
      }
      getWeekOrder() {
            return axios.get(`${url.WEEK_ORDER}`)
                  .then(res => {
                        return res.data;
                  }).catch(err => {
                        console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);
                  })
      }

      getMonthOrder() {
            return axios.get(`${url.MONTH_ORDER}`)
                  .then(res => {
                        return res.data;
                  }).catch(err => {
                        console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);
                  })
      }



}
