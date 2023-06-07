import React from 'react'

import SaleBannerStyles from '../styles/components/SaleBanner.module.scss'

export default function SaleBanner() {
    return (
        <div className={SaleBannerStyles.sale}>
            <div className={SaleBannerStyles.saleText}>
                <h4>Hurry! Sale ends in</h4>
            </div>
            <span className={SaleBannerStyles.timer} id="timer"></span>
        </div>
    )
}
