import Analytics from "@/components/Analytics";
import Companies from "@/components/Companies";
import Container from "@/components/Container";
import Divider from "@/components/Divider";
import Faqs from "@/components/Faqs";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";

const Home = () => {
	return (
		<>
			<Hero />
			<Companies />
			<Divider />
			<Features />
			<Reviews />
			<Analytics />
			<Divider />
			<Faqs />
		</>
	);
};

export default Home;
