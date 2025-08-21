import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="Meghana Foods"
                    cuisine="Biryani, North Indian, Asian" />
                <RestaurantCard resName="KFC"
                    cuisine="Burger, Fast Food" />
                {/* <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard /> */}
            </div>
        </div>
    )
}

export default Body;