const form4 = document.getElementById("blood-donor");

form4.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form4.elements['name4'].value;
    const mobile = form4.elements['mobile4'].value;
    const email = form4.elements['email4'].value;
    const age = form4.elements['age4'].value;
    const gender = form4.elements['gender4'].value;
    const blood = form4.elements['blood4'].value;
    const district = form4.elements['district4'].value;
    const state = form4.elements['state4'].value;
    const message = form4.elements['message4'].value;

    const bloodDonor = { name, mobile, email, age, gender, blood, district, state, message };

    console.log(bloodDonor);
    form4.reset();
});