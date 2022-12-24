import react from 'react';
import { RiHomeSmileLine } from "react-icons/ri"; 



const Sidebar = () => {
	return <div className='bg-[#1f1d28] fixed left-0 top-0 w-28 h-full'>
		<h1 className='text-2xl text-gray-300 font-bold text-center my-5 uppercase'>
		Logo
		</h1>
		<ul className='pl-4'>
			<li className='bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl'>
				<a href="#" className='bg-[#ec7c6a] p-4 flex rounded-xl text-white justify-center'>
					<RiHomeSmileLine className='text-2xl'/>
				</a>
			</li>
		</ul>
	</div>
}

export default Sidebar
