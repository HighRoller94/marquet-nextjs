import { useState } from "react";
import Image from "next/image";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "@/redux/cartSlice";

import ProductPageStyles from '../../styles/pages/ProductPage.module.scss'

const Product = ({ product }) => {
    const cart = useSelector((state) => state.cart)
    const [size, setSize] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const price = product.price
    const [added, setAdded] = useState(false)

    const handleClick = () => {
      dispatch(addProduct({ ...product, price, quantity }))
      setAdded(!added)
      console.log(cart)
    }
  
    const handleSize = (e, option) => {
        
    }

    return (
      <div className={ProductPageStyles.container}>
        <div className={ProductPageStyles.left}>
          <div>
            <div className={ProductPageStyles.imageContainer}>
                <Image 
                    src={product.gallery[0]} 
                    fill 
                    alt={product.name} 
                />
            </div>
            <div className={ProductPageStyles.gallery}>
                {product.gallery.map((image, i) => (
                    <div className={ProductPageStyles.itemContainer} key={i} >
                        <Image 
                            src={image} 
                            fill 
                            alt="Item Image"
                        />
                    </div>
              ))}
            </div>
          </div>
          
        </div>
        <div className={ProductPageStyles.right}>
          <h1 className={ProductPageStyles.title}>{product.name}</h1>
          <span className={ProductPageStyles.price}>£{product.price}</span>
          <div className={ProductPageStyles.sizes}>

          </div>
          <div className={ProductPageStyles.add}>
            <button onClick={handleClick} className={ProductPageStyles.button}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
};

export const getServerSideProps = async ({ params }) => {
    console.log(params)
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      product: res.data,
    },
  };
};

export default Product;