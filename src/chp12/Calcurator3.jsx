import React, {useState} from "react";
import TemperatureInput2 from "./TemperatureInput2";
import BoilingVerdict from "./BoilingVerdict";


function toCelsius(fahrenheit) {
    return(fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
    return (celsius * 9 )/ 5 + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    // const rounded = String.format("%.3f",output);
    return rounded.toString();
    // return rounded;
}

function Calcurator3(props) {
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('c');

    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    }

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    }
    const celsius = scale ==='f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale ==='c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return(
        <div>
            <TemperatureInput2
                scale="c" temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput2
                scale="f" temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict
                celsius ={parseFloat(celsius)}
            />
        </div>
    );
}


export default Calcurator3;