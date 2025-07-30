let numeroAleatorio;
let tentativas;

function iniciarJogo() {
   numeroAleatorio = Math.floor(Math.random() * 10) + 1;
   console.log(numeroAleatorio);
   tentativas = 0;
   document.getElementById("jogo").innerText = "";
   document.getElementById("imagem").innerHTML = "";
   let input = document.getElementById("palpite");
   input.value = "";
}

function verificarPalpite() {

         let palpite = parseInt(document.getElementById("palpite").value);

         tentativas++;

         if(numeroAleatorio === palpite) {
            document.getElementById("jogo").innerText = "acertou com " + tentativas + " tentativas. 😘"; 
            document.getElementById("imagem").innerHTML = '<img style="width: 250px;" src="img/imgvencedor.jpg">';
         
         } else if(numeroAleatorio > palpite) {
           document.getElementById("jogo").innerText =  "é maior 💕";
           document.getElementById("imagem").innerHTML = '<img style="width: 250px;" src="img/cetaPcima.jpg">';
         } else {
            document.getElementById("jogo").innerText =  "é menor 😎";
            document.getElementById("imagem").innerHTML = '<img style="width: 250px;" src="img/cetaPbaixo.jpg">';
         }
     
   }
   window.onload = iniciarJogo;