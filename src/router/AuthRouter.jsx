// 路由守卫
// 判断token是否存在（如果存在跳转主页，如果不存在跳转登录页面）

import { Navigate,useFetcher  } from 'react-router-dom'

// 获取token方法

const getToken = () => {
    return localStorage.getItem('token')
}

// 创建一告诫组件，高阶组件就是把一个组件当作另一个组件的参数传入，然后通过判断 返回新的组件
// 下面的authRouter 就是一个高阶组件

function AuthRouter({ children }) {
    console.log(window.location.pathname );
    // 获取token
    const token = getToken()
    console.log(token, 'aaaa')
    // 判断token是否存在 存在直接渲染主页面
    if (token) {
        return <>{children}</>
    } else {
        return <Navigate to={'/login'}></Navigate>  //没有token跳转登录页面
    }
}
export { AuthRouter }
