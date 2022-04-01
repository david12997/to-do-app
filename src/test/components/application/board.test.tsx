import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from './../../../components/theme';
import {Board} from './../../../components/application/board';

test('board must contain text when is empty', () => {
    
    const tasks = {
        tasks:[]
    }
    render(<ThemeProvider theme={theme}><Board user='' setBoard='' tasks={tasks}/></ThemeProvider>);
    const board = screen.getByText("You don't have any task yet");
    expect(board).toBeInTheDocument();

});