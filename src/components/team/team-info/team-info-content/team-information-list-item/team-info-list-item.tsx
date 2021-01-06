import React from 'react'

const TeamInfoListItem:React.FC<{nameOfCompetition:string}> = ({nameOfCompetition}) => {
    return(
        <li className = 'team__information-list-item'>{nameOfCompetition}</li>
    )
}

export default TeamInfoListItem