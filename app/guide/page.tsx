export default function GuidePage() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
        <div className="flex items-center gap-3 mb-3">
          <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <h1 className="text-2xl font-bold text-blue-800">คู่มือการใช้งานระบบสหกรณ์</h1>
        </div>
        <p className="text-blue-700">คู่มือทีละขั้นตอน สำหรับผู้ใช้ทุกระดับ</p>
      </div>

      {/* สารบัญ */}
      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-700 mb-4">📑 สารบัญ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <a href="#member-system" className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
            <span className="font-medium">ระบบสมาชิก</span>
          </a>
          <a href="#share-capital" className="flex items-center gap-2 p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
            <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
            <span className="font-medium">ทุนเรือนหุ้น</span>
          </a>
          <a href="#deposits" className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
            <span className="font-medium">เงินฝาก</span>
          </a>
          <a href="#loans" className="flex items-center gap-2 p-3 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors">
            <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
            <span className="font-medium">สินเชื่อ</span>
          </a>
          <a href="#business" className="flex items-center gap-2 p-3 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors">
            <div className="w-8 h-8 bg-rose-500 text-white rounded-full flex items-center justify-center text-xs font-bold">5</div>
            <span className="font-medium">สินค้า/ธุรกิจ</span>
          </a>
          <a href="#dashboard" className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
            <div className="w-8 h-8 bg-slate-500 text-white rounded-full flex items-center justify-center text-xs font-bold">6</div>
            <span className="font-medium">แดชบอร์ด</span>
          </a>
        </div>
      </div>

      {/* ระบบสมาชิก */}
      <div id="member-system" className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-blue-100 rounded-lg">
            <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-700">1. ระบบสมาชิก</h3>
            <p className="text-sm text-slate-500">การจัดการข้อมูลสมาชิกและทะเบียน</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* เพิ่มสมาชิกใหม่ */}
          <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
            <h4 className="text-lg font-semibold text-blue-800 mb-4">📝 วิธีเพิ่มสมาชิกใหม่</h4>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-blue-700 mb-2">ขั้นตอนที่ต้องทำ:</h5>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-blue-600 ml-4">
                    <li><strong>คลิกเมนู "สมาชิก"</strong> ที่แถบด้านบน</li>
                    <li><strong>กดปุ่ม "เพิ่มสมาชิกใหม่"</strong> สีเขียวขวาบน</li>
                    <li><strong>กรอกข้อมูลให้ครบถ้วน</strong> (ดูรายละเอียดด้านล่าง)</li>
                    <li><strong>ตรวจสอบข้อมูลอีกครั้ง</strong></li>
                    <li><strong>กดปุ่ม "บันทึก"</strong></li>
                  </ol>
                </div>
                <div>
                  <h5 className="font-semibold text-blue-700 mb-2">ข้อมูลที่ต้องเตรียม:</h5>
                  <ul className="list-disc list-inside space-y-1 text-sm text-blue-600 ml-4">
                    <li>เลขบัตรประชาชน 13 หลัก</li>
                    <li>ชื่อ-นามสกุล ตามบัตร</li>
                    <li>วันเดือนปีเกิด</li>
                    <li>ที่อยู่ปัจจุบัน</li>
                    <li>เบอร์โทรศัพท์</li>
                    <li>อีเมล (ถ้ามี)</li>
                    <li>ข้อมูลการเกษตร</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border border-blue-300">
                <h5 className="font-semibold text-blue-800 mb-2">💡 เคล็ดลับ:</h5>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• ใช้ฟอนต์ที่อ่านง่าย ไม่เล็กจนมองไม่เห็น</li>
                  <li>• ตรวจสอบเลขบัตรประชาชนให้ถูกต้องก่อนกรอก</li>
                  <li>• บันทึกข้อมูลสำรองไว้ก่อนส่ง</li>
                </ul>
              </div>
            </div>
          </div>

          {/* แก้ไขข้อมูลสมาชิก */}
          <div className="bg-green-50 p-5 rounded-lg border border-green-200">
            <h4 className="text-lg font-semibold text-green-800 mb-4">✏️ วิธีแก้ไขข้อมูลสมาชิก</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm text-green-600 ml-4">
              <li>คลิกที่ <strong>เลขทะเบียนสมาชิก</strong> ในรายการ</li>
              <li>กดปุ่ม <strong>"แก้ไข"</strong> สีเหลือง</li>
              <li>แก้ไขข้อมูลที่ต้องการ</li>
              <li>กด <strong>"บันทึกการเปลี่ยนแปลง"</strong></li>
            </ol>
          </div>

          {/* ค้นหาสมาชิก */}
          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">🔍 วิธีค้นหาสมาชิก</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">วิธีที่ 1: ใช้ชื่อ</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                  <li>กรอกชื่อ หรือ นามสกุล</li>
                  <li>กดปุ่มค้นหา</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">วิธีที่ 2: ใช้เลขทะเบียน</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                  <li>กรอกเลขทะเบียนสมาชิก</li>
                  <li>กด Enter หรือปุ่มค้นหา</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ทุนเรือนหุ้น */}
      <div id="share-capital" className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-emerald-100 rounded-lg">
            <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-700">2. ทุนเรือนหุ้น</h3>
            <p className="text-sm text-slate-500">การซื้อหุ้น ส่งค่าหุ้น และเงินปันผล</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-200">
            <h4 className="text-lg font-semibold text-emerald-800 mb-4">💰 วิธีสมัครถือหุ้น</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-emerald-700 mb-3">ขั้นตอนการสมัคร:</h5>
                <ol className="list-decimal list-inside space-y-2 text-sm text-emerald-600 ml-4">
                  <li>เลือกเมนู <strong>"ทุนเรือนหุ้น"</strong></li>
                  <li>คลิก <strong>"สมัครถือหุ้นใหม่"</strong></li>
                  <li>เลือกสมาชิกที่ต้องการสมัคร</li>
                  <li>กำหนดจำนวนหุ้นที่ต้องการ</li>
                  <li>คำนวณเงินค่าหุ้น</li>
                  <li>ชำระเงินค่าหุ้น</li>
                  <li>พิมพ์ใบรับหุ้น</li>
                </ol>
              </div>
              <div>
                <h5 className="font-semibold text-emerald-700 mb-3">ข้อมูลที่ต้องเตรียม:</h5>
                <ul className="list-disc list-inside space-y-1 text-sm text-emerald-600 ml-4">
                  <li>เลขทะเบียนสมาชิก</li>
                  <li>จำนวนหุ้นที่ต้องการซื้อ</li>
                  <li>เงินสด หรือ โอนเงิน</li>
                  <li>หลักฐานการชำระเงิน</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
            <h4 className="text-lg font-semibold text-amber-800 mb-4">📅 การส่งค่าหุ้นรายเดือน</h4>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-amber-700">วิธีตั้งค่าส่งอัตโนมัติ:</p>
              <ol className="list-decimal list-inside space-y-1 text-sm text-amber-600 ml-4">
                <li>ไปที่ <strong>"ทุนเรือนหุ้น" → "ตั้งค่าส่งอัตโนมัติ"</strong></li>
                <li>เลือกสมาชิกที่ต้องการตั้งค่า</li>
                <li>กำหนดจำนวนเงินส่งรายเดือน</li>
                <li>เลือกวันที่ส่งแต่ละเดือน</li>
                <li>เลือกแหล่งเงิน (บัญชีเงินฝาก)</li>
                <li>บันทึกการตั้งค่า</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* เงินฝาก */}
      <div id="deposits" className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-purple-100 rounded-lg">
            <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-700">3. เงินฝาก</h3>
            <p className="text-sm text-slate-500">รับฝาก-ถอนเงิน และจัดการบัญชีเงินฝาก</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
            <h4 className="text-lg font-semibold text-purple-800 mb-4">💳 การรับฝากเงิน</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-purple-700 mb-2">ขั้นตอนการรับฝาก:</h5>
                <ol className="list-decimal list-inside space-y-1 text-sm text-purple-600 ml-4">
                  <li>เลือกเมนู <strong>"เงินฝาก" → "รับฝากเงิน"</strong></li>
                  <li>กรอกเลขที่บัญชี หรือ ค้นหาจากชื่อสมาชิก</li>
                  <li>เลือกประเภทบัญชี (ออมทรัพย์/พิเศษ/ประจำ)</li>
                  <li>กรอกจำนวนเงินที่ฝาก</li>
                  <li>ระบุวัตถุประสงค์การฝาก (ถ้ามี)</li>
                  <li>ตรวจสอบข้อมูลและยืนยัน</li>
                  <li>พิมพ์ใบเสร็จ</li>
                </ol>
              </div>
              <div className="bg-white p-4 rounded border border-purple-300">
                <p className="text-sm font-semibold text-purple-800 mb-2">⚠️ ข้อควรระวัง:</p>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• ตรวจสอบยอดเงินในบัญชีให้ถูกต้อง</li>
                  <li>• ยืนยันจำนวนเงินก่อนบันทึก</li>
                  <li>• พิมพ์ใบเสร็จให้ลูกค้า</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
            <h4 className="text-lg font-semibold text-orange-800 mb-4">💸 การถอนเงิน</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm text-orange-600 ml-4">
              <li>เลือกเมนู <strong>"เงินฝาก" → "ถอนเงิน"</strong></li>
              <li>ค้นหาบัญชีจากเลขที่บัญชี หรือ ชื่อ</li>
              <li>ตรวจสอบยอดคงเหลือ</li>
              <li>กรอกจำนวนเงินที่ต้องการถอน</li>
              <li>ยืนยันตัวตนของผู้ถอน (บัตรประชาชน)</li>
              <li>ตรวจสอบยอดคงเหลือหลังหัก</li>
              <li>จ่ายเงินและพิมพ์ใบเสร็จ</li>
            </ol>
          </div>
        </div>
      </div>

      {/* สินเชื่อ */}
      <div id="loans" className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-amber-100 rounded-lg">
            <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-700">4. สินเชื่อ</h3>
            <p className="text-sm text-slate-500">การขอสินเชื่อ อนุมัติ และจัดการหนี้</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
            <h4 className="text-lg font-semibold text-amber-800 mb-4">📋 การขอสินเชื่อใหม่</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-amber-700 mb-3">ขั้นตอนการสมัคร:</h5>
                <ol className="list-decimal list-inside space-y-2 text-sm text-amber-600 ml-4">
                  <li>เลือกเมนู <strong>"สินเชื่อ" → "คำขอใหม่"</strong></li>
                  <li>เลือกประเภทสินเชื่อ</li>
                  <li>กรอกจำนวนเงินที่ต้องการ</li>
                  <li>เลือกระยะเวลาผ่อนชำระ</li>
                  <li>กรอกวัตถุประสงค์การกู้</li>
                </ol>
              </div>
              <div>
                <h5 className="font-semibold text-amber-700 mb-3">เอกสารที่ต้องเตรียม:</h5>
                <ul className="list-disc list-inside space-y-1 text-sm text-amber-600 ml-4">
                  <li>สำเนาบัตรประชาชน</li>
                  <li>สำเนาทะเบียนบ้าน</li>
                  <li>หนังสือรับรองเงินเดือน</li>
                  <li>เอกสารหลักประกัน</li>
                  <li>หนังสือรับรองผู้ค้ำประกัน</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-5 rounded-lg border border-red-200">
            <h4 className="text-lg font-semibold text-red-800 mb-4">🔍 การวิเคราะห์ 5 C's</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border border-red-300">
                  <h6 className="font-semibold text-red-700">C1: Character (บุคลิก)</h6>
                  <p className="text-sm text-red-600">ประวัติการชำระหนี้, อายุสมาชิกภาพ</p>
                </div>
                <div className="bg-white p-3 rounded border border-red-300">
                  <h6 className="font-semibold text-red-700">C2: Capacity (ความสามารถ)</h6>
                  <p className="text-sm text-red-600">รายได้ต่อเดือน, รายจ่ายต่อเดือน, DSR</p>
                </div>
                <div className="bg-white p-3 rounded border border-red-300">
                  <h6 className="font-semibold text-red-700">C3: Capital (ทุน)</h6>
                  <p className="text-sm text-red-600">ทุนเรือนหุ้น, เงินออม, ทรัพย์สินอื่น</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border border-red-300">
                  <h6 className="font-semibold text-red-700">C4: Collateral (หลักประกัน)</h6>
                  <p className="text-sm text-red-600">มูลค่าหลักประกัน, LTV Ratio</p>
                </div>
                <div className="bg-white p-3 rounded border border-red-300">
                  <h6 className="font-semibold text-red-700">C5: Conditions (เงื่อนไข)</h6>
                  <p className="text-sm text-red-600">วัฏจักรการเกษตร, ตลาด</p>
                </div>
                <div className="bg-white p-4 rounded border border-red-400">
                  <p className="text-sm font-semibold text-red-800">🎯 เป้าหมาย:</p>
                  <p className="text-xs text-red-700">คำนวณคะแนนรวมและให้คำแนะนำ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* สินค้า/ธุรกิจ */}
      <div id="business" className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-rose-100 rounded-lg">
            <svg className="w-8 h-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-700">5. สินค้า/ธุรกิจ</h3>
            <p className="text-sm text-slate-500">จัดการคลังสินค้า และการขาย</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-rose-50 p-5 rounded-lg border border-rose-200">
            <h4 className="text-lg font-semibold text-rose-800 mb-4">🛒 การขายสินค้า</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-rose-700 mb-2">ขั้นตอนการขาย:</h5>
                <ol className="list-decimal list-inside space-y-1 text-sm text-rose-600 ml-4">
                  <li>เลือกเมนู <strong>"สินค้า" → "ขายสินค้า"</strong></li>
                  <li>เลือกประเภทลูกค้า (สมาชิก/ทั่วไป)</li>
                  <li>ค้นหาและเลือกสินค้า</li>
                  <li>กรอกจำนวนที่ขาย</li>
                  <li>ระบบคำนวณราคารวมอัตโนมัติ</li>
                  <li>เลือกวิธีชำระเงิน</li>
                  <li>พิมพ์ใบเสร็จ</li>
                </ol>
              </div>
              <div className="bg-white p-4 rounded border border-rose-300">
                <h5 className="font-semibold text-rose-800 mb-2">💳 วิธีชำระเงิน:</h5>
                <ul className="text-sm text-rose-700 space-y-1">
                  <li>• <strong>เงินสด:</strong> รับเงินและทอน</li>
                  <li>• <strong>โอนเงิน:</strong> ตรวจสอบสลิปการโอน</li>
                  <li>• <strong>หักบัญชี:</strong> หักจากบัญชีเงินฝากสมาชิก</li>
                  <li>• <strong>เชื่อ:</strong> กำหนดวันครบกำหนด</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-200">
            <h4 className="text-lg font-semibold text-yellow-800 mb-4">📦 การจัดการสต็อก</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-yellow-700 mb-2">การเพิ่มสต็อก:</h5>
                <ol className="list-decimal list-inside space-y-1 text-sm text-yellow-600 ml-4">
                  <li>ไปที่ <strong>"สต็อกสินค้า"</strong></li>
                  <li>เลือกสินค้าที่ต้องการเพิ่ม</li>
                  <li>กรอกจำนวนที่รับเข้า</li>
                  <li>บันทึกราคาทุน</li>
                  <li>อัปเดตยอดคงเหลือ</li>
                </ol>
              </div>
              <div>
                <h5 className="font-semibold text-yellow-700 mb-2">การแจ้งเตือน:</h5>
                <ul className="list-disc list-inside space-y-1 text-sm text-yellow-600 ml-4">
                  <li>ยอดคงเหลือต่ำกว่าจุดสั่งซื้อ</li>
                  <li>สินค้าใกล้หมดอายุ</li>
                  <li>สินค้าค้างคลังนาน</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* แดชบอร์ด */}
      <div id="dashboard" className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-slate-100 rounded-lg">
            <svg className="w-8 h-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-700">6. แดชบอร์ด</h3>
            <p className="text-sm text-slate-500">สถิติและรายงานต่างๆ</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
            <h4 className="text-lg font-semibold text-slate-800 mb-4">📊 ข้อมูลที่ดูได้</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded border border-slate-300">
                <h6 className="font-semibold text-slate-700">👥 สมาชิก</h6>
                <p className="text-sm text-slate-600">ยอดสมาชิกทั้งหมด, ใหม่, ลาออก</p>
              </div>
              <div className="bg-white p-4 rounded border border-slate-300">
                <h6 className="font-semibold text-slate-700">💰 เงินฝาก</h6>
                <p className="text-sm text-slate-600">ยอดเงินฝากรวม, รายเดือน, รายปี</p>
              </div>
              <div className="bg-white p-4 rounded border border-slate-300">
                <h6 className="font-semibold text-slate-700">📈 สินเชื่อ</h6>
                <p className="text-sm text-slate-600">ยอดหนี้คงเหลือ, หนี้เสีย, อัตราดอกเบี้ย</p>
              </div>
              <div className="bg-white p-4 rounded border border-slate-300">
                <h6 className="font-semibold text-slate-700">🎯 ทุนเรือนหุ้น</h6>
                <p className="text-sm text-slate-600">ยอดหุ้นรวม, หุ้นรายเดือน, เงินปันผล</p>
              </div>
              <div className="bg-white p-4 rounded border border-slate-300">
                <h6 className="font-semibold text-slate-700">🏪 ธุรกิจ</h6>
                <p className="text-sm text-slate-600">ยอดขาย, กำไร, สต็อกสินค้า</p>
              </div>
              <div className="bg-white p-4 rounded border border-slate-300">
                <h6 className="font-semibold text-slate-700">📅 ปฏิทิน</h6>
                <p className="text-sm text-slate-600">กิจกรรม, งานสำคัญ, กำหนดส่ง</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
            <h4 className="text-lg font-semibold text-blue-800 mb-4">📅 การสร้างรายงาน</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm text-blue-600 ml-4">
              <li>เลือกเมนู <strong>"แดชบอร์ด" → "สร้างรายงาน"</strong></li>
              <li>เลือกประเภทรายงานที่ต้องการ</li>
              <li>กำหนดช่วงเวลา (วัน/เดือน/ปี)</li>
              <li>เลือกรูปแบบการแสดงผล</li>
              <li>กด <strong>"สร้างรายงาน"</strong></li>
              <li>ดาวน์โหลด หรือ พิมพ์รายงาน</li>
            </ol>
          </div>
        </div>
      </div>

      {/* เคล็ดลับและแนะนำ */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
        <h3 className="text-lg font-semibold text-green-800 mb-4">💡 เคล็ดลับการใช้งาน</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-green-700 mb-3">⚡ ประหยัดเวลา</h4>
            <ul className="list-disc list-inside space-y-2 text-sm text-green-600 ml-4">
              <li><strong>ใช้ฟังก์ชันค้นหา:</strong> พิมพ์ชื่อ หรือ เลขทะเบียนเพื่อหาข้อมูลเร็ว</li>
              <li><strong>บุ๊กมาร์ก:</strong> เพิ่มหน้าที่ใช้บ่อยลงในรายการโปรด</li>
              <li><strong>ปุ่มลัด:</strong> ใช้ Quick Action สำหรับงานที่ทำบ่อย</li>
              <li><strong>Auto-complete:</strong> ระบบจะแนะนำข้อมูลให้อัตโนมัติ</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-3">🔒 ความปลอดภัย</h4>
            <ul className="list-disc list-inside space-y-2 text-sm text-green-600 ml-4">
              <li><strong>ออกจากระบบ:</strong> ออกจากระบบเมื่อเลิกใช้งาน</li>
              <li><strong>รหัสผ่าน:</strong> ไม่แชร์รหัสผ่านกับผู้อื่น</li>
              <li><strong>ตรวจสอบข้อมูล:</strong> ตรวจสอบก่อนบันทึกทุกครั้ง</li>
              <li><strong>สำรองข้อมูล:</strong> บันทึกข้อมูลสำรองเป็นประจำ</li>
            </ul>
          </div>
        </div>
      </div>

      {/* การแก้ไขปัญหา */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
        <h3 className="text-lg font-semibold text-orange-800 mb-4">🔧 การแก้ไขปัญหาเบื้องต้น</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded border border-orange-300">
              <h4 className="font-semibold text-orange-700 mb-2">🐌 ระบบช้า</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-orange-600 ml-4">
                <li>รีเฟรชหน้าเว็บ (F5)</li>
                <li>ตรวจสอบการเชื่อมต่ออินเทอร์เน็ต</li>
                <li>ปิดแท็บที่ไม่จำเป็น</li>
                <li>รอ 1-2 นาทีแล้วลองใหม่</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded border border-orange-300">
              <h4 className="font-semibold text-orange-700 mb-2">📊 ข้อมูลไม่แสดง</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-orange-600 ml-4">
                <li>ตรวจสอบสิทธิ์การเข้าถึง</li>
                <li>ลองเปลี่ยนตัวกรองวันที่</li>
                <li>เคลียร์แคชของเบราว์เซอร์</li>
                <li>ติดต่อผู้ดูแลระบบ</li>
              </ul>
            </div>
          </div>
          <div className="bg-white p-4 rounded border border-orange-300">
            <h4 className="font-semibold text-orange-700 mb-2">🖨️ พิมพ์ไม่ได้</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="list-disc list-inside space-y-1 text-sm text-orange-600 ml-4">
                <li>ตรวจสอบการเชื่อมต่อเครื่องพิมพ์</li>
                <li>อัปเดตไดรเวอร์เครื่องพิมพ์</li>
              </ul>
              <ul className="list-disc list-inside space-y-1 text-sm text-orange-600 ml-4">
                <li>อนุญาต Pop-up สำหรับเว็บไซต์</li>
                <li>อัปเดตเบราว์เซอร์เวอร์ชันใหม่</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ติดต่อช่วยเหลือ */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-4">📞 ต้องการความช่วยเหลือ?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded border border-blue-300">
            <h4 className="font-semibold text-blue-700 mb-2">🛠️ ฝ่ายเทคนิค</h4>
            <p className="text-sm text-blue-600">ปัญหาระบบ, ข้อผิดพลาด</p>
            <p className="text-sm font-semibold text-blue-700">☎️ โทร: 02-xxx-xxxx</p>
          </div>
          <div className="bg-white p-4 rounded border border-blue-300">
            <h4 className="font-semibold text-blue-700 mb-2">📚 ฝ่ายฝึกอบรม</h4>
            <p className="text-sm text-blue-600">การใช้งาน, คู่มือ</p>
            <p className="text-sm font-semibold text-blue-700">✉️ training@coop.com</p>
          </div>
          <div className="bg-white p-4 rounded border border-blue-300">
            <h4 className="font-semibold text-blue-700 mb-2">🏢 ศูนย์ช่วยเหลือ</h4>
            <p className="text-sm text-blue-600">ชั้น 2 อาคารสหกรณ์</p>
            <p className="text-sm font-semibold text-blue-700">⏰ จันทร์-ศุกร์ 8:00-17:00</p>
          </div>
        </div>
      </div>

      {/* อัปเดตล่าสุด */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>📅 อัปเดตล่าสุด: 22 พฤศจิกายน 2025</span>
          <span>🔄 เวอร์ชัน: 1.0.0</span>
        </div>
      </div>
    </div>
  );
}