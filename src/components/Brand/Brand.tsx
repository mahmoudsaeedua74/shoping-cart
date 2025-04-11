import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
export default function Brand() {
  const [brands, setBrands] = useState<string[]>([]);

  useEffect(() => {
    // Dynamically import all brand images
    const brandImages = [
      '/src/assets/brands/1678286366797.png',
      '/src/assets/brands/1678286391415.png',
      '/src/assets/brands/1678286421517.png',
      '/src/assets/brands/1678286465856.png',
      '/src/assets/brands/1678286502288.png',
      '/src/assets/brands/1678286539788.png',
      '/src/assets/brands/1678286577463.png',
      '/src/assets/brands/1678286620402.png',
      '/src/assets/brands/1678286680638.png',
      '/src/assets/brands/1678286730980.png',
      '/src/assets/brands/1678286767914.png',
      '/src/assets/brands/1678286824747.png',
    ];
    
    setBrands(brandImages);
  }, []);

  return (
    <div className="container mx-auto py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center text-text">Shop by Brand</h2>
      </div>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        className="brand-swiper"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="brand-item p-4 flex items-center justify-center border border-gray-200 rounded-lg hover:border-main transition-all duration-300 cursor-pointer h-24 hover:shadow-2xl">
              <img 
                src={brand} 
                alt={`Brand ${index + 1}`} 
                className="max-h-20 max-w-full object-contain" 
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
