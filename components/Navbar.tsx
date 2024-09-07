"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "./Button";
import Logo from "@/public/Logo.png";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const pathName = usePathname();
	return (
		<nav className="relative mx-auto py-6">
			<div className="flex items-center justify-between">
				<div className="flex items-center space-x-10">
					<Link href={"/"}>
						<Image
							src={Logo}
							alt="logo"
							width={142}
							className="object-contain"
						/>
					</Link>
					<div className="hidden lg:flex space-x-8 font-semibold text-base">
						<Link
							href={"#"}
							className={`${
								pathName === "/" ? "text-primary" : "text-secondary"
							}`}
						>
							Home
						</Link>
						<Link href={"#"} className="text-secondary">
							Blog
						</Link>
						<Link href={"#"} className="text-secondary">
							Contact
						</Link>
					</div>
				</div>
				<div className="hidden lg:flex items-center space-x-6 font-semibold text-base text-secondary">
					<div>Login</div>
					<Link href={"#"}>
						<Button demo={false}>Sign up</Button>
					</Link>
				</div>
				<button
					id="menu-btn"
					className={`block hamburger lg:hidden focus:outline-none ${
						isOpen && "open"
					}`}
					type="button"
					onClick={() => setIsOpen((isOpen) => !isOpen)}
				>
					<Image
						src={"/hamburger.svg"}
						width={24}
						height={24}
						alt="hamburger"
					/>
				</button>
			</div>
			<div
				className={`absolute ${
					isOpen ? "block" : "hidden"
				} p-6 rounded-lg bg-darkViolet left-6 top-20 right-6 z-[100]`}
			>
				<div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
					<Link href="#" className="w-full text-center">
						Home
					</Link>
					<Link href="#" className="w-full text-center">
						Blog
					</Link>
					<Link href="#" className="w-full text-center">
						Contact
					</Link>
					<Link
						href="#"
						className="w-full pt-6 border-t border-gray-400 text-center"
					>
						Login
					</Link>

					<Link href="#">
						<Button demo={false}>Sign up</Button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
