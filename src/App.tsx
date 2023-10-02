import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import router from '@/router';
import GlobalStyle from '@/styles/GlobalStyles';
import theme from '@/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
