// Инициализация Supabase клиента
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// DOM элементы
const form = document.getElementById('measurementForm');
const viewHistoryBtn = document.getElementById('viewHistoryBtn');
const modal = document.getElementById('historyModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const historyContainer = document.getElementById('historyContainer');
const notification = document.getElementById('notification');
const measurementDatetimeInput = document.getElementById('measurementDatetime');

// Установка текущей даты и времени по умолчанию
function setDefaultDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    measurementDatetimeInput.value = `${year}-${month}-${day}T${hours}:${minutes}`;
}

// Показать уведомление
function showNotification(message, type = 'info') {
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Сохранить измерение
async function saveMeasurement(event) {
    event.preventDefault();

    const formData = new FormData(form);

    // Конвертация локального времени в ISO строку с часовым поясом
    const datetimeLocal = formData.get('measurementDatetime');
    const datetimeISO = new Date(datetimeLocal).toISOString();

    // Подготовка данных для отправки
    const measurementData = {
        measurement_datetime: datetimeISO,
        temperature: formData.get('temperature') ? parseFloat(formData.get('temperature')) : null,
        ph: formData.get('ph') ? parseFloat(formData.get('ph')) : null,
        general_hardness: formData.get('generalHardness') ? parseFloat(formData.get('generalHardness')) : null,
        carbonate_hardness: formData.get('carbonateHardness') ? parseFloat(formData.get('carbonateHardness')) : null,
        ammonia: formData.get('ammonia') ? parseFloat(formData.get('ammonia')) : null,
        nitrites: formData.get('nitrites') ? parseFloat(formData.get('nitrites')) : null,
        nitrates: formData.get('nitrates') ? parseFloat(formData.get('nitrates')) : null,
        phosphates: formData.get('phosphates') ? parseFloat(formData.get('phosphates')) : null,
        co2: formData.get('co2') ? parseFloat(formData.get('co2')) : null,
        calcium: formData.get('calcium') ? parseFloat(formData.get('calcium')) : null,
        iron: formData.get('iron') ? parseFloat(formData.get('iron')) : null
    };

    try {
        const { data, error } = await supabaseClient
            .from('aquarium_measurements')
            .insert([measurementData]);

        if (error) throw error;

        showNotification('✅ Измерение успешно сохранено!', 'success');
        form.reset();
        setDefaultDateTime();
    } catch (error) {
        console.error('Ошибка при сохранении:', error);
        showNotification('❌ Ошибка при сохранении: ' + error.message, 'error');
    }
}

// Загрузить историю измерений
async function loadHistory() {
    historyContainer.innerHTML = '<p class="loading">Загрузка данных...</p>';

    try {
        const { data, error } = await supabaseClient
            .from('aquarium_measurements')
            .select('*')
            .order('measurement_datetime', { ascending: false });

        if (error) throw error;

        if (data.length === 0) {
            historyContainer.innerHTML = '<p class="no-data">📊 Нет сохраненных измерений</p>';
            return;
        }

        displayHistory(data);
    } catch (error) {
        console.error('Ошибка при загрузке истории:', error);
        historyContainer.innerHTML = `<p class="no-data">❌ Ошибка загрузки: ${error.message}</p>`;
    }
}

// Отобразить историю в таблице
function displayHistory(measurements) {
    const table = document.createElement('table');
    table.className = 'history-table';

    table.innerHTML = `
        <thead>
            <tr>
                <th>Дата/Время</th>
                <th>T°C</th>
                <th>pH</th>
                <th>GH</th>
                <th>KH</th>
                <th>NH₃/NH₄</th>
                <th>NO₂</th>
                <th>NO₃</th>
                <th>PO₄</th>
                <th>CO₂</th>
                <th>Ca</th>
                <th>Fe</th>
                <th>Действия</th>
            </tr>
        </thead>
        <tbody>
            ${measurements.map(m => `
                <tr>
                    <td>${formatDateTime(m.measurement_datetime)}</td>
                    <td>${formatValue(m.temperature)}</td>
                    <td>${formatValue(m.ph)}</td>
                    <td>${formatValue(m.general_hardness)}</td>
                    <td>${formatValue(m.carbonate_hardness)}</td>
                    <td>${formatValue(m.ammonia)}</td>
                    <td>${formatValue(m.nitrites)}</td>
                    <td>${formatValue(m.nitrates)}</td>
                    <td>${formatValue(m.phosphates)}</td>
                    <td>${formatValue(m.co2)}</td>
                    <td>${formatValue(m.calcium)}</td>
                    <td>${formatValue(m.iron)}</td>
                    <td>
                        <button class="delete-btn" onclick="deleteMeasurement('${m.id}')">
                            🗑️ Удалить
                        </button>
                    </td>
                </tr>
            `).join('')}
        </tbody>
    `;

    historyContainer.innerHTML = '';
    historyContainer.appendChild(table);
}

// Форматирование даты и времени
function formatDateTime(datetime) {
    const date = new Date(datetime);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

// Форматирование значения
function formatValue(value) {
    return value !== null && value !== undefined ? value : '-';
}

// Удалить измерение
async function deleteMeasurement(id) {
    if (!confirm('Вы уверены, что хотите удалить это измерение?')) {
        return;
    }

    try {
        const { error } = await supabaseClient
            .from('aquarium_measurements')
            .delete()
            .eq('id', id);

        if (error) throw error;

        showNotification('✅ Измерение удалено', 'success');
        loadHistory(); // Перезагрузить историю
    } catch (error) {
        console.error('Ошибка при удалении:', error);
        showNotification('❌ Ошибка при удалении: ' + error.message, 'error');
    }
}

// Открыть модальное окно с историей
function openHistoryModal() {
    modal.classList.add('show');
    loadHistory();
}

// Закрыть модальное окно
function closeHistoryModal() {
    modal.classList.remove('show');
}

// Event Listeners
form.addEventListener('submit', saveMeasurement);
viewHistoryBtn.addEventListener('click', openHistoryModal);
closeModalBtn.addEventListener('click', closeHistoryModal);

// Закрытие модального окна по клику вне его
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeHistoryModal();
    }
});

// Закрытие модального окна по нажатию ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeHistoryModal();
    }
});

// Инициализация
setDefaultDateTime();

// Проверка подключения к Supabase
(async function checkConnection() {
    try {
        const { data, error } = await supabaseClient
            .from('aquarium_measurements')
            .select('count');

        if (error) throw error;

        console.log('✅ Подключение к Supabase успешно установлено');
    } catch (error) {
        console.error('❌ Ошибка подключения к Supabase:', error);
        showNotification('⚠️ Проверьте настройки подключения к Supabase', 'error');
    }
})();
