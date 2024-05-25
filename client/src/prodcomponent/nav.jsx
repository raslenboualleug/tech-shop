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
    <li><a onClick={() => handleClick('home')}><i className="fas fa-home"></i></a></li>
        <li><a onClick={() => handleClick('keyboards')}><i className="fas fa-keyboard"></i></a></li>
        <li><a onClick={() => handleClick('PCs')}><i className="fas fa-desktop"></i></a></li>
        <li><a onClick={() => handleClick('laptops')}><i className="fas fa-laptop"></i></a></li>
        <li><a onClick={() => handleClick('mouses')}><i className="fas fa-mouse"></i></a></li>
    </ul>
</nav>

  );
};

export default Nav;
