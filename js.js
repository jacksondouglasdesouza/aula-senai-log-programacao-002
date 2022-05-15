let nomeUsuario, idade, opcao;

do{
  console.log("\n\n [ Escolha qual operação Deseja Executar. ] \n\n");
  console.log(" 1º) Cadastrar novo usuário: ");
  console.log(" 2º) Listar todos os usuários cadastrados. ");
  console.log(" 3º) Finalizar o sistema. ");
  opcao = prompt("Qual sua opção? ");
  console.clear();
  
  if(opcao == 1){
    nomeUsuario = prompt("Qual é o seu nome? ");
    idade = prompt("Qual é a sua idade: ");
    console.clear();
    console.log(`Obrigado, ${nomeUsuario}, os dados foram armazenados!`);
    break;
  }
  if(opcao == 2){
  console.clear();
  console.log(`\n\nEstes são os Usuários Cadastrados: ${nomeUsuario} `);
  break;
  }
  if(opcao == 3){
    console.clear();
    console.log("\n***[ Programa Finalizado! ]***");
  } 
  if(opcao < 0 || opcao > 3){
    console.clear();
    console.log("\n**** Sua opção é inválida! ****");
  }
  } while(opcao != 3);