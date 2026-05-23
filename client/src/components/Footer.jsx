import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div>


                <div >
                    <h4>MySite</h4>
                    <p>Coding Analyzer Project 🚀</p>
                </div>


                <div>
                    <h6>Quick Links</h6>
                    <ul>
                        <li><Link to="#">Home</Link></li>
                        <li><Link to="#">About</Link></li>
                        <li><Link to="#">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h6>Follow Me</h6>
                    <ul>
                        <li><Link to="#">LinkedIn</Link></li>
                        <li><Link to="#">GitHub</Link></li>
                        <li><Link to="#">Twitter</Link></li>
                    </ul>
                </div>

            </div>

            <div>
                <p>© 2026 All Rights Reserved</p>
            </div>
        </footer>
    )
}