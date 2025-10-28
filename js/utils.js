export function showAlert(message) {
    alert(message);
}

export function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
