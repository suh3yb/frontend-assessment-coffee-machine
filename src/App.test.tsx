import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

jest.setTimeout(10000);

const renderAndWaitForCoffeeTypes = async () => {
  render(<App />);
  await waitFor(
    () => {
      expect(screen.queryByText('Dark Roasted Beans')).not.toBeInTheDocument();
    },
    { timeout: 10000 }
  );
  await waitFor(() => {
    expect(screen.getByText('Brew with Lex')).toBeInTheDocument();
  });
};

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
    await renderAndWaitForCoffeeTypes();

    expect(screen.getByText('Brew with Lex')).toBeInTheDocument();
    expect(screen.getByText('Select your style')).toBeInTheDocument();
    expect(screen.getByText('Ristretto')).toBeInTheDocument();
    expect(screen.getByText('Espresso')).toBeInTheDocument();
    expect(screen.getByText('Cappuccino')).toBeInTheDocument();
  });

  it('renders coffee size and extras when a type is selected', async () => {
    await renderAndWaitForCoffeeTypes();

    fireEvent.click(screen.getByText('Ristretto'));
    await waitFor(() => {
      expect(screen.getByText('Large')).toBeInTheDocument();
    });
    expect(screen.getByText('Select your size')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Large'));
    await waitFor(() => {
      expect(
        screen.getByText('Select the amount of sugar')
      ).toBeInTheDocument();
    });
  });

  it('renders correct overview after all selections', async () => {
    await renderAndWaitForCoffeeTypes();

    fireEvent.click(screen.getByText('Ristretto'));
    await waitFor(() => {
      expect(screen.getByText('Large')).toBeInTheDocument();
    });
    expect(screen.getByText('Select your size')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Large'));
    await waitFor(() => {
      expect(
        screen.getByText('Select the amount of sugar')
      ).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Select the amount of sugar'));
    await waitFor(() => {
      expect(screen.getByText('Normal')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Normal'));
    await waitFor(() => {
      expect(screen.getByText('Overview')).toBeInTheDocument();
    });
  });
});
