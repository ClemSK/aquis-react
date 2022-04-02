import React from 'react'

function KeyInfo() {
    return (
        <section className='keyInfo-container'>
        <div>
            <h2 className='keyInfo-title'>Key Information</h2>
        </div>
        <hr />
        <div className='keyInfo-grid'>
        <div >
            <ul>
                <li>Market Cap</li>
                <li>ISIN</li>
                <li>Par</li>
                <li>Inst Type</li>
                <li>Symbol</li>
                <li>MIFID Status</li>
                <li>Tradable securities in issue</li>
                <li>Sector</li>
                <li>% daily price change</li>
            </ul>
        </div>
        <div>
            <ul>
                <li>€5,439,971</li>
                <li>IM00BYQLTS50</li>
                <li>0</li>
                <li>Ordinaries</li>
                <li>BSP</li>
                <li>MTF</li>
                <li>1,813,323,603</li>
                <li>Real Estate Investment & Services</li>
                <li>0.00% </li>
            </ul>
        </div>
        </div>
        </section>
    )
}

export default KeyInfo
