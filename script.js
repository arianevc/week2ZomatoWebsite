document.querySelectorAll('input[name="contactMethod"]').forEach(radio => {
    radio.addEventListener('change', function() {
        let inputField = document.getElementById('contactInput');
        if (this.value === "phone") {
            inputField.placeholder = "Enter your phone number";
            inputField.type = "tel"; // Changes input type for phone
        } else {
            inputField.placeholder = "Enter your email address";
            inputField.type = "email"; // Changes input type for email
        }
    });
});