export function formatCreationDate(date) {
	let initial = date.split('/');
	initial[0] =
		initial[0] < 10 && !initial[0].startsWith('0')
			? '0' + initial[0]
			: initial[0];
	initial[1] =
		initial[1] < 10 && !initial[1].startsWith('0')
			? '0' + initial[1]
			: initial[1];

	return [initial[1], initial[0], initial[2]].join('.');
}
