const form4 = document.getElementById("blood-donor");
const successMessage4 = document.querySelector(".sent-message4");
const errorMessage4 = document.querySelector(".error-message4");

form4.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form4.elements['name4'].value;
    const mobile = form4.elements['mobile4'].value;
    const email = form4.elements['email4'].value;
    const age = form4.elements['age4'].value;
    const gender = form4.elements['gender4'].value;
    const district = form4.elements['district4'].value;
    const state = form4.elements['state4'].value;
    const message = form4.elements['message4'].value;
    const bloodGroup = form4.elements['blood4'].value;

    const bloodDonorDetails = {
        data: {
            Name: name,
            MobileNumber: mobile,
            Email: email,
            Age: age,
            Gender: gender,
            District: district,
            State: state,
            Message: message,
            BloodGroup: bloodGroup,
        },
        apiID: "BloodDonors-BloodDonors-Create-Save-create"
    }

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://supista.com/api/1/6083f8fdce57100e4e479450", true);
    xhttp.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.setRequestHeader('Acces-Control-Allow-Methods', 'POST');
    xhttp.send(JSON.stringify(bloodDonorDetails));

    fetch(`https://supista.com/api/1/6083f8fdce57100e4e479450`, {
        withCredentials: true
    }).then(function (response) {
        if (response.status === 200) {
            successMessage4.classList.add('d-block');
            setTimeout(() => {
                successMessage4.classList.remove('d-block');
            }, 5000);
        }
        else {
            errorMessage4.classList.add('d-block');
            setTimeout(() => {
                errorMessage4.classList.remove('d-block');
            }, 5000);
        }
    });

    form4.reset();
});