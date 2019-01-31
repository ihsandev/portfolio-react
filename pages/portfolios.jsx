import React, { Component } from 'react'
import BaseLayout from '../components/layouts/baseLayout'
import axios from 'axios'
// import Link from 'next/link'
import {Link} from '../routes'

class Portfolios extends Component {

  static async getInitialProps() {
    let posts = []
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      posts = response.data
    }catch(err) {
      console.log(err)
    }

    return {posts: posts.splice(0, 10)}
  }

  render () {
    const {posts} = this.props
    return (
      <BaseLayout>
        <h1>Portfolios Page</h1>
        <ul>
          {
            posts.map((post, i) => {
              return (
                <li key={i}>
                  <Link route={`/portfolio/${post.id}`}>
                    <a>
                      { post.title }
                    </a>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </BaseLayout>
    )
  }
}

export default Portfolios