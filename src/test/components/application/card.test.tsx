import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from './../../../components/theme';
import { Card} from './../../../components/application/card';

test('card must contain text', () => {
    
    render(<ThemeProvider theme={theme}><Card do='hola mundo' status='' date={new Date(2022, 1, 1).toISOString()} idTask={5} setBoard="" user='Pepeito'/></ThemeProvider>);
    const card = screen.getByText(/hola mundo/i);
    expect(card).toBeInTheDocument();

});

 
test('card must contain element status task', async () => {
    
    render(<ThemeProvider theme={theme}><Card do='hola mundo' status='' date={new Date(2022, 1, 1).toISOString()} idTask={5} setBoard="" user='Pepeito'/></ThemeProvider>);
    const card = screen.queryByTestId("status-task");
    expect(card).toBeInTheDocument();
   
});

test('card must contain element select', async () => {
    
    render(<ThemeProvider theme={theme}><Card do='hola mundo' status='' date={new Date(2022, 1, 1).toISOString()} idTask={5} setBoard="" user='Pepeito'/></ThemeProvider>);
    const card = screen.queryByTestId("select");
    expect(card).toBeInTheDocument();
   
});

test('card must contain element btn edit', async () => {
    
    render(<ThemeProvider theme={theme}><Card do='hola mundo' status='' date={new Date(2022, 1, 1).toISOString()} idTask={5} setBoard="" user='Pepeito'/></ThemeProvider>);
    const card = screen.queryByTestId("btn-edit");
    expect(card).toBeInTheDocument();
   
});

test('card must contain element btn delete', async () => {
    
    render(<ThemeProvider theme={theme}><Card do='hola mundo' status='' date={new Date(2022, 1, 1).toISOString()} idTask={5} setBoard="" user='Pepeito'/></ThemeProvider>);
    const card = screen.queryByTestId("btn-delete");
    expect(card).toBeInTheDocument();
   
});

test('card must contain element date', async () => {
    
    render(<ThemeProvider theme={theme}><Card do='hola mundo' status='' date={new Date(2022, 1, 1).toISOString()} idTask={5} setBoard="" user='Pepeito'/></ThemeProvider>);
    const card = screen.queryByTestId("date");
    expect(card).toBeInTheDocument();
   
});