const form1 = document.getElementById("plasma-requirements");
const successMessage1 = document.querySelector(".sent-message1");
const errorMessage1 = document.querySelector(".error-message1");

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
        data: {
            Name: name,
            Mobile: mobile,
            Email: email,
            Age: age,
            Gender: gender,
            BloodGroup: bloodGroup,
            District: district,
            State: state,
            Message: message
        },
        apiID: "PlasmaDonors-PlasmaRequirements-Create-Save-create"
    }

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://supista.com/api/1/6083f8fdce57100e4e479450", true);
    xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.setRequestHeader('Acces-Control-Allow-Methods', 'POST');
    xhttp.send(JSON.stringify(plasmaRequirementsDetails));

    fetch(`https://supista.com/api/1/6083f8fdce57100e4e479450`, {
        withCredentials: true
    }).then(function (response) {
        if (response.status === 200) {
            successMessage1.classList.add('d-block');
            setTimeout(() => {
                successMessage1.classList.remove('d-block');
            }, 5000);
        }
        else {
            errorMessage1.classList.add('d-block');
            setTimeout(() => {
                errorMessage1.classList.remove('d-block');
            }, 5000);
        }
    });

    form1.reset();
});