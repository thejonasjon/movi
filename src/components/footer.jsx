import { Film, Moon } from "lucide-react";

function Footer(){
    return(
        <footer className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-t-gray-700 bg-black text-white px-10 py-4 md:py-4">
            <div>
                <div>
                    <a className="text-base font-medium text-gray-400  hover:text-gray-200 transition-all ease-in-out flex items-center gap-2" href="#"> <Film /> MOVI</a>
                </div>
            </div>

            <ul className="main-nav flex gap-4">
                {/* <li><a className="text-xs font-light text-gray-400 hover:underline hover:text-blue-500 transition-all ease-in-out" href="#">Home</a></li>
                <li><a className="text-xs font-light text-gray-400 hover:underline hover:text-blue-500 transition-all ease-in-out" href="#">Search</a></li>
                <li><a className="text-xs font-light text-gray-400 hover:underline hover:text-blue-500 transition-all ease-in-out" href="#">Profile</a></li> */}
                <li><a className="text-xs font-light text-gray-400 hover:underline hover:text-blue-500 transition-all ease-in-out" href="https://github.com/thejonasjon/movi">Github</a></li>
            </ul>

            <div className="flex justify-between items-center">
                <p className="text-xs font-light text-gray-400">&copy; {new Date().getFullYear()} MovieStream. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer