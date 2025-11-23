document.getElementById('aquariumForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);

    if (length <= 0 || width <= 0 || height <= 0) {
        alert('Пожалуйста, введите положительные значения для всех параметров');
        return;
    }

    const volumeCm3 = length * width * height;
    const volumeLiters = volumeCm3 / 1000;

    document.getElementById('volumeLiters').textContent = volumeLiters.toFixed(2);
    document.getElementById('volumeCm').textContent = volumeCm3.toFixed(0) + ' см³';
    document.getElementById('dimensions').textContent = `${length} × ${width} × ${height} см`;

    const recommendation = getRecommendation(volumeLiters);
    document.getElementById('recommendation').textContent = recommendation;

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

const inputs = document.querySelectorAll('input[type="number"]');
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