export function getToken() {
  const tokenString = localStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
};

export function saveToken(userToken) {
  localStorage.setItem('token', JSON.stringify(userToken));
  return userToken.token
};