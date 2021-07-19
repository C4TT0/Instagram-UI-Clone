import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dmp from './Dmp.js';

export default function Header(){
	return(
		<>
			<Router>
				<div className="headerComponent">
					<i className="far fa-camera"></i>
					<div className="logo" style={{    backgroundSize: "92px" , marginLeft: "30px"}}></div>
					<Link to="/inbox"><i className="far fa-paper-plane"></i></Link>
					<Switch>
						<Route path="/inbox">
							<Dmp/>
						</Route>
					</Switch>
				</div>
			</Router>
		</>
	)
}