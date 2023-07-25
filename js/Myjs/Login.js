const ukbutton = document.querySelector(".uk-button")
const email = document.querySelector(".Email")
const password = document.querySelector(".Password")
const Captcha = document.querySelector(".Captcha")
const ErorrBoxs = document.querySelector(".Erorr")
const ErorrBoxClose = document.querySelector(".ErorrBoxClose")
const ErorrText = document.querySelector(".ErorrText")

ErorrBoxClose.onclick = () => {
    ErorrBoxs.style.display = "none"
}

const url = "https://bestkryptfield.onrender.com/api/login"

ukbutton.onclick = (e) => {
    e.preventDefault()
    const data = {
        password: password.value,
        email: email.value,
       };
       
    if( !email.value ||  !password.value || !Captcha.value ){
        ErorrBoxs.style.display = "flex"
        ErorrText.innerHTML = "Fill in all InFo"
        console.log("Eroo")
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
            //   ErorrBoxs.style.display = "flex"
            //   ErorrText.innerHTML = result.message
            localStorage.setItem("userId", JSON.stringify(result._id))
            const userid =  JSON.parse(localStorage.getItem("userId"))
            console.log(userid)
            window.location = `https://bestkryptfields.netlify.app/verify/${userid}`
            }).catch(error => {
                // ErorrBoxs.style.display = "flex"
                // ErorrText.innerHTML = error.message
            //   console.error('Error:', error);
            });
}
}