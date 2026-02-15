"use client";
import { useState, useEffect, useRef } from "react";
import { Home, Code2, Mail, Menu, X, Sparkles, FolderCode, BookAudio, GraduationCap, User, LogOut, LayoutDashboard, ShoppingCart, UserCheck, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Hire Developers", href: "/developers", icon: Code2 },
  { name: "Softwares", href: "/softwares-readymade", icon: FolderCode },
  { name: "Our Services", href: "/book-services", icon: FolderCode },
  { name: "About", href: "/about", icon: BookAudio },
  { name: "Career", href: "/careers", icon: GraduationCap },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout, isAdmin } = useAuth();

  // Prevent Scroll logic
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  // Click outside close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogoutClick = async () => {
    await logout();
    setDropdownOpen(false);
    router.push("/");
  };

  return (
    <>
      <nav className={`z-50 w-full border-b border-blue-300/70 bg-black transition-all duration-300 ${pathname.startsWith('/admin') ? 'hidden' : 'block'}`}>
        <div className="max-w-[1450px] mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo - As per your original design */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-blue-500 via-sky-500 to-teal-500 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 scale-100 group-hover:scale-110 transition-all duration-500" />
                <div className="relative bg-linear-to-br from-blue-600 via-sky-500 to-teal-400 p-3 rounded-2xl shadow-2xl ring-2 ring-blue-400/50">
                  <Code2 className="w-7 h-7 text-white" strokeWidth={3} />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-black bg-linear-to-r from-blue-400 via-sky-400 to-teal-400 bg-clip-text text-transparent tracking-tight">
                  NoDeskDeveloper
                </h1>
                <p className="text-xs font-medium text-blue-300/70 tracking-wider">
                  CONNECT • BUILD • GROW
                </p>
              </div>
            </Link>

            {/* Desktop Nav's - Original size and spacing */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map(({ name, href, icon: Icon }) => (
                <Link
                  key={name}
                  href={href}
                  className={`relative group px-4 py-3 text-sm rounded-2xl overflow-hidden transition-all duration-300`}
                >
                  <span className={`absolute inset-0 bg-linear-to-r from-blue-600/0 via-sky-600/0 to-blue-600/0 group-hover:from-blue-600/20 group-hover:via-sky-600/30 group-hover:to-blue-600/20 transition-all duration-500 ${pathname === href ? "from-blue-600/30 via-sky-600/40 to-blue-600/30" : ""}`} />
                  <span className="relative flex items-center gap-2.5 font-semibold text-white/80 group-hover:text-white transition-colors">
                    <Icon className="size-4 group-hover:scale-110 transition-transform duration-300" />
                    {name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Auth Actions - Professional Avatar Dropdown */}
            <div className="hidden md:flex items-center gap-4">
              {user ? (
                <div className="relative" ref={dropdownRef}>
                  <button 
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 p-2 cursor-pointer rounded-full bg-white/5 border border-blue-500/30 hover:border-blue-500/60 transition-all active:scale-95"
                  >
                    <div className="size-10 rounded-full bg-linear-to-r from-blue-600 via-sky-500 to-teal-400 font-bold text-white overflow-hidden shadow-2xl shadow-sky-500/40 hover:shadow-sky-500/70 transition-all duration-400 border border-blue-400/40 flex items-center justify-center">
                      <User size={20} className="text-blue-200" />
                    </div>
                  </button>

                  {/* Dropdown UI - Professional & Clean */}
                  <div className={`absolute right-0 mt-3 w-60 bg-[#0a0a0a] border border-blue-500/30 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300 z-[60] ${dropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
                    <div className="px-5 py-4 bg-white/5 border-b border-white/10">
                      <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mb-1">Signed in as</p>
                      <p className="text-sm text-white font-medium truncate">{user.email}</p>
                    </div>
                    
                    <div className="p-2">
                      {isAdmin ? (
                        <Link href="/admin/dashboard" onClick={() => setDropdownOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-blue-600/10 rounded-xl transition-all group">
                          <LayoutDashboard size={18} className="text-blue-400 group-hover:scale-110 transition-transform" /> 
                          Admin Dashboard
                        </Link>
                      ) : (
                        <>
                          <Link href="/developers" onClick={() => setDropdownOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-blue-600/10 rounded-xl transition-all group">
                            <UserCheck size={18} className="text-blue-400 group-hover:scale-110 transition-transform" /> 
                            Hire Developers
                          </Link>
                          <Link href="/softwares-readymade" onClick={() => setDropdownOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-blue-600/10 rounded-xl transition-all group">
                            <ShoppingCart size={18} className="text-blue-400 group-hover:scale-110 transition-transform" /> 
                            Buy Softwares
                          </Link>
                        </>
                      )}
                      
                      <div className="h-px bg-white/5 my-1" />
                      
                      <button onClick={handleLogoutClick} className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 rounded-xl transition-all group">
                        <LogOut size={18} className="group-hover:translate-x-1 transition-transform" /> 
                        Logout Account
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <button 
                  onClick={() => router.push("/auth/login")} 
                  className="group relative px-6 py-3 cursor-pointer bg-linear-to-r from-blue-600 via-sky-500 to-teal-400 rounded-2xl font-bold text-white overflow-hidden shadow-2xl shadow-sky-500/40 hover:shadow-sky-500/70 transition-all duration-400 hover:scale-105 active:scale-95"
                >
                  <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative flex items-center gap-2">
                    <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
                    Get Started
                  </span>
                </button>
              )}
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-3 rounded-xl bg-white/5 border border-blue-500/30 text-white">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Full Screen Overlay with No Scroll */}
        <div className={`md:hidden fixed inset-0 top-20 bg-black z-[100] transition-all duration-500 ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
          <div className="flex flex-col h-full p-6 space-y-3 overflow-y-auto">
            {navLinks.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-semibold transition-all ${pathname === href ? "bg-blue-600/20 text-blue-400" : "text-white/70 hover:bg-white/5"}`}
              >
                <Icon size={20} />
                <span>{name}</span>
              </Link>
            ))}
            
            <div className="pt-4 border-t border-white/10 mt-2">
              {user ? (
                 <div className="space-y-3">
                    <div className="px-6 py-4 bg-white/5 rounded-2xl border border-white/10">
                       <p className="text-[10px] text-blue-400 font-bold uppercase">Account</p>
                       <p className="text-sm text-white truncate">{user.email}</p>
                    </div>
                    {isAdmin ? (
                      <Link href="/admin/dashboard" onClick={() => setMobileOpen(false)} className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-blue-600/20 text-blue-400 font-bold"><LayoutDashboard size={20} /> Admin Dashboard</Link>
                    ) : (
                      <Link href="/softwares-readymade" onClick={() => setMobileOpen(false)} className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-teal-600/20 text-teal-400 font-bold"><ShoppingCart size={20} /> Buy Softwares</Link>
                    )}
                    <button onClick={handleLogoutClick} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl bg-red-600/10 text-red-400 font-bold border border-red-500/20"><LogOut size={20} /> Logout</button>
                 </div>
              ) : (
                <button onClick={() => { router.push("/auth/login"); setMobileOpen(false); }} className="w-full py-4 bg-linear-to-r from-blue-600 to-teal-400 rounded-2xl font-bold text-white flex items-center justify-center gap-3">
                  <Sparkles size={18} /> Get Started Now
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}