import React, { useEffect, useState } from 'react'
import {IoIosArrowForward} from "react-icons/io";
import styles from "./Navbar.module.scss"
import First from '../Navtabs/Firsttab/First';
import Second from '../Navtabs/Secondtab/Second';
import Third from '../Navtabs/Thirdtab/Third';
import Fourth from '../Navtabs/Fourthtab/Fourth';
export default function Navbar() {
    const [shownav, setshownav] = useState(false)
    const [active, setactive] = useState()
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(15);

    const [showtab, setshowtab] = useState(1);

    const changeTab = (tabId) => {
      setshowtab((prevOpenTab) => (prevOpenTab === tabId ? null : tabId));
      setactive(true)
    };
   
    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY > lastScrollY) { 
          setShow(false); 
          setactive(false)
        } else { 
          setShow(true);
        }
  
        setLastScrollY(window.scrollY); 
      }
    };
 
    useEffect(() => {
      if (typeof window !== 'undefined') {
        if(window.innerWidth >= 480){

          window.addEventListener('scroll', controlNavbar);
          
          return () => {
            window.removeEventListener('scroll', controlNavbar);
          }
        };
      }
    },[lastScrollY]);
    console.log(showtab)
  return (
    <div className={styles.navbar}>
            <div className={styles.navbar__uppernav}>
                    <div className={styles.navbar__uppernav__left}>
                        <p>S</p>
                        <p>Starling<br/>Bank</p>
                    </div>
                <div className={styles.navbar__uppernav__right}>
                            <button>Apply Now</button>
                        <div id='1' className={styles.navbar__uppernav__right__content}>
                            <div className={styles.navbar__uppernav__right__content__svg}>
                            <svg width="80" height="50" viewBox="-32 9 60 10" xmlns="http://www.w3.org/2000/svg"><path d="M14.12 14.054l-.743 1.083c3.777 2.652 6.101 6.93 6.304 11.544H1.318c.203-4.614 2.527-8.892 6.303-11.543.359-.251.73-.488 1.148-.728l.37-.215c.449-.25.89-.526 1.31-.82 1.645-1.143 5.47-4.203 5.47-7.92 0-3.008-2.42-5.455-5.394-5.455-2.973 0-5.392 2.447-5.392 5.456 0 1.656.773 3.379 2.298 5.119l.976-.874c-1.289-1.471-1.97-2.94-1.97-4.245 0-2.282 1.834-4.137 4.088-4.137 2.255 0 4.09 1.855 4.09 4.137 0 3.176-3.753 6.033-4.904 6.832-.387.27-.792.523-1.212.759l-.418.24c-.408.236-.813.493-1.202.767C2.571 17.077 0 22.044 0 27.34V28h21v-.66c0-5.296-2.573-10.263-6.88-13.286"  fill="#FFF" /></svg>
                            </div>
                            <p>Log in to<br/> Online Banking</p>
                        </div>
                            <div className={styles.navbar__uppernav__right__menuicon} id='2' >
                                <input onChange={()=>setshownav(!shownav)} checked={shownav} type="checkbox" className={styles.navbar__uppernav__right__menuicon__checkbox} />
                                <div>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                </div>
        </div>

        {/* Business banking */}
        {/* Overdraft & Loans */}
        {/* Money transfers */}
            <div  className={shownav ? `${styles.navbar__lowernavbox} ${styles.right}` : `${styles.navbar__lowernavbox}`}>
                <div className={show ? `${styles.navbar__lowernavbox__lowernav}` : `${styles.hide}`}>
                    <ul className={styles.navbar__lowernavbox__lowernav__left}>
                        <li className={showtab === 1 ? `${styles.active}` : ""} onClick={()=>{
                          changeTab(1)
                        }}><p>Current accounts</p><span><IoIosArrowForward/></span></li>
                        <li className={showtab === 2 ? `${styles.active}` : ""} onClick={()=>{
                          changeTab(2)
                        }}><p>Business banking</p><span><IoIosArrowForward/></span></li>
                        <li className={showtab === 3 ? `${styles.active}` : ""} onClick={()=>{
                          changeTab(3)
                        }}><p>Overdraft & Loans</p><span><IoIosArrowForward/></span></li>
                        <li className={showtab === 4 ? `${styles.active}` : ""} onClick={()=>{
                          changeTab(4)
                        }}><p>Money transfers</p><span><IoIosArrowForward/></span></li>
                    </ul>
                    <ul className={styles.navbar__lowernavbox__lowernav__right}>
                        <li><p>About</p><span><IoIosArrowForward/></span></li>
                        <li><p>Blog & News</p><span><IoIosArrowForward/></span></li>
                        <li><p>Careers</p><span><IoIosArrowForward/></span></li>
                        <li><p>Help</p><span><IoIosArrowForward/></span></li>
                    </ul>
                    <ul className={styles.navbar__lowernavbox__lowernav__btn}>
                          
                          <li>Log in to Online Banking</li>
                          <li>Apply Now</li>
                    </ul>
                </div>
                <div  className={showtab && active  ? `${styles.navbar__lowernavbox__tabbox}` : `${styles.none}`}>
                    <div className={showtab === 1 ? `${styles.block}` : `${styles.none}`}>
                      <First showtab={showtab} setshowtab={setshowtab} shownav={shownav}  setshownav={setshownav}/>
                    </div>
                    <div  className={showtab === 2 ? `${styles.block}` : `${styles.none}`}>
                      <Second showtab={showtab} setshowtab={setshowtab} shownav={shownav}  setshownav={setshownav}/>
                    </div>
                    <div  className={showtab === 3 ? `${styles.block}` : `${styles.none}`}>
                      <Third showtab={showtab} setshowtab={setshowtab} shownav={shownav}  setshownav={setshownav}/>
                    </div>
                    <div  className={showtab === 4 ? `${styles.block}` : `${styles.none}`}>
                      <Fourth showtab={showtab} setshowtab={setshowtab} shownav={shownav}  setshownav={setshownav}/>
                    </div>
                </div>
            </div>
    </div>
  )
}
