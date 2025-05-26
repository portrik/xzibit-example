import { describe, test, expect, expectTypeOf } from "vitest";

import { type AddableShape, add } from "../src/add";

type Key = "a" | "b" | 3;

describe("Add", () => {
	test("Sums Up Two Objects", () => {
		const left: AddableShape<Key> = {
			a: 1,
			b: 2,
			"3": 3,
		};

		const right: AddableShape<Key> = {
			a: 2,
			b: 3,
			"3": 4,
		};

		const result = add(left, right);

		expectTypeOf(result).toMatchObjectType<AddableShape<Key>>();
		expect(result).toStrictEqual({
			a: 3,
			b: 5,
			3: 7,
		});
	});
});
