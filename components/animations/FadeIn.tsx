'use client';

import { useEffect, useRef, useState } from 'react';

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export default function FadeIn({
    children,
    className = '',
    delay = 0,
    direction = 'up'
}: FadeInProps) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        }, { threshold: 0.1 });

        const currentRef = domRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const getTransform = () => {
        if (!isVisible) {
            switch (direction) {
                case 'up': return 'translateY(40px)';
                case 'down': return 'translateY(-40px)';
                case 'left': return 'translateX(40px)';
                case 'right': return 'translateX(-40px)';
                default: return 'none';
            }
        }
        return 'none';
    };

    return (
        <div
            ref={domRef}
            className={`${className} transition-all duration-1000 ease-out`}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: getTransform(),
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}
