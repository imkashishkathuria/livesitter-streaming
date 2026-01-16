import React from 'react'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import NewButton from '../components/NewButton'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <PageHeader text="ACCOUNT" />

      <div>
        <div className='flex gap-4 justify-center items-center py-20'>
          <div className='flex gap-2 items-center'>
            <div className='bg-red-700 w-8 h-8 rounded-md px-1 py-1 flex items-center justify-center text-white'>0</div>
            <p className='text-gray-900 text-xl'> Active Cameras</p>
          </div>
           <div className='flex gap-2 items-center'>
            <div className='bg-red-700 w-8 h-8 rounded-md px-1 py-1 flex items-center justify-center text-white'>0</div>
            <p className='text-gray-900 text-xl'> Online Cameras</p>
          </div>
        </div>
      </div>

      <div onClick={()=>navigate("/newcamera")}>
      <NewButton text="NEW CAMERA" />
      </div>
      <div className='pt-43'>
        <Footer />
        </div>
    </div>
  )
}

export default Dashboard
