import { useState, useEffect } from "react";
import "./Review.css";

function AnimeCard({ title, poster }) {
const [rating, setRating] = useState(5);

return ( <div className="anime-card">

  <div className="poster-section">
    <img src={poster} alt={title} />
  </div>

  <div className="details-section">
    <h2>{title}</h2>

    <h3>Your Rating: {rating} ⭐</h3>

    <div className="btn-group">
      <button
        onClick={() => rating > 1 && setRating(rating - 1)}
      >
        -
      </button>

      <button
        onClick={() => rating < 10 && setRating(rating + 1)}
      >
        +
      </button>
    </div>
  </div>

</div>

);
}

function Review() {

const [reviews, setReviews] = useState([]);

useEffect(() => {
fetch("https://dummyjson.com/comments")
.then((response) => response.json())
.then((data) => {
setReviews(data.comments.slice(0, 50));
})
.catch((error) => {
console.log(error);
});
}, []);

return ( <div className="review-page">

  <h1 className="main-title">
    Anime Reviews & Ratings
  </h1>

  <div className="content">

    <div className="anime-list">

      <AnimeCard
        title="One Piece"
        poster="https://wallpapercave.com/wp/wp11636749.jpg"
      />

      <AnimeCard
        title="Naruto"
        poster="https://th.bing.com/th/id/OIP.BZOOapFatEIZDQuN4bItfAHaLk?w=200&h=312&c=7&r=0&o=7&pid=1.7"
      />

      <AnimeCard
        title="Black Clover"
        poster="https://th.bing.com/th/id/OIP.m0FX1MgyIYZb_7dM5U2zrwHaLH?w=116&h=180&c=7&r=0&o=7&pid=1.7"
      />

      <AnimeCard
        title="Bleach"
        poster="https://upload.wikimedia.org/wikipedia/en/7/72/Bleachanime.png"
      />

      <AnimeCard
        title="Dragon Ball"
        poster="https://image.tmdb.org/t/p/original/y1OdtgB2HhZqPwzcAldXZy7dymB.jpg"
      />

    </div>

    <div className="review-section">

      <h2>Community Reviews</h2>

      {reviews.map((review) => (
        <div
          className="review-card"
          key={review.id}
        >
          <h4>{review.user.username}</h4>
          <p>{review.body}</p>
        </div>
      ))}

    </div>

  </div>

</div>

);
}

export default Review;
