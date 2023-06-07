"use client"

import React, { useState, useEffect } from 'react'
import Image from "next/image";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { FaBox, FaShoppingCart } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux'

import ProductPageStyles from '../../styles/pages/ProductPage.module.scss'

export default function Product({ product }) {
    
  const cart = useSelector((state) => state.cart)
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const [saved, setSaved] = useState("");
  const price = product.price;
  const [added, setAdded] = useState(false)
  const [mainImage, setMainImage] = useState("")
  const [productsFound, setProductsFound] = useState([])
  const item = productsFound.find((savedProduct) => savedProduct.name === product.name);
  const [clicked, setClicked] = useState(false)

  const saveProductToFavourites = () => {
    const savedProducts = JSON.parse(localStorage.getItem('savedProducts'));
    localStorage.setItem(`savedProducts`, JSON.stringify([...savedProducts, product]));
    setSaved(true);
    setClicked(true);
  }

  const handleClick = () => {
    dispatch(addProduct({ ...product, price, quantity }))
    setAdded(true);
  };

  const removeProductFromFavourites = () => {
    const savedProducts = JSON.parse(localStorage.getItem('savedProducts'));
    savedProducts.forEach(savedProduct => {
      if (savedProduct._id === product._id) {
        const index = savedProducts.indexOf(savedProduct)
        if (index > -1) {
          savedProducts.splice(index, 1)
          localStorage.setItem(`savedProducts`, JSON.stringify(savedProducts));;
        }
        setSaved(false);
      }
    })
  }

  useEffect(() => {
    setMainImage(product.gallery[0])
    document.getElementById("submit").value = ''
    const savedProducts = JSON.parse(localStorage.getItem('savedProducts'));
    setProductsFound(savedProducts)
  }, [product, saved])

  return (
    <div className={ProductPageStyles.container}>
          <div className={ProductPageStyles.wrapper}>
            <div className={ProductPageStyles.left}>
              <div className={ProductPageStyles.imageGallery}>
                <div id="imageGallery" className={ProductPageStyles.gallery}>
                  {product.gallery.map((image, i) => (
                    <div className={ProductPageStyles.itemContainer} key={i} onClick={() => { setMainImage(image) }} >
                      <Image
                        className="image"
                        src={image}
                        fill
                        alt="Item Image"
                      />
                      <div className={ProductPageStyles.iconHolder}>
                        <AiFillEye className={ProductPageStyles.iconEye} />
                      </div>
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
              <span className={ProductPageStyles.type}>{product.type}</span>
              <h1 className={ProductPageStyles.title}>{product.name}</h1>
              <span className={ProductPageStyles.price}>£{product.price}</span>
              <div className={ProductPageStyles.sizes}>
                <h4>Size:</h4>
                <select className="item__size">
                  <option>Please select</option>
                  {product.sizes.map((size, i) => (
                    <option key={i}>{size}</option>
                  ))}
                </select>
              </div>
              <div className={ProductPageStyles.add}>
                  <button onClick={handleClick} className={added ? (`${ProductPageStyles.cartButton} ${ProductPageStyles.itemAdded}`) : ( `${ProductPageStyles.cartButton}` )}>
                    <span className={ProductPageStyles.addToCart}>Add to Cart</span>
                    <span className={ProductPageStyles.added}>Added to Cart</span>
                    <FaShoppingCart className={ProductPageStyles.cartIcon}/>
                    <FaBox className={ProductPageStyles.cartItem}/>
                  </button>
                {item ? (
                  <div className={ProductPageStyles.iconHolder}>
                    <HiHeart className={clicked ? (`${ProductPageStyles.favIcon} ${ProductPageStyles.fill} ${ProductPageStyles.clicked}`) : (`${ProductPageStyles.favIcon} ${ProductPageStyles.fill} `)} onClick={removeProductFromFavourites} />
                  </div>
                ) : (
                  <div className={ProductPageStyles.iconHolder}>
                    <HiOutlineHeart className={ProductPageStyles.favIcon} onClick={saveProductToFavourites} />
                  </div>
                )}
              </div>
              <div className={ProductPageStyles.desc}>
                <div className={ProductPageStyles.descHeader}>
                  <h2>Product Details</h2>
                  <MdInfo className={ProductPageStyles.descIcon} />
                </div>
                <p className={ProductPageStyles.descBody}>{product.desc}</p>
              </div>
            </div>
          </div>
        </div>
  )
}
