import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    children: React.ReactNode;
    variant?: 'elevated' | 'filled' | 'outlined';
    className?: string;
}

export const Card: React.FC<CardProps> = ({
    children,
    variant = 'filled',
    className = ''
}) => {
    return (
        <div className={`${styles.card} ${styles[variant]} ${className}`}>
            {children}
        </div>
    );
};
