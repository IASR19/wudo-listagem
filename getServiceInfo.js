function getServicesInfo() {
	const services = document.querySelectorAll('.service-card')
	return Array.from(services).map(service => {
		let name = service.querySelector('.service-name').innerText
		let picture = service.querySelector('img').src
		let [rating, foodType, distance] = service.querySelector('.service-card__info').innerText.split('•')
		let [deliveryTime, deliveryPrice] = service.querySelector('.service-card__footer').innerText.split('•')

		return {
			name,
			picture,
			rating,
			foodType,
			distance,
			deliveryTime,
			deliveryPrice
        }
    })
}