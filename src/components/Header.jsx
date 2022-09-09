import React, { useEffect, useState } from 'react'
import { Link ,useLocation } from 'react-router-dom'
import { logo } from '../assets/images'
import { navLinkData } from '../assets/pake-data'
import {GoThreeBars} from 'react-icons/go'

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const { pathname } = useLocation()

	useEffect(() => {
		setToggleMenu(false); // Close the navigation panel
	  }, [ pathname ]);

	return (
		<header className="absolute top-0 left-0 right-0 z-[9999] bg-transparent h-24">
			<nav className="layout-container flex justify-between items-center h-full">
				<Link to="/"><img src={logo} alt="logo" /></Link>
				<div className={`${toggleMenu ? "h-[28rem]":"h-0"} flex flex-col lg:flex-row items-center text-white text-sm absolute lg:static top-24 left-0 right-0 bg-primary-color duration-500 overflow-hidden lg:overflow-visible`}>
					<div className="flex flex-col lg:flex-row items-center w-full text-center mt-8 lg:mt-0">
						{navLinkData.map((item,index) => (
							<Link to={item.path} key={index} className="p-5">{item.display}</Link>
						))}
					</div>
					<div className="flex flex-col lg:flex-row items-center w-full text-center mb-8 lg:mb-0">
						<Link to="/" className="hidden lg:block w-1 h-1 rounded-full bg-white mx-5 cursor-default"></Link>
						<Link to="/" className="p-5">Sign in</Link>
						<Link to="/" className="mb-8 lg:mb-0 w-3/4 lg:w-auto px-5 py-3 ml-3 rounded-md border-2 border-solid border-white duration-200 hover:bg-white hover:text-black" >Get Started</Link>
					</div>
				</div>
				<div className={`block lg:hidden cursor-pointer text-white p-6 text-sm ${toggleMenu ? "bg-primary-color " :""}`} onClick={() => setToggleMenu(!toggleMenu)}><GoThreeBars className="h-7 w-7" /></div>
			</nav>
		</header>
	)
}

export default Header