import { ComponentProps } from "react";
import { Equal, Expect } from "../helpers/type-utils";

type ButtonProps = ComponentProps<"button">;

const buttonProps = {
	type: "button",
	// @ts-expect-error
	illegalProperty: "I AM ILLEGAL",
} satisfies ButtonProps;

<>
	<button {...buttonProps}>Click Me!</button>
</>;

const buttonPropType = buttonProps.type;

type test = Expect<Equal<typeof buttonPropType, "button">>;
