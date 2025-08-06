import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";

const ShopCategory = (props) => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = () => {
    fetch("https://tribaloobackend.onrender.com//allproducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="shopcategory">
      <img src={props.banner} className="shopcategory-banner" alt="Banner" />
      
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1 - 12</span> out of {allproducts.length} Products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="dropdown" />
        </div>
      </div>

      <div className="shopcategory-products">
        {allproducts.map((item, i) => {
          // Fixing category comparison
          const dbCategory = item.category?.toLowerCase().trim();
          const propCategory = props.category?.toLowerCase().trim();

          // Debugging log
          console.log(`Item: ${item.name}, DB Category: ${dbCategory}`);

          if (dbCategory === propCategory) {
            return (
              <Item
                id={item.id}
                key={i}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      <div className="shopcategory-loadmore">
        <Link to="/" style={{ textDecoration: "none" }}>
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default ShopCategory;
