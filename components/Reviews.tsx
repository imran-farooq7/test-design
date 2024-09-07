import WC from "@/public/wc.svg";
import Avatar from "@/public/Avatar.svg";
import Image from "next/image";
const Reviews = () => {
	return (
		<div className="bg-[#F9FAFB] py-24 text-center flex flex-col items-center">
			<Image src={WC} alt="logo" />
			<h1 className="text-[28px] md:text-5xl px-4 font-medium leading-9 md:leading-[60px] py-8 text-[#101828] mt-4 max-w-[1100px]">
				We been using Untitled to kick start every new project and can imagine
				working without it.{" "}
			</h1>
			<div className="flex flex-col gap-3 items-center">
				<Image src={Avatar} alt="avatar" />
				<p className="text-lg text-[#101828]">Amélie Laurent</p>
				<p className="text-base text-secondary">Product Manager, Wildcrafted</p>
			</div>
		</div>
	);
};

export default Reviews;
