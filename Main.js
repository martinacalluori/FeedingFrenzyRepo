gameObj.Main = function (game) {};

gameObj.Main.prototype = {
  create: function () {
    console.log('State - Main');
//Clouds

        var sBackground = this.add.sprite(0, 0, 'background');

        var sCloud1Intro = this.add.sprite(380, 20, 'cloud1Intro');
        var sCloud2Intro = this.add.sprite(102, 184, 'cloud2Intro');
        var sCloud3Intro = this.add.sprite(304, 512, 'cloud3Intro');


        var sGrass = this.add.sprite(0, 890, 'grass');

        var sWormIntro = this.add.sprite(591, 911, 'wormIntro');


    // //Branches

       var sbranch5Intro = this.add.sprite(0, 553, 'branch5Intro');
       var sbirdBranchIntro = this.add.sprite(401, 200, 'birdBranchIntro');       
    //    //Birds
        var sNestIntro = this.add.sprite(50, 400, 'nestIntro');
        var sOwlIntro = this.add.sprite(408, 62, 'owlIntro');

        var sControls = this.add.sprite(401, 550, 'controls');

    // Buttons

      	var btPlayIntro = this.add.button(460, 700, 
        'playButtonIntro', this.actionOnClick, this, 2 , 0, 1);
    	 var titleStr = 'Feeding Frenzy!';
        var txTitle = this.add.text(35, 100, titleStr);

        txTitle.fill = '#B65CFB';
        txTitle.fontSize = 52;
        txTitle.font = 'Rancho';

        var instStr = 'Grab the worms and bring them to your nest  to feed your babies!';
        var txInst = this.add.text(30, 390, instStr);

        txInst.fill = 'black';
        txInst.fontSize = 32;
        txInst.font = 'Rancho';


        var instrStr = 'Feed them enough before time runs out! Avoid the Obstacles!';
        var txInstr = this.add.text(30, 430, instrStr);

        txInstr.fill = 'black';
        txInstr.fontSize = 32;
        txInstr.font = 'Rancho';
  },

  actionOnClick: function () {
  	console.log('actionOnClick called');
  	this.state.start('Play');
  }
};
