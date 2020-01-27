//Quand on click sur creer un album
document.querySelector('#addF_Btn').addEventListener('click', function () {
    var   menu =  document.querySelector('.addFolder');
    if(menu.style.display === "block") menu.style.display = "none";
    else menu.style.display = "block";
})

//Quand on click sur profil
document.querySelector('#btnProfil').addEventListener('click', function () {
    var   menu =  document.querySelector('.profilInfo');
    if(menu.style.display === "block") menu.style.display = "none";
    else menu.style.display = "block";
})