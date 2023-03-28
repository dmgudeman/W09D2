const View = require('./ttt-view')
const Game = require('./../ttt_node/game')





document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  // console.log(game)
  let el = document.querySelector('.ttt');
  new View(game, el);

});
