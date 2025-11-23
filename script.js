// Конфигурация форм аквариумов
const aquariumShapes = {
    rectangular: {
        name: 'Прямоугольный',
        fields: [
            { id: 'length', label: 'Длина (L)', unit: 'см', placeholder: 'Длина' },
            { id: 'width', label: 'Ширина (W)', unit: 'см', placeholder: 'Ширина' },
            { id: 'height', label: 'Высота (H)', unit: 'см', placeholder: 'Высота' }
        ],
        svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <!-- Основной прямоугольник (вид в перспективе) -->
            <path d="M 80 120 L 280 120 L 280 220 L 80 220 Z" fill="#e8f4f8" stroke="#1a4d6d" stroke-width="2.5"/>
            <!-- Верхняя грань -->
            <path d="M 80 120 L 120 90 L 320 90 L 280 120 Z" fill="#d4eaf2" stroke="#1a4d6d" stroke-width="2.5"/>
            <!-- Боковая грань -->
            <path d="M 280 120 L 320 90 L 320 190 L 280 220 Z" fill="#c0e3f0" stroke="#1a4d6d" stroke-width="2.5"/>

            <!-- Размерные линии -->
            <!-- Длина L -->
            <line x1="80" y1="240" x2="280" y2="240" stroke="#2d6a8f" stroke-width="1.5" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>
            <line x1="80" y1="235" x2="80" y2="245" stroke="#2d6a8f" stroke-width="1.5"/>
            <line x1="280" y1="235" x2="280" y2="245" stroke="#2d6a8f" stroke-width="1.5"/>
            <text x="180" y="260" text-anchor="middle" fill="#1a4d6d" font-weight="bold" font-size="16">L (см)</text>

            <!-- Высота H -->
            <line x1="60" y1="120" x2="60" y2="220" stroke="#2d6a8f" stroke-width="1.5" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>
            <line x1="55" y1="120" x2="65" y2="120" stroke="#2d6a8f" stroke-width="1.5"/>
            <line x1="55" y1="220" x2="65" y2="220" stroke="#2d6a8f" stroke-width="1.5"/>
            <text x="40" y="175" text-anchor="middle" fill="#1a4d6d" font-weight="bold" font-size="16">H</text>

            <!-- Ширина W -->
            <line x1="120" y1="70" x2="320" y2="70" stroke="#2d6a8f" stroke-width="1.5" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>
            <line x1="120" y1="65" x2="120" y2="75" stroke="#2d6a8f" stroke-width="1.5"/>
            <line x1="320" y1="65" x2="320" y2="75" stroke="#2d6a8f" stroke-width="1.5"/>
            <text x="220" y="60" text-anchor="middle" fill="#1a4d6d" font-weight="bold" font-size="16">W (см)</text>

            <!-- Стрелки -->
            <defs>
                <marker id="arrowStart" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
                    <path d="M 5 0 L 5 6 L 0 3 Z" fill="#2d6a8f"/>
                </marker>
                <marker id="arrowEnd" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                    <path d="M 0 0 L 0 6 L 5 3 Z" fill="#2d6a8f"/>
                </marker>
            </defs>
        </svg>`
    },
    round: {
        name: 'Круглый',
        fields: [
            { id: 'diameter', label: 'Диаметр (D)', unit: 'см', placeholder: 'Диаметр' }
        ],
        svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <!-- Круглый аквариум (вид сверху) -->
            <circle cx="200" cy="160" r="100" fill="#e8f4f8" stroke="#1a4d6d" stroke-width="2.5"/>

            <!-- Центральная точка -->
            <circle cx="200" cy="160" r="3" fill="#1a4d6d"/>

            <!-- Размерная линия диаметра -->
            <line x1="90" y1="160" x2="310" y2="160" stroke="#2d6a8f" stroke-width="1.5" marker-start="url(#arrowStartRound)" marker-end="url(#arrowEndRound)"/>
            <line x1="90" y1="155" x2="90" y2="165" stroke="#2d6a8f" stroke-width="1.5"/>
            <line x1="310" y1="155" x2="310" y2="165" stroke="#2d6a8f" stroke-width="1.5"/>
            <text x="200" y="145" text-anchor="middle" fill="#1a4d6d" font-weight="bold" font-size="16">D (см)</text>

            <!-- Подпись вид сверху -->
            <text x="200" y="40" text-anchor="middle" fill="#5fa8c7" font-size="14" font-style="italic">Вид сверху</text>

            <!-- Стрелки -->
            <defs>
                <marker id="arrowStartRound" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
                    <path d="M 5 0 L 5 6 L 0 3 Z" fill="#2d6a8f"/>
                </marker>
                <marker id="arrowEndRound" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                    <path d="M 0 0 L 0 6 L 5 3 Z" fill="#2d6a8f"/>
                </marker>
            </defs>
        </svg>`
    },
    corner: {
        name: 'Угловой (треугольный)',
        fields: [
            { id: 'side1', label: 'Сторона 1 (A)', unit: 'см', placeholder: 'Первая сторона' },
            { id: 'side2', label: 'Сторона 2 (B)', unit: 'см', placeholder: 'Вторая сторона' },
            { id: 'height', label: 'Высота (H)', unit: 'см', placeholder: 'Высота' }
        ],
        svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <!-- Угловой аквариум (вид сверху) -->
            <path d="M 80 220 L 80 80 L 320 220 Z" fill="#e8f4f8" stroke="#1a4d6d" stroke-width="2.5"/>

            <!-- Маркер прямого угла -->
            <path d="M 80 80 L 95 80 L 95 95 L 80 95" fill="none" stroke="#1a4d6d" stroke-width="1.5"/>

            <!-- Размерная линия A (горизонтальная сторона) -->
            <line x1="80" y1="245" x2="320" y2="245" stroke="#2d6a8f" stroke-width="1.5" marker-start="url(#arrowStartCorner)" marker-end="url(#arrowEndCorner)"/>
            <line x1="80" y1="240" x2="80" y2="250" stroke="#2d6a8f" stroke-width="1.5"/>
            <line x1="320" y1="240" x2="320" y2="250" stroke="#2d6a8f" stroke-width="1.5"/>
            <text x="200" y="270" text-anchor="middle" fill="#1a4d6d" font-weight="bold" font-size="16">A (см)</text>

            <!-- Размерная линия B (вертикальная сторона) -->
            <line x1="55" y1="80" x2="55" y2="220" stroke="#2d6a8f" stroke-width="1.5" marker-start="url(#arrowStartCorner)" marker-end="url(#arrowEndCorner)"/>
            <line x1="50" y1="80" x2="60" y2="80" stroke="#2d6a8f" stroke-width="1.5"/>
            <line x1="50" y1="220" x2="60" y2="220" stroke="#2d6a8f" stroke-width="1.5"/>
            <text x="35" y="155" text-anchor="middle" fill="#1a4d6d" font-weight="bold" font-size="16">B</text>
            <text x="35" y="170" text-anchor="middle" fill="#1a4d6d" font-size="12">(см)</text>

            <!-- Высота H (отдельная линия справа) -->
            <line x1="345" y1="100" x2="345" y2="200" stroke="#2d6a8f" stroke-width="1.5" marker-start="url(#arrowStartCorner)" marker-end="url(#arrowEndCorner)"/>
            <line x1="340" y1="100" x2="350" y2="100" stroke="#2d6a8f" stroke-width="1.5"/>
            <line x1="340" y1="200" x2="350" y2="200" stroke="#2d6a8f" stroke-width="1.5"/>
            <text x="365" y="155" text-anchor="start" fill="#1a4d6d" font-weight="bold" font-size="16">H (см)</text>

            <!-- Подпись вид сверху -->
            <text x="200" y="40" text-anchor="middle" fill="#5fa8c7" font-size="14" font-style="italic">Вид сверху</text>

            <!-- Стрелки -->
            <defs>
                <marker id="arrowStartCorner" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
                    <path d="M 5 0 L 5 6 L 0 3 Z" fill="#2d6a8f"/>
                </marker>
                <marker id="arrowEndCorner" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                    <path d="M 0 0 L 0 6 L 5 3 Z" fill="#2d6a8f"/>
                </marker>
            </defs>
        </svg>`
    },
    cylinder: {
        name: 'Цилиндр',
        fields: [
            { id: 'diameter', label: 'Диаметр (D)', unit: 'см', placeholder: 'Диаметр' },
            { id: 'height', label: 'Высота (H)', unit: 'см', placeholder: 'Высота' }
        ],
        svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <!-- Цилиндр (вид сбоку) -->

            <!-- Верхний эллипс -->
            <ellipse cx="200" cy="90" rx="100" ry="25" fill="#d4eaf2" stroke="#1a4d6d" stroke-width="2.5"/>

            <!-- Боковые стенки -->
            <line x1="100" y1="90" x2="100" y2="230" stroke="#1a4d6d" stroke-width="2.5"/>
            <line x1="300" y1="90" x2="300" y2="230" stroke="#1a4d6d" stroke-width="2.5"/>

            <!-- Заливка боковой поверхности -->
            <rect x="100" y="90" width="200" height="140" fill="#e8f4f8"/>

            <!-- Нижний эллипс -->
            <ellipse cx="200" cy="230" rx="100" ry="25" fill="none" stroke="#1a4d6d" stroke-width="2.5"/>

            <!-- Верхний эллипс поверх (для правильного отображения) -->
            <ellipse cx="200" cy="90" rx="100" ry="25" fill="none" stroke="#1a4d6d" stroke-width="2.5"/>

            <!-- Размерная линия диаметра -->
            <line x1="100" y1="60" x2="300" y2="60" stroke="#2d6a8f" stroke-width="1.5" marker-start="url(#arrowStartCyl)" marker-end="url(#arrowEndCyl)"/>
            <line x1="100" y1="55" x2="100" y2="65" stroke="#2d6a8f" stroke-width="1.5"/>
            <line x1="300" y1="55" x2="300" y2="65" stroke="#2d6a8f" stroke-width="1.5"/>
            <text x="200" y="45" text-anchor="middle" fill="#1a4d6d" font-weight="bold" font-size="16">D (см)</text>

            <!-- Размерная линия высоты -->
            <line x1="330" y1="90" x2="330" y2="230" stroke="#2d6a8f" stroke-width="1.5" marker-start="url(#arrowStartCyl)" marker-end="url(#arrowEndCyl)"/>
            <line x1="325" y1="90" x2="335" y2="90" stroke="#2d6a8f" stroke-width="1.5"/>
            <line x1="325" y1="230" x2="335" y2="230" stroke="#2d6a8f" stroke-width="1.5"/>
            <text x="355" y="165" text-anchor="start" fill="#1a4d6d" font-weight="bold" font-size="16">H (см)</text>

            <!-- Стрелки -->
            <defs>
                <marker id="arrowStartCyl" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
                    <path d="M 5 0 L 5 6 L 0 3 Z" fill="#2d6a8f"/>
                </marker>
                <marker id="arrowEndCyl" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                    <path d="M 0 0 L 0 6 L 5 3 Z" fill="#2d6a8f"/>
                </marker>
            </defs>
        </svg>`
    }
};

