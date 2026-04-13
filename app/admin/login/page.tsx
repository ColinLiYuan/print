'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // TODO: 实现实际登录逻辑
      // const response = await loginService.login(email, password);
      // localStorage.setItem('admin-token', response.token);
      // router.push('/admin/dashboard');
      
      // 临时直接跳转（后续需要实现真实认证）
      setTimeout(() => {
        router.push('/admin/dashboard');
      }, 1000);
    } catch (err) {
      setError('邮箱或密码错误');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#00F2FE]">HoloVerify Admin</h1>
          <p className="text-gray-400 mt-2">管理后台登录</p>
        </div>

        {/* 登录表单 */}
        <div className="bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-white/10 rounded-2xl p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                邮箱地址
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-[#E5E5E5] placeholder-gray-500 focus:ring-2 focus:ring-[#00F2FE] focus:border-transparent"
                placeholder="admin@holoverify.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                密码
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-[#E5E5E5] placeholder-gray-500 focus:ring-2 focus:ring-[#00F2FE] focus:border-transparent"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-[#00F2FE] to-[#00C4CC] text-[#050505] rounded-lg font-bold hover:shadow-[0_0_30px_rgba(0,242,254,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? '登录中...' : '登录'}
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            默认密码请联系系统管理员
          </p>
        </div>

        {/* 返回前台 */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="text-[#00F2FE] hover:underline text-sm"
          >
            ← 返回网站前台
          </a>
        </div>
      </div>
    </div>
  );
}
