const form = document.querySelector("#etForm");
const codeContainer = document.querySelector("#codeContainer");
const codeLabel = document.querySelector('#codeLabel');
const output = document.querySelector("#output");
const pType = document.querySelector('#pType');

function updateCodeField() {
    const value = pType.value;

    if (value === "student") {
        codeContainer.hidden = false;
        codeLabel.innerHTML = 'Student I#';
    } else if (value === "guest") {
        codeContainer.hidden = false;
        codeLabel.innerHTML = 'Access Code';
    } else {
        codeContainer.hidden = true;
    }
}

pType.addEventListener("change", updateCodeField);
updateCodeField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
    const today = new Date();
    const chosen = new Date(value);
    return chosen < today;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = form.pType.value;
    const eventDate = form.eventDate.value;
    const value = pType.value;
    const code = form.code.value.trim();

    // Validate the input
    if (value === "student") {
        if (code.length != 9) {
            output.textContent = "Student I# must be 9 digits.";
            return;
        } else if (!(/^\d+$/.test(code))) {
            output.textContent = "Student I# must be only numbers.";
            return;
        }
    } else if (value === "guest") {
        if (!(code === "EVENT131")) {
            output.textContent = "The code is incorrect.";
            return;
        }
    }

    if (isPastDate(eventDate)) {
        output.textContent = "Please choose a later date.";
        return;
    }

    output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>${type}</p>
    <p>${eventDate}</p>
    `;

    form.reset();
    updateCodeField();
});