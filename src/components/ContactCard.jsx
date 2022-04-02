import React from 'react'

function ContactCard() {
    return (
        <section>
            <h2>Contact</h2>
            <hr />
            <div>
                <h3>Corporate Adviser</h3>
                <p>Peterhouse Capital Ltd, 3rd Floor, 80 Cheapside, London, United Kingdom.</p>
                <p>Email<a href="mailto:info@pcorpfin.com">info@pcorpfin.com</a></p>
                <p>Phone: +44 (0)20 7469 0930</p>
            </div>
            <div>
                <h3>Registrar</h3>
                <p>Share Registrars Ltd, The Courtyard, 17 West Street, Farnham, Surrey, GU9 7DR, United Kingdom.</p>
                <p>Email<a href="mailto:enquiries@shareregistrars.uk.com">enquiries@shareregistrars.uk.com</a></p>
                <p>Phone: 01252 821390</p>
            </div>
        </section>
    )
}

export default ContactCard
