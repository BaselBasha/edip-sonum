import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import SelectLanguages from "./SelectBoxes/Languages";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import LoadingImage from '../../public/loadingscreen/loading.jpg';


const Navbar: React.FC = () => {
    const { t } = useTranslation();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className="w-full p-4 flex items-center h-32 bg-white text-black text-3xl">
            <div className="flex flex-1 items-center">
                {/* Left Section: Language Selector */}
                <div className="flex items-center text-6xl cursor-pointer text-purple-950">
                    <SelectLanguages />
                </div>

                {/* Center Section: Logo */}
                <div className="flex flex-1 justify-center items-center">
                    <div className="flex flex-col items-center">
                        <Link to="/" className="font-bold text-yellow-500 flex items-center">
                            <img
                                className="w-20 h-20 rounded-full"
                                src={LoadingImage}
                                alt={t("Logo")}
                            />
                        </Link>
                    </div>
                </div>

                {/* Right Section: Cart Icon and Cart */}
                <Link to="/cart" className="relative flex items-center text-2xl gap-1 text-purple-950">
                    <FaShoppingCart />
                    {itemCount > 0 && (
                        <span className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                            {itemCount}
                        </span>
                    )}
                    {t("Cart")}
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
