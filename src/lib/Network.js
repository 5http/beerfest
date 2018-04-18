import axios from 'axios';

class Network {
  static getUrl(route) {
    return `${process.env.REACT_APP_API_HOST}/${route}`;
  }

  static basicHeaders() {
    const headers = {};
    headers['Content-Type'] = 'application/json';
    headers['Accept'] = 'application/json';
    return headers;
  }

  static errorHandler({error}) {
    throw error;
  }

  static async get(route) {
    try {
      const headers = this.basicHeaders();
      const result = await axios.get(this.getUrl(route), { headers });
      return result.data;
    } catch (err) {
      this.errorHandler(err);
    }
  }

  static async put(route, body = {}) {
    try {
      const headers = this.basicHeaders();
      const result = await axios.put(this.getUrl(route), body, { headers });
      return result.data;
    } catch (err) {
      this.errorHandler(err);
    }
  }

  static async patch(route, body = {}) {
    try {
      const headers = this.basicHeaders();
      const result = await axios.patch(this.getUrl(route), body, { headers });
      return result.data || true;
    } catch (err) {
      this.errorHandler(err);
    }
  }

  static async post(route, body = {}) {
    try {
      const headers = this.basicHeaders();
      const result = await axios.post(this.getUrl(route), body, { headers });
      return result.data;
    } catch (err) {
      this.errorHandler(err);
    }
  }

  static async delete(route) {
    try {
      const headers = this.basicHeaders();
      const result = await axios.delete(this.getUrl(route), { headers });
      return result.data || true;
    } catch (err) {
      this.errorHandler(err);
    }
  }
}

export default Network;