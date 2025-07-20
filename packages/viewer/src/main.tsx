import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import './global.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './app/app';
import axios from 'axios';
import { API_URI } from './dynamic-env.config';

axios.defaults.baseURL = API_URI;
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