// Функции расчета объема для разных форм
const volumeCalculations = {
    rectangular: (values) => {
        const { length, width, height } = values;
        return length * width * height / 1000;
    },
    round: (values) => {
        const { diameter } = values;
        const radius = diameter / 2;
        return (4/3) * Math.PI * radius * radius * radius / 1000;
    },
    corner: (values) => {
        const { side1, side2, height } = values;
        return (side1 * side2 * height / 2) / 1000;
    },
    cylinder: (values) => {
        const { diameter, height } = values;
        const radius = diameter / 2;
        return Math.PI * radius * radius * height / 1000;
    }
};

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const shapeSelect = document.getElementById('shape');

    // Устанавливаем начальную форму
    updateShapeFields('rectangular');

    // Слушатель изменения формы
    shapeSelect.addEventListener('change', function() {
        updateShapeFields(this.value);
    });
});

// Функция обновления полей в зависимости от выбранной формы
function updateShapeFields(shapeType) {
    const shape = aquariumShapes[shapeType];
    const inputFieldsContainer = document.getElementById('inputFields');
    const visualizationContainer = document.getElementById('shapeVisualization');

    // Обновляем визуализацию
    visualizationContainer.innerHTML = shape.svg;

    // Очищаем старые поля
    inputFieldsContainer.innerHTML = '';

    // Создаем новые поля
    shape.fields.forEach(field => {
        const inputGroup = document.createElement('div');
        inputGroup.className = 'input-group';

        inputGroup.innerHTML = `
            <label for="${field.id}">
                <span class="label-text">${field.label}</span>
                <span class="icon">📏</span>
            </label>
            <input type="number"
                   id="${field.id}"
                   placeholder="${field.placeholder}"
                   min="0"
                   step="0.1"
                   required>
        `;

        inputFieldsContainer.appendChild(inputGroup);
    });

    // Добавляем обработчики событий для новых полей
    const inputs = inputFieldsContainer.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value && parseFloat(this.value) > 0) {
                this.style.borderColor = '#2d6a8f';
            }
        });

        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                document.getElementById('aquariumForm').dispatchEvent(new Event('submit'));
            }
        });
    });

    // Скрываем результаты при смене формы
    document.getElementById('result').classList.add('hidden');
}

