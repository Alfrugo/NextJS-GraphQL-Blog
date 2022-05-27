import React, { useContext } from 'react'

import Link from 'next/link'

const categories = [
    { name: 'innovation', slug: 'innovate' },
    { name: 'SEO-whitehat', slug: 'SEO'} 
]

const Header = () => {
    return (
        <div className='container mx-auto px-10 mb-8' >
            <div className='border-b w-full inline-block border-blue-600 py-8'>
                <div className='md:float-left block'>
                    <Link href='/'>
                        <span className='cursor-pointer text-4xl font-bold text-white'>
                            Blog de la leche
                        </span>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default Header
