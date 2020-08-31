import React from 'react';
import ProductCard from './ProductCard';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Home() {

    const [infoProducts, setInfoProducts] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then(res => {
                setInfoProducts(res.data)
            })
            .catch()
    }, [])



    return (
        <div>
            <ul className="products">
                {
                    infoProducts.map(el => (

                        <li key={el.id}>
                            <div className="product">
                                <ProductCard
                                    name={el.Name}
                                    price={el.Price}
                                    stock={el.Stock}
                                    description={el.Description}
                                    category={el.Category}
                                    id={el.id}
                                />
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Home;
