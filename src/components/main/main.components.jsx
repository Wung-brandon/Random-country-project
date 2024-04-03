import { countriesData } from "./countryImages";
import CountryImg from "./image.components";
import './main.components.css'
import { useState } from "react";

// console.log(countriesData[1].name)

function MainCard(props){
    const [selectedCountry, setSelectedCountry] = useState(countriesData[0])
    
    
    function changeCountry(){
        var countries = Math.floor(Math.random() * countriesData.length)
        var randomCountry = countriesData[countries]
        // console.log(randomCountry)
        setSelectedCountry(randomCountry)
        
    }

    function changeBackground(){
        props.toggle()
    }
    // const darkStyles = {
    //     color : "white",
    //     backgroundColor : "#141414",
    //     border: "1px solid white"
    // }
    return(
        <div className={`main-box ${props.isDark ? "dark" : ""}`}>
            <button className={`dark-but ${props.isDark ? "dark-styles" : ""}`} onClick={changeBackground}>{props.isDark ? "Dark Mode" : "Light Mode"}</button>
            <div className={`box ${props.isDark ? "box-styles" : ""}`}>
                
                {selectedCountry && (
                        <div className="flags-name" >
                            <CountryImg src={selectedCountry.flag}/>
                            <h4>{selectedCountry.name}</h4>
                        </div>
                )}

                {selectedCountry && (
                    <div className="info">
                        <p>Capital:  <span>{selectedCountry.capital}</span></p>
                        <p>Language:   <span>{selectedCountry.languages}</span></p>
                        <p>Population: <span>{selectedCountry.population}</span></p>
                        <p>Currency:   <span>{selectedCountry.currency}</span></p>
                    </div>
                )}


          
                
            </div>
            <button onClick={changeCountry} className={`country-but ${props.isDark ? "dark-styles" : ""}`}>Select Country</button>

        </div>
    )
}


export default MainCard