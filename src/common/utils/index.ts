export const ApiLink = 'https://jsonplaceholder.typicode.com';

export const getNormalizedData = (data: any) => {
	let allByIds = {};
	let allIds: number[] = [];

	data.forEach((d: any) => {
		allIds = [...allIds, d.id];
		Object.assign(allByIds, { [d.id]: d });
	});
	return {
		allIds,
		byId: allByIds
	};
};
