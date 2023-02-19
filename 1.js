const value = prompt('Введите температуру в градусах Цельсия:');
if (value === null || value === "") {
    alert('Всего доброго!');
 } else { 
	const celsius = Number.parseFloat(value);
	const result = celsius * 9 / 5 + 32;
	alert(`по Цельсию: ${celsius.toFixed(2)}\n\nпо Фаренгейту: ${result.toFixed(2)}`);
}