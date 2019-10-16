import React from 'react';

const Buildings = [
    {
        name: "Mines",
        desc:"Produces 10G / sec.",
        amount: 0,
        cost: [
            {type: 0, val: 1},
            {type: 1, val: 50},
            {type: 3, val: 10}
        ],
        upkeep:[{}],
        production: {type: -1 , val: 10}
    },
    {
        name: "Farms",
        desc: "Increases population growth by 1 person / sec.",
        amount: 0,
        cost: [
            {type: 0, val: 1},
            {type: 1, val: 100}
        ],
        upkeep:[{}],
        production: {type: -2 , val: 1}
    },
    {
        name: "Lumberyards",
        desc: "Produces 10 wood / sec.",
        amount: 0,
        cost: [ 
            {type: 0, val: 1},
            {type: 1, val: 100},
            {type: 3, val: 10} 
        ],
        upkeep:[{}],
        production: {type: -3 , val: 10}
    },
    {
        name: "Forges",
        desc: "Produces 10 metal / sec.",
        amount: 0,
        cost:[ 
            {type: 0 , val: 1},
            {type: 1 , val: 100},
            {type: 3 , val: 50} 
        ],
        upkeep:[
            {}
        ],
        production:{type: -4 , amount: 10}
    },
    {
        name: "Recruiters",
        desc: "Turns 1 person into 1 recruit.",
        amount: 0,
        cost:[
            {type: 0 , val: 1},
            {type: 1 , val: 100},
            {type: 3 , val: 50}
        ],
        upkeep:[
            {type: -2 , val: 1}
        ],
        production:{type: 0 , val: 1}
    },
    {
        name: "Barracks",
        desc: "Trains 1 recruit into 1 soldier",
        amount: 0,
        cost:[ 
            {type: 0 , val: 1},
            {type: 1 , val: 250},
            {type: 3 , val: 100} 
        ],
        upkeep:[ 
            {type: 0 , val: 1} 
        ],
        production: {type: 1 , val: 1}
    },
    {
        name:"Ranges",
        desc:"Trains 1 recruit into 1 archer",
        amount: 0,
        cost:[ 
            {type: 0 , val: 1},
            {type: 1 , val: 350},
            {type: 3 , val: 120} 
        ],
        upkeep:[
            {type: 0 , val: 1} 
        ],
        production: {type: 8 , val: 1}
    },
    {
        name: "Stables",
        desc: "Trains 1 recruit into 1 horseman",
        amount: 0,
        cost:[ 
            {type: 0 , val: 1},
            {type: 1 , val: 1000},
            {type: 3 , val: 250} 
        ],
        upkeep:[ 
            {type: 0 , val: 1} 
        ],
        production: {type: 0 , val: 1}
    },
    {
        name: "Workshops",
        desc: "Trains 5 recruits into 1 catapult",
        amount: 0,
        cost:[
             {type: 0 , val: 1},
             {type: 1 , val: 2500},
             {type: 3 , val: 500},
             {type: 4 , val: 250} 
        ],
        upkeep:[
            {type: 0 , val: 5}
        ],
        production:{type: 22 , val: 1}
    }
];

export default Buildings;