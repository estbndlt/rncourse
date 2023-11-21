import { useContext, useState } from 'react';
import { Alert } from 'react-native';

import { login } from '../util/auth';

import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  const loginHandler = async ({ email, password }) => {
    setIsAuthenticating(true);

    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Auth Fail',
        'Could not log in. Check your credentials or try again later.'
      );
    }

    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging in user..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
