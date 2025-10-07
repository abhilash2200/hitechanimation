import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Watsappcall = () => {
  return (
    <div className="fixed left-0 top-56 flex flex-col space-y-4">
        
        <Link href="tel:+919147077609" className="bg-[#C8181D] p-1 lg:p-2 shadow-lg">
            <Image src="/assets/img/phone.png" alt="Call" className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" width={35} height={35}/>
        </Link>

        
        <Link href="https://wa.me/+919147077609" className="bg-[#0E9A46] p-1 lg:p-2 shadow-lg">
            <Image src="/assets/img/watsap.png" alt="WhatsApp" className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8" width={35} height={35}/>
        </Link>
    </div>
  )
}

export default Watsappcall