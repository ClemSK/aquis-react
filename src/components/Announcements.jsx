import React from 'react'

function Announcements() {
    return (
        <section className='announcement-container'>
            <div>
                <h2 className='announcement-title'>Latest Announcements</h2>
                <span><a href="https://www.aquis.eu/aquis-stock-exchange/for-investors/announcements?securityidaqse=BSP">View All Announcements</a></span>
            </div>
            <hr />
            <div className='announcement-grid'>
            <div >
                <h3>Date & Time</h3>
                <ul>
                    <li>12/12/2022 12:12:12</li>
                    <li>12/12/2022 12:12:12</li>
                    <li>12/12/2022 12:12:12</li>
                    <li>12/12/2022 12:12:12</li>
                    <li>12/12/2022 12:12:12</li>
                    <li>12/12/2022 12:12:12</li>
                </ul>
            </div>
            <div>
                <h3>Title</h3>
                <ul>
                    <li>An annoncement about a compamy and their financial status</li>
                    <li>An annoncement about a compamy and their financial status</li>
                    <li>An annoncement about a compamy and their financial status</li>
                    <li>An annoncement about a compamy and their financial status</li>
                    <li>An annoncement about a compamy and their financial status</li>
                    <li>An annoncement about a compamy and their financial status</li>
                </ul>
            </div>
            </div>
        </section>
    )
}

export default Announcements
