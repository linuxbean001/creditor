import axios from 'axios';
import { url } from '../config/url'
import decode from 'jwt-decode';


export default class AuthService {
   constructor() {
   }

   registerInfo(userInfoVo) {
      return axios.post(`${url.ADD_USERS}`, userInfoVo)
         .then(res => {
            return res.data;
         }).catch(err => {
            console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);
         })
   }

   loginInfo(userInfoVo) {
      return axios.post(`${url.USER_LOGIN}`, userInfoVo)
         .then(res => {
            return res.data;
         }).catch(err => {
            console.log('xxxxxxxxx xxxxxxxxxxxxx error ' + err);
         })
   }

   getProfile() {
      let res =''
         if(localStorage.getItem('token')==null){

         }else{
            res = decode(localStorage.getItem('token'));
         }
    
      return res
   }

   getToken() {
      // Retrieves the user token from localStorage
      let token = '';
      if (localStorage.getItem('token')) {
         token = JSON.parse(localStorage.getItem('token'));
      }
      return token
   }

   setTokenToRequest() {
      if (this.getToken()) {
         return axios.defaults.headers['Authorization'] = 'Bearer ' + this.getToken();

      } else {
         return axios.defaults.headers['Authorization'] = null;
      }
   }


}
