import React from 'react'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import NewButton from '../components/NewButton'
import Footer from '../components/Footer'

const Cameras = () => {
  return (
    <div>
      <Navbar />
      <PageHeader text="CAMERAS" />


      <div className="px-6 py-10">
        {/* Table Header */}
        <div className="grid grid-cols-5 px-6 py-4 text-lg text-gray-400 font-medium">
          <div>Alias</div>
          <div>Name</div>
          <div>Features</div>
          <div>Enabled</div>
          <div>Online</div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300" />

        {/* Empty State */}
        <div className="px-6 py-6 text-lg text-gray-400 font-medium">
          No data to display
        </div>
      </div>
      <div className='py-10'><NewButton text="NEW CAMERA" /></div>
      
      <div className='pt-43'>
        <Footer />
      </div>
    </div>
  )
}

export default Cameras
