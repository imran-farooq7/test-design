import Image from "next/image";
import OL from "@/public/ol.svg";
import KI from "@/public/ki.svg";
import SL from "@/public/sl.svg";
import MAG from "@/public/mag.svg";
import WS from "@/public/ws.svg";
import SIS from "@/public/sis.svg";
import Container from "./Container";

const Companies = () => {
	return (
		<Container>
			<div className="text-center my-24">
				<p className=" text-secondary">Join 4,000+ companies already growing</p>
				<div className="grid grid-cols-2 md:grid-cols-6 mt-8 gap-4">
					<Image src={OL} width={150} alt="ol logo" />
					<Image src={KI} width={150} alt="ki logo" />
					<Image src={SL} width={150} alt="sl logo" />
					<Image src={MAG} width={150} alt="mag logo" />
					<Image src={WS} width={150} alt="ws logo" />
					<Image src={SIS} width={150} alt="sis logo" />
				</div>
			</div>
		</Container>
	);
};

export default Companies;
