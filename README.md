# web-coupon

How to clone and build this repository:

Install Homebrew: https://brew.sh/

Run: brew update
- just updates the brew package manager to ensure you have the latest versions of everything

Install node & npm: 
https://nodejs.org/en/download/
(Both install together??)
npm install npm@latest -g

NOTE: Might need to set you PATH variable after installing homebrew or node.

How to set PATH variable:
1. $PATH
- should return string
- copy that return string
2. run export PATH=copiedString/usr/local/bin:
- the copied string is just what $PATH returns with a / added and /usr/local/bin:

Install Mongodb:
1. brew install mongodb

Cloning the repo: 
git clone git@github.com:inukotin/web-coupon.git

Get permissions for data/db:
1. Go to root directory of application
2. sudo chown -R `id -un` /data/db

Install bower using npm: npm install -g bower

Get project dependencies:
1. npm install
2. bower install




