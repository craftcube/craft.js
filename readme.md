##使用方法

```
1、将craft文件夹复制到项目中，参考demo程序进行编程。
2、正常情况下按需在index.html中引入需要的min.js文件
3、如需用到craft中不存在、且常用的widget，请联系邱旻翔、陈明
4、本项目使用gulp打包，其中需要注意：如果修改了widgets的template.html，在打包时要注意，gulp template步骤会生成craft-template.js文件，将改文件复制到src/scripts文件夹下再进行gulp操作
```

##文件结构

```
src   —— 源文件
dist  —— 打包生成文件
quick-start、OclazyloadDemo、demo、cap-demo  —— 示例项目
```