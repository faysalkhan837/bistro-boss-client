import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";

// eslint-disable-next-line react-refresh/only-export-components
const axiousSecure = axios.create({
   baseURL: 'http://localhost:5000'
})
const UseAxiousSecure = () => {
   const navigate = useNavigate();
   const { logOut } = UseAuth()
   axiousSecure.interceptors.request.use(function (config) {
      const token = localStorage.getItem('access-token')
      // console.log('request stoped by interseptor', token)
      config.headers.authorization = `Bearer ${token}`
      return config;
   }, function (error) {
      // do something with request error
      return Promise.reject(error);
   })
   //  intercepts 401 and 403 status
   axiousSecure.interceptors.response.use(function (response) {
      return response;
   }, async (error) => {
      console.log(error)
      const status = error.response.status;
      // for 401 or 403 logOut the user and move to the login
      if(status === 401 || status === 403){
         await logOut();
         navigate('/login');
      }
      return Promise.reject(error);
   })
   return axiousSecure;
};

export default UseAxiousSecure;