import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Utility function to convert product names to URL-friendly slugs
const slugify = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

type CategoryProps = {
    image: string;
    title: string;
    route: string;
    description?: string;
    cardWidth?: number;
    cardHeight?: number;
};

const Category: React.FC<CategoryProps> = ({
                                               image,
                                               title,
                                               route,
                                               description,
                                               cardWidth = 240,
                                               cardHeight = 250,
                                           }) => {
    const { t } = useTranslation();

    // For "Waffle & Cake", adjust the route to go to the subcategory list
    const adjustedRoute = title === 'Waffle & Cake'
        ? `/categories/${slugify(title)}`
        : route;

    return (
        <Link to={adjustedRoute} className="block relative group">
            <div
                className="relative overflow-hidden rounded-lg shadow-md transition-shadow duration-300 group-hover:shadow-2xl"
                style={{ width: cardWidth, height: cardHeight }}
            >
                <img
                    alt={title}
                    src={image}
                    className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-30 backdrop-blur-sm rounded-b-lg">
                    <div className="text-center text-white">
                        <h3 className="text-lg font-semibold">{t(title)}</h3>
                        <p className="text-sm">{description ? t(description) : t('Click to learn more')}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Category;
