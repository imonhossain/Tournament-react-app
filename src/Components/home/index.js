import React from 'react';
import Featured from './featured/index'
import MatchesHome from '../../Components/home/matches/index'
const Home = () => {
    return(
        <div className="bg-secondary">
        <Featured></Featured>
        <MatchesHome></MatchesHome>
        </div>
    )
}
export default Home;