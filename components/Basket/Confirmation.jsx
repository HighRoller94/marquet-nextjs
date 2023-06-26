"use client"
import { useEffect, useState } from 'react'

import ConfirmationStyles from '../../styles/components/Confirmation.module.scss'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const customId = "cancel-id-yes";

const Confirmation = ({ modalOpen, handleModal }) => {
  const [orders, setOrders] = useState()

  const notify = () => toast("Order Cancelled", {
    closeOnClick: true,
    autoClose: 3000,
    hideProgressBar: true,
    className: 'toast',
    toastId: customId
  });

  useEffect(() => {
    const getOrders = async () => {
      const items = JSON.parse(localStorage.getItem('Marquet Order'));
      setOrders(items)
      return items;
    }

    getOrders();
  }, []);
  
  return (
    <div className={ConfirmationStyles.confirmationPage}>
      <div className={ConfirmationStyles.left} >
        <div className={ConfirmationStyles.header}>
          <h2>Order Number: #{orders?.orderNumber}</h2>
        </div>  
        <div className={ConfirmationStyles.header}>
          <h2>Delivery Info</h2>
        </div>
        <div className={ConfirmationStyles.deliveryInfo}>
            <div>
              <h4>Deliver to:</h4>
              <div className={ConfirmationStyles.info}>
                <p>{orders?.name}</p>
                <div className={ConfirmationStyles.street}>
                  <p>{orders?.houseNumber} </p>
                  <p> {orders?.street}</p>
                </div>
                <p>{orders?.town}</p>
                <p>{orders?.postCode}</p>
              </div>
            </div>
            <div className={ConfirmationStyles.paymentInfo}>
                <div className={ConfirmationStyles.deliveryInstructions}>
                  <h4>Delivery Instructions:</h4>
                  {!orders?.deliveryInstructions === '' ? (
                  <p>{orders?.deliveryInstructions}</p>
                  ) : (
                  <p>None</p>
                  )}
                </div>
                <div className={ConfirmationStyles.paymentType}>
                  <h4>Payment Type:</h4>
                  <p>{orders?.paymentType}</p>
                </div>
            </div>
        </div>
        <div className={ConfirmationStyles.orders}>
          <div className={ConfirmationStyles.header}>
            <h2>Order Information</h2>
          </div>
          <div className={ConfirmationStyles.confirmedOrders}>
              {orders?.products.map((product, i) => (
                <div></div>
              ))}
          </div>
        </div>
        
      </div>
      <div className={ConfirmationStyles.right} >
      <div className={ConfirmationStyles.orderInfo}>
          <div className={ConfirmationStyles.wrapper}>
            <div className={ConfirmationStyles.info}>
                <div>
                  Total:
                </div>
                <div>
                    £{orders?.total.toFixed(2)}
                </div>
            </div>
            <div className={ConfirmationStyles.info}>
              <div>
                  Savings:
              </div>
              <div>
                  £0.00
              </div>
            </div>
            <div className={ConfirmationStyles.subtotal}>
              <div>
                  Subtotal:
              </div>
              <div>
                £{orders?.total.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirmation