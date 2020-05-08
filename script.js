let chicago = {
  photo: 'images/chicago.jpg',
  title: 'Illy and Rowan',
  description: 'Photo of Illy and her toddler sister Rowan taken by Jana in 2018 at Navy Pier in Chicago.',
};

// let ceska_kanada = {
//   photo: 'images/ceska_kanada.jpg',
//   title: 'Lejla in Czech Canada',
//   description: 'Photo of Lejla taken during Easter 2019 by Illy on a family trip to Czech Canada, she is holding on to a large rock that looks like a face.',
// };

let positive_creativity = {
  photo: 'images/positive_creativity.jpg',
  title: 'Positive Creativity',
  description: 'Photo of Illy standing in front of colorful graffiti which sais "positive creativity". Photo taken by Jana in Chicago in 2018.',
};

let slovensko = {
  photo: 'images/slovensko.jpg',
  title: 'Hiking in Slovakia',
  description: 'Photo of hikers standing on a hill in the fog. Photo from October 2017 taken on a hiking trip to Cerová vrchovina in Slovakia.',
};

let slovinsko = {
  photo: 'images/slovinsko.jpg',
  title: 'Family in Slovenian Alps',
  description: 'Mom, Illy and Naomi taking a selfie in Kranjska Gora, Slovenia, July 2018.',
};

let lapland = {
  photo: 'images/laponsko.jpg',
  title: 'Huski ride',
  description: "Photo from the huski ride Illy went on during her trip to Lapland in 2020."
}
let gallery = [chicago, positive_creativity, slovensko, slovinsko, lapland];

let currentPhoto = 0;

let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', gallery[photoNumber].photo);
  $('#title').html(gallery[photoNumber].title);
  $('#description').html(gallery[photoNumber].description);
  $(`.arrow-up`).css('border-bottom', '5px solid transparent')
  $(`[index=${photoNumber}]`).css('border-bottom', '5px solid lightgrey')
}

loadPhoto(currentPhoto);

$('#rightArrow').click(() => {
  if (currentPhoto < (gallery.length - 1)) {
  currentPhoto++;
  loadPhoto(currentPhoto);
} else {
  currentPhoto = 0;
  loadPhoto(currentPhoto);
}
})

$('#leftArrow').click(() => {
  if (currentPhoto > 0) {
  currentPhoto--;
  loadPhoto(currentPhoto);
  } else {
    currentPhoto = gallery.length - 1;
    loadPhoto(currentPhoto);
  }
})

gallery.forEach((item, index) => {
  $('#image').append(`<div class='container'><div class='arrow-up' index=${index}></div><img src="${gallery[index].photo}" class="image" data-index="${index}"><p class='title'>${gallery[index].title}</p></img></div>`);
  $('.image').click((event) => {
    let indexClicked = $(event.target).attr('data-index');
    let numberOfIndexClicked = parseInt(indexClicked);
    currentPhoto = numberOfIndexClicked;
    loadPhoto(numberOfIndexClicked);
    $(`data-index="${index}"`).css('border: 3px solid black;')
})
});
