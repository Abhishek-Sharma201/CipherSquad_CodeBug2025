import React from 'react'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import ChooseRole from './components/ChooseRole/Chooserole'
import Sprofile from './components/ChooseRole/StudentP'
import Editprofile from './components/Editprofile/Editprofile'

const page = () => {
  return (
    <div>
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <ChooseRole/> */}
      {/* <Sprofile /> */}
      <Editprofile />
    </div>
  )
}

export default page