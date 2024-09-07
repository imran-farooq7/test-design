import React from "react";
import FooterLink from "./FooterLink";
import Badge from "@/public/Badge.svg";
import Image from "next/image";
import Container from "./Container";

const Footer = () => {
	return (
		<Container>
			<footer className="my-16 grid grid-cols-2 md:grid-cols-6 gap-8">
				<ul className="flex flex-col gap-4">
					<h6 className="text-[#667085] text-sm font-semibold">Product</h6>
					<FooterLink>Overview</FooterLink>
					<FooterLink>Features</FooterLink>
					<FooterLink>
						<div className="flex gap-3">
							Solutions{" "}
							<span>
								<Image src={Badge} alt="badge" />
							</span>
						</div>
					</FooterLink>
					<FooterLink>Tutorials</FooterLink>
					<FooterLink>Pricing</FooterLink>
					<FooterLink>Releases</FooterLink>
				</ul>
				<ul className="flex flex-col gap-4">
					<h6 className="text-[#667085] text-sm font-semibold">Company</h6>
					<FooterLink>About us</FooterLink>
					<FooterLink>Careers</FooterLink>
					<FooterLink>Press</FooterLink>
					<FooterLink>News</FooterLink>
					<FooterLink>Media kit</FooterLink>
					<FooterLink>Contact</FooterLink>
				</ul>
				<ul className="flex flex-col gap-4">
					<h6 className="text-[#667085] text-sm font-semibold">Resources</h6>
					<FooterLink>Blog</FooterLink>
					<FooterLink>Newsletter</FooterLink>
					<FooterLink>Events </FooterLink>
					<FooterLink>Help centre</FooterLink>
					<FooterLink>Tutorials</FooterLink>
					<FooterLink>Support</FooterLink>
				</ul>
				<ul className="flex flex-col gap-4">
					<h6 className="text-[#667085] text-sm font-semibold">Use cases</h6>
					<FooterLink>Startups</FooterLink>
					<FooterLink>Enterprise</FooterLink>
					<FooterLink>Government </FooterLink>
					<FooterLink>SaaS centre</FooterLink>
					<FooterLink>Marketplaces</FooterLink>
					<FooterLink>Ecommerce</FooterLink>
				</ul>
				<ul className="flex flex-col gap-4">
					<h6 className="text-[#667085] text-sm font-semibold">Social</h6>
					<FooterLink>Twitter</FooterLink>
					<FooterLink>LinkedIn</FooterLink>
					<FooterLink>Facebook </FooterLink>
					<FooterLink>GitHub</FooterLink>
					<FooterLink>AngelList</FooterLink>
					<FooterLink>Dribbble</FooterLink>
				</ul>
				<ul className="flex flex-col gap-4">
					<h6 className="text-[#667085] text-sm font-semibold">Legal</h6>
					<FooterLink>Terms</FooterLink>
					<FooterLink>Privacy</FooterLink>
					<FooterLink>Cookies </FooterLink>
					<FooterLink>Licenses</FooterLink>
					<FooterLink>Settings</FooterLink>
					<FooterLink>Contact</FooterLink>
				</ul>
			</footer>
		</Container>
	);
};

export default Footer;
