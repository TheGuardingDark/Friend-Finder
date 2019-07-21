
var friendData = require("../data/friendData");


module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });


  app.post("/api/friends", function(req, res) {
    
    var newFriend = req.body;
        
        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
        
        for(var k = 0; k < friendData.length; k++) {
            
            var dummyArray = [];
            var num1
            var i = 0;
            
            
            
            for(var j = 0; j < friendData[k].answers.length; j++) {
                dummyArray.push(
                    Math.abs(newFriend.answers[i] - friendData[k].answers[j]));
                    i++;
                };
                
                // console.log(dummyArray);
                
                num1 = dummyArray.reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                    0
                    );
                    
                    // console.log(num1)
                    
                    friendData[k].score = num1
                };
                
                
                
                
                var lowest = 40;
                for(var s=0; s < friendData.length; s++) {
                    var temp
                    temp = friendData[s].score;
                    if(temp < lowest) {
                        lowest = temp;
                    } 
                    // match(lowest);
                }
                
                
                console.log(lowest)
                
                for(var p = 0; p < friendData.length; p++) {
                    if(friendData[p].score === lowest) {
                        console.log (friendData[p].name);
                        var match = friendData[p];
                        friendData.push(newFriend);
                        res.json({matchName: match.name, matchImg: match.photo});
                    };
                }
                

  });

};
