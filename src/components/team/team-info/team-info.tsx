import React from 'react'
import TeamInfoContent from './team-info-content'
import {ITeam} from '../../../types/types'

const TeamInfo:React.FC<{team:ITeam}> = ({team}) => {
    return(
        <div className = 'team__information'>
            <h3 className = 'team__information-title'>Information</h3>
            <TeamInfoContent team = {team}/>
        </div>
    )
}

export default TeamInfo