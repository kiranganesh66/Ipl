import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    // matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatch
  return (
    <div className="latest-Match-COnt">
      <div>
        <h1 className="TeamName">{competingTeam}</h1>
        <p className="Date">{date}</p>
        <p className="NormalDes">{venue}</p>
        <p className="NormalDes">{result}</p>
      </div>
      <div>
        <img
          className="logo_Size"
          alt={competingTeam}
          src={competingTeamLogo}
        />
      </div>
      <div className="Sub-Info_Cont">
        <h1 className="sub-head">First Inning</h1>
        <p className="NormalDes">{firstInnings}</p>
        <h1 className="sub-head">Second Inning</h1>
        <p className="NormalDes">{secondInnings}</p>
        <h1 className="sub-head">Man Of The Match</h1>
        <p className="NormalDes">{manOfTheMatch}</p>
        <h1 className="sub-head">Umpires</h1>
        <p className="NormalDes">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
