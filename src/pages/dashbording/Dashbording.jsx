import "../../styles/pages/dashbording.css";
import FenixLogo from "../../assets/images/fenixLogo.png";
import Avatar from "../../assets/images/avatar.png";
import FenixLogoSideBar from "../../assets/images/fenixLogoSideBar.png";
import BannerPcs from "../../assets/images/bannerPcs.png"
const menuItems = [
  { label: "Sala 01", icon: "monitor", active: true },
  { label: "Estoque", icon: "box" },
  { label: "Relatórios", icon: "chart" },
  { label: "Configurações", icon: "gear" },
];

// Dados das salas
const salasData = [
  {
    titulo: "Coluna 1 ",
    computadores: [
      { id: "PC01", status: "online" },
      { id: "PC02", status: "online" },
      { id: "PC03", status: "em-uso" },
      { id: "PC04", status: "offline" },
    ],
  },
  {
    titulo: "Coluna 2",
    computadores: [
      { id: "PC05", status: "online" },
      { id: "PC06", status: "online" },
      { id: "PC07", status: "em-uso" },
      { id: "PC08", status: "offline" },
    ],
 
  },
  {
    titulo: "Coluna 3",
    computadores: [
      { id: "PC05", status: "online" },
      { id: "PC06", status: "online" },
      { id: "PC07", status: "em-uso" },
      { id: "PC08", status: "offline" },
    ],
 
  },
  {
    titulo: "Coluna 4",
    computadores: [
      { id: "PC05", status: "online" },
      { id: "PC06", status: "online" },
      { id: "PC07", status: "em-uso" },
      { id: "PC08", status: "offline" },
    ],
 
  },
  {
    titulo: "Coluna 5",
    computadores: [
      { id: "PC05", status: "online" },
      { id: "PC06", status: "online" },
      { id: "PC07", status: "em-uso" },
      { id: "PC08", status: "offline" },
    ],
 
  },

];

// Componente Card do Computador
function ComputadorCard({ computador }) {
  const statusColors = {
    online: { bg: "bg-green-500/20", border: "border-green-500/50", text: "text-green-400", label: "Online" },
    "em-uso": { bg: "bg-yellow-500/20", border: "border-yellow-500/50", text: "text-yellow-400", label: "Em uso" },
    offline: { bg: "bg-red-500/20", border: "border-red-500/50", text: "text-red-400", label: "Offline" },
  };

  const statusStyle = statusColors[computador.status];

  return (
    <div className={`border ${statusStyle.border} rounded-lg p-4 ${statusStyle.bg} backdrop-blur-sm hover:bg-opacity-30 transition-all`}>
      <div className="flex flex-col items-center gap-3">
        <span className="text-lg font-bold text-white">{computador.id}</span>
        <div className="w-20 h-20 border border-red-500/40 rounded flex items-center justify-center">
          <img src={BannerPcs} alt="" srcset=""   className="w-full h-full object-cover object-center"
 />
          {/* <span className="text-3xl">🔥</span> */}
        </div>
        <span className={`text-sm font-medium ${statusStyle.text}`}>
          {statusStyle.label}
        </span>
      </div>
    </div>
  );
}

// Componente Sala
function Sala({ titulo, computadores }) {
  return (
    <div className="space-y-3 border border-red-500/40 rounded-lg p-6 bg-black/20">
      <h2 className="text-xl font-bold text-red-500 uppercase tracking-wide">{titulo}</h2>
      <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {computadores.map((pc) => (
          <ComputadorCard key={pc.id} computador={pc} />
        ))}
      </div>
    </div>
  );
}

function Dashbording() {
  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <div className="brand">
          <img src={FenixLogo} alt="Infinity Stock" className="brand__logo" />
          <div className="brand__name">
            <span className="brand__light">INFINITY</span>
            <span className="brand__accent"> STOCK</span>
          </div>
        </div>

        <div className="header-search">
          <label className="search-field" htmlFor="search">
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
              <circle
                cx="11"
                cy="11"
                r="6.5"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path
                d="M16 16l4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            <input type="search" id="search" placeholder="Pesquisar..." />
          </label>
        </div>

        <div className="header-profile">
          <button className="notification" type="button">
            <span className="notification__badge">3</span>
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
              <path
                d="M12 4.75a4.25 4.25 0 0 0-4.25 4.25v2.06c0 .7-.2 1.39-.58 1.98l-1.18 1.82A1 1 0 0 0 6.83 16h10.34a1 1 0 0 0 .84-1.54l-1.18-1.82a3.64 3.64 0 0 1-.58-1.98V9A4.25 4.25 0 0 0 12 4.75Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
              <path
                d="M10 18a2 2 0 0 0 4 0"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="profile-card">
            <div className="profile-card__avatar">
              <img src={Avatar} alt="" srcset="" />
            </div>
            <div className="profile-card__info">
              <img src="" alt="" srcset="" />
              <span>Administrador</span>
            </div>
            <span className="profile-card__arrow">⌄</span>
          </div>
        </div>
      </header>

      <div className="dashboard-body">
        <aside className="dashboard-sidebar">
          <div className="sidebar-top">
            <div className="sidebar-title-row">
              <h2>MENU</h2>
              <button type="button" className="sidebar-collapse">
                «
              </button>
            </div>

            <nav className="sidebar-nav" aria-label="Menu principal">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className={`sidebar-item ${item.active ? "is-active" : ""}`}
                >
                  <span className="sidebar-item__icon" />
                  <span className="sidebar-item__label">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="sidebar-watermark" aria-hidden="true">
            <img src={FenixLogoSideBar} alt="" />
          </div>
        </aside>

        <section className="dashboard-content">
          <div className="h-full overflow-y-auto px-6 py-8 space-y-6">
            {/* Salas */}
            {salasData.map((sala) => (
              <Sala key={sala.titulo} titulo={sala.titulo} computadores={sala.computadores} />
            ))}

            {/* Mesa do Professor */}
            <div className="space-y-3 border border-red-500/40 rounded-lg p-6 bg-black/20">
              <h2 className="text-xl font-bold text-red-500 uppercase tracking-wide">MESA DO PROFESSOR</h2>
              <div className="flex items-center justify-center gap-8 py-12">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 border border-red-500/40 rounded flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                  <span className="text-sm text-gray-400">Laptop</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 border border-red-500/40 rounded flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <span className="text-sm text-gray-400">Smartphone</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 border border-red-500/40 rounded flex items-center justify-center">
                    <span className="text-2xl">☕</span>
                  </div>
                  <span className="text-sm text-gray-400">Café</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Dashbording;
