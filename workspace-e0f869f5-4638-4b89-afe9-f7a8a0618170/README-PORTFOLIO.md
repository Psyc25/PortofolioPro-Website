# PortfolioPro - Website Portfolio Professional & Modern

Website portfolio yang telah dikonversi dari HTML ke Next.js 15 dengan TypeScript dan Tailwind CSS. Website ini dilengkapi dengan fitur-fitur modern dan responsif.

## ✨ Fitur Utama

### 🎨 Portfolio Management
- **6 Portfolio Template** dengan gambar yang sudah digenerate
- **Responsive Design** untuk semua perangkat
- **Hover Effects** dengan tombol "Lihat Detail"
- **Fallback Image** otomatis jika gambar tidak ditemukan
- **Grid Layout** yang rapi dan modern

### 💰 3 Paket Harga
1. **Dasar - Rp 250K**
   - 3 Halaman
   - Desain Template
   - Custom Domain (.my.id)
   - SEO Basic
   - Free Hosting 6 Bulan
   - Revisi 2x

2. **Pro - Rp 350K** (Paling Populer)
   - 5 Halaman
   - Desain Semi-Custom
   - Custom Domain (.com/.id)
   - SEO Pro
   - Free Hosting 1 Tahun
   - CMS Admin Basic
   - Portfolio Gallery
   - Revisi 5x

3. **Premium - Rp 500K**
   - Unlimited Halaman
   - Desain Custom Premium
   - Custom Domain (.com/.id)
   - SEO Premium
   - Free Hosting 1 Tahun
   - CMS Admin Full
   - Portfolio Gallery
   - Blog System
   - Revisi Unlimited
   - 24/7 Support

### 🛠️ Teknologi
- **Next.js 15** dengan App Router
- **TypeScript** untuk type safety
- **Tailwind CSS** untuk styling modern
- **shadcn/ui** untuk komponen UI yang konsisten
- **Lucide React** untuk ikon yang modern

## 📁 Cara Mengganti Foto Portfolio

### 1. Lokasi File
Letakkan foto portfolio Anda di folder:
```
public/portfolio/
```

### 2. Nama File yang Tersedia
- `designer-portfolio.jpg` - Creative Designer Portfolio
- `developer-portfolio.jpg` - Developer Portfolio  
- `photographer-portfolio.jpg` - Photographer Portfolio
- `artist-portfolio.jpg` - Artist Portfolio
- `writer-portfolio.jpg` - Writer Portfolio
- `marketing-portfolio.jpg` - Marketing Portfolio

### 3. Format dan Ukuran
- **Format**: JPG, PNG, atau WebP
- **Ukuran**: 1024x1024 pixel (square)
- **Ukuran file**: Maksimal 500KB per gambar
- **Kualitas**: High quality untuk tampilan profesional

### 4. Cara Menambah Portfolio Baru
Edit file `src/app/page.tsx` dan tambahkan item baru di array `portfolioItems`:

```typescript
{
  id: 7,
  title: 'Judul Portfolio Anda',
  category: 'Kategori',
  image: '/portfolio/nama-file.jpg',
  description: 'Deskripsi portfolio Anda'
}
```

## 🎯 Fitur-Fitur Website

### Navigation
- **Fixed Navigation Bar** dengan scroll effect
- **Mobile Responsive Menu** dengan hamburger toggle
- **Smooth Scrolling** ke setiap section
- **Auto-hide Navigation** saat scroll down

### Hero Section
- **Gradient Text** untuk headline yang menarik
- **Call-to-Action Buttons** dengan WhatsApp integration
- **Mockup Grid** untuk preview portfolio
- **Responsive Design** untuk mobile dan desktop

### Features Section
- **4 Feature Cards** dengan ikon modern
- **Statistics Section** dengan highlight numbers
- **Hover Effects** untuk interaksi yang lebih baik
- **Grid Layout** yang responsif

### Pricing Section
- **3 Pricing Tiers** dengan fitur berbeda
- **Popular Badge** untuk paket Pro
- **Feature Comparison** dengan checkmarks
- **WhatsApp Integration** untuk pemesanan langsung

### Portfolio Section
- **6 Portfolio Items** dengan gambar yang sudah digenerate
- **Category Badges** untuk identifikasi
- **Hover Overlay** dengan tombol detail
- **Responsive Grid** layout

### Contact Section
- **Contact Form** dengan validation
- **Contact Cards** untuk informasi lengkap
- **WhatsApp Integration** untuk chat langsung
- **Form Status** feedback untuk user

### Footer
- **4 Column Layout** dengan informasi lengkap
- **Social Links** dan contact information
- **Responsive Design** untuk mobile

## 🚀 Cara Menjalankan Website

### Development
```bash
npm run dev
```
Website akan berjalan di `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## 📱 Responsive Design

Website ini dirancang dengan **mobile-first approach**:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## 🎨 Customization

### Warna
- **Primary**: Indigo (`#6366f1`)
- **Secondary**: Purple (`#8b5cf6`)
- **Accent**: Green untuk WhatsApp (`#25d366`)
- **Neutral**: Gray scale untuk text

### Font
- **Primary**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Animations
- **Smooth Transitions** untuk hover effects
- **Fade-in Animations** untuk scroll reveal
- **Transform Effects** untuk card interactions

## 📞 Kontak

- **WhatsApp**: +62 856-9300-9756
- **Email**: Salvanandos.123@gmail.com
- **Location**: Indonesia

## 📄 License

© 2024 PortfolioPro. All rights reserved.

---

## 🤝 Kontribusi

Website ini dibuat dengan ❤️ menggunakan:
- Next.js 15
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React

Untuk pertanyaan atau bantuan, silakan hubungi kami melalui WhatsApp atau email.