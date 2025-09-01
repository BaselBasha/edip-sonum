import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface ReceiptAndButtonProps {
    cartItems: { id: string; name: string; price: number; size: string; icon: string; quantity: number }[];
    handlePlaceOrder: () => void;
    isCartEmpty: boolean;
}

const ReceiptAndButton: React.FC<ReceiptAndButtonProps> = ({ cartItems, handlePlaceOrder, isCartEmpty }) => {
    const { t } = useTranslation();

    const generateReceiptText = () => {
        let receiptText = `${t('Receipt')}:\n`;
        cartItems.forEach(item => {
            receiptText += `${item.name} ${item.quantity} x ${item.price} ${t('currency')} = ${(item.price * item.quantity).toFixed(2)} ${t('tl')}\n`;
        });
        receiptText += `${t('Total')}: ${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)} ${t('tl')}\n\n${t('Thank you for your order!')}`;
        return receiptText;
    };

    return (
        <div className="flex flex-col items-center mt-4">
            {isCartEmpty ? (
                <p>{t('Your cart is empty.')}</p>
            ) : (
                <div className="w-full max-w-lg"> {/* Changed max-w-md to max-w-lg */}
                    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
                        <h3 className="text-lg font-bold mb-2">{t('Receipt')}</h3>
                        <pre className="whitespace-pre-wrap">{generateReceiptText()}</pre>
                    </div>
                    <button
                        onClick={handlePlaceOrder}
                        className="flex items-center bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600"
                    >
                        {t('Place Order')}
                        <FaWhatsapp className="ml-2" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ReceiptAndButton;
