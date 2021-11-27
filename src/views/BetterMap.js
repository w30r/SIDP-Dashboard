import React from "react";

// react-bootstrap components
import { Badge, Button, Navbar, Nav, Container } from "react-bootstrap";
import { useGetData } from "modules/queries";

// var LocationsForMap = [
//   [4.387223777842426, 100.96426093739933, "Meor", "#0001"],
//   [51.507351, -0.127758, "Syamil"],
//   [4.610976, 101.094695, "Name"],
//   [4.3819314200114405, 100.96962572867805, "Chancellor Hall"],
// ];
function twodeconly(x) {
  return x.toFixed(3);
}

function BetterMap() {
  const { data: doto } = useGetData();
  let LocationsForMap = [];
  LocationsForMap = doto?.map(function (x) {
    return [
      `${twodeconly(x.currentcoords.lat)}`,
      twodeconly(x.currentcoords.lng),
      x.name,
      x.id,
    ];
  });

  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "4.385165126";
    let lng = "100.974496102";
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 10,
      center: myLatlng,
      scrollwheel: true,
      zoomControl: true,
    };

    map = new google.maps.Map(map, mapOptions);

    var infowindow = new google.maps.InfoWindow();

    var i;

    for (i = 0; i < LocationsForMap.length; i++) {
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(
          LocationsForMap[i][0],
          LocationsForMap[i][1]
        ),
        map: map,
      });

      google.maps.event.addListener(
        marker,
        "click",
        (function (marker, i) {
          return function () {
            infowindow.setContent(
              LocationsForMap[i][2] +
                " #" +
                LocationsForMap[i][3] +
                " | " +
                LocationsForMap[i][0] +
                ", " +
                LocationsForMap[i][1]
            );
            infowindow.open(map, marker);
          };
        })(marker, i)
      );
    }
  }, []);
  return (
    <>
      <div className="map-container">
        <div id="map" ref={mapRef}></div>
      </div>
    </>
  );
}

export default BetterMap;
