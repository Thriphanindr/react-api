export function validateEmail(Email){
   return /[a-zA-Z0-9.]*@[a-z]*[.a-z]*/.test(Email)
}