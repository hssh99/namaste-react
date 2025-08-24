import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const resData = [
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
  ];

  useEffect(() => {
    fetchData();
    setListOfRestaurants(resData);
    setFilteredRestaurant(resData);
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // Optional Chaining
    // setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };

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

  // Conditional Rendering
  //   if (listOfRestaurants.length === 0) {
  //     return <Shimmer />;
  //   }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // searchText
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
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
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
        {/* <RestaurantCard
          resName="Meghana Foods"
          cuisine="Biryani, North Indian, Asian"
        />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
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
