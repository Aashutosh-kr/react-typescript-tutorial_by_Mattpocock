import React, { ComponentProps } from "react";

// interface ButtonProps
// 	extends React.DetailedHTMLProps<
// 		React.ButtonHTMLAttributes<HTMLButtonElement>,
// 		HTMLButtonElement
// 	> {}  /* Can be done but not good and very very long */

type ButtonProps = ComponentProps<"button">; /* Better way */

export const Button = ({ className, ...rest }: ButtonProps) => {
	return (
		<button {...rest} className={`default-classname ${className}`}></button>
	);
};

const Parent = () => {
	return <Button onClick={() => {}} type="button"></Button>;
};
