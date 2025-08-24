import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  console.log(resData);
  const cloudinaryId = "xqwpuhgnsaf18te7zvtv";
  const { name, cuisines, avgRating, deliveryTime } = resData?.data;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "f0f0f0",
      }}
    >
      <img className="res-logo" src={CDN_URL + cloudinaryId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
