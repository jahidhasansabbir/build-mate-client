import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default icon issue in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

export default function Location() {
  // Example coordinates for a location
  const position = [23.8103, 90.4125]; // Dhaka, Bangladesh — replace with your apartment location

  return (
    <section className="bg-white bg-opacity-30 backdrop-blur-sm border border-gray-50 rounded-3xl p-10 text-gray-900 shadow-lg max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-green-500 mb-10 text-center">
        Apartment Location & Directions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Text Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-green-400">
            Prime Location in the Heart of the City
          </h3>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-6">
            Our apartments are situated in the vibrant city center, with easy access to public transport, shopping centers, and recreational parks. Whether you’re commuting to work or exploring local sights, everything is within reach.
          </p>
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
            Getting here is simple: take the metro line 2 to Central Station, then a quick 5-minute walk south to BuildMate Residences. Plenty of parking and bike racks are also available on-site.
          </p>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden">
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            className="w-full h-72 sm:h-96 rounded-2xl"
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