// Обработчик отправки формы
document.getElementById('aquariumForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const shapeType = document.getElementById('shape').value;
    const shape = aquariumShapes[shapeType];

    // Собираем значения полей
    const values = {};
    let allValid = true;
    let dimensionsText = [];

    shape.fields.forEach(field => {
        const input = document.getElementById(field.id);
        const value = parseFloat(input.value);

        if (!value || value <= 0) {
            allValid = false;
            return;
        }

        values[field.id] = value;
        dimensionsText.push(`${field.label}: ${value} см`);
    });

    if (!allValid) {
        alert('Пожалуйста, введите положительные значения для всех параметров');
        return;
    }

    // Вычисляем объем
    const volumeLiters = volumeCalculations[shapeType](values);
    const volumeCm3 = volumeLiters * 1000;

    // Отображаем результаты
    document.getElementById('volumeLiters').textContent = volumeLiters.toFixed(2);
    document.getElementById('volumeCm').textContent = volumeCm3.toFixed(0) + ' см³';
    document.getElementById('dimensions').textContent = dimensionsText.join(', ');

    const recommendation = getRecommendation(volumeLiters);
    document.getElementById('recommendation').textContent = recommendation;

    // Получаем и отображаем рекомендации по рыбкам
    const fishRecommendations = getFishRecommendations(volumeLiters);
    const fishRecommendationsContainer = document.getElementById('fishRecommendations');
    fishRecommendationsContainer.innerHTML = '';

    fishRecommendations.forEach(rec => {
        const fishOption = document.createElement('div');
        fishOption.className = 'fish-option';
        fishOption.innerHTML = `
            <div class="fish-option-header">
                <span class="fish-icon-small">🐠</span>
                <span class="fish-size">Размер взрослой особи: ${rec.size} см</span>
            </div>
            <div class="fish-option-body">
                <div class="fish-count">До ${rec.count} рыбок</div>
                <div class="fish-examples">${rec.examples}</div>
            </div>
        `;
        fishRecommendationsContainer.appendChild(fishOption);
    });

    document.getElementById('result').classList.remove('hidden');

    document.getElementById('result').scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
    });
});

