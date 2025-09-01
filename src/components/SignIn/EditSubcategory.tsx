import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProductItemType } from '../../data';

const EditSubcategory: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { subcategory } = location.state as { subcategory: ProductItemType };

    const [name, setName] = useState(subcategory.name);
    const [imagePreview, setImagePreview] = useState(subcategory.icon);

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

    const handleSave = () => {
        // Update the subcategory data (this can involve updating state or making an API request)
        console.log({ name, imagePreview });

        // Navigate back after saving
        navigate(-1);
    };

    return (
        <div className="min-h-screen p-4 flex flex-col items-center justify-center">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Edit Subcategory</h2>
                <div className="mb-4">
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

export default EditSubcategory;