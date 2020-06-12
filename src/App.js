import React, { useState } from 'react';
import './App.css';
import Routes from './routes'

import { ThemeProvider } from 'styled-components';
import light from './themes/light'

function App() {
  const [theme, setTheme] = useState(light);

  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  );
}

export default App;
