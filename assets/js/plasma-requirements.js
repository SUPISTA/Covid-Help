const form1 = document.getElementById("plasma-requirements");

form1.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form1.elements['name1'].value;
    const mobile = form1.elements['mobile1'].value;
    const email = form1.elements['email1'].value;
    const age = form1.elements['age1'].value;
    const gender = form1.elements['gender1'].value;
    const bloodGroup = form1.elements['blood1'].value;
    const district = form1.elements['district1'].value;
    const state = form1.elements['state1'].value;
    const message = form1.elements['message1'].value;

    const plasmaRequirementsDetails = {
        apiID: "PlasmaDonors-PlasmaRequirements-Create-Save-create",
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
    xhttp.setRequestHeader('Content-Type', 'Access-Control-Allow-Origin', 'Acces-Contorl-Allow-Methods');
    xhttp.send(JSON.stringify(plasmaRequirementsDetails));
    console.log(plasmaRequirementsDetails);

    form1.reset();
});