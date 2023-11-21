import axios from 'axios';

const API_KEY = 'AIzaSyAXBhAqoBmXqUSuXTTwttxzmwCStHQC_ZE';

const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const rsp = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  console.log('*** rsp: ', rsp.data);
};

export const createUser = async (email, password) => {
  const rsp = await authenticate('signUp', email, password);
};

export const login = async (email, password) => {
  const rsp = await authenticate('signInWithPassword', email, password);
};
