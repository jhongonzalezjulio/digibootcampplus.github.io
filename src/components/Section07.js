import React from "react";
import digilogo from '../imagenes/logodigi.png';
import '../styles/Section07.css'; 
import '../imagenes/mandala.jpg';


const Section07 = () => {

        return(
            <div className="cajitadelpie">
                <div className="part1">
                    <div>
                        <img 
                        className="lodigi"
                        src={digilogo}
                        />
                    </div>
                    <div className="digit">
                        <h3 className="gidi">DIGIBOOTCAMP</h3>
                        <label className="copy">Copyright All Reserved</label>
                    </div>
                </div>
                <div className="part2">
                    
                </div>
            </div>
        );

}


export default Section07;