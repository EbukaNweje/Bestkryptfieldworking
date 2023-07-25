const ukbutton = document.querySelector(".uk-button")
const FirstName = document.querySelector("#FirstName")
const LastName = document.querySelector(".LastName")
const username = document.querySelector(".username")
const retypeEmail = document.querySelector(".retryEmail")
const Email = document.querySelector(".Email")
const Seletor = document.querySelector(".Seletor")
const MobileCode = document.querySelector(".MobileCode")
const PhoneNumber = document.querySelector(".PhoneNumber")
const Password = document.querySelector(".Password")
const confirmationPassWord = document.querySelector(".confirmationPassWord")
const ErorrBoxs = document.querySelector(".Erorr")
const ErorrBoxClose = document.querySelector(".ErorrBoxClose")
const ErorrText = document.querySelector(".ErorrText")
const captchaBox = document.querySelector(".captchaBox")
const checkbox = document.querySelector(".check")

ErorrBoxClose.onclick = () => {
    ErorrBoxs.style.display = "none"
}

const url = "https://bestkryptfield.onrender.com/api/register"

// console.log(data)

ukbutton.onclick = (e) => {
    e.preventDefault()
    const data = {
        firstName: FirstName.value,
        lastName: LastName.value,
        userName: username.value,
        email: Email.value,
        contry: Seletor.value,
        password: Password.value,
        confirmPassword: confirmationPassWord.value,
        phoneNumber: MobileCode.value + PhoneNumber.value,
        retypeEmail: retypeEmail.value
       };
    if(!FirstName.value || !checkbox.value ||  !LastName.value || !username.value || !captchaBox.value || !Email.value ||  !Seletor.value || !MobileCode.value  || !PhoneNumber.value || !Password.value || !confirmationPassWord.value){
        ErorrBoxs.style.display = "flex"
        ErorrText.innerHTML = "Fill in all InFo"
    }else if(Password.value !== confirmationPassWord.value){
        ErorrBoxs.style.display = "flex"
        ErorrText.innerHTML = "Wrong Password"
    }else{
        // console.log(data)
        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then(response => response.json())
            .then(result => {
              console.log('Success:', result);
              ErorrBoxs.style.display = "flex"
              ErorrText.innerHTML = result.message
              localStorage.setItem("userId", JSON.stringify(result.data._id))
              const verifyid =  JSON.parse(localStorage.getItem("userId"))
              window.location = `https://bestkryptfields.netlify.app/verify/${verifyid}`
            }).catch(error => {
                ErorrBoxs.style.display = "flex"
                ErorrText.innerHTML = error.message
              console.error('Error:', error);
            });
    }

    // localStorage.setItem("userId", JSON.stringify(result.data._id))
    // const userId =  JSON.parse(localStorage.getItem("userId"))
    // console.log("first")
    // console.log(FirstName.value, LastName.value, username.value, Email.value, Seletor.value, MobileCode.value, PhoneNumber.value,Password.value,confirmationPassWord.value)
}  