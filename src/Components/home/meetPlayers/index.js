import React, { Component } from 'react'
import Stripes from '../../../Resources/images/stripes.png'
import { Tag } from '../../ui/misc'
 class MeetPlayers extends Component{
    state = {

    }
    render(){
        return(
            <div className="home_meetplayers"
                style={{
                    background:`#ffffff url(${Stripes})`
                }}
            >
                <div className="container">
                    <div className="home_meetplayers_wrapper">
                        <div className="home_card_wrapper">
                            card
                        </div>
                        <div className="home_text_wrapper">
                            <div className="">
                                <Tag 
                                    bck="#0e1731"
                                    size="70px"
                                    color="#fff"
                                    add={{
                                        display:'inline-block',
                                        marginBottom:'20px',
                                    }}
                                >Meet</Tag>
                                </div>
                                <div className="">
                                <Tag 
                                    bck="#0e1731"
                                    size="70px"
                                    color="#fff"
                                    add={{
                                        display:'inline-block',
                                        marginBottom:'20px',
                                    }}
                                >The</Tag>
                                </div>
                                <div className="">
                                <Tag 
                                    bck="#0e1731"
                                    size="70px"
                                    color="#fff"
                                    add={{
                                        display:'inline-block',
                                        marginBottom:'20px',
                                    }}
                                >Player</Tag>
                                <div>
                                <Tag 
                                    bck="#fff"
                                    size="20px"
                                    color="#0e1731"
                                    link={true}
                                    linkto='/the_team'
                                    add={{
                                        display:'inline-block',
                                        marginBottom:'20px',
                                        border:'1px solid #0e1731'
                                    }}
                                >Meet them here</Tag>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MeetPlayers;