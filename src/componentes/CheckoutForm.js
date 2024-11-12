import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import '../css/checkform.css';

export default function CheckoutForm({ cita, onPaymentSuccess }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('https://rest-api2-three.vercel.app/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 1000, pacienteId: cita }),
      });

      const { clientSecret } = await response.json();

      // Confirmar el pago
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      });

      if (result.error) {
        setMessage(`Error: ${result.error.message}`);
      } else if (result.paymentIntent.status === 'succeeded') {
        setMessage('Pago exitoso. Su cita ha sido agendada.');
        onPaymentSuccess(); // Llama a la función para agendar la cita
      }
    } catch (error) {
      setMessage('Hubo un error al procesar el pago.');
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
  <CardElement className="StripeElement" />
  <button type="submit" disabled={!stripe || loading}>
    {loading ? 'Procesando...' : 'Pagar y Agendar Cita'}
  </button>
  {message && <p>{message}</p>}
</form>

  );
}


/* global Conekta */
/*
// src/components/CheckoutForm.js
import React, { useState } from 'react';
import axios from 'axios';

const CheckoutForm = ({ cita, onPaymentSuccess }) => {
  const [cardData, setCardData] = useState({
    name: '',
    number: '',
    exp_month: '',
    exp_year: '',
    cvc: '',
    email: ''
  });

  const handleChange = (e) => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Inicializa Conekta con tu clave pública
      Conekta.setPublicKey('key_AI7GLoGBLTuD4oO8vuV0WUr'); // Cambia esto por tu clave pública
  
      // Genera el token de la tarjeta
      Conekta.Token.create(
        { card: cardData },
        async (token) => {
          try {
            const response = await axios.post(
              'http://localhost:3001/api/payments/create-order',
              {
                token: token.id,
                amount: 10000,
                currency: 'MXN',
                name: cardData.name,
                email: cardData.email,
              }
            );
            alert(response.data.message);
          } catch (error) {
            console.error('Error en la solicitud de pago:', error);
            alert('Error al procesar el pago');
          }
        },
        (error) => {
          console.error('Error al generar el token:', error);
          alert(`Error al generar el token: ${error.message}`);
        }
      );
    } catch (error) {
      console.error('Error inesperado:', error);
      alert('Error inesperado. Por favor, intenta nuevamente.');
    }
  };
  
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nombre en la tarjeta"
        value={cardData.name}
        onChange={handleChange}
      />
      <input
  type="email"
  name="email"
  placeholder="Correo Electrónico"
  value={cardData.email}
  onChange={handleChange}
/>
      <input
        type="text"
        name="number"
        placeholder="Número de tarjeta"
        value={cardData.number}
        onChange={handleChange}
      />
      <input
        type="text"
        name="exp_month"
        placeholder="Mes de expiración"
        value={cardData.exp_month}
        onChange={handleChange}
      />
      <input
        type="text"
        name="exp_year"
        placeholder="Año de expiración"
        value={cardData.exp_year}
        onChange={handleChange}
      />
      <input
        type="text"
        name="cvc"
        placeholder="CVC"
        value={cardData.cvc}
        onChange={handleChange}
      />
      <button type="submit">Pagar</button>
    </form>
  );
};

export default CheckoutForm;
*/