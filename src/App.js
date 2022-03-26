import GMapSummary from "./components/map/GMapSummary"

function App() {
  return (
    <div className="App">
      <GMapSummary
        location={{lat: 41, lng: 28.97}}
        defaultCenter={{lat: 41, lng: 28.97}}
        center={{lat: 41, lng: 28.97}}
        mapDraggable={false}
        disableZoom={true}
        disableFullScreen={true}
        zoom={12}
        style={{
          height: '400px',
          width: '100%'
        }}
      />
    </div>
  );
}

export default App;
