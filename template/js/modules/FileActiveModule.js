export default function FileActiveModule() {
  

    $('.tab-link-mobi').on('click', function () {
        $('.tab-link').slideToggle();
    });

    $('.ques-tt').on('click', function () {
        $(this).parent().toggleClass('active');
        $(this).next('.ques-content').slideToggle();
    });
}