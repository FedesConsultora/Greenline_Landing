import "../Footer/_footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>© {new Date().getFullYear()} Greenline — Micrositio demo</p>
        <p style={{ opacity: 0.75 }}>
          Hecho con React + SCSS (@use) · Mobile-first
        </p>
      </div>
    </footer>
  );
}
