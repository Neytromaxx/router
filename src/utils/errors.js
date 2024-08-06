const errors = {
    INVALID_LOGIN_CREDENTIALS: 'Pochta yoki parol xato!',
    auth: 'Saytga kiring'
}

export function error(error){
    return errors[error] ? errors[error] : 'Noma`lum xatolik!'
}