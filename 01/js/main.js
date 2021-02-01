var h = prompt('Высота цилиндра: ', '');

var r = prompt('Радиус цилиндра: ', '');

var v = Math.round(Math.PI * Math.pow(r, 2) * h);

alert('Объем цилиндра с радиусом вращения - ' + r + ', и его высотой - ' + h + ' равен - ' + v);