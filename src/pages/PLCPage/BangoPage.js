import BGcss from '../../css/Bango.module.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from 'react';
import PLCLogo from '../../global/PLCLogo.jpg'


const BangoPage = () => {

    const [random, setRandom] = useState(10000000000);
    const audioRef = useRef(null);
    const [currentEmoji, setCurrentEmoji] = useState('');
    const [record, setRecord] = useState([]);
    const [indexnumber, setindexnumber] = useState(0)
    const [rspeed, setSpeed] = useState(0);
    const [pgrunning, setPGRunning] = useState(false)
    const [endgame, setEndGame] = useState(false)
    const [emoji, setEmoji] = useState([
        {
            id: 0,
            emoji_icon: '❤',
            emoji_status: true
        },
        {
            id: 1,
            emoji_icon: '💖',
            emoji_status: true
        },
        {
            id: 2,
            emoji_icon: '💋',
            emoji_status: true
        },
        {
            id: 3,
            emoji_icon: '😍',
            emoji_status: true
        },
        {
            id: 4,
            emoji_icon: '😃',
            emoji_status: true
        },
        {
            id: 5,
            emoji_icon: '😂',
            emoji_status: true
        },
        {
            id: 6,
            emoji_icon: '😘',
            emoji_status: true
        },
        {
            id: 7,
            emoji_icon: '🎉',
            emoji_status: true
        },
        {
            id: 8,
            emoji_icon: '👍',
            emoji_status: true
        },
        {
            id: 9,
            emoji_icon: '👽',
            emoji_status: true
        },
        {
            id: 10,
            emoji_icon: '😎',
            emoji_status: true
        },
        {
            id: 11,
            emoji_icon: '🤓',
            emoji_status: true
        },
        {
            id: 12,
            emoji_icon: '💩',
            emoji_status: true
        },
        {
            id: 13,
            emoji_icon: '😡',
            emoji_status: true
        },
        {
            id: 14,
            emoji_icon: '😜',
            emoji_status: true
        },
        {
            id: 15,
            emoji_icon: '😇',
            emoji_status: true
        },
        {
            id: 16,
            emoji_icon: '👑',
            emoji_status: true
        },
        {
            id: 17,
            emoji_icon: '🐵',
            emoji_status: true
        },
        {
            id: 18,
            emoji_icon: '🐶',
            emoji_status: true
        },
        {
            id: 19,
            emoji_icon: '🐱',
            emoji_status: true
        },
        {
            id: 20,
            emoji_icon: '😱',
            emoji_status: true
        },
        {
            id: 21,
            emoji_icon: '🙁',
            emoji_status: true
        },
        {
            id: 22,
            emoji_icon: '👏',
            emoji_status: true
        },
        {
            id: 23,
            emoji_icon: '😴',
            emoji_status: true
        },
        {
            id: 24,
            emoji_icon: '🍭',
            emoji_status: true
        },
    ])

    const settings = {
        infinite: true,
        speed: rspeed,
        autoplay: true,
        autoplaySpeed: random,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchMove: false,
        beforeChange: (currentSlide, nextSlide) => {
            const emoji = getEmoji(nextSlide);
            setCurrentEmoji(emoji);
        },
    };

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const StartRandom = async () => {
        if (emoji.length > 1 && pgrunning === false) {
            setPGRunning(true)
            setRecord(prevRecord => [...prevRecord, currentEmoji]);
            SetEmojiStatus()
            setRandom(0)
            //await delay(10000);
            await delay(300);
            setRandom(10000000000);
            setSpeed(0);
            setPGRunning(false)
        } else if (emoji.length <= 1) {
            setRecord(prevRecord => [...prevRecord, currentEmoji]);
            setEndGame(true)
        }
    }

    const SetEmojiStatus = () => {
        emoji.splice(indexnumber, 1)
        console.log(emoji);
    }

    const getEmoji = (slideIndex) => {
        setindexnumber(slideIndex)
        return emoji[slideIndex].emoji_icon || '';
    };

    const content = (
        <section className={BGcss.SectionMain}>

            <div className={BGcss.EmojiDiv}>
                <Slider {...settings}>
                    {emoji.length === 25 || endgame === true ? (
                        <img src={PLCLogo} alt="PLC Logo" className={BGcss.Logo}></img>
                    ) : (
                        null
                    )}
                    {emoji.map((emoji) => (
                        <div>
                            <p>{emoji.emoji_icon}</p>
                        </div>
                    ))}
                </Slider>
            </div>

            {endgame === false ? (
                <div className={BGcss.StartBtn} onClick={StartRandom}>
                    <p>Start</p>
                </div>
            ) : (null)}



            {/* <p>Current Emoji: {currentEmoji}</p> */}

            <div className={BGcss.RecordLIst}>
                {/* <h3>Emoji Record: {indexnumber}</h3> */}
                {record.map((emoji, index) => (
                    <div>
                    { index >= 1 ? (
                        <div>
                            <p key={index} className={BGcss.displaynumber}>{index}</p>
                            <p key={index} className={BGcss.displaynumber}>{emoji}</p>
                        </div>
                    ) : (
                        null
                    )}
                    </div>
                ))}

            </div>

        </section>
    )
    return content
}
export default BangoPage