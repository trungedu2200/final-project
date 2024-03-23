import React, { useState, useContext } from 'react';
import './FoodDisplay.css';
import FoodItem from '../FoodItem/FoodItem';
import { StoreContext } from '../../Context/StoreContext';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const filteredFoodList = food_list.filter(
    (item) =>
      (category === 'All' || category === item.food_category) &&
      (searchTerm === '' ||
        item.food_name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const sortedFoodList = filteredFoodList.sort((a, b) => {
    if (sortBy === 'name') {
      return a.food_name.localeCompare(b.food_name);
    } else if (sortBy === 'rating') {
      return b.food_rating - a.food_rating;
    } else if (sortBy === 'price') {
      return a.food_price - b.food_price;
    }
    return 0;
  });

  return (
    <div className='food-display' id='food-display'>
      <div className="food-display-head">
      <h2>Top dishes near you</h2>
      <div className='food-search'>
      <div className='search-bar'>
        <input
          type='text'
          placeholder='Find your dishes...'
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className='filters'>
        <select value={sortBy} onChange={handleSortChange}>
          <option value='name'>Sort by Name</option>
          <option value='rating'>Sort by Rating</option>
          <option value='price'>Sort by Price</option>
        </select>
      </div>
      </div>

      </div>
      <div className='food-display-list'>
        {sortedFoodList.map((item) => (
          <FoodItem
            key={item.food_id}
            image={item.food_image}
            name={item.food_name}
            desc={item.food_desc}
            price={item.food_price}
            id={item.food_id}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay
