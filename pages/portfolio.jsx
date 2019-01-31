import React, { Component } from 'react'
import BaseLayout from '../components/layouts/baseLayout'
import { withRouter } from 'next/router'
import axios from 'axios'

class Portfolio extends Component {
  static async getInitialProps({ query }) {
    const portfolioId = query.id
    let portfolio = {}
    try {
      const response  = await axios.get(`https://jsonplaceholder.typicode.com/posts/${portfolioId}`)
      portfolio = response.data
    } catch(err) {
      console.log(err)
    }
    return {portfolio}
  }
  render () {
    const { portfolio } = this.props
    return (
      <BaseLayout>
        <h1>{ portfolio.title }</h1>
        <h2>{ portfolio.body }</h2>
        <h2> ID: { portfolio.id }</h2>
      </BaseLayout>
    )
  }
}

export default withRouter(Portfolio)