

const StarRating = ({ starRating = 0 }) => {
  const maxStars = 5
  const filledStars = Math.min(Math.max(starRating, 0), maxStars)
  const emptyStars = maxStars - filledStars

  return (
    <div className="star-rating">

      {Array.from({ length: filledStars }).map((_, index) => (
        <i key={index} className="fa-solid fa-star"></i>
      ))}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <i key={index} className="fa-regular fa-star"></i>
      ))}
    </div>
  )
}

export default StarRating
