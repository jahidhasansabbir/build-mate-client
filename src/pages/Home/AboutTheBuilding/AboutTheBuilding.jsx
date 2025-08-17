export default function AboutTheBuilding() {
  return (
    <section className="text-gray-900">
      <div className="mx-auto bg-white backdrop-blur-sm border border-gray-200 rounded-lg p-8 shadow-lg">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-extrabold text-indigo-500 mb-6">
          About the Building
        </h2>

        {/* Paragraphs */}
        <p className="text-base sm:text-lg leading-relaxed text-gray-600 mb-4">
          Welcome to <span className="text-indigo-500 font-semibold">BuildMate</span> — your modern housing solution built with precision, design, and lifestyle in mind. This building blends cutting-edge architecture with premium amenities for elevated urban living.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-gray-600 mb-4">
          Each unit is crafted with comfort, energy-efficiency, and smart features in mind. From natural lighting and spacious layouts to 24/7 security and rooftop gardens — every detail enhances your daily experience.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-gray-600">
          Whether you're a professional or a family, <span className="text-indigo-400 font-medium">BuildMate</span> offers the ideal blend of elegance and convenience — built for the life you deserve.
        </p>
      </div>
    </section>
  );
}
