class Countestant {
    constructor(){
        this.index = null;
        this.answer = 0;
        this.name = null;
    }

    getCount(){
        var contestantCountRef = database.ref('contestantCount');
        contestantCountRef.on("value",(data)=>{
          contestantCount = data.val();
        })
    }

    updateCount(count){
        database.ref('/').update({
          ontestantCount: count
        })
    }

    update(){
        var countestantIndex = "constestants/contestant"+ this.index;
        database.ref(countestantIndex).set({
          name:this.name,
          answer:this.answer
        })
    }


    static getPlayerInfo(){
        var contestantInfoRef = database.ref('contestants');
        contestantInfoRef.on("value",(data)=>{
          allContestants = data.val();
        })
    }
}