import React, { Component } from 'react'
import BaseLayout from '../components/layouts/baseLayout'
import axios from 'axios';

class Index extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Iam title'
    }
  }

  static async getInitialProps() {
    let userData = {}
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      userData = response.data
    } catch(err) {
      console.log(err)
    }
   
    // .then(response => console.log(response.data))
    // .catch(err => console.log(err))

    return {initialData: [1, 2, 3, 4], userData}
  }

  componentDidMount() {
    console.log('Iam component did mount ')
  }

  componentDidUpdate() {
    console.log('Iam component did update')
  }

  componentWillUnmount() {
    console.log('Iam WillUnmount')
  }
  render() {
    // debugger;
    const { title } = this.state
    const { userData,initialData } = this.props
    return(
      <BaseLayout>
        <h1>{ title }</h1>
        <h1>{ userData.title }</h1>
        <p style={{ 'fontSize' : '30px' }}>I am P styled </p>
        <p className='classStyled'> I am P styled from scss</p>
      </BaseLayout>
    )
  }
}

export default Index