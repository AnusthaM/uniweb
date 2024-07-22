import axios from "axios"

const axiosInstance = axios.create( {
     baseURL: import.meta.env.VITE_API_URL,
     timeout: 30000,
     timeoutErrorMessage: "Server timed out",
     headers: {
          "Content-Type": "application/json"
     }
} )

axiosInstance.interceptors.response.use( ( response: any ) => {
     // console.log( "SucessIntercept: ", response )
     return response.data;

}, ( error: any ) => {
     // console.error( "ExceptionIntercept: ", error );
     // throw error
     if ( error.code === "ERR_BAD_REQUEST" ) {
          throw error.response;
     } else {

     }
} )

export default axiosInstance