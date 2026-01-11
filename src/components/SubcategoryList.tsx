import { Link } from 'react-router-dom';
import { SubcategoryType } from '../data';

// Utility function to convert names to URL-friendly slugs
const slugify = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

type SubcategoryListProps = {
    items: SubcategoryType[];
};

const SubcategoryList: React.FC<SubcategoryListProps> = ({ items }) => {
    return (
        <div className="flex flex-wrap justify-center gap-6 p-4 max-w-7xl mx-auto">
            {items.map((subcategory) => (
                <Link
                    key={subcategory.id}
                    to={`/categories/waffle-&-cake/${slugify(subcategory.name)}`}
                    className="block relative group"
                >
                    <div
                        className="relative overflow-hidden rounded-lg shadow-md transition-shadow duration-300 group-hover:shadow-2xl"
                        style={{ width: 240, height: 250 }}
                    >
                        <img
                            src={subcategory.icon}
                            alt={subcategory.name}
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-30 backdrop-blur-sm rounded-b-lg">
                            <div className="text-center text-white">
                                <h3 className="text-lg font-semibold">{subcategory.name}</h3>
                                <p className="text-sm">Click to learn more</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default SubcategoryList;
