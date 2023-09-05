// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachOne} = props
  const updatedData = {
    competingtTeam: eachOne.competing_team,
    competingTeamLogo: eachOne.competing_team_logo,
    date: eachOne.date,
    firstInnings: eachOne.first_innings,
    id: eachOne.id,
    manOfTheMatch: eachOne.man_of_the_match,
    matchStatus: eachOne.match_status,
    result: eachOne.result,
    secondInnings: eachOne.second_innings,
    umpires: eachOne.second_innings,
    venue: eachOne.second_innings,
  }
  const {
    competingtTeam,
    competingTeamLogo,

    matchStatus,
    result,
  } = updatedData

  return (
    <li className="bg-CONT">
      <img className="img_logo" alt={competingtTeam} src={competingTeamLogo} />
      <h1 className="heading">{competingtTeam}</h1>
      <p className="desc">{result}</p>
      <p className="status">{matchStatus}</p>
    </li>
  )
}
export default MatchCard
