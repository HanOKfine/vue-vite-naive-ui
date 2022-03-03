naive-ui按需导入,在src/plugins/naivev.ts文件里选择常用的挂载到vue即可。

因为单一职能原则,所以把请求分成两个文件拦截请求和拦截响应。

在api文件夹下创建index.ts文件（由该文件统一导出各个文件接口）
在api文件夹下创建bussniess文件夹（该文件夹里边存放所有业务接口）

整理代码 

全部整理 npx prettier --write 
格式化指定文档 npx prettier --write src/components/Button.js
检查是否格式化 npx prettier --check 

格式化配置文件.prettierrc
