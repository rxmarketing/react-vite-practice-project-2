/** @format */

import react from "react";
import {
	RiHomeSmileLine,
	RiShipLine,
	RiTruckLine,
	RiPlaneLine,
	RiSettings2Line,
  RiLogoutCircleRLine,
} from "react-icons/ri";

const Sidebar = () => {
	return (
		<div className="bg-[#1f1d28] fixed left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl">
			<div>
				<ul className="pl-4">
					<h1 className="text-2xl text-gray-300 font-bold text-center my-5 uppercase">
						Logo
					</h1>

					{/* Home button */}

					<li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
						<a
							href="#"
							className="bg-[#ec7c6a] p-4 flex rounded-xl text-white justify-center">
							<RiHomeSmileLine className="text-2xl" j />
						</a>
					</li>

					{/* Ship Button */}

					<li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
						<a
							href="#"
							className="group-hover:bg-[#ec7c6a] p-4 flex rounded-xl text-white justify-center text-[#ec7c6a] group-hover:text-white">
							<RiShipLine className="text-2xl" />
						</a>
					</li>

					{/* Truck Button */}

					<li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
						<a
							href="#"
							className="group-hover:bg-[#ec7c6a] p-4 flex rounded-xl text-white justify-center text-[#ec7c6a] group-hover:text-white">
							<RiTruckLine className="text-2xl" />
						</a>
					</li>

					{/* Plane Button */}

					<li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
						<a
							href="#"
							className="group-hover:bg-[#ec7c6a] p-4 flex rounded-xl text-white justify-center text-[#ec7c6a] group-hover:text-white">
							<RiPlaneLine className="text-2xl" />
						</a>
					</li>

					{/* Fifth Button */}

					<li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
						<a
							href="#"
							className="group-hover:bg-[#ec7c6a] p-4 flex rounded-xl text-white justify-center text-[#ec7c6a] group-hover:text-white">
							<RiHomeSmileLine className="text-2xl" />
						</a>
					</li>

					{/* Setting Button */}

					<li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
						<a
							href="#"
							className="group-hover:bg-[#ec7c6a] p-4 flex rounded-xl text-white justify-center text-[#ec7c6a] group-hover:text-white">
							<RiSettings2Line className="text-2xl" />
						</a>
					</li>
				</ul>
			</div>

			{ /* Logout button */ }
			<div>
				<ul className="pl-4">
					<li className="hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
						<a
							href="#"
							className="group-hover:bg-[#ec7c6a] p-4 flex rounded-xl text-white justify-center text-[#ec7c6a] group-hover:text-white">
							<RiLogoutCircleRLine className="text-2xl" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
