import "./style/login.css";
import BannerAvatar from "./assets/inspiracao/BannerAvatar.png";
function TelaLogin() {
  return (
    <>
      <header>
        <nav>
          <h1>Infinty Control</h1>
        </nav>
      </header>

      <section id="formulario">
        <img src={BannerAvatar} alt="Banner Avatar" />
        <form action="" method="get">
          <label htmlFor="">ad</label>
        </form>
      </section>
    </>
  );
}

export default TelaLogin;
