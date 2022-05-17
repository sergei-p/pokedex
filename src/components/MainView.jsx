import React, { useState } from "react";


function Main() {
  const [currentView, setCurrentView] = useState("Home")

  function TheView() {
    if(currentView === "Home"){
      return <HomeView />
    } else {
      return <AboutView />
    }
  }


  return(
    <div>
      <div className="navigation">
        <button onClick={setCurrentView("Home")}>Home</button>
        <button onClick={setCurrentView("About")}>About</button>
      </div>
      {TheView}
    </div>



  )
}

export default Main;