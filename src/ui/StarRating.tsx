const StarRating = () => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index}>
          {index < 4 ? (
            <i className="fa-solid fa-star text-[#FFC600]"></i>
          ) : (
            <i className="fa-regular fa-star text-[#C1C8CE]"></i>
          )}
        </span>
      ))}
    </div>
  );
};
export default StarRating;
