import { PandaFooter } from "@/components/footer";
import { Wave } from "@/components/wave";

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="w-full h-full overflow-y-auto pf left-0 top-0 z-[1]">
			<div
				id="amp_map"
				className="overflow-hidden w-full pr left-0 top-0 h-[792px]"
			/>
			{children}
			<PandaFooter>
				<Wave />
			</PandaFooter>
		</div>
	);
}
