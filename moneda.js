mp.events.addCommand('moneda', (player) => {
  lanzarMoneda(player);
});

function lanzarMoneda(player) {
  const resultado = Math.floor(Math.random() * 2);
  const resultadoTexto = resultado === 0 ? 'cara' : 'cruz';
  
  player.outputChatBox(`Te ha salido ${resultadoTexto}.`);
  
  // Enviar mensaje a jugadores cercanos
  mp.players.forEachInStreamRange(player, (p) => {
    p.outputChatBox(`[${player.name}] ha lanzado una moneda y le ha salido ${resultadoTexto}.`);
  });
}
