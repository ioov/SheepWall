import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // 关键代码


// https://vitejs.dev/config/
export default defineConfig({

  base: '/',// 基础公共路径 默认/，用于定义开发和线上环境资源访问路径，线上模式需自行配置绝对路径
  plugins: [react()],
  resolve: {
    alias: {
    // 关键代码
      '@': path.resolve(__dirname, './src'),
    }
  },
  build: {
		minify: "terser", // 必须开启：使用terserOptions才有效果
		chunkSizeWarningLimit:1500,
		terserOptions: {
			compress: {
				//生产环境时移除console
				drop_console: true,
				drop_debugger: true,
			},
		},
	},
  css: {
     /* CSS 预处理器 */
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/style/theme/index.scss";',
      },
    }
  },
  server: {
    hmr: true,
    host: "127.0.0.1",  // default 为localhost
    port: 3001,  // default 5173
    strictPort: true, // 设为TRUE时若端口被占用会直接退出，FALSE会尝试下一个可用端口
    open: true, // 自动打开浏览器；当此值为字符串时，会被用作 URL 的路径名
    // https: true, // Type: boolean | https.ServerOptions 升级为TLS+HTTP/2，尽在proxy存在是生效
    // proxy: {
    //   // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
    //   '/foo': 'http://localhost:4567',
    //   // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
    //   '/api': {
    //     target: 'http://jsonplaceholder.typicode.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // } // 配置代理示例
    // cors: true,// Type: boolean | CorsOptions，跨域默认全部允许
    // fs:{
    //   strict:true,// 默认true，只能访问工作区内的文件
    //   allow:['./src'],// 允许访问的工作区内的入口，当strict为true时，访问allow列表以外的工作区外路径会403
    //   deny:['.env', '.env.*', '*.{crt,pem}'],// 限制访问的文件，这些提供给vite dev serve敏感文件
    // }
  }
})
