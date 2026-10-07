const readlineSync = require('readline-sync');

function isValidPassword(pw) {
  if (pw.length < 8) return { valid: false, reason: 'Password must be at least 8 characters long.' };

  let hasUppercase = false;
  let hasNumber = false;

  for (let i = 0; i < pw.length; i++) {
    const ch = pw[i];
    if (ch >= '0' && ch <= '9') hasNumber = true;
    if (ch >= 'A' && ch <= 'Z') hasUppercase = true;
  }

  if (!hasUppercase) return { valid: false, reason: 'Password must contain at least one uppercase letter.' };
  if (!hasNumber) return { valid: false, reason: 'Password must contain at least one number.' };

  return { valid: true };
}

let result;
do {
  const password = readlineSync.question('Enter a password: ');
  result = isValidPassword(password);
  if (!result.valid) {
    console.log('Invalid password:', result.reason);
    console.log('Please try again.\n');
  }
} while (!result.valid);

console.log('\\nPassword accepted. You have provided a valid password.');
