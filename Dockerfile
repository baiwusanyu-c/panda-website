# 设置国内镜像
FROM docker.1ms.run/library/node:23.0-alpine3.19

WORKDIR /chapanda-website

COPY . .

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install pnpm --global

RUN pnpm install

EXPOSE 3000
CMD ["pnpm", "run", "start"]
