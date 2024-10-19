import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { items } from "./data";

export const Product = ({ items, cart, setCart }) => {

  const addToCart = (id, price, title, descriptions, imgSrc) => {
    const obj = { id, price, title, descriptions, imgSrc };
    setCart([...cart, obj]);
    toast.success('🦄 your item is added to the cart!', {
      position: "top-right",
      autoClose: 1499,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1499}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className="container my-5">
        <div className="row">
          {items.map((item) => (
            <div className="col-lg-4 my-3" key={item.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={item.imgSrc}
                  className="card-img-top"
                  alt={item.title}
                  style={{ width: "100%", height: "300px", padding: "30px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h5 className="card-title">{item.price}</h5>

                  <button className="btn btn-primary mx-3">
                    <Link
                      to={`/Buy/${item.id}`}
                      style={{ color: "white", textDecoration: "none" }}>
                      Buy Now
                    </Link>
                  </button>
                  <button
                    onClick={() => addToCart(item.id, item.price, item.title, item.descriptions, item.imgSrc)}
                    className="btn btn-warning">

                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

