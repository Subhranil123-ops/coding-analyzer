import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="border-t mt-16 bg-background">
            
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Brand Section */}
                <div className="space-y-3">
                    <h4 className="text-2xl font-bold">
                        AlgoLens
                    </h4>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Smart coding analyzer and algorithm visualization platform 🚀
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h6 className="font-semibold mb-3">
                        Quick Links
                    </h6>

                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                            <Link
                                to="/"
                                className="hover:text-foreground transition-colors"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/about"
                                className="hover:text-foreground transition-colors"
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/contact"
                                className="hover:text-foreground transition-colors"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h6 className="font-semibold mb-3">
                        Connect
                    </h6>

                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                            <a
                                href="#"
                                className="hover:text-foreground transition-colors"
                            >
                                GitHub
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="hover:text-foreground transition-colors"
                            >
                                LinkedIn
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="hover:text-foreground transition-colors"
                            >
                                Twitter
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t">
                <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-muted-foreground">
                    © 2026 AlgoLens. All rights reserved.
                </div>
            </div>
        </footer>
    );
}