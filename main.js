
var boton = document.getElementById("sumanft");

boton.addEventListener("click",function(){
  
    const nafta = document.getElementById('tipoNft').value;
    const Km = document.getElementById("CantKm").value;
    const KmL = document.getElementById("KmL").value;
    if (isNaN(Km) || isNaN(KmL)) {
      document.getElementById("resultado").innerHTML =
      "<p id='resultado'>Ingresa los datos deseados</p>";
    } else {
      const litros = Km / KmL;
      const precio = litros * nafta;
      document.getElementById("resultado").innerHTML =
  
      "Litros necesarios:" +
      litros.toFixed(2) +
      "<br>" +
      "Precio:" +
      precio.toFixed(3);
      
    }

});