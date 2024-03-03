document.addEventListener('DOMContentLoaded', function () {
    fetch('./nav.html')
        .then(response => {
            if (response.ok) return response.text();
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            document.getElementById('nav').innerHTML = data;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});