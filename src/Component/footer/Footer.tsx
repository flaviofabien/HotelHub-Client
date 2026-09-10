import { FaFacebook, FaLinkedin, FaMicrophone, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex justify-between w-full flex-col lg:flex-row items-center lg:items-start ">
        <div>
            <h2 className="text-3xl font-black mb-4 ">ABOUT US</h2>
            <ul className="flex flex-col gap-2 text-gray-400 ">
            <li>COMPANY INFO</li>
            <li>SERVICE</li>
            <li>TEAM</li>
            <li>SOLUTIONS</li>
            </ul>
        </div>
        <div>
            <h2 className="text-3xl font-black mb-4 ">JOIN IN</h2>
            <ul className="flex flex-col gap-2 text-gray-400">
            <li>SIGN UP</li>
            <li>FORUMS</li>
            </ul>
        </div>
        <div>
            <h2 className="text-3xl font-black mb-4 ">FOLLOW US</h2>
            <div className="flex gap-2">
            <span className="bg-gray-400 p-2 rounded-lg" >
                <FaPhone className="text-white" size={20} />
            </span>
            <span className="bg-gray-400 p-2 rounded-lg">
                <FaFacebook className="text-white" size={20} />
            </span>
            <span className="bg-gray-400 p-2 rounded-lg">
                <FaMicrophone className="text-white" size={20} />
            </span>
            <span className="bg-gray-400 p-2 rounded-lg">
                <FaLinkedin className="text-white" size={20} />
            </span>

            </div>
        </div>
        <div>
            <h2 className="text-3xl font-black mb-4 ">COPYRIGHT</h2>
            <h3 className="text-5xl font-bold"> <span className="text-(--color-primary)">F</span>LAVIO</h3>
            <p className="text-gray-400">@2026 | PRIVACE POLICY</p>
        </div>
    </div>  )
}
