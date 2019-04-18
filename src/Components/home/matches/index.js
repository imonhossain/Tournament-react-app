import React from 'react'
import { Tag } from '../../ui/misc'
import Blocks from './Blocks'
const MatchesHome = () => {
    return(
        <div className="home_matches_wrapper"> 
            <div className="container">
                <Tag
                    bck="#0e1731"
                    size="50px"
                    color="#fff"
                
                >Matches</Tag><br/>
                <Blocks/>
                <Tag
                    bck="#fff"
                    size="20px"
                    color="#0e1731"
                    link={true}
                    linkto="/the_team"

                >See more Link</Tag>
                <br/>
                Tag
            </div>
        </div>
    )
}
export default MatchesHome;