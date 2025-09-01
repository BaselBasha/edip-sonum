import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { incrementQuantity, decrementQuantity, removeItem } from '../redux/cartSlice';
import ReceiptAndButton from './ReceiptAndButton';
import { FaTrash } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Cart: React.FC = () => {
    const { t } = useTranslation();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const handleIncrement = (id: string, size: string) => {
        dispatch(incrementQuantity({ id, size }));
    };

    const handleDecrement = (id: string, size: string) => {
        dispatch(decrementQuantity({ id, size }));
    };

    const handleRemove = (id: string, size: string) => {
        dispatch(removeItem({ id, size }));
    };

    const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    const generateReceiptText = () => {
        let receiptText = `${t('Receipt')}:\n`;
        cartItems.forEach(item => {
            receiptText += `${item.name} ${item.quantity} x ${item.price} ${t('tl')} = ${(item.price * item.quantity).toFixed(2)} ${t('tl')}\n`;
        });
        receiptText += `${t('Total')}: ${totalAmount.toFixed(2)} ${t('tl')}\n\n${t('Thank you for your order!')}`;
        return receiptText;
    };

    const handlePlaceOrder = (receiptText: string) => {
        const encodedReceiptText = encodeURIComponent(receiptText);
        const phoneNumber = '905377177719';
        const url = `https://wa.me/${phoneNumber}?text=${encodedReceiptText}`;
        window.open(url, '_blank');
    };

    const isCartEmpty = cartItems.length === 0;

    return (
        <div className="p-4 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">{t('Shopping Cart')}</h2>
            <div className="overflow-x-auto">
                <table className="w-full max-w-5xl border-2 border-gray-300 mb-4">
                    <thead>
                    <tr>
                        <th className="border-2 border-gray-300 px-1 py-2 w-1/12">{t('Photo')}</th>
                        <th className="border-2 border-gray-300 px-2 py-2 w-2/12">{t('Name')}</th>
                        <th className="border-2 border-gray-300 px-2 py-2 w-2/12">{t('Quantity')}</th>
                        <th className="border-2 border-gray-300 px-2 py-2 w-2/12">{t('Total')}</th>
                        <th className="border-2 border-gray-300 px-2 py-2 w-1/12">{t('Actions')}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.map(item => (
                        <tr key={`${item.id}-${item.size}`}>
                            <td className="border-2 border-gray-300 px-2 py-2">
                                <img src={item.icon} alt={item.name} className="w-16 h-16 object-cover" />
                            </td>
                            <td className="border-2 border-gray-300 px-2 py-2">{item.name}</td>
                            <td className="border-2 border-gray-300 px-2 py-2">
                                <div className="flex items-center justify-center">
                                    <button
                                        className="bg-yellow-500 text-black font-semibold py-1 px-2 rounded hover:bg-yellow-400 w-6 h-6 flex items-center justify-center"
                                        onClick={() => handleDecrement(item.id, item.size)}
                                    >
                                        -
                                    </button>
                                    <span className="px-2">{item.quantity}</span>
                                    <button
                                        className="bg-yellow-500 text-black font-semibold py-1 px-2 rounded hover:bg-yellow-400 w-6 h-6 flex items-center justify-center"
                                        onClick={() => handleIncrement(item.id, item.size)}
                                    >
                                        +
                                    </button>
                                </div>
                            </td>
                            <td className="border-2 border-gray-300 px-2 py-2">{(item.price * item.quantity).toFixed(2)} {t('tl')}</td>
                            <td className="border-2 border-gray-300 px-2 py-2 items-center justify-center">
                                <button
                                    className="bg-purple-950 text-white font-semibold py-1 px-2 rounded items-center ml-4 hover:bg-purple-800"
                                    onClick={() => handleRemove(item.id, item.size)}
                                >
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <ReceiptAndButton
                cartItems={cartItems}
                handlePlaceOrder={() => {
                    const receiptText = generateReceiptText();
                    handlePlaceOrder(receiptText);
                }}
                isCartEmpty={isCartEmpty}
            />
        </div>
    );
}

export default Cart;
