var userLoginData = document.querySelectorAll('input');

function authenticate(){
    axios.request({
        method : "POST",
        url : "https://reqres.in/api/login",
        headers:{
            "Content-Type": "application/json"
        },
        data:{
            email: userLoginData[0].value,
            password: userLoginData[1].value
        }
    }).then(success).catch(failure);
}

function reDirecttoHome() {
    //var x = window.location.hostname+':'+window.location.port+'/JavaScript/W12C/home.html';
    document.location.href = "/home.html";
}


function success(response) {
    console.log(response);
    Cookies.set('authenToken', response.data.token);
    reDirecttoHome();
}

//Show error message upon login error
function failure(error) {
    console.error(error);
    document.querySelector('p').classList.remove('invalidLoginMsg');
}

var userSubmitBtn = document.getElementById('btn');
userSubmitBtn.addEventListener('click', authenticate);


