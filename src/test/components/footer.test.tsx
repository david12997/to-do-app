import { render, screen } from '@testing-library/react';
import  { Footer } from './../../components/footer';
import { ThemeProvider } from 'styled-components';
import { theme } from './../../components/theme';

test('footer must contain ', () => {
  render(<ThemeProvider theme={theme}><Footer /></ThemeProvider>);
  const footer = screen.getByText(/Developed by David Castañeda/i);
  expect(footer).toBeInTheDocument();
});
