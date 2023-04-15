document.addEventListener('DOMContentLoaded', function() {
  var passwordInput = document.getElementById('signupPassword');
  var confirmPasswordInput = document.getElementById('confirm-password');

  confirmPasswordInput.addEventListener('keyup', function() {
    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
      confirmPasswordInput.setCustomValidity('Passwords do not match');
    } else {
      confirmPasswordInput.setCustomValidity('');
    }
  });
});