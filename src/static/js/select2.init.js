$(document).ready(function() {
    $('.select').select2();
    $('.select').on("select2:open", function (e) {
        initSelectScroll();
    });
    
    let selectArrowContainer = $('.select2-container--default .select2-selection--single .select2-selection__arrow');
    let selectArrow = $('.ico-arrow_dropdown_white');
    selectArrowContainer.append(selectArrow);

    function initSelectScroll() {
        $('.select2-dropdown').overlayScrollbars({});
    }
});