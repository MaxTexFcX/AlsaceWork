import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import HomePageCss from '../css/HomePage.module.css'
//Img
import BGImg from '../global/HomePageBG.png'


const HomePage = () => {
    const content = (
        <div className={HomePageCss.Main}>
            <Parallax blur={3} bgImage={BGImg} bgImageAlt="BG" strength={200} className={HomePageCss.BGImg}>
                <div className={HomePageCss.Text}>
                    <p>You dare to create</p>
                    <p>we dare to do</p>
                </div>
                <div className={HomePageCss.DivBtn}>
                    <Link to="/"><button className={HomePageCss.BtnHomePage}>Join Us</button></Link>
                    <Link to="/"><button className={HomePageCss.BtnHomePage}>Learn More</button></Link>
                </div>
            </Parallax>
        </div>
    )
    return content
};


export default HomePage;