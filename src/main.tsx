import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import {QueryClient,QueryClientProvider} from "@tanstack/react-query";
import ContextGlobal from './Component/globalState/Context';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextGlobal>
      <QueryClientProvider client={queryClient}>
          <App />
      </QueryClientProvider>
    </ContextGlobal>
  </StrictMode>,
)
