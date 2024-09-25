## Getting Started

First, run the development server:

```bash
npm run dev
# or
pnpm dev
```

npx shadcn@latest init

npx shadcn@latest add button

npx shadcn@latest add card

npx shadcn@latest add form

npx shadcn@latest add input

npm i react-icons

npm i -D prisma

npm i @prisma/client

npm i @auth/prisma-adapter

npm i bcrypt

npm i bcryptjs

npm i -D @types/bcrypt

npm i -D @types/bcryptjs

npm i next-auth@beta

npm i uuid
npm i --save-dev @types/uuid

npm install resend

npm i react-spinners

npx prisma init

// neon.tech üzerinden database oluşturduktan sonra .env ve shcema.prisma dosyalarını güncelle
-- neon.tech --

// schema.prisma'da model oluşturduktan sonra (misal, model User{}) bu komudu çalıştır.
npx prisma generate

// eğer model User{}'ını ya da başka bir model'ini güncellediysen(eğer kayıtlı veri varsa önceki veriler güncellenmeyeceği için tüm verilerin eşit olması için sıfırlamak mantıklı olacak)
npx prisma generate -> npx prisma migrate reset (tüm veriyi sıfırlayacak, bunu production modda yapma.)
sıfırladıktan sonra; npx prisma db push ; ile tekrardan db güncellenecek

npx prisma db push

AUTH_SECRET="secret", secret için 'openssl rand -hex 32' bu kodu çalıştır

- Github Provider için,
  1- http://localhost:3000/api/auth/providers adresine git
  2- github'ın içindeki callbackUrl adresini kopyala
  3- github üzerinden settings developer settings kısmından oauth kısmına gir
  4- homepage url http://localhost:3000 olacak
  5- callback url 2'deki kopyalanan kısım olacak
  6- .env dosyasında GITHUB_CLIENT_ID= ve GITHUB_CLIENT_SECRET= oluştur
  7- clientId'yi .env dosyasına GITHUB_CLIENT_ID= olacak şekilde yapıştır
  8- generate a new client secret'a tıkladıktan sonra secret'ı .env dosyasına GITHUB_CLIENT_SECRET= yapıştır.

- Google Provider için,
  1- https://console.cloud.google.com adresine giderek yeni proje oluştur
  2- arama kısmına 'apis & services' yaz, OAuth consent screen sayfasına git ve external diyerekten oluştur. App name, User Support email ve Developer Contact Information kısmını doldur. Scope'a gerek yok save and continue diyerekten devam et. Test users kısmına da gerek yok save and continue diyerekten devam et. Soldaki Credentials kısmına git ve create OAuth client ID'ye tıkla.
  3- Authorized JS origins kısmına http://localhost:3000, Authorized redirect URIs kısmına da http://localhost:3000/api/auth/providers adresine gidip google'ın içindeki callbackUrl adresini kopyala
  4- .env dosyasında GOOGLE_CLIENT_ID= ve GOOGLE_CLIENT_SECRET= oluştur
  5- clientId'yi .env dosyasına GOOGLE_CLIENT_ID= olacak şekilde yapıştır
  6- client secret'ı .env dosyasına GOOGLE_CLIENT_SECRET= yapıştır.

web siteleri
neon.tech
https://clerk.com/docs/references/nextjs/clerk-middleware
