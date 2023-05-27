import '@/style/reception/About.scss'

const About = () => {
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
                        分享给我们</a>，我们将尽快做出相应的调整和改进。
                </div>
            </div>

        </section>
    )
}
export default About;