gameObj.Loser = function (game) {};

gameObj.Loser.prototype = {
  create: function () {
    console.log('Loser');

    // Background Image
    var sBackground = this.add.sprite(0, 0, 'background');

    // Environment
    var sCloud1Lose = this.add.sprite(380, 20, 'cloud1Lose');
    var sCloud2Lose = this.add.sprite(102, 184, 'cloud2Lose');
    var sCloud3Lose = this.add.sprite(304, 512, 'cloud3Lose');

    var sGrass = this.add.sprite(0, 890, 'grass');

    // Start Graphics
   var sbranchNestLose = this.add.sprite(0, 152, 'branchNestLose');
   var sbirdBranchLose = this.add.sprite(401, 260, 'birdBranchLose');       
   //Birds
    var sCrying = this.add.sprite(73, 117, 'crying');
    var sSadOwl = this.add.sprite(408, 62, 'sadowl'); 

    // Buttons

    var btTryAgain = this.add.button(460, 700, 
        'TryAgain', this.TryAgainFun, this, 2 , 0, 1);

	// Text
    	var LoseStr = ' Your babies went hungry!';
        var txLose = this.add.text(236, 510, LoseStr);

        txLose.fill = 'black';
        txLose.fontSize = 32;
        txLose.font = 'Rancho';

        var scoreStr = '70/100';
        var txScore = this.add.text(524, 14, scoreStr);

        txScore.fill = 'black';
        txScore.fontSize = 32;
        txScore.font = 'Rancho';

        var timeStr = 'Time: 0:00';
        var txTime = this.add.text(401, 14, timeStr);

        txTime.fill = 'black';
        txTime.fontSize = 32;
        txTime.font = 'Rancho'
  },
  
  TryAgainFun: function () {
    console.log('TryAgainFun called');
    this.state.start('Play');

  }
};
