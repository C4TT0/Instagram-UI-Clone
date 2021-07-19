import React from 'react';

export default function Stories(props){
	return(
		<>
		<div className="story">
                <div style={
                  {width:"70px",
                  margin: "8px",
                  borderRadius: "50%",
                  height: "70px",
                  position: "relative",
                  border: "3px solid purple",
                  backgroundRepeat: "no-repeat",
                  background: `url(${props.image})`}
                }>
                </div>
                <p className="name">{props.name}</p>
        </div>
		</>
	)
}