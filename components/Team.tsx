'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
    {
        name: "Ahmed Khan",
        role: "Founder & CEO",
        bio: "Blockchain expert with 10+ years in Islamic finance",
        image: "https://wallpapers.com/images/hd/placeholder-profile-icon-8qmjk1094ijhbem9.jpg"
    },
    {
        name: "Fatima Ali",
        role: "CTO",
        bio: "Full-stack developer specializing in decentralized systems",
        image: "https://wallpapers.com/images/hd/placeholder-profile-icon-8qmjk1094ijhbem9.jpg"
    },
    {
        name: "Mohammed Rahman",
        role: "Head of Islamic Studies",
        bio: "Islamic scholar with expertise in Quranic interpretation",
        image: "https://wallpapers.com/images/hd/placeholder-profile-icon-8qmjk1094ijhbem9.jpg"
    },
    {
        name: "Aisha Patel",
        role: "Community Manager",
        bio: "Experienced in building and managing global communities",
        image: "https://wallpapers.com/images/hd/placeholder-profile-icon-8qmjk1094ijhbem9.jpg"
    }
];

export default function Team() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                        Our Team
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Meet the visionaries behind Quranium
                    </p>
                </div>

                <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="mt-6 text-center">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {member.name}
                                </h3>
                                <p className="mt-1 text-sm text-blue-600 dark:text-blue-400">
                                    {member.role}
                                </p>
                                <p className="mt-2 text-gray-600 dark:text-gray-300">
                                    {member.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Join Team CTA */}
                <div className="mt-20 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Join Our Team
                    </h3>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        We're always looking for passionate individuals who want to make a difference in the Islamic tech space.
                    </p>
                    <button className="mt-8 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200">
                        View Open Positions
                    </button>
                </div>
            </div>
        </section>
    );
} 