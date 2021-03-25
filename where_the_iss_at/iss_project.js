const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

async function getISS() {

    // use the Fetch API to capture JSON data
    const response = await fetch(api_url);
    const data = await response.json();

    // use JavaScript object destructuring to capture desired data
    const { latitude, longitude } = data;

    document.getElementById("lat").textContent = latitude;
    document.getElementById("lon").textContent = longitude;

    console.log(data.latitude);
    console.log(data.longitude);
}
