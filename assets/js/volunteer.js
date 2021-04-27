const form5 = document.getElementById("volunteer");

form5.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form5.elements['name5'].value;
    const mobile = form5.elements['mobile5'].value;
    const email = form5.elements['email5'].value;
    const age = form5.elements['age5'].value;
    const gender = form5.elements['gender5'].value;
    const purpose = form5.elements['purpose'].value;
    const serve = form5.elements['serve'].value;

    const volunteerDetails = {
        data: {
            Name: name,
            Mobile: mobile,
            Email: email,
            Age: age,
            Gender: gender,
            WhydoyouwanttoVolunteer: purpose,
            Howcanyouserve: serve
        },
        apiID: "Volunteers-Volunteers-Create-Save-create"
    }

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://supista.com/api/1/6083f8fdce57100e4e479450", true);
    xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.setRequestHeader('Acces-Control-Allow-Methods', 'POST');
    xhttp.send(JSON.stringify(volunteerDetails));

    form5.reset();
});