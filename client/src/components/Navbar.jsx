// import { Link } from "react-router-dom";

// export default function Navbar() {
//     return (
//         <nav className="border-b border-zinc-800 bg-black text-white">
//             <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

//                 {/* Logo */}
//                 <div className="text-3xl font-bold  cursor-pointer hover:text-zinc-300 transition-colors duration-300">
//                     AlgoLens
//                 </div>

//                 {/* Nav Links */}
//                 <div className="flex items-center gap-8 text-lg font-medium">

//                     <Link
//                         to="/"
//                         className="relative hover:text-zinc-300 transition-colors duration-300
//                         after:absolute after:left-0 after:-bottom-1 after:h-[2px]
//                         after:w-0 after:bg-white after:transition-all
//                         after:duration-300 hover:after:w-full"
//                     >
//                         Home
//                     </Link>

//                     <Link
//                         to="/expression"
//                         className="relative hover:text-zinc-300 transition-colors duration-300
//                         after:absolute after:left-0 after:-bottom-1 after:h-[2px]
//                         after:w-0 after:bg-white after:transition-all
//                         after:duration-300 hover:after:w-full"
//                     >
//                         Expression Evaluator
//                     </Link>

//                     <Link
//                         to="/analyze"
//                         className="relative hover:text-zinc-300 transition-colors duration-300
//                         after:absolute after:left-0 after:-bottom-1 after:h-[2px]
//                         after:w-0 after:bg-white after:transition-all
//                         after:duration-300 hover:after:w-full"
//                     >
//                         Code Analyzer
//                     </Link>
//                 </div>
//             </div>
//         </nav>
//     );
// }



import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="border-b border-zinc-800 bg-black text-white">
            <div className="flex items-center justify-between mx-auto max-w-7xl px-6 py-4">
                <div className="text-3xl cursor-pointer font-bold hover:text-zinc-300 transition-colors duration-300">
                    AlgoLens
                </div>
                <div className="flex items-center text-xl font-medium gap-8">
                    <Link to="/" className="hover:text-zinc-300 transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                        Home
                    </Link>
                    <Link to="/expression" className="hover:text-zinc-300 transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                        Expression Evaluator
                    </Link>
                    <Link to="/analyze" className="hover:text-zinc-300 transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                        Code Analyzer
                    </Link>
                </div>
            </div>
        </nav>
    )
}  