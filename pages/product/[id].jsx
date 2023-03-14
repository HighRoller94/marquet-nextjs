import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "@/redux/cartSlice";
import Newsletter from "@/components/Newsletter";
import ProductPageStyles from '../../styles/pages/ProductPage.module.scss'

const Product = ({ product }) => {
    const cart = useSelector((state) => state.cart)
    const [size, setSize] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const price = product.price
    const [added, setAdded] = useState(false)
    const [mainImage, setMainImage] = useState(product.gallery[0])
    const handleClick = () => {
      dispatch(addProduct({ ...product, price, quantity }))
      setAdded(!added)
      console.log(cart)
    }
  
    const handleSize = (e, option) => {
        
    }

    useEffect(() => {

    }, [])

    return (
      <>
      <div className={ProductPageStyles.container}>
        <div className={ProductPageStyles.left}>
          <div className={ProductPageStyles.imageGallery}>
            <div id="imageGallery" className={ProductPageStyles.gallery}>
              {product.gallery.map((image, i) => (
                  <div className={ProductPageStyles.itemContainer} key={i} >
                      <Image 
                          className="image"
                          src={image} 
                          fill 
                          alt="Item Image"
                          onClick={() => { setMainImage(image)} }
                      />
                  </div>
              ))}
            </div>
            <div className={ProductPageStyles.imageContainer}>
                <Image 
                    id="mainImage"
                    src={mainImage} 
                    fill 
                    alt={product.name} 
                />
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
      <Newsletter />
      </>
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