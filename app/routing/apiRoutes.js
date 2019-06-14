const friendData = require("../data/friends")

module.exports = function(app){
// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
app.get("/api/friends", function (req, res) {
    res.json(friendData);
});

function compareScores(scoreArr1, scoreArr2) {
    let diffSum = 0
    for (i = 0; i < scoreArr1.length; i++) {
        let diff = scoreArr1[i] - scorArr2[i];
        let absValDiff = Math.abs(diff)
        diffSum += absValDiff
        console.log(diffSum)
    }
}

// A POST routes /api/friends. 
app.post("/api/friends", function (req, res) {
// This will be used to handle incoming survey results.
console.log("Post Request received")
// res.json(true)
// console.log(req.body)

let newUserScores = req.body.scores
// console.log(userScores)

//-----------------------------------------------------------------------------------------//
// This route will also be used to handle the compatibility logic.
//-----------------------------------------------------------------------------------------//
for (let i = 0; i < friendData.length; i++){
    let scores = friendData[i].scores
    console.log(scores) 
}
// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. 
// Add up the differences to calculate the totalDifference.
// Example:
    // User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    // User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5
// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.
friendData.push(req.body); 
}); 
}