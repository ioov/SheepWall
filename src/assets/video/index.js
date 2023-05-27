const fs = require('fs')

// 修改前的内容
let updateStr = 'LG'
// 要替换的内容
let newStr = 'SK'

const files = fs.readdirSync('./')
files.forEach((file,index) => {
	if(file.includes(updateStr)){
		let newName = file.replace(updateStr, newStr)
		fs.rename(`./${files[index]}`, `./${newName}`, (err) => {
			if(!err) {
				console.log(newName + ' 已重命名！')
			}
		})
	}
})
