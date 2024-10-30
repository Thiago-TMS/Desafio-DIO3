class heroi {
    constructor(nome, idade, tipo, ataque) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }
    
    atacar () {
            if (this.tipo === "mago") {
                this.ataque= ("mágia")
        
            }else if (this.tipo === "guerreiro"){
                this.ataque= ("espada")
        
            }else if (this.tipo === "monge"){
                this.ataque= ("artes marcias")
        
            }else if (this.tipo === "ninja") {
                this.ataque= ("shuriken")
            }

            console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
        }
    }


let utilizou = new heroi ("HammerToFall", 23, "mago")
utilizou.atacar()