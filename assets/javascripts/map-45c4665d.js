var map=L.mapbox.map("map").setView([40.740104,-73.99262],13),stamenLayer=L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png",{attribution:'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'}).addTo(map),geoJson={type:"FeatureCollection",features:[{type:"Feature",properties:{title:"Conference - Altman Building",description:"135 West 18th Street","marker-size":"large","marker-color":"ba262b","marker-symbol":"star"},geometry:{type:"Point",coordinates:[-73.996154,40.740539]}},{type:"Feature",properties:{title:"Pre Party - Stollway Event Space",description:"250 West 39th Street","marker-size":"large","marker-color":"ba262b","marker-symbol":"bar"},geometry:{type:"Point",coordinates:[-73.9901948,40.7545989]}},{type:"Feature",properties:{title:"After Party - Boat Cruise!",description:"Pier 40 at 353 West Street","marker-size":"large","marker-color":"ba262b","marker-symbol":"music"},geometry:{type:"Point",coordinates:[-74.0113,40.730438]}}]},markerList=document.getElementById("marker-list");map.markerLayer.setGeoJSON(geoJson),map.markerLayer.eachLayer(function(e){var t=markerList.appendChild(document.createElement("li")),r=document.createElement("p");t.innerHTML=e.toGeoJSON().properties.title,r.innerHTML=e.toGeoJSON().properties.description,t.appendChild(r),t.onclick=function(){map.setView(e.getLatLng(),14),e.openPopup()}});