import React, { useEffect, useState } from 'react'
import styles from "./Third.module.scss"
import { IoIosArrowBack,  IoMdAdd } from 'react-icons/io'
export default function Third({showtab,setshowtab, setshownav, shownav}) {
  const [show, setshow] = useState(1);
  const width = window.screen.width;
  useEffect(()=>{
    if(window.innerWidth < 480){
      if(!shownav){
        setshowtab(0)
      }
    }
  })
  const changeTab = (tabId) => {
    setshow((prevOpenTab) => (prevOpenTab === tabId ? null : tabId));
  };
  console.log(showtab)
  return (
    <div className={showtab === 3 ? `${styles.main} ${styles.right}` : `${styles.main}`}>
   <div onClick={()=> setshowtab(!showtab.tabId)} className={styles.head}>
      <span><IoIosArrowBack/></span>
      <h1> Overdraft & Loans</h1>
        </div>

      <div id='1' className={styles.main__mainbox}>
          <div onClick={() => changeTab(1)} className={styles.main__mainbox__header}>
                <p>Personal Lending</p>
                <IoMdAdd className={show === 1 ? `${styles.rotate} ${styles.main__mainbox__header__icon}` : `${styles.main__mainbox__header__icon}`}/>
          </div>
              <div className={(width <=480 ? `${styles.main__mainbox__footer}` : ``)&&(show === 1 ? ` ${styles.main__mainbox__footer}` : `${styles.none}`)}>
                <div className={styles.main__mainbox__footer__content}>
                <span>Personal overdraft</span>
                <p>A little extra support from time to time</p>
              </div>
              <div className={styles.main__mainbox__footer__content}>
                <span>Overdraft cost calculator</span>
              </div>
              <div className={styles.main__mainbox__footer__content}>
                <span>Overdraft eligibility tool</span>
              </div>
            </div>
    </div>
    <div id='1' className={styles.main__mainbox}>
          <div onClick={() => changeTab(2)} className={styles.main__mainbox__header}>
                <p>Bussiness lending</p>
                <IoMdAdd className={show === 2 ? `${styles.rotate} ${styles.main__mainbox__header__icon}` : `${styles.main__mainbox__header__icon}`}/>
          </div>
              <div className={(width <=480 ? `${styles.main__mainbox__footer}` : ``)&&(show === 2 ? ` ${styles.main__mainbox__footer}` : `${styles.none}`)}>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Business overdraft</span>
                <p>Built to give your business a cashflow boost</p>
                
              </div>
              <div className={styles.main__mainbox__footer__content}>
                <span>Business loan</span>
                <p>A fair and flexible business loan</p>
              </div>
              

           </div>
    </div>
    <div id='1' className={styles.main__mainbox}>
          <div onClick={() => changeTab(3)} className={styles.main__mainbox__header}>
                <p>business coronavurus support</p>
                <IoMdAdd className={show === 3 ? `${styles.rotate} ${styles.main__mainbox__header__icon}` : `${styles.main__mainbox__header__icon}`}/>
          </div>
              <div className={(width <=480 ? `${styles.main__mainbox__footer}` : ``)&&(show === 3 ? ` ${styles.main__mainbox__footer}` : `${styles.none}`)}>
                <div className={styles.main__mainbox__footer__content}>
                <span>Repaying your Bounce Back Loan</span>
                
              </div>
              <div className={styles.main__mainbox__footer__content}>
                <span>Pay As You Grow options</span>
              </div>
           </div>
    </div>
   
  </div>
  )
}
