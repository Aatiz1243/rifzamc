// public/js/auth.js

const allowedEmail = "aatizzaim232@gmail.com"; // Only allowed login

document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const errorElem = document.getElementById('error');
  errorElem.textContent = '';

  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    // Redirect or reload on success
    window.location.href = '/dashboard';
  } catch (err) {
    // Firebase error codes: https://firebase.google.com/docs/reference/js/auth#autherrorcodes
    if (err.code === 'auth/user-not-found') {
      errorElem.textContent = 'Email not found.';
    } else if (err.code === 'auth/wrong-password') {
      errorElem.textContent = 'Password incorrect.';
    } else if (err.code === 'auth/invalid-email') {
      errorElem.textContent = 'Invalid email format.';
    } else {
      errorElem.textContent = 'Login failed. Please try again.';
    }
  }
});
