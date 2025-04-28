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
          errorDisplay.textContent = 'Login failed: ' + (error.message || 'Unknown error.');
      });
});
