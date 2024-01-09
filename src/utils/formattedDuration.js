export function formatMinutesToHoursAndMinutes(minutes) {
	// Вычисляем количество часов (целая часть от деления на 60)
	const hours = Math.floor(minutes / 60);

	// Остаток от деления на 60 дает количество оставшихся минут
	const remainingMinutes = minutes % 60;

	// Формируем строку вида 'ччччччччччччммммммм'
	const formattedString = `${hours}ч ${remainingMinutes}м`;

	// Возвращаем отформатированную строку
	return formattedString;
}
