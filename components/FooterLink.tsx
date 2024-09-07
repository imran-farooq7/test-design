import Link from "next/link";

const FooterLink = ({ children }: { children: React.ReactNode }) => {
	return (
		<Link href={"#"} className="text-secondary font-semibold">
			{children}
		</Link>
	);
};

export default FooterLink;
