import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import RoutesConfig from './components/RoutesConfig';
import Sales from './components/Sales';
import i18n from './components/SelectBoxes/Translations';

function App() {
    const [loading, setLoading] = useState(true);
    const location = useLocation(); // Get the current path

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading delay
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const updateDirection = () => {
            const direction = i18n.dir();
            document.documentElement.setAttribute('dir', direction);
        };

        updateDirection();
        i18n.on('languageChanged', updateDirection);

        return () => {
            i18n.off('languageChanged', updateDirection);
        };
    }, []);

    // Define paths where the Navbar and Footer should not be displayed
    const hideNavbarAndFooter = ['/categories/signin'].includes(location.pathname);

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <>
            {/* Conditionally render Navbar */}
            {!hideNavbarAndFooter && <Navbar />}

            {location.pathname === '/categories' && <Sales />}
            <ScrollToTop />
            <RoutesConfig />

            {/* Conditionally render Footer */}
            {!hideNavbarAndFooter && <Footer />}
        </>
    );
}

export default App;
