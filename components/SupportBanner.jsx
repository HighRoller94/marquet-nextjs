import React from 'react'

const SupportBanner = () => {
  return (
    <div class="options__row">
        <div class="options">
            <div class="shipping">
            <img src="../assets/icons/delivery__icon.svg" alt="" />
            <div class="shipping__info">
                <h1>Free shipping</h1>
                <h2>On orders over £50</h2>
            </div>
            </div>
            <div class="support">
            <img src="../assets/icons/support__icon.svg" alt="" />
            <div class="support__info">
                <h1>24/7 SUPPORT</h1>
                <h2>Get in touch anytime</h2>
            </div>
            </div><div class="returns">
            <img src="../assets/icons/returns__icon.svg" alt="" />
            <div class="returns__info">
                <h1>30 day returns</h1>
                <h2>Not happy? Send it back!</h2>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SupportBanner