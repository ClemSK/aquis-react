import React from 'react'
import Announcements from './Announcements'
import TradesCard from './TradesCard'

function ContextualInfo() {
    return (
       <section>
           <div className='context-info-grid'>
               <Announcements />
               <TradesCard />

           </div>
       </section>
    )
}

export default ContextualInfo
