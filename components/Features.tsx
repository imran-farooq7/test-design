import { features } from "@/lib/constants";
import Feature from "./Feature";
import Container from "./Container";

const Features = () => {
	return (
		<Container>
			<div className="text-center my-24">
				<p className="text-primary font-semibold text-base mb-3">Feature</p>
				<h3 className="text-3xl md:text-4xl text-[#101828] font-semibold">
					Analytics that feels like it is from the future
				</h3>
				<p className="text-lg md:text-xl text-secondary max-w-[21rem] md:max-w-3xl mx-auto mt-6">
					Powerful, self-serve product and growth analytics to help you convert,
					engage, and retain more users. Trusted by over 4,000 startups.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 mt-16">
					{features.map((feature) => (
						<Feature key={feature.heading} feature={feature} isAn={false} />
					))}
				</div>
			</div>
		</Container>
	);
};

export default Features;
