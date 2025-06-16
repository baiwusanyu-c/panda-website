FROM docker.1ms.run/library/node:23.0-alpine3.19 as production-stage

# 安装必要的系统依赖
RUN apk add --no-cache git python3 make g++

WORKDIR /chapanda-website

# 先单独复制 package.json 和 lock 文件
COPY package.json pnpm-lock.yaml ./

# 设置国内镜像
FROM docker.1ms.run/library/node:23.0-alpine3.19

WORKDIR /chapanda-website

COPY . .

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install pnpm --global

RUN pnpm install

EXPOSE 3000
CMD ["pnpm", "run", "start"]
