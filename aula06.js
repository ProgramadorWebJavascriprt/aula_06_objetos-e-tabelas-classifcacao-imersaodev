/* Terça-feira,28/09/2021{à noite} das 20:55:59 até as 22:50:00 h +|-
Obs.:
   Essa revisão é para buscar o erro que cometir durante a aula lembram que tenho estas videos aulas salvas no notebook;*/
   var rafa = { nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
   var paulo = { nome: "Paulo", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };
   var gui = { nome: "Gui", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };
   // console.log("Vitorias da Rafa e", rafa.vitorias);
   // console.log("Vitorias do Paulo e", paulo.vitorias);
   // console.log(rafa);
   
   function calculaPontos(jogador) {
     var pontos = jogador.vitorias * 3 + jogador.empates;
     return pontos;
   }
   rafa.pontos = calculaPontos(rafa);
   paulo.pontos = calculaPontos(paulo);
   gui.pontos = calculaPontos(gui);
   
   // console.log(rafa);
   // console.log(paulo);
   var jogadores = [rafa, paulo, gui];
   // console.log(jogadores);
   function exibeJogadoresNaTela(jogadores) {
     var elemento = "";
     for (var i = 0; i < jogadores.length; i++) {
       elemento += "<tr><td>" + jogadores[i].nome + "</td>";
       elemento += "<td>" + jogadores[i].vitorias + "</td>";
       elemento += "<td>" + jogadores[i].empates + "</td>";
       elemento += "<td>" + jogadores[i].derrotas + "</td>";
       elemento += "<td>" + jogadores[i].pontos + "</td>";
       elemento +=
         "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
       elemento +=
         " <td><button onClick='adicionarEmpate(" + i + " )'>Empate</button></td>";
       elemento +=
         " <td><button onClick='adicionarDerrota(" +
         i +
         ")'>Derrota</button></td>";
       elemento += "</tr>";
     }
     var tabelaJogadores = document.getElementById("tabelaJogadores");
     tabelaJogadores.innerHTML = elemento;
   }
   exibeJogadoresNaTela(jogadores);
   function adicionarVitoria(i) {
     var jogador = jogadores[i];
     jogador.vitorias++;
     jogador.pontos = calculaPontos(jogador);
     exibeJogadoresNaTela(jogadores);
   }
   function adicionarEmpate(i) {
     var jogador = jogadores[i];
     jogador.empates++;
     jogador.pontos = calculaPontos(jogador);
     exibeJogadoresNaTela(jogadores);
   }
   function adicionarDerrota(i) {
     var jogador = jogadores[i];
     jogador.derrotas++;
     exibeJogadoresNaTela(jogadores);
   }
   