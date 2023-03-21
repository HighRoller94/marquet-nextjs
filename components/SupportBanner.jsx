import React from 'react'

const SupportBanner = () => {
  return (
    <div className="options__row">
        <div className="options">
            <div className="shipping">
            <img src="../assets/icons/delivery__icon.svg" alt="" />
            <div className="shipping__info">
                <h1>Free shipping</h1>
                <h2>On orders over £50</h2>
            </div>
            </div>
            <div className="support">
            <img src="../assets/icons/support__icon.svg" alt="" />
            <div className="support__info">
                <h1>24/7 SUPPORT</h1>
                <h2>Get in touch anytime</h2>
            </div>
            </div><div className="returns">
            <img src="../assets/icons/returns__icon.svg" alt="" />
            <div className="returns__info">
                <h1>30 day returns</h1>
                <h2>Not happy? Send it back!</h2>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SupportBanner