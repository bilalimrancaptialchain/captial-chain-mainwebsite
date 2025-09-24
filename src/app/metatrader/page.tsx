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

      {/* Integration Section */}
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
                Seamless <span className="text-[#00E0E0]">Integration</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Capital Chain&apos;s advanced technology seamlessly integrates with MetaTrader 5, 
                providing you with enhanced features and capabilities that go beyond traditional trading platforms.
              </p>
              
              <div className="space-y-6">
                {[
                  "Real-time risk management and position monitoring",
                  "Advanced order types and execution algorithms",
                  "Integrated news feeds and market sentiment analysis",
                  "Custom indicators and trading tools",
                  "Automated compliance and reporting",
                  "24/7 technical support and maintenance"
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
