document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');
    const registrationForm = document.getElementById('registrationForm');
    const userCountDisplay = document.getElementById('userCount');
    const toggleThemeBtn = document.getElementById('toggleThemeBtn');
    let userCount = 0;

    openModalBtn.onclick = () => {
        modal.style.display = 'block';
    };

    closeModal.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    registrationForm.onsubmit = (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const phone = document.getElementById('phone').value;
        const gender = document.getElementById('gender').value;
        const sports = Array.from(document.getElementById('sports').selectedOptions).map(option => option.value);

        if (validateForm(name, email, password, phone)) {
            userCount++;
            userCountDisplay.textContent = `Registered Users: ${userCount}`;
            console.log({ name, email, password, phone, gender, sports });
            registrationForm.reset();
            modal.style.display = 'none';
        }
    };

    const validateForm = (name, email, password, phone) => {
        if (/\d/.test(name) || name.length < 5) {
            alert('Name must not contain any numerical values and must be at least 5 characters long.');
            return false;
        }
        if (!email.endsWith('@gmail.com')) {
            alert('Email must be a Gmail address.');
            return false;
        }
        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return false;
        }
        if (!/^\d{10}$/.test(phone)) {
            alert('Phone Number must be 10 digits long.');
            return false;
        }
        return true;
    };

    toggleThemeBtn.onclick = () => {
        document.body.classList.toggle('dark-theme');
    };
});
