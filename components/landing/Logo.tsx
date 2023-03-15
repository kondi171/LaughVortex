import styles from '@laugh-vortex/scss/Landing.module.scss';
import Image from 'next/image';
import logo from './../../img/LaughVortex.png';
const Logo = () => {
  return (
    <>
      <div className={styles.logoText}>
        <h2>Laugh Vortex</h2>
        <h2>Laugh Vortex</h2>
      </div>
      <Image className={styles.logoImage} src={logo} alt='Laugh Vortex logo' />
    </>
  );
}

export default Logo;