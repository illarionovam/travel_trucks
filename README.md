<h1>TravelTrucks</h1>

<h2>Зміст</h2>

<ul>
<li><a href="#description">Опис проєкту</a></li>
<li><a href="#deploy">Інструкція по запуску проєкту</a></li>
<li><a href="#requirements">Вимоги до проєкту</a></li>
<li><a href="#notes">Нотатки</a></li>
</ul>

<h2 id="description">Опис проєкту</h2>

<p>This site gives user a possibility to book a campervan for some date in the future.</p>
<p>The campervans can be filtered by location, vehicle type, automatic transmission and availability of such features as: AC, kitchen, bathroom and TV.</p>
<p>The user can check the reviews of other people about the selected campervan.</p>
<p>The user can add the campervan to favorites.</p>

<h2 id="deploy">Інструкція по запуску проєкту</h2>

<p>Дивитися задеплоєний проєкт на <a href="https://travel-trucks-six.vercel.app/">vercel.com</a> або запустити проєкт локально:</p>

```
git clone https://github.com/illarionovam/travel_trucks
cd travel_trucks/
npm install
npm run dev
```

<h2 id="requirements">Вимоги до проєкту</h2>

<h3>Фреймворк та бібліотеки</h3>

<ul>
<li>Робота виконана з використанням бандлеру Vite на React. ✅</li>
<li>Redux для управління станом. ✅</li>
<li>React Router для маршрутизації. ✅</li>
<li>Для запитів використовується бібліотека Axios. ✅</li>
<li>Будь-яка CSS бібліотека на вибір (наприклад, <span style="font-weight: bolder;">CSS модулі</span>, styled-components, MUI тощо). ✅</li>
</ul>

<h3>Основні сторінки</h3>

<ul>
<li><span style="font-weight: bolder;">Домашня сторінка</span>: повинна містити банер з основним закликом до дії. ✅</li>
<li><span style="font-weight: bolder;">Каталог</span>: сторінка, де відображаються всі доступні транспортні засоби з можливістю фільтрації за певними критеріями (локація, тип транспорту, наявність кондиціонера, кухні тощо) та можливістю додати кемпер до обраних. ✅</li>
<li><span style="font-weight: bolder;">Сторінка окремого кемпера</span>: сторінка з детальним описом обраного кемпера, галереєю фотографій, відгуками користувачів, формою для бронювання. Для опиcу характеристик використовуй наступні властивості, якщо вони присутні на данному кемпері: transmission, engine, AC, bathroom, kitchen, TV, radio, refrigerator, microwave, gas, water. Для опиcу деталей використовуй наступні властивості: form, length, width, height, tank, consumption. ✅</li>
</ul>

<h3>Маршрутизація</h3>

<ul>
<li><span style="font-weight: bolder;">/</span> - Домашня сторінка. ✅</li>
<li><span style="font-weight: bolder;">/catalog</span> - Сторінка каталогу. ✅</li>
<li><span style="font-weight: bolder;">/catalog/:id</span> - Сторінка окремого кемпера. ✅</li>
</ul>

<h3>Стан додатку</h3>

<ul>
<li>Використовувати Redux для управління станом. ✅</li>
<li>Створити глобальний стан для зберігання списку транспортних засобів <span style="font-weight: bolder;">(campers)</span>, стану фільтрів <span style="font-weight: bolder;">(filters)</span> та списку обраних <span style="font-weight: bolder;">(persistentComponents)</span>. ✅</li>
<li>При відправці запиту за фільтрованими транспортними засобами важливо попередньо скинути попередні результати пошуку, щоб забезпечити актуальність та точність відображуваних даних відповідно до нових критеріїв фільтрації. ✅</li>
</ul>

<h3>Функціональні вимоги</h3>

<ul>
<li><span style="font-weight: bolder;">Перехід на сторінку каталогу</span>: користувач повинен мати можливість натиснути на кнопку "View Now" на головній сторінці, щоб перейти на сторінку каталогу. ✅</li>
<li>
<span style="font-weight: bolder;">Фільтрація транспортних засобів</span>: користувач повинен мати можливість фільтрувати транспортні засоби за:
<ul>
<li>локацією (текстове поле); ✅</li>
<li>типом кузова (може бути обрано один тип кузова); ✅</li>
<li>наявністю кондиціонера, кухні, та іншими критеріями (може бути обрано декілька критеріїв). ✅</li>
</ul>
</li>
<li><span style="font-weight: bolder;">Обране</span>: користувач повинен мати можливість додавати транспортні засоби до списку обраних. Список обраних кемперів має зберігатись при оновленні сторінки. ✅</li>
<li><span style="font-weight: bolder;">Ціна оренди</span> має бути прописана одним значенням (наприклад, 8000). В UI - виведено через кому (8000,00). ✅</li>
<li><span style="font-weight: bolder;">Перехід на сторінку деталей</span>: користувач повинен мати можливість натиснути на кнопку "Show more" на картці транспортного засобу на сторінці каталогу, щоб перейти <span style="font-weight: bolder;">в новій вкладці браузера</span> на сторінку з детальним описом цього транспортного засобу. ✅</li>
<li><span style="font-weight: bolder;">Довантаження карток</span>: на сторінці каталогу повинна бути кнопка "Load More", при кліку на яку завантажуються додаткові картки транспортних засобів з урахуванням обраних фільтрів. ✅</li>
<li><span style="font-weight: bolder;">Відгуки</span>: на сторінці окремого кемпера повинні відображатися відгуки інших користувачів, які оцінюють кемпер за п'ятизірковою шкалою. ✅</li>
<li><span style="font-weight: bolder;">Форма бронювання</span>: користувач повинен мати можливість забронювати кемпер, заповнивши форму на сторінці окремого кемпера. Результатом вдалої відправки форми має бути нотифікація про вдале бронювання. ✅</li>
</ul>

