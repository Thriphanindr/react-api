export function validateEmail(Email){
    var emailRegex = /^([a-zA-z0-9_.+-])+((a-zA-z0-9-])+\.)+(a-zA-z0-9]{2,4})+$/;
   return emailRegex.test(Email)
}