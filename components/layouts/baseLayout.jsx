import Header from '../shared/header'
import '../../style/main.scss'

const BaseLayout = (props) => {
  return(
    <>
      <Header />
      {props.children}
    </>
  )
}

export default BaseLayout