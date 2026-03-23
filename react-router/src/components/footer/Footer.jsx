
function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="d-flex flex-column gap-3">
                    <div className="footer-brand">BoolStore</div>
                    <div className="footer-tagline label">
                        A curated archive of functional essentials. Designed for the minimal architect, built for the digital enthusiast.
                    </div>
                    <p className="footer-copy label">© 2026 BoolStore. BUILT FOR THE MINIMALIST.</p>
                </div>
                <div className="footer-links">
                    <div className="footer-links-col">
                        <a className="footer-link label" href="#">Terms</a>
                        <a className="footer-link label" href="#">Privacy</a>
                    </div>
                    <div className="footer-links-col">
                        <a className="footer-link label" href="#">Shipping</a>
                        <a className="footer-link label" href="#">API Documentation</a>
                    </div>
                    <div className="footer-links-col">
                        <span className="material-symbols-outlined footer-link" style={{cursor: 'pointer'}}>language</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
