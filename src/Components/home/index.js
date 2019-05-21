import React from 'react';
import Featured from './featured/index'
import MatchesHome from '../../Components/home/matches/index'
import MeetPlayers from './meetPlayers'
const Home = () => {
    return(
        <div className="bg-secondary">
        <Featured></Featured>
        <MatchesHome></MatchesHome>
        <MeetPlayers></MeetPlayers>
        </div>
    )
}
export default Home;