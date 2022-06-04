import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }) => {

    console.log(post)
    return (
        <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 mb-8 pb-4'>
            <div className='relative  shadow-md '>
                <img 
                    src={post.featuredimage.url}
                    alt={post.title}
                    className='object-top relative h-100 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
                />

            <h1 className='pt-5 h-14 text-center  cursor-pointer text-slate-700 text-xl font-semibold'>
              <Link href={`/post/${post.slug}`}>
                {post.title}
              </Link>
            </h1>
            <div>
                {moment(post.createdAt).format('MMM DD, YYYY')}
            </div>
            <div>
                {post.author.name}
            </div>
            <div className='p-5'>
                {post.excerpt}
            </div>

            </div>
            


        </div>
    )
}

export default PostCard
