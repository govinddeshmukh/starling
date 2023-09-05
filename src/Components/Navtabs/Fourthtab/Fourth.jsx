import React, { useEffect, useState } from 'react'
import styles from "./Fourth.module.scss"
import { IoIosArrowBack, IoIosArrowForward, IoMdAdd } from 'react-icons/io'
export default function Fourth({showtab,setshowtab, setshownav, shownav}) {
  const [show, setshow] = useState(0);
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
    <div className={showtab === 4 ? `${styles.main} ${styles.right}` : `${styles.main}`}>
     <div onClick={()=> setshowtab(!showtab.tabId)} className={styles.head}>
      <span><IoIosArrowBack/></span>
      <h1> Money transfers</h1>
        </div>

      <div id='1' className={styles.main__mainbox}>
          
              <div style={{paddingTop:"1rem"}} className={`${styles.padding}${styles.main__mainbox__footer}`}>
                <div className={styles.main__mainbox__footer__content}>
                <span>Send money abroad</span>
                <p>Fast and secure money transfers to bank<br/> accounts in 36 countries worldwide</p>
              </div>
            </div>
    </div>
    <div id='1' className={styles.main__mainbox}>
          <div onClick={() => changeTab(1)} className={styles.main__mainbox__header}>
                <p>Top Currencies</p>
                <IoMdAdd className={show === 1 ? `${styles.rotate} ${styles.main__mainbox__header__icon}` : `${styles.main__mainbox__header__icon}`}/>
          </div>
              <div className={(width <=480 ? `${styles.main__mainbox__footer}` : ``)&&(show === 1 ? ` ${styles.main__mainbox__footer}` : `${styles.none}`)}>
                <div className={`${styles.div} ${styles.main__mainbox__footer__content}`}>
                  <span>Business overdraft</span>
                  <img  src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" alt="" />
                
              </div>
              <div className={`${styles.div} ${styles.main__mainbox__footer__content}`}>
                <span>Business loan</span>
                <img  src="https://cdn.britannica.com/81/4481-004-660915ED/flag-Stars-and-Stripes-July-4-1912.jpg" alt="" />
              </div>
              <div className={`${styles.div} ${styles.main__mainbox__footer__content}`}>
                <span>Business loan</span>
                <img  src="https://cdn.britannica.com/27/4227-004-32423B42/Flag-South-Africa.jpg" alt="" />
              </div>
              <div className={`${styles.div} ${styles.main__mainbox__footer__content}`}>
                <span>Business loan</span>
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4AOIbvimVPwx0nBtSeoqkL2cF3HB74oUx9Q&usqp=CAU" alt="" />
              </div>
              

           </div>
    </div>
    
   
  </div>
  )
}
