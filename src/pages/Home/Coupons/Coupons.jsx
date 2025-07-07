export default function Coupons() {
  const coupons = [
    { code: "BUILD20", desc: "20% off on your first apartment rent", expiry: "Expires: 31 Jul 2025" },
    { code: "FURNISH10", desc: "10% discount on furniture packages", expiry: "Expires: 15 Aug 2025" },
    { code: "REFERRAL5", desc: "Refer a friend & get $5 credit", expiry: "No expiry" },
  ];

  return (
    <section className="bg-[#161B22] border border-[#30363D] rounded-3xl p-6 sm:p-10 md:p-14  text-[#F3F4F6] shadow-lg">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600 mb-8  text-center">
        Exclusive Member Coupons
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {coupons.map(({ code, desc, expiry }) => (
          <div
            key={code}
            className="bg-[#0D1117] border border-[#2563EB] rounded-xl p-6 flex flex-col justify-between hover:scale-[1.03] transition-transform duration-300 "
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-500 mb-2 tracking-wide">
                {code}
              </h3>
              <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">{desc}</p>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-blue-400 font-medium tracking-wide">
              {expiry}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
