import { lazy } from "react";


import { createBrowserRouter,useFetcher ,Navigate ,useBeforeUnload } from 'react-router-dom'
// import App            from "../App";
// import Home           from "@/view/reception/home";
// import About          from "@/view/reception/about";
// import Admin          from "@/view/admin";
// import Login          from '@/view/admin/login';
// import AdminHome      from "@/view/admin/home";
// import Management     from '@/view/admin/management';
// import PhotoWall      from '@/view/reception/PhotoWall';
// import VideoWall      from '@/view/reception/VideoWall';
// import NotFound       from '@/view/NotFound';
// import { AuthRouter } from "./AuthRouter";  //引入高阶组件
import Loading from '@/components/Loading.jsx'
const App           = lazy(() => import("../App"));
const Home          = lazy(() => import("@/view/reception/home"));
const About         = lazy(() => import("@/view/reception/about"));
const Admin         = lazy(() => import("@/view/admin"));
const Login         = lazy(() => import('@/view/admin/login'));
const AdminHome     = lazy(() => import("@/view/admin/home"));
const Management    = lazy(() => import('@/view/admin/management'));
const PhotoWall     = lazy(() => import('@/view/reception/PhotoWall'));
const VideoWall     = lazy(() => import('@/view/reception/VideoWall'));
const NotFound      = lazy(() => import('@/view/NotFound'));
const Routers = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            errorElement: <NotFound />,
            children:[
                {
                    //登录进来默认页面
                    index: "index",
                    element: <Home />,
                    meta: {
                        title: '首页',
                        needLogin: true,
                      },
                },
                {
                    path: '/about',
                    element: <About />,
                    meta: {
                        title: '关于',
                      },
                },
                {
                    path:'photowall',
                    element:<PhotoWall />,
                    meta: {
                        title: '照片墙',
                      },
                },
                {
                    path:'videowall',
                    element:<VideoWall />,
                    meta: {
                        title: '视频墙',
                      },
                }
            ]
        },
        {
            path: '/login',
            element: <Login />,
            meta: {
                title: '登录',
              },
        },
       
        {

            path: "/admin",
            element:<Admin />,
            children: [//子路由
                {
                    //登录进来默认页面
                    index: "index",
                    element: <AdminHome />,
                    meta: {
                        title: '控制台',
                      },
                },
                {
                    path:'management',
                    element:<Management />,
                }
            ]
        },
        {
            path: '/loading',
            element: <Loading />,
            meta: {
                title: 'loading',
              },
        },
        {
            path: '*',
            element: <NotFound />,
            meta: {
                title: '404',
              },
        }
    ]
)



/**
 * @description: 全局路由拦截
 * @param {string} pathname 当前路由路径
 * @param {object} meta 当前路由自定义meta字段
 * @return {string} 需要跳转到其他页时，就返回一个该页的path路径，或返回resolve该路径的promise对象
 */
const onRouteBefore = ({ pathname, meta }) => {
    // 动态修改页面title
    if (meta.title !== undefined) {
      document.title = meta.title
    }
    // 判断未登录跳转登录页
    if (meta.needLogin) {
      if (!isLogin) {
        return '/login'
      }
    }
  }
  
export default Routers 