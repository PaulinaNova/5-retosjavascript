function CodelandUsernameValidation(str) { 
    if (str.length < 4 || str.length > 25) {
      return false;
    }
    if (!str[0].match(/[a-z]/i)) {
      return false;
    }
    if (!str.match(/^[0-9a-zA-Z_]+$/)) {
      return false;
    }
    if (str[str.length -1] === '_') {
      return false;
    }
    return true;
  }
     
  // keep this function call here 
  console.log(CodelandUsernameValidation(readline()));