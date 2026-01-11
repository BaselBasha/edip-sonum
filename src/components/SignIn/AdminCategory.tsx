import { useNavigate } from 'react-router-dom';
import { products, ProductType } from '../../data';
import { TiDelete } from "react-icons/ti";
import { MdEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import EditSales from './EditSales';

const slugify = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

const AdminCategory: React.FC = () => {
    const navigate = useNavigate();

    const handleDelete = (id: string) => {
        console.log(`Delete category with id: ${id}`);
        // Implement deletion logic here
    };

    const handleEdit = (category: ProductType, event: React.MouseEvent) => {
        event.stopPropagation();
        navigate(`/categories/admin/edit/${slugify(category.name)}`, { state: { category } });
    };

    const handleCategoryClick = (category: ProductType) => {
        navigate(`/categories/admin/${slugify(category.name)}`);
    };

    const handleAddCategory = () => {
        navigate(`/categories/admin/edit/new`);  // Navigates to the EditCategory component for a new category
    };

    return (
        <div className="p-4 max-w-7xl mx-auto">
            <div className="mb-6">
                <EditSales />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((category: ProductType) => (
                    <div
                        key={category.id}
                        className="relative flex flex-col items-center cursor-pointer"
                        onClick={() => handleCategoryClick(category)}
                    >
                        <div className="relative block overflow-hidden rounded-lg shadow-md transition-shadow duration-300 group hover:shadow-2xl">
                            <div
                                className="relative overflow-hidden w-full h-40 bg-gray-200"
                                style={{ width: 240, height: 240 }}
                            >
                                <img
                                    src={category.icon}
                                    alt={category.name}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white text-center">
                                <h3 className="text-lg font-semibold">{category.name}</h3>
                            </div>
                        </div>
                        <div className="mt-2 flex gap-2">
                            <button
                                onClick={(event) => handleEdit(category, event)}
                                className="bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 transition-colors duration-300"
                            >
                                <MdEdit />
                            </button>
                            <button
                                onClick={(event) => { event.stopPropagation(); handleDelete(category.id); }}
                                className="bg-red-500 text-white rounded-full px-4 py-2 hover:bg-red-700 transition-colors duration-300"
                            >
                                <TiDelete />
                            </button>
                        </div>
                    </div>
                ))}
                <div className="relative flex flex-col items-center" onClick={handleAddCategory}>
                    <div
                        className="relative overflow-hidden rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center"
                        style={{ width: 240, height: 240 }}
                    >
                        <div className="flex flex-col items-center justify-center text-center">
                            <FaPlus className="text-4xl text-gray-500" />
                            <span className="text-gray-500 mt-2">Add New Category</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminCategory;
