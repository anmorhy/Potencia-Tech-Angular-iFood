type Hero = {
    nome: string,
    vulgo: string,
    telefone: string
};

function ligarPara(heroi: Hero){
    console.log("ligando para: " + heroi.telefone);
};

ligarPara({
    nome: "Steve",
    vulgo: "Capitao",
    telefone: "00 456",
});