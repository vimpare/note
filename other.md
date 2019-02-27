##一个指令解决github提交不显示绿点

(1)首先在github上面的setting中查看自己的email；



(2)在本地库中打开Git Bash Here，输入查询当前的user.email：



git config user.email





(3)对比两个邮箱会否相同，如果不相同就使用命令：



git config --global user.email "(1)中查看到的邮箱"







(4)修改之后，再次提交代码时，我们就可以在github上面看到提交显示的绿点

**idea整理代码：**
ctrl+alt+l








能处理有小数的金额：金额添加千分位逗号分隔符
/(?<=\d)(?< !.\d*)(?=(\d{3})+(.|$))/g
