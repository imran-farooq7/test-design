import Image from "next/image";
import Arrow from "@/public/color arrow.svg";

interface Props {
	feature: { icon: any; heading: string; description: string };
	isAn: boolean;
}
const Feature = ({ feature, isAn }: Props) => {
	return (
		<div className="max-w-sm flex gap-4 flex-col items-center">
			<Image src={feature.icon} alt="icon" />
			<h2 className="text-lg md:text-xl font-semibold">{feature.heading}</h2>
			<p>{feature.description}</p>
			{isAn && (
				<p className="text-primary flex items-center gap-2 font-semibold ">
					<span>Learn More</span>
					<Image src={Arrow} alt="arrow" />
				</p>
			)}
		</div>
	);
};

export default Feature;
