import React from 'react'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

const NewCamera = () => {

    const navigate = useNavigate();
    return (
        <div>
            <div>
                <div>
                    <Navbar />
                    <PageHeader text="Add new camera" />


                    <div className="bg-white py-16">
                        {/* Heading */}
                        <h2 className="text-3xl text-center font-medium mb-12">
                            LiveSitterLiveCam provides RTSP-compatible livestream playback
                        </h2>

                        {/* Cards */}
                        <div className="mx-100 grid grid-cols-1 justify-center items-center  gap-8">

                            {/* Card 1 */}
                            <div className="bg-white rounded shadow border w-lg">
                                <div className="bg-red-800 text-white text-center font-semibold py-3">
                                    RTSP/HTTP STREAM
                                </div>

                                <div className="p-6 text-gray-600 leading-relaxed min-h-[180px]">
                                    Using this option you can add your RTSP or HTTP video stream directly.
                                </div>

                                <div className="border-t p-4 text-center" onClick={()=>navigate("/streamtest")} >
                                    <button className="border border-red-800 text-red-800 px-4 py-2 rounded hover:bg-red-800 hover:text-white transition cursor-pointer">
                                        Add new camera RTSP/HTTP stream
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>



                    <div className='pt-43'>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewCamera
