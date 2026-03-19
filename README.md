# Http-module-practice
**Features**
GET / → returns welcome message
GET /time → returns current time in ISO format
GET /echo?msg=... → returns the message
GET /sum?a=&b= → returns sum of two numbers
404 handler → returns JSON error for unknown routes

**Run the server**
node not_found_route.js 3000
Explanation:
node — запускає JavaScript файл через Node.js
not_found_route.js — головний файл сервера
3000 — порт, на якому працює сервер

**Test endpoints**
curl http://localhost:3000/
- перевірка головної сторінки
curl http://localhost:3000/time
- отримати поточний час
curl "http://localhost:3000/echo?msg=hello"
- повертає hello
curl "http://localhost:3000/sum?a=2&b=5"
- повертає { "sum": 7 }
