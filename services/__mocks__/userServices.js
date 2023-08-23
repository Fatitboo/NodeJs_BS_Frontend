const postRegister = async (body) => {
    console.log("Mocked register.")
    return Promise.resolve({
        data: {
            message: 'Register user successfully',
            user: {
                firstName: 'Qui',
                lastName: 'Nguyen',
                address: 'BinhChuongBinhSon',
                city: 'QuangNgai',
                state: 'VietNam',
                zip: '30023',
            }
        }
    })
}

const postLogin = async (body) => {
    console.log("Mocked login.")

    return Promise.resolve({
        data: {
            message: 'Login successful',
            user: {
                firstName: 'Qui',
                lastName: 'Nguyen',
                address: 'BinhChuongBinhSon',
                city: 'QuangNgai',
                state: 'VietNam',
                zip: '30023',
            }
        }
    })
}
module.exports = { postRegister, postLogin }