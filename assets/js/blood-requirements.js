const form3 = document.getElementById("blood-requirements");
const successMessage3 = document.querySelector(".sent-message3");
const errorMessage3 = document.querySelector(".error-message3");

form3.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form3.elements['name3'].value;
    const mobile = form3.elements['mobile3'].value;
    const email = form3.elements['email3'].value;
    const age = form3.elements['age3'].value;
    const gender = form3.elements['gender3'].value;
    const bloodGroup = form3.elements['blood3'].value;
    const district = form3.elements['district3'].value;
    const state = form3.elements['state3'].value;
    const message = form3.elements['message3'].value;

    const bloodRequirementDetails = {
        apiID: "BloodDonors-BloodRequirement-Create-Save-create",
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
    xhttp.send(JSON.stringify(bloodRequirementDetails));

    fetch(`https://supista.com/api/1/6083f8fdce57100e4e479450`, {
        withCredentials: true
    }).then(function (response) {
        if (response.status === 200) {
            successMessage3.classList.add('d-block');
            setTimeout(() => {
                successMessage3.classList.remove('d-block');
            }, 5000);
        }
        else {
            errorMessage3.classList.add('d-block');
            setTimeout(() => {
                errorMessage3.classList.remove('d-block');
            }, 5000);
        }
    });

    form3.reset();
});