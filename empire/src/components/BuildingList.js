import React, {useState} from 'react';
import Building from './Building';
import buildingData from '../data/buildingData';

function BuildingList(){
    const [buildings,setBuildings] = useState(buildingData);
    console.log(buildingData);
    return(
        <div>
            {buildings.map((building,index)=><Building key={index} building={building}/>)}
        </div>
    );
}

export default BuildingList;