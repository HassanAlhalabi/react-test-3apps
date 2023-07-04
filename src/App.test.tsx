import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';
import { expect } from 'vitest';

describe('App Component Tests', () => {
  it('Initial Render Main App', () => {
    render(<App />);
    const countButton = screen.getByTestId('count-button')
    expect(countButton).toHaveTextContent('0');
  });

  it('Counter Increament', () => {
    render(<App />);
    const countButton = screen.getByRole('count-button')
    fireEvent(countButton,new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))
    fireEvent(countButton,new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))
  
    expect(countButton).toHaveTextContent('2');
  
  });

});