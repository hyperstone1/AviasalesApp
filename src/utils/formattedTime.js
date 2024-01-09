export function calculateArrivalTime(baseTime, additionalMinutes) {
	const date = new Date(baseTime);

	// Вычисляем время прибытия
	const arrivalTime = new Date(date.getTime() + additionalMinutes * 60 * 1000);

	// Форматируем базовое время
	const formattedTime = date.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });

	// Форматируем время прибытия
	const formattedArrivalTime = arrivalTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });

	// Создаем строку времени в нужном формате 'HH:MM – HH:MM'
	const resultString = `${formattedTime} – ${formattedArrivalTime}`;

	return resultString;
}
