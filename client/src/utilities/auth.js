import decode from 'jwt-decode';

class AuthService {
  // Decode the token and get user information
  getUser() {
    return decode(this.getToken());
  }

  getUserId() {
    const token = this.getToken();
    if (!token) return null;

    try {
      const decoded = decode(token);
      return decoded ? decoded.userId : null;
    } catch (error) {
      console.error('error decoding token', error.message);
      return null;
    }
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
    return localStorage.getItem('authToken');
  }

  // Store the token in localStorage
  login(authToken, userData) {
    localStorage.setItem('authToken', authToken);
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log('Token stored:', authToken);
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
  }
}

export default new AuthService();
