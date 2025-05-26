type DividableShape<Key extends string> = Record<Key, number>;

function divide<Key extends number>(
	left: DividableShape<Key>,
	right: Record<string, number>,
): DividableShape<Key> {
	const keys = [...Object.keys(left), ...Object.keys(right)];

	return keys.reduce(
		(result, key) => {
			result[key] =
				(left[key as unknown as keyof typeof left] as number) /
				right[key as unknown as keyof typeof right]!;

			return result;
		},
		{} as DividableShape<Key>,
	);
}

export { divide };
export type { DividableShape };
