$('documnet').ready(() => {    
    let checkBox = $('INPUT[type="checkbox"]');
    let amenities = {};

    function addItem() {
        if (Object.values(amenities).length === 0) {
            $('.amenities H4').html('&nbsp;');
        } else if(Object.values(amenities).length > 2) {
            $('.amenities H4').text(Object.values(amenities).slice(0, 2).join(', ') + '...');
        }else {
            $('.amenities H4').text(Object.values(amenities).join(', '));
        }
    }
    
    checkBox.change(function () {
        if ($(this).is(':checked')) {
            amenities[$(this).attr('data-id')] = $(this).attr('data-name');
        } else {
            delete amenities[$(this).attr('data-id')];
        }
        addItem();
    });
});
