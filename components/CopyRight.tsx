import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import Logo from "@/public/Logo.png";

const CopyRight = () => {
	return (
		<Container>
			<div className="flex flex-col md:flex-row justify-between py-8 gap-6">
				<Link href={"/"}>
					<Image src={Logo} alt="logo" width={142} className="object-contain" />
				</Link>
				<p className="text-[#667085]">
					© 2077 Untitled UI. All rights reserved.
				</p>
			</div>
		</Container>
	);
};

export default CopyRight;
