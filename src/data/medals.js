// topFiveCountries is a JSON string, 
// it is the raw data strucutre for Bar Chart.
const topFiveCountries = [
    {
        "Rank": "1",
        "Team": "United States",
        "Gold": "39",
        "Silver": "41",
        "Bronze": "33",
        "Total": "113",
        "Rank by Total": "1"
    },
    {
        "Rank": "2",
        "Team": "China",
        "Gold": "38",
        "Silver": "32",
        "Bronze": "18",
        "Total": "88",
        "Rank by Total": "2"
    },
    {
        "Rank": "3",
        "Team": "Japan",
        "Gold": "27",
        "Silver": "14",
        "Bronze": "17",
        "Total": "58",
        "Rank by Total": "5"
    },
    {
        "Rank": "4",
        "Team": "Great Britain",
        "Gold": "22",
        "Silver": "21",
        "Bronze": "22",
        "Total": "65",
        "Rank by Total": "4"
    },
    {
        "Rank": "5",
        "Team": "ROC",
        "Gold": "20",
        "Silver": "28",
        "Bronze": "23",
        "Total": "71",
        "Rank by Total": "3"
    }]
// Observe data structure
console.log(topFiveCountries)    
console.log(topFiveCountries.Team)

// Restructure for better usage: using getData function
var getData = function() {
  var teamData = [];
  var goldData = [];
  var silverData = [];
  var bronzeData = [];

  for (let i =0; i < topFiveCountries.length; i++) {
    teamData.push(topFiveCountries[i].Team);
    goldData.push(topFiveCountries[i].Gold);
    silverData.push(topFiveCountries[i].Silver);
    bronzeData.push(topFiveCountries[i].Bronze);
  }
  return {teamData, goldData, silverData, bronzeData}
}
// Call getData function
const data = getData()
// Store function outputs into new variables for readily use
const teams = data.teamData
const golds = data.goldData
const silvers = data.silverData
const bronzes = data.bronzeData

// Don't forget to export
export {topFiveCountries, teams, golds, silvers, bronzes}

// let's observe the data structures again
console.log(topFiveCountries)
console.log(teams)