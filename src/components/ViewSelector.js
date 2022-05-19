import HomeView from "./HomeView";
import AboutView from "./AboutView";

function ViewSelector(props) {
  if(props.currentView === "Home"){
    return <HomeView />
  } else {
    return <AboutView />
  }
}

export default ViewSelector;


