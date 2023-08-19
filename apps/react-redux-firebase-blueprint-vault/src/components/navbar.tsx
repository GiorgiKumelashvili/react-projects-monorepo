import { useNavigate } from 'react-router-dom';
import { Alignment, Button, Navbar } from '@blueprintjs/core';
import { useAuthContext } from '../auth/auth-hooks';

export const RootNavbar = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  return (
    <>
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            Firebase & Redux & Blueprint
          </Navbar.Heading>
          <Navbar.Divider />

          <Button minimal icon="search" intent="none" />
          <Button minimal icon="moon" intent="none" />
          <Button minimal icon="notifications" intent="none" />
          <Button minimal icon="fullscreen" intent="none" />
          <Button minimal icon="translate" intent="primary" />
          <Button
            minimal
            icon="user"
            intent="success"
            text={user?.displayName ?? 'Profile'}
            onClick={() => navigate('/profile')}
          />
        </Navbar.Group>
      </Navbar>
    </>
  );
};
