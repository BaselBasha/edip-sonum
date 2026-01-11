import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { products, ProductType } from '../../data';

const slugify = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

const EditCategory: React.FC = () => {
    const { categoryName } = useParams<{ categoryName: string }>();
    const navigate = useNavigate();

    // Find the category if editing an existing one, otherwise start with default values for a new category
    const category = categoryName && categoryName !== 'new' ? products.find(cat => slugify(cat.name) === categoryName) : null;

    const [name, setName] = useState(category ? category.name : '');
    const [imagePreview, setImagePreview] = useState(category ? category.icon : '');

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
                alert('Please select a valid image file.');
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        if (category) {
            // Edit existing category
            category.name = name;
            category.icon = imagePreview;
        } else {
            // Add new category logic
            const newCategory: ProductType = {
                id: (products.length + 1).toString(),
                name,
                icon: imagePreview,
                items: []
            };
            (products as unknown as ProductType[]).push(newCategory);
        }

        // Navigate back after saving
        navigate('/categories/admin');
    };

    return (
        <div className="min-h-screen p-4 flex flex-col items-center justify-center">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">
                    {category ? 'Edit Category' : 'Add New Category'}
                </h2>
                <div className="mb-4">
                    <img
                        src={imagePreview || 'https://via.placeholder.com/150'}
                        alt={name || 'New Category'}
                        className="w-32 h-32 object-cover rounded-md mb-4 mx-auto"
                    />
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
                    {category ? 'Save Changes' : 'Add Category'}
                </button>
            </div>
        </div>
    );
};

export default EditCategory;
