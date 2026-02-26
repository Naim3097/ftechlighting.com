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

    const handlePointerEnter = (id: number, e: React.PointerEvent) => {
        if (e.pointerType !== 'touch') {
            setActiveTab(id);
        }
    };

    return (
        <section className="dynamic-tabs-section">
            <div className="tabs-visual">
                {tabs.map((tab, index) => (
                    <Image
                        key={tab.id}
                        src={tab.image}
                        alt={tab.title}
                        fill
                        sizes="60vw"
                        style={{ objectFit: 'cover' }}
                        className={activeTab === tab.id ? 'active' : ''}
                        {...(index === 0 ? { priority: true } : { loading: 'lazy' as const })}
                    />
                ))}
            </div>
            <div className="tabs-content">
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
                        data-tab={tab.id}
                        onPointerEnter={(e) => handlePointerEnter(tab.id, e)}
                        onClick={() => setActiveTab(activeTab === tab.id ? 0 : tab.id)}
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
