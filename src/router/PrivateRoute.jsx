import { message } from "antd";
import { useEffect } from "react";
import { matchRoutes, useLocation, useNavigate } from "react-router-dom";
import routerItems from "@/router/routerItems";

const PrivateRoute = ({ item, children, meta, auth }) => {
	const navigate = useNavigate();
	const userinfo = JSON.parse(localStorage.getItem('userinfo')) || ""
	const token = userinfo.token;    //获取本地存储的token
	const mathchs = matchRoutes(routerItems, location);   //返回匹配到的path Object
	const isExist = mathchs?.some((item) => item.pathname == location.pathname);

	useEffect(() => {
		// 标签页标题
		if (mathchs.length==2) {
			document.title=mathchs[1].route.meta.title
		}else{
			document.title=mathchs[0].route.meta.title
		}
		
		if ((token == "" || token == undefined) && auth) {
			message.destroy();
			message.error("token 过期，请重新登录!");
			console.log(userinfo.token);
			console.log(token, localStorage.getItem("userinfo") || "");
			navigate("/login");
		}
		// 这里判断条件是：token 存在并且是匹配到路由并且是已经登录的状态
		if (token && isExist) {
			// 如果你已经登录了，但是你通过浏览器里直接访问login的话不允许直接跳转到login路由，必须通过logout来控制退出登录或者是token过期返回登录界面
			if (location.pathname == "/login") {
				navigate("/admin");
			} else {
				// 如果是其他路由就跳到其他的路由
				navigate(location.pathname);
			}
		}
	}, [token, location.pathname]);

	return children;
};

export default PrivateRoute;