import Logo from "@laugh-vortex/components/landing/Logo"
import Header from "@laugh-vortex/components/landing/Header";
import Login from "@laugh-vortex/components/landing/Login";
import Register from "@laugh-vortex/components/landing/Register";
import Socials from '@laugh-vortex/components/landing/Socials';
import styles from '@laugh-vortex/scss/Landing.module.scss';

const Landing = () => {
  return (
    <div className={styles.landing}>
      <Logo />
      <div className={styles.accessBtns}>
        <Login />
        <Register />
      </div>
      <Header />
      <Socials />
    </div>
  );
}

export default Landing;