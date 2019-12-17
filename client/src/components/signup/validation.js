export default function validate(inputs) {
    let errors = {};       
    if (!inputs.firstName){
        errors.firstName = "A first name is required";
    } else if (!inputs.lastName){
        errors.lastName = "A last name is required";
    } else if (!inputs.email) {
        errors.email = 'An email address is required';
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
        errors.email = 'Email address is invalid';
    } else if(!inputs.username){
        errors.username = "A username is required";
    }else if (!/^.{6,}$/.test(inputs.password)){
        errors.password = "Password must be at least 6 characters long";
    } else if(inputs.password !== inputs.confirmPassword){
        errors.passwordConfirm = "Your passwords do not match";
    } else if(!inputs.password){
        errors.password = "A password is required";
    } else if (inputs.email && inputs.firstName && inputs.lastName && inputs.password && inputs.confirmPassword){    
        errors = {};   
    }
    return errors;
};