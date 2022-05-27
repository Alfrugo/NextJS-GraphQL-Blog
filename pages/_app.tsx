import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'

import React, { useEffect, useState } from 'react'
import { Layout } from '../components'
// import { Layout } from '../components/Layout'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
   </Layout>
  )
}

export default MyApp
