
import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import { PostCard, PostWidget, Categories} from '../components'

import { getPosts } from '../services'





export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>My Next JS GraphQL blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-8 '>
          {posts.map((post, index) =>  (
            <PostCard post={post.node} key={index} /> 
            ))}
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='lg:sticky relative top-8'>
            
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []

  return {
    props: { posts }
  }

}

// export default Home
