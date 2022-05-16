function Enviar_mensagem(elemento) {
    let texto = elemento.firstElementChild.innerText;
    let numero = prompt("Para qual número");
    let link = `https://api.whatsapp.com/send?phone=55${numero}&text=${texto}`;

    window.open(link);
  }