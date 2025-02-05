# Node.js 18.x versiyasini tanlash (Next.js uchun talab qilingan versiya)
FROM node:18

# Ishchi katalogni belgilash
WORKDIR /app

# package.json va package-lock.json fayllarini konteynerga nusxalash
COPY package*.json ./

# Kerakli paketlarni o'rnatish
RUN npm install

# Barcha fayllarni konteynerga nusxalash
COPY . .

# Next.js ilovasini build qilish
RUN npm run build

# Next.js serverini ishga tushurish
CMD ["npm", "start"]

# 3000-portni ochish
EXPOSE 3000
