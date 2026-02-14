'use client';

import { useState } from 'react';
import Image from 'next/image';

interface TabItem {
    id: number;
    title: string;
    description: string;
    image: string;
}

interface DynamicTabsProps {
    tabs: TabItem[];
}

export default function DynamicTabs({ tabs }: DynamicTabsProps) {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabHover = (id: number) => {
        if (window.innerWidth > 768) {
            setActiveTab(id);
        }
    };

    const handleTabClick = (id: number) => {
        if (window.innerWidth <= 768) {
            setActiveTab(activeTab === id ? 0 : id);
        }
    };

    return (
        <section className="dynamic-tabs-section">
            <div className="tabs-visual">
                {tabs.map((tab) => (
                    <Image
                        key={tab.id}
                        src={tab.image}
                        alt={tab.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className={activeTab === tab.id ? 'active' : ''}
                    />
                ))}
            </div>
            <div className="tabs-content">
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
                        data-tab={tab.id}
                        onMouseEnter={() => handleTabHover(tab.id)}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        <div className="tab-header">
                            <span>{tab.title}</span>
                            <span>+</span>
                        </div>
                        <div className="tab-body">
                            <p>{tab.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
