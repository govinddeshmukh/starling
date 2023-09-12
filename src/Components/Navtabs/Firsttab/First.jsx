import React, { useEffect, useState } from 'react'
import styles from "./First.module.scss"
import {IoIosArrowBack,  IoMdAdd} from "react-icons/io";
export default function First({showtab,setshowtab, setshownav, shownav}) {
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
    <div className={showtab === 1 ? `${styles.main} ${styles.right}` : `${styles.main}`}>
      <div onClick={()=> setshowtab(!showtab.tabId)} className={styles.head}>
      <span><IoIosArrowBack/></span>
      <h1  > Current accounts</h1>
        </div>
        <div  className={`${styles.main__mainbox}`}>
            <div onClick={() => changeTab(1)} className={`  ${styles.main__mainbox__header}`}>
                  <p >Accounts</p>
                  <IoMdAdd className={show === 1 ? `${styles.rotate} ${styles.main__mainbox__header__icon}` : `${styles.main__mainbox__header__icon}`}/>
            </div>
                <div className={(width <=480 ? `${styles.main__mainbox__footer}` : ``)&&(show === 1 ? ` ${styles.main__mainbox__footer}` : `${styles.none}`)}>
                  <div className={styles.main__mainbox__footer__content}>
                  <span>Personal Account</span>
                  <p>Our award winning current account</p>
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Joint account</span>
                  <p>Simplify shared spending</p>
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Euro account</span>
                  <p>A euro bank account in the UK</p>
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Starling Kite</span>
                  <p>A debit card for your child</p>
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Teen account</span>
                  <p>Better banking for 16 and 17 year olds</p>
                </div>
             </div>
      </div>
      <div className={styles.main__mainbox}>
            <div onClick={() => changeTab(2)} className={styles.main__mainbox__header}>
                  <p >Features</p>
                  <IoMdAdd className={show === 2 ? `${styles.rotate} ${styles.main__mainbox__header__icon}` : `${styles.main__mainbox__header__icon}`}/>
            </div>
                <div className={(width <=480 ? `${styles.main__mainbox__footer}` : ``)&&(show === 2 ? ` ${styles.main__mainbox__footer}` : `${styles.none}`)}>
                  <div className={styles.main__mainbox__footer__content}>
                  <span>Fixed rate savings<span className={styles.new}>new</span></span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Virtual cards<span className={styles.new}>new</span></span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Online banking</span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Mobile cheque deposits</span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Connected cards</span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>No fees travel</span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Bills Manager</span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Personal finance marketplace</span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Browse all app features</span>
                  
                </div>

             </div>
      </div>
      <div  className={styles.main__mainbox}>
            <div onClick={() => changeTab(3)} className={styles.main__mainbox__header}>
                  <p >The Essentials</p>
                  <IoMdAdd className={show === 3 ? `${styles.rotate} ${styles.main__mainbox__header__icon}` : `${styles.main__mainbox__header__icon}`}/>
            </div>
                <div className={(width <=480 ? `${styles.main__mainbox__footer}` : ``)&&(show === 3 ? ` ${styles.main__mainbox__footer}` : `${styles.none}`)}>
                  <div className={styles.main__mainbox__footer__content}>
                  <span>How to apply for an account</span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Compare to other banks</span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Security and fraud</span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Our fees, rates and charges</span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Switch to Starling</span>
                  
                </div>
             </div>
      </div>
      <div  className={styles.main__mainbox}>
            <div onClick={() => changeTab(4)} className={styles.main__mainbox__header}>
                  <p >Resources and support</p>
                  <IoMdAdd className={show === 4 ? `${styles.rotate} ${styles.main__mainbox__header__icon}` : `${styles.main__mainbox__header__icon}`}/>
            </div>
                <div className={(width <=480 ? `${styles.main__mainbox__footer}` : ``)&&(show === 4 ? ` ${styles.main__mainbox__footer}` : `${styles.none}`)}>
                  <div className={styles.main__mainbox__footer__content}>
                  <span>Budget planner<span className={styles.new}>new</span></span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Cost of living</span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>In-app help centre</span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Coronavirus help and support</span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Customer support hub</span>
                  
                </div>
             </div>
      </div>
    </div>
  )
}
