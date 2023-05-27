import { lazy } from "react";


const App           = lazy(() => import("../App"));
const Home          = lazy(() => import("@/view/reception/home"));
const About         = lazy(() => import("@/view/reception/about"));
const Admin         = lazy(() => import("@/view/admin"));
const Login         = lazy(() => import('@/view/admin/login'));
const AdminHome     = lazy(() => import("@/view/admin/home"));
const Video         = lazy(() => import("@/view/admin/Video"));
const Image         = lazy(() => import("@/view/admin/Image"));
const Management    = lazy(() => import('@/view/admin/management'));
const PhotoWall     = lazy(() => import('@/view/reception/PhotoWall'));
const VideoWall     = lazy(() => import('@/view/reception/VideoWall'));
const NotFound      = lazy(() => import('@/view/NotFound'));

const routerItems   = 
[
    {
        path: '/',
        element: App,
        errorElement: NotFound,
        meta: {
            title: '首页',
            auth:false,
          },
        children:[
            {
                //登录进来默认页面
                path:"/",
                index: "index",
                element: Home,
                meta: {
                    title: '首页',
                    auth:false,
                  },
            },
            {
                path: 'about',
                element: About,
                meta: {
                    title: '关于',
                    auth:false,
                  },
            },
            {
                path:'photowall',
                element:PhotoWall,
                meta: {
                    title: '照片墙',
                    auth:false,
                  },
            },
            {
                path:'videowall',
                element:VideoWall,
                meta: {
                    title: '视频墙',
                    auth:false,
                  },
            }
        ]
    },
    {
        path: '/login',
        element:Login,
        meta: {
            title: '登录',
            auth:false,
          },
    },
   
    {

        path: "/admin",
        element:Admin,
        meta: {
            title: '后台管理中心',
            auth: true,
          },
        children: [//子路由
            {
                //登录进来默认页面
                path: "/admin",
                index: "/admin",
                element:AdminHome,
                meta: {
                    title: '控制台',
                    auth: true,
                  },
            },
            {
                path:'management',
                element:Management,
                meta: {
                    title: '经营状况',
                    auth:true,
                  },
            },
            {
                path:'video',
                element:Video,
                meta: {
                    title: '视频管理',
                    auth:true,
                  },
            },
            {
                path:'image',
                element:Image,
                meta: {
                    title: '图像管理',
                    auth:true,
                  },
            },
        ]
    },
    {
        path: '*',
        element:NotFound,
        meta: {
            title: '404',
            auth:false,
          },
    }
]

export default routerItems  ;