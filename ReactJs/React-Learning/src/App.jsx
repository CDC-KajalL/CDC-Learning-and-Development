import "./App.css";
import React from "react";
import {Routes, Route} from 'react-router-dom'
import Introduction from "./Basics/_1_Introduction";
import UseEffect from "./Basics/_4_UseEffect_concept";
import Second from "./Basics/_2_Arrays";
import LifeCycleA from "./Basics/_7_Lifecycle_Methods";
import Assignment1 from "./Basics/_8_Assignment1";
import NoMatch from "./Basics/_8_NoMatch";
import CardDetails from "./Basics/_8_Card_Details";
import CustomCard from "./Basics/_8_Custom_Card";
import {cardData} from "./Basics/_9_Data"
import CardComponent from "./Basics/_9_UseParams";
import CardInfo from "./Basics/_9_CardInfo";
import {Shelf} from "./Basics/_8_Data"
function App() {
	return (
		<div>
			<Routes>
			<Route path = '/Introduction' element = {<Introduction/> }></Route>
			<Route path = '/UseEffect' element = {<UseEffect/> }></Route>
			<Route path = '/Second' element = {<Second/> }></Route>
			<Route path = '/LifeCycleA' element = {<LifeCycleA/>}></Route>
			<Route path = '/' element = {<Assignment1/>}></Route>
			<Route path="*" element={<NoMatch/>} />
			<Route path="/view" element=<CardDetails book = {Shelf}/> />
			<Route path="/view/:id" element=<CardDetails book={Shelf} /> />
			<Route path="/CustomCard" element={<CustomCard/>} />
			<Route path="/test" element=<CardComponent data={cardData} /> />
          <Route path="/info/:name" element=<CardInfo data={cardData} /> />
			</Routes>
		</div>
	);
}

export default App;
