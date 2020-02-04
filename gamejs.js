var N_SIZE = 3,
  EMPTY = "&nbsp;",
  boxes = [],
  turn = "X",
  score,
  moves;

/**
 * Initializes the Tic Tac Toe board and starts the game.
 */
function init() {
  var board = document.createElement("table");
  board.setAttribute("border", 1);
  board.setAttribute("cellspacing", 0);

  var identifier = 1;
  for (var i = 0; i < N_SIZE; i++) {
    var row = document.createElement("tr");
    board.appendChild(row);
    for (var j = 0; j < N_SIZE; j++) {
      var cell = document.createElement("td");
      cell.setAttribute("height", 120);
      cell.setAttribute("width", 120);
      cell.setAttribute("align", "center");
      cell.setAttribute("valign", "center");
      cell.classList.add("col" + j, "row" + i);
      if (i == j) {
        cell.classList.add("diagonal0");
      }
      if (j == N_SIZE - i - 1) {
        cell.classList.add("diagonal1");
      }
      cell.identifier = identifier;
      cell.addEventListener("click", set);
      row.appendChild(cell);
      boxes.push(cell);
      identifier += identifier;
    }
  }

  document.getElementById("tictactoe").appendChild(board);
  startNewGame();
}


/**
 * New game
 */
function startNewGame() {
  score = {
    X: 0,
    O: 0
  };
  moves = 0;
  turn = "X";
  boxes.forEach(function (square) {
    square.innerHTML = EMPTY;
  });
}

function strike(items, classname) {
  var linestrike = document.querySelector(".strike");
  var item = items[0];
  var top = Math.floor(item.getBoundingClientRect().top);
  var left = Math.floor(item.getBoundingClientRect().left);
  linestrike.style.display = "initial";
  if (classname.includes("row")) {
    linestrike.style.width = 120 * 3 + "px";
    linestrike.style.height = "6px";
    linestrike.style.top = top + 60 + "px";
    linestrike.style.left = left + "px";
    linestrike.style.transform = 'rotate(0deg)';
  } else if (classname.includes("col")) {

    linestrike.style.width = "6px";
    linestrike.style.height = 118 * 3 + "px";
    linestrike.style.top = top + 6 + "px";
    linestrike.style.left = left + 60 + "px";
    linestrike.style.transform = 'rotate(0deg)';
  } else if (classname.includes("diagonal0")) {

    linestrike.style.width = "6px";
    linestrike.style.height = 118 * 3 + "px";
    linestrike.style.top = top + 6 + "px";
    linestrike.style.transform = 'rotate(135deg)';

  } else {

    linestrike.style.width = "6px";
    linestrike.style.height = 118 * 3 + "px";
    linestrike.style.top = top + 6 + "px";
    linestrike.style.transform = 'rotate(45deg)';

  }

}


/**
 * Check if a win or not
 */
function win(clicked) {
  // Get all cell classes
  var memberOf = clicked.className.split(/\s+/);
  for (var i = 0; i < memberOf.length; i++) {
    var testClass = "." + memberOf[i];
    var items = contains("#tictactoe " + testClass, turn);
    // winning condition: turn == N_SIZE
    if (items.length == N_SIZE) {
      strike(items, testClass);
      setTimeout(() => {
        document.querySelector(".strike").style.display = "none";
        startNewGame();
      }, 3000);
      if ((document.querySelector(".declarer").style.opacity = "1")) {
        document.querySelector(".declarer").style.opacity = "1";
        //} else {
        setTimeout(() => {
          document.querySelector(".declarer").style.opacity = "0";
        }, 3000);
      }
      document.querySelector("#complement").innerHTML = "Congratulations!";
      document.querySelector("#wintext").innerHTML = "Winner: Player " + turn;

    }
  }
  return false;
}

/**
 * Helper function to check if NodeList from selector has a particular text
 */
function contains(selector, text) {
  var elements = document.querySelectorAll(selector);
  return [].filter.call(elements, function (element) {
    return RegExp(text).test(element.textContent);
  });
}

/**
 * Sets clicked square and also updates the turn.
 */
