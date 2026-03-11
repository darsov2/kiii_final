import { render, screen, act } from '@testing-library/react';
import { AuthProvider, useAuth } from './AuthContext';

const TestConsumer = () => {
  const { userIsAuthenticated, userLogin, userLogout, getUser } = useAuth();
  return (
    <div>
      <span data-testid="auth-status">
        {userIsAuthenticated() ? 'logged-in' : 'logged-out'}
      </span>
      <span data-testid="user-name">
        {getUser() ? getUser().name : 'none'}
      </span>
      <button onClick={() => userLogin({ id: 1, name: 'Alice', role: 'USER' })}>
        Login
      </button>
      <button onClick={() => userLogout()}>Logout</button>
    </div>
  );
};

beforeEach(() => {
  localStorage.clear();
});

test('initially shows logged-out when no user in storage', () => {
  render(
    <AuthProvider>
      <TestConsumer />
    </AuthProvider>
  );

  expect(screen.getByTestId('auth-status')).toHaveTextContent('logged-out');
  expect(screen.getByTestId('user-name')).toHaveTextContent('none');
});

test('userLogin stores user and updates auth status to logged-in', () => {
  render(
    <AuthProvider>
      <TestConsumer />
    </AuthProvider>
  );

  act(() => {
    screen.getByText('Login').click();
  });

  expect(screen.getByTestId('auth-status')).toHaveTextContent('logged-in');
  expect(JSON.parse(localStorage.getItem('user'))).toMatchObject({ id: 1, name: 'Alice' });
});

test('userLogout clears user and updates auth status to logged-out', () => {
  localStorage.setItem('user', JSON.stringify({ id: 1, name: 'Alice', role: 'USER' }));

  render(
    <AuthProvider>
      <TestConsumer />
    </AuthProvider>
  );

  act(() => {
    screen.getByText('Logout').click();
  });

  expect(screen.getByTestId('auth-status')).toHaveTextContent('logged-out');
  expect(localStorage.getItem('user')).toBeNull();
});

test('getUser returns stored user object', () => {
  localStorage.setItem('user', JSON.stringify({ id: 2, name: 'Bob', role: 'USER' }));

  render(
    <AuthProvider>
      <TestConsumer />
    </AuthProvider>
  );

  expect(screen.getByTestId('user-name')).toHaveTextContent('Bob');
});
