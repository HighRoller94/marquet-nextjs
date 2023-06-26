import React, { useState } from "react";
import { useSelector } from "react-redux";

import SubtotalStyles from "../../styles/components/Subtotal.module.scss";
function Subtotal({ formData }) {
  const total = useSelector((state) => state.cart.total);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className={SubtotalStyles.orderInfo}>
      <div className={SubtotalStyles.wrapper}>
        <div className={SubtotalStyles.info}>
          <div>Total:</div>
          <div>£{total.toFixed(2)}</div>
        </div>
        <div className={SubtotalStyles.info}>
          <div>Savings:</div>
          <div>£0.00</div>
        </div>
        <div className={SubtotalStyles.subtotal}>
          <div>Subtotal:</div>
          <div>£{total.toFixed(2)}</div>
        </div>
        {!formData ? (
          <button className="disabledBtn" disabled>
            Confirm Order
          </button>
        ) : (
          <button className="confirmedBtn" type="submit" form="deliveryForm">
            {!isLoading ? (
              "Confirm Order"
            ) : (
              <p className="loading" id="loading"></p>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default Subtotal;
