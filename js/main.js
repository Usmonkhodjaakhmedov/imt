
let formn = document.querySelector(".formn");
let login = document.querySelector(".nameLog");
let passw = document.querySelector("#namePasword");
let btn = document.querySelector(".btnLogin")



formn.addEventListener("submit", (el) => {
    el.preventDefault()
    
    let url = "https://reqres.in/api/login";
    
    let sett = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
    
        "body": JSON.stringify(
            {
                "email": login.value ,
                "password": passw.value
            },
        )
    
    
    }


    console.log(passw.value);
    console.log(login.value);
    async function loginf() {
        let response =  await fetch (url, sett);
        let dat = await response.json();
             if(dat.token){
            localStorage.setItem('token', dat.token)
            window.location.replace("../index.html")
            }
    }
    loginf()


})

