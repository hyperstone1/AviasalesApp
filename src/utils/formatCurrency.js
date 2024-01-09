export function formatPrice(price) {
	const formattedPrice = new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency: 'RUB',
		minimumFractionDigits: 0, // Минимальное количество десятичных знаков
		maximumFractionDigits: 2, // Максимальное количество десятичных знаков
	}).format(price);

	return formattedPrice;
}
