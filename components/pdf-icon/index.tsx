import React from "react";

interface PdfIconProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	style?: Record<string, any>;
	className?: string;
}

export function PdfIcon(props: PdfIconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 16 16"
			{...props}
		>
			<path
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M2.8 14.34c1.81-1.25 3.02-3.16 3.91-5.5c.9-2.33 1.86-4.33 1.44-6.63c-.06-.36-.57-.73-.83-.7c-1.02.06-.95 1.21-.85 1.9c.24 1.71 1.56 3.7 2.84 5.56c1.27 1.87 2.32 2.16 3.78 2.26c.5.03 1.25-.14 1.37-.58c.77-2.8-9.02-.54-12.28 2.08c-.4.33-.86 1-.6 1.46c.2.36.87.4 1.23.15h0Z"
			></path>
		</svg>
	);
}

export default PdfIcon;
