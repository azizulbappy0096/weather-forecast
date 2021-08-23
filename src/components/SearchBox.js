import React, { useEffect, useRef } from 'react'

function SearchBox({googleMapLoaded}) {
    const searchInput = useRef(null)
    useEffect(() => {
        function initAutocomplete() {
            
            // Create the search box and link it to the UI element.
            const input = document.getElementById("pac-input");
            const searchBox = new window.google.maps.places.SearchBox(searchInput.current);
          
            // Bias the SearchBox results towards current map's viewport.
           
            let markers = [];
            // Listen for the event fired when the user selects a prediction and retrieve
            // more details for that place.
            searchBox.addListener("places_changed", (e) => {
              const places = searchBox.getPlaces();
          console.log("places",places)
          console.log(e)
              if (places.length === 0) {
                return;
              }
              // Clear out the old markers.
              markers.forEach((marker) => {
                marker.setMap(null);
              });
              markers = [];
              // For each place, get the icon, name and location.
              const bounds = new window.google.maps.LatLngBounds();
              places.forEach((place) => {
                if (!place.geometry || !place.geometry.location) {
                  console.log("Returned place contains no geometry");
                  return;
                }
                const icon = {
                  url: place.icon,
                  size: new window.google.maps.Size(71, 71),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(17, 34),
                  scaledSize: new window.google.maps.Size(25, 25),
                };
                // Create a marker for each place.
                markers.push(
                  new window.google.maps.Marker({
                    icon,
                    title: place.name,
                    position: place.geometry.location,
                  })
                );
          
                if (place.geometry.viewport) {
                  // Only geocodes have viewport.
                  bounds.union(place.geometry.viewport);
                } else {
                  bounds.extend(place.geometry.location);
                }
              });
            
            });
          }

          if(googleMapLoaded) {
            initAutocomplete()
          }
          
    }, [])

    return (
        <div className="md:flex gap-4 items-center my-6">
            <div className="">
              <label htmlFor="location" className="w-full text-xl font-medium">
                {" "}
                Your Location{" "}
              </label>
            </div>

            <div className="flex-1">
              <input
              ref={searchInput}
                id="location"
                className="w-full text-lg px-2 py-1 appearance-none border-2 rounded-lg focus:outline-none"
                type="text"
                name="location"
              />
            </div>
          </div>
    )
}

export default SearchBox
