FROM docker.1ms.run/library/node:23.0-alpine3.19 as production-stage

# 安装必要的系统依赖
RUN apk add --no-cache git python3 make g++

WORKDIR /chapanda-website

# 先单独复制 package.json 和 lock 文件
COPY package.json pnpm-lock.yaml ./

# 设置国内镜像
RUN npm config set registry https://registry.npmmirror.com/

# 安装 pnpm 并配置路径
RUN npm install -g pnpm@latest && \
    pnpm config set store-dir ~/.pnpm-store && \
    ln -s /usr/local/lib/node_modules/pnpm/bin/pnpm.cjs /usr/local/bin/pnpm

# 安装项目依赖
RUN pnpm install --frozen-lockfile

# 复制其他文件
COPY . .

# 构建应用 (如果需要)
# RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "run", "start"]
