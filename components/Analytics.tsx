import { analytics } from "@/lib/constants";
import Analy from "@/public/analytics.svg";
import Mobile from "@/public/iPhone mockup.svg";
import Image from "next/image";
import Feature from "./Feature";
import Container from "./Container";
const Analytics = () => {
	return (
		<Container>
			<div className="text-center flex flex-col items-center py-24">
				<p className="text-primary font-semibold text-base mb-3">Feature</p>
				<h3 className="text-3xl md:text-4xl text-[#101828] font-semibold">
					Analytics that feels like it is from the future
				</h3>
				<p className="text-lg md:text-xl text-secondary max-w-[21rem] md:max-w-3xl mx-auto mt-6 mb-12">
					Powerful, self-serve product and growth analytics to help you convert,
					engage, and retain more users. Trusted by over 4,000 startups.
				</p>
				<Image
					src={Analy}
					alt="analy"
					className="object-contain hidden md:block"
				/>
				<Image
					src={Mobile}
					alt="mobile"
					className="object-contain block md:hidden"
				/>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 mt-16">
					{analytics.map((feature) => (
						<Feature key={feature.heading} feature={feature} isAn />
					))}
				</div>
			</div>
		</Container>
	);
};

export default Analytics;
