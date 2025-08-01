# My Cards Manager

Додаток для управління банківськими картками з можливістю додавання, видалення, встановлення за замовчуванням та фільтрації карток.

## Швидкий старт

### Встановлення залежностей

```bash
npm install
```

### Запуск проекту

```bash
npm run dev
```

Після запуску додаток буде доступний за адресою, яку покаже в терміналі (зазвичай `http://localhost:5173`).

## Функціонал

### Основні можливості:

- **Додавання карток** - створення нових банківських карток з інформацією про бренд, останні 4 цифри та тип
- **Видалення карток** - повне видалення карток з системи
- **Встановлення за замовчуванням** - позначення однієї картки як основної
- **Фільтрація карток** - пошук за брендом або останніми 4 цифрами картки
- **Зберігання даних** - автоматичне збереження всіх даних в localStorage браузера
- **Перемикач тем** - підтримка світлої та темної теми з автоматичним збереженням налаштувань

### Додаткові можливості:

- **Адаптивний дизайн** - коректне відображення на всіх типах пристроїв
- **Автоматичне збереження** - всі зміни зберігаються миттєво

## 🛠️ Технології

- **React** - основний фреймворк
- **TypeScript** - для типізації коду
- **CSS3** - для стилізації з підтримкою адаптивного дизайну
- **localStorage** - для збереження даних на стороні клієнта
- **Vite** - для швидкої розробки та збірки проекту

## 📋 Структура проекту

```
src/
├── components/          # React компоненти
│   ├── CardFilter.tsx   # Компонент фільтрації
│   ├── CardTable.tsx    # Таблиця карток
│   ├── CardModal.tsx    # Модальне вікно створення картки
│   └── ThemeToggle.tsx  # Перемикач тем
├── pages/
│   └── MyCardsPage.tsx  # Головна сторінка
├── types.ts
│        
└── styles/              # CSS файли
```

## 🎨 Особливості реалізації

### Робота з таблицями

В процесі розробки виникли труднощі з використанням сторонніх бібліотек для таблиць. Після кількох спроб встановлення та налаштування різних залежностей, було прийнято рішення реалізувати таблиці через нативні HTML елементи з кастомною стилізацією. Це забезпечило:

- Повний контроль над виглядом та поведінкою
- Відсутність конфліктів залежностей
- Кращу продуктивність
- Простоту підтримки коду

### Зберігання даних

Всі дані зберігаються в localStorage браузера, що забезпечує:

- Миттєве збереження змін
- Збереження даних між сесіями
- Відсутність потреби у зовнішній базі даних
- Швидкий доступ до даних

### Система тем

Реалізована повноцінна система тем з:

- Автоматичним визначенням системних налаштувань
- Збереженням вибраної теми
- Плавними переходами між темами
- Адаптивним дизайном кнопки перемикача

## 🔍 Як користуватися

1. **Додавання нової картки**: натисніть кнопку "Add card" та заповніть форму
2. **Фільтрація карток**: введіть текст у поле пошуку для фільтрації за брендом або останніми цифрами
3. **Встановлення за замовчуванням**: натисніть кнопку "Set Default" біля потрібної картки
4. **Видалення картки**: натисніть кнопку "Delete" біля картки, яку потрібно видалити
5. **Зміна теми**: натисніть кнопку з іконкою сонця/місяця у верхньому правому куті

## 📱 Адаптивність

Додаток повністю адаптивний з точками перелому:

- **< 400px**: Мобільні пристрої
- **400px - 750px**: Великі мобільні пристрої
- **750px - 1200px**: Планшети
- **> 1200px**: Десктопи

## 🎯 Майбутні покращення

- Додавання категорій карток
- Експорт/імпорт даних
- Статистика використання карток
- Сортування за різними критеріями
- Додавання зображень карток

## 🤝 Внесок у проект

Проект відкритий для покращень та доповнень. Будь ласка, створюйте issues або pull requests для покращення функціоналу.

---

**Автор:** [Ваше ім'я]  
**Версія:** 1.0.0  
**Ліцензія:** MIT
