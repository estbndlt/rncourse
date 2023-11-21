import axios from 'axios';

const API_KEY = 'AIzaSyAXBhAqoBmXqUSuXTTwttxzmwCStHQC_ZE';

export const createUser = async (email, password) => {
  const rsp = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );

  console.log('*** rsp: ', rsp);
};
