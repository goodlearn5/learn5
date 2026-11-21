function e(e=2,t=-4,n=`L: y = 2x - 4`){return`<svg viewBox="0 0 400 300" width="100%" height="220" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc;border-radius:12px;border:1.5px solid #cbd5e1;">
    <defs>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" stroke-width="1"/>
      </pattern>
      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569"/>
      </marker>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
    <!-- 坐標軸 -->
    <line x1="20" y1="150" x2="380" y2="150" stroke="#475569" stroke-width="2" marker-end="url(#arrow)"/>
    <line x1="200" y1="280" x2="200" y2="20" stroke="#475569" stroke-width="2" marker-end="url(#arrow)"/>
    <text x="385" y="155" font-size="14" font-weight="bold" fill="#334155">x</text>
    <text x="205" y="18" font-size="14" font-weight="bold" fill="#334155">y</text>
    <text x="188" y="165" font-size="13" font-weight="bold" fill="#64748b">O</text>
    <!-- 直線 L (每格 20px = 1 單位，通過 A(2, 0) 與 B(0, -4)) -->
    <line x1="180" y1="270" x2="300" y2="30" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
    <!-- 截距點標註 -->
    <circle cx="200" cy="230" r="4.5" fill="#ef4444"/>
    <text x="138" y="235" font-size="12" font-weight="bold" fill="#dc2626">B(0, -4)</text>
    <circle cx="240" cy="150" r="4.5" fill="#ef4444"/>
    <text x="235" y="138" font-size="12" font-weight="bold" fill="#dc2626">A(2, 0)</text>
    <text x="275" y="75" font-size="14" font-weight="bold" fill="#1d4ed8">${n}</text>
  </svg>`}function t(e=60,t=70,n=50){return`<svg viewBox="0 0 380 240" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc;border-radius:12px;border:1.5px solid #cbd5e1;">
    <polygon points="180,42 55,196 290,196" fill="#eff6ff" stroke="#3b82f6" stroke-width="2.5" stroke-linejoin="round"/>
    <!-- BC 邊延長線至 D 與頂點 C 外角弧 -->
    <line x1="290" y1="196" x2="360" y2="196" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M 276,176 A 24,24 0 0,1 314,196" fill="none" stroke="#dc2626" stroke-width="2.2"/>
    <text x="303" y="176" font-size="13" font-weight="bold" fill="#dc2626">∠ACD = ?</text>
    <!-- 頂點與已知內角標記 -->
    <text x="165" y="28" font-size="15" font-weight="bold" fill="#1e3a8a">A (${e}°)</text>
    <text x="30" y="216" font-size="15" font-weight="bold" fill="#1e3a8a">B (${t}°)</text>
    <text x="284" y="218" font-size="15" font-weight="bold" fill="#1e3a8a">C</text>
    <text x="355" y="218" font-size="15" font-weight="bold" fill="#1e3a8a">D</text>
  </svg>`}function n(e=`series`,t=`4Ω`,n=`6Ω`,r=`12V`){return e===`parallel`?`<svg viewBox="0 0 420 250" width="100%" height="210" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc;border-radius:12px;border:1.5px solid #cbd5e1;">
      <!-- 電池 -->
      <line x1="50" y1="125" x2="120" y2="125" stroke="#334155" stroke-width="2.5"/>
      <line x1="120" y1="105" x2="120" y2="145" stroke="#ef4444" stroke-width="3"/>
      <line x1="130" y1="115" x2="130" y2="135" stroke="#334155" stroke-width="4"/>
      <text x="110" y="98" font-size="12" font-weight="bold" fill="#ef4444">+</text>
      <text x="135" y="98" font-size="12" font-weight="bold" fill="#334155">-</text>
      <text x="110" y="165" font-size="13" font-weight="bold" fill="#0f172a">V = ${r}</text>
      <!-- 主導線 -->
      <line x1="130" y1="125" x2="200" y2="125" stroke="#334155" stroke-width="2.5"/>
      <line x1="200" y1="65" x2="200" y2="185" stroke="#334155" stroke-width="2.5"/>
      <!-- 上支路 R1 -->
      <line x1="200" y1="65" x2="250" y2="65" stroke="#334155" stroke-width="2.5"/>
      <rect x="250" y="55" width="50" height="20" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/>
      <text x="260" y="70" font-size="13" font-weight="bold" fill="#312e81">${t}</text>
      <line x1="300" y1="65" x2="350" y2="65" stroke="#334155" stroke-width="2.5"/>
      <!-- 下支路 R2 -->
      <line x1="200" y1="185" x2="250" y2="185" stroke="#334155" stroke-width="2.5"/>
      <rect x="250" y="175" width="50" height="20" fill="#fee2e2" stroke="#b91c1c" stroke-width="2"/>
      <text x="260" y="190" font-size="13" font-weight="bold" fill="#991b1b">${n}</text>
      <line x1="300" y1="185" x2="350" y2="185" stroke="#334155" stroke-width="2.5"/>
      <!-- 匯流 -->
      <line x1="350" y1="65" x2="350" y2="185" stroke="#334155" stroke-width="2.5"/>
      <line x1="350" y1="125" x2="380" y2="125" stroke="#334155" stroke-width="2.5"/>
      <line x1="380" y1="125" x2="380" y2="225" stroke="#334155" stroke-width="2.5"/>
      <line x1="380" y1="225" x2="50" y2="225" stroke="#334155" stroke-width="2.5"/>
      <line x1="50" y1="225" x2="50" y2="125" stroke="#334155" stroke-width="2.5"/>
      <!-- 開關 S -->
      <circle cx="210" cy="225" r="4" fill="#10b981"/>
      <circle cx="240" cy="225" r="4" fill="#10b981"/>
      <line x1="210" y1="225" x2="238" y2="215" stroke="#10b981" stroke-width="2.5"/>
      <text x="220" y="245" font-size="13" font-weight="bold" fill="#047857">開關 S</text>
    </svg>`:`<svg viewBox="0 0 400 220" width="100%" height="190" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc;border-radius:12px;border:1.5px solid #cbd5e1;">
    <rect x="40" y="40" width="320" height="140" fill="none" stroke="#334155" stroke-width="2.5" rx="10"/>
    <!-- 電池 (上方) -->
    <rect x="170" y="32" width="60" height="16" fill="#f8fafc"/>
    <line x1="190" y1="28" x2="190" y2="52" stroke="#ef4444" stroke-width="3"/>
    <line x1="205" y1="34" x2="205" y2="46" stroke="#334155" stroke-width="4"/>
    <text x="180" y="24" font-size="12" font-weight="bold" fill="#ef4444">+</text>
    <text x="210" y="24" font-size="12" font-weight="bold" fill="#334155">-</text>
    <text x="180" y="68" font-size="13" font-weight="bold" fill="#0f172a">${r}</text>
    <!-- 電阻 R1 (右側) -->
    <rect x="345" y="70" width="30" height="40" fill="#e0e7ff" stroke="#4338ca" stroke-width="2"/>
    <text x="320" y="95" font-size="13" font-weight="bold" fill="#312e81">${t}</text>
    <!-- 電阻 R2 (右側偏下) -->
    <rect x="345" y="125" width="30" height="40" fill="#fee2e2" stroke="#b91c1c" stroke-width="2"/>
    <text x="320" y="150" font-size="13" font-weight="bold" fill="#991b1b">${n}</text>
    <!-- 安培計 A (下方) -->
    <circle cx="200" cy="180" r="16" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
    <text x="194" y="186" font-size="14" font-weight="bold" fill="#15803d">A</text>
    <text x="185" y="208" font-size="12" font-weight="bold" fill="#15803d">安培計</text>
  </svg>`}function r(e=0,t=20,n=5,r=10){return`<svg viewBox="0 0 380 230" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc;border-radius:12px;border:1.5px solid #cbd5e1;">
    <defs>
      <marker id="arrow2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569"/>
      </marker>
    </defs>
    <!-- 坐標軸 -->
    <line x1="50" y1="180" x2="350" y2="180" stroke="#475569" stroke-width="2" marker-end="url(#arrow2)"/>
    <line x1="50" y1="180" x2="50" y2="30" stroke="#475569" stroke-width="2" marker-end="url(#arrow2)"/>
    <text x="355" y="185" font-size="13" font-weight="bold" fill="#334155">t (s)</text>
    <text x="30" y="25" font-size="13" font-weight="bold" fill="#334155">v (m/s)</text>
    <text x="38" y="195" font-size="12" font-weight="bold" fill="#64748b">0</text>
    <!-- 曲線：0~t1 加速，t1~t2 等速 -->
    <line x1="50" y1="180" x2="180" y2="80" stroke="#2563eb" stroke-width="3"/>
    <line x1="180" y1="80" x2="310" y2="80" stroke="#2563eb" stroke-width="3"/>
    <!-- 虛線與標記 -->
    <line x1="180" y1="180" x2="180" y2="80" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
    <line x1="310" y1="180" x2="310" y2="80" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
    <line x1="50" y1="80" x2="180" y2="80" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
    <text x="175" y="198" font-size="12" font-weight="bold" fill="#0f172a">${n}</text>
    <text x="305" y="198" font-size="12" font-weight="bold" fill="#0f172a">${r}</text>
    <text x="25" y="85" font-size="12" font-weight="bold" fill="#0f172a">${t}</text>
    <!-- 區塊填色 -->
    <polygon points="50,180 180,80 180,180" fill="#3b82f6" fill-opacity="0.15"/>
    <polygon points="180,80 310,80 310,180 180,180" fill="#10b981" fill-opacity="0.15"/>
    <text x="110" y="145" font-size="12" font-weight="bold" fill="#1d4ed8">甲區(位移)</text>
    <text x="230" y="145" font-size="12" font-weight="bold" fill="#047857">乙區(位移)</text>
  </svg>`}function i(e=`甲物質`,t=`乙物質`){return`<svg viewBox="0 0 380 230" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc;border-radius:12px;border:1.5px solid #cbd5e1;">
    <defs>
      <marker id="arrowDensity" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569"/>
      </marker>
    </defs>
    <!-- 坐標軸 -->
    <line x1="50" y1="180" x2="350" y2="180" stroke="#475569" stroke-width="2" marker-end="url(#arrowDensity)"/>
    <line x1="50" y1="180" x2="50" y2="30" stroke="#475569" stroke-width="2" marker-end="url(#arrowDensity)"/>
    <text x="345" y="198" font-size="13" font-weight="bold" fill="#334155">體積 V (cm³)</text>
    <text x="25" y="25" font-size="13" font-weight="bold" fill="#334155">質量 M (g)</text>
    <text x="38" y="195" font-size="12" font-weight="bold" fill="#64748b">0</text>
    <!-- 直線 甲 (較陡，密度較大：V=20, M=50 -> D=2.5) -->
    <line x1="50" y1="180" x2="190" y2="60" stroke="#2563eb" stroke-width="3"/>
    <circle cx="150" cy="94" r="4" fill="#2563eb"/>
    <text x="180" y="55" font-size="13" font-weight="bold" fill="#1d4ed8">${e} (D甲)</text>
    <line x1="150" y1="180" x2="150" y2="94" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
    <line x1="50" y1="94" x2="150" y2="94" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
    <text x="140" y="195" font-size="12" font-weight="bold" fill="#0f172a">20</text>
    <text x="25" y="98" font-size="12" font-weight="bold" fill="#0f172a">50</text>
    <!-- 直線 乙 (較緩，密度較小：V=40, M=40 -> D=1.0) -->
    <line x1="50" y1="180" x2="310" y2="90" stroke="#059669" stroke-width="3"/>
    <circle cx="250" cy="111" r="4" fill="#059669"/>
    <text x="315" y="95" font-size="13" font-weight="bold" fill="#047857">${t} (D乙)</text>
    <line x1="250" y1="180" x2="250" y2="111" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
    <line x1="50" y1="111" x2="250" y2="111" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3"/>
    <text x="240" y="195" font-size="12" font-weight="bold" fill="#0f172a">40</text>
    <text x="25" y="115" font-size="12" font-weight="bold" fill="#0f172a">40</text>
  </svg>`}function a(){return`<svg viewBox="0 0 420 250" width="100%" height="210" xmlns="http://www.w3.org/2000/svg" style="background:#0f172a;border-radius:12px;border:1.5px solid #334155;">
    <!-- 陽光 -->
    <line x1="390" y1="20" x2="390" y2="230" stroke="#f59e0b" stroke-width="3"/>
    <text x="370" y="130" font-size="14" font-weight="bold" fill="#fbbf24" writing-mode="vertical-rl">平行太陽光 ←</text>
    <!-- 地球 -->
    <circle cx="200" cy="125" r="26" fill="#38bdf8"/>
    <path d="M 200,99 A 26,26 0 0,0 200,151 Z" fill="#0284c7"/>
    <text x="187" y="130" font-size="12" font-weight="bold" fill="#ffffff">地球</text>
    <!-- 北極視角公轉軌道 -->
    <ellipse cx="200" cy="125" rx="120" ry="75" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4"/>
    <!-- 月球 A (朔，新月，靠太陽側) -->
    <circle cx="320" cy="125" r="14" fill="#334155"/>
    <text x="315" y="110" font-size="12" font-weight="bold" fill="#f8fafc">A</text>
    <!-- 月球 B (上弦月，上方) -->
    <circle cx="200" cy="50" r="14" fill="#334155"/>
    <path d="M 200,36 A 14,14 0 0,1 200,64 Z" fill="#fbbf24"/>
    <text x="220" y="55" font-size="12" font-weight="bold" fill="#f8fafc">B (上弦)</text>
    <!-- 月球 C (望，滿月，背太陽側) -->
    <circle cx="80" cy="125" r="14" fill="#fbbf24"/>
    <text x="75" y="110" font-size="12" font-weight="bold" fill="#f8fafc">C (滿月)</text>
    <!-- 月球 D (下弦月，下方) -->
    <circle cx="200" cy="200" r="14" fill="#fbbf24"/>
    <path d="M 200,186 A 14,14 0 0,1 200,214 Z" fill="#334155"/>
    <text x="220" y="205" font-size="12" font-weight="bold" fill="#f8fafc">D (下弦)</text>
  </svg>`}function o(){return`<svg viewBox="0 0 380 230" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" style="background:#f1f5f9;border-radius:12px;border:1.5px solid #cbd5e1;">
    <!-- 外圈 100m -->
    <path d="M 50,120 Q 90,40 200,50 Q 320,60 330,130 Q 340,200 210,195 Q 80,210 50,120 Z" fill="none" stroke="#15803d" stroke-width="2"/>
    <text x="75" y="115" font-size="11" font-weight="bold" fill="#166534">100m</text>
    <!-- 次圈 200m -->
    <path d="M 90,125 Q 120,70 200,75 Q 280,80 290,130 Q 295,175 200,170 Q 110,180 90,125 Z" fill="none" stroke="#16a34a" stroke-width="2"/>
    <text x="110" y="125" font-size="11" font-weight="bold" fill="#15803d">200m</text>
    <!-- 山頂甲 300m -->
    <path d="M 120,125 Q 135,95 165,100 Q 185,115 170,140 Q 135,150 120,125 Z" fill="none" stroke="#84cc16" stroke-width="2"/>
    <circle cx="150" cy="120" r="3" fill="#dc2626"/>
    <text x="145" y="113" font-size="13" font-weight="bold" fill="#b91c1c">▲ 甲峰 (350m)</text>
    <!-- 山頂乙 300m -->
    <path d="M 220,125 Q 235,95 265,100 Q 285,115 270,140 Q 235,150 220,125 Z" fill="none" stroke="#84cc16" stroke-width="2"/>
    <circle cx="250" cy="120" r="3" fill="#dc2626"/>
    <text x="245" y="113" font-size="13" font-weight="bold" fill="#b91c1c">▲ 乙峰 (320m)</text>
    <!-- 鞍部丙 -->
    <text x="190" y="130" font-size="13" font-weight="bold" fill="#2563eb">★ 丙</text>
    <text x="175" y="148" font-size="11" font-weight="bold" fill="#1d4ed8">(鞍部)</text>
    <!-- 比例尺與指北針 -->
    <line x1="280" y1="205" x2="350" y2="205" stroke="#0f172a" stroke-width="3"/>
    <text x="295" y="220" font-size="11" font-weight="bold" fill="#0f172a">0   500m</text>
    <polygon points="340,30 345,15 350,30 345,26" fill="#ef4444"/>
    <text x="342" y="42" font-size="11" font-weight="bold" fill="#0f172a">N</text>
  </svg>`}function s(e=`demand_increase`){return`<svg viewBox="0 0 380 230" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc;border-radius:12px;border:1.5px solid #cbd5e1;">
    <defs>
      <marker id="arrow3" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569"/>
      </marker>
    </defs>
    <!-- 坐標軸 -->
    <line x1="50" y1="190" x2="350" y2="190" stroke="#475569" stroke-width="2" marker-end="url(#arrow3)"/>
    <line x1="50" y1="190" x2="50" y2="25" stroke="#475569" stroke-width="2" marker-end="url(#arrow3)"/>
    <text x="355" y="195" font-size="13" font-weight="bold" fill="#334155">數量 (Q)</text>
    <text x="25" y="20" font-size="13" font-weight="bold" fill="#334155">價格 (P)</text>
    <text x="38" y="205" font-size="12" font-weight="bold" fill="#64748b">0</text>
    <!-- 供給曲線 S -->
    <line x1="80" y1="170" x2="300" y2="50" stroke="#059669" stroke-width="2.5"/>
    <text x="305" y="55" font-size="13" font-weight="bold" fill="#059669">S (供給)</text>
    <!-- 需求曲線 D -->
    <line x1="80" y1="50" x2="300" y2="170" stroke="#dc2626" stroke-width="2.5"/>
    <text x="305" y="175" font-size="13" font-weight="bold" fill="#dc2626">D (原需求)</text>
    <!-- 新需求曲線 D' -->
    <line x1="130" y1="50" x2="350" y2="170" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="4,4"/>
    <text x="330" y="150" font-size="13" font-weight="bold" fill="#b91c1c">D'</text>
    <!-- 均衡點移動 -->
    <circle cx="190" cy="110" r="5" fill="#1e293b"/>
    <text x="170" y="105" font-size="12" font-weight="bold" fill="#0f172a">E (原均衡)</text>
    <circle cx="230" cy="88" r="5" fill="#2563eb"/>
    <text x="240" y="85" font-size="12" font-weight="bold" fill="#1d4ed8">E' (新均衡)</text>
    <!-- 箭頭指示價格與數量皆上升 -->
    <path d="M 195 105 L 225 90" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow3)"/>
  </svg>`}function c(){return`<svg viewBox="0 0 440 220" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" style="background:#ffffff;border-radius:12px;border:1.5px solid #cbd5e1;">
    <rect x="0" y="0" width="440" height="42" fill="#1e3a8a" rx="12 12 0 0"/>
    <text x="20" y="27" font-size="15" font-weight="bold" fill="#ffffff">🚆 Sunville Express Bus Timetable (Weekdays)</text>
    <!-- 表格線 -->
    <rect x="15" y="55" width="410" height="150" fill="none" stroke="#e2e8f0" stroke-width="1.5" rx="6"/>
    <!-- 欄位標題 -->
    <rect x="15" y="55" width="410" height="30" fill="#f1f5f9"/>
    <text x="25" y="75" font-size="12" font-weight="bold" fill="#334155">Bus No.</text>
    <text x="95" y="75" font-size="12" font-weight="bold" fill="#334155">Departure</text>
    <text x="195" y="75" font-size="12" font-weight="bold" fill="#334155">Destination</text>
    <text x="310" y="75" font-size="12" font-weight="bold" fill="#334155">Duration</text>
    <text x="380" y="75" font-size="12" font-weight="bold" fill="#334155">Fare</text>
    <!-- 橫線 -->
    <line x1="15" y1="85" x2="425" y2="85" stroke="#cbd5e1" stroke-width="1"/>
    <line x1="15" y1="115" x2="425" y2="115" stroke="#f1f5f9" stroke-width="1"/>
    <line x1="15" y1="145" x2="425" y2="145" stroke="#f1f5f9" stroke-width="1"/>
    <line x1="15" y1="175" x2="425" y2="175" stroke="#f1f5f9" stroke-width="1"/>
    <!-- 內容 -->
    <text x="25" y="105" font-size="12" font-weight="bold" fill="#1e40af">#101</text>
    <text x="95" y="105" font-size="12" fill="#334155">07:30 AM</text>
    <text x="195" y="105" font-size="12" fill="#334155">Green Garden</text>
    <text x="310" y="105" font-size="12" fill="#334155">35 mins</text>
    <text x="380" y="105" font-size="12" font-weight="bold" fill="#15803d">$30</text>

    <text x="25" y="135" font-size="12" font-weight="bold" fill="#1e40af">#205</text>
    <text x="95" y="135" font-size="12" fill="#334155">08:15 AM</text>
    <text x="195" y="135" font-size="12" fill="#334155">City Library</text>
    <text x="310" y="135" font-size="12" fill="#334155">20 mins</text>
    <text x="380" y="135" font-size="12" font-weight="bold" fill="#15803d">$25</text>

    <text x="25" y="165" font-size="12" font-weight="bold" fill="#1e40af">#308</text>
    <text x="95" y="165" font-size="12" fill="#334155">09:00 AM</text>
    <text x="195" y="165" font-size="12" fill="#334155">Science Museum</text>
    <text x="310" y="165" font-size="12" fill="#334155">45 mins</text>
    <text x="380" y="165" font-size="12" font-weight="bold" fill="#15803d">$40</text>

    <text x="25" y="195" font-size="12" font-weight="bold" fill="#1e40af">#402</text>
    <text x="95" y="195" font-size="12" fill="#334155">10:20 AM</text>
    <text x="195" y="195" font-size="12" fill="#334155">Central Airport</text>
    <text x="310" y="195" font-size="12" fill="#334155">60 mins</text>
    <text x="380" y="195" font-size="12" font-weight="bold" fill="#15803d">$65</text>
  </svg>`}function l(){return`<svg viewBox="0 0 440 230" width="100%" height="205" xmlns="http://www.w3.org/2000/svg" style="background:#fffbeb;border-radius:12px;border:1.5px solid #fef3c7;">
    <rect x="0" y="0" width="440" height="42" fill="#b45309" rx="12 12 0 0"/>
    <text x="20" y="27" font-size="15" font-weight="bold" fill="#ffffff">☕ Sunshine Bistro - Special Weekend Lunch Combo</text>
    <rect x="15" y="55" width="410" height="160" fill="#ffffff" stroke="#fde68a" stroke-width="1.5" rx="8"/>
    <text x="30" y="80" font-size="13" font-weight="bold" fill="#92400e">【Main Dishes】</text>
    <text x="45" y="102" font-size="12" fill="#451a03">• Beef Burger with Fries ..................... $180</text>
    <text x="45" y="122" font-size="12" fill="#451a03">• Grilled Chicken Salad (Gluten-Free) ... $160</text>
    <text x="45" y="142" font-size="12" fill="#451a03">• Seafood Pasta with Cream Sauce ..... $210</text>
    
    <text x="250" y="80" font-size="13" font-weight="bold" fill="#92400e">【Beverages】</text>
    <text x="250" y="102" font-size="12" fill="#451a03">• Iced Latte ............ $70</text>
    <text x="250" y="122" font-size="12" fill="#451a03">• Fresh Orange Juice $60</text>
    <text x="250" y="142" font-size="12" fill="#451a03">• Green Tea ........... $50</text>
    
    <!-- 促銷說明 -->
    <rect x="25" y="160" width="390" height="42" fill="#fef2f2" stroke="#fecaca" stroke-width="1" rx="6"/>
    <text x="35" y="178" font-size="11.5" font-weight="bold" fill="#b91c1c">🎉 Special Deal: Order any Main Dish to get any Beverage for HALF PRICE!</text>
    <text x="35" y="194" font-size="11" fill="#7f1d1d">※ Free refill for Green Tea. 10% service charge is included.</text>
  </svg>`}function u(){return`<svg viewBox="0 0 460 240" width="100%" height="210" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc;border-radius:12px;border:1.5px solid #cbd5e1;">
    <rect x="0" y="0" width="460" height="40" fill="#0f172a" rx="12 12 0 0"/>
    <text x="20" y="26" font-size="14" font-weight="bold" fill="#f8fafc">📊 Global Renewable Energy Generation (2020 vs 2026 est.)</text>
    
    <!-- Y軸刻度 -->
    <line x1="55" y1="55" x2="55" y2="195" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="55" y1="195" x2="435" y2="195" stroke="#94a3b8" stroke-width="1.5"/>
    
    <text x="25" y="65" font-size="10" fill="#64748b">40%</text>
    <line x1="50" y1="65" x2="435" y2="65" stroke="#e2e8f0" stroke-dasharray="3,3"/>
    
    <text x="25" y="110" font-size="10" fill="#64748b">25%</text>
    <line x1="50" y1="110" x2="435" y2="110" stroke="#e2e8f0" stroke-dasharray="3,3"/>
    
    <text x="25" y="155" font-size="10" fill="#64748b">10%</text>
    <line x1="50" y1="155" x2="435" y2="155" stroke="#e2e8f0" stroke-dasharray="3,3"/>

    <!-- 柱狀圖：Solar -->
    <rect x="80" y="135" width="28" height="60" fill="#93c5fd" rx="3"/>
    <rect x="112" y="70" width="28" height="125" fill="#2563eb" rx="3"/>
    <text x="96" y="210" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Solar</text>
    <text x="126" y="62" font-size="10" font-weight="bold" fill="#1e40af" text-anchor="middle">38%</text>

    <!-- 柱狀圖：Wind -->
    <rect x="175" y="125" width="28" height="70" fill="#86efac" rx="3"/>
    <rect x="207" y="85" width="28" height="110" fill="#16a34a" rx="3"/>
    <text x="191" y="210" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Wind</text>
    <text x="221" y="78" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">32%</text>

    <!-- 柱狀圖：Hydro -->
    <rect x="270" y="140" width="28" height="55" fill="#fde047" rx="3"/>
    <rect x="302" y="130" width="28" height="65" fill="#ca8a04" rx="3"/>
    <text x="286" y="210" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Hydro</text>
    <text x="316" y="122" font-size="10" font-weight="bold" fill="#854d0e" text-anchor="middle">19%</text>

    <!-- 柱狀圖：Bio -->
    <rect x="365" y="165" width="28" height="30" fill="#fca5a5" rx="3"/>
    <rect x="397" y="160" width="28" height="35" fill="#dc2626" rx="3"/>
    <text x="381" y="210" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Bio</text>
    <text x="411" y="152" font-size="10" font-weight="bold" fill="#991b1b" text-anchor="middle">11%</text>

    <!-- 圖例 -->
    <rect x="290" y="10" width="12" height="12" fill="#93c5fd" rx="2"/>
    <text x="307" y="20" font-size="10" fill="#f8fafc">2020</text>
    <rect x="345" y="10" width="12" height="12" fill="#2563eb" rx="2"/>
    <text x="362" y="20" font-size="10" fill="#f8fafc">2026 (Est.)</text>
  </svg>`}function d(){return`<svg viewBox="0 0 460 220" width="100%" height="200" xmlns="http://www.w3.org/2000/svg" style="background:#fdf4ff;border-radius:12px;border:1.5px solid #f0abfc;">
    <rect x="0" y="0" width="460" height="38" fill="#701a75" rx="12 12 0 0"/>
    <text x="20" y="25" font-size="14" font-weight="bold" fill="#fae8ff">📈 Trend of AI vs Human Diagnostic Accuracy Rate (2018-2026)</text>
    
    <!-- 坐標軸 -->
    <line x1="50" y1="50" x2="50" y2="180" stroke="#a21caf" stroke-width="1.5"/>
    <line x1="50" y1="180" x2="430" y2="180" stroke="#a21caf" stroke-width="1.5"/>
    
    <!-- 刻度 -->
    <text x="18" y="60" font-size="10" fill="#86198f">99%</text>
    <text x="18" y="115" font-size="10" fill="#86198f">85%</text>
    <text x="18" y="170" font-size="10" fill="#86198f">70%</text>
    
    <!-- 折線: Human (穩定在 86% ~ 88%) -->
    <polyline points="70,112 150,110 230,109 310,108 390,107" fill="none" stroke="#64748b" stroke-width="2.5" stroke-dasharray="4,4"/>
    <circle cx="390" cy="107" r="4" fill="#64748b"/>
    <text x="400" y="111" font-size="10" font-weight="bold" fill="#475569">Human (88%)</text>
    
    <!-- 折線: AI (從 72% 飆升至 97%) -->
    <polyline points="70,165 150,140 230,105 310,75 390,56" fill="none" stroke="#d946ef" stroke-width="3"/>
    <circle cx="390" cy="56" r="4" fill="#a21caf"/>
    <text x="395" y="52" font-size="10" font-weight="bold" fill="#a21caf">AI (97%)</text>
    
    <!-- X軸年份 -->
    <text x="70" y="196" font-size="10" fill="#701a75" text-anchor="middle">2018</text>
    <text x="150" y="196" font-size="10" fill="#701a75" text-anchor="middle">2020</text>
    <text x="230" y="196" font-size="10" fill="#701a75" text-anchor="middle">2022</text>
    <text x="310" y="196" font-size="10" fill="#701a75" text-anchor="middle">2024</text>
    <text x="390" y="196" font-size="10" fill="#701a75" text-anchor="middle">2026</text>
  </svg>`}export{c as a,e as c,t as d,r as f,l as i,a as l,o as n,u as o,i as r,d as s,n as t,s as u};