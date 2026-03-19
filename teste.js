let idade = prompt(" Qual sua idade ? " );
let nome = prompt(" Qual seu nome ? ");
let terror = prompt(" Qual seu filme de terror favorito ? ");

if (idade < 18) {
    console.log("Olá " + nome + ", você é menor de idade.");
} else {
    console.log("Olá " + nome + ", acesso desbloqueado.");
    console.log("Hi Neo, welcome to Matrix!");
}
console.log("Seu filme de terror favorito é: " + terror);
