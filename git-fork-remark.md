# 克隆你自己的fork仓库（替换为你的用户名）
git clone https://github.com/你的用户名/Async.git
cd Async

# 添加官方仓库为upstream（上游）
git remote add upstream https://github.com/ZYKJShadow/Async.git

# 验证远程仓库配置
git remote -v

# 拉取上游仓库的所有更新
git fetch upstream

# 切换到本地dev分支
git checkout dev

# 将上游dev分支的更新合并到本地dev分支
git merge upstream/dev

# 将同步后的dev分支推送到你的远程fork
git push origin dev