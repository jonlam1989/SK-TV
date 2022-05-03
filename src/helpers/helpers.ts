const convertTime = (time: number) => {
	const hours = Math.floor(time / 60);
	const mins = time % 60;

	return `${hours}hrs ${mins}mins`;
};

export default convertTime;
