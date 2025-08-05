import React from 'react'
import './Popular.css'
import Item from '../Item/Item'

const Popular = (props) => {
  console.log("All data received in Popular:", props.data);
  console.log("Delights items:", props.data.filter(item => item.category?.toLowerCase() === "delights"));

  return (
    <div className='popular'>
      <h1>POPULAR HERE</h1>
      <hr />
      <div className="popular-item">
        {props.data
          .filter(item => item.category?.toLowerCase() === "delights")
          .map((item, index) => (
            <Item
              id={item.id}
              key={index}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
        ))}
      </div>
    </div>
  )
}

export default Popular
