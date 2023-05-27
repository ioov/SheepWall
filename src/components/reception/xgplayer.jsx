
import Player from 'xgplayer';
import 'xgplayer/dist/index.min.css';
import { Button, Modal } from 'antd';
import { useState,useEffect } from 'react';

const Xgplayer = () => {
    const [url, setUrl] = useState('/src/assets/test.mp4');
    let config = {

        id: 'mse',      //容器ID
        el: document.querySelector('#mse'),
        poster: '',     //封面图地址
        // url:rul.current,        //视频地址
        url:url,        //视频地址
        // url: "/src/assets/test.mp4",
        height: 200,    //高度
        // videoInit:true,     //是否默认初始化video，当autoplay为true时，该配置为false无效
        autoplay: true,   //是否自动播放，不是所有场景配置了自动播放都可以成功自动起播的，具体说明请看自动播放相关知识
        playsinline: true,  //是否启用内联播放模式，
        lang: 'zh-cn',  //播放器初始显示语言
        fluid: true,    //是否启用流式布局
        fitVideoSize: 'auto',
        seekedStatus: "pause",   //seek操作结束之后播放器的状态，如果取值为auto，则维持原播放状态, 默认是seek之后直接播放
        topBarAutoHide: true,   //是否自动隐藏播放器容器的顶部边栏 
        miniprogress: true,     //开启迷你进度条 
        closeVideoTouch: true,
        closePlayVideoFocus: true,   //是否关闭play时触发player焦点状态
        'x5-video-player-type': 'h5',
        'x5-video-player-fullscreen': true,
        'x5-video-orientation': 'portraint',
        loading: 'Loading···',

        play: {      //播放||暂停 按钮
            index: 0,
        },
        progress: {
            index: 2,
        },
        pip: {       //开启画中画
            showIcon: true,
            index: 5
        },
        volume: { //默认音量, 取值范围0 ~ 1
            index: 6,
            default: 0.6,
            miniVolume: 0.3,
            showValueLabel: true,
        },
        playbackRate: {  //播放倍速列表
            index: 5,
            list: [3, 2, 1.5, 1.25, 1, 0.75, 0.5]
        },
        time: {
            index: 2,
            default: "rootTop",
        },
        // rotate: true, //显示旋转按钮
        rotate: {   //视频旋转按钮配置项
            index: 1,
            innerRotate: true, //只旋转内部video
            // clockwise: false, // 旋转方向是否为顺时针
            rotateDeg: 0,
        },

        mobile: {
            disableGesture: false,
            gestureX: true,
            gestureY: true,
            scopeL: 0.5,
            scopeR: 0.5,
            pressRate: 3,
            darkness: true,
            maxDarkness: 0.8,
            disableTimeProgress: false,
            isTouchingSeek: true,
            miniMoveStep: 5,
            disablePress: false,
            disableSeekIcon: false,

        },

    }
    const main =() => new Player(config);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal =async () => {
        await setIsModalOpen(true);
        await main()
        // await setUrl('/src/assets/video/SK0008.mp4')
    };
    const openmd = async ( )=>{
        await setUrl('/src/assets/video/SK0008.mp4')
    }
    const handleCancel =async () => {
        await setIsModalOpen(false);
        await main().destroy(true);


    };
    useEffect(()=>{
        openmd()
        // console.log(url);
    },[url,config,])
    

    return (
        <>
            <Button type="primary" onClick={() => {showModal(); openmd()}}>
                Open
            </Button>

            <Modal   open={isModalOpen} onCancel={handleCancel} footer={null}>
                <div id="mse" ></div>
            </Modal>
        </>

    )
}
export default Xgplayer;