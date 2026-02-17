
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, BookOpen, Target, Heart, Lightbulb, Shield, TrendingUp, Calendar, MapPin } from 'lucide-react';

const About: React.FC = () => {
    const [countersVisible, setCountersVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const statsSection = document.getElementById('stats-section');
            if (statsSection) {
                const rect = statsSection.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    setCountersVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const stats = [
        { icon: <Users size={40} />, value: 5000, label: 'Active Members', suffix: '+' },
        { icon: <Calendar size={40} />, value: 104, label: 'Years of Legacy', suffix: '+' },
        { icon: <BookOpen size={40} />, value: 15, label: 'Student Chapters', suffix: '+' },
        { icon: <Award size={40} />, value: 500, label: 'Events Conducted', suffix: '+' },
    ];

    const timeline = [
        { year: '1920', title: 'IEI Founded', description: 'The Institution of Engineers (India) was established to promote engineering excellence.' },
        { year: '1965', title: 'Salem Chapter Established', description: 'Salem Local Centre was formed to serve the engineering community in the region.' },
        { year: '1990', title: 'Expansion Phase', description: 'Significant growth in membership and activities across multiple engineering disciplines.' },
        { year: '2010', title: 'Digital Transformation', description: 'Embraced technology for better member engagement and knowledge sharing.' },
        { year: '2024', title: 'Modern Era', description: 'Leading the way in professional development and technical innovation in Salem.' },
    ];

    const coreValues = [
        { icon: <Target size={32} />, title: 'Excellence', description: 'Striving for the highest standards in engineering practice and education.' },
        { icon: <Heart size={32} />, title: 'Integrity', description: 'Upholding ethical principles and professional conduct in all endeavors.' },
        { icon: <Lightbulb size={32} />, title: 'Innovation', description: 'Fostering creativity and embracing new technologies and methodologies.' },
        { icon: <Shield size={32} />, title: 'Professionalism', description: 'Maintaining the dignity and reputation of the engineering profession.' },
        { icon: <TrendingUp size={32} />, title: 'Growth', description: 'Continuous learning and development for members and the community.' },
        { icon: <Users size={32} />, title: 'Collaboration', description: 'Building strong partnerships and networks within the engineering fraternity.' },
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/data/iei-home.avif"
                        alt="About IEI Salem"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-iei-primary/90 to-iei-primary/70"></div>
                </div>

                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">About IEI Salem</h1>
                    <p className="text-xl md:text-2xl text-gray-200 animate-fade-in-up delay-100">Empowering Engineers Since 1965</p>
                    <div className="mt-6 flex items-center justify-center gap-2 text-sm animate-fade-in-up delay-200">
                        <Link to="/" className="hover:text-iei-accent transition-colors">Home</Link>
                        <span>/</span>
                        <span>About</span>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in-up">
                            <span className="text-iei-accent font-bold tracking-widest text-xs uppercase">Our Story</span>
                            <h2 className="text-4xl font-bold text-iei-primary mt-2 mb-6">A Legacy of Engineering Excellence</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                The Institution of Engineers (India) Salem Local Centre has been a cornerstone of professional engineering development in the Salem region since 1965. As part of the world's largest multi-disciplinary professional body, we serve as a vital platform for knowledge exchange, networking, and career advancement.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Our centre brings together engineers from diverse disciplines - Civil, Mechanical, Electrical, Electronics, Computer Science, and more - fostering collaboration and innovation that drives regional infrastructure and industrial growth.
                            </p>
                            <div className="bg-iei-primary/5 border-l-4 border-iei-primary p-6 rounded-r-lg">
                                <p className="text-iei-primary font-semibold text-lg italic">
                                    "To promote and advance the science and practice of engineering and technology for the benefit of the community."
                                </p>
                                <p className="text-gray-600 text-sm mt-2">- Our Mission</p>
                            </div>
                        </div>
                        <div className="relative animate-fade-in-up delay-200">
                            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                                <img src="https://picsum.photos/seed/iei-building/800/800" alt="IEI Salem Building" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-iei-accent/20 rounded-full blur-3xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-iei-accent font-bold tracking-widest text-xs uppercase">Our Journey</span>
                        <h2 className="text-4xl font-bold text-iei-primary mt-2">Historical Milestones</h2>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-iei-accent/30"></div>

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} animate-fade-in-up`} style={{ animationDelay: `${index * 100}ms` }}>
                                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                                            <h3 className="text-2xl font-bold text-iei-primary mb-2">{item.title}</h3>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>

                                    <div className="relative flex items-center justify-center">
                                        <div className="w-16 h-16 bg-iei-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                                            {item.year.slice(-2)}
                                        </div>
                                    </div>

                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <span className="text-3xl font-bold text-iei-accent">{item.year}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white border-2 border-iei-primary p-10 rounded-2xl shadow-xl animate-fade-in-up hover:shadow-2xl transition-shadow">
                            <div className="w-16 h-16 bg-iei-primary/10 rounded-full flex items-center justify-center mb-6">
                                <Target size={32} className="text-iei-primary" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-iei-primary">Our Vision</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To be the premier professional body for engineers in Salem, recognized for excellence in technical knowledge dissemination, professional development, and contribution to society's technological advancement.
                            </p>
                        </div>

                        <div className="bg-white border-2 border-iei-primary p-10 rounded-2xl shadow-xl animate-fade-in-up delay-100 hover:shadow-2xl transition-shadow">
                            <div className="w-16 h-16 bg-iei-primary/10 rounded-full flex items-center justify-center mb-6">
                                <Lightbulb size={32} className="text-iei-primary" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4 text-iei-primary">Our Mission</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To promote and advance the science and practice of engineering through continuous learning, ethical practice, and collaborative innovation, while serving the professional needs of our members and contributing to regional development.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-iei-primary font-bold tracking-widest text-xs uppercase">What We Stand For</span>
                        <h2 className="text-4xl font-bold text-iei-primary mt-2">Core Values</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreValues.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white border-2 border-gray-200 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:border-iei-primary transition-all hover:-translate-y-2 animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="w-16 h-16 bg-iei-primary/10 rounded-full flex items-center justify-center text-iei-primary mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-iei-primary mb-3">{value.title}</h3>
                                <p className="text-gray-700">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section id="stats-section" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-iei-primary font-bold tracking-widest text-xs uppercase">Our Impact</span>
                        <h2 className="text-4xl font-bold mb-4 text-iei-primary">Our Impact in Numbers</h2>
                        <p className="text-gray-700 text-lg">Serving the engineering community with dedication and excellence</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white border-2 border-iei-primary p-8 rounded-xl text-center shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                                <div className="flex justify-center mb-4 text-iei-primary">
                                    {stat.icon}
                                </div>
                                <div className="text-5xl font-bold mb-2 text-iei-primary">
                                    {countersVisible ? (
                                        <CountUp end={stat.value} duration={2000} suffix={stat.suffix} />
                                    ) : (
                                        '0'
                                    )}
                                </div>
                                <div className="text-gray-700 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-iei-primary font-bold tracking-widest text-xs uppercase">Leadership</span>
                        <h2 className="text-4xl font-bold text-iei-primary mt-2 mb-4">Governance & Management</h2>
                        <p className="text-gray-700 max-w-3xl mx-auto">
                            Our centre is led by a dedicated team of experienced engineers who volunteer their time and expertise to serve the engineering community.
                        </p>
                    </div>

                    <div className="bg-white border-2 border-iei-primary p-10 rounded-2xl text-center shadow-xl">
                        <Award size={64} className="mx-auto text-iei-primary mb-6" />
                        <h3 className="text-2xl font-bold text-iei-primary mb-4">Executive Committee 2025-2027</h3>
                        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                            Our Executive Committee comprises distinguished engineers from various disciplines, working together to advance the institution's objectives and serve our members.
                        </p>
                        <Link
                            to="/committee"
                            className="inline-block bg-iei-primary text-white px-8 py-4 rounded-full font-bold hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl"
                        >
                            Meet Our Committee
                        </Link>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 bg-iei-primary text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Join Our Engineering Community</h2>
                    <p className="text-xl text-gray-200 mb-10">
                        Be part of a legacy of excellence. Connect with fellow engineers, access professional development resources, and contribute to the advancement of engineering in Salem.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/membership"
                            className="bg-iei-accent text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl"
                        >
                            Become a Member
                        </Link>
                        <Link
                            to="/events"
                            className="bg-white text-iei-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
                        >
                            Explore Events
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Counter Component
const CountUp: React.FC<{ end: number; duration: number; suffix?: string }> = ({ end, duration, suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return <>{count}{suffix}</>;
};

export default About;
