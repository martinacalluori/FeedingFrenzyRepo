gameObj.Winner = function (game) {};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
gameObj.Winner.prototype = {
  create: function () {
    console.log('Winner');

    // Background Image
    var sBackground = this.add.sprite(0, 0, 'background');

    // Environment
    var sCloud1Win = this.add.sprite(380, 20, 'cloud1Win');
    var sCloud2Win = this.add.sprite(102, 184, 'cloud2Win');
    var sCloud3Win = this.add.sprite(304, 512, 'cloud3Win');

    var sGrass = this.add.sprite(0, 890, 'grass');

        //Branches

       var sbranchNestWin = this.add.sprite(0, 152, 'branchNestWin');
       var sbirdBranchWin = this.add.sprite(401, 260, 'birdBranchWin');       
       //Birds
        var sNestWin = this.add.sprite(40, 0, 'nestWin');
        var swinOwl = this.add.sprite(408, 62, 'winOwl');

        // var sPlayAgain = this.add.sprite(560, 700, 'PlayAgain');

      // Buttons

      var btPlayAgain = this.add.button(460, 700, 
        'PlayAgain', this.PlayAgainFun, this, 2 , 0, 1);

	     // Text

        var playStr = ' Your babies are nice and full!';
        var txPlay = this.add.text(212, 467, playStr);

        txPlay.fill = 'black';
        txPlay.fontSize = 32;
        txPlay.font = 'Rancho';


        var playStr = 'Great Job!';
        var txPlay = this.add.text(236, 522, playStr);

        txPlay.fill = 'black';
        txPlay.fontSize = 32;
        txPlay.font = 'Rancho';

         var scoreStr = '100/100';
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

  PlayAgainFun: function () {
    console.log('PlayAgainFun called');
    this.state.start('Play');

  }
};
