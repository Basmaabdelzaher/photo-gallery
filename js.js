$(document).ready(() => {

    $('.album-photo-thumbnail').each((index, element) => {
        $(element).css('background-image', 'url(./images/'+ (index+1) +'.jpg)');
    });


    $('.album-photo-thumbnail').click(function () {
        let imageFullUrl = $(this).css('background-image');
        let imageSrc = imageFullUrl.substring(5, imageFullUrl.length - 2);

        $('.album-photo-preview').attr('src', imageSrc);

    });
});