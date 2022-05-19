import React, { useState } from "react";
import ViewSelector from "./ViewSelector";

function MainView() {
  const [currentView, setCurrentView] = useState("Home")

  return(

    <div>
      <div className="navigation">
        <button className="navButton" onClick={()=>{setCurrentView("Home")}}>Home</button>
        <button className="navButton" onClick={()=>{setCurrentView("About")}}>About</button>
      </div>
        <ViewSelector currentView={currentView}/>
    </div>
  )
}

export default MainView;