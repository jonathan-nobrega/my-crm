import { useState } from 'react';



export function getToken() {
  const tokenString = localStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
};

export function saveToken(userToken) {
  localStorage.setItem('token', JSON.stringify(userToken));
  return userToken.token
};



// export default function useToken() {

//   console.log('entrou no useToken')
//   const getToken = () => {
//     const tokenString = localStorage.getItem('token');
//     const userToken = JSON.parse(tokenString);
//     return userToken?.token
//   };

//   const [token, setToken] = useState(getToken());

//   const saveToken = userToken => {
//     localStorage.setItem('token', JSON.stringify(userToken));
//     setToken(userToken.token);
//   };

//   return {
//     setToken: saveToken,
//     token
//   }
// }