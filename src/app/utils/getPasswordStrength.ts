function getPasswordStrength(password: string): string {
  // Initialize variables
  let strength: number = 0;
  let tips: string = "";

  // Check password length

  if(password.length<1){
    return ""
  }



  // Check for mixed case
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
    strength += 1;
  } else {
    tips += "Use both lowercase and uppercase letters. ";
  }

  // Check for numbers
  if (/\d/.test(password)) {
    strength += 1;
  } else {
    tips += "Include at least one number. ";
  }

  // Check for special characters
  if (/[^a-zA-Z\d]/.test(password)) {
    strength += 1;
  } else {
    tips += "Include at least one special character. ";
  }

  // Return results
  if (strength < 2) {
    return "too weak";
  } else if (strength === 2) {
    return "weak";
  } else if (strength === 3) {
    return "medium";
  } else {
    return "strong";
  }
}

export default getPasswordStrength;