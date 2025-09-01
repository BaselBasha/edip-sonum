import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ProductItemType, ProductOption } from '../../data';

const EditProducts: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { categoryName, subcategoryName, productId } = useParams<{ categoryName: string, subcategoryName: string, productId: string }>();
    const { item } = location.state as { item: ProductItemType };

    const [name, setName] = useState(item.name);
    const [description, setDescription] = useState(item.description || '');
    const [priceOptions, setPriceOptions] = useState<ProductOption[]>(item.options);
    const [tags, setTags] = useState(item.tags || []);
    const [imagePreview, setImagePreview] = useState(item.icon);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddPriceOption = () => {
        setPriceOptions([...priceOptions, { size: '', price: 0 }]);
    };

    const handlePriceChange = (index: number, field: 'size' | 'price', value: string | number) => {
        const updatedOptions = [...priceOptions];
        updatedOptions[index][field] = field === 'price' ? Number(value) : value;
        setPriceOptions(updatedOptions);
    };

    const handleRemovePriceOption = (index: number) => {
        setPriceOptions(priceOptions.filter((_, i) => i !== index));
    };

    const handleTagChange = (index: number, field: 'name' | 'icon' | 'color', value: string) => {
        const updatedTags = [...tags];
        updatedTags[index][field] = value;
        setTags(updatedTags);
    };

    const handleAddTag = () => {
        setTags([...tags, { name: '', icon: '', color: 'bg-gray-200 text-gray-800' }]);
    };

    const handleRemoveTag = (index: number) => {
        setTags(tags.filter((_, i) => i !== index));
    };

    const handleSave = () => {
        const updatedProduct: ProductItemType = {
            id: item.id || (Date.now()).toString(), // Generate a new ID if adding
            name,
            description,
            options: priceOptions,
            tags,
            icon: imagePreview
        };

        // Find the category and subcategory to update or add the product
        let categoryFound = false;
        products.forEach(category => {
            if (category.name === categoryName) {
                categoryFound = true;
                category.items.forEach(subcategory => {
                    if (subcategory.name === subcategoryName) {
                        if (item.id) {
                            // Edit existing product
                            const productIndex = subcategory.items.findIndex(p => p.id === item.id);
                            if (productIndex !== -1) {
                                subcategory.items[productIndex] = updatedProduct;
                            }
                        } else {
                            // Add new product
                            subcategory.items.push(updatedProduct);
                        }
                    }
                });
            }
        });

        if (!categoryFound) {
            console.error('Category or subcategory not found.');
            return;
        }

        console.log('Product saved:', updatedProduct);

        // Navigate back to the product list after saving
        navigate(`/categories/admin/${categoryName}/${subcategoryName}`);
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold text-center mb-4">{item.id ? 'Edit Product' : 'Add New Product'}</h2>
                <div className="mb-4 text-center">
                    <img src={imagePreview} alt={name} className="w-32 h-32 object-cover rounded-md mb-4 mx-auto" />
                    <label className="block text-gray-700">Change Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Price Options</label>
                    {priceOptions.map((option, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input
                                type="text"
                                value={option.size}
                                placeholder="Size"
                                onChange={(e) => handlePriceChange(index, 'size', e.target.value)}
                                className="w-1/2 p-2 border border-gray-300 rounded-md mr-2"
                            />
                            <input
                                type="number"
                                value={option.price}
                                placeholder="Price"
                                onChange={(e) => handlePriceChange(index, 'price', e.target.value)}
                                className="w-1/2 p-2 border border-gray-300 rounded-md"
                            />
                            <button
                                onClick={() => handleRemovePriceOption(index)}
                                className="ml-2 bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        onClick={handleAddPriceOption}
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mt-2"
                    >
                        Add Price Option
                    </button>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Tags</label>
                    {tags.map((tag, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input
                                type="text"
                                value={tag.icon}
                                placeholder="Icon"
                                onChange={(e) => handleTagChange(index, 'icon', e.target.value)}
                                className="w-1/3 p-2 border border-gray-300 rounded-md mr-2"
                            />
                            <input
                                type="text"
                                value={tag.name}
                                placeholder="Name"
                                onChange={(e) => handleTagChange(index, 'name', e.target.value)}
                                className="w-1/3 p-2 border border-gray-300 rounded-md mr-2"
                            />
                            <button
                                onClick={() => handleRemoveTag(index)}
                                className="ml-2 bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        onClick={handleAddTag}
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mt-2"
                    >
                        Add Tag
                    </button>
                </div>
                <button
                    onClick={handleSave}
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                    Save
                </button>
            </div>
        </div>
    );
};

export default EditProducts;
