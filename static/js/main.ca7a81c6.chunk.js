(this["webpackJsonpfishing-forecast"]=this["webpackJsonpfishing-forecast"]||[]).push([[0],{13:function(e,t,a){e.exports=a(37)},19:function(e,t,a){},20:function(e,t,a){},21:function(e){e.exports=JSON.parse("{}")},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),s=a.n(o),i=(a(18),a(19),a(1)),l=a(2),c=a(4),h=a(3),m=a(5),u=(a(20),a(21),a(10)),d=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"map-container"},r.a.createElement(u.Map,{google:this.props.google,zoom:8,initialCenter:{lat:40.846,lng:-73.7875},style:{width:"100%",height:"400px"},onClick:function(t,a,n){return e.props.onClick(n)}},this.props.mapMarker&&r.a.createElement(u.Marker,{title:"The marker`s title will appear as a tooltip.",name:"SOMA",position:{lat:this.props.mapMarker.lat,lng:this.props.mapMarker.lng}})))}}]),t}(r.a.Component),p=Object(u.GoogleApiWrapper)({apiKey:"AIzaSyAoGvJeAlvfIulWTeZyePXSIYBG1ZUBC_0"})(d),f=a(9),v=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"formatDate",value:function(e){return new Date(Date.parse(e+"T00:00:00")).toLocaleDateString()}},{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:"nav nav-tabs nav-fill"},this.props.dates.map((function(t){return r.a.createElement("li",{key:t,className:"nav-item",onClick:function(){return e.props.onClick(t)}},r.a.createElement("a",{className:"nav-link "+(e.props.activeDate===t?"active":"")},e.formatDate(t)))})))}}]),t}(r.a.Component);function b(e){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},e.rowNumber),r.a.createElement("td",null,e.data.tide_type),r.a.createElement("td",null,e.data.tideTime),r.a.createElement("td",null,e.data.tideHeight_mt))}var E=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.tideData;return r.a.createElement("div",null,r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"}),r.a.createElement("th",{scope:"col"},"Type"),r.a.createElement("th",{scope:"col"},"Time"),r.a.createElement("th",{scope:"col"},"Height"))),r.a.createElement("tbody",null,e.map((function(e,t){return r.a.createElement(b,{data:e,rowNumber:t+1})})))))}}]),t}(r.a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"timeFormat",value:function(e){var t=parseInt(e)/100,a=t%12;return 0===a&&(a=12),a+":00 "+(t/12<1?"AM":"PM")}},{key:"render",value:function(){var e=this.props.tempData;return r.a.createElement("li",{className:"media hourly-weather"},r.a.createElement("img",{src:e.weatherIconUrl[0].value,className:"mr-3 align-self-center rounded",alt:"weather-icon"}),r.a.createElement("div",{class:"media-body"},r.a.createElement("h5",{className:"mt-0 mb-1"},this.timeFormat(e.time)," - ",r.a.createElement("small",null,e.weatherDesc[0].value)),r.a.createElement("p",{className:"hourly-weather-description"},e.tempF," \xb0F, winds ",e.winddir16Point," at ",e.windspeedMiles," MPH with gusts up to ",e.WindGustMiles," MPH"),r.a.createElement("p",{className:"hourly-weather-description"},"Waves around ",e.swellHeight_ft," feet, visiblity ",e.visibilityMiles," Miles")))}}]),t}(r.a.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.hourlyData;return r.a.createElement("div",null,r.a.createElement("div",{className:"hours-per-page"},r.a.createElement("div",{className:"form-inline float-right"},r.a.createElement("div",{className:"float-right form-group"},r.a.createElement("label",{className:"control-label"},"Hours per page:",r.a.createElement("select",{value:this.props.hoursPerPage,onChange:function(t){return e.props.handleHoursPerPageChange(t)},className:"form-control hours-selection"},r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"6"},"6"),r.a.createElement("option",{value:"8"},"8"),r.a.createElement("option",{value:"12"},"12")))))),r.a.createElement("ul",{className:"list-unstyled hourly-data"},t.map((function(e){return r.a.createElement(g,{key:e.time,tempData:e})}))),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-default float-left",onClick:function(t){return e.props.handleTimeChange(t)}},"Previous"),r.a.createElement("button",{className:"btn btn-default float-right",onClick:function(t){return e.props.handleTimeChange(t)}},"Next")))}}]),t}(r.a.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.astronomyData;return r.a.createElement("div",null,r.a.createElement("p",null,"sunrise: ",e.sunrise,", sunset: ",e.sunset,", water temp: ",this.props.waterTemp))}}]),t}(r.a.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 temperature-container"},r.a.createElement(y,{hourlyData:this.props.hourlyData,hoursPerPage:this.props.hoursPerPage,handleTimeChange:this.props.handleTimeChange,handleHoursPerPageChange:this.props.handleHoursPerPageChange})),r.a.createElement("div",{className:"col offset-md-1"},r.a.createElement("div",{className:"row border-fill"},r.a.createElement("div",{className:"col"},r.a.createElement(w,{astronomyData:this.props.astronomyData,waterTemp:this.props.hourlyData[0].waterTemp_F}))),r.a.createElement("div",{className:"row border-fill tide-data-container"},r.a.createElement("div",{className:"col"},r.a.createElement(E,{tideData:this.props.tideData}))))))}}]),t}(r.a.Component),j=function(e){function t(e){var a;Object(i.a)(this,t),a=Object(c.a)(this,Object(h.a)(t).call(this,e));var n=e.weatherData,r=n[0].date,o=(new Date).getHours(),s=Math.ceil((o+1)/4);return a.state={data:n,dataToShow:{hours:4,date:r,timeOfDay:s},tempUnit:"F",windUnit:"MPH",mapMarker:null},a.handleTimeChange=a.handleTimeChange.bind(Object(f.a)(a)),a.handleHoursPerPageChange=a.handleHoursPerPageChange.bind(Object(f.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleDateChange",value:function(e){this.setState((function(t){return{dataToShow:{hours:t.dataToShow.hours,date:e,timeOfDay:t.dataToShow.timeOfDay}}}))}},{key:"handleHoursPerPageChange",value:function(e){var t=parseInt(e.target.value);this.setState((function(e){return{dataToShow:{hours:t,date:e.dataToShow.date,timeOfDay:e.dataToShow.timeOfDay}}}))}},{key:"handleTimeChange",value:function(e){var t=this,a=this.state.data.findIndex((function(e){return e.date===t.state.dataToShow.date})),n=this.state.dataToShow.timeOfDay,r=24/this.state.dataToShow.hours;if("Previous"===e.target.innerText?1!==n?n--:1===n&&(n=r,a--):"Next"===e.target.innerText&&(n!==r?n++:n===r&&(n=1,a++)),a>=0&&a<this.state.data.length){var o=this.state.data[a].date;this.setState({dataToShow:{hours:this.state.dataToShow.hours,date:o,timeOfDay:n}})}}},{key:"render",value:function(){var e=this,t=this.state.data.map((function(e){return e.date})),a=this.state.data.find((function(t){return t.date===e.state.dataToShow.date})),n=this.state.dataToShow.hours,o=(this.state.dataToShow.timeOfDay-1)*n,s=a.hourly.slice(o,o+n);return r.a.createElement("div",null,r.a.createElement("div",{className:"row day-button-container"},r.a.createElement(v,{dates:t,activeDate:this.state.dataToShow.date,onClick:this.handleDateChange.bind(this)})),r.a.createElement("div",{className:"row"},r.a.createElement(O,{astronomyData:a.astronomy[0],tideData:a.tides[0].tide_data,hoursPerPage:n,hourlyData:s,handleTimeChange:this.handleTimeChange,handleHoursPerPageChange:this.handleHoursPerPageChange})))}}]),t}(r.a.Component),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={showMap:!0,mapMarker:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleMapClick",value:function(e){var t=e.latLng,a=t.lat(),n=t.lng();this.setState({mapMarker:{lat:a,lng:n}}),this.fetchWeatherData(a,n),this.fetchLocation(a,n)}},{key:"fetchLocation",value:function(e,t){var a=this;fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(e,",").concat(t,"&key=").concat("AIzaSyAoGvJeAlvfIulWTeZyePXSIYBG1ZUBC_0")).then((function(e){return e.json()})).then((function(e){a.setState({address:e.results[0].formatted_address})}),(function(e){a.setState({LocationIsLoaded:!1,error:e})}))}},{key:"fetchWeatherData",value:function(e,t){var a=this;fetch("https://api.worldweatheronline.com/premium/v1/marine.ashx?q=".concat(e,",").concat(t,"&key=95a5d8be77864b6e957144653193012&format=json&tp=1&tide=yes")).then((function(e){return e.json()})).then((function(e){var t=e.data.weather;a.setState({showMap:!1,dataIsLoaded:!0,data:t})}),(function(e){a.setState({isLoaded:!0,error:e})}))}},{key:"revealMap",value:function(){this.setState({showMap:!this.state.showMap})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",{className:"text-center"},"The Fishing Forecast"))),this.state.showMap&&r.a.createElement("div",{className:"row map-container"},r.a.createElement(p,{mapMarker:this.state.mapMarker,onClick:this.handleMapClick.bind(this)})),this.state.dataIsLoaded?r.a.createElement("div",{className:"location-container"},r.a.createElement("p",{class:"text-muted text-center"},"Showing results for: ",this.state.address,r.a.createElement("button",{className:"btn btn-sm btn-primary",onClick:this.revealMap.bind(this)},this.state.showMap?"Hide":"Show"," map"))):r.a.createElement("div",{className:"location-container"},r.a.createElement("p",{class:"text-muted text-center"},"Click a location on the map for the latest marine and weather information.")),this.state.data&&r.a.createElement("div",{className:"all-conditions-container"},r.a.createElement(j,{weatherData:this.state.data,key:this.state.mapMarker.lat+this.state.mapMarker.lng})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.ca7a81c6.chunk.js.map