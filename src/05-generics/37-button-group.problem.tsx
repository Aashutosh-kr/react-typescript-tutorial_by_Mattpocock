import { Equal, Expect } from "../helpers/type-utils";

interface ButtonGroupProps<T extends string> {
	buttons: {
		value: T;
		/* Why? Don't (part of) know but it works*/
		/* BTW I didn't saw the solution beforehand */
		label: string;
	}[];
	onClick: (value: T) => void;
}

/**
 * In this exercise, we have a component called ButtonGroup. It takes an array
 * of buttons and a function to call when a button is clicked.
 *
 * We want to improve the type of the onClick function so that the value passed
 * to it is inferred from the buttons array.
 *
 * 1. Try to solve this problem using generics.
 */
const ButtonGroup = <T extends string>(props: ButtonGroupProps<T>) => {
	return (
		<div>
			{props.buttons.map(button => {
				return (
					<button
						key={button.value}
						onClick={() => {
							props.onClick(button.value);
						}}
					>
						{button.label}
					</button>
				);
			})}
		</div>
	);
};

<>
	<ButtonGroup
		onClick={value => {
			type test = Expect<Equal<typeof value, "add" | "delete">>;
		}}
		buttons={[
			{
				value: "add",
				label: "Add",
			},
			{
				value: "delete",
				label: "Delete",
			},
		]}
	></ButtonGroup>
</>;
