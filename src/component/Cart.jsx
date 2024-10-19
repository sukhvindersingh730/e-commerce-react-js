import React from 'react';

export const Cart = ({ cart }) => {
    return (
        <div className="container">
            {cart.map((item) => (
                <div className="card mb-3" style={{ maxWidth: "540px" }} key={item.id}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={item.imgSrc} className="img-fluid rounded-start" alt={item.title} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.descriptions}</p>
                                <p className="card-text"><small className="text-body-secondary">Price: ${item.price}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
