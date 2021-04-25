const form1 = document.getElementById("plasma-requirements");

form1.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form1.elements['name1'].value;
    const mobile = form1.elements['mobile1'].value;
    const email = form1.elements['email1'].value;
    const age = form1.elements['age1'].value;
    const gender = form1.elements['gender1'].value;
    const blood = form1.elements['blood1'].value;
    const district = form1.elements['district1'].value;
    const state = form1.elements['state1'].value;
    const message = form1.elements['message1'].value;

    const plasmaRequirement = { name, mobile, email, age, gender, blood, district, state, message }

    console.log(plasmaRequirement);
    form1.reset();
});