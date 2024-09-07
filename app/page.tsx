import Analytics from "@/components/Analytics";
import Blog from "@/components/Blog";
import Companies from "@/components/Companies";
import Container from "@/components/Container";
import CopyRight from "@/components/CopyRight";
import Divider from "@/components/Divider";
import Faqs from "@/components/Faqs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
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
			<Divider />
			<Blog />
			<Divider />
			<Footer />
			<Divider />
			<CopyRight />
		</>
	);
};

export default Home;
