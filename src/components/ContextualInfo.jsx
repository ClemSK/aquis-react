import React from 'react'
import Announcements from './Announcements'
import TradesCard from './TradesCard'
import AddressCard from './AddressCard'
import ContactCard from './ContactCard'
import ResearchCard from './ResearchCard'

function ContextualInfo() {
    return (
       <section>
           <div className='context-info-grid'>
               <div>

               <Announcements />
               </div>
               <TradesCard />
               <AddressCard />
               <ContactCard />
               <ResearchCard />
           </div>
       </section>
    )
}

export default ContextualInfo
