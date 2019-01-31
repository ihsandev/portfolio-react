import React, { Component } from 'react'
import Link from 'next/link'

class Header extends Component {
  render () {
    const title = this.props.title;
    return(
      <>
        <h5>{title}</h5>
        <Link href="/">
          <a style={{ 'fontSize' : '20px' }}>Home</a>
        </Link>
  
        <Link href="/about">
          <a>About</a>
        </Link>
  
        <Link href="/portfolios">
          <a>Portfolio</a>
        </Link>
  
        <Link href="/blogs">
          <a>Blogs</a>
        </Link>
  
        <style jsx>
          
        </style>
      </>
    )
  }
}

export default Header