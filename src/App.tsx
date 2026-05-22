import logoImg from './assets/images/logo.png';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Clock, 
  MapPin, 
  Phone, 
  Calendar, 
  Users, 
  Check, 
  ArrowRight, 
  Star, 
  ChevronRight, 
  Volume2, 
  Wine, 
  Beef, 
  Crown, 
  Sparkles, 
  ChevronLeft, 
  X, 
  GlassWater, 
  Instagram, 
  Facebook, 
  Music, 
  Compass, 
  Copy, 
  PartyPopper,
  CheckCircle2,
  CalendarCheck2
} from "lucide-react";

import loungeHero from "./assets/images/lounge_hero_1779397255361.png";
import gourmetDish from "./assets/images/gourmet_dish_1779397273730.png";
import signatureCocktail from "./assets/images/signature_cocktail_1779397295291.png";

import { MENU_ITEMS, TESTIMONIALS, CORE_OFFERINGS } from "./data";
import { ReservationData, PrivateEventData } from "./types";

export default function App() {
  // Navigation / Scroll tracking
  const [activeTab, setActiveTabTab] = useState<"dining" | "cocktails" | "lounge">("dining");
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  
  // Audio state virtual visualizer
  const [isPlayingVibe, setIsPlayingVibe] = useState(false);
  const [currentVibe, setCurrentVibe] = useState<"afrobeats" | "deep_house" | "jazz_soul">("afrobeats");

  // Booking states
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [reservation, setReservation] = useState<ReservationData>({
    name: "",
    email: "",
    phone: "",
    date: new Date().toISOString().split("T")[0],
    time: "20:00",
    guests: 2,
    area: "dining",
    specialRequests: ""
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState("");

  // Private event states
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [eventData, setEventData] = useState<PrivateEventData>({
    name: "",
    email: "",
    phone: "",
    eventType: "exclusive_party",
    guestsCount: "30-50",
    date: new Date().toISOString().split("T")[0],
    message: ""
  });
  const [eventConfirmed, setEventConfirmed] = useState(false);

  // General Notification / Copied feedback state
  const [copiedFeedback, setCopiedFeedback] = useState(false);

  // Testimonial cycling
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isBookingModalOpen && !isEventModalOpen) {
        setCurrentTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [isBookingModalOpen, isEventModalOpen]);

  // Handle Reservation Submit
  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = "RES-" + Math.floor(100000 + Math.random() * 900000);
    setBookingId(id);
    setBookingConfirmed(true);

    // Save in local state
    const existing = localStorage.getItem("23_reservations");
    const array = existing ? JSON.parse(existing) : [];
    array.push({ ...reservation, id });
    localStorage.setItem("23_reservations", JSON.stringify(array));
  };

  // Handle Private Event Submit
  const handleEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEventConfirmed(true);
  };

  // Reset Booking Form
  const resetBooking = () => {
    setReservation({
      name: "",
      email: "",
      phone: "",
      date: new Date().toISOString().split("T")[0],
      time: "20:00",
      guests: 2,
      area: "dining",
      specialRequests: ""
    });
    setBookingConfirmed(false);
    setIsBookingModalOpen(false);
  };

  // Reset Event Form
  const resetEvent = () => {
    setEventData({
      name: "",
      email: "",
      phone: "",
      eventType: "exclusive_party",
      guestsCount: "30-50",
      date: new Date().toISOString().split("T")[0],
      message: ""
    });
    setEventConfirmed(false);
    setIsEventModalOpen(false);
  };

  // Helper copy to clipboard
  const copyAddress = () => {
    navigator.clipboard.writeText("Roundabout, Ode, Ode-Remo, Ogun State, Nigeria");
    setCopiedFeedback(true);
    setTimeout(() => setCopiedFeedback(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F2F2F2] font-sans antialiased overflow-x-hidden selection:bg-gold-500 selection:text-black">
      
      {/* EXQUISITE BLURRED HEADER BANNER */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gold-300 via-gold-500 to-amber-700 z-50" />
      
      {/* NAVIGATION BAR - FIXED ON TOP */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#050505]/85 backdrop-blur-md border-b border-[#2A2A2A] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Elegant Logo / Mark */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none select-none">
            <img 
    src={logoImg} 
    alt="XXIII Restaurant & Lounge" 
    className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
  />
            <div className="flex flex-col">
              <span className="font-display font-medium text-lg tracking-[0.2em] text-white/95 uppercase leading-none">
                TWENTY-THREE
              </span>
              <span className="text-[9px] tracking-[0.3em] text-gold-400 uppercase font-medium mt-1">
                RESTAURANT & LOUNGE
              </span>
            </div>
          </a>

          {/* Quick Contact & Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-6">
            <a 
              href="tel:09015512692" 
              className="hidden md:flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-gold-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>0901 551 2692</span>
            </a>
            
            <a 
              href="#menu" 
              className="hidden sm:inline-block px-4 py-2 rounded-full border border-[#2A2A2A] text-xs text-neutral-400 hover:text-[#F2F2F2] hover:border-gold-500 transition-all font-medium"
            >
              Explore Menu
            </a>

            <button
              onClick={() => setIsBookingModalOpen(true)}
              id="nav-book-btn"
              className="px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-[#C5A059] text-black font-display font-bold text-xs tracking-widest uppercase transition-all hover:bg-gold-400 shadow-md cursor-pointer"
            >
              Book a Table
            </button>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background Image Container */}
        <div className="absolute inset-0">
          <img 
            src={loungeHero} 
            alt="23 Luxury Lounge Atmosphere" 
            className="w-full h-full object-cover scale-105 filter brightness-75 contrast-105 select-none"
            referrerPolicy="no-referrer"
          />
          {/* Deep dark gradient overlays to ensure stellar typography focus */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-[#050505]/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-transparent to-[#050505]/90" />
        </div>

        {/* Ambient Subtle Particle Aura (visual luxury) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-600/10 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-700/5 rounded-full filter blur-[100px] pointer-events-none" />

        {/* Content Container */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
          {/* Golden Badge Accent */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5A059]/20 bg-neutral-950/80 backdrop-blur-md mb-8 shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-gold-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-display font-medium text-gold-300 tracking-[0.25em] uppercase">
              Ogun State's Premier Uplink
            </span>
          </motion.div>

          {/* Majestic Big Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-light tracking-tighter text-white mb-6 uppercase leading-[0.95]"
          >
            Flavors by Day. <br />
            <span className="text-gold-gradient font-serif italic tracking-normal font-light">Rhythm</span> by Night.
          </motion.h1>

          {/* High-end Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-neutral-300/90 font-light tracking-wide leading-relaxed mb-10"
          >
            Experience the exquisite fusion of masterfully crafted gastronomy and an exclusive social lounge. Placed gracefully in the heart of Ode-Remo, where luxury meets vibrant sound.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          >
            <button
              onClick={() => setIsBookingModalOpen(true)}
              id="hero-book-btn"
              className="w-full sm:w-auto px-10 py-4 rounded-none bg-[#C5A059] text-black font-display font-bold tracking-widest text-xs uppercase transition-all hover:bg-gold-400 active:scale-[0.98] cursor-pointer"
            >
              Book a Table
            </button>
            <a
              href="#menu"
              className="w-full sm:w-auto px-10 py-4 rounded-none border border-[#2A2A2A] bg-transparent text-[#F2F2F2] font-display font-bold tracking-widest text-xs uppercase transition-all hover:bg-neutral-900/40 hover:border-gold-500 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explore the Menu</span>
              <ChevronRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Tiny Status / Open Line */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 flex items-center justify-center gap-6 text-neutral-400 text-xs font-medium"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Open 24 Hours</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
            <span>Has Dancing</span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
            <span>VIP Sound Acoustics</span>
          </motion.div>
        </div>

        {/* Scroll Indicator icon */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500 select-none">
          <span className="text-[10px] tracking-widest uppercase font-semibold">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-neutral-700 p-1 flex justify-center">
            <span className="w-1 h-2 rounded-full bg-gold-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* 2. SERVICES & EXPERIENCES SECTION */}
      <section id="experiences" className="py-24 sm:py-32 bg-[#050505] border-y border-[#2A2A2A] relative">
        <div className="absolute inset-0 bg-[#070707]/10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[11px] font-display font-semibold tracking-[0.3em] text-gold-400 uppercase block mb-3">
              Crafting Excellence
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-medium uppercase tracking-tight text-white mb-6">
              Core Offerings & <br className="hidden sm:inline" />
              <span className="font-serif italic text-gold-400 font-light">Custom Masterpieces</span>
            </h2>
            <div className="w-16 h-1 bg-gold-500/40 mx-auto" />
          </div>

          {/* Grid Layout of Core Services */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            
            {/* Fine Dining Card */}
            <div className="group rounded-none bg-[#0a0a0b]/40 border border-[#2A2A2A] p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#C5A059]/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70">
              <div>
                {/* Image Placeholder with elegant gold frame */}
                <div className="relative aspect-[4/3] rounded-none overflow-hidden mb-8 border border-[#2A2A2A] bg-neutral-950">
                  <img 
                    src={gourmetDish} 
                    alt="Premium Plated Gastronomy" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#050505]/85 backdrop-blur-md px-3 py-1 rounded-none border border-[#C5A059]/20 flex items-center gap-1.5">
                    <Beef className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span className="text-[9px] tracking-widest font-semibold uppercase text-gold-300">Fine Dining</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-semibold text-white group-hover:text-[#C5A059] transition-colors mb-4">
                  {CORE_OFFERINGS[0].title}
                </h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                  {CORE_OFFERINGS[0].description}
                </p>
              </div>

              <div>
                <ul className="space-y-2.5 mb-8 border-t border-[#2A2A2A] pt-6">
                  {CORE_OFFERINGS[0].features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-neutral-300">
                      <Check className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#menu"
                  onClick={() => setActiveTabTab("dining")}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-none border border-[#2A2A2A] group-hover:border-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-all font-display font-bold tracking-widest text-[10px] uppercase"
                >
                  <span>Explore Gastronomy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Crafted Cocktails Card */}
            <div className="group rounded-none bg-[#0a0a0b]/40 border border-[#2A2A2A] p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#C5A059]/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70">
              <div>
                {/* Image Placeholder */}
                <div className="relative aspect-[4/3] rounded-none overflow-hidden mb-8 border border-[#2A2A2A] bg-neutral-950">
                  <img 
                    src={signatureCocktail} 
                    alt="Artisanal Cocktails Under Smoke" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#050505]/85 backdrop-blur-md px-3 py-1 rounded-none border border-[#C5A059]/20 flex items-center gap-1.5">
                    <Wine className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span className="text-[9px] tracking-widest font-semibold uppercase text-gold-300">Mixology</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-semibold text-white group-hover:text-[#C5A059] transition-colors mb-4">
                  {CORE_OFFERINGS[1].title}
                </h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                  {CORE_OFFERINGS[1].description}
                </p>
              </div>

              <div>
                <ul className="space-y-2.5 mb-8 border-t border-[#2A2A2A] pt-6">
                  {CORE_OFFERINGS[1].features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-neutral-300">
                      <Check className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#menu"
                  onClick={() => setActiveTabTab("cocktails")}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-none border border-[#2A2A2A] group-hover:border-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-all font-display font-bold tracking-widest text-[10px] uppercase"
                >
                  <span>Explore Cocktails</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* VIP Lounge & Private Events Card */}
            <div className="group rounded-none bg-[#0a0a0b]/40 border border-[#2A2A2A] p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#C5A059]/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/70">
              <div>
                {/* Ambient Venue View - Lounge */}
                <div className="relative aspect-[4/3] rounded-none overflow-hidden mb-8 border border-[#2A2A2A] bg-neutral-950">
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black flex flex-col items-center justify-center p-6 text-center">
                    <Crown className="w-12 h-12 text-[#C5A059] mb-3 animate-pulse" />
                    <span className="font-display font-light text-sm tracking-widest uppercase text-neutral-300">VIP Private Suites</span>
                    <span className="text-[10px] text-gold-400/60 mt-1 uppercase tracking-widest">Prestige Hosting</span>
                  </div>
                  <div className="absolute top-3 left-3 bg-[#050505]/85 backdrop-blur-md px-3 py-1 rounded-none border border-[#C5A059]/20 flex items-center gap-1.5">
                    <Crown className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span className="text-[9px] tracking-widest font-semibold uppercase text-gold-300">Club Elite</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-semibold text-white group-hover:text-[#C5A059] transition-colors mb-4">
                  {CORE_OFFERINGS[2].title}
                </h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                  {CORE_OFFERINGS[2].description}
                </p>
              </div>

              <div>
                <ul className="space-y-2.5 mb-8 border-t border-[#2A2A2A] pt-6">
                  {CORE_OFFERINGS[2].features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs text-neutral-300">
                      <Check className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setIsEventModalOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-none border border-[#2A2A2A] group-hover:border-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-all font-display font-bold tracking-widest text-[10px] uppercase cursor-pointer"
                >
                  <span>Book Private Event</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE DYNAMIC MENU EXPLORER */}
      <section id="menu" className="py-24 sm:py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Title */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-display font-semibold tracking-[0.3em] text-[#C5A059] uppercase block mb-3">
              The Menu Prestige
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-medium tracking-tight uppercase text-white mb-6">
              Savor the <span className="font-serif italic text-gold-400 font-light text-gold-gradient">Signature Culinary Art</span>
            </h2>
            <p className="text-neutral-400 font-light text-sm tracking-wide">
              Tap the categories below to preview our five-star fine gastronomy, innovative smoking cocktails, and premium VIP lounge service bottle choices.
            </p>
          </div>

          {/* Tab Selection */}
          <div className="flex justify-center mb-16 px-1">
            <div className="inline-flex rounded-none bg-neutral-950 p-1 border border-[#2A2A2A] max-w-full overflow-x-auto gap-1">
              
              <button
                onClick={() => setActiveTabTab("dining")}
                className={`px-6 py-3 rounded-none text-xs font-display font-bold tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === "dining" 
                    ? "bg-[#C5A059] text-black font-semibold shadow-md"
                    : "text-neutral-500 hover:text-[#F2F2F2]"
                }`}
              >
                <Beef className="w-4 h-4" />
                <span>Culinary Art</span>
              </button>

              <button
                onClick={() => setActiveTabTab("cocktails")}
                className={`px-6 py-3 rounded-none text-xs font-display font-bold tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === "cocktails" 
                    ? "bg-[#C5A059] text-black font-semibold shadow-md"
                    : "text-neutral-500 hover:text-[#F2F2F2]"
                }`}
              >
                <Wine className="w-4 h-4" />
                <span>Crafted Mixology</span>
              </button>

              <button
                onClick={() => setActiveTabTab("lounge")}
                className={`px-6 py-3 rounded-none text-xs font-display font-bold tracking-widest uppercase transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === "lounge" 
                    ? "bg-[#C5A059] text-black font-semibold shadow-md"
                    : "text-neutral-500 hover:text-[#F2F2F2]"
                }`}
              >
                <Crown className="w-4 h-4" />
                <span>Lounge & Bottles</span>
              </button>

            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {MENU_ITEMS.filter(item => item.category === activeTab).map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-[#0a0a0b]/40 rounded-none border border-[#2A2A2A] p-6 sm:p-8 flex flex-col justify-between transition-all hover:bg-neutral-900/10 hover:border-[#C5A059]/40"
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <div className="flex flex-col gap-1.5">
                    {item.tag && (
                      <span className="self-start text-[8px] font-semibold uppercase tracking-widest bg-[#C5A059]/10 text-gold-300 border border-[#C5A059]/20 px-2 py-0.5 rounded-none">
                        {item.tag}
                      </span>
                    )}
                    <h3 className="text-lg sm:text-xl font-display font-semibold text-white group-hover:text-[#C5A059] transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <span className="font-display font-bold text-base sm:text-lg text-[#C5A059] whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Subtle bottom detail line */}
                <div className="mt-4 pt-4 border-t border-[#2A2A2A] flex items-center justify-between text-[11px] text-neutral-500 font-medium">
                  <span>Premium Ingredients</span>
                  <span className="text-[#C5A059]/40">•</span>
                  <span>Authentic Recipe</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact for Special requests */}
          <div className="mt-14 text-center ">
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Have specific dietary desires or want bespoke luxury catering?{" "}
              <a 
                href="#reserve-experience"
                className="text-[#C5A059] font-semibold underline underline-offset-4 hover:text-gold-300 transition-colors"
              >
                Tell us in your VIP reservation request.
              </a>
            </p>
          </div>

        </div>
      </section>

      {/* LUXURY INTERACTIVE MOOD AUDIO EQ (DANCE / LOUNGE INSPIRED) */}
      <section className="py-16 bg-[#050505] border-t border-b border-[#2A2A2A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-500/3 opacity-5 mix-blend-color-dodge select-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Left copy */}
          <div className="max-w-md text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C5A059]/10 border border-[#C5A059]/20 rounded-none text-gold-300 text-[10px] tracking-widest font-semibold uppercase mb-4">
              <Music className="w-3.5 h-3.5 text-[#C5A059] animate-spin" />
              <span>Has Dancing & Elite Beats</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-medium text-white mb-4 uppercase">
              The Ambient Rhythm of <span className="font-serif italic text-[#C5A059]">23</span>
            </h3>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Sound is as integral as taste. Curated selectors cultivate a bespoke sonic transition—from deep, breezy sunset soul to premium deep-bass nightlife rhythms. Preview the vibe below.
            </p>
          </div>

          {/* Interactive Equalizer & Controls */}
          <div className="bg-neutral-950/80 border border-[#2A2A2A] p-6 sm:p-8 rounded-none w-full max-w-sm flex flex-col gap-6 shadow-xl shadow-black/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center">
                  <Volume2 className="w-4 h-4" />
                </span>
                <div>
                  <span className="text-[10px] uppercase text-neutral-500 tracking-wider">Now Playing (Vibe Preview)</span>
                  <div className="text-xs font-semibold uppercase text-gold-300">
                    {currentVibe === "afrobeats" && "Sizzling Afrobeats Lounge"}
                    {currentVibe === "deep_house" && "Midnight Deep House"}
                    {currentVibe === "jazz_soul" && "Golden Hour Jazz & Soul"}
                  </div>
                </div>
              </div>

              {/* Play / pause simulated trigger */}
              <button
                onClick={() => setIsPlayingVibe(!isPlayingVibe)}
                className={`w-12 h-12 rounded-none flex items-center justify-center transition-all cursor-pointer ${
                  isPlayingVibe 
                    ? "bg-[#C5A059] text-black shadow-lg" 
                    : "bg-neutral-800 text-neutral-400 hover:text-white"
                }`}
              >
                {isPlayingVibe ? (
                  <span className="text-[10px] font-bold tracking-widest">PAUSE</span>
                ) : (
                  <span className="text-[10px] font-bold tracking-widest">PLAY</span>
                )}
              </button>
            </div>

            {/* EQ Virtual Waves */}
            <div className="h-12 flex items-end justify-between gap-1 px-2 border-b border-[#2A2A2A] pb-2">
              {Array.from({ length: 18 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={isPlayingVibe ? {
                    height: [
                      "20%", "70%", "40%", "95%", "15%", "85%", "55%", "30%", "100%", "20%"
                    ][(i * 3) % 10],
                  } : { height: "20%" }}
                  transition={{
                    duration: 1 + (i % 3) * 0.2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className={`w-1.5 rounded-t-sm transition-colors duration-300 ${
                    isPlayingVibe ? "bg-[#C5A059]" : "bg-neutral-800"
                  }`}
                  style={{ height: "20%" }}
                />
              ))}
            </div>

            {/* Switchers */}
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => {
                  setCurrentVibe("afrobeats");
                  setIsPlayingVibe(true);
                }}
                className={`py-1.5 rounded-none text-[10px] font-bold tracking-widest uppercase border transition-colors cursor-pointer ${
                  currentVibe === "afrobeats"
                    ? "bg-[#C5A059]/10 text-[#C5A059] border-[#C5A059]/40"
                    : "bg-transparent border-transparent text-neutral-500 hover:text-neutral-300"
                }`}
              >
                Afrobeats
              </button>
              <button
                onClick={() => {
                  setCurrentVibe("deep_house");
                  setIsPlayingVibe(true);
                }}
                className={`py-1.5 rounded-none text-[10px] font-bold tracking-widest uppercase border transition-colors cursor-pointer ${
                  currentVibe === "deep_house"
                    ? "bg-[#C5A059]/10 text-[#C5A059] border-[#C5A059]/40"
                    : "bg-transparent border-transparent text-neutral-500 hover:text-neutral-300"
                }`}
              >
                Deep House
              </button>
              <button
                onClick={() => {
                  setCurrentVibe("jazz_soul");
                  setIsPlayingVibe(true);
                }}
                className={`py-1.5 rounded-none text-[10px] font-bold tracking-widest uppercase border transition-colors cursor-pointer ${
                  currentVibe === "jazz_soul"
                    ? "bg-[#C5A059]/10 text-[#C5A059] border-[#C5A059]/40"
                    : "bg-transparent border-transparent text-neutral-500 hover:text-neutral-300"
                }`}
              >
                Jazz & Soul
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. ABOUT US SECTION */}
      <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute right-0 top-1/4 w-80 h-80 bg-gold-600/5 rounded-full filter blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Text description (Left) */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-display font-semibold tracking-[0.3em] text-gold-400 uppercase block mb-3 animate-pulse">
                Discover Twenty-Three
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-medium tracking-tight uppercase text-white mb-8">
                The Confluence of <br />
                <span className="font-serif italic text-gold-400 font-light text-gold-gradient">Gastronomy & High Nightlife</span>
              </h2>
              
              <div className="space-y-6 text-neutral-300/90 font-light text-sm sm:text-base leading-relaxed">
                <p>
                  Born out of a vision to blend the sophisticated tranquility of daytime premier dining with the sparkling electricity of late-night upscale hospitality, <strong className="text-gold-300 font-semibold">23 Restaurant & Lounge</strong> serves as the definitive reference point for the social elite.
                </p>
                <p>
                  Gracefully situated at the master roundabout of Ode-Remo, Ogun State, our venue occupies a unique architectural space, meticulously drafted to promote intimate gourmet conversations, bespoke mixology craftsmanship, and free-flowing social connection with dancing and world-class live acoustics.
                </p>
                <p>
                  Whether it is a power lunch under the day breeze, a signature gold-plated dinner, or late-night VIP salon hosting, 23 ensures every single moment is beautifully sculpted, unforgettable, and delivered with immaculate hospitality rules.
                </p>
              </div>

              {/* Core numbers section */}
              <div className="grid grid-cols-3 gap-6 pt-10 border-t border-[#2A2A2A] mt-10">
                <div>
                  <div className="font-display font-light text-3xl sm:text-4xl text-[#C5A059]">24/7</div>
                  <div className="text-[10px] text-neutral-450 tracking-widest uppercase mt-1">Open All Day & Night</div>
                </div>
                <div>
                  <div className="font-display font-light text-3xl sm:text-4xl text-[#C5A059]">₦0</div>
                  <div className="text-[10px] text-neutral-455 tracking-widest uppercase mt-1">Prestige Cover Charge</div>
                </div>
                <div>
                  <div className="font-display font-light text-3xl sm:text-4xl text-[#C5A059]">100%</div>
                  <div className="text-[10px] text-neutral-450 tracking-widest uppercase mt-1">Exclusive Experience</div>
                </div>
              </div>
            </div>

            {/* Visual Graphic Representation (Right) */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              {/* Main Photo Card Frame with drop shadows and gold outline */}
              <div className="relative rounded-none overflow-hidden aspect-[4/5] border border-[#C5A059]/20 p-1 bg-gradient-to-tr from-neutral-950 via-neutral-900 to-amber-900 shadow-2xl shadow-black">
                <div className="relative w-full h-full rounded-none overflow-hidden bg-neutral-900">
                  <img 
                    src={loungeHero} 
                    alt="Luxury Bar and Lounge" 
                    className="w-full h-full object-cover select-none filter contrast-110 animate-fade-in"
                    referrerPolicy="no-referrer"
                  />
                  {/* Internal ambient dark overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                  
                  {/* Floating Absolute Info Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-[#050505]/95 backdrop-blur-md p-5 rounded-none border border-[#2A2A2A] flex items-center gap-4">
                    <span className="w-12 h-12 rounded-none border border-[#C5A059] bg-black text-[#C5A059] flex items-center justify-center flex-shrink-0 animate-pulse">
                      <Compass className="w-6 h-6" />
                    </span>
                    <div>
                      <span className="text-[9px] font-semibold text-gold-400 tracking-widest uppercase block mb-0.5">LOCATION MARK</span>
                      <span className="text-white text-xs font-semibold leading-relaxed block">Roundabout, Ode-Remo, Ogun State, NG.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Absolute Decorative Small Card */}
              <div className="absolute -top-6 -left-6 bg-[#050505] border border-[#2A2A2A] rounded-none p-4 shadow-xl hidden sm:flex items-center gap-3">
                <Star className="w-5 h-5 text-[#C5A059] fill-[#C5A059]" />
                <span className="font-display font-semibold text-xs tracking-wider">Rated 5.0 on Google Review</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 sm:py-32 bg-[#050505] border-y border-[#2A2A2A] relative">
        <div className="absolute left-0 bottom-1/4 w-80 h-80 bg-neutral-900 rounded-full filter blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section title */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-display font-semibold tracking-[0.3em] text-[#C5A059] uppercase block mb-3">
              The Lounge Appraisal
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-medium tracking-tight uppercase text-white mb-6">
              Echoes of <span className="font-serif italic text-gold-400 font-light text-gold-gradient">Impeccable Visits</span>
            </h2>
          </div>

          {/* Testimonial Core Box */}
          <div className="relative bg-neutral-950/60 border border-[#2A2A2A] rounded-none p-8 sm:p-14 shadow-2xl shadow-black/85 flex flex-col justify-between min-h-[340px]">
            {/* Top Stars & quote sign */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex gap-1.5">
                {Array.from({ length: TESTIMONIALS[currentTestimonialIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#C5A059] fill-[#C5A059]" />
                ))}
              </div>
              <div className="font-serif text-[#C5A059]/10 text-8xl leading-none h-4 translate-y-2 select-none font-bold">
                “
              </div>
            </div>

            {/* Testimonial Text with fade animation trigger in active */}
            <div className="mb-10 min-h-[120px] sm:min-h-[100px]">
              <p className="text-lg sm:text-xl md:text-2xl font-light text-white leading-relaxed italic tracking-widest font-serif text-[#F2F2F2]/90">
                "{TESTIMONIALS[currentTestimonialIndex].content}"
              </p>
            </div>

            {/* Author details with profile avatar letters placeholder */}
            <div className="flex items-center justify-between border-t border-[#2A2A2A] pt-8">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-none bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] flex items-center justify-center font-display font-bold text-sm tracking-widest uppercase">
                  {TESTIMONIALS[currentTestimonialIndex].avatarPlaceholder}
                </span>
                <div>
                  <h4 className="font-display font-semibold text-white tracking-widest text-xs sm:text-sm">
                    {TESTIMONIALS[currentTestimonialIndex].name}
                  </h4>
                  <p className="text-neutral-400 text-[10px] sm:text-xs tracking-widest uppercase mt-0.5">
                    {TESTIMONIALS[currentTestimonialIndex].role}
                  </p>
                </div>
              </div>

              {/* Slider Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                  className="w-10 h-10 rounded-none border border-[#2A2A2A] hover:border-[#C5A059] text-neutral-400 hover:text-[#C5A059] flex items-center justify-center transition-all cursor-pointer"
                  title="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setCurrentTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length)}
                  className="w-10 h-10 rounded-none border border-[#2A2A2A] hover:border-[#C5A059] text-neutral-400 hover:text-[#C5A059] flex items-center justify-center transition-all cursor-pointer"
                  title="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Inline Slider Indicators / Dots */}
          <div className="flex justify-center gap-2.5 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonialIndex(i)}
                className={`h-1.5 transition-all cursor-pointer ${
                  currentTestimonialIndex === i ? "w-8 bg-[#C5A059]" : "w-1.5 bg-neutral-800 hover:bg-neutral-700"
                }`}
                title={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 6. CONVERTING SEAMLESS RESERVATION BLOCK & FINAL CTA */}
      <section id="reserve-experience" className="py-24 sm:py-32 relative">
        <div className="absolute inset-x-0 bottom-0 top-0 bg-radial-gradient from-[#C5A059]/3 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="max-w-4xl mx-auto bg-neutral-950 border border-[#2A2A2A] rounded-none overflow-hidden shadow-2xl shadow-black/90">
            
            <div className="grid grid-cols-1 md:grid-cols-12">
              
              {/* Information Banner (Left) */}
              <div className="md:col-span-5 bg-gradient-to-b from-neutral-950 to-[#050505] p-8 sm:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#2A2A2A] relative">
                <div>
                  <span className="text-[10px] uppercase text-[#C5A059] tracking-[0.25em] font-bold block mb-3">
                    Instant Secure Booking
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-medium text-white mb-6 uppercase leading-tight">
                    Join Us Tonight <br className="hidden sm:inline" />
                    at <span className="font-serif italic text-[#C5A059]">Twenty-Three</span>
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    Our bookings engine is active in real-time. Lock down your fine dining table, bottle enclave, or private social suite instantly with zero hassle.
                  </p>
                </div>

                {/* Opening specifications */}
                <div className="space-y-4 pt-6 border-t border-[#2A2A2A]">
                  <div className="flex items-start gap-3">
                    <Clock className="w-4.5 h-4.5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-white">Opening Hours</span>
                      <span className="block text-xs font-light text-neutral-400 mt-0.5">Dinner: 12PM - 11PM daily</span>
                      <span className="block text-xs font-light text-neutral-300 mt-0.5 font-medium">Lounge, Cocktails & Dancing: Open 24 Hours</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4.5 h-4.5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-white">The Enclave</span>
                      <span className="block text-xs font-light text-neutral-400 mt-0.5">Roundabout, Ode, Ode-Remo 121116, Ogun State.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reservation Form (Right) */}
              <div className="md:col-span-7 p-8 sm:p-10 bg-neutral-950">
                <form onSubmit={handleReservationSubmit} className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-2">
                        Your Full Name
                      </label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-[#050505] border border-[#2A2A2A] rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] tracking-widest transition-all text-white"
                        placeholder="e.g. Adeyemi Bello"
                        value={reservation.name}
                        onChange={(e) => setReservation({ ...reservation, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-2">
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        required
                        className="w-full bg-[#050505] border border-[#2A2A2A] rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] tracking-widest transition-all text-white"
                        placeholder="e.g. 0901 551 2692"
                        value={reservation.phone}
                        onChange={(e) => setReservation({ ...reservation, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-2">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-[#050505] border border-[#2A2A2A] rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] tracking-widest transition-all text-white"
                        placeholder="e.g. adeyemi@domain.com"
                        value={reservation.email}
                        onChange={(e) => setReservation({ ...reservation, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-2">
                        Guest Count
                      </label>
                      <input 
                        type="number" 
                        min="1" 
                        max="20"
                        required
                        className="w-full bg-[#050505] border border-[#2A2A2A] rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] tracking-widest transition-all text-white"
                        value={reservation.guests}
                        onChange={(e) => setReservation({ ...reservation, guests: parseInt(e.target.value) || 2 })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-2">
                        Preferred Date
                      </label>
                      <input 
                        type="date" 
                        required
                        className="w-full bg-[#050505] border border-[#2A2A2A] rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] tracking-widest transition-all text-white"
                        value={reservation.date}
                        onChange={(e) => setReservation({ ...reservation, date: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-2">
                        Preferred Hours
                      </label>
                      <input 
                        type="time" 
                        required
                        className="w-full bg-[#050505] border border-[#2A2A2A] rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] tracking-widest transition-all text-white"
                        value={reservation.time}
                        onChange={(e) => setReservation({ ...reservation, time: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-2">
                      Exclusive Suite / Location Area
                    </label>
                    <select 
                      className="w-full bg-[#050505] border border-[#2A2A2A] rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] tracking-widest transition-all text-white"
                      value={reservation.area}
                      onChange={(e: any) => setReservation({ ...reservation, area: e.target.value })}
                    >
                      <option value="dining" className="bg-[#050505]">The Master Dining Salon (Elegant Table)</option>
                      <option value="vip_lounge" className="bg-[#050505]">VIP Lounge Oasis (Plush seating & Bottle Service)</option>
                      <option value="terrace" className="bg-[#050505]">Sky View Terrace (Elegant Breeze)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-2">
                      Special requests, dietary desires, or celebrations (Optional)
                    </label>
                    <textarea 
                      rows={2}
                      className="w-full bg-[#050505] border border-[#2A2A2A] rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] tracking-widest transition-all text-white resize-none"
                      placeholder="e.g. Birthday toast, premium cognac selection, organic steaks only..."
                      value={reservation.specialRequests}
                      onChange={(e) => setReservation({ ...reservation, specialRequests: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#C5A059] hover:opacity-95 text-black font-display font-bold tracking-widest text-xs uppercase py-4 rounded-none transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <CalendarCheck2 className="w-4 h-4" />
                    <span>Reserve Your Experience</span>
                  </button>

                  <p className="text-center text-[10px] text-neutral-500 font-medium tracking-wide">
                    By reserving, you agree to comply with our upscale elegant smart casual dress-code guidelines.
                  </p>

                </form>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* DETAILED FOOTER DETAILS & CONTACT MAP */}
      <footer className="bg-[#070708] border-t border-white/5 pt-20 pb-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/5">
            
            {/* Left Brand and text details */}
            <div className="md:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
               <img 
    src={logoImg} 
    alt="XXIII Restaurant & Lounge" 
    className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
  />
                <div className="flex flex-col">
                  <span className="font-display font-semibold text-lg tracking-[0.2em] text-white">
                    TWENTY-THREE
                  </span>
                  <span className="text-[10px] tracking-[0.25em] text-gold-400 uppercase font-medium">
                    RESTAURANT & LOUNGE
                  </span>
                </div>
              </div>

              <p className="text-neutral-400 text-sm font-light leading-relaxed max-w-sm">
                Where culinary heritage transforms under daylight, and premium nightlife rhythm dominates before dawn. Dedicated entirely to executive recreation, fine taste, and unmatched sound.
              </p>

              {/* Standard Social links */}
              <div className="flex items-center gap-3.5 pt-2">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-neutral-900 border border-white/5 hover:border-gold-500 hover:text-gold-400 flex items-center justify-center text-neutral-400 transition-all cursor-pointer"
                  title="Verify on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-neutral-900 border border-white/5 hover:border-gold-500 hover:text-gold-400 flex items-center justify-center text-neutral-400 transition-all cursor-pointer"
                  title="Verify on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="tel:09015512692" 
                  className="w-10 h-10 rounded-full bg-neutral-900 border border-white/5 hover:border-gold-500 hover:text-gold-400 flex items-center justify-center text-neutral-400 transition-all cursor-pointer"
                  title="Call club directly"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick sections anchors */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#f3f4f6] font-display">
                Social Navigation
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="#experiences" className="text-neutral-400 hover:text-gold-400 text-xs tracking-wide transition-colors">
                    Core Offerings
                  </a>
                </li>
                <li>
                  <a href="#menu" className="text-neutral-400 hover:text-gold-400 text-xs tracking-wide transition-colors">
                    Curated Menu
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-neutral-400 hover:text-gold-400 text-xs tracking-wide transition-colors">
                    Discovery About
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-neutral-400 hover:text-gold-400 text-xs tracking-wide transition-colors">
                    Customer Appraisal
                  </a>
                </li>
              </ul>
            </div>

            {/* Specific address & contact metrics */}
            <div className="md:col-span-4 space-y-6">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#f3f4f6]" id="location-mark">
                Physical Direction
              </h4>

              <div className="space-y-4">
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-4.5 h-4.5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-medium text-neutral-200">23 Lounge Enclave</span>
                    <span className="block text-xs text-neutral-400 font-light leading-relaxed mt-0.5">Roundabout, Ode, Ode-Remo 121116, Ogun State, Nigeria.</span>
                    
                    {/* Interactive copy address feedback */}
                    <button 
                      onClick={copyAddress}
                      className="mt-2 inline-flex items-center gap-1.5 text-[10px] text-gold-400 font-semibold hover:text-gold-300 transition-colors uppercase focus:outline-none cursor-pointer"
                    >
                      <Copy className="w-3 h-3" />
                      <span>{copiedFeedback ? "Address Copied!" : "Copy Exact Address"}</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4.5 h-4.5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-medium text-neutral-200">Immediate Phone Reach</span>
                    <a href="tel:09015512692" className="block text-xs text-gold-400 font-semibold hover:underline mt-0.5">
                      0901 551 2692
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4.5 h-4.5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-medium text-neutral-200">Operational Timing</span>
                    <span className="block text-xs text-neutral-400 font-light mt-0.5">Open 24 hours daily, 7 days a week.</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom attribution copyright rules */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 text-neutral-500 text-[11px] font-medium">
            <p className="text-center sm:text-left">
              &copy; {new Date().getFullYear()} Twenty-Three Restaurant & Lounge. All luxury rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Hosting Integrity Certified</span>
              </span>
              <span>Design inspired by pure premium aesthetics.</span>
            </div>
          </div>

        </div>
      </footer>

       {/* POPUP: ACTIVE INLINE TABLE BOOKING CONFIRMATION MODAL */}
       <AnimatePresence>
         {isBookingModalOpen && (
           <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
             
             {/* Dark Overlay with blur */}
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={resetBooking}
               className="absolute inset-0 bg-black/90 backdrop-blur-sm"
             />
 
             {/* Inner Box popup card */}
             <motion.div 
               initial={{ scale: 0.95, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.95, opacity: 0 }}
               className="relative bg-[#050505] border border-[#C5A059]/40 w-full max-w-lg rounded-none overflow-hidden shadow-2xl p-6 sm:p-8 text-left z-10"
             >
               
               {/* Close Button */}
               <button
                 onClick={resetBooking}
                 className="absolute top-4 right-4 w-8 h-8 rounded-none border border-[#2A2A2A] bg-[#050505] text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                 title="Close reservation widget"
               >
                 <X className="w-4 h-4" />
               </button>
 
               {!bookingConfirmed ? (
                 <div>
                   <div className="flex items-center gap-2 mb-6">
                     <Calendar className="w-5 h-5 text-[#C5A059]" />
                     <h3 className="text-lg font-display uppercase font-semibold text-white tracking-widest">Book Your Luxury Table</h3>
                   </div>
 
                   <form onSubmit={handleReservationSubmit} className="space-y-4">
                     <div>
                       <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-1.5 font-bold">Your Full Name</label>
                       <input 
                         type="text" 
                         required
                         className="w-full bg-neutral-950 border border-[#2A2A2A] rounded-none px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] text-white"
                         placeholder="John Doe"
                         value={reservation.name}
                         onChange={(e) => setReservation({ ...reservation, name: e.target.value })}
                       />
                     </div>
 
                     <div className="grid grid-cols-2 gap-3">
                       <div>
                         <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-1.5 font-bold">Phone Number</label>
                         <input 
                           type="tel" 
                           required
                           className="w-full bg-neutral-950 border border-[#2A2A2A] rounded-none px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] text-white"
                           placeholder="e.g. 0901 551 2692"
                           value={reservation.phone}
                           onChange={(e) => setReservation({ ...reservation, phone: e.target.value })}
                         />
                       </div>
                       <div>
                         <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-1.5 font-bold">Guests count</label>
                         <input 
                           type="number" 
                           min="1" 
                           max="20"
                           required
                           className="w-full bg-neutral-950 border border-[#2A2A2A] rounded-none px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] text-white"
                           value={reservation.guests}
                           onChange={(e) => setReservation({ ...reservation, guests: parseInt(e.target.value) || 2 })}
                         />
                       </div>
                     </div>
 
                     <div className="grid grid-cols-2 gap-3">
                       <div>
                         <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-1.5 font-bold">Preferred Date</label>
                         <input 
                           type="date" 
                           required
                           className="w-full bg-neutral-950 border border-[#2A2A2A] rounded-none px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] text-white"
                           value={reservation.date}
                           onChange={(e) => setReservation({ ...reservation, date: e.target.value })}
                         />
                       </div>
                       <div>
                         <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-1.5 font-bold">Hours</label>
                         <input 
                           type="time" 
                           required
                           className="w-full bg-neutral-950 border border-[#2A2A2A] rounded-none px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] text-white"
                           value={reservation.time}
                           onChange={(e) => setReservation({ ...reservation, time: e.target.value })}
                         />
                       </div>
                     </div>
 
                     <div>
                       <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-1.5 font-bold">Select Lounge Area</label>
                       <select 
                         className="w-full bg-neutral-950 border border-[#2A2A2A] rounded-none px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] text-white text-white/90"
                         value={reservation.area}
                         onChange={(e: any) => setReservation({ ...reservation, area: e.target.value })}
                       >
                         <option value="dining" className="bg-[#050505]">The Master Dining Salon (Elegant Table)</option>
                         <option value="vip_lounge" className="bg-[#050505]">VIP Lounge Oasis (Plush seating & Bottle Service)</option>
                         <option value="terrace" className="bg-[#050505]">Sky View Terrace (Breezy Lounge)</option>
                       </select>
                     </div>
 
                     <div>
                       <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-1.5 font-bold">Celebrations or Requests (Optional)</label>
                       <textarea 
                         rows={2}
                         className="w-full bg-neutral-950 border border-[#2A2A2A] rounded-none px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] text-white resize-none"
                         placeholder="e.g. Premium VIP experience, birthday champagne spray..."
                         value={reservation.specialRequests}
                         onChange={(e) => setReservation({ ...reservation, specialRequests: e.target.value })}
                       />
                     </div>
 
                     <button
                       type="submit"
                       className="w-full py-4 mt-3 rounded-none bg-[#C5A059] text-black font-semibold uppercase font-display text-xs tracking-widest hover:opacity-95 cursor-pointer shadow-lg active:scale-98 transition-all"
                     >
                       Lock In Table Reservation
                     </button>
                   </form>
                 </div>
               ) : (
                 <div className="text-center py-8">
                   <span className="w-16 h-16 rounded-none bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                     <CheckCircle2 className="w-8 h-8" />
                   </span>
                   
                   <h3 className="text-2xl font-display font-semibold uppercase text-white mb-2 tracking-widest">Reservation Secured</h3>
                   <p className="text-neutral-400 text-xs sm:text-sm font-light max-w-sm mx-auto mb-6">
                     Meticulously logged. We've reserved your exclusive experience at <strong className="text-[#C5A059]">23 Restaurant & Lounge</strong>. Confirmation has been dispatched.
                   </p>
 
                   {/* Elegant Receipt details */}
                   <div className="bg-[#0a0a0b] border border-[#2A2A2A] rounded-none p-5 mb-8 text-left space-y-3 font-semibold text-xs text-neutral-300">
                     <div className="flex justify-between border-b border-[#2A2A2A] pb-2">
                       <span className="text-neutral-500 font-medium">Prestige Booking ID</span>
                       <span className="text-[#C5A059] font-bold tracking-widest">{bookingId}</span>
                     </div>
                     <div className="flex justify-between">
                       <span className="text-neutral-500 font-medium">Guest Master</span>
                       <span className="text-white">{reservation.name}</span>
                     </div>
                     <div className="flex justify-between">
                       <span className="text-neutral-500 font-medium">Co-Guests</span>
                       <span className="text-white">{reservation.guests} pax</span>
                     </div>
                     <div className="flex justify-between">
                       <span className="text-neutral-500 font-medium">Date & Time</span>
                       <span className="text-white">{reservation.date} @ {reservation.time}</span>
                     </div>
                     <div className="flex justify-between">
                       <span className="text-neutral-500 font-medium">Enclave Lounge Area</span>
                       <span className="text-white uppercase font-bold text-[10px] tracking-wider text-gold-300">
                         {reservation.area === "dining" && "Dining Salon"}
                         {reservation.area === "vip_lounge" && "VIP Lounge Oasis"}
                         {reservation.area === "terrace" && "Sky View Terrace"}
                       </span>
                     </div>
                   </div>
 
                   <button
                     onClick={resetBooking}
                     className="w-full py-3.5 rounded-none border border-[#2A2A2A] hover:border-[#C5A059] text-neutral-350 hover:text-white transition-colors uppercase font-display text-[11px] font-bold tracking-widest cursor-pointer"
                   >
                     Done & Close Widget
                   </button>
                 </div>
               )}
 
             </motion.div>
           </div>
         )}
       </AnimatePresence>

      {/* POPUP: PRIVATE EVENT ENQUIRY CONFIRMATION MODAL */}
      <AnimatePresence>
        {isEventModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={resetEvent}
              className="absolute inset-0 bg-black/80 backdrop-blur-xs"
            />

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-[#050505] border border-[#C5A059]/40 w-full max-w-lg rounded-none overflow-hidden shadow-2xl p-6 sm:p-8 text-left z-10"
            >
              
              <button
                onClick={resetEvent}
                className="absolute top-4 right-4 w-8 h-8 rounded-none border border-[#2A2A2A] bg-[#050505] text-neutral-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Close private event modal"
              >
                <X className="w-4 h-4" />
              </button>

              {!eventConfirmed ? (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Crown className="w-5 h-5 text-[#C5A059]" />
                    <h3 className="text-lg font-display uppercase font-semibold text-white tracking-widest">Private Event Proposal</h3>
                  </div>

                  <form onSubmit={handleEventSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-1.5 font-bold">Your Identity Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-neutral-950 border border-[#2A2A2A] rounded-none px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] text-white"
                        placeholder="Organizer / Company Name"
                        value={eventData.name}
                        onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-1.5 font-bold">Email</label>
                        <input 
                          type="email" 
                          required
                          className="w-full bg-neutral-950 border border-[#2A2A2A] rounded-none px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] text-white"
                          placeholder="e.g. host@domain.com"
                          value={eventData.email}
                          onChange={(e) => setEventData({ ...eventData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-1.5 font-bold">Primary Phone</label>
                        <input 
                          type="tel" 
                          required
                          className="w-full bg-neutral-950 border border-[#2A2A2A] rounded-none px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] text-white"
                          value={eventData.phone}
                          onChange={(e) => setEventData({ ...eventData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-1.5 font-bold text-neutral-405">Target Date</label>
                        <input 
                          type="date" 
                          required
                          className="w-full bg-neutral-950 border border-[#2A2A2A] rounded-none px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] text-white"
                          value={eventData.date}
                          onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-1.5 font-bold">Projected Attendance</label>
                        <select 
                          className="w-full bg-neutral-950 border border-[#2A2A2A] rounded-none px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] text-white text-white/90"
                          value={eventData.guestsCount}
                          onChange={(e) => setEventData({ ...eventData, guestsCount: e.target.value })}
                        >
                          <option value="15-30" className="bg-[#050505]">15 - 30 Guests</option>
                          <option value="30-50" className="bg-[#050505]">30 - 50 Guests</option>
                          <option value="50-100" className="bg-[#050505]">50 - 100 Guests</option>
                          <option value="100+" className="bg-[#050505]">100+ VIPs (Full Venue buyout)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-1.5 font-bold">Nature of the Prestige Gathering</label>
                      <select 
                        className="w-full bg-neutral-950 border border-[#2A2A2A] rounded-none px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] text-white text-white/90"
                        value={eventData.eventType}
                        onChange={(e) => setEventData({ ...eventData, eventType: e.target.value })}
                      >
                        <option value="exclusive_party" className="bg-[#050505]">Bespoke Birthday / Private Celebration</option>
                        <option value="executive_dinner" className="bg-[#050505]">Executive / Diplomatic Dinner Hosting</option>
                        <option value="cocktail_reception" className="bg-[#050505]">Elite Cocktail Reception</option>
                        <option value="buyout" className="bg-[#050505]">Entire Venue Buyout</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-1.5 font-bold">Provide parameters & bespoke expectations</label>
                      <textarea 
                        rows={3}
                        className="w-full bg-neutral-950 border border-[#2A2A2A] rounded-none px-4 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] text-white resize-none"
                        placeholder="Draft your thoughts on catering, exclusive sound setup, and lighting configuration desires..."
                        value={eventData.message}
                        onChange={(e) => setEventData({ ...eventData, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 mt-3 rounded-none bg-[#C5A059] text-black font-semibold uppercase font-display text-xs tracking-widest hover:opacity-95 cursor-pointer shadow-lg active:scale-98 transition-all"
                    >
                      Transmit Bespoke Proposal
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-8">
                  <span className="w-16 h-16 rounded-none bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-6">
                    <PartyPopper className="w-8 h-8" />
                  </span>
                  
                  <h3 className="text-2xl font-display font-semibold uppercase text-white mb-2 tracking-widest">Proposal Transmitted</h3>
                  <p className="text-neutral-400 text-xs sm:text-sm font-light max-w-sm mx-auto mb-6">
                    Bespoke event inquiry captured. A dedicated <strong className="text-[#C5A059]">23 Concierge Director</strong> will review your parameters and initiate a contact call within 2 hours.
                  </p>

                  <button
                    onClick={resetEvent}
                    className="w-full py-3.5 rounded-none border border-[#2A2A2A] hover:border-[#C5A059] text-neutral-350 hover:text-white transition-colors uppercase font-display text-[11px] font-bold tracking-widest cursor-pointer"
                  >
                    Close & Perfect Layout
                  </button>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
