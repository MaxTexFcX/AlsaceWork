import FooterCss from '../css/PublicFooter.module.css'
import Logo from '../global/stopwatch.png'
import WhatsAPPSvg from '../global/Whatsapp.svg'
import InstagramSvg from '../global/Instagram.svg'
import FacebookSvg from '../global/Facebook.svg'

const PublicFooter = () => {
    const content = (
        <>
            <section className={FooterCss.MainSection}>
                    <div className={FooterCss.LogoDescription}>
                        <div className={FooterCss.LogoImgDiv}>
                            <img src={Logo} alt="Logo" className={FooterCss.LogoImg}></img>
                        </div>
                        <div className={FooterCss.LogoTextDiv}>
                            <p className={FooterCss.LogoText}>NWA Workshop</p>
                            <div className={FooterCss.DescriptionDiv}>
                                <p className={FooterCss.DescriptionText}>香港本地品牌，致力為客戶提供優質產品</p>
                                <p className={FooterCss.DescriptionText}>服務，為您的生活增添一些不平凡的體驗。</p>
                            </div>
                        </div>
                    </div>
                    <div className={FooterCss.MainDescription}>
                        <div className={FooterCss.FollowUsDiv}>
                            <div className={FooterCss.FollowUsTextDiv}>
                                <p className={FooterCss.FollowUsText}>Follow Us</p>
                            </div>
                            <div className={FooterCss.IconDiv}>
                                <div className={FooterCss.icon}><img src={WhatsAPPSvg} alt="Whatsapp" /></div>
                                <div className={FooterCss.icon}><img src={InstagramSvg} alt="InstagramSvg" /></div>
                                <div className={FooterCss.icon}><img src={FacebookSvg} alt="Facebook" /></div>
                            </div>
                        </div>
                        <div className={FooterCss.MainSubscrible}>
                            <div className={FooterCss.SubscribleTextDiv}>
                                <p className={FooterCss.SubscribleText}>Subscribe</p>
                            </div>
                            <div>
                                <input type="email" id="" name="Email" className={FooterCss.SubscribleTxtBox} />
                                <button className={FooterCss.SubscribleBtn}>Send</button>
                            </div>
                        </div>
                        <div className={FooterCss.FooterLine}></div>
                    </div>
            </section>
        </>
    )
    return content
}
export default PublicFooter