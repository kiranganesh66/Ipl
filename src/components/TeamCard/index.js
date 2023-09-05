// Write your code here=
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  state = {teamCardList: [], isloding: true}

  componentDidMount() {
    this.teamCard()
  }

  teamCard = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updateDate = teams.map(eachOne => ({
      name: eachOne.name,
      id: eachOne.id,
      teamImageUrl: eachOne.team_image_url,
    }))
    this.setState({teamCardList: updateDate, isloding: false})
  }

  teamCardlist = eachOne => {
    const {name, id, teamImageUrl} = eachOne
    // console.log(eachOne)
    return (
      <Link key={id} to={`/team-matches/${id}`} className="blog-item-link">
        <li className="team-Card-CONT">
          <div className="g">
            <img className="team-Card-img" alt={name} src={teamImageUrl} />
          </div>

          <div className="n">
            <p className="team-Card-Head">{name}</p>
          </div>
        </li>
      </Link>
    )
  }

  render() {
    const {teamCardList, isloding} = this.state
    return (
      <>
        {isloding ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          teamCardList.map(eachOne => this.teamCardlist(eachOne))
        )}
      </>
    )
  }
}

export default TeamCard
