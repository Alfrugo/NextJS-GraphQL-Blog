import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }) => {

    console.log(post)
    return (
        <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 mb-8 pb-12'>
            <div className='relative  shadow-md pb-80 mb-6'>
                <img 
                    src={post.featuredimage.url}
                    alt={post.title}
                    className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
                    
                    />

            <h1 className='h-20 text-center mb-8 cursor-pointer text-slate-700 text-xl font-semibold'>
              <Link href={`/post/${post.slug}`}>
                {post.title}
              
              </Link>
                Hello there 
            </h1>

            </div>
            


        </div>
    )
}

export default PostCard
