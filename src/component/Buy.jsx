import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { items } from "./data";
import { Product } from './product'

export const ProductDatial = () => {
  const { id } = useParams()
  const [item, setItem] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const item = items.find((i) => i.id === parseInt(id))
    if (item) setItem(item)

    setRelatedProducts(items.filter((i) => i.category === item.category));
  }, [id])

  return (

    <>
      <div class="container ">
        <div class="row my-4">
          <div class="col">
            <img src={item.imgSrc} alt="" srcset="" style={{ width: "500px", height: "450px", display: "flex", justifyContent: "center", alignItems: "center" }} />
          </div>
          <div class="col" style={{ display: "flex", flexDirection: "column", justifyContent: "center", }}>
            <h2>{item.title}</h2>
            <h4>Price: ₹{item.price}</h4>
            <p>{item.descriptions}</p>
            <div>
              <button className="btn btn-primary mx-3">

                <Link to="/form" style={{ color: "white", textDecoration: "none" }}>Buy Now</Link>
              </button>
              <button className="btn btn-warning">Add to card</button>
            </div>
          </div>
        </div>
      </div>
      <h1 style={{textAlign:"center"}}> Related Products</h1>
      <Product items={relatedProducts} />
    </>
  )
}

