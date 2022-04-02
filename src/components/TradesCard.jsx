import React from 'react'

function TradesCard() {
    return (
        <section>
            <h2>Trades</h2>
            <hr />
            <div>
                <h3>Date & Time</h3>
                <ul>
                    <li>29.12.21  |  10:30:08</li>
                    <li>29.12.21  |  10:30:08</li>
                    <li>29.12.21  |  10:30:08</li>
                    <li>29.12.21  |  10:30:08</li>
                    <li>29.12.21  |  10:30:08</li>
                    <li>29.12.21  |  10:30:08</li>
                </ul>
            </div>
            <div>
                <h3>Volume</h3>
                <ul>
                    <li>354000</li>
                    <li>354000</li>
                    <li>354000</li>
                    <li>354000</li>
                    <li>354000</li>
                    <li>354000</li>
                </ul>
            </div>
            <div>
                <h3>Price</h3>
                <ul>
                    <li>0.0045</li>
                    <li>0.0045</li>
                    <li>0.0045</li>
                    <li>0.0045</li>
                    <li>0.0045</li>
                    <li>0.0045</li>
                </ul>
            </div>
            <footer>
                <button><a href="https://www.aquis.eu/aquis-stock-exchange/for-investors/trades?securityidaqse=BSP">View All Trades</a></button>
            </footer>
        </section>
        

    )
}

export default TradesCard
