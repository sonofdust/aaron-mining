import React from 'react';
import Link from 'next/link';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="layout">
            <header>
                <nav>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/ore-quality">Ore Quality</Link></li>
                        <li><Link href="/shipping">Shipping</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>MiningCo</h3>
                        <p>Leading global mining company</p>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/ore-quality">Ore Quality</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <p>Email: info@miningco.com</p>
                        <p>Phone: +1 (123) 456-7890</p>
                    </div>
                    <div className="footer-section">
                        <h3>Follow Us</h3>
                        <div className="social-links">
                            <a href="#">Facebook</a>
                            <a href="#">Twitter</a>
                            <a href="#">LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 MiningCo. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
