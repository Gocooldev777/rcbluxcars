import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle email login here
        console.log('Login with email:', email);
    };

    const handleGoogleLogin = () => {
        // Handle Google login here
        console.log('Login with Google');
    };

    const handleAppleLogin = () => {
        // Handle Apple login here
        console.log('Login with Apple');
    };

    return (
        <div className="min-h-[calc(100vh-72px)] mt-[72px] bg-[#0a0c0f] flex items-center justify-center p-4">
            <div className="bg-[#0a0c0f] rounded-xl w-full max-w-md overflow-hidden border border-white/10">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-white/10">
                    <h2 className="text-2xl font-bold text-white">LOG IN</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        ✕
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    <p className="text-gray-400">
                        Enter your email to log in to your account.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 bg-[#1a1f25] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#B8860B]"
                                placeholder="Your email address"
                                required
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full bg-[#B8860B] text-black py-2 rounded-lg font-semibold hover:bg-[#B8860B]/90 transition-colors"
                        >
                            Continue with email
                        </motion.button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-[#0a0c0f] text-gray-500">or</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <button
                            onClick={handleGoogleLogin}
                            className="w-full flex items-center justify-center px-4 py-2 border border-white/10 rounded-lg text-white hover:bg-white/5 transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            Continue with Google
                        </button>

                        <button
                            onClick={handleAppleLogin}
                            className="w-full flex items-center justify-center px-4 py-2 border border-white/10 rounded-lg text-white hover:bg-white/5 transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                            Continue with Apple
                        </button>
                    </div>

                    <div className="text-center">
                        <p className="text-sm text-gray-400">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-[#B8860B] hover:underline">
                                Register here
                            </Link>
                        </p>
                    </div>

                    <div className="text-xs text-gray-500 text-center">
                        This site is protected by reCAPTCHA and the Google{' '}
                        <a href="#" className="text-[#B8860B] hover:underline">Privacy Policy</a> and{' '}
                        <a href="#" className="text-[#B8860B] hover:underline">Terms of Service</a> apply.
                    </div>
                </div>
            </div>
        </div>
    );
} 