import Image from "next/image";
import Navbar from "./Navbar";
import Button from "./Button";
import hero from "@/public/Container.svg";
import Content from "@/public/Content.svg";
import Container from "./Container";

const Hero = () => {
	return (
		<Container>
			<div id="hero">
				<Navbar />
				<div className="mt-24 text-center">
					<div className="border text-xs md:text-sm items-center gap-4 text-[#344054] flex border-[#D0D5DD] shadow-sm rounded-[10px] md:px-4 py-1 w-full md:max-w-[415px] font-medium mx-auto">
						<span className="border items-center gap-3 p-2 flex border-[#D0D5DD] shadow-sm rounded-[6px] max-w-max">
							<Image
								src={"/Dot.png"}
								width={16}
								height={16}
								className="object-contain"
								alt="dot"
							/>
							<span>New feature</span>
						</span>
						<span className="flex items-center gap-2">
							<span> Check out the team dashboard</span>
							<Image
								src={"/arrow-right.png"}
								width={20}
								height={20}
								alt="arrow"
								className="object-contain"
							/>
						</span>
					</div>
					<h1 className="text-4xl md:text-6xl font-semibold text-[#101828] mt-4">
						Beautiful analytics to grow smarter
					</h1>
					<p className="text-lg md:text-xl text-secondary max-w-[21rem] md:max-w-3xl mx-auto mt-6">
						Powerful, self-serve product and growth analytics to help you
						convert, engage, and retain more users. Trusted by over 4,000
						startups.
					</p>
					<div className="flex flex-wrap-reverse gap-4 justify-center items-center mt-12 mb-16">
						<Button demo>
							<div className="flex gap-2 justify-center">
								{" "}
								<Image
									src={"/play-circle.png"}
									width={24}
									height={24}
									alt="demo"
								/>
								<span>Demo</span>
							</div>
						</Button>
						<Button demo={false}>Sign up</Button>
					</div>
					<Image
						src={hero}
						alt="hero"
						className="object-contain hidden md:block"
					/>
					<Image
						src={Content}
						alt="hero mobile"
						className="object-contain block md:hidden"
					/>
				</div>
			</div>
		</Container>
	);
};

export default Hero;
