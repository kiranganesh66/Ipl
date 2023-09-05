import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {latestMatch: [], recentMatch: [], teamBanUrl: [], isLoding: true}

  componentDidMount() {
    this.getLatestMatchDetails()
  }

  getLatestMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updateList = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }

    const {latestMatchDetails, recentMatches, teamBannerUrl} = updateList

    const updatedLatMatD = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    this.setState({
      latestMatch: updatedLatMatD,
      recentMatch: recentMatches,
      teamBanUrl: teamBannerUrl,
      isLoding: false,
    })
  }

  render() {
    const {teamBanUrl, latestMatch, recentMatch, isLoding} = this.state

    return (
      <>
        {isLoding ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <li className="team-Match-Cont-bg">
            <img
              className="team-Match-image"
              alt={`latest match ${latestMatch.competingTeam}`}
              src={teamBanUrl}
            />
            <p className="bnr-Name">Latest Matches</p>
            <div className="latest-Match-CONT">
              <LatestMatch latestMatch={latestMatch} />
            </div>
            <ul className="recent-Match-COnt">
              {recentMatch.map(eachOne => (
                <MatchCard key={eachOne.id} eachOne={eachOne} />
              ))}
            </ul>
          </li>
        )}{' '}
      </>
    )
  }
}

export default TeamMatches
