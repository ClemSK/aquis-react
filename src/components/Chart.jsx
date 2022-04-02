import React from 'react'
import LineGraph from './LineGraph'
import MultiTypeChart from './MultiTypeChart'

function Chart() {
    return (
        <section>
            <div>
                <ul>
                    <li>
                        Text <span>Number</span>
                    </li>
                    <li>
                        Text <span>Number</span>
                    </li>
                    <li>
                        Text <span>Number</span>
                    </li>
                    <li>
                        Text <span>Number</span>
                    </li>
                    <li>
                        Text <span>Number</span>
                    </li>
                    <li>
                        Text <span>Number</span>
                    </li>
                    <li>
                        Text <span>Number</span>
                    </li>
                    <li>
                        Text <span>Number</span>
                    </li>
                </ul>
                <div>
                    <div>
                        Price <span>key</span>
                    </div>
                    <div>
                        Value <span>key</span>
                    </div>
                </div>
            </div>
            <div>
                {/* <LineGraph /> */}
            </div>
            <div>
                <MultiTypeChart />
            </div>
            <p>
                MiFID II compliant pre- and post-trade transaction data is available here. The data is delayed by at least 15 minutes and will be refreshed every 15 minutes. 
                Publication of trades in equity securities that are large in scale compared to normal market size and illiquid non-equity securities may be delayed if the trade 
                is eligible for deferred publication in accordance with the trading rules of Aquis Stock Exchange and MiFIR. Further details as to when the publication of a trade may be deferred are set out in the trading rules which are available here.
            </p>
        </section>
    )
}

export default Chart
