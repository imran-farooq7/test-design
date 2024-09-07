const Button = ({
	children,
	demo,
	widthContent,
}: {
	children: React.ReactNode;
	demo: boolean;
	widthContent?: boolean;
}) => {
	return (
		<button
			className={`${
				widthContent ? "w-auto" : "w-full"
			} md:w-auto rounded-lg px-4 py-[10px] ${
				demo
					? "text-[#344054] bg-white border rounded-[10px] border-[#D0D5DD] shadow-sm px-6"
					: "text-white bg-primary"
			}`}
		>
			{children}
		</button>
	);
};

export default Button;
