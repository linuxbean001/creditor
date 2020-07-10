import axios from 'axios';
import { url } from '../config/url'
import decode from 'jwt-decode';
import AuthService from '../services/authService'


export default class Order extends AuthService {
      constructor() {
            super();
      }

      addOrder(addOrder) {
            return axios.post(`${url.ADD_ORDER}`, addOrder)
                  .then(res => {
                        return res.data;
                  }).catch(err => {
                        console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);
                  })
      }

      listOrder(userId) {
            return axios.get(`${url.LIST_ORDER + userId}`)
                  .then(res => {
                        return res.data;
                  }).catch(err => {
                        console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);
                  })
      }

      listAllOrder() {
            return axios.get(`${url.LIST_ALL_ORDER}`)
                  .then(res => {
                        return res.data;
                  }).catch(err => {
                        console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);
                  })
      }

}
