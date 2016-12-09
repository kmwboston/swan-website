// $(function(){
//
//
//     $(window).scroll(function () {
//         console.log($(document).scrollTop())
//         var y = $(document).scrollTop();
//
//         if (y >= 0) {
//             $(".jumbotron").fadeOut("slow");
//         }
//     });
//
//
//     var jumboHeight = $('.jumbotron').outerHeight();
//     function parallax(){
//         var scrolled = $(window).scrollTop();
//         $('.bg').css('height', (jumboHeight-scrolled) + 'px');
//     }
//
//     $(window).scroll(function(e){
//         parallax();
//     });
// });

/*
 * This is the plugin
 */
(function(a){a.createModal=function(b){defaults={title:"",message:"Preview",closeButton:true,scrollable:false};var b=a.extend({},defaults,b);var c=(b.scrollable===true)?'style="max-height: 420px;overflow-y: auto;"':"";html='<div class="modal fade" id="myModal">';html+='<div class="modal-dialog">';html+='<div class="modal-content">';html+='<div class="modal-header">';html+='<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';if(b.title.length>0){html+='<h4 class="modal-title">'+b.title+"</h4>"}html+="</div>";html+='<div class="modal-body" '+c+">";html+=b.message;html+="</div>";html+='<div class="modal-footer">';if(b.closeButton===true){html+='<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>'}html+="</div>";html+="</div>";html+="</div>";html+="</div>";a("body").prepend(html);a("#myModal").modal().on("hidden.bs.modal",function(){a(this).remove()})}})(jQuery);

/*
 * Here is how you use it
 */
$(function(){
    $('.view-pdf').on('click',function(){
        var pdf_link = $(this).attr('href');
        var iframe = '<div class="iframe-container"><iframe src="'+pdf_link+'"></iframe></div>'
        $.createModal({
            title:'Preview',
            message: iframe,
            closeButton:true,
            scrollable:false
        });
        return false;
    });

function offsetAnchor() {
    if(location.hash.length !== 0) {
        window.scrollTo(window.scrollX, window.scrollY - 100);
    }
}

// This will capture hash changes while on the page
    $window.on("whatWeDo", offsetAnchor);

// This is here so that when you enter the page with a hash,
// it can provide the offset in that case too. Having a timeout
// seems necessary to allow the browser to jump to the anchor first.
    $window.setTimeout(offsetAnchor, 1);
})