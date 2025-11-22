import Link from "next/link";

const features = [
  {
    title: "ระบบสมาชิก",
    description: "จัดการทะเบียนสมาชิก ข้อมูลส่วนบุคคล ข้อมูลการเกษตร และผู้รับผลประโยชน์",
    href: "/members",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "ทุนเรือนหุ้น",
    description: "บริหารจัดการการซื้อหุ้น ส่งค่าหุ้นรายเดือน และคำนวณเงินปันผล",
    href: "/shares",
    icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    title: "เงินฝาก",
    description: "รับฝาก-ถอนเงิน ออมทรัพย์ ออมทรัพย์พิเศษ และเงินฝากประจำ",
    href: "/deposits",
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "สินเชื่อ",
    description: "อนุมัติสินเชื่อ วิเคราะห์ 5C's จัดการหลักประกัน และติดตามการชำระหนี้",
    href: "/loans",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "from-amber-500 to-amber-600",
  },
  {
    title: "ธุรกิจสินค้า",
    description: "จัดการคลังสินค้า ปุ๋ย ยา เมล็ดพันธุ์ และบันทึกการขาย",
    href: "/products",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    color: "from-rose-500 to-rose-600",
  },
  {
    title: "รวบรวมผลผลิต",
    description: "รับซื้อผลผลิตจากสมาชิก ชั่งน้ำหนัก ตรวจคุณภาพ และจ่ายเงิน",
    href: "/produce",
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
    color: "from-teal-500 to-teal-600",
  },
];

const quickLinks = [
  { label: "เพิ่มสมาชิกใหม่", href: "/members/new", icon: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" },
  { label: "รับฝากเงิน", href: "/deposits/transaction", icon: "M12 4v16m8-8H4" },
  { label: "คำขอสินเชื่อ", href: "/loans/applications", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { label: "ขายสินค้า", href: "/products/sale", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" },
];

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-700">My Home</h2>
        <button className="text-sm text-[#0a6ed1] hover:underline">Edit Home Page</button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {features.map((feature) => (
          <Link
            key={feature.href}
            href={feature.href}
            className="group relative flex flex-col justify-between h-40 p-4 bg-white border border-slate-200 rounded shadow-sm hover:shadow-md hover:border-[#0a6ed1] transition-all"
          >
            <div className="flex-1 flex flex-col items-start">
              <h3 className="font-semibold text-slate-700 group-hover:text-[#0a6ed1] line-clamp-2">
                {feature.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                {feature.description}
              </p>
            </div>
            <div className="self-end mt-2">
              <svg className="w-8 h-8 text-slate-400 group-hover:text-[#0a6ed1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
              </svg>
            </div>
          </Link>
        ))}
        
        {/* Quick Links as Tiles */}
        {quickLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group relative flex flex-col justify-between h-40 p-4 bg-white border border-slate-200 rounded shadow-sm hover:shadow-md hover:border-[#0a6ed1] transition-all"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-slate-700 group-hover:text-[#0a6ed1]">
                {link.label}
              </h3>
              <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-medium bg-blue-50 text-blue-600 rounded">
                Quick Action
              </span>
            </div>
            <div className="self-end mt-2">
              <svg className="w-8 h-8 text-slate-400 group-hover:text-[#0a6ed1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

