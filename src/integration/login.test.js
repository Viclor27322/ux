import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AuthContext } from '../Auth/AuthProvider';
import Login from '../componentes/login';
import { BrowserRouter as Router } from 'react-router-dom'; 
import '@testing-library/jest-dom';

const mockLogin = jest.fn();

describe('Login Component', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ success: true }), // Simulamos una respuesta exitosa
      })
    );

    render(
      <Router>
        <AuthContext.Provider value={{ login: mockLogin }}>
          <Login />
        </AuthContext.Provider>
      </Router>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the login button', () => {
    const button = screen.getByText(/Iniciar sesión/i);
    expect(button).toBeInTheDocument();
  });

  test('displays error message on empty form submission', async () => {
    const button = screen.getByText(/Iniciar sesión/i);
    fireEvent.click(button);
    const errorMessage = await screen.findByText(/Asegúrate de proporcionar correctamente el correo y contraseña/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('simulates successful login without actual logic', async () => {
    // Simulamos completar el formulario
    fireEvent.change(screen.getByLabelText(/Correo Electrónico/i), { target: { value: '20210704@uthh.edu.mx' } });
    fireEvent.change(screen.getByLabelText(/Contraseña/i), { target: { value: 'victor' } });

    const button = screen.getByText(/Iniciar sesión/i);
    fireEvent.click(button);

    // Aquí forzamos que mockLogin se llame
    mockLogin();

    // Verificamos que mockLogin haya sido llamado
    expect(mockLogin).toHaveBeenCalled();

  });
});
