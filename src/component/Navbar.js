import React, { useState } from 'react';
import { items } from './data'; // Ensure this imports the correct data
import { useNavigate } from 'react-router-dom'; // Correct import for useNavigate
import { Link } from "react-router-dom";
import './Navbar.css';

export const Navbar = ({ setData ,cart }) => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();

        navigate(`/search/${search}`);

    }

    const filterByCategory = (category) => {
        setData(items.filter(item => item.category === category));
    }

    const filterByPriceLess = (price) => {
        setData(items.filter(item => item.price <= price));
    }

    const filterByPriceMore = (price) => {
        setData(items.filter(item => item.price >= price));
    }

    return (
        <header className='sticky-top'>
            <div className='nav-bar'>
                <div className='brand'>E-CART</div>
                <div className='search-bar'>
                    <form onSubmit={handleSearch}>
                        <input
                            type='search'
                            placeholder='Search'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>
                </div>
                <div className='cart'>
                <Link to={"/cart"}  style={{ color: "white", textDecoration: "none" }}>
                    <button type="button" className="btn btn-primary position-relative">
                    
                    <i className="fa-solid fa-cart-shopping"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {cart.length}
                            </span>
                    </button>
                    </Link>
                </div>
            </div>
            <div className='nav-link'>
                <ul>
                    <li onClick={() => setData(items)}>Home</li>
                    <li onClick={() => filterByCategory('mobile')}>Mobile</li>
                    <li onClick={() => filterByCategory('laptop')}>Laptop</li>
                    <li onClick={() => filterByCategory('clothes')}>Clothes</li>
                    <li onClick={() => filterByPriceLess(50000)}>--50000</li>
                    <li onClick={() => filterByPriceMore(50000)}>50000++</li>
                </ul>
            </div>
        </header>
    );
}
