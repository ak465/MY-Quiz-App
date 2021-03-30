class Quiz {
    constructor(){}


    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
           gameState = data.val();
        })   
}

update(state){
    database.ref('/').update({
        gameState: state
    })
}

async start(){
    if(gameState === 0){
        contestant = new Countestant();
        contrestantCountRef = await database.ref('contestantCount').once("value");
        if(contrestantCountRef.exists()){
            contrestantCount = contrestantCountRef.val();
            contrestant.getCount();
        }
        question = new Question();
        question.display();
    }
}

       
        
    



play(){
    question.hide();
    background("Yellow");
    fill(0);
    textSize(30);
    text("Result of the Quiz", 340, 50);
    text("--------------------------", 320, 65);
    contestant.getPlayerInfo();
    if(allContestant !== undefined){
        debugger;
        var display_Answers = 230;
        fill("blue");
        textSize(20);
        text("Note: Contestant who answered correct are highlighted in green color!", 130,250);


        for(var plr in allcontestant){
            debugger;
            var correctAns = "2";
            if(correctAns === allContestants[plr].answer);
              fill("Green");
              else
                fill("Red");
              
               


                display_Answers+=30;
                textSize(20);
                text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answer);
            }
        }

    }
}


       