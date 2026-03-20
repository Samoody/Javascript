let nome = prompt( " Digite seu nome : " );
let idade = Number(prompt("Digite sua idade:"));

if (isNaN(idade)) {
    alert("Digite uma idade válida!");
} else if (idade >= 18) {
    alert("Acesso liberado, " + nome + "!");
    
    console.log("Bem-vindo à realidade.");
    console.log("Wake up, Neo...");
    console.log("The Matrix has you...");
    
} else {
    alert( " Acesso negado,  " +  nome  + "!" );
    console.log( "ACESSO NEGADO, VOCÊ ESCOLHEU A PILULA AZUL! ");
    console.log("🖥️ Status: Conectado à Matrix ");
    
    alert(`🔴 ACESSO NEGADO, ${nome.toUpperCase()}!`);
}
