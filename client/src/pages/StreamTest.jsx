import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'
import { FaSearch } from 'react-icons/fa'
import Hls from 'hls.js'

const StreamTest = () => {

    const [rtspUrl, setRtspUrl] = useState("");
    const [error, seterror] = useState("");
    const [hlsUrl, setHlsUrl] = useState("");

    const videoRef = useRef(null);

    // useEffect(() => {
    //     if (hlsUrl && Hls.isSupported()) {
    //         const hls = new Hls();
    //         hls.loadSource(hlsUrl);
    //         hls.attachMedia(videoRef.current);
    //     }
    // }, [hlsUrl]);

    // useEffect(() => {
    //     if (hlsUrl && Hls.isSupported()) {
    //         const hls = new Hls({
    //             liveDurationInfinity: true
    //         });

    //         hls.loadSource(hlsUrl);
    //         hls.attachMedia(videoRef.current);

    //         hls.on(Hls.Events.ERROR, (event, data) => {
    //             console.error(data);
    //         });

    //         return () => hls.destroy();
    //     }
    // }, [hlsUrl]);

    useEffect(() => {
        if (!hlsUrl || !videoRef.current) return;

        let hls;

        if (Hls.isSupported()) {
            hls = new Hls({
                liveSyncDurationCount: 2,
                lowLatencyMode: true
            });

            hls.loadSource(hlsUrl);
            hls.attachMedia(videoRef.current);

            hls.on(Hls.Events.ERROR, (event, data) => {
                console.error("HLS error:", data);
            });
        }

        return () => {
            if (hls) hls.destroy();
        };
    }, [hlsUrl]);



    const isValidRTSP = (url) => {
        const rtspRegEx = /^rtsp:\/\/.+/i;
        return rtspRegEx.test(url);
    }

    const handlePlay = async () => {
        if (!isValidRTSP(rtspUrl)) {
            seterror("Please enter a valid RTSP URL");
            return;
        }
        seterror("");

        const res = await fetch("http://localhost:5000/start-stream", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ rtspUrl }),
        });

        const data = await res.json();

        if (data.success) {
            setTimeout(() => {
                setHlsUrl(data.hlsUrl);
            }, 4000);


        } else {
            seterror("RTSP stream not reachable");
        }
    }


    return (
        <div>
            <div>
                <div>
                    <Navbar />
                    <PageHeader text="Test your network video stream" />

                    <div className="px-40 bg-white py-8 text-gray-800">
                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                            Here you can try your RTSP/RTSPS/RTMP/RTMPS/SRT/HTTP video stream before adding it to your account. Example of usage:
                        </p>
                        <div className='bg-gray-200 px-4 w-[80%] py-2 flex flex-col gap-2 mb-6'>
                            <p>rtsp://rtspstream:Cb79bs6ChwPz2YmVAb51R@zephyr.rtsp.stream/traffic</p>
                            <p>rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_720p.mov</p>
                            <p>rtsp://user:pass@mydomain.com:554/h264</p>
                            <p>http://user:pass@mydomain.com/mjpeg</p>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                            URL of your camera:
                        </p>

                        <div className="w-full max-w-5xl mx-auto mt-6">

                            <input
                                type="text"
                                placeholder="rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_720p.mov"
                                className="w-full px-4 py-3 rounded-md border border-blue-200 bg-blue-50 text-gray-800 
                   focus:outline-none focus:ring-2 focus:ring-blue-300"
                                value={rtspUrl}
                                onChange={(e) => setRtspUrl(e.target.value)}
                            />

                            <div className="flex justify-center mt-4">
                                <button
                                    onClick={handlePlay}
                                    className="flex items-center gap-2 bg-red-800 hover:bg-red-600 
                     text-white font-medium px-6 py-2 rounded-md transition"
                                >
                                    <FaSearch size={18} />
                                    Test
                                </button>
                                {error && <p className='text-red-600 font-semibold text-lg mt-2'>{error}</p>}

                            </div>
                            <div>
                                {hlsUrl && (
                                    <video className='mt-6 w-full'
                                        controls
                                        autoPlay
                                        ref={videoRef} />

                                )}
                            </div>


                            <div className="w-full max-w-5xl mx-auto text-center mt-14 px-4">

                                <h2 className="text-2xl font-medium text-gray-600 mb-3">
                                    ONVIF Camera Discovery Tool
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    If you do not know the proper URL of your stream{" "}
                                    <span className="text-orange-500 cursor-pointer hover:underline">
                                        this tool
                                    </span>{" "}
                                    can help you to discover the capabilities of your camera using ONVIF
                                    protocol.
                                </p>

                                <div className="my-10" />


                                <h2 className="text-2xl font-medium text-gray-600 mb-3">
                                    How-to video
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    If you need assistance for adding your video stream, you can watch{" "}
                                    <span className="text-orange-500 cursor-pointer hover:underline">
                                        this video
                                    </span>{" "}
                                    which goes through the necessary steps.
                                </p>
                                <p className="text-gray-600 text-lg mt-2">
                                    You can find useful information about adding new video stream on our{" "}
                                    <span className="text-orange-500 cursor-pointer hover:underline">
                                        FAQ
                                    </span>{" "}
                                    page.
                                </p>

                                <div className="my-10" />


                                <h2 className="text-2xl font-medium text-gray-600 mb-3">
                                    Having trouble to add your camera?
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    If you have difficulties adding your camera, do not hesitate to contact
                                    our support team! We will do our best to assist you!
                                </p>
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

export default StreamTest
