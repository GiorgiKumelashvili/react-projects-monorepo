import { Button } from '@blueprintjs/core';
import { useAuthContext } from '../auth/auth-hooks';
import { showErrorMessage } from '../helper/toast';
import { handleFirebaseError } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { SIGN_IN_PATH } from '../router';

export const Profile = () => {
  const { user, signOut } = useAuthContext();
  const navigate = useNavigate();

  const WebSignOut = async () => {
    try {
      await signOut();
      navigate(SIGN_IN_PATH);
    } catch (e: unknown) {
      showErrorMessage(handleFirebaseError(e));
    }
  };

  return (
    <>
      <p>email: {user?.email}</p>
      <p>displayName: {user?.displayName}</p>
      <p>uid: {user?.uid}</p>
      <p>emailVerified: {user?.emailVerified}</p>
      <p>photoURL: {user?.photoURL}</p>
      <br />
      <Button icon="log-out" intent="primary" text="Sign out" onClick={WebSignOut} />
    </>
  );
};
