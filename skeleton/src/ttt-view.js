const Game = require('./../ttt_node/game')

class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.bindEvents()
    this.setupBoard()
  }
  
  setupBoard() {
    let ul = document.createElement('ul');
  
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let li = document.createElement('li');
        li.dataset.pos = JSON.stringify([i, j])
        ul.appendChild(li)  

      }  

  }
  ul.setAttribute('textDecoration','none');
  
  this.el.appendChild(ul)
  ul.addEventListener('click', this.handleClick  )
}
  
  bindEvents() {
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
  
    let pos = JSON.parse(e.target.dataset.pos)
    this.game.playMove(pos)
    e.target.style.backgroundColor='white';
    e.target.innerHTML = `${this.game.currentPlayer}`
 
    if(this.game.currentPlayer === 'x') {
     
      e.target.style.color = 'red';
      e.target.style.backgroundColor = '#CC99FF';
    } else {
      e.target.style.color = 'green';
      e.target.style.backgroundColor = '#F59B42';
    }
   

  }

  makeMove(square) {}

}

module.exports = View;
