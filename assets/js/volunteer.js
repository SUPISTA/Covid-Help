const form5 = document.getElementById("volunteer");

form5.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form5.elements['name5'].value;
    const mobile = form5.elements['mobile5'].value;
    const gender = form5.elements['gender5'].value;
    const age = form5.elements['age5'].value;
    const email = form5.elements['email5'].value;
    const purpose = form5.elements['purpose'].value;
    const serve = form5.elements['serve'].value;

    const volunteerDetails = { name, mobile, gender, age, email, purpose, serve };

    console.log(volunteerDetails);
    form5.reset();
});