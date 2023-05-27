import '@/style/reception/About.scss'
import { Link} from 'react-router-dom';
const About = () => {
    const opengit = ()=> {
        const w = window.open('_black') //这里是打开新窗口
        let url = 'https://github.com/sooip/SheepWall/tree/master'
        w.location.href = url //这样就可以跳转了
    }
    return (
        <section className="About">
            <div className='introduce'>
                <h1>Sheep Wall 介绍</h1>
                <div>
                    Sheep Wall是一款快速分享资源应用程序。俗称“照片墙、视频墙”，基于React + Node + Koa开发的云共享资源应用系统。
                    快速分享发布照片和视频平台。兼容PC端和移动端，支持端对端跨平台上传资源文件。
                </div>
                <div>
                    由于没有设计原型图，所以这个网站在样式上都比较简洁。当然如果您有好的想法或设计，可以<a href="mailto:ki@sooi.top" rel="noopener noreferrer">
                        分享给我们</a>，非常感谢您，我们将尽快做出相应的调整和改进。
                </div>
            </div>
            <div className='Specification'>
                <h1>特别说明</h1>
                <div>
                    <ol>
                        <li>本资源来源于网络，如有侵犯您的权益，请联系<a href="mailto:ki@sooi.top" rel="noopener noreferrer">我们</a>删除。</li>
                        <li>本资源仅供参考，如有任何问题，请咨询相关专业人士。</li>
                        <li>在使用本资源前，请确认资源的版权和著作权是否清晰明确，是否已获得授权。</li>
                        <li>在使用本资源时，请不要进行任何修改或编辑，仅可用于个人学习和研究使用。</li>
                        <li>本资源仅供参考，如果因使用本资源而产生的任何问题，本站不承担任何责任。</li>
                    </ol>
                </div>
            </div>
            <div>
                <h1>仓库地址</h1>
                <p onClick={opengit}>https://github.com/sooip/SheepWall/tree/master</p>
            </div>
            <div className='ContactUs'>
                <h1>联系我们</h1>
                <ul>
                    <li><a href="mailto:ki@sooi.top" rel="noopener noreferrer"> ki@sooi.top</a></li>
                    <li><a href="mailto:suoovn@gmail.com" rel="noopener noreferrer"> suoovn@gmail.com</a></li>
                </ul>
            </div>

        </section>
    )
}
export default About;