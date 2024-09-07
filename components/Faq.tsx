import Plus from "@/public/Icon wrap.svg";
import Image from "next/image";
const Faq = ({ question }: { question: string }) => {
	return (
		<div className="flex justify-between border-b pb-8">
			<p className="font-medium text-lg text-[#101828]">{question}</p>
			<Image src={Plus} alt="plus" />
		</div>
	);
};

export default Faq;
