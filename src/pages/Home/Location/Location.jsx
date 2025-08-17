import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

export default function Location() {
  const position = [23.8103, 90.4125]; 
  return (
    <section className="bg-white bg-opacity-30 backdrop-blur-sm border border-gray-50 rounded-lg p-8 text-gray-900 shadow-lg">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-indigo-500 mb-8 text-center">
        Apartment Location 
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Text Info */}
        <div>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-6">
            Our apartments are situated in the vibrant city center, with easy access to public transport, shopping centers, and recreational parks. Whether you’re commuting to work or exploring local sights, everything is within reach.
          </p>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
            Getting here is simple: take the metro line 2 to Central Station, then a quick 5-minute walk south to BuildMate Residences. Plenty of parking and bike racks are also available on-site.
          </p>
        </div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden">
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            className="w-full h-72 sm:h-96 rounded-lg"
          >
            <TileLayer
              attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>BuildMate Apartments — Your New Home</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
