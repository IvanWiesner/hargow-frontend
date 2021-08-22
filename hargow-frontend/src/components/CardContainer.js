import { useState, useEffect } from "react";
import Search from "./Search";
import DishesList from "./DishesList"

function CardContainer({dishes, setDishes, search, setSearch}) {
    const [ reviews, setReviews ] = useState([])

    function handleNewReview (newReview) {
        setReviews([...reviews, newReviews])
    }

    useEffect(() => {
        fetch("http://localhost:3000/reviews")
          .then((resp) => resp.json())
          .then((data) => setReviews(data));
      }, []);

      return (
        <div className="card-container">
            <Search search={search}
            setSearch={setSearch}
            />
            <DishesList
            dishes={dishes}
            setDishes={setDishes}
            reviews={reviews}
            setReviews={setReviews}
            search={search}
            handleNewReview={handleNewReview}
            />
        </div>
      );
}

export default CardContainer;