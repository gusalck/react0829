import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";

function Calcurator2(props) {
    return(
        <div>
            <TemperatureInput scale="c"/>
            <TemperatureInput scale="f"/>
        </div>
    );
}

export default Calcurator2;