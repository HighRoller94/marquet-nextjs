import { useState } from "react";
import Image from "next/image";
import axios from "axios";

import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/cartSlice";

import ProductPageStyles from '../../styles/pages/ProductPage.module.scss'

const Product = ({ product }) => {
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className={ProductPageStyles.container}>
      <div className={ProductPageStyles.left}>
        <div className={ProductPageStyles.imgContainer}>
            <Image 
                src={product.gallery[0]} 
                fill 
                alt={product.name} 
            />
        </div>
        <div className={ProductPageStyles.gallery}>
            
        </div>
      </div>
      <div className={ProductPageStyles.right}>
        <h1 className={ProductPageStyles.title}>{product.name}</h1>
        <span className={ProductPageStyles.price}>£{product.price}</span>
        <div className={ProductPageStyles.sizes}>

        </div>
        <div className={ProductPageStyles.add}>
          <input
            type="number"
            defaultValue={1}
            className={ProductPageStyles.quantity}
          />
          <button className={ProductPageStyles.button}>
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