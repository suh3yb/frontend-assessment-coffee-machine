import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

jest.setTimeout(10000);

describe('App', () => {
  it('renders landing page initially => title, subtitle, link', () => {
    render(<App />);
    const title = screen.getByText('Dark Roasted Beans');
    const subtitle = screen.getByText('Tab the machine to start');
    const link = screen.getByText('How does this work?');

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });

  it('renders coffee types when data is fetched', async () => {
    render(<App />);
    await waitFor(
      () => {
        expect(
          screen.queryByText('Dark Roasted Beans')
        ).not.toBeInTheDocument();
      },
      { timeout: 10000 }
    );
    await waitFor(() => {
      expect(screen.getByText('Brew with Lex')).toBeInTheDocument();
    });

    expect(screen.getByText('Brew with Lex')).toBeInTheDocument();
    expect(screen.getByText('Select your style')).toBeInTheDocument();
    expect(screen.getByText('Ristretto')).toBeInTheDocument();
    expect(screen.getByText('Espresso')).toBeInTheDocument();
    expect(screen.getByText('Cappuccino')).toBeInTheDocument();
  });
});
