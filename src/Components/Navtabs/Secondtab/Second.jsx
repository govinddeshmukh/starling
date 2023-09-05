import React, { useEffect, useState } from 'react'
import styles from "./Second.module.scss"
import { IoIosArrowBack } from 'react-icons/io'
import {IoMdAdd} from "react-icons/io"
export default function Second({showtab,setshowtab, setshownav, shownav}) {
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
      <div className={showtab === 2 ? `${styles.main} ${styles.right}` : `${styles.main}`}>
        <div onClick={()=> setshowtab(!showtab.tabId)} className={styles.head}>
      <span><IoIosArrowBack/></span>
      <h1  > Bussiness Banking</h1>
        </div>

        <div id='1' className={styles.main__mainbox}>
            <div onClick={() => changeTab(1)} className={styles.main__mainbox__header}>
                  <p >Accounts</p>
                  <IoMdAdd className={show === 1 ? `${styles.rotate} ${styles.main__mainbox__header__icon}` : `${styles.main__mainbox__header__icon}`}/>
            </div>
                <div className={(width <=480 ? `${styles.main__mainbox__footer}` : ``)&&(show === 1 ? ` ${styles.main__mainbox__footer}` : `${styles.none}`)}>
                  <div className={styles.main__mainbox__footer__content}>
                  <span>Business account</span>
                  <p>For limited companies and other registered businesses</p>
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Sole trader account</span>
                  <p>Whether you’re self-employed or side<br/>hustling</p>
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Multi-currency accounts</span>
                  <p>US dollar and euro bank accounts currently<br/> available for UK businesses</p>
                </div>
              </div>
      </div>
      <div id='1' className={styles.main__mainbox}>
            <div onClick={() => changeTab(2)} className={styles.main__mainbox__header}>
                  <p >Features</p>
                  <IoMdAdd className={show === 2 ? `${styles.rotate} ${styles.main__mainbox__header__icon}` : `${styles.main__mainbox__header__icon}`}/>
            </div>
                <div className={(width <=480 ? `${styles.main__mainbox__footer}` : ``)&&(show === 2 ? ` ${styles.main__mainbox__footer}` : `${styles.none}`)}>
                  <div className={styles.main__mainbox__footer__content}>
                  <span>Fixed rate business savings<span className={styles.new}>new</span></span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Business Toolkit</span>
                  <p>Accounting and bookkeeping for your business account</p>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Online banking</span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Mobile cheque deposits</span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Bills Manager</span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Business spending insights</span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Business marketplace</span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Browse all app features</span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Browse all app features</span>
                  
                </div>

             </div>
      </div>
      <div id='1' className={styles.main__mainbox}>
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
                  <span>Business fees, rates and charges</span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Switch to Starling</span>
                  
                </div>
             </div>
      </div>
      <div id='1' className={styles.main__mainbox}>
            <div onClick={() => changeTab(4)} className={styles.main__mainbox__header}>
                  <p >Resources and support</p>
                  <IoMdAdd className={show === 4 ? `${styles.rotate} ${styles.main__mainbox__header__icon}` : `${styles.main__mainbox__header__icon}`}/>
            </div>
                <div className={(width <=480 ? `${styles.main__mainbox__footer}` : ``)&&(show === 4 ? ` ${styles.main__mainbox__footer}` : `${styles.none}`)}>
                  <div className={styles.main__mainbox__footer__content}>
                  <span>Latest business guide</span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Browse free business guides</span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Business Class</span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>In-app help centre</span>
                  
                </div>
                <div className={styles.main__mainbox__footer__content}>
                  <span>Customer case studies</span>
                  
                </div>
             </div>
      </div>
    </div>
  )
}
