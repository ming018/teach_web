// script.js 수정
document.getElementById('clickMe').addEventListener('click', () => {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '<p>Loading data...</p>';

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            contentDiv.innerHTML = `<p><strong>Data Received:</strong> ${data.message}</p>`;
        })
        .catch(error => {
            contentDiv.innerHTML = '<p>Error loading data.</p>';
            console.error('Error fetching data:', error);
        });
});
