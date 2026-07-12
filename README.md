# MEDCMU69 Academic Team Recruitment Website

เว็บไซต์ประชาสัมพันธ์และรับสมัครสมาชิกทีมฝ่ายวิชาการ คณะแพทยศาสตร์ มหาวิทยาลัยเชียงใหม่ รุ่นที่ 69 (MEDCMU69 Academic Team)  
พัฒนาด้วย **Astro 5 + TypeScript + Scoped/Plain CSS** เพื่อการแสดงผลที่รวดเร็ว รองรับทุกอุปกรณ์ (Mobile-first Responsive) และผ่านมาตรฐานการเข้าถึง (Accessibility & SEO)

- **Public Site Domain**: https://joinacad.medcmu69.com
- **Application Form URL**: https://form.medcmu69.com

---

## 📋 ขอบเขตข้อมูล (Single Source of Truth)

ข้อมูลทั้งหมดของเว็บไซต์จัดเก็บไว้ในไฟล์กลาง **`src/data/recruitmentData.ts`** เพื่อให้ง่ายต่อการแก้ไขในอนาคต ประกอบด้วย:
- **ข้อมูลภาพรวมฝ่ายวิชาการ 4 กลุ่มงานหลัก**: IT Team, Lecture Record Team, Academic Core Team และ Academic PR Team
- **ตำแหน่งที่เปิดรับสมัคร 8 ตำแหน่ง (รวม 29 อัตรา)**:
  1. **Academic IT Team** (3 คน)
  2. **Lecture Record Team** (4 คน)
  3. **Examination Team** (8 คน)
  4. **Summaries & Materials Team** (4 คน)
  5. **Document Team** (3 คน)
  6. **PR – Arts** (2 คน)
  7. **PR – Social Media Managers** (3 คน - ผลัดเวรทุกวัน)
  8. **PR – Calendar & Reminders** (2 คน)
- **ขั้นตอนการสมัคร 5 ขั้นตอน** และ **คุณสมบัติร่วม 6 ข้อ**
- **คำถามที่พบบ่อย (FAQ)** ครบถ้วนตามระเบียบฝ่ายวิชาการ

---

## ⚙️ การตั้งค่าตัวแปรสภาพแวดล้อม (Environment Variables)

คัดลอกไฟล์ `.env.example` เป็น `.env` ก่อนเริ่มรันโครงการ:

```bash
cp .env.example .env
```

แก้ไขค่า **`PUBLIC_APPLICATION_URL`** ในไฟล์ `.env` เมื่อต้องการเชื่อมโยงไปยังแบบฟอร์มรับสมัครจริง (เช่น ลิงก์ Formbricks):

```env
PUBLIC_APPLICATION_URL=https://form.medcmu69.com/s/actual-survey-link
```

*หมายเหตุ: หากไม่ได้กำหนดค่า ระบบจะใช้ค่าเริ่มต้น `https://form.medcmu69.com`*

---

## 🚀 การรันโครงการในเครื่อง (Local Development)

### 1. ติดตั้งแพ็กเกจ (Install Dependencies)
```bash
npm install
```

### 2. รันเซิร์ฟเวอร์พัฒนา (Development Server)
```bash
npm run dev
```
เปิดเบราว์เซอร์และเข้าสู่หน้าเว็บที่ `http://localhost:4321`

### 3. ตรวจสอบและสร้างไฟล์ Static (Build for Production)
```bash
npm run build
```
ไฟล์ Static ทั้งหมดจะถูกสร้างไว้ในโฟลเดอร์ **`dist/`**

### 4. พรีวิวผลลัพธ์หลัง Build (Preview Static Build)
```bash
npm run preview
```

---

## 🌐 คำแนะนำการ Deployment ผ่าน Coolify

เว็บไซต์นี้ถูกตั้งค่าเป็น **Static Site Generation (`output: 'static'`)** ซึ่งเหมาะสำหรับการดีพลอยผ่าน Coolify หรือ Static Hosting อื่น ๆ:

1. **สร้าง Resource ใน Coolify**:
   - เลือกประเภท **Static Site (Nixpacks / HTML / Node build)**
2. **ตั้งค่า Build Command**:
   ```bash
   npm install && npm run build
   ```
3. **ตั้งค่า Output Directory / Publish Directory**:
   ```
   dist
   ```
4. **ตั้งค่า Environment Variables ใน Coolify**:
   - เพิ่มตัวแปร `PUBLIC_APPLICATION_URL` โดยระบุลิงก์แบบฟอร์มรับสมัครจริง

---

## 🎨 โครงสร้างโปรเจกต์ (Project Structure)

```
medcmu69-acad-recruitment/
├── public/
│   ├── favicon.svg          # โลโก้และ Favicon สไตล์การแพทย์/วิชาการ
│   ├── robots.txt           # SEO Robot directivity
│   └── sitemap-index.xml    # แผนผังเว็บไซต์
├── src/
│   ├── data/
│   │   └── recruitmentData.ts # แหล่งเก็บข้อมูลหลัก (แก้ไขตำแหน่ง ข้อความ และ FAQ ที่นี่)
│   ├── components/          # คอมโพเนนต์ UI (Navbar, Hero, Accordion, FAQ, Footer)
│   ├── layouts/
│   │   └── Layout.astro     # โครงสร้างหลักและ SEO Metadata
│   ├── styles/
│   │   └── index.css        # ระบบสี ตัวแปร และสไตล์หลัก (Restrained Deep Violet & Navy)
│   └── pages/
│       └── index.astro      # หน้าเว็บรับสมัครหลัก (One-page layout)
├── astro.config.mjs         # ตั้งค่า Astro Static Output
├── package.json
└── tsconfig.json
```
