import React from 'react'
import styles from "./Footer.module.scss"
import {FaFlipboard} from "react-icons/fa"
import {MdRssFeed} from "react-icons/md"
import {FaTiktok} from "react-icons/fa"
import {GrPinterest} from "react-icons/gr"
import {BiLogoFacebookSquare} from "react-icons/bi"
import {FaTwitterSquare} from "react-icons/fa"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"
import {FaLinkedin} from "react-icons/fa"
import img from "../../assets/asset 12.png"
export default function Footer() {
  return (
    <div   className={styles.footer}>
        <div className={styles.footer__head}>
            <div>
                        <h3>Company</h3>
                <ul>
                    <li>About Starling</li>
                    <li>Annual Report & Pillar 3</li>
                    <li>Careers</li>
                    <li>Charity Partnerships</li>
                    <li>Corporate Governance Statement</li>
                    <li>Ethics statement</li>
                    <li>Gender equality</li>
                    <li>If Not Now, When? Initiative</li>
                    <li>Newsroom</li>
                    <li>Refer a friend scheme</li>
                    <li>Tax strategy</li>
                    <li>Women in Finance Charter</li>
                </ul>
            </div>
            <div>
                <h3>Legal</h3>
                <ul>
                    <li>All legal documents</li>
                    <li>FSCS Protection</li>
                    <li>Privacy Notice</li>
                    <li>Modern Slavery Statement</li>
                    <li>Carbon Reduction Plan</li>
                    <li>Manage cookies</li>
                </ul>
            </div>
            <div>
                    <h3>Customer support</h3>
                <ul>
                    <li>Cost of living</li>
                    <li>APP Scams Code</li>
                    <li>Banking glossary</li>
                    <li>Coronavirus support</li>
                    <li>Customer support hub</li>
                    <li>Fees, rates and charges</li>
                    <li>Help centre</li>
                    <li>How to contact us</li>
                    <li>Responsible Disclosure</li>
                    <li>Security and fraud</li>
                    <li>Service status <div></div></li>
                    <li>Website accessibility</li>
                </ul>
            </div>
            <div>
                <h3>Partner with us</h3>
                <ul>
                <li>Accountant referral programme</li>
                <li>B2B Banking Services</li>
                <li>Developers</li>
                <li>Lending Partnership Programme</li>
                </ul>
            </div>
        </div>
        <div className={styles.footer__center}>
                <div className={styles.footer__center__left}>
                        <div className={styles.footer__center__left__head}>
                            Lorem ipsum dolor sit amet.
                        </div>
                        <div className={styles.footer__center__left__foot}>
                                <ul>
                                    <li><BiLogoFacebookSquare/></li>
                                    <li><FaTwitterSquare/></li>
                                    <li><svg width="22" height="22" aria-label="Threads" fill='white' stroke='white' viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><path class="x19hqcy" d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"></path></svg></li>
                                    <li><AiOutlineInstagram/></li>
                                    <li><FaLinkedin/></li>
                                    <li><FaFlipboard/></li>
                                    <li><AiFillYoutube/></li>
                                    <li><FaTiktok/></li>
                                    <li><GrPinterest/></li>
                                    <li><MdRssFeed/></li>
                                </ul>
                        </div>
                </div>
                <div className={styles.footer__center__right}>
                    <div className={styles.footer__center__right__head}>
                    Lorem ipsum dolor sit amet.
                    </div>
                    <div className={styles.footer__center__right__foot}>
                            <div className={styles.footer__center__right__foot__head}>
                                <div className={styles.footer__center__right__foot__head__left}>
                                        <input type="email" placeholder='example@example.co.uk' name="" id="" />
                                </div>
                                <div className={styles.footer__center__right__foot__head__right}>
                                        <button>Subscribe</button>
                                </div>
                            </div>
                            <div className={styles.footer__center__right__foot__footer}>

                            <input id='checkbox' type="checkbox" />
                            <label for="checkbox">We'd love to let you know about our products, Starling news and offers via email. You may withdraw your consent at any time by following the unsubscribe link. See our Privacy Notice for how we process your personal data.</label>
                            </div>
                    </div>
                </div>
        </div>
        <div className={styles.footer__foot}>
            <div className={styles.footer__foot__left}>
                <img src={img} alt="" />
            </div>
            <div className={styles.footer__foot__right}>
                <p>Starling Bank is registered in England and Wales as Starling Bank Limited (No. 09092149), 5th Floor, London Fruit And Wool Exchange, 1 Duval Square, London, E1 6PW. We are authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority under registration number 730166.</p>
                <p>© Starling Bank 2023. All rights reserved.</p>
            </div>
        </div>


    </div>
  )
}
