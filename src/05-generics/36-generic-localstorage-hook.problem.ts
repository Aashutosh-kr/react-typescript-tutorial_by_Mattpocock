import { it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * In this exercise, we want to create a generic useLocalStorage hook
 * that allows us to store and retrieve values in localStorage.
 *
 * The way we're going to do this is by asking users to pass in type
 * arguments, as below:
 *
 * const user = useLocalStorage<{ name: string }>("user");
 *
 * user.set("matt", { name: "Matt" });
 *
 * 1. Figure out a way to make this work using generics.
 */
export const useLocalStorage = <Type>(prefix: string) => {
	return {
		get: (key: string) => {
			return JSON.parse(
				window.localStorage.getItem(prefix + key) || "null"
			) as Type | null;
		},
		// set: <T>(key: T, value: { name: T }) => {
		// 	window.localStorage.setItem(prefix + key, JSON.stringify(value));
		// },

		/* Better solution */
		set: (key: string, value: Type) => {
			window.localStorage.setItem(prefix + key, JSON.stringify(value));
		},
	};
};

const user = useLocalStorage<{ name: string }>("user");

it("Should let you set and get values", () => {
	user.set("matt", { name: "Matt" });

	const mattUser = user.get("matt");

	type tests = [Expect<Equal<typeof mattUser, { name: string } | null>>];
});

it("Should not let you set a value that is not the same type as the type argument passed", () => {
	user.set(
		"something",
		// @ts-expect-error
		{}
	);
});
