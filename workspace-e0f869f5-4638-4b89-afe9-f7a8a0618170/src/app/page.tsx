'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Check, 
  Star, 
  Rocket, 
  Zap, 
  Palette, 
  Smartphone,
  Globe,
  ArrowRight,
  ChevronRight
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    package: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [lastScrollTop, setLastScrollTop] = useState(0)

  // Portfolio data dengan path foto yang bisa diganti
  const portfolioItems = [
    {
      id: 1,
      title: 'Creative Designer Portfolio',
      category: 'Design',
      image: '/portfolio/designer-portfolio.jpg', // Ganti dengan foto Anda
      description: 'Portfolio kreatif untuk desainer grafis dengan galeri yang menarik'
    },
    {
      id: 2,
      title: 'Developer Portfolio',
      category: 'Technology',
      image: '/portfolio/developer-portfolio.jpg', // Ganti dengan foto Anda
      description: 'Portfolio modern untuk developer dengan proyek-proyek teknologi'
    },
    {
      id: 3,
      title: 'Photographer Portfolio',
      category: 'Photography',
      image: '/portfolio/photographer-portfolio.jpg', // Ganti dengan foto Anda
      description: 'Portfolio elegan untuk fotografer dengan galeri foto profesional'
    },
    {
      id: 4,
      title: 'Artist Portfolio',
      category: 'Art',
      image: '/portfolio/artist-portfolio.jpg', // Ganti dengan foto Anda
      description: 'Portfolio artistik untuk seniman dengan karya-karya unik'
    },
    {
      id: 5,
      title: 'Writer Portfolio',
      category: 'Writing',
      image: '/portfolio/writer-portfolio.jpg', // Ganti dengan foto Anda
      description: 'Portfolio profesional untuk penulis dengan karya-karya tulisan'
    },
    {
      id: 6,
      title: 'Marketing Portfolio',
      category: 'Marketing',
      image: '/portfolio/marketing-portfolio.jpg', // Ganti dengan foto Anda
      description: 'Portfolio dinamis untuk marketing professional dengan case studies'
    }
  ]

  // Paket harga dengan 3 tier
  const pricingPlans = [
    {
      id: 'dasar',
      name: 'Dasar',
      price: 'Rp 250K',
      period: 'one-time payment',
      description: 'Solusi hemat untuk portfolio sederhana',
      features: [
        '3 Halaman',
        'Desain Template',
        'Custom Domain (.my.id)',
        'SEO Basic',
        'Free Hosting 6 Bulan',
        'Free SSL Certificate',
        'Revisi 2x',
        'Contact Form',
        'Social Media Links',
        'Basic Support'
      ],
      excludedFeatures: [
        'CMS Admin',
        'Blog System',
        'Portfolio Gallery',
        'Google Analytics',
        '24/7 Support'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 'Rp 350K',
      period: 'one-time payment',
      description: 'Solusi lengkap untuk portfolio profesional',
      features: [
        '5 Halaman',
        'Desain Semi-Custom',
        'Custom Domain (.com/.id)',
        'SEO Pro',
        'Free Hosting 1 Tahun',
        'Free SSL Certificate',
        'Revisi 5x',
        'CMS Admin Basic',
        'Portfolio Gallery',
        'Contact Form',
        'Social Media Integration',
        'Google Analytics Setup',
        'Email Support'
      ],
      excludedFeatures: [
        'Blog System',
        '24/7 Support',
        'Documentation Tutorial'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 'Rp 500K',
      period: 'one-time payment',
      description: 'Solusi lengkap untuk portfolio premium',
      features: [
        'Unlimited Halaman',
        'Desain Custom Premium',
        'Custom Domain (.com/.id)',
        'SEO Premium',
        'Free Hosting 1 Tahun',
        'Free SSL Certificate',
        'Revisi Unlimited',
        'CMS Admin Full',
        'Portfolio Gallery',
        'Blog System',
        'Contact Form',
        'Social Media Integration',
        'Google Analytics Setup',
        'Deploy Assistance',
        '24/7 Support',
        'Documentation Tutorial'
      ],
      excludedFeatures: [],
      popular: false
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 50)
      
      // Hide/show navbar on scroll
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        document.getElementById('navbar')?.classList.add('-translate-y-full')
      } else {
        // Scrolling up
        document.getElementById('navbar')?.classList.remove('-translate-y-full')
      }
      
      setLastScrollTop(scrollTop)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollTop])

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('loading')

    // Simulasi API call
    setTimeout(() => {
      setFormStatus('success')
      setFormData({ name: '', email: '', package: '', message: '' })
      
      setTimeout(() => {
        setFormStatus('idle')
      }, 5000)
    }, 2000)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Navigation */}
      <nav 
        id="navbar"
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' 
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Globe className="w-6 h-6 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">PortfolioPro</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              >
                Fitur
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              >
                Harga
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              >
                Kontak
              </button>
              <Button 
                onClick={() => window.open('https://wa.me/6285693009756?text=Halo, saya tertarik untuk membuat portfolio website.', '_blank')}
                className="bg-green-500 hover:bg-green-600"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-left px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-left px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Fitur
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-left px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Harga
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-left px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Portfolio
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left px-3 py-2 text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  Kontak
                </button>
                <Button 
                  onClick={() => window.open('https://wa.me/6285693009756?text=Halo, saya tertarik untuk membuat portfolio website.', '_blank')}
                  className="bg-green-500 hover:bg-green-600 w-full"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-indigo-100 text-indigo-700 hover:bg-indigo-100">
              <Rocket className="w-4 h-4 mr-2" />
              Website Portfolio Premium
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Portfolio Website<br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Budget Pelajar
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Tampilkan karya terbaik Anda dengan website portfolio yang profesional, 
              responsif, dan terjangkau untuk pelajar dengan hosting dan deploy lengkap.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.open('https://wa.me/6285693009756?text=Halo, saya tertarik untuk membuat portfolio website.', '_blank')}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              >
                Buat Portofolio Sekarang
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('portfolio')}
              >
                Lihat Contoh
              </Button>
            </div>
          </div>

          {/* Hero Mockup */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <Card key={item} className="bg-white shadow-sm">
                    <CardContent className="p-6">
                      <div className={`h-24 rounded-lg mb-4 bg-gradient-to-br ${
                        item === 1 ? 'from-indigo-100 to-purple-100' :
                        item === 2 ? 'from-purple-100 to-pink-100' :
                        'from-pink-100 to-orange-100'
                      }`} />
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-200 rounded" />
                        <div className="h-2 bg-gray-200 rounded w-3/4" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fitur Unggulan Kami
            </h2>
            <p className="text-xl text-gray-600">
              Solusi lengkap untuk kebutuhan portfolio website pelajar dengan harga terjangkau
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Palette, title: 'Modern Design', desc: 'Desain yang bersih, elegan, dan mengikuti tren terkini dengan UI/UX terbaik' },
              { icon: Zap, title: 'Fast Delivery', desc: 'Proses pembuatan cepat dan efisien, website Anda siap dalam 3-7 hari' },
              { icon: Palette, title: 'Fully Customizable', desc: 'Desain disesuaikan dengan brand dan kebutuhan spesifik Anda' },
              { icon: Smartphone, title: 'Mobile Friendly', desc: 'Responsif sempurna di semua perangkat, dari HP hingga desktop' }
            ].map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-indigo-600">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-indigo-600">100%</div>
              <div className="text-gray-600">Responsive</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-indigo-600">SEO</div>
              <div className="text-gray-600">Optimized</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Paket Harga
            </h2>
            <p className="text-xl text-gray-600">
              Solusi lengkap untuk pelajar dengan hosting dan deploy profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'border-2 border-indigo-600 shadow-lg scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Paket Paling Populer
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-indigo-600">{plan.price}</span>
                    <span className="text-gray-500 block text-sm mt-1">{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {plan.excludedFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 opacity-50">
                        <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <span className="text-sm text-gray-500">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700' 
                        : ''
                    }`}
                    onClick={() => window.open(`https://wa.me/6285693009756?text=Halo, saya tertarik dengan paket ${plan.name} untuk pembuatan portfolio website.`, '_blank')}
                  >
                    Pesan Sekarang
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Portfolio Kami
            </h2>
            <p className="text-xl text-gray-600">
              Hasil karya terbaik yang telah kami buat untuk pelajar dan profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback image jika gambar tidak ditemukan
                      e.currentTarget.src = `https://picsum.photos/seed/${item.id}/400/300.jpg`
                    }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary">
                      Lihat Detail
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">{item.category}</Badge>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600">
              Siap memulai proyek portfolio website Anda? Mari diskusikan!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Kirim Pesan</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="package">Paket</Label>
                    <Select value={formData.package} onValueChange={(value) => setFormData({...formData, package: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih Paket" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dasar">Dasar - Rp 250K</SelectItem>
                        <SelectItem value="pro">Pro - Rp 350K</SelectItem>
                        <SelectItem value="premium">Premium - Rp 500K</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Ceritakan tentang proyek Anda..."
                      rows={4}
                      required
                    />
                  </div>

                  {formStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                      Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={formStatus === 'loading'}
                  >
                    {formStatus === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">WhatsApp</h3>
                  <p className="text-gray-600">+62 856-9300-9756</p>
                  <button 
                    onClick={() => window.open('https://wa.me/6285693009756?text=Halo, saya tertarik untuk membuat portfolio website.', '_blank')}
                    className="text-green-600 hover:text-green-700 font-medium mt-1"
                  >
                    Chat sekarang →
                  </button>
                </div>
              </Card>

              <Card className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">Salvanandos.123@gmail.com</p>
                </div>
              </Card>

              <Card className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Lokasi</h3>
                  <p className="text-gray-600">Indonesia</p>
                </div>
              </Card>

              <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Kenapa Memilih Kami?</h3>
                  <div className="space-y-3">
                    {[
                      'Harga Terjangkau untuk Pelajar',
                      'Hosting & Deploy Gratis',
                      'Tim Profesional Berpengalaman',
                      'Garansi Kepuasan 100%'
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-6 h-6 text-indigo-400" />
                <span className="text-xl font-bold">PortfolioPro</span>
              </div>
              <p className="text-gray-400">
                Solusi premium untuk website portfolio pelajar dengan harga terjangkau, hosting dan deploy lengkap.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Portfolio Website</li>
                <li>Custom Design</li>
                <li>SEO Optimization</li>
                <li>Website Maintenance</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Tentang Kami</li>
                <li>Portfolio</li>
                <li>Testimoni</li>
                <li>Karir</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Hubungi</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+62 856-9300-9756</li>
                <li>Salvanandos.123@gmail.com</li>
                <li>Indonesia</li>
              </ul>
            </div>
          </div>

          <Separator className="bg-gray-800 mb-8" />

          <div className="text-center text-gray-400">
            <p>© 2024 PortfolioPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}