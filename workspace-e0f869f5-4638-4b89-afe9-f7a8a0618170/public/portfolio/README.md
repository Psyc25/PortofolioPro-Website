# PortfolioPro - Website Portfolio Professional & Modern

## Cara Mengganti Foto Portfolio

Website ini sudah dilengkapi dengan sistem portfolio yang mudah digunakan. Berikut adalah cara mengganti foto portfolio Anda:

### 1. Letakkan Foto Anda
Letakkan foto portfolio Anda di folder `public/portfolio/` dengan nama file sebagai berikut:

- `designer-portfolio.jpg` - Untuk portfolio Creative Designer
- `developer-portfolio.jpg` - Untuk portfolio Developer
- `photographer-portfolio.jpg` - Untuk portfolio Photographer
- `artist-portfolio.jpg` - Untuk portfolio Artist
- `writer-portfolio.jpg` - Untuk portfolio Writer
- `marketing-portfolio.jpg` - Untuk portfolio Marketing

### 2. Format dan Ukuran yang Direkomendasikan
- **Format**: JPG, PNG, atau WebP
- **Ukuran**: 800x600 pixel (aspect ratio 4:3)
- **Ukuran file**: Maksimal 500KB per gambar
- **Kualitas**: High quality untuk tampilan profesional

### 3. Cara Menambahkan Portfolio Baru
Untuk menambahkan portfolio baru, edit file `src/app/page.tsx` dan tambahkan item baru di array `portfolioItems`:

```typescript
{
  id: 7,
  title: 'Judul Portfolio Anda',
  category: 'Kategori',
  image: '/portfolio/nama-file.jpg',
  description: 'Deskripsi portfolio Anda'
}
```

### 4. Fitur Portfolio
- ✅ Responsive design untuk semua perangkat
- ✅ Hover effect dengan tombol "Lihat Detail"
- ✅ Fallback image otomatis jika gambar tidak ditemukan
- ✅ Grid layout yang rapi dan modern
- ✅ Badge kategori untuk identifikasi yang mudah

## Paket Harga

Website ini menawarkan 3 paket harga:

### 🥉 Dasar - Rp 250K
- 3 Halaman
- Desain Template
- Custom Domain (.my.id)
- SEO Basic
- Free Hosting 6 Bulan
- Revisi 2x

### 🥈 Pro - Rp 350K (Paling Populer)
- 5 Halaman
- Desain Semi-Custom
- Custom Domain (.com/.id)
- SEO Pro
- Free Hosting 1 Tahun
- CMS Admin Basic
- Portfolio Gallery
- Revisi 5x

### 🥇 Premium - Rp 500K
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

## Cara Menghubungi

- **WhatsApp**: +62 856-9300-9756
- **Email**: Salvanandos.123@gmail.com
- **Lokasi**: Indonesia

## Teknologi yang Digunakan

- **Framework**: Next.js 15 dengan App Router
- **Styling**: Tailwind CSS dengan shadcn/ui
- **TypeScript**: Full type safety
- **Responsive**: Mobile-first design
- **Icons**: Lucide React

---

© 2024 PortfolioPro. All rights reserved.