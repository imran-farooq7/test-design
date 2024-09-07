import React from "react";
import Container from "./Container";
import Faq from "./Faq";
import Image from "next/image";
import AvatarGroup from "@/public/Avatar group.svg";
import Button from "./Button";

const Faqs = () => {
	return (
		<Container>
			<div className="text-center pt-24 pb-16">
				<h3 className="text-3xl md:text-4xl text-[#101828] font-semibold">
					Frequently asked questions{" "}
				</h3>
				<p className="text-lg md:text-xl text-secondary max-w-[21rem] md:max-w-3xl mx-auto mt-6 mb-12">
					Everything you need to know about the product and billing.
				</p>
				<div className="flex flex-col max-w-3xl mx-auto pt-16 gap-6">
					<Faq question="Is there a free trial available?" />
					<Faq question="Can I change my plan later?" />
					<Faq question="Can other info be added to an invoice?" />
					<Faq question="How does billing work?" />
					<Faq question="How do I change my account email?" />
				</div>
			</div>
			<div className="bg-[#F9FAFB] py-8 mb-24 rounded-2xl text-center flex flex-col items-center">
				<Image src={AvatarGroup} alt="avatar" />
				<h1 className="text-xl px-4 font-semibold py-8 text-[#101828] mt-4">
					Still have questions?
				</h1>
				<div className="flex flex-col gap-3 items-center ">
					<p className="text-base md:text-lg text-secondary mb-8">
						Can find the answer you looking for? Please chat to our friendly
						team.{" "}
					</p>
				</div>
				<Button demo={false} widthContent>
					Get in touch
				</Button>
			</div>
		</Container>
	);
};

export default Faqs;
