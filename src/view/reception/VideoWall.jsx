import React, { useState,useEffect } from 'react';
import '@/style/reception/VideoWall.scss'
import Player from 'xgplayer';
import 'xgplayer/dist/index.min.css';
import { Modal } from 'antd';

const Bvideo = () => {
    let list = [];
    const [isModalOpen, setIsModalOpen] = useState(false);

    for (let i = 0; i < 30; i++) {
        let nStr = 'SK' + i.toString().padStart(4, '0') + '.mp4';
        list.push(nStr)
    }
    const fileSrc = (filename) =>  {    //引入文件
        return new URL(`/src/assets/video/${filename}`, import.meta.url).href
    }
    let html = list.map((itme, index) => {

        return (
        <div className="item" key={index}>
            <video     muted="muted" onClick={() => {
                showModal(itme);
            }} 
            onContextMenu={()=> false}
            key={index} src={fileSrc(itme)} className='video'></video>
        </div>
        )
    })
    const config = {
        url: null,        //视频地址
        id: 'mse',      //容器ID
        el: document.querySelector('#mse'),
        poster: '',     //封面图地址
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
    const main = () => new Player(config)
    const showModal = async (itme) => {
        config.url = await fileSrc(itme)
        await setIsModalOpen(true);
        setTimeout(async () => {
            await main();
        }, 30)
    };

    const handleCancel = async () => {
        await setIsModalOpen(false);
        setTimeout(async () => {
            await main().destroy(true);
        }, 250)

    };
    // 瀑布流布局
    const WaterfallFlow = ()=>{
        // 获取容器节点
        let container=document.getElementsByClassName('videoContainer')[0];
        // 获取容器宽度 px;
        let containerWidth = container.offsetWidth;
        // 获取所有视频节点;
        let videoList = container.children;
        let videoWidth = videoList[0].offsetWidth;
        // 计算屏幕可以放多少列;
        let column = Math.floor(containerWidth/videoWidth);
        // 收集所有列的高度；
        let videoHeight=[];
        //改变容器的宽度，
        container.style.width = videoWidth*column+'px';
        for (let i = 0; i < videoList.length; i++) {
            if (i<column) {
                videoHeight.push(videoList[i].offsetHeight )
            }else{
                // 声明一个元素对象
                let obj = {
                    minH:videoHeight[0],
                    minI:0,
                }
                for (let j = 0; j < videoHeight.length; j++) {
                    if (videoHeight[j]<obj.minH) {
                        obj.minH=videoHeight[j];
                        obj.minI=j
                    }
                }
                videoList[i].style.position='absolute'
                videoList[i].style.left=videoList[obj.minI].offsetLeft+'px'
                videoList[i].style.top=obj.minH+'px'
                videoHeight[obj.minI]=videoHeight[obj.minI]+videoList[i].offsetHeight
                container.style.height = Math.max(...videoHeight)+'px'

            }
            
        }
        

        }
        setTimeout(()=>{
            WaterfallFlow()
            // let video = document.querySelectorAll('video');
            // for (let i = 0; i < video.length; i++) {
            //     // console.log(video[i]);
            //     // video[i].live('contextmenu',function() { return false; })
                
            // }
        },1200)
        // useEffect(() => {
        //     if (document.readyState === 'complete') {
        //         WaterfallFlow()
        //     }
        //   }, []);
        
    return (
        <>
            <div id='videoContainer' className='videoContainer'>
                {html}
            </div>
            <div style={ {clear:'both'}}></div>
            <Modal wrapClassName='modalbox' open={isModalOpen} onCancel={handleCancel} footer={null} centered='true'>
                <div id="mse" ></div>
            </Modal>
        </>

    )
}

const VideoWall = () => {
    return (
        <section className='VideoWallbox'>
            <Bvideo></Bvideo>
            
        </section>
    )
}
export default VideoWall;