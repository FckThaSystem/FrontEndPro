var reviewBlock = document.createElement('div'),
    reviewImg = new Image(100, 100),
    reviewTitle = document.createElement('h1'),
    reviewSubtitle = document.createElement('h2'),
    reviewText = document.createElement('p');

reviewImg.src = 'https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png';
reviewBlock.setAttribute('class', 'review_block');
reviewTitle.textContent = 'Заголовок отзыва';
reviewSubtitle.textContent = 'Подзаголовок отзыва';
reviewText.textContent = 'Основной текст отзыва';

reviewBlock.append(reviewImg, reviewTitle, reviewSubtitle, reviewText);

document.body.append(reviewBlock);