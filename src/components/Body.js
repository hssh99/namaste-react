import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([
    {
      data: {
        id: "334475",
        name: "KFC",
        cloudinaryImageId: "ncndkfkjdfnkjnfgjndn",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: "3.8",
      },
    },
    {
      data: {
        id: "334445",
        name: "Dominos",
        cloudinaryImageId: "ncndkfkjdfnkjnfgjndn",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: "4.5",
      },
    },
    {
      data: {
        id: "334446",
        name: "MCD",
        cloudinaryImageId: "ncndkfkjdfnkjnfgjndn",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 40000,
        deliveryTime: 36,
        avgRating: "4.1",
      },
    },
  ]);
  //   let listOfRestaurants = [
  //     {
  //       data: {
  //         id: "334475",
  //         name: "KFC",
  //         cloudinaryImageId: "ncndkfkjdfnkjnfgjndn",
  //         cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //         costForTwo: 40000,
  //         deliveryTime: 36,
  //         avgRating: "3.8",
  //       },
  //     },
  //     {
  //       data: {
  //         id: "334445",
  //         name: "Dominos",
  //         cloudinaryImageId: "ncndkfkjdfnkjnfgjndn",
  //         cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //         costForTwo: 40000,
  //         deliveryTime: 36,
  //         avgRating: "4.5",
  //       },
  //     },
  //   ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
        {/* <RestaurantCard resName="Meghana Foods"
                    cuisine="Biryani, North Indian, Asian" />
                <RestaurantCard resName="KFC"
                    cuisine="Burger, Fast Food" /> */}
        {/* <RestaurantCard resName="KFC"
                    cuisine="Burger, Fast Food"/>
                <RestaurantCard resName="KFC"
                    cuisine="Burger, Fast Food"/>
                <RestaurantCard resName="KFC"
                    cuisine="Burger, Fast Food"/>
                <RestaurantCard resName="KFC"
                    cuisine="Burger, Fast Food"/>
                <RestaurantCard resName="KFC"
                    cuisine="Burger, Fast Food"/> */}
      </div>
    </div>
  );
};

export default Body;