function getRecommendation(liters) {
    if (liters < 10) {
        return 'Маленький аквариум. Подойдет для креветок или одиночной рыбки.';
    } else if (liters < 30) {
        return 'Нано-аквариум. Идеален для мелких рыбок и растений.';
    } else if (liters < 60) {
        return 'Небольшой аквариум. Можно содержать стайку мелких рыбок.';
    } else if (liters < 100) {
        return 'Средний аквариум. Отличный выбор для начинающих аквариумистов!';
    } else if (liters < 200) {
        return 'Большой аквариум. Простор для множества рыбок и растений!';
    } else if (liters < 500) {
        return 'Очень большой аквариум. Можно создать настоящий подводный мир!';
    } else {
        return 'Огромный аквариум! Возможности безграничны!';
    }
}

function getFishRecommendations(liters) {
    const recommendations = [];

    // Правило: 2.5 литра воды на 1 см длины тела рыбы
    // Добавляем варианты для разных размеров рыбок

    if (liters >= 5) {
        // Маленькие рыбки (2-3 см, средний размер 2.5 см)
        const smallFishCount = Math.floor(liters / (2.5 * 2.5));
        recommendations.push({
            size: '2-3',
            count: smallFishCount,
            examples: 'Неоны, гуппи, данио-рерио'
        });
    }

    if (liters >= 20) {
        // Средние рыбки (5-7 см, средний размер 6 см)
        const mediumFishCount = Math.floor(liters / (2.5 * 6));
        recommendations.push({
            size: '5-7',
            count: mediumFishCount,
            examples: 'Моллинезии, меченосцы, барбусы'
        });
    }

    if (liters >= 50) {
        // Крупные рыбки (10-12 см, средний размер 11 см)
        const largeFishCount = Math.floor(liters / (2.5 * 11));
        recommendations.push({
            size: '10-12',
            count: largeFishCount,
            examples: 'Скалярии, гурами, золотые рыбки'
        });
    }

    if (liters >= 150) {
        // Очень крупные рыбки (15-20 см, средний размер 17.5 см)
        const veryLargeFishCount = Math.floor(liters / (2.5 * 17.5));
        recommendations.push({
            size: '15-20',
            count: veryLargeFishCount,
            examples: 'Цихлиды, крупные сомы'
        });
    }

    return recommendations;
}