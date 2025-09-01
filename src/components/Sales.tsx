import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import sales1 from "../../public/sales-img/sales1.jpg";
import sales3 from "../../public/sales-img/sales3.jpg";
import sales4 from "../../public/sales-img/sales4.jpg";
import { useTranslation } from 'react-i18next';

function Sales() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar'; // Arabic, Hebrew, etc.

  return (
    <Splide
      aria-label="Sales Images"
      key={isRTL ? 'rtl-slider' : 'ltr-slider'} // Force remount on language switch
      options={{
        type: 'loop',
        perPage: 1,
        focus: 'center',
        autoplay: true,
        interval: 2000,
        pagination: false,
        arrows: true,
        height: '300px',
        padding: { left: '6rem', right: '6rem' },
        gap: '3rem',
        direction: isRTL ? 'rtl' : 'ltr', // ✅ Critical for correct behavior
      }}
      className="relative overflow-hidden"
    >
      {[sales1, sales3, sales4].map((img, index) => (
        <SplideSlide key={index}>
          <div className="w-full h-full flex items-center justify-center px-6 sm:px-12">
            <div className="overflow-hidden w-96 h-full flex items-center justify-center">
              <img
                src={img}
                alt={`Sales Image ${index + 1}`}
                className="w-auto h-full transition-transform duration-500 hover:scale-110" // ✅ Smooth zoom effect without breaking slider
              />
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default Sales;
