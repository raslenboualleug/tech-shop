// src/prodcomponent/Nav.jsx
import React from 'react';
import "./nav.css"

const Nav = ({ filterByCategory }) => {
  const handleClick = (category) => {
    filterByCategory(category);
  };

  return (
    <nav>
      <ul>
        <li><a onClick={() => handleClick('keyboards')}>Keyboards</a></li>
        <li><a onClick={() => handleClick('PCs')}>PCs</a></li>
        <li><a onClick={() => handleClick('laptops')}>Laptops</a></li>
        <li><a onClick={() => handleClick('mouses')}>mouses</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
