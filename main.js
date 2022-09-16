const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

// Show error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success message

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check required fields

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value === ' ') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Capitalise first letter of the error message

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check email

function checkEmail(input) {
  const reExpression =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (reExpression.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// Input length check

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Password match check

function checkPassword(input1, input2) {
  if (input1.value === input2.value) {
    showSuccess(input1);
  } else {
    showError(input2, "Passwords don't match");
  }
}

// Event listener

form.addEventListener('submit', function (e) {
  e.preventDefault();
  // refactored code

  checkRequired([username, email, password2, password]); //function to check the required field
  checkLength(username, 5, 15);
  checkLength(password, 6, 15);
  checkEmail(email);
  checkPassword(password, password2);

  //ugly but working code
  //   if (username.value === '') {
  //     showError(username, 'Username is required');
  //   } else {
  //     showSuccess(username);
  //   }
  //   if (email.value === '') {
  //     showError(email, 'Email is required');
  //   } else if (!validateEmail(email.value)) {
  //     showError(email, 'Email is not valid');
  //   } else {
  //     showSuccess(username);
  //   }
  //   if (password.value === '') {
  //     showError(password, 'Password is required');
  //   } else if (password.value.length < 6) {
  //     showError(password, 'Minimum 6 charactes password is required');
  //   } else {
  //     showSuccess(password);
  //   }
  //   if (password2.value !== password.value) {
  //     showError(password2, 'Password does not match');
  //   } else {
  //     showSuccess(password2);
  //   }
});
