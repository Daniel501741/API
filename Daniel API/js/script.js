let btnCachorro = document.getElementById('btn-cachorro');
let resultadoCachorro = document.getElementById('cachorro');

btnCachorro.addEventListener('click', gerarCachorro);

function gerarCachorro() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				gerarCachorro();
			}
			else {
				resultadoCachorro.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}