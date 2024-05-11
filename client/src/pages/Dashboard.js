import React from "react";
import SearchBox from "../components/SearchBox.js";
import Maps from "../components/Maps.js";
import AttractionList from "../components/AttractionList.js";
import Itinerary from "../components/Itinerary";

function Dashboard(){
    return(
        <div>
            <SearchBox />
            <Maps />
            <div>
                <AttractionList />
                <Itinerary />
            </div>
        </div>
    )
}

export default Dashboard();