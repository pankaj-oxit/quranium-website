'use client';

import { motion } from 'framer-motion';

const roadmapItems = [
    {
        phase: "Phase 1",
        title: "Foundation",
        items: [
            "Smart contract development",
            "Community building",
            "Initial token distribution",
            "Website launch"
        ],
        status: "completed"
    },
    {
        phase: "Phase 2",
        title: "Development",
        items: [
            "Decentralized storage implementation",
            "Educational content integration",
            "Mobile app development",
            "Community governance system"
        ],
        status: "current"
    },
    {
        phase: "Phase 3",
        title: "Expansion",
        items: [
            "Global partnerships",
            "Advanced features rollout",
            "Cross-chain integration",
            "Enhanced security measures"
        ],
        status: "upcoming"
    }
];

export default function Roadmap() {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                        Roadmap
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                        Our journey to revolutionize Islamic knowledge sharing
                    </p>
                </div>

                <div className="mt-20 space-y-12">
                    {roadmapItems.map((item, index) => (
                        <motion.div
                            key={item.phase}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative p-6 rounded-lg ${
                                item.status === 'completed' 
                                    ? 'bg-green-50 dark:bg-green-900/20' 
                                    : item.status === 'current'
                                    ? 'bg-blue-50 dark:bg-blue-900/20'
                                    : 'bg-gray-50 dark:bg-gray-800'
                            }`}
                        >
                            <div className="flex items-center mb-4">
                                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {item.phase}
                                </span>
                                <span className="ml-4 px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                                    {item.status}
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                {item.title}
                            </h3>
                            <ul className="space-y-2">
                                {item.items.map((listItem) => (
                                    <li key={listItem} className="flex items-center text-gray-600 dark:text-gray-300">
                                        <span className="mr-2">•</span>
                                        {listItem}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 