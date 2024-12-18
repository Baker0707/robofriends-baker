import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => { 
    /*
    or this  way below
    const cardComponent = robots.map((user, i) => {
        return (
            <Card
                key={i}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
            />
        )
    })
    */
    console.log('CardList');
    return (
        <div>
            {
                // cardComponent
                //or this way below
                robots.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    )
                })
           }
        </div>
    );
}
export default CardList;
