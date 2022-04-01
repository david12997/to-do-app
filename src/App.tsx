import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { Board } from './components/application/board';

import { Nav } from './components/application/nav';
import { Search } from './components/application/task';
import { Page, theme } from './components/theme';
import { Head } from './components/landing/head';
import { User } from './components/landing/user';
import { Section } from './components/landing/section';
import { Footer } from './components/footer';



function App():JSX.Element {

  const [user, setUser ] = useState< string | null>(null);
  const [board, setBoard] = useState <object | any >(null);


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {
          user === null ?
          <Page>
            <Head/>
            <User setUser={setUser} />
            <Section/>
            <Footer/>
          </Page>
          :
          <Page>
            <Nav setBoard={setBoard} setUser={setUser}/>
            <Search user={user} setBoard={setBoard} />
            <Board  setBoard={setBoard} user={user} tasks={board}></Board>
            <Footer/>
          </Page>

        }
      </ThemeProvider>

    </div>
  );
}

export default App;
