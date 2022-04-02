import React from 'react'

function AddressCard() {
    return (
        <section className='address-container'>
            <h2 className='address-title'>Address</h2>
            <hr />
            <div>
                <h3>Business Address</h3>
                <p>Black Sea Property Plc, 6th Floor, Victory House, Prospect Hill, Douglas, IM1 1EQ, Isle of Man.</p>
                <p>Phone: +44 (0)1624 681250</p>
            </div>
            <div>
                <h3>Registered Address</h3>
                <p>6th Floor, Victory House, Prospect Hill, Douglas, IM1 1EQ, Isle of Man.</p>
            </div>
        </section>
    )
}

export default AddressCard
