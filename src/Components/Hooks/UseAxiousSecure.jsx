import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
 const axiousSecure = axios.create({
    baseURL:'http://localhost:5000'
})
const UseAxiousSecure = () => {
    
   return axiousSecure;
};

export default UseAxiousSecure;