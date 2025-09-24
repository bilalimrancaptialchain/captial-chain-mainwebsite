"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MetaTraderPage = () => {

  return (
    <div className="min-h-screen bg-[#000F1E]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00E0E0] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#16B3B3] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-[#00E0E0] rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                <span className="text-[#00E0E0]">MetaTrader</span>
                <br />
                Partnership
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Experience professional trading with MetaTrader 5, the world&apos;s most advanced trading platform, 
                now integrated with Capital Chain&apos;s cutting-edge technology.
              </p>
              <div className="flex justify-start">
                <button className="w-full sm:w-auto bg-gradient-to-r from-[#00E0E0] to-[#10B981] text-black font-medium px-8 py-4 rounded-lg text-lg hover:drop-shadow-[0_0_10px_rgba(255,215,0,0.5)] transition-all hover:inset-shadow-button-home duration-200">
                  Start Trading Now
                </button>
              </div>
            </motion.div>

            {/* Right Content - MetaTrader Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 shadow-2xl border border-[#00E0E0]/20">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#00E0E0] rounded-lg flex items-center justify-center">
                      <span className="text-[#000F1E] font-bold text-sm">MT</span>
                    </div>
                    <span className="text-white font-semibold">MetaTrader 5</span>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-[#000F1E] rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400 text-sm">EUR/USD</span>
                      <span className="text-[#00E0E0] font-semibold">1.0845</span>
                    </div>
                    <div className="w-full h-1 bg-gray-700 rounded">
                      <div className="w-3/4 h-1 bg-gradient-to-r from-[#00E0E0] to-[#16B3B3] rounded"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#000F1E] rounded-lg p-3 text-center">
                      <div className="text-[#00E0E0] font-bold text-lg">+2.4%</div>
                      <div className="text-gray-400 text-xs">Today&apos;s P&L</div>
                    </div>
                    <div className="bg-[#000F1E] rounded-lg p-3 text-center">
                      <div className="text-[#00E0E0] font-bold text-lg">$50K</div>
                      <div className="text-gray-400 text-xs">Account Balance</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-gradient-to-b from-[#000F1E] to-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why <span className="text-[#00E0E0]">MetaTrader 5</span>?
            </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our strategic partnership with MetaQuotes brings you the most powerful and reliable 
                trading platform in the industry, enhanced with Capital Chain&apos;s innovative features.
              </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Lightning Fast Execution",
                description: "Execute trades in milliseconds with MetaTrader's advanced order processing technology."
              },
              {
                icon: "📊",
                title: "Advanced Analytics",
                description: "Access comprehensive market analysis tools and real-time data feeds for informed trading decisions."
              },
              {
                icon: "🔒",
                title: "Bank-Level Security",
                description: "Your funds and data are protected with enterprise-grade security measures and encryption."
              },
              {
                icon: "📱",
                title: "Multi-Platform Access",
                description: "Trade seamlessly across desktop, mobile, and web platforms with synchronized data."
              },
              {
                icon: "🤖",
                title: "Algorithmic Trading",
                description: "Create and deploy automated trading strategies with MQL5 programming language."
              },
              {
                icon: "🌍",
                title: "Global Market Access",
                description: "Trade forex, stocks, commodities, and cryptocurrencies from a single platform."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl p-6 border border-[#00E0E0]/20 hover:border-[#00E0E0]/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MetaTrader 5 Desktop & Mobile Section */}
      <section className="py-20 bg-gradient-to-b from-[#000F1E] to-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your <span className="text-[#00E0E0]">Trading Platform</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access MetaTrader 5 across all your devices with seamless synchronization and professional-grade tools.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Desktop Version */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-[#00E0E0]/20"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#00E0E0] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#000F1E] font-bold text-2xl">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">MetaTrader 5 Desktop</h3>
                <p className="text-[#00E0E0] font-semibold">Professional Trading Suite</p>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                The desktop version delivers professional-grade tools for comprehensive technical analysis, 
                advanced charting capabilities, and precise trade execution. Experience the full power of 
                MetaTrader 5 with an extensive suite of trading tools and indicators designed to elevate 
                your trading performance.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00E0E0] rounded-full"></div>
                  <span className="text-gray-300">Advanced technical analysis tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00E0E0] rounded-full"></div>
                  <span className="text-gray-300">Professional charting capabilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00E0E0] rounded-full"></div>
                  <span className="text-gray-300">Comprehensive trade execution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00E0E0] rounded-full"></div>
                  <span className="text-gray-300">80+ technical indicators</span>
                </div>
              </div>

              <a 
                href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.exe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-[#00E0E0] to-[#10B981] text-black font-semibold px-6 py-3 rounded-lg hover:drop-shadow-[0_0_10px_rgba(0,224,224,0.5)] transition-all duration-200 inline-block text-center"
              >
                Download Desktop Version
              </a>
            </motion.div>

            {/* Mobile Version */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-[#00E0E0]/20"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#00E0E0] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#000F1E] font-bold text-2xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">MetaTrader 5 Mobile</h3>
                <p className="text-[#00E0E0] font-semibold">Trade Anywhere, Anytime</p>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Perfect for traders on the go, the mobile app provides complete access to your trading 
                activities from anywhere in the world. Manage your positions, monitor markets, and execute 
                trades with the same professional tools available on desktop, optimized for mobile devices.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00E0E0] rounded-full"></div>
                  <span className="text-gray-300">24/7 market access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00E0E0] rounded-full"></div>
                  <span className="text-gray-300">Real-time trade management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00E0E0] rounded-full"></div>
                  <span className="text-gray-300">Multi-asset trading support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#00E0E0] rounded-full"></div>
                  <span className="text-gray-300">Intuitive mobile interface</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="https://apps.apple.com/app/metatrader-5/id413251709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#00E0E0] to-[#10B981] text-black font-semibold px-4 py-3 rounded-lg hover:drop-shadow-[0_0_10px_rgba(0,224,224,0.5)] transition-all duration-200 text-center"
                >
                  iOS Download
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#00E0E0] to-[#10B981] text-black font-semibold px-4 py-3 rounded-lg hover:drop-shadow-[0_0_10px_rgba(0,224,224,0.5)] transition-all duration-200 text-center"
                >
                  Android Download
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose MetaTrader 5 Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose <span className="text-[#00E0E0]">MetaTrader 5</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                MetaTrader 5 represents more than just a trading platform—it&apos;s a complete ecosystem 
                designed for today&apos;s sophisticated traders. Whether you&apos;re a retail trader or 
                professional, MT5 delivers all the essential tools for market analysis, trade management, 
                and automated strategy execution.
              </p>
              
              <div className="space-y-6">
                {[
                  "Multi-platform accessibility across desktop, web, and mobile",
                  "Comprehensive market analysis and research tools",
                  "Advanced risk management and position monitoring",
                  "Professional-grade execution and order management",
                  "Extensive customization and automation capabilities",
                  "Global market access with 24/7 trading support"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#00E0E0] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-[#000F1E] text-sm">✓</span>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-[#00E0E0]/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Capital Chain + MetaTrader 5</h3>
                  <p className="text-[#00E0E0]">Powered by Advanced Technology</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-[#000F1E] rounded-lg">
                    <span className="text-gray-300">Execution Speed</span>
                    <span className="text-[#00E0E0] font-semibold">&lt; 1ms</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#000F1E] rounded-lg">
                    <span className="text-gray-300">Uptime</span>
                    <span className="text-[#00E0E0] font-semibold">99.9%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#000F1E] rounded-lg">
                    <span className="text-gray-300">Markets</span>
                    <span className="text-[#00E0E0] font-semibold">1000+</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#000F1E] rounded-lg">
                    <span className="text-gray-300">Languages</span>
                    <span className="text-[#00E0E0] font-semibold">40+</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is MetaTrader 5 Section */}
      <section className="py-20 bg-gradient-to-b from-[#000F1E] to-[#0a1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What is <span className="text-[#00E0E0]">MetaTrader 5</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              MetaTrader 5 (MT5) is the industry-leading multi-asset trading platform designed for 
              professional online trading across Forex, Stocks, Commodities, and Futures markets. 
              Built for serious traders who demand excellence and precision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Multi-Asset Trading",
                description: "Unlike previous versions, MT5 supports diverse asset classes including forex, stocks, commodities, indices, and futures, enabling comprehensive portfolio diversification.",
                icon: "🌐"
              },
              {
                title: "Advanced Trading Tools",
                description: "Access 38 technical indicators, 44 drawing tools, 21 timeframes, and a built-in economic calendar for comprehensive market analysis and informed decision-making.",
                icon: "📊"
              },
              {
                title: "Diverse Order Types",
                description: "Support for more order types than MT4, including stop limit orders, providing flexibility for sophisticated trading strategies and enhanced risk management.",
                icon: "⚡"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl p-6 border border-[#00E0E0]/20 hover:border-[#00E0E0]/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Key Features of <span className="text-[#00E0E0]">MetaTrader 5</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the powerful features that make MetaTrader 5 the preferred choice for professional traders worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "High Performance & Speed",
                description: "Optimized for maximum performance with lightning-fast trade execution and superior data processing capabilities.",
                icon: "⚡"
              },
              {
                title: "Market Depth (DOM)",
                description: "Full access to market depth with real-time display of bid and ask prices across multiple price levels.",
                icon: "📈"
              },
              {
                title: "Built-in Strategy Tester",
                description: "Test and optimize automated trading strategies using historical data with exceptional accuracy and reliability.",
                icon: "🤖"
              },
              {
                title: "Hedging & Netting Systems",
                description: "Support for both hedging (multiple positions) and netting (single position) trading systems for maximum flexibility.",
                icon: "🔄"
              },
              {
                title: "Integrated Alerts",
                description: "Set custom alerts for price changes and trading conditions with email and in-app notifications.",
                icon: "🔔"
              },
              {
                title: "One-Click Trading",
                description: "Execute trades instantly with one-click functionality directly from charts or market depth windows.",
                icon: "👆"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl p-6 border border-[#00E0E0]/20 hover:border-[#00E0E0]/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background with pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#000F1E] via-[#0a1628] to-[#000F1E]">
          <div className="absolute inset-0 bg-[url('/images/home/bg-trading-challenge.webp')] opacity-10 bg-no-repeat bg-center bg-cover"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#00E0E0]/5 to-transparent"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00E0E0] rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#16B3B3] rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-20 delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00E0E0] rounded-full mix-blend-multiply filter blur-xl animate-pulse opacity-10 delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Ready to Experience 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00E0E0] to-[#16B3B3]">
                  Professional Trading?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Join thousands of traders who trust Capital Chain and MetaTrader 5 for their trading success.
              </p>
            </div>

            <div className="flex justify-center pt-4">
              <motion.button 
                className="group relative w-full sm:w-auto bg-gradient-to-r from-[#00E0E0] to-[#10B981] text-black font-semibold px-10 py-5 rounded-xl text-lg hover:drop-shadow-[0_0_20px_rgba(0,224,224,0.6)] transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Started Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00E0E0] to-[#10B981] rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              </motion.button>
            </div>

            {/* Additional info */}
            <div className="pt-8 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00E0E0] rounded-full"></div>
                <span>Free Download</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00E0E0] rounded-full"></div>
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00E0E0] rounded-full"></div>
                <span>Instant Setup</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MetaTraderPage;
