import React from 'react'
import moment from 'moment'

const PostDetail = ( { post }) => {
    return (
        <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb8'>
            <div className='relative overflow-hidden shadow-md mb-6'>
                <img 
                    src={post.featuredimage.url}
                    alt={post.title}
                    className='object-top h-full w-full rounded-t-lg'
                />

            </div>
            <div className='px-4 lg:px-0'>
                <div className=''>
                <div>
                {moment(post.createdAt).format('MMM DD, YYYY')}
            </div>
            <div>
                {post.author.name}
            </div>
            <h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>

                </div>

            </div>
        </div>
    )
}

export default PostDetail
