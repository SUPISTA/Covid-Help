const form3 = document.getElementById("blood-requirements");

form3.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form3.elements['name3'].value;
    const mobile = form3.elements['mobile3'].value;
    const email = form3.elements['email3'].value;
    const age = form3.elements['age3'].value;
    const gender = form3.elements['gender3'].value;
    const blood = form3.elements['blood3'].value;
    const district = form3.elements['district3'].value;
    const state = form3.elements['state3'].value;
    const message = form3.elements['message3'].value;

    const bloodRequirement = { name, mobile, email, age, gender, blood, district, state, message }

    console.log(bloodRequirement);
    form3.reset();
});