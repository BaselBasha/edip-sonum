import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { products, ProductType } from '../data';
import Category from './Category';
import ProductList from './ProductList';
import SubcategoryList from './SubcategoryList';
import Cart from './Cart';
import SignIn from './SignIn/SignIn';
import AdminCategory from './SignIn/AdminCategory';
import AdminProductList from './SignIn/AdminProductList';
import AdminSubcategoryList from './SignIn/AdminSubcategoryList';
import EditProducts from './SignIn/EditProducts';
import EditCategory from './SignIn/EditCategory';
import EditSubcategory from './SignIn/EditSubcategory';
import ScrollToTop from './ScrollToTop';
import { useTranslation } from 'react-i18next';

// Utility function to convert product names to URL-friendly slugs
const slugify = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

const RoutesConfig: React.FC = () => {
    const { t } = useTranslation();

    // Find Waffle & Cake category
    const waffleAndCakeCategory = products.find(cat => cat.name === 'Waffle & Cake');

    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Navigate to="/categories" />} />

                {/* User Pages */}
                <Route
                    path="/categories"
                    element={
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto">
                            {products.map((category: ProductType) => (
                                <div key={category.id} className="flex justify-center">
                                    <Category
                                        image={category.icon}
                                        title={t(`categories.${category.id}.name`, { defaultValue: category.name })}
                                        route={`/categories/${slugify(category.name)}`}
                                    />
                                </div>
                            ))}
                        </div>
                    }
                />

                {/* User Routes for Waffle & Cake */}
                {waffleAndCakeCategory && (
                    <>
                        <Route
                            path={`/categories/${slugify(waffleAndCakeCategory.name)}`}
                            element={<SubcategoryList items={waffleAndCakeCategory.items} />}
                        />
                        {waffleAndCakeCategory.items.map(subcategory => (
                            <Route
                                key={subcategory.id}
                                path={`/categories/${slugify(waffleAndCakeCategory.name)}/${slugify(subcategory.name)}`}
                                element={<ProductList items={subcategory.items} />}
                            />
                        ))}
                    </>
                )}

                {/* Direct ProductList for other categories */}
                {products
                    .filter(cat => cat.name !== 'Waffle & Cake')
                    .map((category: ProductType) => (
                        <Route
                            key={category.id}
                            path={`/categories/${slugify(category.name)}`}
                            element={<ProductList items={category.items} />}
                        />
                    ))}

                {/* Admin Pages */}
                <Route path="/categories/admin" element={<AdminCategory />} />

                {/* Admin Routes for Waffle & Cake */}
                {waffleAndCakeCategory && (
                    <>
                        <Route
                            path={`/categories/admin/${slugify(waffleAndCakeCategory.name)}`}
                            element={<AdminSubcategoryList items={waffleAndCakeCategory.items} onEdit={() => {}} onDelete={() => {}} onAddCategory={() => {}} isSpecialCategory={true} />}
                        />
                        {waffleAndCakeCategory.items.map(subcategory => (
                            <Route
                                key={subcategory.id}
                                path={`/categories/admin/${slugify(waffleAndCakeCategory.name)}/${slugify(subcategory.name)}`}
                                element={<AdminProductList items={subcategory.items} categoryName={waffleAndCakeCategory.name} subcategoryName={subcategory.name} onEdit={() => {}} onAddNewCategory={() => {}} />}
                            />
                        ))}
                    </>
                )}

                {/* Direct AdminProductList for other categories */}
                {products
                    .filter(cat => cat.name !== 'Waffle & Cake')
                    .map((category: ProductType) => (
                        <Route
                            key={category.id}
                            path={`/categories/admin/${slugify(category.name)}`}
                            element={<AdminProductList items={category.items} categoryName={category.name} subcategoryName={''} onEdit={() => {}} onAddNewCategory={() => {}} />}
                        />
                    ))}

                {/* Route for editing subcategories */}
                <Route path="/categories/admin/waffle-&-cake/edit/:id" element={<EditSubcategory />} />


                {/* Route for adding new Product*/}

                <Route path="/categories/admin/:categoryName/:subcategoryName/edit/new" element={<EditProducts />} />


                {/* Route for adding new category*/}
                <Route path="/categories/admin/edit/:categoryName" element={<EditCategory />} />

                {/* Route for editing products */}
                <Route path="/categories/admin/:categoryName/:subcategoryName/edit/:id" element={<EditProducts />} />

                <Route path="/categories/admin/edit/:categoryName" element={<EditCategory />} />

                {/* Additional Routes */}
                <Route path="/cart" element={<Cart />} />
                <Route path="/categories/signin" element={<SignIn />} />
                <Route path="*" element={<Navigate to="/categories" />} />
            </Routes>
        </>
    );
};

export default RoutesConfig;
