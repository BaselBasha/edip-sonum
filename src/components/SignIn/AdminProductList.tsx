import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductItemType } from '../../data';
import { TiDelete } from 'react-icons/ti';
import { MdEdit } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';

type AdminProductListProps = {
    items: ProductItemType[];
    onEdit: (id: string) => void;
    onAddNewCategory: () => void;
};

const AdminProductList: React.FC<AdminProductListProps> = ({ items, onEdit, onAddNewCategory }) => {
    const { categoryName, subcategoryName } = useParams<{ categoryName: string, subcategoryName: string }>();
    const [selectedPrices, setSelectedPrices] = useState<{ [key: string]: string }>({});
    const navigate = useNavigate();

    const filteredItems = items.filter(item => item.subcategoryName === subcategoryName);

    const handlePriceChange = (itemId: string, price: string) => {
        setSelectedPrices((prevPrices) => ({
            ...prevPrices,
            [itemId]: price,
        }));
    };

    const handleEditClick = (item: ProductItemType) => {
        navigate(`/categories/admin/${categoryName}/${subcategoryName}/edit/${item.id}`, { state: { item } });
    };



    const handleAddProduct = () => {
        const newProduct = {
            id: '',
            name: '',
            description: '',
            icon: '',
            options: [{ size: '', price: 0 }],
            tags: [],
            subcategoryName: subcategoryName || '',
        };

        navigate(`/categories/admin/${categoryName}/${subcategoryName}/edit/new`, { state: { item: newProduct } });
    };

    return (
        <div className="min-h-screen p-4 flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl">
                {filteredItems.map((item) => (
                    <div key={item.id}
                         className="max-w-sm p-6 bg-white rounded-xl shadow-lg flex flex-col items-center">
                        <img
                            src={item.icon}
                            alt={item.name}
                            className="w-32 h-32 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-lg font-bold mb-2 text-center">{item.name}</h2>
                        <p className="text-gray-600 text-center mb-4">{item.description || 'No description available'}</p>
                        <div className="flex flex-wrap justify-center space-x-1 mb-4">
                            {item.tags?.map((tag, index) => (
                                <span
                                    key={index}
                                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${tag.color}`}
                                >
                                    <span className="mr-1 text-xl">{tag.icon}</span>
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                        <div className="flex items-center justify-between w-full mb-4">
                            <select
                                value={selectedPrices[item.id] || item.options[0].price}
                                onChange={(e) => handlePriceChange(item.id, e.target.value)}
                                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                            >
                                {item.options.map((option) => (
                                    <option key={option.size} value={option.price}>
                                        {option.size} - {option.price}
                                    </option>
                                ))}
                            </select>
                            <button
                                onClick={() => handleEditClick(item)}
                                className="px-4 py-1.5 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 text-base"
                            >
                                <MdEdit/>
                            </button>
                            <button
                                onClick={() => {
                                }}
                                className="px-4 py-1.5 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 text-base"
                            >
                                <TiDelete/>
                            </button>
                        </div>
                    </div>
                ))}
                <div className="relative flex flex-col items-center" onClick={handleAddProduct}>
                    <div
                        className="relative overflow-hidden rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center"
                        style={{width: 240, height: 240}}
                    >
                        <div className="flex flex-col items-center justify-center text-center">
                            <FaPlus className="text-4xl text-gray-500"/>
                            <span className="text-gray-500 mt-2">Add New Product</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProductList;
