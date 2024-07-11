import { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import { ShimmerPostItem } from "react-shimmer-effects";

const FoodItem = ({ image, name, price, desc, id }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { cartItems, addToCart, removeFromCart, currency } =
    useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        {!imageLoaded && <ShimmerPostItem card title cta />}
        <img
          className="food-item-image"
          src={image}
          alt={name}
          onLoad={() => setImageLoaded(true)}
          style={{ display: imageLoaded ? "block" : "none" }}
        />
        {imageLoaded && (
          <>
            {!cartItems[id] ? (
              <img
                className="add"
                onClick={() => addToCart(id)}
                src={assets.add_icon_white}
                alt=""
              />
            ) : (
              <div className="food-item-counter">
                <img
                  src={assets.remove_icon_red}
                  onClick={() => removeFromCart(id)}
                  alt=""
                />
                <p>{cartItems[id]}</p>
                <img
                  src={assets.add_icon_green}
                  onClick={() => addToCart(id)}
                  alt=""
                />
              </div>
            )}
            <div className="food-item-info">
              <div className="food-item-name-rating">
                <p>{name}</p> <img src={assets.rating_starts} alt="" />
              </div>
              <p className="food-item-desc">{desc}</p>
              <p className="food-item-price">
                {currency}
                {price}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FoodItem;
