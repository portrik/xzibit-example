type AddableShape<Key extends string | number | symbol> = Record<Key, number>;

function add<Key extends string | number | symbol>(
	left: AddableShape<Key>,
	right: AddableShape<Key>,
): AddableShape<Key> {
	const keys = [...Object.keys(left), ...Object.keys(right)] as Key[];

	const result = {} as AddableShape<Key>;

	for (const key of keys) {
		result[key] = left[key] + right[key];
	}

	return result;
}

export { add };
export type { AddableShape };
