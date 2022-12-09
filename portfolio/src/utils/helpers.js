export function capFirstLet(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  export function valid(email) {
    var validator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return validator.test(String(email).toLowerCase());
  }