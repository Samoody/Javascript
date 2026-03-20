let nome = prompt("Digite seu nome, Neo...");
let idade = Number(prompt("Digite sua idade..."));

alert("🔎 Analisando dados...");
alert("💻 Acessando sistema...");
alert("🧠 Conectando à Matrix...");

if (isNaN(idade)) {
    alert("❌ ERRO: Idade inválida detectada!");
    console.log("Sistema corrompido...");
} else {
    if (idade >= 18) {
        alert(`🟢 ACESSO LIBERADO, ${nome.toUpperCase()}!`);
        alert("💊 Você escolheu a pílula vermelha...");
        
        console.log("Bem-vindo à realidade.");
        console.log(`👤 Usuário: ${nome}`);
        console.log(`🎂 Idade: ${idade}`);
        console.log("🖥️ Status: Conectado à Matrix");
        console.log("Wake up, Neo...");
        console.log("The Matrix has you...");
        
    } else {
        alert(`🔴 ACESSO NEGADO, ${nome.toUpperCase()}!`);
        
        console.log("ACESSO NEGADO");
    }
}
