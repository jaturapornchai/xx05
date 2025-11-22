export default function GuidePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-700">คู่มือการใช้งาน</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ระบบสมาชิก */}
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-700">ระบบสมาชิก</h3>
          </div>
          <div className="space-y-3 text-sm text-slate-600">
            <p><strong>วิธีเพิ่มสมาชิกใหม่:</strong></p>
            <ol className="list-decimal list-inside space-y-1 ml-2">
              <li>ไปที่เมนู "สมาชิก"</li>
              <li>กดปุ่ม "เพิ่มสมาชิกใหม่"</li>
              <li>กรอกข้อมูลส่วนบุคคล</li>
              <li>กรอกข้อมูลการเกษตร (ถ้ามี)</li>
              <li>กำหนดผู้รับผลประโยชน์</li>
              <li>บันทึกข้อมูล</li>
            </ol>
            <p><strong>ข้อมูลที่ต้องเตรียม:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>เลขบัตรประชาชน</li>
              <li>ข้อมูลที่อยู่</li>
              <li>เบอร์โทรศัพท์</li>
              <li>ข้อมูลการเกษตร</li>
            </ul>
          </div>
        </div>

        {/* ทุนเรือนหุ้น */}
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-700">ทุนเรือนหุ้น</h3>
          </div>
          <div className="space-y-3 text-sm text-slate-600">
            <p><strong>การสมัครถือหุ้น:</strong></p>
            <ol className="list-decimal list-inside space-y-1 ml-2">
              <li>ตรวจสอบสิทธิ์การถือหุ้น</li>
              <li>กำหนดจำนวนหุ้นที่ต้องการ</li>
              <li>ชำระค่าหุ้น</li>
              <li>ออกใบรับหุ้น</li>
            </ol>
            <p><strong>ค่าหุ้นรายเดือน:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>กำหนดจำนวนเงินส่งรายเดือน</li>
              <li>ตัดเงินจากบัญชีเงินฝาก</li>
              <li>อัปเดตยอดหุ้นสะสม</li>
            </ul>
          </div>
        </div>

        {/* เงินฝาก */}
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-700">เงินฝาก</h3>
          </div>
          <div className="space-y-3 text-sm text-slate-600">
            <p><strong>การรับฝากเงิน:</strong></p>
            <ol className="list-decimal list-inside space-y-1 ml-2">
              <li>เลือกประเภทบัญชีเงินฝาก</li>
              <li>กรอกจำนวนเงินที่ฝาก</li>
              <li>ตรวจสอบยอดคงเหลือ</li>
              <li>พิมพ์ใบเสร็จ</li>
            </ol>
            <p><strong>การถอนเงิน:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>ตรวจสอบยอดคงเหลือ</li>
              <li>กรอกจำนวนเงินที่ถอน</li>
              <li>ยืนยันตัวตน</li>
              <li>รับเงินและใบเสร็จ</li>
            </ul>
          </div>
        </div>

        {/* สินเชื่อ */}
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-100 rounded-lg">
              <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-700">สินเชื่อ</h3>
          </div>
          <div className="space-y-3 text-sm text-slate-600">
            <p><strong>ขั้นตอนการขอสินเชื่อ:</strong></p>
            <ol className="list-decimal list-inside space-y-1 ml-2">
              <li>เลือกประเภทสินเชื่อ</li>
              <li>กรอกจำนวนเงินที่ต้องการ</li>
              <li>วิเคราะห์ 5 C's</li>
              <li>เพิ่มผู้ค้ำประกัน</li>
              <li>อัปโหลดเอกสารประกอบ</li>
              <li>ส่งคำขอพิจารณา</li>
            </ol>
            <p><strong>เอกสารที่ต้องเตรียม:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>สำเนาบัตรประชาชน</li>
              <li>เอกสารหลักประกัน</li>
              <li>หนังสือรับรองผู้ค้ำประกัน</li>
              <li>ใบเสร็จส่งค่าหุ้นย้อนหลัง</li>
            </ul>
          </div>
        </div>

        {/* สินค้า/ธุรกิจ */}
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-rose-100 rounded-lg">
              <svg className="w-6 h-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-700">สินค้า/ธุรกิจ</h3>
          </div>
          <div className="space-y-3 text-sm text-slate-600">
            <p><strong>การขายสินค้า:</strong></p>
            <ol className="list-decimal list-inside space-y-1 ml-2">
              <li>เลือกสินค้า</li>
              <li>กรอกจำนวนที่ขาย</li>
              <li>ตรวจสอบราคา</li>
              <li>เลือกวิธีชำระเงิน</li>
              <li>พิมพ์ใบเสร็จ</li>
            </ol>
            <p><strong>การจัดการสต็อก:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>ตรวจสอบยอดคงเหลือ</li>
              <li>แจ้งเตือนสินค้าใกล้หมด</li>
              <li>สั่งซื้อสินค้าเพิ่ม</li>
              <li>บันทึกการเข้าออกสินค้า</li>
            </ul>
          </div>
        </div>

        {/* แดชบอร์ด */}
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-slate-100 rounded-lg">
              <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-700">แดชบอร์ด</h3>
          </div>
          <div className="space-y-3 text-sm text-slate-600">
            <p><strong>รายงานที่ดูได้:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>ยอดสมาชิกรวม</li>
              <li>ยอดเงินฝากรวม</li>
              <li>ยอดสินเชื่อคงเหลือ</li>
              <li>ยอดหุ้นรวม</li>
              <li>ยอดขายรายวัน/เดือน</li>
            </ul>
            <p><strong>การใช้งาน:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>ดูสถิติแบบเรียลไทม์</li>
              <li>เลือกช่วงเวลาที่ต้องการ</li>
              <li>ดาวน์โหลดรายงาน</li>
            </ul>
          </div>
        </div>
      </div>

      {/* เคล็ดลับและแนะนำ */}
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-4">เคล็ดลับการใช้งาน</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
          <div>
            <p><strong>ประหยัดเวลา:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li>ใช้ฟังก์ชันค้นหาเพื่อหาข้อมูลเร็วขึ้น</li>
              <li>บุ๊กมาร์กหน้าที่ใช้บ่อย</li>
              <li>สร้าง Shortcuts สำหรับงานประจำ</li>
            </ul>
          </div>
          <div>
            <p><strong>ความปลอดภัย:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li>ออกจากระบบเมื่อเลิกใช้งาน</li>
              <li>ไม่แชร์รหัสผ่านกับผู้อื่น</li>
              <li>ตรวจสอบข้อมูลก่อนบันทึก</li>
            </ul>
          </div>
        </div>
      </div>

      {/* การแก้ไขปัญหาเบื้องต้น */}
      <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
        <h3 className="text-lg font-semibold text-amber-800 mb-4">การแก้ไขปัญหาเบื้องต้น</h3>
        <div className="space-y-3 text-sm text-amber-700">
          <div>
            <p><strong>ระบบช้า:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
              <li>รีเฟรชหน้าเว็บ</li>
              <li>ตรวจสอบการเชื่อมต่ออินเทอร์เน็ต</li>
              <li>ปิดแท็บที่ไม่จำเป็น</li>
            </ul>
          </div>
          <div>
            <p><strong>ข้อมูลไม่แสดง:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
              <li>ตรวจสอบสิทธิ์การเข้าถึง</li>
              <li>ลองเปลี่ยนตัวกรองข้อมูล</li>
              <li>ติดต่อผู้ดูแลระบบ</li>
            </ul>
          </div>
          <div>
            <p><strong>พิมพ์ไม่ได้:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-1">
              <li>ตรวจสอบเครื่องพิมพ์</li>
              <li>อัปเดตเบราว์เซอร์</li>
              <li>อนุญาต Pop-up สำหรับเว็บไซต์</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ติดต่อช่วยเหลือ */}
      <div className="bg-green-50 p-6 rounded-lg border border-green-200">
        <h3 className="text-lg font-semibold text-green-800 mb-3">ต้องการความช่วยเหลือ?</h3>
        <div className="text-sm text-green-700">
          <p className="mb-2">หากพบปัญหาหรือมีคำถาม สามารถติดต่อได้ที่:</p>
          <div className="space-y-1">
            <p><strong>ฝ่ายสนับสนุนเทคนิค:</strong> โทร 02-xxx-xxxx</p>
            <p><strong>ฝ่ายฝึกอบรม:</strong> อีเมล training@coop.com</p>
            <p><strong>ศูนย์ช่วยเหลือ:</strong> ชั้น 2 อาคารสหกรณ์</p>
          </div>
        </div>
      </div>
    </div>
  );
}