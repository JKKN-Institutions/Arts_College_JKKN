'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { siteConfig } from '@/lib/site-config';
import {
  GraduationCap,
  Eye,
  EyeOff,
  Loader2,
  BookOpen,
  Users,
  Trophy,
  CalendarDays,
} from 'lucide-react';

const features = [
  { icon: BookOpen, label: 'Content Management' },
  { icon: CalendarDays, label: 'Event Publishing' },
  { icon: Users, label: 'Faculty Profiles' },
  { icon: Trophy, label: 'Student Achievements' },
];

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const supabase = createClient();
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({ email, password });
      if (authError) {
        setError(authError.message);
      } else {
        const userId = authData.user?.id;
        const { data: profile } = await supabase
          .from('staff_profiles')
          .select('college_id, role')
          .eq('id', userId)
          .single();

        const isCrossCollegeRole = profile?.role === 'seo' || profile?.role === 'super_admin';
        if (!isCrossCollegeRole && profile?.college_id !== process.env.NEXT_PUBLIC_COLLEGE_ID) {
          await supabase.auth.signOut({ scope: 'local' });
          setError("You are not authorized to access this college's admin panel.");
        } else {
          window.location.href = '/admin/dashboard';
        }
      }
    } catch {
      setError('Network error — please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Panel — Branding */}
      <div className="hidden lg:flex lg:w-[55%] bg-gradient-to-br from-[#002309] via-[#004d28] to-[#0b6d41] relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="relative z-10 flex flex-col justify-between w-full p-10 lg:p-14">
          {/* Top — Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-semibold text-lg">{siteConfig.shortName}</span>
          </div>

          {/* Center — Hero content */}
          <div className="flex-1 flex flex-col justify-center max-w-md">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-8 border border-white/10">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl xl:text-4xl font-bold text-white leading-tight mb-4">
              College Management<br />System
            </h1>
            <p className="text-white/60 text-base leading-relaxed mb-10">
              Manage content, events, faculty, and notices — all in one place for {siteConfig.name}.
            </p>

            {/* Feature pills */}
            <div className="grid grid-cols-2 gap-3">
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3"
                >
                  <Icon className="w-4 h-4 text-[#ffde59] flex-shrink-0" />
                  <span className="text-white/80 text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom — Copyright */}
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right Panel — Login Form */}
      <div className="flex-1 flex items-center justify-center bg-white px-6 py-10">
        <div className="w-full max-w-md">
          {/* Mobile logo — shown only on small screens */}
          <div className="flex flex-col items-center mb-8 lg:hidden">
            <div className="w-14 h-14 bg-[#0b6d41] rounded-2xl flex items-center justify-center mb-4">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <p className="text-sm text-gray-400">{siteConfig.name}</p>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#002309]">Welcome Back</h2>
            <p className="text-gray-500 text-sm mt-1.5">Sign in to access your admin dashboard</p>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm mb-6">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="admin@jkkn.ac.in"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0b6d41]/20 focus:border-[#0b6d41] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0b6d41]/20 focus:border-[#0b6d41] transition pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#0b6d41] hover:bg-[#004d28] text-white font-semibold py-3 rounded-xl text-sm transition disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <p className="text-center text-xs text-gray-400 mt-8">
            Access restricted to authorized staff only.
          </p>
        </div>
      </div>
    </div>
  );
}
