import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';


test('renders a simple component', () => {
  const { getByText } = render(<div>Hello World</div>);
  expect(getByText(/Hello World/i)).toBeInTheDocument();
});
