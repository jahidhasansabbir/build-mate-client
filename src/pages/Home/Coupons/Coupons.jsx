export default function Coupons() {
  const coupons = [
    { code: "BUILD20", desc: "20% off on your first apartment rent", expiry: "Expires: 31 Jul 2025" },
    { code: "FURNISH10", desc: "10% discount on furniture packages", expiry: "Expires: 15 Aug 2025" },
    { code: "REFERRAL5", desc: "Refer a friend & get $5 credit", expiry: "No expiry" },
  ];

  return (
    <section className="bg-white bg-opacity-70 backdrop-blur-sm border border-gray-200 rounded-3xl p-6 sm:p-10 md:p-14 text-gray-900 shadow-lg">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-500 mb-8 text-center">
        Exclusive Member Coupons
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {coupons.map(({ code, desc, expiry }) => (
          <div
            key={code}
            className="bg-green-50 bg-opacity-50 backdrop-blur-sm border border-green-200 rounded-xl p-6 flex flex-col justify-between transition-transform duration-300"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-green-500 mb-2 tracking-wide">
                {code}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{desc}</p>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-green-700 font-medium tracking-wide">
              {expiry}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
