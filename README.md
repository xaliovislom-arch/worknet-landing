# Worknet landing page

Worknet XBA uchun lead yig'uvchi sahifa. Arizalar Google Sheets'ga tushadi.

## 1. Google Sheets'ni ulash (bir marta, ~5 daqiqa)

1. Yangi Google Sheets oching, nomini qo'ying: `Worknet arizalar`.
2. **Kengaytmalar (Extensions) → Apps Script** ni bosing.
3. Ochilgan oynadagi kodni o'chirib, `apps-script.gs` faylidagi kodni qo'ying va saqlang.
4. **Deploy → New deployment** ni bosing. Turini **Web app** qilib tanlang:
   - Execute as: **Me**
   - Who has access: **Anyone**
5. **Deploy** ni bosing va Google'ning ruxsat so'roviga rozilik bering.
6. Chiqqan **Web app URL**'ni (`https://script.google.com/macros/s/.../exec`) nusxalang.
7. `index.html` ichida `PASTE_APPS_SCRIPT_URL_HERE` so'zini shu URL bilan almashtiring.

## 2. Saytni GitHub Pages'da yoqish

Repo → **Settings → Pages** → Source: **Deploy from a branch**, Branch: `main`, papka `/ (root)` → **Save**.
1–2 daqiqadan keyin sayt `https://<username>.github.io/worknet-landing/` manzilida ochiladi.

## 3. Reklama uchun

- Reklama havolasiga UTM qo'shing, masalan: `?utm_source=facebook&utm_campaign=bolgariya`. U jadvalning "Manba" ustuniga yoziladi.
- Meta Pixel kodi `<head>` ichida belgilangan joyga qo'yiladi. Forma yuborilganda `Lead` hodisasi avtomatik ishlaydi.
