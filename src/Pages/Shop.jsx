import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  const [popular, setPopular] = useState([]);
  const [newcollection, setNewCollection] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const res = await fetch('https://tribaloobackend.onrender.com/allproducts');
        const data = await res.json();
        const filteredDelights = data.filter(item => item.category === 'delights');
        setPopular(filteredDelights);

        const res2 = await fetch('https://tribaloobackend.onrender.com/newcollections');
        const data2 = await res2.json();
        setNewCollection(data2);
      } catch (err) {
        console.error("Failed to fetch data", err);
      }
    };

    fetchInfo();
  }, []);

  return (
    <div>
      <Hero />
      <Popular data={popular} />
      <Offers />
      <NewCollections data={newcollection} />
      <NewsLetter />
    </div>
  );
};

export default Shop;
