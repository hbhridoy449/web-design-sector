    jQuery(document).ready(function(){
        
        var $portfolio = $('.portfolio').isotope({
                            // options
                            itemSelector: '.p-item',
                            layoutMode: 'masonry',
                            filter: '*'
                        });
        
         $('.filtermenu ul li').on('click', function(){
            
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({
                filter: selector
            });
            
         });

        
    });
    
