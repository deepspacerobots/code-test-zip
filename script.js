document.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        startSearch();
    }
});

async function startSearch() {
    const zip = document.getElementsByTagName("input")[0].value;
    const infoContainer = document.getElementsByClassName("info-div")[0];

    if (!zip) {
        return (infoContainer.innerHTML = "<p class='top-padding'>Please enter a zip code</p>");
    }

    const data = await fetch(`http://api.zippopotam.us/us/${zip}`).then((res) => res.json());

    if (!data.places) {
        return (infoContainer.innerHTML = "<p class='top-padding'>No data found</p>");
    }

    return (infoContainer.innerHTML =
        "<p>country: " +
        data["country abbreviation"] +
        "</p>" +
        "<p>city: " +
        data.places[0]["place name"] +
        "</p>" +
        "<p>state: " +
        data.places[0]["state"] +
        "</p>");
}
