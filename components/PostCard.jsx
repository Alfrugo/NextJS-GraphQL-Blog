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

                <div className='text-center'>
                    <Link href={`/post/${post.slug}`}>
                        <span className='transition duration-500 transform hover:-translate-y-1 hover:bg-teal-800 hover:shadow-md  inline-block bg-red-700 text-cyan-50 text-lg font-medium rounded-full px-8 py-3 cursor-pointer'>
                            Continue reading
                        </span>
                    </Link>


                </div>
            </div>

            </div>
            


        </div>
    )
}

export default PostCard
