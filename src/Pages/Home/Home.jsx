import React, { useEffect, useState } from 'react'
import styles from "./Home.module.scss"
import img1 from "../../assets/asset 20.svg"
import img2 from "../../assets/asset 21.svg"
import img4 from "../../assets/asset 24.svg"
import img5 from "../../assets/asset 22.svg"
import img6 from "../../assets/asset 23.svg"
import img9 from "../../assets/asset 30.svg"
import img11 from "../../assets/asset 32.svg"
import img15 from "../../assets/asset 36.svg"
import img16 from "../../assets/asset 37.svg"
import img18 from "../../assets/asset 38.svg"
import img19 from "../../assets/asset 39.svg"
import img20 from "../../assets/asset 40.svg"
import img21 from "../../assets/asset 41.svg"
import img22 from "../../assets/asset 42.svg"
import img23 from "../../assets/asset 43.svg"
import img24 from "../../assets/asset 44.svg"
import img13 from "../../assets/Screenshot from 2023-09-02 13-28-44.png"
import img14 from "../../assets/second.png"
import img7 from "../../assets/asset 4.jpeg"
import img8 from "../../assets/asset 5.jpeg"
import img10 from "../../assets/asset 6.jpeg"
import img12 from "../../assets/asset 7.jpeg"
import img17 from "../../assets/asset 9.jpeg"
import img25 from "../../assets/asset 10.jpeg"
import img3 from "../../assets/trustpilot-stars9095.jpg"
export default function Home() {
  const [counter, setCounter] = useState(1);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (counter <= 100) {
        setCounter(counter + 1);
        setProgress(counter);
      }
    }, 10); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, [counter]);
  return (
    <div  className={styles.home}>
        <div  className={styles.home__content}>
            <div>
            <h1><span>Banking</span>.<br/>But better.</h1>
            <p>Smooth saving. Instant insights. Beautifully organised bills.<br/>
            Starling is the full, free UK bank account you can open from your phone.</p>
            <button>Apply Now</button>
            </div>
            <div  className={styles.home__content__footer}>
              <div className={styles.div} >

                <div className={styles.home__content__footer__first}>
                    <img src={img1} alt="" />
                </div>
                <img className={styles.home__content__footer__third}  src={img3} alt="" />

              </div>
                <div className={styles.home__content__footer__second}>
                <img src={img2} alt="" />
                </div>
            </div>
            <div  className={styles.home__content__text}>
              <p>
            Over <span>35,00,000</span> digital bank<br/> accounts opened.
              </p>
            </div>
        </div>
        <div  className={styles.home__mid}>
              <div className={styles.home__mid__left}>
                    <div className={styles.home__mid__left__head}>
                      <div className={styles.home__mid__left__head__left}>
                      <img src={img5} alt="" />
                      </div>
                      <div className={styles.home__mid__left__head__right}>
                      <img src={img6} alt="" />
                      </div>
                    </div>
                    <div className={styles.home__mid__left__foot}>
                        <img src={img4} alt="" />
                    </div>
              </div>
              <div className={styles.home__mid__right}>
                    <h1>Know your <span>worth</span>.</h1>
                    <h4>Never ask ‘where’s it all gone?’ again.</h4>
                    <p>Get <span>instant alerts</span> whenever you spend. Decide <br/> where to cut back or keep going, with a deep dive<br/> into your <span>spending habits</span>.</p>
                    <button>Apply Now</button>
              </div>
        </div>
        <div  id='3' className={styles.home__third}> 
          <div className={styles.home__third__left}>
            <h1>Outsmart <span>bills</span>.</h1>
            <h4>Always know what you’ve got left to spend.</h4>
            <p>Pay bills automatically from a ring-fenced Space <br/> in your app (and get a reminder the day before<br/> they’re due). We’ll even move the money over for<br/> you.</p>
                <button>Meet Bills Manager</button>
          </div>
          <div className={styles.home__third__right}>
            <div className={styles.home__third__right__head}>
                  <div id='2' className={styles.home__third__right__head__left}>
                    <div className={styles.home__third__right__head__left__counterbox}>
                    <div className={styles.home__third__right__head__left__counterbox__img}>
                      <img src="https://wallpapers.com/images/featured/4k-nature-ztbad1qj8vdjqe0p.jpg" alt="" />
                    </div>
                    <div className={styles.home__third__right__head__left__counterbox__content}>
                          <div className={styles.home__third__right__head__left__counterbox__content__upper}>
                                <h2>$451236</h2>
                                <p><span>{progress}%</span></p>
                          </div>
                          <div style={{ width: `${progress}%` }} className={styles.home__third__right__head__left__counterbox__content__lower}>

                          </div>
                    </div>
                    </div>
                  </div>
                  <div className={styles.home__third__right__head__right}>
                    <img src={img7} alt="" />
                  </div>
            </div>
              <div  className={styles.home__third__right__foot}>

                    <img src={img8} alt="" />
              </div>

          </div>
        </div>
        <div  id='4' className={styles.home__fourth}>
            <div className={styles.home__fourth__left}>
                  <div className={styles.home__fourth__left__first}>
                    <div className={styles.home__fourth__left__first__box}>
                        <div className={styles.home__fourth__left__first__box__img}>
                                <img src={img7} alt="" />
                        </div>
                        <div id='4' className={styles.home__fourth__left__first__box__content}>
                              <div className={styles.home__fourth__left__first__box__content__upper}>
                                  <h2>House Renovations</h2>
                                  <p>Saving Space</p>
                              </div>
                              <div className={styles.home__fourth__left__first__box__content__lower}>
                                  <div className={styles.home__fourth__left__first__box__content__lower__head}>
                                    <h2>$54687</h2>
                                    <p>100%</p>
                                  </div>
                                  <div className={styles.home__fourth__left__first__box__content__lower__foot}>

                                  </div>
                              </div>
                              
                        </div>
                    </div>

                  </div>
                  <div className={styles.home__fourth__left__second}>
                    <div className={styles.home__fourth__left__second__box}>
                    <div className={styles.home__fourth__left__second__box__img}>
                                <img src={img7} alt="" />
                        </div>
                        <div id='4' className={styles.home__fourth__left__second__box__content}>
                              <div className={styles.home__fourth__left__second__box__content__upper}>
                                  <h2>House Renovations</h2>
                                  <p>Saving Space</p>
                              </div>
                              <div className={styles.home__fourth__left__second__box__content__lower}>
                                  <div className={styles.home__fourth__left__second__box__content__lower__head}>
                                    <h2>$54687</h2>
                                    <p>100%</p>
                                  </div>
                                  <div className={styles.home__fourth__left__second__box__content__lower__foot}>

                                  </div>
                              </div>
                              
                        </div>
                    </div>

                  </div>
                  <div  className={styles.home__fourth__left__third}>
                    <div className={styles.home__fourth__left__third__box}>
                    <div className={styles.home__fourth__left__third__box__img}>
                                <img src={img7} alt="" />
                        </div>
                        <div id='4' className={styles.home__fourth__left__third__box__content}>
                              <div className={styles.home__fourth__left__second__box__content__upper}>
                                  <h2>House Renovations</h2>
                                  <p>Saving Space</p>
                              </div>
                              <div className={styles.home__fourth__left__third__box__content__lower}>
                                  <div className={styles.home__fourth__left__third__box__content__lower__head}>
                                    <h2>$54687</h2>
                                    <p>100%</p>
                                  </div>
                                  <div className={styles.home__fourth__left__third__box__content__lower__foot}>

                                  </div>
                              </div>
                              
                        </div>
                    </div>

                  </div>
            </div>
            <div  className={styles.home__fourth__right}>
                  <h1>Smash your <span>saving goals</span>.</h1>
                  <h4>Holidays. Rainy days. Lay out multiple goals,<br/> beautifully. Track your progress, effortlessly.</h4>
                  <p><span>Create Saving Spaces</span>, add images and switch on<br/> Round Ups to get there faster. Or set money aside<br/> to keep key business costs organised.</p>
                  <div className={styles.home__fourth__right__content}>
                      <h4>Got a bigger chunk gathering dust?</h4>
                      <p>Make the most of it. Earn 5.25% AER/gross<br/> interest with a personal account <span>Fixed Saver</span>.</p>
                  </div>
            </div>
        </div>
        <div  id='5' className={styles.home__fifth}>
          <div className={styles.home__fifth__left}>
                <h1>Turn <span>IOU</span> into <i>phew</i>.</h1>
                <h4>It’s payback time.</h4>
                <p>Send and request payments, without the<br/> awkwardness. Fire off a quick link to <span>settle up</span>, or<br/> split the bill at dinner with a tap of your app.</p>
                <button>Apply Now</button>
          </div>
          <div className={styles.home__fifth__right}>
                <div className={styles.home__fifth__right__head}>
                    <div className={styles.home__fifth__right__head__left}>
                            <img src={img9} alt="" />
                    </div>
                    <div className={styles.home__fifth__right__head__right}>
                        <div className={styles.home__fifth__right__head__right__img}>
                              <img src={img10} alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.home__fifth__right__foot}>
                      <img src={img11} alt="" />
                </div>

          </div>
        </div>
        <div  id='6' className={styles.home__six}>
            <div id='5.5' className={styles.home__six__left}>
                <div className={styles.home__six__left__head}>
                    <div className={styles.home__six__left__head__img}>
                            <img src={img12} alt="" />
                    </div>
                </div>
                <div className={styles.home__six__left__foot}>
                    <div className={styles.home__six__left__foot__box}>
                    <div className={styles.home__six__left__foot__box__img}>

                        </div>
                        <div id='4' className={styles.home__six__left__foot__box__content}>
                              <div className={styles.home__six__left__foot__box__content__upper}>
                                  <h2>House Renovations</h2>
                                  <p>Saving Space</p>
                              </div>
                              <div className={styles.home__six__left__foot__box__content__lower}>
                                  <div className={styles.home__six__left__foot__box__content__lower__head}>
                                    <h2>$54687</h2>
                                    <p>100%</p>
                                  </div>
                                  <div className={styles.home__six__left__foot__box__content__lower__foot}>

                                  </div>
                              </div>
                              
                        </div>

                    </div>
                </div>
            </div>
            <div className={styles.home__six__mid}>
                    <img src={img13} alt="" />
            </div>
            <div className={styles.home__six__right}>
                    <h1>Rule every <span>budget</span>.</h1>
                    <p>Create budgets, then spend from them directly by<br/> assigning a virtual debit card – use it online or add<br/> to your mobile wallet to pay in-person.</p>
                    <p><span>Doing the big shop?</span> Pay with your ‘Groceries’<br/> budget. <span>On holiday?</span> Spend from your ‘Weekend<br/> Away’ Space.</p>
                    <button>Tell me more</button>
            </div>

        </div>
        <div  id='7' className={styles.home__seventh}>
            <div className={styles.home__seventh__left}> 
                  <h1><span>Spend fee-free</span> overseas.</h1>
                  <h4>Pay like a local, anywhere in the world that<br/> accepts Mastercard™.</h4>
                  <p>Unlike most banks, we’ll never mark up the<br/> exchange rate. Bon voyage.</p>
                  <button>Apply Now</button>
            </div>
            <div className={styles.home__seventh__right}>
                <div className={styles.home__seventh__right__left_contnet}>
                      <div className={styles.home__seventh__right__left_contnet__img}>
                            <img src={img14} alt="" />
                      </div>
                </div>
                <div className={styles.home__seventh__right__right_contnet}> 
                       <div className={styles.home__seventh__right__right_contnet__head}>
                            <div className={styles.home__seventh__right__right_contnet__head__img}>
                                    <img src={img15} alt="" />
                            </div>
                       </div>
                       <div className={styles.home__seventh__right__right_contnet__foot}>
                        <div className={styles.home__seventh__right__right_contnet__foot__img}>
                              <img src={img16} alt="" />
                        </div>
                       </div>
                </div>
            </div>
        </div>
        <div  className={styles.home__eight}>
              <div className={styles.home__eight__left}>
                  <div className={styles.home__eight__left__first}>
                      <div className={styles.home__eight__left__first__content}>
                        <h3>You</h3>
                        <p>Help, I’ve lost my bank card</p>
                      </div>
                  </div>
                  <div className={styles.home__eight__left__second}>
                      <div className={styles.home__eight__left__second__content}> 
                            <h3>Starling Bank</h3>
                            <p>Okay, don’t worry.<br/> You can ‘lock’ it in app with just a tap.</p>
                      </div>
                  </div>
                  <div className={styles.home__eight__left__third}>
                        <div className={styles.home__eight__left__third__content}>
                              <h3>You</h3>
                              <p>Oh, that’s a relief. Thanks!</p>
                        </div>
                  </div>
                  <div className={styles.home__eight__left__fourth}>
                        <div className={styles.home__eight__left__fourth__content}>
                              <p>Starling Bank is typing</p>
                              <span className={styles.full_stop_animation}></span>
                        </div>
                  </div>
              </div>
              <div className={styles.home__eight__right}>
                <div className={styles.home__eight__right__content}>
                    <h1>Meet the bank that <span>never</span><br/> <span>closes</span>.</h1>
                    <h4>Night shift? New timezone?</h4>
                    <p>No bots, no call time targets. Talk to our UK-based<br/> team 24 hours a day, every day of the year.</p>
                </div>
              </div>
        </div>
        <div  className={styles.home__nine}>
                <div className={styles.home__nine__left}>
                      <div className={styles.home__nine__left__content}>
                            <h1>Breathe easy with <span>secure<br/> banking</span>.</h1>
                            <p>World-class banking security, at your fingertips.<br/> From logging in to making payments, keep your<br/> money under lock and key (and code and<br/> fingerprint) with <span>industry-leading</span> security<br/> features.</p>
                      </div>
                </div>
                <div className={styles.home__nine__right}> 
                <div className={styles.home__nine__right__head}>
                    <div className={styles.home__nine__right__head__first}>
                          <img src={img17} alt="" />
                    </div>
                    <div className={styles.home__nine__right__head__second}>
                            <div className={styles.home__nine__right__head__second__img}>
                                    <img src={img18} alt="" />
                            </div>
                    </div>
                    <div className={styles.home__nine__right__head__third}>
                        <div className={styles.home__nine__right__head__third__img}>
                        <img src={img19} alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.home__nine__right__foot}>
                      <div className={styles.home__nine__right__foot__img}>
                                <img src={img20} alt="" />
                      </div>
                </div>
                </div>
        </div>
        <div  className={styles.home__ten}>
            <div className={styles.home__ten__content}>
                <div className={styles.home__ten__content__head}>
                    <img src={img21} alt="" />
                </div>
                <div className={styles.home__ten__content__foot}>
                      <button>Personal</button>
                </div>
            </div>
            <div className={styles.home__ten__content}>
                <div className={styles.home__ten__content__head}>
                    <img src={img22} alt="" />
                </div>
                <div className={styles.home__ten__content__foot}>
                      <button>Personal</button>
                </div>
            </div>
            <div className={styles.home__ten__content}>
                <div className={styles.home__ten__content__head}>
                    <img src={img23} alt="" />
                </div>
                <div className={styles.home__ten__content__foot}>
                      <button>Personal</button>
                </div>
            </div>
            <div className={styles.home__ten__content}>
                <div className={styles.home__ten__content__head}>
                    <img src={img24} alt="" />
                </div>
                <div className={styles.home__ten__content__foot}>
                      <button>Personal</button>
                </div>
            </div>
        </div>
        <div  className={styles.home__eleven}> 
                <div id='contnet' className={styles.home__eleven__content}>
                        <h1><span>Everything</span> you need.</h1>
                        <div className={styles.home__eleven__content__list}>
                          <ul>
                            <li><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 44 24"><circle cx="12" cy="12" r="12" fill="#19D3C5"/><path d="M15.74 8.53a.756.756 0 0 1 1.066-.154c.306.232.39.65.214.98l-.061.096-4.915 6.617a2.02 2.02 0 0 1-3 .28l-2.599-2.622a.774.774 0 0 1 0-1.088.756.756 0 0 1 .991-.074l.086.075 2.566 2.59.023.018a.507.507 0 0 0 .653-.032l.062-.07L15.74 8.53Z" fill="#192852"/></svg>
                              FSCS protection up to £85k</li>
                            <li><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 44 24"><circle cx="12" cy="12" r="12" fill="#19D3C5"/><path d="M15.74 8.53a.756.756 0 0 1 1.066-.154c.306.232.39.65.214.98l-.061.096-4.915 6.617a2.02 2.02 0 0 1-3 .28l-2.599-2.622a.774.774 0 0 1 0-1.088.756.756 0 0 1 .991-.074l.086.075 2.566 2.59.023.018a.507.507 0 0 0 .653-.032l.062-.07L15.74 8.53Z" fill="#192852"/></svg>
                            24/7 UK customer support</li>
                            <li><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 44 24"><circle cx="12" cy="12" r="12" fill="#19D3C5"/><path d="M15.74 8.53a.756.756 0 0 1 1.066-.154c.306.232.39.65.214.98l-.061.096-4.915 6.617a2.02 2.02 0 0 1-3 .28l-2.599-2.622a.774.774 0 0 1 0-1.088.756.756 0 0 1 .991-.074l.086.075 2.566 2.59.023.018a.507.507 0 0 0 .653-.032l.062-.07L15.74 8.53Z" fill="#192852"/></svg>
                            Instant card locking</li>
                           <li><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 44 24"><circle cx="12" cy="12" r="12" fill="#19D3C5"/><path d="M15.74 8.53a.756.756 0 0 1 1.066-.154c.306.232.39.65.214.98l-.061.096-4.915 6.617a2.02 2.02 0 0 1-3 .28l-2.599-2.622a.774.774 0 0 1 0-1.088.756.756 0 0 1 .991-.074l.086.075 2.566 2.59.023.018a.507.507 0 0 0 .653-.032l.062-.07L15.74 8.53Z" fill="#192852"/></svg>
                           Overdrafts (if eligible)</li>
                            <li><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 44 24"><circle cx="12" cy="12" r="12" fill="#19D3C5"/><path d="M15.74 8.53a.756.756 0 0 1 1.066-.154c.306.232.39.65.214.98l-.061.096-4.915 6.617a2.02 2.02 0 0 1-3 .28l-2.599-2.622a.774.774 0 0 1 0-1.088.756.756 0 0 1 .991-.074l.086.075 2.566 2.59.023.018a.507.507 0 0 0 .653-.032l.062-.07L15.74 8.53Z" fill="#192852"/></svg>
                            Fully regulated UK bank</li> 
                          </ul>
                          <ul>
                            <li><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 44 24"><circle cx="12" cy="12" r="12" fill="#19D3C5"/><path d="M15.74 8.53a.756.756 0 0 1 1.066-.154c.306.232.39.65.214.98l-.061.096-4.915 6.617a2.02 2.02 0 0 1-3 .28l-2.599-2.622a.774.774 0 0 1 0-1.088.756.756 0 0 1 .991-.074l.086.075 2.566 2.59.023.018a.507.507 0 0 0 .653-.032l.062-.07L15.74 8.53Z" fill="#192852"/></svg>
                            Scan cheques in-app</li>
                            <li><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 44 24"><circle cx="12" cy="12" r="12" fill="#19D3C5"/><path d="M15.74 8.53a.756.756 0 0 1 1.066-.154c.306.232.39.65.214.98l-.061.096-4.915 6.617a2.02 2.02 0 0 1-3 .28l-2.599-2.622a.774.774 0 0 1 0-1.088.756.756 0 0 1 .991-.074l.086.075 2.566 2.59.023.018a.507.507 0 0 0 .653-.032l.062-.07L15.74 8.53Z" fill="#192852"/></svg>
                            Instant notifications</li>
                            <li><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 44 24"><circle cx="12" cy="12" r="12" fill="#19D3C5"/><path d="M15.74 8.53a.756.756 0 0 1 1.066-.154c.306.232.39.65.214.98l-.061.096-4.915 6.617a2.02 2.02 0 0 1-3 .28l-2.599-2.622a.774.774 0 0 1 0-1.088.756.756 0 0 1 .991-.074l.086.075 2.566 2.59.023.018a.507.507 0 0 0 .653-.032l.062-.07L15.74 8.53Z" fill="#192852"/></svg>
                            Use with mobile wallets</li>
                           <li><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 44 24"><circle cx="12" cy="12" r="12" fill="#19D3C5"/><path d="M15.74 8.53a.756.756 0 0 1 1.066-.154c.306.232.39.65.214.98l-.061.096-4.915 6.617a2.02 2.02 0 0 1-3 .28l-2.599-2.622a.774.774 0 0 1 0-1.088.756.756 0 0 1 .991-.074l.086.075 2.566 2.59.023.018a.507.507 0 0 0 .653-.032l.062-.07L15.74 8.53Z" fill="#192852"/></svg>
                           Cash deposits</li>
                            <li><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 44 24"><circle cx="12" cy="12" r="12" fill="#19D3C5"/><path d="M15.74 8.53a.756.756 0 0 1 1.066-.154c.306.232.39.65.214.98l-.061.096-4.915 6.617a2.02 2.02 0 0 1-3 .28l-2.599-2.622a.774.774 0 0 1 0-1.088.756.756 0 0 1 .991-.074l.086.075 2.566 2.59.023.018a.507.507 0 0 0 .653-.032l.062-.07L15.74 8.53Z" fill="#192852"/></svg>
                            Direct Debits</li>
                          </ul>
                          <ul>
                            <li><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 44 24"><circle cx="12" cy="12" r="12" fill="#19D3C5"/><path d="M15.74 8.53a.756.756 0 0 1 1.066-.154c.306.232.39.65.214.98l-.061.096-4.915 6.617a2.02 2.02 0 0 1-3 .28l-2.599-2.622a.774.774 0 0 1 0-1.088.756.756 0 0 1 .991-.074l.086.075 2.566 2.59.023.018a.507.507 0 0 0 .653-.032l.062-.07L15.74 8.53Z" fill="#192852"/></svg>
                            100% digital sign up</li>
                            <li><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 44 24"><circle cx="12" cy="12" r="12" fill="#19D3C5"/><path d="M15.74 8.53a.756.756 0 0 1 1.066-.154c.306.232.39.65.214.98l-.061.096-4.915 6.617a2.02 2.02 0 0 1-3 .28l-2.599-2.622a.774.774 0 0 1 0-1.088.756.756 0 0 1 .991-.074l.086.075 2.566 2.59.023.018a.507.507 0 0 0 .653-.032l.062-.07L15.74 8.53Z" fill="#192852"/></svg>
                            No fees overseas</li>
                            <li><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 44 24"><circle cx="12" cy="12" r="12" fill="#19D3C5"/><path d="M15.74 8.53a.756.756 0 0 1 1.066-.154c.306.232.39.65.214.98l-.061.096-4.915 6.617a2.02 2.02 0 0 1-3 .28l-2.599-2.622a.774.774 0 0 1 0-1.088.756.756 0 0 1 .991-.074l.086.075 2.566 2.59.023.018a.507.507 0 0 0 .653-.032l.062-.07L15.74 8.53Z" fill="#192852"/></svg>
                            Split the bill with friends</li>
                           <li><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 44 24"><circle cx="12" cy="12" r="12" fill="#19D3C5"/><path d="M15.74 8.53a.756.756 0 0 1 1.066-.154c.306.232.39.65.214.98l-.061.096-4.915 6.617a2.02 2.02 0 0 1-3 .28l-2.599-2.622a.774.774 0 0 1 0-1.088.756.756 0 0 1 .991-.074l.086.075 2.566 2.59.023.018a.507.507 0 0 0 .653-.032l.062-.07L15.74 8.53Z" fill="#192852"/></svg>
                           Virtual cards</li>
                            <li><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 44 24"><circle cx="12" cy="12" r="12" fill="#19D3C5"/><path d="M15.74 8.53a.756.756 0 0 1 1.066-.154c.306.232.39.65.214.98l-.061.096-4.915 6.617a2.02 2.02 0 0 1-3 .28l-2.599-2.622a.774.774 0 0 1 0-1.088.756.756 0 0 1 .991-.074l.086.075 2.566 2.59.023.018a.507.507 0 0 0 .653-.032l.062-.07L15.74 8.53Z" fill="#192852"/></svg>
                            World-class security features</li>
                          </ul>
                
                        </div>
                </div>
                <div id='contnet' className={styles.home__eleven__content}>
                        <h1><span>Nothing</span> you don’t.</h1>
                        <div className={styles.home__eleven__content__list}>
                          <ul>
                            <li><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 44 24"><circle cx="12" cy="12" r="12" fill="#EA5C5C"/><path d="M7.92 8.22c0 .19.063.347.21.483l3.181 3.167-3.181 3.187a.642.642 0 0 0-.21.482c0 .367.294.661.65.661.2 0 .347-.073.484-.21l3.191-3.187L15.447 16c.137.136.284.199.462.199a.65.65 0 0 0 .651-.66c0-.179-.063-.315-.21-.462L13.16 11.87l3.191-3.178a.626.626 0 0 0 .2-.471.647.647 0 0 0-.64-.661.612.612 0 0 0-.473.2l-3.192 3.187-3.202-3.188a.612.612 0 0 0-.472-.199.656.656 0 0 0-.65.66Z" fill="#fff"/></svg>

                            No card-readers</li>
                            <li><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 44 24"><circle cx="12" cy="12" r="12" fill="#EA5C5C"/><path d="M7.92 8.22c0 .19.063.347.21.483l3.181 3.167-3.181 3.187a.642.642 0 0 0-.21.482c0 .367.294.661.65.661.2 0 .347-.073.484-.21l3.191-3.187L15.447 16c.137.136.284.199.462.199a.65.65 0 0 0 .651-.66c0-.179-.063-.315-.21-.462L13.16 11.87l3.191-3.178a.626.626 0 0 0 .2-.471.647.647 0 0 0-.64-.661.612.612 0 0 0-.473.2l-3.192 3.187-3.202-3.188a.612.612 0 0 0-.472-.199.656.656 0 0 0-.65.66Z" fill="#fff"/></svg>
                            No hidden fees</li>
                           </ul>
                           <ul>
                            <li><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 44 24"><circle cx="12" cy="12" r="12" fill="#EA5C5C"/><path d="M7.92 8.22c0 .19.063.347.21.483l3.181 3.167-3.181 3.187a.642.642 0 0 0-.21.482c0 .367.294.661.65.661.2 0 .347-.073.484-.21l3.191-3.187L15.447 16c.137.136.284.199.462.199a.65.65 0 0 0 .651-.66c0-.179-.063-.315-.21-.462L13.16 11.87l3.191-3.178a.626.626 0 0 0 .2-.471.647.647 0 0 0-.64-.661.612.612 0 0 0-.473.2l-3.192 3.187-3.202-3.188a.612.612 0 0 0-.472-.199.656.656 0 0 0-.65.66Z" fill="#fff"/></svg>
                            No branch queues</li>
                            <li><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 44 24"><circle cx="12" cy="12" r="12" fill="#EA5C5C"/><path d="M7.92 8.22c0 .19.063.347.21.483l3.181 3.167-3.181 3.187a.642.642 0 0 0-.21.482c0 .367.294.661.65.661.2 0 .347-.073.484-.21l3.191-3.187L15.447 16c.137.136.284.199.462.199a.65.65 0 0 0 .651-.66c0-.179-.063-.315-.21-.462L13.16 11.87l3.191-3.178a.626.626 0 0 0 .2-.471.647.647 0 0 0-.64-.661.612.612 0 0 0-.473.2l-3.192 3.187-3.202-3.188a.612.612 0 0 0-.472-.199.656.656 0 0 0-.65.66Z" fill="#fff"/></svg>
                            No fees for spending abroad</li>
                           </ul>
                           <ul>
                            <li><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 44 24"><circle cx="12" cy="12" r="12" fill="#EA5C5C"/><path d="M7.92 8.22c0 .19.063.347.21.483l3.181 3.167-3.181 3.187a.642.642 0 0 0-.21.482c0 .367.294.661.65.661.2 0 .347-.073.484-.21l3.191-3.187L15.447 16c.137.136.284.199.462.199a.65.65 0 0 0 .651-.66c0-.179-.063-.315-.21-.462L13.16 11.87l3.191-3.178a.626.626 0 0 0 .2-.471.647.647 0 0 0-.64-.661.612.612 0 0 0-.473.2l-3.192 3.187-3.202-3.188a.612.612 0 0 0-.472-.199.656.656 0 0 0-.65.66Z" fill="#fff"/></svg>
                            No call time targets</li>
                            <li><svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="-5 0 44 24"><circle cx="12" cy="12" r="12" fill="#EA5C5C"/><path d="M7.92 8.22c0 .19.063.347.21.483l3.181 3.167-3.181 3.187a.642.642 0 0 0-.21.482c0 .367.294.661.65.661.2 0 .347-.073.484-.21l3.191-3.187L15.447 16c.137.136.284.199.462.199a.65.65 0 0 0 .651-.66c0-.179-.063-.315-.21-.462L13.16 11.87l3.191-3.178a.626.626 0 0 0 .2-.471.647.647 0 0 0-.64-.661.612.612 0 0 0-.473.2l-3.192 3.187-3.202-3.188a.612.612 0 0 0-.472-.199.656.656 0 0 0-.65.66Z" fill="#fff"/></svg>
                            No bots</li>
                           </ul>
                
                        </div>
                </div>
        </div>
        <div  className={styles.home__twelve}>
              <div className={styles.home__twelve__left}>
                  <img src={img25} alt="" />
              </div>

              <div className={styles.home__twelve__right}>
                  <h1><span>Independent</span> service<br/> quality survey results.</h1>
                  <p>As part of a regulatory requirement, independent<br/> surveys were conducted to ask customers of the<br/> largest personal and business current account<br/> providers in Great Britain and Northern Ireland if<br/> they would recommend their provider to friends<br/> and family. See Starling’s results for <span>personal<br/> accounts</span> and <span>business accounts</span>.</p>
                  <button>Compare bank accounts</button>
              </div>
        </div>
        <div  className={styles.home__thirteen}>
            <h1>Apply for a bank account <span>in minutes</span> from your phone.</h1>
            <p>Every bank account with Starling comes with no monthly fees, the toughest security features and a<br/> Mastercard™ bank card.
              </p>
            <button>Apply Now</button>
        </div>
    </div>
  )
}
