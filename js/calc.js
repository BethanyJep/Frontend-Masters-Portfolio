let keys = document.querySelectorAll('button')
keys = Array.from(keys).forEach(key => key.addEventListener('click', () => console.log('hell', key)));

