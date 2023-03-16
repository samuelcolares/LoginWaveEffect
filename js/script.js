const $TITLE = document.querySelector('h1')
const $LOGIN = document.querySelector('.login')
const $CADASTRO = document.querySelector('.cadastro')
const $CHANGE = document.querySelectorAll('a')

const $LABELS = document.querySelectorAll('.label')
const $EMAIL_INPUT = document.querySelector('.email-input')
const $SENHA_INPUT = document.querySelector('.senha-input')
const $BUTTON = document.querySelector('.btn')


const $LABELS_CADASTRO = document.querySelectorAll('.label-cadastro')
const $NOME_CADASTRO = document.querySelector('.nome-input')
const $TELEFONE_CADASTRO = document.querySelector('.telefone-input')
const $EMAIL_CADASTRO = document.querySelector('.email-input-cadastro')
const $SENHA_CADASTRO = document.querySelector('.senha-input-cadastro')
const $BUTTON_CADASTRO = document.querySelector('.button-cadastro')


$LABELS.forEach(label => {
    label.innerHTML = label.innerText.split('').map((letter, idx) => `<span style="transition-delay:${idx * 60}ms">${letter}</span>`).join(``)
    // console.log(label.innerText)
    // console.log(label.innerText.split(''))
    // console.log(label.innerText.split('').map((letter, idx) => `<span style="transition-delay:${idx * 60}ms">${letter}</span>`))
    // console.log(label.innerText.split('').map((letter, idx) => `<span style="transition-delay:${idx * 60}ms">${letter}</span>`).join(``))   

})
$LABELS_CADASTRO.forEach(label => {
    label.innerHTML = label.innerText.split('').map((letter, idx) => `<span style="transition-delay:${idx * 60}ms">${letter}</span>`).join(``)
})

let flagEmail = false;
$EMAIL_INPUT.addEventListener('input', (e) => {
    console.log(e)
    if (e.target.value) {
        flagEmail = true
    } else {
        flagEmail = false
    }
    verificacaoLogin()
    labelComConteudo($LABELS, flagEmail, 0)
})
let flagSenha = false;
$SENHA_INPUT.addEventListener('input', (e) => {
    if (e.target.value) {
        flagSenha = true
    } else {
        flagSenha = false
    }
    verificacaoLogin()
    labelComConteudo($LABELS, flagSenha, 1)
})

function verificacaoLogin() {
    if (flagEmail && flagSenha) {
        $TITLE.style.color = 'rgb(118, 198, 224)'
        $BUTTON.style.backgroundColor = 'rgb(118, 198, 224)'
    } else {
        $TITLE.style.color = 'white'
        $BUTTON.style.backgroundColor = 'lightblue'
    }
}

function labelComConteudo(label, flag, labelNumber) {
    if (flag) {
        label[labelNumber].classList.add('teste')
        return
    }
    label[labelNumber].classList.remove('teste')

}


$BUTTON.addEventListener('click', (e) => {
    e.preventDefault()
    let emailValue = $EMAIL_INPUT.value
    let senhaValue = $SENHA_INPUT.value
    if (!senhaValue || !emailValue) {
        $TITLE.classList.add(`shake`)
        setTimeout(() => {
            $TITLE.classList.remove(`shake`)
        }, 600)
    }
})

$BUTTON_CADASTRO.addEventListener('click', (e) => {
    e.preventDefault()
    let emailValue = $EMAIL_CADASTRO.value
    let senhaValue = $SENHA_CADASTRO.value
    let telefoneValue = $TELEFONE_CADASTRO.value
    let nomeValue = $NOME_CADASTRO.value
    if (!senhaValue || !emailValue || !telefoneValue || !nomeValue) {
        $TITLE.classList.add(`shake`)
        setTimeout(() => {
            $TITLE.classList.remove(`shake`)
        }, 600)
    }
})

// cadastro

function verificacaocadastro(){
    if (flagEmailCadastro && flagSenhaCadastro && flagTelefone && flagNome) {
        $TITLE.style.color = 'rgb(118, 198, 224)'
        $BUTTON_CADASTRO.style.backgroundColor = 'rgb(118, 198, 224)'
    } else {
        $TITLE.style.color = 'white'
        $BUTTON_CADASTRO.style.backgroundColor = 'lightblue'
    }
}

let flagNome = false
let flagTelefone = false
let flagEmailCadastro = false
let flagSenhaCadastro = false


$NOME_CADASTRO.addEventListener('input', (e) => {
    if (e.target.value) {
        flagNome = true
    } else {
        flagNome = false
    }
    verificacaocadastro()
    labelComConteudo($LABELS_CADASTRO, flagNome, 0)
})

$TELEFONE_CADASTRO.addEventListener('input', (e) => {
    if (e.target.value) {
        flagTelefone = true
    } else {
        flagTelefone = false
    }
    verificacaocadastro()
    labelComConteudo($LABELS_CADASTRO, flagTelefone, 1)
})

$EMAIL_CADASTRO.addEventListener('input', (e) => {
    if (e.target.value) {
        flagEmailCadastro = true
    } else {
        flagEmailCadastro = false
    }
    verificacaocadastro()
    labelComConteudo($LABELS_CADASTRO, flagEmailCadastro, 2)
})

$SENHA_CADASTRO.addEventListener('input', (e) => {
    if (e.target.value) {
        flagSenhaCadastro = true
    } else {
        flagSenhaCadastro = false
    }
    verificacaocadastro()
    labelComConteudo($LABELS_CADASTRO, flagSenhaCadastro, 3)
})


$CHANGE[0].addEventListener('click', () => {
    $LOGIN.classList.add('none')
    $CADASTRO.classList.remove('none')
    $TITLE.innerText = 'Cadastro'
    $TITLE.style.color = 'white'
    bbr.classList.add('ttr')
})

$CHANGE[1].addEventListener('click', () => {
    $CADASTRO.classList.add('none')
    $LOGIN.classList.remove('none')
    $TITLE.innerText = 'Login'
    $TITLE.style.color = 'white'
    bbr.classList.remove('ttr')
})

const bbr = document.querySelector('.bbr')

const ll = document.querySelector('.ll')
const cc = document.querySelector('.cc')

ll.onclick = () => {
    bbr.classList.remove('ttr')
    $CADASTRO.classList.add('none')
    $LOGIN.classList.remove('none')
    $TITLE.innerText = 'Login'
    $TITLE.style.color = 'white'
}

cc.onclick = () =>{
    bbr.classList.add('ttr')
    $LOGIN.classList.add('none')
    $CADASTRO.classList.remove('none')
    $TITLE.innerText = 'Cadastro'
    $TITLE.style.color = 'white'
}