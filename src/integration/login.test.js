import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login'; // Ajusta la ruta según tu estructura
import { AuthContext } from '../Auth/AuthProvider'; // Asegúrate de importar el contexto

describe('Login Component', () => {
  const mockLogin = jest.fn();

  beforeEach(() => {
    render(
      <AuthContext.Provider value={{ login: mockLogin }}>
        <Login />
      </AuthContext.Provider>
    );
  });

  test('renders the login button', () => {
    const loginButton = screen.getByRole('button', { name: /iniciar sesión/i });
    expect(loginButton).toBeInTheDocument();
  });

  test('displays error message on empty form submission', async () => {
    const loginButton = screen.getByRole('button', { name: /iniciar sesión/i });
    fireEvent.click(loginButton);

    const errorMessage = await screen.findByText(/Asegúrate de proporcionar correctamente el correo y contraseña/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('calls login function on successful login', async () => {
    const emailInput = screen.getByPlaceholderText(/ingresa el correo electrónico/i);
    const passwordInput = screen.getByPlaceholderText(/ingresa la contraseña/i);
    const loginButton = screen.getByRole('button', { name: /iniciar sesión/i });

    // Simula ingresar email y contraseña
    fireEvent.change(emailInput, { target: { value: '20210704@uthh.edu.mx' } });
    fireEvent.change(passwordInput, { target: { value: 'victor' } });

    // Simula el clic en el botón de inicio de sesión
    fireEvent.click(loginButton);

    // Asegúrate de que la función de inicio de sesión se haya llamado
    expect(mockLogin).toHaveBeenCalledTimes(1);
  });
});
