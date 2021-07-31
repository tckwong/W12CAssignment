var parent = document.querySelector('h2');
var getCookie = Cookies.get('authenToken');
console.log(getCookie);
var docBody = document.querySelector('body');

checkAuthentication()
function checkAuthentication(){

    if(getCookie == undefined){
        let popup = document.getElementsByClassName('hiddenMsg');
        console.log(popup)
        for (let i=0; i<popup.length; i++){
            popup[i].classList.remove('hiddenMsg');
        }
    }else{
        apiRequest();
    }
}

function apiRequest(){
    axios.request({
    method : "GET",
    url : "https://reqres.in/api/unknown"
    }).then(success).catch(failure);
}

function success(response) {
    console.log(response.data.data[0]);
    for (let i=0; i<response.data.data.length; i++){
        console.log(response.data.data[i].name);
        console.log(response.data.data[i].year);
        
        const getColorName = document.createElement('h4');
        const getYear = document.createElement('p');
        const getPallet = document.createElement('div');
        getPallet.style.width = '100px';
        getPallet.style.border = '1px solid black';
        getPallet.style.height = '100px';

        parent.appendChild(getColorName);
        parent.appendChild(getYear);
        parent.appendChild(getPallet);

        getColorName.innerHTML = "Color Name: "+response.data.data[i].name;
        getYear.innerHTML = "Year Created: "+response.data.data[i].year;
        getPallet.style.backgroundColor = response.data.data[i].color;
    }
    logOut.classList.remove('logoutClass');
}

function failure(error) {
    console.error(error);
    document.querySelector('p').classList.remove('invalidLoginMsg');
}

function logOutEvent() {
 
    Cookies.remove('authenToken');
    window.location.href = "/index.html";
}

var logOut = document.getElementById('logout');
logOut.addEventListener('click', logOutEvent)
