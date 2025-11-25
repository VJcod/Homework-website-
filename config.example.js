// ============================================
// НАСТРОЙКА ПОДКЛЮЧЕНИЯ К SUPABASE
// ============================================

// ВАЖНО! Замените значения ниже на ваши данные из Supabase Dashboard

// 1. SUPABASE_URL - URL вашего проекта
//    Где найти: Supabase Dashboard → Settings → API → Project URL
//    Пример: 'https://xyzcompany.supabase.co'
const SUPABASE_URL = 'YOUR_SUPABASE_URL_HERE';

// 2. SUPABASE_ANON_KEY - Публичный ключ (anon/public)
//    Где найти: Supabase Dashboard → Settings → API → Project API keys → anon public
//    Пример: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY_HERE';

// ============================================
// ИНСТРУКЦИЯ ПО НАСТРОЙКЕ:
// ============================================
//
// 1. Скопируйте этот файл и переименуйте в config.js:
//    cp config.example.js config.js
//
// 2. Откройте ваш проект в Supabase: https://supabase.com/dashboard
//
// 3. Перейдите в раздел "Settings" (⚙️) → "API"
//
// 4. Скопируйте:
//    - Project URL → вставьте в SUPABASE_URL
//    - anon public key → вставьте в SUPABASE_ANON_KEY
//
// 5. Сохраните файл config.js
//
// 6. Убедитесь, что config.js добавлен в .gitignore
//
// ============================================
// ВАЖНО:
// ============================================
//
// - НЕ публикуйте config.js в git
// - Используйте только anon public key (НЕ service_role!)
// - Настройте Row Level Security политики в Supabase
// - Подробная инструкция в SUPABASE_SETUP.md
//
// ============================================

// Проверка конфигурации
if (SUPABASE_URL === 'YOUR_SUPABASE_URL_HERE' || SUPABASE_ANON_KEY === 'YOUR_SUPABASE_ANON_KEY_HERE') {
    console.warn('⚠️ ВНИМАНИЕ: Не настроены параметры подключения к Supabase!');
    console.warn('Пожалуйста, скопируйте config.example.js в config.js и укажите ваши данные');
}
