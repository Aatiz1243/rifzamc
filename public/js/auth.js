document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorDisplay = document.getElementById('error');

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        console.log('Login successful:', userCredential.user.email);
        window.location.href = '/dashboard.html'; // Redirect
    })
    .catch((error) => {
        console.error('Login error:', error);
        let friendlyMessage = 'Login failed: Incorrect email or password.';
        if (error.code === 'auth/user-not-found') {
            friendlyMessage = 'Login failed: No account found with this email.';
        } else if (error.code === 'auth/wrong-password') {
            friendlyMessage = 'Login failed: Incorrect password.';
        } else if (error.code === 'auth/too-many-requests') {
            friendlyMessage = 'Login failed: Too many attempts. Try again later.';
        }
        errorDisplay.textContent = friendlyMessage;
    });
});
