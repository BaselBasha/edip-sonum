import { Route, Routes, Navigate } from "react-router-dom";
import { products, ProductItemType, ProductType, SubcategoryType } from "../data";

import Category from "./Category";
import ProductList from "./ProductList";
import SubcategoryList from "./SubcategoryList";
import Cart from "./Cart";

import SignIn from "./SignIn/SignIn";
import AdminCategory from "./SignIn/AdminCategory";
import AdminProductList from "./SignIn/AdminProductList";
import AdminSubcategoryList from "./SignIn/AdminSubcategoryList";

import EditProducts from "./SignIn/EditProducts";
import EditCategory from "./SignIn/EditCategory";
import EditSubcategory from "./SignIn/EditSubcategory";

import ScrollToTop from "./ScrollToTop";
import { useTranslation } from "react-i18next";

import AITest from "./AITest/AITest";

// Utility function to convert product names to URL-friendly slugs
const slugify = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

const isSubcategoryArray = (items: ProductType["items"]): items is SubcategoryType[] => {
  return Array.isArray(items) && (items.length === 0 || "items" in items[0]);
};

const isProductItemArray = (items: ProductType["items"]): items is ProductItemType[] => {
  return Array.isArray(items) && (items.length === 0 || "options" in items[0]);
};

const RoutesConfig: React.FC = () => {
  const { t } = useTranslation();

  // Find Waffle & Cake category
  const waffleAndCakeCategory = products.find((cat) => cat.name === "Waffle & Cake");
  const waffleSubcategories =
    waffleAndCakeCategory && isSubcategoryArray(waffleAndCakeCategory.items)
      ? waffleAndCakeCategory.items
      : null;

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
        {waffleSubcategories && waffleAndCakeCategory && (
          <>
            <Route
              path={`/categories/${slugify(waffleAndCakeCategory.name)}`}
              element={<SubcategoryList items={waffleSubcategories} />}
            />

            {waffleSubcategories.map((subcategory) => (
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
          .filter((cat) => cat.name !== "Waffle & Cake")
          .map((category: ProductType) => (
            <Route
              key={category.id}
              path={`/categories/${slugify(category.name)}`}
              element={<ProductList items={isProductItemArray(category.items) ? category.items : []} />}
            />
          ))}

        {/* Admin Pages */}
        <Route path="/categories/admin" element={<AdminCategory />} />

        {/* Admin Routes for Waffle & Cake */}
        {waffleSubcategories && waffleAndCakeCategory && (
          <>
            <Route
              path={`/categories/admin/${slugify(waffleAndCakeCategory.name)}`}
              element={<AdminSubcategoryList items={waffleSubcategories} onDelete={() => {}} onAddCategory={() => {}} />}
            />

            {waffleSubcategories.map((subcategory) => (
              <Route
                key={subcategory.id}
                path={`/categories/admin/${slugify(waffleAndCakeCategory.name)}/${slugify(subcategory.name)}`}
                element={
                  <AdminProductList
                    items={subcategory.items}
                  />
                }
              />
            ))}
          </>
        )}

        {/* Direct AdminProductList for other categories */}
        {products
          .filter((cat) => cat.name !== "Waffle & Cake")
          .map((category: ProductType) => (
            <Route
              key={category.id}
              path={`/categories/admin/${slugify(category.name)}`}
              element={
                <AdminProductList
                  items={isProductItemArray(category.items) ? category.items : []}
                />
              }
            />
          ))}

        {/* Route for editing subcategories */}
        <Route path="/categories/admin/waffle-&-cake/edit/:id" element={<EditSubcategory />} />

        {/* Route for adding new Product */}
        <Route path="/categories/admin/:categoryName/:subcategoryName/edit/new" element={<EditProducts />} />

        {/* Route for adding/editing category */}
        <Route path="/categories/admin/edit/:categoryName" element={<EditCategory />} />

        {/* Route for editing products */}
        <Route path="/categories/admin/:categoryName/:subcategoryName/edit/:id" element={<EditProducts />} />

        {/* Additional Routes */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories/signin" element={<SignIn />} />

        {/* AI Test Page */}
        <Route path="/ai-test" element={<AITest />} />

        <Route path="*" element={<Navigate to="/categories" />} />
      </Routes>
    </>
  );
};

export default RoutesConfig;
