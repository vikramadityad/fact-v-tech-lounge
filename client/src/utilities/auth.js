import decode from 'jwt-decode';

class AuthService {
  // Decode the token and get user information
  getUser() {
    return decode(this.getToken());
  }

  // Check if the user is logged in
  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token);
  }

  // Check if the token is expired
  isTokenExpired(token) {
    const decoded = decode(token);
    return decoded.exp < Date.now() / 1000;
  }

  // Get the token from localStorage
  getToken() {
    return localStorage.getItem('id_token');
  }

  // Store the token in localStorage
  login(idToken) {
    localStorage.setItem('id_token', idToken);
  }


  logout() {
    localStorage.removeItem('id_token');
  }
}

export default new AuthService();
