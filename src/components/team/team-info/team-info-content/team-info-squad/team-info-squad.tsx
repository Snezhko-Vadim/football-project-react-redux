import React from 'react'
import TeamInfoSquadItem from './team-info-squad-item'
import {IPlayer} from '../../../../../types/types'

const TeamInfoSquad:React.FC<{squad:Array<IPlayer>}> = ({squad}) => {
    return(
        <div className = 'team__information-squad'>
            {
                squad.map((squadItem) => {
                    if(squadItem.role === 'PLAYER'){
                        return <TeamInfoSquadItem key = {squadItem.id} squadItem = {squadItem}/>
                    }
                })
            }
        </div>
    )
}

export default TeamInfoSquad