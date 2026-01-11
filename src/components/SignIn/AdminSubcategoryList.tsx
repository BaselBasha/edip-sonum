import { Link, useNavigate } from 'react-router-dom';
import { SubcategoryType } from '../../data';
import { TiDelete } from 'react-icons/ti';
import { MdEdit } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa';

type AdminSubcategoryListProps = {
    items: SubcategoryType[];
    onDelete: (id: string) => void;
    onAddCategory: () => void;
};

const AdminSubcategoryList: React.FC<AdminSubcategoryListProps> = ({
                                                                       items,
                                                                       onDelete,
                                                                       onAddCategory,
                                                                   }) => {
    const navigate = useNavigate();

    const handleEditClick = (subcategory: SubcategoryType, event: React.MouseEvent) => {
        event.stopPropagation(); // Prevent triggering the link
        navigate(
            `/categories/admin/waffle-&-cake/edit/${subcategory.id}`,
            { state: { subcategory } } // Passing the subcategory data through state
        );
    };

    return (
        <div className="p-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((subcategory) => (
                    <div key={subcategory.id} className="relative flex flex-col items-center cursor-pointer">
                        <Link
                            to={`/categories/admin/waffle-&-cake/${slugify(subcategory.name)}`}
                            className="block relative group"
                        >
                            <div className="relative block overflow-hidden rounded-lg shadow-md transition-shadow duration-300 group hover:shadow-2xl">
                                <div
                                    className="relative overflow-hidden w-full h-40 bg-gray-200"
                                    style={{ width: 240, height: 240 }}
                                >
                                    <img
                                        src={subcategory.icon}
                                        alt={subcategory.name}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white text-center">
                                    <h3 className="text-lg font-semibold">{subcategory.name}</h3>
                                </div>
                            </div>
                        </Link>
                        <div className="mt-2 flex gap-2">
                            <button
                                onClick={(event) => handleEditClick(subcategory, event)}
                                className="bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 transition-colors duration-300"
                            >
                                <MdEdit />
                            </button>
                            <button
                                onClick={(event) => { event.stopPropagation(); onDelete(subcategory.id); }}
                                className="bg-red-500 text-white rounded-full px-4 py-2 hover:bg-red-700 transition-colors duration-300"
                            >
                                <TiDelete />
                            </button>
                        </div>
                    </div>
                ))}
                <div className="relative flex flex-col items-center">
                    <div
                        className="relative overflow-hidden rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center"
                        style={{ width: 240, height: 240 }}
                        onClick={onAddCategory}
                    >
                        <div className="flex flex-col items-center justify-center text-center">
                            <FaPlus className="text-4xl text-gray-500" />
                            <span className="text-gray-500 mt-2">Add New Subcategory</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const slugify = (text: string) => text.toLowerCase().replace(/ /g, '-');

export default AdminSubcategoryList;
