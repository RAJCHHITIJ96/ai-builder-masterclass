import React, { useState, useEffect } from 'react';
import { Clock, Check, ArrowRight, Play, Sparkles, Zap, Target, Plus, Users, TrendingUp, Shield, Star, AlertCircle, Timer, BarChart, Code, Lightbulb, Calendar, DollarSign, Award, ChevronRight, X, CheckCircle } from 'lucide-react';

export default function LandingPage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 45
  });
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [seatsLeft, setSeatsLeft] = useState(37);
  const [recentJoiners, setRecentJoiners] = useState([
    { name: "Rahul M.", city: "Mumbai", time: "2 min ago" },
    { name: "Priya S.", city: "Bangalore", time: "5 min ago" },
    { name: "Amit K.", city: "Delhi", time: "8 min ago" }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    // Simulate seats being taken
    const seatTimer = setInterval(() => {
      setSeatsLeft(prev => Math.max(1, prev - 1));
    }, 30000); // Every 30 seconds

    // Simulate new joiners
    const joinerTimer = setInterval(() => {
      const names = ["Suresh R.", "Neha P.", "Vikram L.", "Anjali M.", "Rohit G."];
      const cities = ["Pune", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad"];
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];

      setRecentJoiners(prev => [
        { name: randomName, city: randomCity, time: "Just now" },
        ...prev.slice(0, 2)
      ]);
    }, 45000);

    return () => {
      clearInterval(timer);
      clearInterval(seatTimer);
      clearInterval(joinerTimer);
    };
  }, []);

  const handleSubmit = async () => {
    if (!name || !email) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setShowPopup(true);
    setSeatsLeft(prev => Math.max(0, prev - 1));
    setIsSubmitting(false);
    setName('');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm font-medium">
          <AlertCircle className="w-4 h-4" />
          <span>🔥 {seatsLeft} seats left at ₹99 - Price increases to ₹299 tonight at midnight</span>
          <Timer className="w-4 h-4 animate-pulse" />
        </div>
      </div>

      {/* Minimal Header */}
      <header className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">AB</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">AI Builder</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm">
              <Users className="w-4 h-4 text-green-500" />
              <span className="text-gray-600">{100 - seatsLeft} builders joined</span>
            </div>
            <button
              onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
              className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              Join Masterclass
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Pattern Interrupt */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center relative">
        {/* Live Badge */}
        <div className="absolute top-0 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-pulse">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          LIVE MASTERCLASS
        </div>

        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-4 h-4 text-purple-500" />
          <span className="text-sm font-medium text-purple-700">Your Notes App is a Graveyard of Millions</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
          Your Notes App Is A
          <br />
          <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">GRAVEYARD</span>
          <br />
          <span className="text-gray-400">Of Million-Dollar Ideas</span>
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Stop "thinking" about your ideas and let AI build them. Join Abhi Deep's raw, uncensored masterclass on the AI Agents that have made traditional coding obsolete.
        </p>

        {/* Social Proof Bar */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-200">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                <Timer className="w-6 h-6 text-red-500" />
                90min
              </div>
              <div className="text-sm text-gray-500 mt-1">Live Session</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                <Users className="w-6 h-6 text-orange-500" />
                {seatsLeft}
              </div>
              <div className="text-sm text-gray-500 mt-1">Seats Left</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-green-500" />
                ₹99
              </div>
              <div className="text-sm text-gray-500 mt-1">Limited Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-500" />
                548%
              </div>
              <div className="text-sm text-gray-500 mt-1">ROI Students</div>
            </div>
          </div>
        </div>

        {/* Timer - Enhanced */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl px-8 py-6 mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <p className="text-sm font-bold text-red-600">PRICE INCREASES IN</p>
          </div>
          <div className="flex gap-4 justify-center">
            <div className="text-center">
              <div className="bg-white rounded-lg px-4 py-3 shadow-sm border border-red-200">
                <div className="text-3xl font-bold text-gray-900 tabular-nums">{String(timeLeft.hours).padStart(2, '0')}</div>
              </div>
              <div className="text-xs text-gray-500 mt-1 font-medium">hours</div>
            </div>
            <div className="text-3xl font-bold text-gray-400 flex items-center">:</div>
            <div className="text-center">
              <div className="bg-white rounded-lg px-4 py-3 shadow-sm border border-red-200">
                <div className="text-3xl font-bold text-gray-900 tabular-nums">{String(timeLeft.minutes).padStart(2, '0')}</div>
              </div>
              <div className="text-xs text-gray-500 mt-1 font-medium">mins</div>
            </div>
            <div className="text-3xl font-bold text-gray-400 flex items-center">:</div>
            <div className="text-center">
              <div className="bg-white rounded-lg px-4 py-3 shadow-sm border border-red-200">
                <div className="text-3xl font-bold text-gray-900 tabular-nums">{String(timeLeft.seconds).padStart(2, '0')}</div>
              </div>
              <div className="text-xs text-gray-500 mt-1 font-medium">secs</div>
            </div>
          </div>
        </div>

        {/* CTA - Enhanced */}
        <div className="flex flex-col items-center gap-4">
          <button
            onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
            className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
          >
            Reserve Your Seat for ₹99
            <ArrowRight className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Shield className="w-4 h-4" />
              30-day guarantee
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              Secure payment
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              4.9/5 rating
            </span>
          </div>
        </div>

        {/* Recent Joiners */}
        <div className="mt-8 bg-gray-50 rounded-lg p-3 max-w-md mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white"></div>
              ))}
            </div>
            <span className="text-xs">
              {recentJoiners[0]?.name} from {recentJoiners[0]?.city} joined {recentJoiners[0]?.time}
            </span>
          </div>
        </div>
      </section>

      {/* Pattern Interrupt Section */}
      <section className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Game Has Changed Forever</h2>
            <p className="text-xl text-gray-600">English is now the new code. Here's the proof:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border-2 border-red-200 relative">
              <div className="absolute top-4 right-4 bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                2023 Way
              </div>
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <X className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The Old Way</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Learn React: 6 months",
                  "Build project: 3 months",
                  "Debug nightmares: 2 months",
                  "Setup auth/payments: 1 month",
                  "Maybe launch",
                  "Total: 12+ months"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-600">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 relative">
              <div className="absolute top-4 right-4 bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-bold">
                2026 Way
              </div>
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">The AI Way</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Learn AI tools: 2 weeks",
                  "Build with AI: 2 weeks",
                  "AI fixes bugs: instantly",
                  "AI handles integrations: 1 day",
                  "Definitely launch",
                  "Total: 2 weeks"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-600">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section - English to App Workflow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The English-to-App Workflow</h2>
            <p className="text-xl text-gray-600">Your ideas are now just one conversation away from reality</p>
          </div>

          {/* Tool Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {/* timetoShip */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-all text-center group hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl group-hover:scale-110 transition-transform">
                <svg width="64" height="16" viewBox="0 0 37 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                  <path d="M2.272 5.488C2.29867 5.50933 2.32267 5.528 2.344 5.544C2.37067 5.56 2.39733 5.576 2.424 5.592C2.328 5.816 2.19733 6.00267 2.032 6.152C1.84533 6.328 1.64267 6.416 1.424 6.416C1.136 6.416 0.917334 6.312 0.768001 6.104C0.725334 6.02933 0.690667 5.944 0.664001 5.848C0.637334 5.752 0.624001 5.64533 0.624001 5.528V2.88H7.45058e-07V2.624C0.288001 2.624 0.501334 2.51467 0.640001 2.296C0.794667 2.04533 0.872001 1.688 0.872001 1.224H1.112V2.568H2.16V2.88H1.112V5.584C1.112 5.86667 1.26133 6.008 1.56 6.008C1.8 6.008 2.03733 5.83467 2.272 5.488ZM4.02219 0.984001C4.02219 1.112 3.97952 1.21867 3.89419 1.304C3.80885 1.38933 3.70219 1.432 3.57419 1.432C3.45685 1.432 3.35819 1.38933 3.27819 1.304C3.20352 1.21867 3.16619 1.112 3.16619 0.984001C3.16619 0.856001 3.20619 0.749334 3.28619 0.664001C3.36619 0.578668 3.46219 0.536001 3.57419 0.536001C3.70219 0.536001 3.80885 0.578668 3.89419 0.664001C3.97952 0.749334 4.02219 0.856001 4.02219 0.984001ZM4.39819 6.28H2.90219V6.016C3.12085 6.016 3.26219 5.984 3.32619 5.92C3.37952 5.872 3.40619 5.784 3.40619 5.656V3.352C3.40619 3.23467 3.38219 3.15467 3.33419 3.112C3.27552 3.064 3.13419 3.04 2.91019 3.04L2.87819 2.864L3.89419 2.48V5.656C3.89419 5.80533 3.91819 5.89867 3.96619 5.936C4.03552 5.98933 4.17952 6.016 4.39819 6.016V6.28ZM10.9018 6.272H9.30981V6.016C9.50715 6.016 9.65115 5.98667 9.74181 5.928C9.80581 5.864 9.83781 5.76267 9.83781 5.624V3.512C9.83781 3.112 9.61648 2.912 9.17381 2.912C8.83781 2.912 8.47515 3.072 8.08581 3.392V5.624C8.08581 5.768 8.12048 5.86667 8.18981 5.92C8.24315 5.94667 8.30448 5.968 8.37381 5.984C8.44315 6.00533 8.52315 6.016 8.61381 6.016V6.272H7.06981V6.016C7.26181 6.016 7.40315 5.98667 7.49381 5.928C7.55781 5.87467 7.58981 5.77333 7.58981 5.624V3.432C7.58981 3.09067 7.37915 2.92 6.95781 2.92C6.57915 2.92 6.20315 3.088 5.82981 3.424V5.624C5.82981 5.77867 5.86448 5.88 5.93381 5.928C6.04048 5.98667 6.19248 6.016 6.38981 6.016V6.272H4.77381V6.016C5.01915 6.016 5.18715 5.97067 5.27781 5.88C5.32048 5.82133 5.34181 5.75467 5.34181 5.68V3.384C5.34181 3.29867 5.32848 3.232 5.30181 3.184C5.28048 3.136 5.22981 3.09867 5.14981 3.072C5.10715 3.06133 5.05915 3.05333 5.00581 3.048C4.95248 3.03733 4.88848 3.032 4.81381 3.032C4.80848 3.00533 4.80315 2.97867 4.79781 2.952C4.79248 2.92 4.78715 2.89067 4.78181 2.864C4.95781 2.80533 5.13381 2.74667 5.30981 2.688C5.48581 2.62933 5.65915 2.57067 5.82981 2.512V3.08C6.28848 2.70133 6.74715 2.512 7.20581 2.512C7.65381 2.512 7.93915 2.70933 8.06181 3.104C8.52048 2.70933 8.97915 2.512 9.43781 2.512C9.78981 2.512 10.0378 2.616 10.1818 2.824C10.2831 2.97333 10.3338 3.17333 10.3338 3.424V5.624C10.3338 5.768 10.3685 5.86667 10.4378 5.92C10.4805 5.94667 10.5418 5.968 10.6218 5.984C10.7018 6.00533 10.7951 6.016 10.9018 6.016V6.272ZM14.5795 5.312C14.6062 5.33333 14.6328 5.35467 14.6595 5.376C14.6915 5.39733 14.7208 5.41867 14.7475 5.44C14.6195 5.632 14.4782 5.792 14.3235 5.92C14.1688 6.048 14.0035 6.15467 13.8275 6.24C13.5875 6.35733 13.3288 6.416 13.0515 6.416C12.5235 6.416 12.0915 6.248 11.7555 5.912C11.3982 5.55467 11.2195 5.072 11.2195 4.464C11.2195 3.87733 11.3902 3.40533 11.7315 3.048C12.0675 2.68 12.4942 2.496 13.0115 2.496C13.5288 2.496 13.9368 2.64533 14.2355 2.944C14.5555 3.248 14.7155 3.688 14.7155 4.264C14.2195 4.28 13.7315 4.29867 13.2515 4.32C12.7715 4.336 12.2808 4.352 11.7795 4.368C11.7795 4.38933 11.7768 4.41067 11.7715 4.432C11.7715 4.448 11.7715 4.46667 11.7715 4.488C11.7715 4.712 11.8008 4.91467 11.8595 5.096C11.9235 5.27733 12.0142 5.44 12.1315 5.584C12.3768 5.904 12.7208 6.064 13.1635 6.064C13.3982 6.064 13.6435 6.00267 13.8995 5.88C14.0168 5.81067 14.1315 5.73067 14.2435 5.64C14.3608 5.544 14.4728 5.43467 14.5795 5.312ZM11.7955 4.064C12.1955 4.05333 12.5902 4.04 12.9795 4.024C13.3688 4.008 13.7635 3.99467 14.1635 3.984C14.1582 3.632 14.0488 3.34933 13.8355 3.136C13.6168 2.90133 13.3422 2.784 13.0115 2.784C12.6915 2.784 12.4115 2.912 12.1715 3.168C11.9475 3.40267 11.8222 3.70133 11.7955 4.064ZM17.3892 5.488C17.4159 5.50933 17.4399 5.528 17.4612 5.544C17.4879 5.56 17.5145 5.576 17.5412 5.592C17.4452 5.816 17.3145 6.00267 17.1492 6.152C16.9625 6.328 16.7599 6.416 16.5412 6.416C16.2532 6.416 16.0345 6.312 15.8852 6.104C15.8425 6.02933 15.8079 5.944 15.7812 5.848C15.7545 5.752 15.7412 5.64533 15.7412 5.528V2.88H15.1172V2.624C15.4052 2.624 15.6185 2.51467 15.7572 2.296C15.9119 2.04533 15.9892 1.688 15.9892 1.224H16.2292V2.568H17.2772V2.88H16.2292V5.584C16.2292 5.86667 16.3785 6.008 16.6772 6.008C16.9172 6.008 17.1545 5.83467 17.3892 5.488ZM21.4354 4.456C21.4354 5.05333 21.2647 5.53067 20.9234 5.888C20.598 6.24533 20.182 6.424 19.6754 6.424C19.1634 6.424 18.7447 6.24533 18.4194 5.888C18.078 5.53067 17.9074 5.05333 17.9074 4.456C17.9074 3.85867 18.078 3.38133 18.4194 3.024C18.7447 2.66667 19.1634 2.488 19.6754 2.488C20.182 2.488 20.598 2.66667 20.9234 3.024C21.2647 3.38133 21.4354 3.85867 21.4354 4.456ZM20.8914 4.456C20.8914 3.96533 20.774 3.56267 20.5394 3.248C20.3207 2.93333 20.0327 2.776 19.6754 2.776C19.3234 2.776 19.03 2.93333 18.7954 3.248C18.566 3.56267 18.4514 3.96533 18.4514 4.456C18.4514 4.94133 18.5634 5.344 18.7874 5.664C19.0167 5.97333 19.3127 6.128 19.6754 6.128C20.022 6.128 20.31 5.97333 20.5394 5.664C20.774 5.34933 20.8914 4.94667 20.8914 4.456ZM24.0843 6.008C23.7003 6.008 23.3696 5.944 23.0923 5.816C22.8203 5.688 22.6096 5.504 22.4603 5.264C22.311 5.024 22.2336 4.73867 22.2283 4.408H22.9483C22.9483 4.70133 23.047 4.93333 23.2443 5.104C23.447 5.27467 23.727 5.36 24.0843 5.36C24.4203 5.36 24.6816 5.27733 24.8683 5.112C25.0603 4.94667 25.1563 4.71733 25.1563 4.424C25.1563 4.18933 25.0923 3.984 24.9643 3.808C24.8416 3.632 24.663 3.50933 24.4283 3.44L23.6363 3.192C23.2363 3.06933 22.927 2.864 22.7083 2.576C22.495 2.288 22.3883 1.94933 22.3883 1.56C22.3883 1.24533 22.4576 0.973335 22.5963 0.744001C22.7403 0.509335 22.9403 0.328001 23.1963 0.200001C23.4523 0.0666677 23.7536 9.53674e-07 24.1003 9.53674e-07C24.6123 9.53674e-07 25.023 0.144001 25.3323 0.432001C25.6416 0.714668 25.799 1.09333 25.8043 1.568H25.0843C25.0843 1.28 24.9963 1.056 24.8203 0.896001C24.6496 0.730668 24.407 0.648001 24.0923 0.648001C23.783 0.648001 23.5403 0.722668 23.3643 0.872001C23.1936 1.02133 23.1083 1.22933 23.1083 1.496C23.1083 1.736 23.1723 1.944 23.3003 2.12C23.4283 2.296 23.6123 2.42133 23.8523 2.496L24.6523 2.752C25.0416 2.87467 25.343 3.08267 25.5563 3.376C25.7696 3.66933 25.8763 4.01333 25.8763 4.408C25.8763 4.728 25.8016 5.008 25.6523 5.248C25.503 5.488 25.2923 5.67467 25.0203 5.808C24.7536 5.94133 24.4416 6.008 24.0843 6.008ZM30.5612 6.272H28.9772V6.008C29.1959 6.008 29.3505 5.97867 29.4412 5.92C29.5052 5.86667 29.5372 5.77067 29.5372 5.632V3.64C29.5372 3.16 29.2785 2.92 28.7612 2.92C28.3932 2.92 28.0145 3.07467 27.6252 3.384V5.632C27.6252 5.77067 27.6599 5.86667 27.7292 5.92C27.8199 5.97867 27.9692 6.008 28.1772 6.008V6.272H26.6092V6.008C26.8119 6.008 26.9585 5.97867 27.0492 5.92C27.1079 5.86133 27.1372 5.76533 27.1372 5.632V1.544C27.1372 1.39467 27.1105 1.296 27.0572 1.248C26.9985 1.19467 26.8572 1.168 26.6332 1.168C26.6279 1.14133 26.6225 1.11733 26.6172 1.096C26.6172 1.06933 26.6145 1.04267 26.6092 1.016C26.7799 0.946668 26.9479 0.880001 27.1132 0.816001C27.2839 0.746668 27.4545 0.677335 27.6252 0.608001V3.04C28.0839 2.67733 28.5239 2.496 28.9452 2.496C29.2972 2.496 29.5665 2.58667 29.7532 2.768C29.9345 2.95467 30.0252 3.21867 30.0252 3.56V5.632C30.0252 5.776 30.0545 5.872 30.1132 5.92C30.2199 5.97867 30.3692 6.008 30.5612 6.008V6.272ZM32.1159 0.984001C32.1159 1.112 32.0733 1.21867 31.9879 1.304C31.9026 1.38933 31.7959 1.432 31.6679 1.432C31.5506 1.432 31.4519 1.38933 31.3719 1.304C31.2973 1.21867 31.2599 1.112 31.2599 0.984001C31.2599 0.856001 31.2999 0.749334 31.3799 0.664001C31.4599 0.578668 31.5559 0.536001 31.6679 0.536001C31.7959 0.536001 31.9026 0.578668 31.9879 0.664001C32.0733 0.749334 32.1159 0.856001 32.1159 0.984001ZM32.4919 6.28H30.9959V6.016C31.2146 6.016 31.3559 5.984 31.4199 5.92C31.4733 5.872 31.4999 5.784 31.4999 5.656V3.352C31.4999 3.23467 31.4759 3.15467 31.4279 3.112C31.3693 3.064 31.2279 3.04 31.0039 3.04L30.9719 2.864L31.9879 2.48V5.656C31.9879 5.80533 32.0119 5.89867 32.0599 5.936C32.1293 5.98933 32.2733 6.016 32.4919 6.016V6.28ZM36.5476 4.424C36.5476 5.02133 36.3796 5.496 36.0436 5.848C35.7289 6.168 35.3449 6.328 34.8916 6.328C34.4382 6.328 34.0889 6.22133 33.8436 6.008V6.808C33.8436 6.94667 33.8809 7.048 33.9556 7.112C34.0462 7.18133 34.1796 7.216 34.3556 7.216V7.48H32.8356V7.216C33.0489 7.216 33.1929 7.18133 33.2676 7.112C33.3209 7.05867 33.3476 6.95733 33.3476 6.808V3.36C33.3476 3.33333 33.3422 3.29333 33.3316 3.24C33.3262 3.19733 33.3102 3.16267 33.2836 3.136C33.2302 3.08267 33.0916 3.056 32.8676 3.056C32.8622 3.02933 32.8569 3 32.8516 2.968C32.8516 2.936 32.8489 2.90667 32.8436 2.88C33.0142 2.82133 33.1822 2.76267 33.3476 2.704C33.5129 2.64 33.6782 2.57867 33.8436 2.52V2.84C34.1209 2.62667 34.4782 2.52 34.9156 2.52C35.3902 2.52 35.7769 2.68533 36.0756 3.016C36.3902 3.37867 36.5476 3.848 36.5476 4.424ZM36.0116 4.432C36.0116 3.968 35.8916 3.592 35.6516 3.304C35.4169 3.00533 35.1129 2.856 34.7396 2.856C34.3662 2.856 34.0676 2.976 33.8436 3.216V5.608C34.0676 5.864 34.3662 5.992 34.7396 5.992C35.0916 5.992 35.3876 5.848 35.6276 5.56C35.8836 5.256 36.0116 4.88 36.0116 4.432Z" fill="black"/>
                </svg>
              </div>
              <div className="text-sm font-bold text-gray-900 mb-1">timetoShip</div>
              <div className="text-xs text-gray-500">Boilerplates & Templates</div>
            </div>

            {/* Cursor */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-all text-center group hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl group-hover:scale-110 transition-transform flex items-center justify-center">
                <div className="text-2xl font-bold text-blue-600">Cu</div>
              </div>
              <div className="text-sm font-bold text-gray-900 mb-1">Cursor</div>
              <div className="text-xs text-gray-500">AI-Powered IDE</div>
            </div>

            {/* v0.dev */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-all text-center group hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-xl group-hover:scale-110 transition-transform flex items-center justify-center">
                <span className="text-white text-lg font-bold">v0</span>
              </div>
              <div className="text-sm font-bold text-gray-900 mb-1">v0.dev</div>
              <div className="text-xs text-gray-500">UI Components</div>
            </div>

            {/* Bolt.new */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-all text-center group hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl group-hover:scale-110 transition-transform flex items-center justify-center">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-sm font-bold text-gray-900 mb-1">Bolt.new</div>
              <div className="text-xs text-gray-500">Quick Prototypes</div>
            </div>

            {/* Windsurf */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-all text-center group hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl group-hover:scale-110 transition-transform flex items-center justify-center">
                <div className="text-lg font-bold text-cyan-600">WS</div>
              </div>
              <div className="text-sm font-bold text-gray-900 mb-1">Windsurf</div>
              <div className="text-xs text-gray-500">Complex Projects</div>
            </div>

            {/* Lovable */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-all text-center group hover:shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl group-hover:scale-110 transition-transform flex items-center justify-center">
                <div className="text-lg font-bold text-purple-600">❤️</div>
              </div>
              <div className="text-sm font-bold text-gray-900 mb-1">Lovable</div>
              <div className="text-xs text-gray-500">Full-Stack Apps</div>
            </div>

            {/* Plus */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 flex items-center justify-center hover:border-gray-300 transition-all group hover:shadow-lg">
              <Plus className="w-12 h-12 text-gray-300 group-hover:text-gray-500 transition-colors" strokeWidth={2} />
            </div>

            {/* Ship Your Idea */}
            <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-6 flex items-center justify-center hover:shadow-xl transition-all group hover:scale-105">
              <div className="text-center">
                <Rocket className="w-8 h-8 mx-auto mb-2" />
                <div className="text-lg font-bold">Ship</div>
                <div className="text-sm opacity-90">Your Idea</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Master - World Class Funnel Copy */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What You'll Master In 90 Minutes</h2>
            <p className="text-xl text-gray-600">The raw, uncensored truth about building in 2026</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-orange-300 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The "English-to-App" Workflow</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Watch me take a raw idea and turn it into a functional product using AI tools that your competition hasn't even heard of yet.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { icon: '🎯', text: 'When to use which AI tool (the timing)' },
                  { icon: '⚡', text: 'Prompting patterns that work 10x faster' },
                  { icon: '🚀', text: 'The exact workflow I use for 2-week launches' },
                  { icon: '💰', text: 'Tools that save you ₹50,000+ in dev costs' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="text-sm font-bold text-orange-600 bg-orange-50 rounded-lg px-4 py-2 text-center">
                Value: ₹15,000
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-300 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Build Session</h3>
              <p className="text-gray-600 mb-6 text-lg">
                No cuts, no edits, no BS. Watch me build something LIVE from scratch. See my mistakes, learn the fixes, understand the real workflow.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { icon: '👨‍💻', text: 'Real-time coding with AI agents' },
                  { icon: '🐛', text: 'Live debugging & problem-solving' },
                  { icon: '❓', text: 'Q&A throughout the session' },
                  { icon: '🎁', text: 'Copy-paste ready prompts library' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="text-sm font-bold text-blue-600 bg-blue-50 rounded-lg px-4 py-2 text-center">
                Value: ₹10,000
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-green-300 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The 2-Week Launch Roadmap</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Practical AI insights you can implement TODAY—not theoretical research you'll never use. The exact day-by-day plan.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { icon: '📅', text: 'Day 1-14: Complete launch checklist' },
                  { icon: '💸', text: 'How to make your first ₹1 Lakh' },
                  { icon: '🏆', text: 'Avoid the mistakes that kill 90% of apps' },
                  { icon: '📈', text: 'Post-launch growth strategies' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="text-sm font-bold text-green-600 bg-green-50 rounded-lg px-4 py-2 text-center">
                Value: ₹25,000
              </div>
            </div>
          </div>

          {/* Total Value Proposition */}
          <div className="mt-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Total Value: ₹50,000</h3>
            <p className="text-xl mb-6 opacity-90">Your price today: ₹99</p>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-lg">
                <span className="font-bold">That's 99.8% OFF</span> because I want to build an army of Indian builders who actually ship.
                No excuses. Just results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Results From Real Builders</h2>
            <p className="text-xl text-gray-600">Join 500+ builders who are already shipping</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul M.",
                location: "Mumbai",
                result: "Built SaaS in 11 days",
                revenue: "₹15k/month",
                quote: "I spent 6 months trying to learn React. Built my first SaaS in 11 days after the masterclass. Already have paying customers."
              },
              {
                name: "Priya S.",
                location: "Bangalore",
                result: "Launched app in 2 weeks",
                revenue: "1000+ users",
                quote: "No coding background. Just followed the AI tools exactly as taught. My app got 1000+ users in first month."
              },
              {
                name: "Amit K.",
                location: "Delhi",
                result: "Micro-SaaS in 8 days",
                revenue: "₹8k first month",
                quote: "The timetoShip templates saved me 40+ hours. This is how building should be - fast and fun."
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-green-600">{testimonial.result}</div>
                    <div className="text-xs text-gray-500">{testimonial.revenue}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Instructor Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border-2 border-gray-200 p-12 shadow-lg">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Sparkles className="w-4 h-4" />
                The OG Since GPT 3.5
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-900 to-black rounded-3xl flex items-center justify-center text-white text-3xl font-bold flex-shrink-0 shadow-xl">
                AD
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Abhi Deep</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  I'm not teaching you theory. I'm teaching you what I live every day.
                  Since 2022, I've been in the trenches building with AI tools - selling automations,
                  launching products, and making real money while others were still watching tutorials.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: '🚀', text: 'Started with GPT 3.5 in Nov 2022' },
                    { icon: '💰', text: 'Sold multiple AI automations' },
                    { icon: '🏗️', text: 'Built 10+ products using only AI' },
                    { icon: '👥', text: 'Taught 500+ Indian builders' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Why Listen To Me?</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>I've been there since the beginning - GPT 3.5, GPT-4, Claude, every wave</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>I make money from these tools daily, not just teaching about them</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>I'm building in public - you can see my work, my wins, my failures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>I'm obsessed with making Indian builders win globally</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Reversal & Urgency */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">You Have Zero Risk</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">30-Day Guarantee</h3>
                <p className="text-white/80">Not worth it? Full refund. No questions asked.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Lifetime Access</h3>
                <p className="text-white/80">Watch replay anytime. Forever.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Community Access</h3>
                <p className="text-white/80">Join 500+ AI builders network.</p>
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-white text-lg font-medium mb-4">
                The only risk is NOT joining and watching your competition ship while you're still "learning to code"
              </p>
              <div className="text-white/80">
                {seatsLeft} spots left at ₹99 → Price increases to ₹299 tonight
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Registration Form */}
      <section id="register" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border-2 border-gray-200 p-12 shadow-xl relative overflow-hidden">
            {/* Urgency Badge */}
            <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse flex items-center gap-2">
              <Timer className="w-4 h-4" />
              Price increase in {timeLeft.hours}h {timeLeft.minutes}m
            </div>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Reserve Your Seat Before It's Too Late</h3>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-sm">
                  {100 - seatsLeft} builders already joined
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-2xl font-bold text-gray-900">Special Launch Price</div>
                  <div className="text-sm text-gray-600">Only {seatsLeft} seats left at this price</div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-600">₹99</div>
                  <div className="text-sm text-gray-500 line-through">₹2,999</div>
                </div>
              </div>
              <div className="text-sm text-orange-700 font-medium">
                ⚠️ Price increases to ₹299 at midnight - 67% savings ends soon
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <input
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20 transition-all text-lg"
              />
              <input
                type="email"
                placeholder="Your best email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20 transition-all text-lg"
              />
            </div>

            <div className="mb-6 p-4 bg-blue-50 rounded-xl">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-800">
                  <strong>What happens next:</strong> You'll get an email with the live class link +
                  pre-class AI prompts to get you started immediately.
                </div>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-black text-white py-5 rounded-xl font-bold text-xl hover:bg-gray-800 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Processing Your Registration...
                </>
              ) : (
                <>
                  Pay ₹99 & Confirm Your Seat
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>

            <div className="mt-6 flex justify-center gap-6 text-center text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>30-day guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Instant access</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>500+ members</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex justify-center items-center gap-8 opacity-60">
                <span className="text-xs text-gray-500">Secure Payment</span>
                <div className="flex gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-12 h-8 bg-gray-200 rounded"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">AB</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">AI Builder</span>
              </div>
              <p className="text-gray-600 text-sm">
                Building the next generation of AI-first founders in India.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">WhatsApp</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Telegram</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Follow Abhi</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <span className="text-xs">X</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <span className="text-xs">IG</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <span className="text-xs">LI</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2025 AI Builder. All rights reserved. • Privacy Policy • Terms of Service
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Built with AI tools • Ship faster, launch smarter • Join the revolution
            </p>
          </div>
        </div>
      </footer>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">Welcome to AI Builder!</h3>
            <p className="text-gray-600 mb-6">
              Check your email for the masterclass link and your free AI prompts kit.
            </p>

            <div className="bg-blue-50 rounded-xl p-4 mb-6">
              <p className="text-sm text-blue-800 font-medium">
                🎁 Bonus: You also get access to our private Discord community
              </p>
            </div>

            <button
              onClick={() => setShowPopup(false)}
              className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Floating紧迫 badge */}
      {seatsLeft <= 10 && (
        <div className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse shadow-lg z-40 flex items-center gap-2">
          <AlertCircle className="w-4 h-4" />
          Only {seatsLeft} seats left!
        </div>
      )}
    </div>
  );
}

// Add Rocket icon
function Rocket(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c0 1.105.895 2.5 2 2.5s2.5-1.395 2.5-2.5-1.395-2.5-2.5-2.5-2 1.395-2 2.5z"/>
      <path d="M16.5 7.5c0-1.105-.895-2.5-2-2.5s-2.5 1.395-2.5 2.5 1.395 2.5 2.5 2.5 2-1.395 2-2.5z"/>
      <path d="M7.5 7.5L2 12l5.5 4.5L16 12z"/>
      <path d="M16.5 16.5L22 12l-5.5-4.5L8 12z"/>
      <path d="M12 12v9"/>
      <path d="M12 12V3"/>
    </svg>
  );
}