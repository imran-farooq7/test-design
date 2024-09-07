import Image from "next/image";
import Blog from "@/public/blog icon.svg";

interface Props {
	blog: {
		img: any;
		category: string;
		heading: string;
		description: string;
		authorImg: any;
		date: string;
		author: string;
	};
}
const BlogCard = ({ blog }: Props) => {
	return (
		<div className="max-w-sm flex flex-col gap-2">
			<Image src={blog.img} alt={blog.author} />
			<p className="text-sm text-primary font-semibold">{blog.category}</p>
			<div className="flex justify-between">
				<h2 className="text-xl md:text-2xl text-[#101828] font-semibold">
					{blog.heading}
				</h2>
				<Image src={Blog} alt="arrow" />
			</div>
			<p className="text-secondary">{blog.description}</p>
			<div className="flex gap-3 mt-5">
				<Image src={blog.authorImg} alt={blog.author} />
				<div className="flex flex-col gap-1">
					<span className="font-semibold text-sm text-[#101828]">
						{blog.author}
					</span>
					<span className="text-sm text-secondary">{blog.date}</span>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
