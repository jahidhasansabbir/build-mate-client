// components/AboutBuilding.jsx
export default function AboutTheBuilding() {
  return (
    <section className="text-[#F3F4F6]">
      <div className="mx-auto bg-[#161B22] bg-opacity-30 backdrop-blur-sm border border-[#30363D] rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-6 drop-shadow-[0_1px_2px_rgba(37,99,235,0.4)]">
          About the Building
        </h2>
        <p className="text-lg leading-relaxed text-[#9CA3AF]">
          Welcome to <span className="text-blue-600 font-semibold">BuildMate</span> — your modern housing solution built with precision, design, and lifestyle in mind. This building blends cutting-edge architecture with premium amenities for elevated urban living.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-[#9CA3AF]">
          Each unit is crafted with comfort, energy-efficiency, and smart features in mind. From natural lighting and spacious layouts to 24/7 security and rooftop gardens — every detail enhances your daily experience.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-[#9CA3AF]">
          Whether you're a professional or a family, <span className="text-blue-400 font-medium">BuildMate</span> offers the ideal blend of elegance and convenience — built for the life you deserve.
        </p>
      </div>
    </section>
  );
}
