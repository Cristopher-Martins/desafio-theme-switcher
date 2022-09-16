themeBtn = document.getElementById("themeBtn")
themeBtn.addEventListener('click', changeTheme);
getBody = document.querySelector("body")

function changeTheme(){
    let lightThemeActive = getBody.classList.contains("light")
    let darkThemeActive = getBody.classList.contains("dark")

    if(lightThemeActive){
    getBody.classList.replace("light", "dark");
    themeBtn.classList.replace("light", "dark");
    
    }else if(darkThemeActive){
    getBody.classList.replace("dark", "light");
    themeBtn.classList.replace("dark", "light");
}}

