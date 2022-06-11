import React from 'react'
import Layout from '../layout/Layout'
import Content from './Content'
import MediaText from './MediaText'
import Tree from './Tree'
import MediaImg from './MediaImg'

const Home = () => {
  return (
    <Layout>
      <div style={{ height: '60vh' }}>
        <Content />
        <Tree />
        <MediaImg />
        <MediaText />
      </div>
    </Layout>
  )
}

export default Home
