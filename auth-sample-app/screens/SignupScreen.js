import { useState } from 'react';
import { Alert } from 'react-native';

import { createUser } from '../util/auth';

import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const signUpHandler = async ({ email, password }) => {
    setIsAuthenticating(true);

    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert(
        'Auth Fail',
        'Could not log in. Check your credentials or try again later.'
      );
    }

    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
