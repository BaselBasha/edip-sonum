import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App.tsx';
import store from './redux/store'; // Your Redux store
import i18n from "./components/SelectBoxes/Translations.ts";
import { ChakraProvider } from '@chakra-ui/react'
import { I18nextProvider } from "react-i18next";
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ChakraProvider>
            <Provider store={store}>
                <I18nextProvider i18n={i18n}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </I18nextProvider>
            </Provider>
        </ChakraProvider>
    </StrictMode>
);
