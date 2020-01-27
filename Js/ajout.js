var   f       =  document.querySelector('#fichier')
var  link  =   document.querySelector('#link')

//Quand on click
  link.addEventListener('click', function(){
             f.click()
 })



//La function qui creer l'image
function creerImage()
{
    var  fichier = this.files[0];
    var   nom   = fichier.name
    //CREATION DE L'IMAGE
    var  img =  document.createElement('img');

        img.src = window.URL.createObjectURL(fichier);
        img.style.zIndex ='100';
        img.onload = function() {
            window.URL.revokeObjectURL(this.src);
        }
        //On ajoute l'image pour quelle apparait
        var  output                 =   document.getElementById("output");
                                                  output.appendChild(img)
         var  taille                     = output.children.length
          //On enleve le boutton link
          link.style.display = "none"

         //A chaque fois qu'on rajoute une image alors on supprime l'ncienne 
         if (taille>1) {
               output.removeChild(output.firstChild);
               taille--; 
          }
       
}


//On charge l'image
f.addEventListener('change',  creerImage)
document.querySelector('#output').addEventListener('click', function(){
      f.click()
})
 