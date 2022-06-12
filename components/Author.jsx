import React from 'react'
import Image from 'next/image'

const Author = ( { author }) => {
    return (
        <div>
            <div>
                <Image
                    alt={author.name}
                    unoptimized
                    height='100px'
                    width='100px'
                    className='align-middle rounded-full'
                    src={author.photo.url}
                
                />

            </div>
        </div>
    )
}

export default Author
