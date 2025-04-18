// public/js/auth.js

const allowedEmail = "aatizzaim232@gmail.com"; // Only allowed login

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCred = await firebase.auth().signInWithEmailAndPassword(email, password);
    const user = userCred.user;

    if (user.email !== allowedEmail) {
      document.getElementById("error").innerText = "Access Denied. Unauthorized Email.";
      firebase.auth().signOut();
      return;
    }

    window.location.href = "/dashboard.html";
  } catch (err) {
    document.getElementById("error").innerText = err.message;
  }
});
