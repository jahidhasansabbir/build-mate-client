import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// import { useEffect } from "react";

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
    <section className="bg-[#161B22] border border-[#30363D] rounded-2xl p-6 text-[#F3F4F6]">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-8">
        Apartment Location & Directions
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Text Info */}
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-500">
            Prime Location in the Heart of the City
          </h3>
          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed mb-4">
            Our apartments are situated in the vibrant city center, with easy
            access to public transport, shopping centers, and recreational
            parks. Whether you’re commuting to work or exploring local sights,
            everything is within reach.
          </p>
          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            Getting here is simple: take the metro line 2 to Central Station,
            then a quick 5-minute walk south to BuildMate Residences. Plenty of
            parking and bike racks are also available on-site.
          </p>
        </div>

        {/* Map */}
        <div className="flex-1 rounded-xl overflow-hidden border border-[#2563EB] shadow-lg">
          <MapContainer
            center={position}
            zoom={15}
            scrollWheelZoom={false}
            className="w-full h-64 sm:h-80 md:h-[400px] rounded-xl"
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
