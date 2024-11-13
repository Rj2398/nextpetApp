//Update

import Header from '../../components/Header'
import Footer from '../../components/Footer'
// import { Children } from 'react'
import 'react-toastify/dist/ReactToastify.css'; // update
import { ToastContainer } from 'react-toastify'; //Update




const Layout = ({children}) => {

  return (
    <>
     {/* <Header /> */}
      {children}
      <ToastContainer/>
      {/* <Footer /> */}
    </>
  )
}

export default Layout