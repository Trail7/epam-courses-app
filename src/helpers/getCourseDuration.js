export function getCourseDuration(duration) {
	if (!duration)
		return {
			time: '00:00',
			ending: 'hours',
			formatted: '00:00 hours',
		};
	let hours = Math.floor(duration / 60);
	let minutes = duration % 60;
	let ending = 'hour';

	ending = hours === 1 ? ending : 'hours';
	hours = hours < 10 ? '0' + hours : hours;
	minutes = minutes < 10 ? '0' + minutes : minutes;

	return {
		time: `${hours}:${minutes}`,
		ending,
		formatted: `${hours}:${minutes} ${ending}`,
	};
}
