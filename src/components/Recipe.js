import React from 'react'

const Recipe = (props) => (
    <div>
        Recipe {props.match.params.id}
    </div>
)

export default Recipe
