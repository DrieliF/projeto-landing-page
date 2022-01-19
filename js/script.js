function abrirModal() {
  document.querySelector('.modal').style.display = 'flex'
}

function fecharModal() {
  document.querySelector('.modal').style.display = 'none'
}

function enviarMensagem() {
  let nome = document.getElementById('input_nome')
  let mensagem = document.getElementById('input_mensagem')

  if (nome.value == '') {
    nome.classList.add('erro')
    // document.getElementById("input_nome").classList.add("erro");
    nome.placeholder = 'O Campo Nome é obrigatório!!'
    // document.getElementById("input_nome").placeholder = "O Nome é obrigatório!";
  } else {
    //https://api.whatsapp.com/send?phone=TELEFONEPESSOAL&text=NOME+MENSAGEM
    let texto = `Olá me chamo ${nome.value}, ${mensagem.value}`
    let url = `https://api.whatsapp.com/send?phone=ALGUMNUMERODETELEFONE&text=${texto}`

    window.open(url)
  }
}
