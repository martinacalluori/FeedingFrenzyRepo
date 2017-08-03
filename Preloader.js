gameObj.Preloader = function (game) {};

gameObj.Preloader.prototype = {
  preload: function () {
    console.log('State - Preloader');
    // this.stage.backgroundColor = '#333';

    // Progress bar animation code
    

 
    // Load ALL GAME images into memory
    
    	// Start Global Graphics
    		this.load.image('grass', 'images/grass.png' );
	        this.load.image('rightTree', 'images/rightTree.png' );
	        this.load.image('leftTree', 'images/leftTree.png' );
	        this.load.image('background', 'images/background.png');
    	// End Global Graphics

   		// Start Graphics Intro
	        this.load.image('owlIntro', 'images/bird-icon.png');
	        this.load.image('birdIntro', 'images/bird-icon-small.png');    
	        

	        this.load.image('branch5Intro', 'images/branch5.png' );

	        this.load.image('birdBranchIntro', 'images/birdBranch.png' );
	          

	        this.load.image('nestIntro', 'images/nest.png' );
	        this.load.image('wormIntro', 'images/worm.png' );

	        this.load.image('cloud1Intro', 'images/cloud.png' );
	        this.load.image('cloud2Intro', 'images/cloud.png' );
	        this.load.image('cloud3Intro', 'images/cloud.png' );

	        this.load.image('controls', 'images/controls.png' );
	    // End Intro Graphics

	    // Start Win Graphics
	    	this.load.image('winOwl', 'images/winOwl.png');
	    	this.load.image('nestWin', 'images/nest.png' );
	    	this.load.image('branchNestWin', 'images/branch5.png' );
    		this.load.image('birdBranchWin', 'images/birdBranch.png' );

    		this.load.image('cloud1Win', 'images/cloud.png' );
	        this.load.image('cloud2Win', 'images/cloud.png' );
	        this.load.image('cloud3Win', 'images/cloud.png' );

	    // End Win Graphics

	    // Start Lose Graphics
			this.load.image('sadowl', 'images/sadowl.png');
    		this.load.image('bird', 'images/bird-icon-small.png');
    		this.load.image('branchNestLose', 'images/branch5.png' );
    		this.load.image('birdBranchLose', 'images/birdBranch.png' );
    		this.load.image('crying', 'images/crying.png' );

    		this.load.spritesheet('TryAgain', 'images/TryAgain.png' , 172, 70);

	    // End Lose Graphics

	    // Start Play Graphics
	    	this.load.image('birdPlay', 'images/bird-icon-small.png');
	    	this.load.image('nestPlay', 'images/nest.png' );
    		this.load.image('wormPlay', 'images/worm.png' ); 

    		this.load.image('branch1', 'images/branch.png' );
		    this.load.image('bottombranch', 'images/bottombranch.png' );
		    this.load.image('branch2', 'images/branch2.png' );
		    this.load.image('branch3', 'images/branch3.png' );
		    this.load.image('branch4', 'images/branch4.png' );
		    this.load.image('branch5', 'images/branch5.png' );   
		    this.load.image('cloud1Play', 'images/cloud.png' );
	        this.load.image('cloud2Play', 'images/cloud.png' );
	        this.load.image('cloud3Play', 'images/cloud.png' );

		    this.load.image('cloud1Lose', 'images/cloud.png' );
	        this.load.image('cloud2Lose', 'images/cloud.png' );
	        this.load.image('cloud3Lose', 'images/cloud.png' );

	    // End Play Graphics

	// Load buttons

		// Load Buttons Intro
	    	this.load.spritesheet('playButtonIntro', 'images/play.png' , 172, 70);

	    // End Button Intro

	    // Start Win Buttons
	    	this.load.spritesheet('PlayAgain', 'images/PlayAgain.png' , 172, 70);
	    	
	    // End Win Buttons

	    // Start Lose Buttons
	    	this.load.spritesheet('TryAgain', 'images/TryAgain.png' , 172, 70);
	    	
	    // End Lose Buttons 

	    // Load temp buttons
		    this.load.spritesheet('winButton', 'images/winButton.png', 100, 70);
		    this.load.spritesheet('loseButton', 'images/loseButton.png', 100, 70);

	//End Load Buttons
      
  },
  create: function () {
    this.state.start('Main');
  }
};
