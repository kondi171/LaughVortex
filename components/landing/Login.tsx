import styles from '@laugh-vortex/scss/Landing.module.scss';
import { useEffect, useState, useRef } from 'react';
import { animated, useSpring } from 'react-spring';
const Login = () => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  const animateModal = useSpring({
    from: isModalActive ? { scale: 0, opacity: 0, zIndex: -1 } : { scale: 1, opacity: 1, zIndex: 10 },
    to: isModalActive ? { scale: 1, opacity: 1, zIndex: 1 } : { scale: 0, opacity: 0, zIndex: -1 },
    config: { duration: 400 }
  });



  return (
    <>
      <button onClick={() => setIsModalActive(!isModalActive)} className={styles.signIn}>
        <span>Sign in</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
      <div className={styles.modalOverlay}>
        <animated.div id='accessModal' className={styles.accessModal} style={animateModal}>
          <i onClick={() => setIsModalActive(!isModalActive)} className="fa fa-times" aria-hidden="true"></i>
          <h3>Sign in</h3>
          <form>
            <label htmlFor="email"><i className="fa fa-envelope" aria-hidden="true"></i>E-mail:</label>
            <input placeholder="E-mail" className={styles.input} name="email" type="text" />
            <label htmlFor="password"><i className="fa fa-key" aria-hidden="true"></i>Password:</label>
            <input placeholder="Password" className={styles.input} name="password" type="password" />
            <button className={styles.shadow__btn}>
              Login
            </button>
          </form>
        </animated.div>
      </div>
    </>
  );
}
export default Login;