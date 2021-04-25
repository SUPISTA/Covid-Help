const form2 = document.getElementById("plasma-donor");

form2.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form2.elements['name2'].value;
    const mobile = form2.elements['mobile2'].value;
    const email = form2.elements['email2'].value;
    const age = form2.elements['age2'].value;
    const gender = form2.elements['gender2'].value;
    const blood = form2.elements['blood2'].value;
    const district = form2.elements['district2'].value;
    const state = form2.elements['state2'].value;
    const message = form2.elements['message2'].value;

    const plasmaDonor = { name, mobile, email, age, gender, blood, district, state, message };

    console.log(plasmaDonor);
    form2.reset();
});