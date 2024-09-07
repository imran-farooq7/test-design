import { blogPosts } from "@/lib/constants";
import Button from "./Button";
import Container from "./Container";
import BlogCard from "./BlogCard";

const Blog = () => {
	return (
		<Container>
			<div className="flex flex-col py-24">
				<div className="flex justify-between">
					<p className="text-sm text-primary font-semibold md:text-base mb-3">
						Our blog
					</p>
					<Button className="hidden md:block">View all posts</Button>
				</div>
				<h3 className="text-3xl md:text-4xl text-[#101828] font-semibold">
					Lastest blog posts
				</h3>
				<p className="text-lg md:text-xl text-secondary mt-4">
					Tool and strategies modern teams need to help their companies grow.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mt-16 mb-12">
					{blogPosts.map((blog) => (
						<BlogCard key={blog.heading} blog={blog} />
					))}
				</div>
				<Button className="block md:hidden">View all posts</Button>
			</div>
		</Container>
	);
};

export default Blog;
