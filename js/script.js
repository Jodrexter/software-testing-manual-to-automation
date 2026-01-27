document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var u = document.getElementById('username').value.trim();
  var p = document.getElementById('password').value.trim();
  var err = document.getElementById('error');
  err.textContent = '';
  if (!u || !p) {
    err.textContent = 'Please enter username and password.';
    return;
  }
  // Demo credentials: username "user" and password "pass"
  if (u === 'user' && p === 'pass') {
    alert('Login successful!');
  } else {
    err.textContent = 'Invalid credentials.';
  }
});
