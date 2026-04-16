import React from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, Github } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-[40px] shadow-2xl shadow-indigo-100 p-10 border border-gray-100">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-200">
            <Lock className="text-white" size={28} />
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-500 font-medium">Please enter your details to sign in.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-2xl text-sm font-bold border border-red-100 animate-shake">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="email" 
                required
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-indigo-100 transition-all outline-none font-medium text-gray-900" 
                placeholder="name@college.edu" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="password" 
                required
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-4 focus:ring-indigo-100 transition-all outline-none font-medium text-gray-900" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between py-2">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="w-5 h-5 rounded-lg border-gray-300 text-indigo-600 focus:ring-indigo-500" />
              <span className="text-sm font-bold text-gray-500 group-hover:text-gray-700">Remember me</span>
            </label>
            <a href="#" className="text-sm font-bold text-indigo-600 hover:text-indigo-700">Forgot password?</a>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
          >
            {loading ? (
              <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <LogIn size={20} />
                <span>Sign In</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-10 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase tracking-widest font-black">
            <span className="bg-white px-4 text-gray-400">Or continue with</span>
          </div>
        </div>

        <div className="mt-8">
          <button className="w-full flex items-center justify-center gap-3 py-4 bg-white border-2 border-gray-50 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 transition-all">
            <Github size={20} />
            <span>Campus SSO</span>
          </button>
        </div>

        <p className="mt-10 text-center text-sm font-bold text-gray-500">
          Don't have an account? <a href="#" className="text-indigo-600 hover:text-indigo-700">Request access</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
