const form2 = document.getElementById("plasma-donor");

form2.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form2.elements['name2'].value;
    const mobile = form2.elements['mobile2'].value;
    const email = form2.elements['email2'].value;
    const age = form2.elements['age2'].value;
    const gender = form2.elements['gender2'].value;
    const bloodGroup = form2.elements['blood2'].value;
    const district = form2.elements['district2'].value;
    const state = form2.elements['state2'].value;
    const message = form2.elements['message2'].value;

    const plasmaDonorDetails = {
        apiID: "PlasmaDonors-PlasmaDonors-Create-Save-create",
        data: {
            Name: name,
            Mobile: mobile,
            Email: email,
            Age: age,
            Gender: gender,
            District: district,
            State: state,
            Message: message,
            BloodGroup: bloodGroup,
        }
    }

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://supista.com/api/1/6083f8fdce57100e4e479450", true);
    xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.setRequestHeader('Acces-Control-Allow-Methods', 'POST');
    xhttp.send(JSON.stringify(plasmaDonorDetails));

    form2.reset();
});