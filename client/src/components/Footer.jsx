import {
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#8c8e91] text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* About Us */}
        <div>
          <h4 className="text-red-800 font-bold mb-4">About Us</h4>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">How does it work?</li>
            <li className="hover:underline cursor-pointer">Pricing</li>
            <li className="hover:underline cursor-pointer">FAQs</li>
            <li className="hover:underline cursor-pointer">Terms of Use</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">How to contact IPCamLive team</li>
          </ul>

          <h4 className="text-red-800 font-bold mt-6 mb-4">
            Partner program
          </h4>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Affiliate program</li>
            <li className="hover:underline cursor-pointer">Premium membership program</li>
            <li className="hover:underline cursor-pointer">White label program</li>
            <li className="hover:underline cursor-pointer">Custom solution program</li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-6">
            <div className="bg-red-800 p-3 rounded-full">
              <FaYoutube />
            </div>
            <div className="bg-red-800 p-3 rounded-full">
              <FaLinkedinIn />
            </div>
            <div className="bg-red-800 p-3 rounded-full">
              <FaFacebookF />
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h4 className="text-red-800 font-semibold mb-4">Key features</h4>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Video storage</li>
            <li className="hover:underline cursor-pointer">Time-lapse hub</li>
            <li className="hover:underline cursor-pointer">
              Low latency streaming <span className="text-red-800 text-xs ml-1">NEW</span>
            </li>
            <li>
              Scheduled streaming <span className="text-red-800 text-xs ml-1">NEW</span>
            </li>
            <li className="hover:underline cursor-pointer">Overlay panel</li>
            <li className="hover:underline cursor-pointer">Pin lock</li>
            <li className="hover:underline cursor-pointer">Face blur</li>
            <li className="hover:underline cursor-pointer">Social media streaming</li>
            <li className="hover:underline cursor-pointer">Camera navigation</li>
            <li className="hover:underline cursor-pointer">Customized player</li>
            <li className="hover:underline cursor-pointer">Camera Streaming Application (ICSA)</li>
            <li className="hover:underline cursor-pointer">Secure RTSP streaming</li>
            <li className="hover:underline cursor-pointer">WordPress plugin</li>
            <li className="hover:underline cursor-pointer">Supported platforms</li>
          </ul>
        </div>

        {/* Solutions & Cameras */}
        <div>
          <h4 className="text-red-800 font-bold mb-4">Solutions</h4>
          <ul className="space-y-2 mb-6">
            <li className="hover:underline cursor-pointer">Get your hotel guests back</li>
            <li className="hover:underline cursor-pointer">Show how safe your kitchen is</li>
            <li className="hover:underline cursor-pointer">Church webcast</li>
            <li className="hover:underline cursor-pointer">Funeral webcast</li>
            <li className="hover:underline cursor-pointer">Construction projects</li>
            <li className="hover:underline cursor-pointer">Yacht clubs</li>
          </ul>

          <h4 className="text-red-800 font-bold mb-4">Cameras</h4>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Try your camera</li>
            <li className="hover:underline cursor-pointer">RTSP/RTMP/HTTP stream tester</li>
            <li className="hover:underline cursor-pointer">RTSP database</li>
            <li className="hover:underline cursor-pointer">ONVIF discovery tool</li>
          </ul>
        </div>

        {/* Knowledge Base */}
        <div>
          <h4 className="text-red-800 font-bold mb-4">
            Knowledge base
          </h4>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">How to choose an IP camera?</li>
            <li className="hover:underline cursor-pointer">Hikvision settings for live streaming</li>
            <li className="hover:underline cursor-pointer">Understanding RTMP</li>
            <li className="hover:underline cursor-pointer">
              SRT protocol explained{" "}
              <span className="text-red-800 text-xs ml-1">NEW</span>
            </li>
            <li className="hover:underline cursor-pointer">How to stream to Social Platforms</li>
            <li className="hover:underline cursor-pointer">
              How to troubleshoot your camera{" "}
              <span className="text-red-800 text-xs ml-1">NEW</span>
            </li>
          </ul>
        </div>

        {/* Main Partners */}
        <div>
          <h4 className="text-red-800 font-bold mb-4">
            Main partners
          </h4>
          <ul className="space-y-2">
            <li className="hover:underline cursor-pointer">Ancrest</li>
            <li className="hover:underline cursor-pointer">Avigilon</li>
            <li className="hover:underline cursor-pointer">AVTech</li>
            <li className="hover:underline cursor-pointer">Axis</li>
            <li className="hover:underline cursor-pointer">Bosch</li>
            <li className="hover:underline cursor-pointer">CPPlus</li>
            <li className="hover:underline cursor-pointer">Dahua</li>
            <li className="hover:underline cursor-pointer">D-Link</li>
            <li className="hover:underline cursor-pointer">Eneo</li>
            <li className="hover:underline cursor-pointer">Foscam</li>
            <li className="hover:underline cursor-pointer">Geovision</li>
            <li className="hover:underline cursor-pointer">Hanwha</li>
            <li className="hover:underline cursor-pointer">Hikvision</li>
            <li className="hover:underline cursor-pointer">
              Ids <span className="text-red-800 text-xs ml-1">NEW</span>
            </li>
            <li>Panasonic</li>
            <li className="hover:underline cursor-pointer">
              Reolink <span className="text-red-800 text-xs ml-1">NEW</span>
            </li>
            <li className="hover:underline cursor-pointer">TRENDnet</li>
            <li className="hover:underline cursor-pointer">Uniview</li>
            <li className="hover:underline cursor-pointer">Viewtron</li>
            <li className="hover:underline cursor-pointer">Vivotek</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#f1f1f1] text-center text-gray-600 py-4 text-xs">
        Copyright © 2026 IPCamLive Inc.{" "}
        <span className="text-red-800 hover:underline cursor-pointer">
          Terms of Use, Privacy Policy and Cybersecurity.
        </span>
      </div>

      {/* Support Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2">
        <button className="bg-red-800 text-white px-4 py-3 rotate-90 origin-bottom-right rounded-t">
          Support
        </button>
      </div>
    </footer>
  );
};

export default Footer;
