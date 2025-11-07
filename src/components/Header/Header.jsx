export default function Header() {
  return (
    <header>
      <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0.75rem 0' }}>
        <div style={{ fontWeight:800, fontSize:'1.2rem' }}>Greenline</div>
        <nav aria-label="principal">
          {/* Menú futuro si hace falta */}
        </nav>
      </div>
    </header>
  );
}
