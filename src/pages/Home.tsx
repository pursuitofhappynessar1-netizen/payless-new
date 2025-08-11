import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Users, 
  Star, 
  CheckCircle, 
  Sparkles,
  ArrowRight,
  Shield,
  Globe,
  Clock,
  Download,
  Gift,
  TrendingUp,
  UserCheck,
  Zap,
  Percent,
  Award,
  Heart,
  Target,
  Compass,
  Ticket,
  CreditCard,
  Hotel,
  Plane,
  FileText,
  Building,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Plus,
  Minus
} from 'lucide-react';
import AnimationWrapper from '../components/AnimationWrapper';
import PaylessCard from '../components/PaylessCard';

const Home: React.FC = () => {
  const [showAllVouchers, setShowAllVouchers] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const destinations = [
    {
      name: 'North Coast',
      description: 'Pristine beaches and luxury resorts',
      discount: '20%',
      image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800',
      originalPrice: '3000',
      discountedPrice: '2400'
    },
    {
      name: 'Sharm El Sheikh',
      description: 'World-class diving and coral reefs',
      discount: '18%',
      image: 'https://images.pexels.com/photos/261410/pexels-photo-261410.jpeg?auto=compress&cs=tinysrgb&w=800',
      originalPrice: '2500',
      discountedPrice: '2050'
    },
    {
      name: 'El Gouna',
      description: 'Modern lagoon town paradise',
      discount: '15%',
      image: 'https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=800',
      originalPrice: '2800',
      discountedPrice: '2380'
    },
    {
      name: 'Dahab',
      description: 'Bohemian vibe and Blue Hole',
      discount: '12%',
      image: 'https://images.pexels.com/photos/2382681/pexels-photo-2382681.jpeg?auto=compress&cs=tinysrgb&w=800',
      originalPrice: '2000',
      discountedPrice: '1760'
    },
    {
      name: 'Luxor',
      description: 'Ancient temples and royal tombs',
      discount: '10%',
      image: 'https://images.pexels.com/photos/262780/pexels-photo-262780.jpeg?auto=compress&cs=tinysrgb&w=800',
      originalPrice: '1800',
      discountedPrice: '1620'
    },
    {
      name: 'Aswan',
      description: 'Nubian culture and Nile cruises',
      discount: '8%',
      image: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=800',
      originalPrice: '2200',
      discountedPrice: '2024'
    }
  ];

  const whyPaylessReasons = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Unbeatable Discounts',
      description: 'Save up to 20% on your entire trip - hotels, dining, activities, and more across Egypt',
      color: 'from-emerald-400 to-emerald-600',
      bgColor: 'from-emerald-50 to-emerald-100'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Verified Partners',
      description: 'Over 500 trusted partners across Egypt\'s top destinations with guaranteed savings',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Instant Activation',
      description: 'Get your digital card within 24 hours and start saving immediately on your travels',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Exclusive Access',
      description: 'Member-only deals, special experiences, and VIP treatment at premium locations',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    }
  ];

  const services = [
    {
      icon: <Hotel className="h-12 w-12" />,
      title: 'Hotels',
      description: 'Up to 20% off hotels inside and outside Egypt. We help find top-quality accommodation at the best price.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Plane className="h-12 w-12" />,
      title: 'Flight Tickets',
      description: 'Up to 10% discount on global flights.',
      color: 'from-sky-500 to-sky-600',
      bgColor: 'from-sky-50 to-sky-100',
      image: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <FileText className="h-12 w-12" />,
      title: 'Visa',
      description: 'We assist with visa applications worldwide. Just a passport and a photo needed.',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: 'Umrah',
      description: 'Tailored Umrah packages with full service including hotels, flights, visas, and barcode.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      image: '/umrah.webp'
    }
  ];

  const vouchers = [
    {
      title: 'Free Nile Cruise Night',
      description: 'Enjoy a free night when you book three or more nights on the Nile Cruise between Luxor and Aswan.',
      image: 'https://images.pexels.com/photos/262780/pexels-photo-262780.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Nile Dinner Discount',
      description: 'Enjoy a 30% discount on an open buffet dinner invitation for 2 persons at selected locations along the Nile.',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Extended Umrah Trip',
      description: 'Experience a 14-night Umrah trip at the cost of only 11 nights.',
      image: 'https://images.pexels.com/photos/8129903/pexels-photo-8129903.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Umrah Discount',
      description: 'Receive a discount ranging from 2,500 to 5,000 EGP per person on your Umrah trip.',
      image: 'https://images.pexels.com/photos/8129903/pexels-photo-8129903.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Free Visa Processing',
      description: 'Visa issuance fees are waived if you book 6+ nights outside Egypt.',
      image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Premium Residence Visa',
      description: 'A premium residence visa for professionals is now available at a discounted rate of $30,000 (was $35,000).',
      image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Complimentary International Night',
      description: 'Enjoy a complimentary night when you book six nights outside Egypt, while keeping your cost under $100.',
      image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Free $50 Credit',
      description: 'Get a cool $50 absolutely free!',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Flight Discount',
      description: 'Get a fabulous 250 EGP off your flight tickets!',
      image: 'https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Free Day Use',
      description: 'Day use without spending a dime!',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Ahmed',
      location: 'Cairo',
      text: 'Saved over 2000 EGP on my North Coast vacation! This card is absolutely amazing.',
      rating: 5,
      savings: '2000 EGP'
    },
    {
      name: 'Mohamed Hassan',
      location: 'Alexandria',
      text: 'Perfect for weekend getaways. The discounts are real and substantial every time.',
      rating: 5,
      savings: '1500 EGP'
    },
    {
      name: 'Nour El-Din',
      location: 'Giza',
      text: 'Best travel investment I\'ve ever made. Highly recommended for all Egypt travelers!',
      rating: 5,
      savings: '3200 EGP'
    }
  ];

  const faqs = [
    {
      question: 'How does the Payless card work?',
      answer: 'Simply present your Payless card at any of our partner locations to receive instant discounts. The card is activated within 24 hours of registration and can be used immediately.'
    },
    {
      question: 'What destinations are covered by Payless?',
      answer: 'Payless covers all major Egyptian destinations including North Coast, Sharm El Sheikh, Hurghada, Luxor, Aswan, Dahab, El Gouna, and many more locations across Egypt.'
    },
    {
      question: 'How much can I save with Payless?',
      answer: 'You can save up to 20% on hotels, restaurants, activities, and experiences. Our vouchers can help you save over 20,000 EGP annually with special deals and exclusive offers.'
    },
    {
      question: 'Is there an annual fee for the Payless card?',
      answer: 'The Payless card has a one-time registration fee. There are no hidden charges or annual fees. Once you have the card, you can use it for unlimited savings.'
    },
    {
      question: 'Can I use the card for international travel?',
      answer: 'Yes! Payless offers discounts on international flights, visa processing, and hotel bookings outside Egypt. Some vouchers specifically apply to international destinations.'
    }
  ];

  const displayedVouchers = showAllVouchers ? vouchers : vouchers.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in-up border border-orange-300/30">
                <Sparkles className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Egypt's #1 Travel Discount Card</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up stagger-1">
                Wherever You Want to
                <span className="block bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                  Travel in Egypt...
                </span>
                <span className="block text-3xl md:text-4xl mt-2 font-manrope">
                  Our Card Gives You an 
                  <span className="text-orange-300"> Unbeatable Discount</span>
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl animate-fade-in-up stagger-2 font-manrope">
                From the pristine beaches of the North Coast to the ancient wonders of Luxor - 
                save up to 20% on hotels, dining, and experiences everywhere in Egypt.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in-up stagger-3">
                <Link
                  to="/get-your-card"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25 flex items-center space-x-2 animate-pulse-slow"
                >
                  <span>Unlock Your Discount</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <div className="flex items-center space-x-2 text-blue-100">
                  <Heart className="h-5 w-5 text-red-400" />
                  <span className="text-sm font-medium">Loved by 50,000+ travelers</span>
                </div>
              </div>
            </div>

            {/* Payless Card Display */}
            <div className="flex justify-center lg:justify-end animate-fade-in-right">
              <PaylessCard size="large" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Statement Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimationWrapper animationType="scale-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
              <Target className="h-12 w-12 mx-auto mb-4 text-orange-200" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-manrope">
                "Wherever you want to travel in Egypt...
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-orange-200 mb-6">
                our card gives you an unbeatable discount."
              </h3>
              <p className="text-xl text-orange-100 max-w-2xl mx-auto font-manrope">
                This is our promise to you. No matter which Egyptian destination calls to your heart, 
                Payless ensures you experience it for less.
              </p>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animationType="slide-in-left">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  About Us
                </h2>
                <h3 className="text-2xl md:text-3xl font-semibold text-sky-600 mb-6 font-manrope">
                  Discover the World with Payless...
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed font-manrope">
                  Payless card is your ultimate pass to incredible discounts of up to 20% on all your travel adventures! 
                  Whether you're envisioning luxurious hotels, thrilling cruises, or serene yacht retreats, 
                  Payless is your reliable companion for maximizing savings on every aspect of your journey!
                </p>
              </div>
            </AnimationWrapper>
            
            <AnimationWrapper animationType="slide-in-right">
              <div className="flex justify-center">
                <PaylessCard size="large" />
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper animationType="fade-in">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Sparkles className="h-4 w-4 mr-2" />
                Premium Services
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-manrope leading-relaxed">
                Comprehensive travel solutions with exclusive discounts for Payless cardholders
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <AnimationWrapper 
                key={index}
                animationType="scale-in"
                delay={index * 200}
              >
                <div className="group relative">
                  {/* Main Card */}
                  <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-100 overflow-hidden relative z-10">
                    {/* Image Section */}
                    <div className="relative h-72 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Floating Icon */}
                      <div className={`absolute top-6 right-6 bg-gradient-to-r ${service.color} text-white p-4 rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 z-20`}>
                        {service.icon}
                      </div>
                      
                      {/* Service Badge */}
                      <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg z-20">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                        <span className="text-sm font-bold text-gray-800">PAYLESS</span>
                      </div>
                      
                      {/* Title Overlay */}
                      <div className="absolute bottom-6 left-6 right-6 z-20">
                        <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                          {service.title}
                        </h3>
                        <div className="w-16 h-1 bg-white/80 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-8">
                      <p className="text-gray-700 text-lg leading-relaxed font-manrope mb-6">
                        {service.description}
                      </p>
                      
                      {/* Features List */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                          <span className="text-sm text-gray-600 font-manrope">Exclusive member discounts</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                          <span className="text-sm text-gray-600 font-manrope">24/7 customer support</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                          <span className="text-sm text-gray-600 font-manrope">Instant booking confirmation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Background Element */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.bgColor} rounded-3xl transform rotate-1 scale-95 opacity-30 group-hover:rotate-2 group-hover:scale-98 transition-all duration-500`}></div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
          
          {/* Call to Action */}
          <AnimationWrapper animationType="fade-in" delay={800}>
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Ready to Experience Premium Travel Services?
                  </h3>
                  <p className="text-sky-100 text-lg mb-6 font-manrope leading-relaxed">
                    Get your Payless card today and unlock exclusive access to all our premium services
                  </p>
                  <Link
                    to="/get-your-card"
                    className="inline-flex items-center bg-white text-sky-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl space-x-2"
                  >
                    <CreditCard className="h-5 w-5" />
                    <span>Get Your Card Now</span>
                  </Link>
                </div>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Why Choose Payless Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper animationType="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Payless?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-manrope">
                More than just a discount card - it's your gateway to experiencing Egypt like never before
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {whyPaylessReasons.map((reason, index) => (
              <AnimationWrapper 
                key={index}
                animationType={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
                delay={index * 200}
              >
                <div className={`bg-gradient-to-br ${reason.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 group`}>
                  <div className={`bg-gradient-to-r ${reason.color} text-white p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {reason.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed font-manrope">
                    {reason.description}
                  </p>
                </div>
              </AnimationWrapper>
            ))}
          </div>

          <AnimationWrapper animationType="scale-in">
            <div className="flex justify-center">
              <PaylessCard size="large" showAnimation={false} />
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Our Vouchers Section */}
      <section id="vouchers" className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper animationType="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Vouchers
              </h2>
              <p className="text-2xl text-sky-600 font-semibold mb-4 font-manrope">
                Unlock exclusive vouchers that can save you over 20,000 EGP each year!
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto font-manrope">
                Discover amazing deals and exclusive offers available only to Payless cardholders
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedVouchers.map((voucher, index) => (
              <AnimationWrapper 
                key={index}
                animationType="scale-in"
                delay={index * 150}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={voucher.image} 
                      alt={voucher.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      <Gift className="h-3 w-3 inline mr-1" />
                      VOUCHER
                    </div>
                    
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg flex items-center space-x-1 shadow-lg">
                      <CreditCard className="w-3 h-3 text-sky-600" />
                      <span className="text-xs font-bold text-gray-800">PAYLESS</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {voucher.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-manrope">
                      {voucher.description}
                    </p>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>

          {!showAllVouchers && (
            <AnimationWrapper animationType="fade-in">
              <div className="text-center">
                <button
                  onClick={() => setShowAllVouchers(true)}
                  className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto"
                >
                  <span>Show More Vouchers</span>
                  <ChevronDown className="h-5 w-5" />
                </button>
              </div>
            </AnimationWrapper>
          )}

          {showAllVouchers && (
            <AnimationWrapper animationType="fade-in">
              <div className="text-center">
                <button
                  onClick={() => setShowAllVouchers(false)}
                  className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto"
                >
                  <span>Show Less</span>
                  <ChevronUp className="h-5 w-5" />
                </button>
              </div>
            </AnimationWrapper>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper animationType="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Real Savings, Real Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-manrope">
                See how much our travelers have saved with their Payless cards
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimationWrapper 
                key={index}
                animationType="slide-in-left"
                delay={index * 200}
              >
                <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-2xl border border-sky-100 hover:shadow-lg transition-shadow duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold group-hover:scale-105 transition-transform duration-300">
                      Saved {testimonial.savings}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6 italic text-lg font-manrope">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                      <p className="text-sm text-gray-600 font-manrope">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper animationType="fade-in">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 font-manrope">
                Everything you need to know about Payless
              </p>
            </div>
          </AnimationWrapper>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimationWrapper 
                key={index}
                animationType="fade-in"
                delay={index * 100}
              >
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-sky-100 p-2 rounded-lg">
                        <HelpCircle className="h-5 w-5 text-sky-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </h3>
                    </div>
                    {openFaq === index ? (
                      <Minus className="h-5 w-5 text-gray-500" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-500" />
                    )}
                  </button>
                  
                  {openFaq === index && (
                    <div className="px-8 pb-6">
                      <div className="pl-12">
                        <p className="text-gray-600 leading-relaxed font-manrope">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animationType="slide-in-left">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Start Your Journey with Payless?
                </h2>
                <p className="text-xl text-blue-100 mb-8 font-manrope">
                  Join thousands of smart travelers who've already discovered the power of Payless. 
                  Your Egyptian adventure awaits - for less!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                  <Link
                    to="/get-your-card"
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2 animate-glow"
                  >
                    <Gift className="h-5 w-5" />
                    <span>Book Now and Save Big</span>
                  </Link>
                  
                  <div className="flex items-center space-x-4 text-blue-100">
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm font-manrope">24-hour activation</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm font-manrope">No hidden fees</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animationType="slide-in-right">
              <div className="flex justify-center lg:justify-end">
                <PaylessCard size="large" />
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Final CTA Before Footer */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimationWrapper animationType="scale-in">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-orange-200">
              <Compass className="h-12 w-12 mx-auto mb-4 text-orange-500" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Don't Miss Out on Egypt's Best Deals
              </h3>
              <p className="text-lg text-gray-600 mb-6 font-manrope">
                Every day you wait is money you could be saving. Get your Payless card today!
              </p>
              <Link
                to="/get-your-card"
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg space-x-2"
              >
                <span>Start Your Journey with Payless</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default Home;