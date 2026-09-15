import React, { useState } from 'react';
import {
  Bus,
  ShieldCheck,
  Lock,
  Mail,
  User,
  Building,
  CheckCircle2,
  MapPin,
  ArrowRight,
  Eye,
  EyeOff,
  Radio,
  Activity,
  ChevronRight,
} from 'lucide-react';

export type AuthMode = 'login' | 'signup';

interface AuthPageProps {
  mode: AuthMode;
  onModeChange: (mode: AuthMode) => void;
  onLogin: (email: string, password: string) => void;
  onSignup: (payload: { fullName: string; email: string; agency: string; role: string; password: string }) => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({
  mode,
  onModeChange,
  onLogin,
  onSignup,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    email: 'authority@urbannex.ai',
    agency: 'Coimbatore Municipal Mobility Desk',
    role: 'Command Authority',
    password: 'secure123',
  });

  const isLogin = mode === 'login';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isLogin) {
      onLogin(form.email, form.password);
      return;
    }

    onSignup(form);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-900 flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(37,99,235,0.45),transparent_25%),radial-gradient(circle_at_35%_85%,rgba(16,185,129,0.32),transparent_22%),linear-gradient(120deg,#020617,#0f172a)]" />

      <div className="relative w-full max-w-6xl min-h-[680px] grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] bg-white/95 backdrop-blur-sm shadow-2xl border border-white/10 rounded-[2rem] overflow-hidden">
        {/* Left brand panel */}
        <section className="relative hidden lg:flex flex-col justify-between bg-slate-950 text-white p-10">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />
          <div className="absolute -left-16 bottom-0 h-80 w-80 rounded-full bg-emerald-400/30 blur-3xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-blue-500 flex items-center justify-center shadow-lg">
                <Bus className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-black uppercase tracking-[0.2em] text-blue-200">UrbanNex AI</div>
                <div className="text-xs font-semibold text-slate-300">City Intelligence Network</div>
              </div>
            </div>
          </div>

          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-300/40 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-[0.16em]">
                <Radio className="w-3.5 h-3.5" />
                Live Operations Grid
              </div>

              <div>
                <h1 className="text-5xl font-black tracking-tight leading-none">
                  Control
                  <span className="block text-blue-300">Mobility</span>
                </h1>
              </div>

              <p className="text-sm text-slate-300 leading-7 max-w-md">
                Real-time public transit intelligence for route safety, fleet awareness, and municipal AI-assisted incident response.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/6 border border-white/10 rounded-2xl p-4 backdrop-blur">
                <div className="flex items-center justify-between">
                  <Activity className="w-5 h-5 text-emerald-300" />
                  <span className="text-[10px] font-bold uppercase text-emerald-300">Online</span>
                </div>
                <div className="mt-5 text-3xl font-black">12</div>
                <div className="text-[11px] text-slate-400">Active Transit Sensors</div>
              </div>
              <div className="bg-white/6 border border-white/10 rounded-2xl p-4 backdrop-blur">
                <div className="flex items-center justify-between">
                  <ShieldCheck className="w-5 h-5 text-blue-300" />
                  <span className="text-[10px] font-bold uppercase text-blue-300">Secure</span>
                </div>
                <div className="mt-5 text-3xl font-black">98.7%</div>
                <div className="text-[11px] text-slate-400">Network Integrity</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-blue-300" />
                Coimbatore Pilot Corridor
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Radio className="w-4 h-4 text-emerald-300" />
                Edge AI Detection Stream
              </div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/10 pt-5">
            <span>UrbanNex AI // 2026</span>
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Systems Nominal
            </span>
          </div>
        </section>

        {/* Right auth form panel */}
        <section className="relative flex items-center justify-center p-8 md:p-12">
          <div className="absolute right-8 top-8 h-20 w-20 rounded-full bg-blue-50 border border-blue-100 animate-pulse" />
          <div className="w-full max-w-md">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-700">
                  {isLogin ? 'Operations Access' : 'Create Account'}
                </div>
                <h2 className="mt-2 text-3xl font-black text-slate-900">
                  {isLogin ? 'Welcome back' : 'Create command profile'}
                </h2>
              </div>
              <div className="w-12 h-12 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
            </div>

            <div className="mt-6 flex rounded-2xl border border-slate-200 bg-slate-50 p-1">
              <button
                onClick={() => onModeChange('login')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-black transition-all ${
                  isLogin ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-white'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => onModeChange('signup')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-black transition-all ${
                  !isLogin ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-white'
                }`}
              >
                Sign Up
              </button>
            </div>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-wide text-slate-500">
                    Full name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      required
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      className="w-full pl-10 pr-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
                      placeholder="Command authority name"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-wide text-slate-500">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full pl-10 pr-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
                    placeholder="authority@urbannex.ai"
                  />
                </div>
              </div>

              {!isLogin && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-wide text-slate-500">
                      Agency
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        required
                        value={form.agency}
                        onChange={(e) => setForm({ ...form, agency: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
                        placeholder="Municipal desk" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black uppercase tracking-wide text-slate-500">
                      Role
                    </label>
                    <div className="relative">
                      <ShieldCheck className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <select
                        value={form.role}
                        onChange={(e) => setForm({ ...form, role: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white text-slate-700"
                      >
                        <option>Command Authority</option>
                        <option>Route Operations Lead</option>
                        <option>Field Response Manager</option>
                        <option>Data Steward</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-[11px] font-black uppercase tracking-wide text-slate-500">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="w-full pl-10 pr-10 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-slate-500 hover:text-slate-700"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-[11px] font-bold text-slate-500">
                  <input type="checkbox" className="accent-blue-600" />
                  Remember me
                </label>

                {isLogin && (
                  <button type="button" className="text-[11px] font-black text-blue-600 hover:text-blue-700">
                    Forgot password?
                  </button>
                )}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm shadow-lg transition-all hover:shadow-xl"
              >
                {isLogin ? 'Enter Command Center' : 'Create Secure Account'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-5 text-center text-[11px] text-slate-500">
              {isLogin ? 'Need a pilot access account?' : 'Already onboarded?'}
              <button
                type="button"
                onClick={() => onModeChange(isLogin ? 'signup' : 'login')}
                className="ml-2 font-black text-blue-600 hover:text-blue-700"
              >
                {isLogin ? 'Request access' : 'Login here'}
              </button>
            </div>

            <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-[11px] font-black text-slate-700 uppercase tracking-wide">
                    Pilot system status
                  </span>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">
                  Online
                </span>
              </div>
              <div className="mt-3 flex items-center gap-5 text-[10px] font-bold text-slate-500">
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" />WS Live</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />AI Model Ready</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" />3 Routes Synced</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
