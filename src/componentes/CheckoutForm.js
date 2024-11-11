import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

export default function CheckoutForm({ cita, onPaymentSuccess }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false); // Estado para la carga
  const [message, setMessage] = useState(''); // Estado para mensajes de error o éxito

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      // Llama al backend para obtener el clientSecret
      const response = await fetch('https://rest-api2-three.vercel.app/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 10000, pacienteId: cita.IdPaciente }), // Ajusta el monto según sea necesario
      });

      const { clientSecret } = await response.json();

      // Confirma el pago en Stripe
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
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? 'Procesando...' : 'Pagar y Agendar Cita'}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}
