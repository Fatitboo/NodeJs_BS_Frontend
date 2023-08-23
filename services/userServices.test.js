const {postLogin, postRegister} = require('./userServices.js')
jest.mock('./userServices')

describe("Test service call backend!", () => {
    test("Post register should return a user", async () => {
        let id = Math.floor(Math.random() * 1000);
        const body = {
            firstName: 'Qui',
            lastName: 'Nguyen',
            address: 'BinhChuongBinhSon',
            city: 'QuangNgai',
            state: 'VietNam',
            zip: '30023',
            email: `vanTeo${id}@gmail.com`,
            password: '@Pr123456789',
        }
        const response = await postRegister(body);
        expect(response.data.message).toEqual("Register user successfully");
        expect(response.data.user.firstName).toEqual("Qui");
        expect(response.data.user.lastName).toEqual("Nguyen");
        expect(response.data.user.address).toEqual("BinhChuongBinhSon");
        expect(response.data.user.city).toEqual("QuangNgai");
        expect(response.data.user.zip).toEqual("30023");

    });
    test("Post login shold return a user", async()=>{
        const body ={
            email: "vanpat@gmail.com",
            password: '@Pr123456789'
        }
        const response = await postLogin(body);
        expect(response.data.message).toEqual("Login successful");
        expect(response.data.user.firstName).toEqual("Qui");
        expect(response.data.user.lastName).toEqual("Nguyen");
        expect(response.data.user.address).toEqual("BinhChuongBinhSon");
        expect(response.data.user.city).toEqual("QuangNgai");
        expect(response.data.user.zip).toEqual("30023");
    })
})