gameObj.Play = function (game) {};

gameObj.Play.prototype = {
  create: function () {
    console.log('Play');

    // Background Image
    var sBackground = this.add.sprite(0, 0, 'background');


	// Environment

    var sCloud1Play = this.add.sprite(380, 20, 'cloud1Play');
    var sCloud2Play = this.add.sprite(102, 184, 'cloud2Play');
    var sCloud3Play = this.add.sprite(304, 512, 'cloud3Play');

    var sGrass = this.add.sprite(0, 890, 'grass');

    var sbottombranch = this.add.sprite(40, 686, 'bottombranch');
    var sbranch2 = this.add.sprite(360, 578, 'branch2');
    var sbranch3 = this.add.sprite(35, 368, 'branch3');
    var sbranch4 = this.add.sprite(433, 104, 'branch4');
    var sbranch5 = this.add.sprite(33, 55, 'branch5');

    var sRightTree = this.add.sprite(673, 0, 'rightTree');
   	var sLeftTree = this.add.sprite(-7, 0, 'leftTree');

    // Graphics

    var sBirdPlay = this.add.sprite(393.92, 844.42, 'birdPlay');
    var sWormPlay = this.add.sprite(591, 911, 'wormPlay');
    var sNestPlay = this.add.sprite(70, -90, 'nestPlay');

    // Buttons
    var btWin = this.add.button(10, 850, 'winButton', this.winnerFun, this, 1, 0, 2);
    var btLose = this.add.button(150, 850, 'loseButton', this.loserFun, this, 1, 0, 2);

	//add text
	
    var scoreStr = '40/100';
    var txScore = this.add.text(524, 14, scoreStr);

    txScore.fill = 'black';
    txScore.fontSize = 32;
    txScore.font = 'Rancho';

    var timeStr = 'Time: 1:32';
    var txTime = this.add.text(401, 14, timeStr);

    txTime.fill = 'black';
    txTime.fontSize = 32;
    txTime.font = 'Rancho'
  },

  winnerFun: function () {
    console.log('winnerFun called');
    this.state.start('Winner');
  },

   loserFun: function () {
    console.log('loserFun called');
       this.state.start('Loser');

  }
};