function set() {
  if (this.innerHTML !== EMPTY) {
    return;
  }
  this.innerHTML = turn;
  moves += 1;
  score[turn] += this.identifier;
  if (win(this)) {
    startNewGame();
    // document.querySelector(".declarer").style.display = "initial";
  } else if (moves === N_SIZE * N_SIZE) {
    if ((document.querySelector(".declarer").style.opacity = "1")) {
      document.querySelector(".declarer").style.opacity = "1";
      //} else {
      setTimeout(() => {
        document.querySelector(".declarer").style.opacity = "0";
      }, 5000);
    }
    document.querySelector("#complement").innerHTML = "Ooops!!!";
    document.querySelector("#wintext").innerHTML = "It's a Draw";
    startNewGame();
    // document.querySelector(".declarer").style.display = "initial";
  } else {
    turn = turn === "X" ? "O" : "X";

    document.getElementById("turn").textContent = "Player " + turn + "'s turn";
  }
}





function callgame() {
  console.clear();

  let size = 10; // size x size tiles
  let bombFrequency = 0.2; // percentage of bombs
  let tileSize = 60;

  const board = document.querySelectorAll('.board')[0];
  let tiles;
  let boardSize;

  const restartBtn = document.querySelectorAll('.btn')[0];
  const endscreen = document.querySelectorAll('.endscreen')[0]

  // settings
  const boardSizeBtn = document.getElementById('boardSize');
  const tileSizeBtn = document.getElementById('tileSize');
  const difficultyBtns = document.querySelectorAll('.difficulty');

  let bombs = [];
  let numbers = [];
  let numberColors = ['#3498db', '#2ecc71', '#e74c3c', '#9b59b6', '#f1c40f', '#1abc9c', '#34495e', '#7f8c8d', ];
  let endscreenContent = {
    win: '<span>✔</span> you won!',
    loose: '💣 Booom! Game over.'
  };

  let gameOver = false;

  /* clear board */
  const clear = () => {
    // console.clear();
    gameOver = false;
    bombs = [];
    numbers = [];
    endscreen.innerHTML = '';
    endscreen.classList.remove('show');
    tiles.forEach(tile => {
      tile.remove();
    });

    setup();
  }


  /* setup the game */
  const setup = () => {
    for (let i = 0; i < Math.pow(size, 2); i++) {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      board.appendChild(tile);
    }
    tiles = document.querySelectorAll('.tile');
    boardSize = Math.sqrt(tiles.length);
    board.style.width = boardSize * tileSize + 'px';

    document.documentElement.style.setProperty('--tileSize', `${tileSize}px`);
    document.documentElement.style.setProperty('--boardSize', `${boardSize * tileSize}px`);

    let x = 0;
    let y = 0;
    tiles.forEach((tile, i) => {
      // set tile coordinates
      tile.setAttribute('data-tile', `${x},${y}`);

      // add bombs
      let random_boolean = Math.random() < bombFrequency;
      if (random_boolean) {
        bombs.push(`${x},${y}`);
        if (x > 0) numbers.push(`${x-1},${y}`);
        if (x < boardSize - 1) numbers.push(`${x+1},${y}`);
        if (y > 0) numbers.push(`${x},${y-1}`);
        if (y < boardSize - 1) numbers.push(`${x},${y+1}`);

        if (x > 0 && y > 0) numbers.push(`${x-1},${y-1}`);
        if (x < boardSize - 1 && y < boardSize - 1) numbers.push(`${x+1},${y+1}`);

        if (y > 0 && x < boardSize - 1) numbers.push(`${x+1},${y-1}`);
        if (x > 0 && y < boardSize - 1) numbers.push(`${x-1},${y+1}`);
      }

      x++;
      if (x >= boardSize) {
        x = 0;
        y++;
      }

      /* rightclick */
      tile.oncontextmenu = function (e) {
        e.preventDefault();
        flag(tile);
      }

      /* leftclick */
      tile.addEventListener('click', function (e) {
        clickTile(tile);
      });
    });

    numbers.forEach(num => {
      let coords = num.split(',');
      let tile = document.querySelectorAll(`[data-tile="${parseInt(coords[0])},${parseInt(coords[1])}"]`)[0];
      let dataNum = parseInt(tile.getAttribute('data-num'));
      if (!dataNum) dataNum = 0;
      tile.setAttribute('data-num', dataNum + 1);
    });
  }


  /* flag a tile */
  const flag = (tile) => {
    if (gameOver) return;
    if (!tile.classList.contains('tile--checked')) {
      if (!tile.classList.contains('tile--flagged')) {
        tile.innerHTML = '🚩';
        tile.classList.add('tile--flagged');
      } else {
        tile.innerHTML = '';
        tile.classList.remove('tile--flagged');
      }
    }
  }


  /* check if bomb or not */
  const clickTile = (tile) => {
    if (gameOver) return;
    if (tile.classList.contains('tile--checked') || tile.classList.contains('tile--flagged')) return;
    let coordinate = tile.getAttribute('data-tile');
    if (bombs.includes(coordinate)) {
      endGame(tile);
    } else {
      /* check if nearby bomb */
      let num = tile.getAttribute('data-num');
      if (num != null) {
        tile.classList.add('tile--checked');
        tile.innerHTML = num;
        tile.style.color = numberColors[num - 1];
        setTimeout(() => {
          checkVictory();
        }, 100);
        return;
      }

      checkTile(tile, coordinate);
    }
    tile.classList.add('tile--checked');
  }


  /* clicked the right one */
  const checkTile = (tile, coordinate) => {

    //	console.log('✔');
    let coords = coordinate.split(',');
    let x = parseInt(coords[0]);
    let y = parseInt(coords[1]);

    /* check nearby tiles */
    setTimeout(() => {
      if (x > 0) {
        let targetW = document.querySelectorAll(`[data-tile="${x-1},${y}"`)[0];
        clickTile(targetW, `${x-1},${y}`);
      }
      if (x < boardSize - 1) {
        let targetE = document.querySelectorAll(`[data-tile="${x+1},${y}"`)[0];
        clickTile(targetE, `${x+1},${y}`);
      }
      if (y > 0) {
        let targetN = document.querySelectorAll(`[data-tile="${x},${y-1}"]`)[0];
        clickTile(targetN, `${x},${y-1}`);
      }
      if (y < boardSize - 1) {
        let targetS = document.querySelectorAll(`[data-tile="${x},${y+1}"]`)[0];
        clickTile(targetS, `${x},${y+1}`);
      }

      if (x > 0 && y > 0) {
        let targetNW = document.querySelectorAll(`[data-tile="${x-1},${y-1}"`)[0];
        clickTile(targetNW, `${x-1},${y-1}`);
      }
      if (x < boardSize - 1 && y < boardSize - 1) {
        let targetSE = document.querySelectorAll(`[data-tile="${x+1},${y+1}"`)[0];
        clickTile(targetSE, `${x+1},${y+1}`);
      }

      if (y > 0 && x < boardSize - 1) {
        let targetNE = document.querySelectorAll(`[data-tile="${x+1},${y-1}"]`)[0];
        clickTile(targetNE, `${x+1},${y-1}`);
      }
      if (x > 0 && y < boardSize - 1) {
        let targetSW = document.querySelectorAll(`[data-tile="${x-1},${y+1}"`)[0];
        clickTile(targetSW, `${x-1},${y+1}`);
      }
    }, 10);
  }


  /* Bomb clicked -> end game */
  const endGame = (tile) => {
    //console.log('💣 Booom! Game over.');
    restartBtn.style.display = "initial";
    endscreen.innerHTML = endscreenContent.loose;
    endscreen.classList.add('show');
    gameOver = true;
    tiles.forEach(tile => {
      let coordinate = tile.getAttribute('data-tile');
      if (bombs.includes(coordinate)) {
        tile.classList.remove('tile--flagged');
        tile.classList.add('tile--checked', 'tile--bomb');
        tile.innerHTML = '💣';
      }
    });
  }

  const checkVictory = () => {
    let win = true;
    //restartBtn.style.display = "initial";
    tiles.forEach(tile => {
      let coordinate = tile.getAttribute('data-tile');
      if (!tile.classList.contains('tile--checked') && !bombs.includes(coordinate)) win = false;
    });
    if (win) {
      endscreen.innerHTML = endscreenContent.win;
      endscreen.classList.add('show');
      gameOver = true;
    }
  }


  /* start game */
  setup();

  /* click button for new game */
  restartBtn.addEventListener('click', function (e) {
    e.preventDefault();
    clear();
    restartBtn.style.display = "none";
  });

  // settings
  boardSizeBtn.addEventListener('change', function (e) {
    console.log(this.value);
    size = this.value;
    clear();
  });

  tileSizeBtn.addEventListener('change', function (e) {
    console.log(this.value);
    tileSize = this.value;
    clear();
  });

  difficultyBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      console.log(this.value);
      bombFrequency = this.value;
      clear();
    });
  });

  console.log(`${boardSize} x ${boardSize} tiles`);
  console.log('bombs');
  console.log(bombs);
  console.log('numbers');
  console.log(numbers);
}




init();
callgame();
