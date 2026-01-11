import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { ProductItemType } from "../data";
import { useTranslation } from "react-i18next";
import { useAnimate, stagger, motion } from "framer-motion";

import RatingStars from "./Rating/RatingStars";
import ReviewModal from "./Rating/ReviewModal";
import { loadRatings, saveRatings, getReviews, addReviewToDB } from "../ratings/storage";
import { computeSummary } from "../ratings/summary";
import { RatingsDB, Review } from "../ratings/types";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
}

const ProductList: React.FC<{ items: ProductItemType[] }> = ({ items = [] }) => {
  const { t } = useTranslation();
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>({});
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const dispatch = useDispatch();

  // Ratings DB (localStorage)
  const [db, setDb] = useState<RatingsDB>({});

  // Review modal state
  const [openReviewProductId, setOpenReviewProductId] = useState<string | null>(null);

  useEffect(() => {
    setDb(loadRatings());
  }, []);

  function handleAddReview(review: Review) {
    const next = addReviewToDB(db, review);
    setDb(next);
    saveRatings(next);
  }

  const handleSizeChange = (itemId: string, size: string) => {
    setSelectedSizes((prevSizes) => ({
      ...prevSizes,
      [itemId]: size,
    }));
    setOpenMenuId(null);
  };

  const handleAddToCart = (item: ProductItemType) => {
    const selectedSize = selectedSizes[item.id] || item.options[0].size;
    const selectedOption = item.options.find((option) => option.size === selectedSize);
    const price = selectedOption ? selectedOption.price : 0;

    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        price: price,
        size: selectedSize,
        icon: item.icon,
        quantity: 1,
      })
    );
  };

  const openItem = useMemo(
    () => items.find((x) => x.id === openReviewProductId) || null,
    [items, openReviewProductId]
  );

  const openItemReviews = openItem ? getReviews(db, openItem.id) : [];

  return (
    <div className="min-h-screen p-4 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl">
        {items.map((item) => {
          const selectedSize = selectedSizes[item.id] || item.options[0].size;
          const selectedOption = item.options.find((option) => option.size === selectedSize);
          const price = selectedOption ? selectedOption.price : item.options[0].price;
          const isOpen = openMenuId === item.id;

          const reviews = getReviews(db, item.id);
          const summary = computeSummary(reviews);

          return (
            <div
              key={item.id}
              className="max-w-sm p-6 bg-white rounded-xl shadow-lg flex flex-col items-center"
            >
              <img
                src={item.icon}
                alt={t(item.name)}
                className="w-32 h-32 object-cover rounded-md mb-4"
              />

              <h2 className="text-lg font-bold mb-1 text-center">{t(item.name)}</h2>

              {/* Rating display */}
              <div className="flex items-center gap-2 mb-3">
                <RatingStars average={summary.average} />
                <span className="font-semibold">{summary.percent}%</span>
                <span className="text-gray-500">({summary.count})</span>
              </div>

              <div className="flex flex-wrap justify-center space-x-1 mb-4">
                {item.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className={
                      "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium " +
                      tag.color
                    }
                  >
                    <span className="mr-1 text-xl">{tag.icon}</span>
                    {t(tag.name)}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 text-center mb-4">
                {t(item.description || "No description available")}
              </p>

              <div className="relative flex items-center justify-between w-full mb-4">
                <motion.div className="relative" ref={useMenuAnimation(isOpen)}>
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      setOpenMenuId((prev) => (prev === item.id ? null : item.id));
                    }}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm flex items-center"
                  >
                    {t(selectedSize)} - {price} {t("tl")}
                    <div className="arrow ml-2" style={{ transformOrigin: "50% 55%" }}>
                      <svg width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" />
                      </svg>
                    </div>
                  </motion.button>

                  <motion.ul
                    initial={{ clipPath: "inset(10% 50% 90% 50% round 10px)" }}
                    animate={{
                      clipPath: isOpen
                        ? "inset(0% 0% 0% 0% round 10px)"
                        : "inset(10% 50% 90% 50% round 10px)",
                      pointerEvents: isOpen ? "auto" : "none",
                    }}
                    transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                    className="absolute top-full left-0 mt-1 inline-block border border-gray-300 bg-white rounded-lg"
                    style={{ minWidth: "150px" }}
                  >
                    {item.options.map((option) => (
                      <motion.li
                        key={option.size}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex justify-between items-center"
                        onClick={() => handleSizeChange(item.id, option.size)}
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        <span>{t(option.size)}</span>
                        <span>
                          {option.price} {t("tl")}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setOpenReviewProductId(item.id)}
                    className="px-3 py-1.5 border border-gray-400 text-gray-800 font-semibold rounded-md hover:bg-gray-100 text-base"
                  >
                    Reviews
                  </button>

                  <button
                    onClick={() => handleAddToCart(item)}
                    className="px-4 py-1.5 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 text-base"
                  >
                    {t("Add to Cart")}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Review modal */}
      {openItem ? (
        <ReviewModal
          isOpen={true}
          onClose={() => setOpenReviewProductId(null)}
          productId={openItem.id}
          productName={t(openItem.name)}
          reviews={openItemReviews}
          onAddReview={handleAddReview}
        />
      ) : null}
    </div>
  );
};

export default ProductList;
