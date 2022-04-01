import { render, screen } from '@testing-library/react';
import  { Nav } from './../../../components/application/nav';
import { ThemeProvider } from 'styled-components';
import { theme } from './../../../components/theme';

 



test('nav must contain tet', () => {
    
    render(<ThemeProvider theme={theme}><Nav setBoard="" setUser="" /></ThemeProvider>);
    const nav = screen.getByText(/what do you need to do today?/i);
    expect(nav).toBeInTheDocument();

});

 
test('nav must contain element icon arrow', async () => {
    
    render(<ThemeProvider theme={theme}><Nav setBoard="" setUser="" /></ThemeProvider>);
    const nav = screen.queryByTestId("arrow");
    expect(nav).toBeInTheDocument();
   
});

