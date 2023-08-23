const validationRegistration = (body) => {
    let errors = {};
    if (body.firstName?.trim().length < 2 || !/^[A-Za-z]+$/.test(body.firstName?.trim())) {
        errors.firstNameMsg = 'First name is required'
    }
    if (body.lastName?.trim().length < 2 || !/^[A-Za-z]+$/.test(body.lastName?.trim())) {
        errors.lastNameMsg = 'Last name is required'
    }
    if (body.address?.trim().length < 3 || !/^[\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\.']+$/.test(body.address?.trim())) {
        errors.addressMsg = 'Address must be 3 characters or more'
    }
    if (body.city?.trim().length < 2 || !/^.+\s.+$/.test(body.city?.trim())) {
        errors.cityMsg = 'City is required'
    }
    if (body.state?.trim().length < 2 || !/^.+\s.+$/.test(body.state?.trim())) {
        errors.stateMsg = 'State is required'
    }
    if (body.zip?.trim().length < 2 || !/^\d{5}$/.test(body.zip?.trim())) {
        errors.zipMsg = 'Zip code must be formated 12345'
    }
    if (body.email?.trim() == '' || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(body.email?.trim())) {
        errors.emailMsg = 'Invalid Email formated'
    }
    if (body.password?.trim().length < 2 || !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(body.password?.trim())) {
        errors.passwordMsg = 'Invalid password formated'
    }
    if (body.confirmPassword?.trim().length < 2 || !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(body.confirmPassword?.trim())) {
        errors.confirmPasswordMsg = 'Invalid cpassword formated'
    }
    if(body.confirmPassword?.trim() !==body.password?.trim()){
        errors.confirmPasswordMsg = 'Password do not matched'
    }
    return errors
}

const validationLogin=(body)=>{
    let errors = {};
    if (body.email?.trim() == '' || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(body.email?.trim())) {
        errors.emailMsg = 'Invalid Email formated'
    }
    if (body.password?.trim().length < 2 || !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(body.password?.trim())) {
        errors.passwordMsg = 'Invalid password formated' // upcase, lowercase, num, ktdb
    }
    return errors

}
module.exports = {validationRegistration, validationLogin}