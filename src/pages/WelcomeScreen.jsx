import React from 'react'
import Button from '../Components/Elements/Buttons'

const WelcomeScreen = () => {
  return (
    <div className='font-inter flex w-full h-screen items-center'>
      <div className='text-center'>
      <img src="/images/first-page.png" alt="first-page" className=' w-2/3 mx-auto' />
      <h1 className=' text-4xl font-bold text-blue-900'>Quran.id</h1>
      <Button variant="bg-first px-6 mt-5">Get Started</Button>
      </div>
    </div>
  )
}

export default WelcomeScreen
