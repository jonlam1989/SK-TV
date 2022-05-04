const convertTime = (time: number) => {
	const hours = Math.floor(time / 60);
	const mins = time % 60;

	return `${hours}${hours > 1 ? 'hrs' : 'hr'} ${mins}mins`;
};

export default convertTime;
