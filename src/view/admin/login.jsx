import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { matchRoutes, useLocation, useNavigate } from "react-router-dom";
import '@/style/admin/Login.scss'
import md5 from 'js-md5';

const Login = () => {
	const navigate = useNavigate();
	const email = 'ki@sooi.top'
	const pwd = '75ad87b5f7d5652051466ec11db64760'
	const onFinish = (values) => {
		const username = values.username
		const password = md5(values.password)

		const userinfo = {
			username:username,
			password:'',
			remember:values.remember,
			LoginStatus:'',
			token:'123'
		}
		if (username===email && password===pwd) {
			userinfo.LoginStatus=true;
			message.success('登录成功！')
			navigate("/admin");
			if (values.remember===true) {
				userinfo.password=password;
			}else{
				userinfo.password='';
			}
			localStorage.setItem("userinfo",  JSON.stringify(userinfo));

		}else{
			message.error("账户或密码错误，请重试！");
		}
	};
	return (
		<section className='Login'>
			<Form
				name="normal_login"
				className="login-form"
				initialValues={{
					remember: true,
				}}
				onFinish={onFinish}
			>
				<Form.Item
					name="username"
					rules={[
						{
							required: true,
							message: '请输入您的邮箱账户！',
						},
					]}
				>
					<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账户" />
				</Form.Item>
				<Form.Item
					name="password"
					rules={[
						{
							required: true,
							message: '请输入您的密码！',
						},
					]}
				>
					<Input
						prefix={<LockOutlined className="site-form-item-icon" />}
						type="password"
						placeholder="密码"
					/>
				</Form.Item>
				<Form.Item>
					<Form.Item name="remember" valuePropName="checked" noStyle>
						<Checkbox>记住密码</Checkbox>
					</Form.Item>

					<a className="login-form-forgot" href="">
						忘记密码
					</a>
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit" className="login-form-button">
						登录
					</Button>
				</Form.Item>
			</Form>
		</section>
	);
};
export default Login;