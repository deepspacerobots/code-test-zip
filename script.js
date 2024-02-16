async function fetchData() {
    const zipCode = document.getElementById('zipInput').value;

    try {
        const response = await fetch(`https://api.zippopotam.us/us/${zipCode}`);

        if (!response.ok){
            throw new error("could not fetch resource");
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayData(data) {
    const locationDetailsContainer = document.getElementById('locationDetails');
    locationDetailsContainer.innerHTML = `
        <h2>${data['post code']}</h2>
        <p>${data.country}, ${data.places[0]['place name']}, ${data.places[0].state}</p>
    `;
}

