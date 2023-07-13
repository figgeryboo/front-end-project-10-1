function getFortune(name) {
	const apiKey = '2fb90a5e02mshf28a516660252c4p1de889jsn73291cfde029';
	const URL = 'https://fortune-cookie2.p.rapidapi.com/fortune';

	fetch(URL, {
		headers: {
			'X-RapidAPI-Key': apiKey,
			'X-RapidAPI-Host': 'fortune-cookie2.p.rapidapi.com',
		},
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			const fortune = data.answer;
			const fortuneMessage =
				'Hello, ' + name + '! Here is your fortune... ' + fortune;

			const img = document.createElement('img');
			img.src = 'main/images/fortunecookie.png';

			const fortuneBox = document.getElementById('fortuneMessage')
			fortuneBox.innerHTML = '';

			fortuneBox.appendChild(img);
			fortuneBox.appendChild(document.createTextNode(fortuneMessage));
		})
		.catch(function (error) {
			console.log(error);
		});
}

const form = document.getElementById('fortuneForm');
const btn = document.getElementById('btn');

form.addEventListener('submit', function (event) {
	event.preventDefault();
	let name = document.getElementById('name').value;
	getFortune(name);
	document.querySelector('.container2').removeAttribute('hidden');
});

btn.addEventListener('click', function () {
	let name = document.getElementById('name').value;
	getFortune(name);
});
