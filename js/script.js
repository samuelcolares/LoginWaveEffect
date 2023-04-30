
const main = {
    init: function () {
        this.cacheSelectors();
        this.bindEvents();

    },

    cacheSelectors: function () {
        this.$TITLE = document.querySelector('h1')
        this.$LOGIN = document.querySelector('.login')
        this.$CADASTRO = document.querySelector('.cadastro')
        this.$CHANGE = document.querySelectorAll('a')

        this.$LABELS = document.querySelectorAll('.label')
        this.$EMAIL_INPUT = document.querySelector('.email-input')
        this.$SENHA_INPUT = document.querySelector('.senha-input')
        this.$BUTTON = document.querySelector('.btn')


        this.$LABELS_CADASTRO = document.querySelectorAll('.label-cadastro')
        this.$NOME_CADASTRO = document.querySelector('.nome-input')
        this.$TELEFONE_CADASTRO = document.querySelector('.telefone-input')
        this.$EMAIL_CADASTRO = document.querySelector('.email-input-cadastro')
        this.$SENHA_CADASTRO = document.querySelector('.senha-input-cadastro')
        this.$BUTTON_CADASTRO = document.querySelector('.button-cadastro')

        this.bbr = document.querySelector('.bbr')
        this.ll = document.querySelector('.ll')
        this.cc = document.querySelector('.cc')

    },

    bindEvents: function () {
        this.$LABELS.forEach(label => {
            label.innerHTML = label.innerText.split('').map((letter, idx) => `<span style="transition-delay:${idx * 60}ms">${letter}</span>`).join(``)
            console.log(label.innerText)
            console.log(label.innerText.split(''))
            console.log(label.innerText.split('').map((letter, idx) => `<span style="transition-delay:${idx * 60}ms">${letter}</span>`))
            console.log(label.innerText.split('').map((letter, idx) => `<span style="transition-delay:${idx * 60}ms">${letter}</span>`).join(``))

        })
        this.$LABELS_CADASTRO.forEach(label => {
            label.innerHTML = label.innerText.split('').map((letter, idx) => `<span style="transition-delay:${idx * 60}ms">${letter}</span>`).join(``)
        })
        this.$EMAIL_INPUT.addEventListener('input', (e) => {
            console.log(e)
            if (e.target.value) {
                flagEmail = true
            } else {
                flagEmail = false
            }
            this.Events.verificacaoLogin.bind(this)()
            this.Events.labelComConteudo.bind(this)(this.$LABELS, flagEmail, 0)
        })
        this.$SENHA_INPUT.addEventListener('input', (e) => {
            if (e.target.value) {
                flagSenha = true
            } else {
                flagSenha = false
            }
            this.Events.verificacaoLogin.bind(this)()
            this.Events.labelComConteudo.bind(this)(this.$LABELS, flagSenha, 1)
        })

        this.$BUTTON.addEventListener('click', (e) => {
            e.preventDefault()
            let emailValue = this.$EMAIL_INPUT.value
            let senhaValue = this.$SENHA_INPUT.value
            if (!senhaValue || !emailValue) {
                this.$TITLE.classList.add(`shake`)
                setTimeout(() => {
                    this.$TITLE.classList.remove(`shake`)
                }, 600)
            }
        })

        this.$BUTTON_CADASTRO.addEventListener('click', (e) => {
            e.preventDefault()
            let emailValue = this.$EMAIL_CADASTRO.value
            let senhaValue = this.$SENHA_CADASTRO.value
            let telefoneValue = this.$TELEFONE_CADASTRO.value
            let nomeValue = this.$NOME_CADASTRO.value
            if (!senhaValue || !emailValue || !telefoneValue || !nomeValue) {
                this.$TITLE.classList.add(`shake`)
                setTimeout(() => {
                    this.$TITLE.classList.remove(`shake`)
                }, 600)
            }
        })

        this.$NOME_CADASTRO.addEventListener('input', (e) => {
            if (e.target.value) {
                this.flagNome = true
            } else {
                this.flagNome = false
            }
            this.Events.verificacaocadastro.bind(this)()
            this.Events.labelComConteudo.bind(this)(this.$LABELS_CADASTRO, this.flagNome, 0)
        })

        this.$TELEFONE_CADASTRO.addEventListener('input', (e) => {
            if (e.target.value) {
                this.flagTelefone = true
            } else {
                this.flagTelefone = false
            }
            this.Events.verificacaocadastro.bind(this)()
            this.Events.labelComConteudo.bind(this)(this.$LABELS_CADASTRO, this.flagTelefone, 1)
        })

        this.$EMAIL_CADASTRO.addEventListener('input', (e) => {
            if (e.target.value) {
                this.flagEmailCadastro = true
            } else {
                this.flagEmailCadastro = false
            }
            this.Events.verificacaocadastro.bind(this)()
            this.Events.labelComConteudo.bind(this)(this.$LABELS_CADASTRO, this.flagEmailCadastro, 2)
        })

        this.$SENHA_CADASTRO.addEventListener('input', (e) => {
            if (e.target.value) {
                this.flagSenhaCadastro = true
            } else {
                this.flagSenhaCadastro = false
            }
            this.Events.verificacaocadastro.bind(this)()
            this.Events.labelComConteudo.bind(this)(this.$LABELS_CADASTRO, this.flagSenhaCadastro, 3)
        })


        this.$CHANGE[0].addEventListener('click', () => {
            this.$LOGIN.classList.add('none')
            this.$CADASTRO.classList.remove('none')
            this.$TITLE.innerText = 'Cadastro'
            this.$TITLE.style.color = 'white'
            this.bbr.classList.add('ttr')
        })

        this.$CHANGE[1].addEventListener('click', () => {
            this.$CADASTRO.classList.add('none')
            this.$LOGIN.classList.remove('none')
            this.$TITLE.innerText = 'Login'
            this.$TITLE.style.color = 'white'
            this.bbr.classList.remove('ttr')
        })



        this.ll.onclick = () => {
            this.bbr.classList.remove('ttr')
            this.$CADASTRO.classList.add('none')
            this.$LOGIN.classList.remove('none')
            this.$TITLE.innerText = 'Login'
            this.$TITLE.style.color = 'white'
        }

        this.cc.onclick = () => {
            this.bbr.classList.add('ttr')
            this.$LOGIN.classList.add('none')
            this.$CADASTRO.classList.remove('none')
            this.$TITLE.innerText = 'Cadastro'
            this.$TITLE.style.color = 'white'
        }
    },

    flagNome: false,
    flagTelefone: false,
    flagEmail: false,
    flagSenha: false,
    flagEmailCadastro: false,
    flagSenhaCadastro: false,

    Events: {
        verificacaoLogin: function () {
            if (this.flagEmail && this.flagSenha) {
                this.$TITLE.style.color = 'rgb(118, 198, 224)'
                this.$BUTTON.style.backgroundColor = 'rgb(118, 198, 224)'
            } else {
                this.$TITLE.style.color = 'white'
                this.$BUTTON.style.backgroundColor = 'lightblue'
            }
        },

        labelComConteudo: function (label, flag, labelNumber) {
            if (flag) {
                label[labelNumber].classList.add('teste')
                return
            }
            label[labelNumber].classList.remove('teste')
        },
        verificacaocadastro: function () {
            if (this.flagEmailCadastro && this.flagSenhaCadastro && this.flagTelefone && this.flagNome) {
                this.$TITLE.style.color = 'rgb(118, 198, 224)'
                this.$BUTTON_CADASTRO.style.backgroundColor = 'rgb(118, 198, 224)'
            } else {
                this.$TITLE.style.color = 'white'
                this.$BUTTON_CADASTRO.style.backgroundColor = 'lightblue'
            }
        }

    },

}

main.init();

