import { useEffect, useState } from "react";
import "./App.css";

// components
import Main from "./components/Main/Main";

function App() {
  const [googleMapLoaded, setGoogleMapLoaded] = useState(false);
const [currentPosition, setCurrentPosition] = useState(null)
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBawL8VbstJDdU5397SUX7pEt9DslAwWgQ&libraries=places";
    script.async = true;
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      setGoogleMapLoaded(true);
    });

    return () => {
      document.body.removeChild(script)
    };
  }, []);

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position, error) => {
        if(error) {
          setCurrentPosition(null)
        }else {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
        }
      })
    }
  }, [])

  return (
    <div className="bg-gray-100 ">
      <Main googleMapLoaded={googleMapLoaded} currentPosition={currentPosition} />
    </div>
  );
}

export default App;
