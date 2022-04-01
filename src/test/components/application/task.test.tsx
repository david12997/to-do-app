import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from './../../../components/theme';
import { Search} from './../../../components/application/task';

test('InputTask must contain text', () => {
    
    render(<ThemeProvider theme={theme}><Search user='Pepito' setBoard=''/></ThemeProvider>);
    const InputTask = screen.getByText(/¡Hello Pepito! add your task here/i);
    expect(InputTask).toBeInTheDocument();

});

 
test('InputTask must contain element input', async () => {
    
    render(<ThemeProvider theme={theme}><Search user='Pepito' setBoard=''/></ThemeProvider>);
    const InputTask = screen.queryByTestId("input-task");
    expect(InputTask).toBeInTheDocument();
   
});
