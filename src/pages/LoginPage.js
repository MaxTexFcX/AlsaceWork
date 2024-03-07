import { Parallax } from 'react-parallax';
import LoginPageBG from '../global/LoginPageBG.png'
import LoginCss from '../css/LoginPage.module.css'

const LoginPage = () => {
    const content = (
        <div className={LoginCss.MainDiv}>
            <Parallax blur={2} bgImage={LoginPageBG} bgImageAlt="BG" strength={200} className={LoginCss.BGImg}>
                <div className={LoginCss.LoginDiv}>
                    <div className={LoginCss.Title}>
                        <p>Login</p>
                    </div>
                    <div className={LoginCss.Form}>
                        <input type='text' placeholder="UserName"></input>
                        <input type='password' placeholder="Password"></input>
                    </div>
                </div>
            </Parallax>
        </div>
    )
    return content
}

export default LoginPage