<h3>Дизайн</h3>

<ul>
<li>Дотримуватись наданого <a href="https://www.figma.com/design/6vTbzaB3EPgOreQz2jOJJe/Campers?node-id=0-1&node-type=canvas&t=SfvE1I5tK0sWVse1-0">макету</a>. ✅</li>
<li>Верстка повинна бути виконана для десктопної версії. ✅ Адаптивність можна реалізувати за бажанням. ❎</li>
</ul>

<h3>Розробка</h3>

<ul>
<li>Використовувати компонентний підхід. ✅</li>
<li>Дотримуватись принципу DRY (Don't Repeat Yourself). ✅</li>
<li>Писати чистий та читабельний код з коментарями там, де це необхідно. ✅</li>
<li>Проєкт задеплоєний <a href="https://travel-trucks-six.vercel.app/">vercel.com</a>. ✅</li>
</ul>

<h3>Інші критерії оцінки виконаного ТЗ</h3>

<ul>
<li>Оформлений head сайту: <span style="font-weight: bolder;">додано favicon, що відповідає наповненню сайту; встановлено заголовок сайту TravelTrucks; додано опис сайту</span>. ✅</li>
<li>Відсутні помилки в консолі. ✅</li>
<li>Код відформатований. ✅</li>
<li>Валідна розмітка: <span style="font-weight: bolder;"><a href="https://validator.w3.org/nu/?doc=https%3A%2F%2Ftravel-trucks-six.vercel.app%2F">https://validator.w3.org</a>, <a href="https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ftravel-trucks-six.vercel.app%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en">https://jigsaw.w3.org/css-validator</a> (1 error - Property font-optical-sizing doesn't exist: none, але вона насправді існує і потрібна, щоб шрифт відображався відповідно до макету)</span>. ✅</li>
<li>Відсутні зайві файли в репозиторії. ✅</li>
<li>Описана інструкція по запуску проєкту в файлі README.md. ✅</li>
<li>Усі зміни закомічені зі зрозумілими повідомленнями. ✅</li>
<li>При асинхронних запитах є Loader. ✅</li>
<li>Коректно працююча маршрутизація на живій сторінці <a href="https://travel-trucks-six.vercel.app/">vercel.com</a>. ✅</li>
</ul>

<h2 id="notes">Нотатки</h2>

<h3>Дизайн</h3>

<ul>
<li>Додано додаткові іконки на фільтри, які не було надано в макеті.</li>
<li>На єдиній картці камперу немає підкреслення на рейтингу, а в усіх інших місцях (включно з сторінкою деталей) є. Залишила підкреслення усюди.</li>
<li>На сторінці окремого кампера в секції деталей іконки характеристик кольору #eaecef, який знаходиться на макеті насправді, замість того, що прописаний у властивостях.</li>
<li>На сторінці окремого кампера в секції деталей показується назва Van, замість Panel truck, як на сторінці з фільтрами, щоб зберегти консистентність.</li>
</ul>

<h3>Розробка</h3>

<ul>
<li>За усною порадою робити фільтрацію та пагінацію максимально можливо на бекенді, вся пагінація та фільтри, окрім фільтра локації знаходяться на бекенді. Фільтр локації неможливо туди додати, адже search шукає по всіх полях, а includes для конкретного поля в mockapi не передбачений.</li>
<li>Проєкт пройшов оцінювання на <a href="https://pagespeed.web.dev/analysis/https-travel-trucks-six-vercel-app/gzzt1ju7tp?form_factor=desktop">https://pagespeed.web.dev</a> і кожен показник для десктопної версії (єдиної, на яку потрібно було орієнтуватися у завданні) — зелений.</li>
</ul>

<h3>Функціональні вимоги</h3>

<ul>
<li>Додано можливість повернутися на домашню сторінку по кліку на логотип.</li>
<li>Бронювання, окрім перевірки на присутність обовʼязкових полів, також має таку валідацію:
<ul>
<li>коректний імейл;</li>
<li>дата бронювання із завтрашнього дня;</li>
<li>якщо юзер намагається забронювати кемпер, який він вже забронював, йому показується попередження;</li>
<li>якщо юзер намагається забронювати кемпер, який заброньовано на інший імейл, йому показується помилка.</li>
</ul>
</li>
</ul>
