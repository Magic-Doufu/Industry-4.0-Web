yarn docs:build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Magic-Doufu/Industry-4.0-Web.git master:gh-pages
cd -