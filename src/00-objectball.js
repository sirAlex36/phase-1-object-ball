function gameObject() {
  const home = {Teamname: "Brooklyn Nets", colors: ["Black", "White"], players: {"Alan Anderson": {number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1}, "Reggie Evans": {number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7}, "Brook Lopez": {number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15}, "Mason Plumlee": {number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5}, "Jason Terry": {number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1}}};
  const away = {Teamname: "Charlotte Hornets", colors: ["Turquoise", "Purple"], players: {"Jeff Adrien": {number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2}, "Bismak Biyombo": {number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10}, "DeSagna Diop": {number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5}, "Ben Gordon": {number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0}, "Brendan Haywood": {number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12}}};
  return {home, away}; // Return an object containing both home and away team data
}
function numPointsScored(playerName) {
  const game = gameObject(); // Access the game object
 const players = {...game.home.players, ...game.away.players}; // Combine home and away players into one object
 return players[playerName] ? players[playerName].points : "Player not found"; // Return points or a not found message
}
function shoeSize(playerName) {
  const game = gameObject();  // Access the game object
  const players = {...game.home.players, ...game.away.players};  // Combine home and away players into one object
  return players[playerName] ? players[playerName].shoe : "Player not found"; // Return shoe size or a not found message  
}
function teamColors(Teamname) {
  const game = gameObject();   // Access the game object
  if (game.home.Teamname === Teamname) {  // Check if the team name matches the home team
    return game.home.colors;
  } else if (game.away.Teamname === Teamname) { // Check if the team name matches the away team
    return game.away.colors;
  } else {
    return "Team not found";
  }
}
function teamNames() {
  const game = gameObject(); // Access the game object
  return [game.home.Teamname, game.away.Teamname];
}
function playerNumbers(name){
  const game = gameObject();  // Access the game object
 const number={...game.home.players, ...game.away.players};
 return number[name] ? number[name].number : "Player not found";
}
function playerStats(name){
  const game = gameObject(); // Access the game object
  const stats={...game.home.players, ...game.away.players};
  return stats[name] ? stats[name] : "Player not found";
}
function bigShoeRebounds(){
  const game = gameObject(); // Access the game object
  const players={...game.home.players, ...game.away.players};
 const largestShoePlayer = Object.keys(players).reduce((largest, player) => {
    return players[player].shoe > players[largest].shoe ? player : largest;
  }, Object.keys(players)[0]); // Find the player with the largest shoe size
  return players[largestShoePlayer].rebounds;
}
function mostPointsScored(){
  const game = gameObject(); // Access the game object
  const players={...game.home.players, ...game.away.players};
 const highestScoringPlayer = Object.keys(players).reduce((highest, player) => {
    return players[player].points > players[highest].points ? player : highest;
  }, Object.keys(players)[0]); // Find the player with the most points
  return highestScoringPlayer;
}
function winningTeam(){
  const game = gameObject(); // Access the game object
  const homePoints = [Object.values(game.home.players).reduce((sum, player) => sum + player.points, 0)]; // Calculate total points for home team
  const awayPoints = [Object.values(game.away.players).reduce((sum, player) => sum + player.points, 0)]; // Calculate total points for away team
  if (homePoints > awayPoints) {
    return game.home.Teamname;
  } else if (awayPoints > homePoints) {
    return game.away.Teamname;
  } else {
    return "Draw!";
  }
}
function playerWithLongestName(){
  const game = gameObject();
  const players={...game.home.players, ...game.home.players};
  return Object.keys(players).reduce((longest, player) => {
    return player.length > longest.length ? player : longest;
  }, ""); // Find the player with the longest name
}
function doesLongestNameStealAton(){
  const game = gameObject();
  const players={...game.home.players, ...game.away.players};
  const longestNamePlayer = playerWithLongestName(); // Get the player with the longest name
  const maxSteals = Math.max(...Object.values(players).map(player => player.steals)); // Find the maximum steals
  return players[longestNamePlayer].steals === maxSteals; // Check if the longest name player has the most steals
}