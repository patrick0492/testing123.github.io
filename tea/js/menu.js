var li_elements = document.querySelectorAll('#datamenu li');
var item_elements = document.querySelectorAll('.item');

for(var i = 0; i < li_elements.length; i++){
  li_elements[i].addEventListener('mouseover', function(){
    li_elements.forEach(function(li){
      li.classList.remove('active');
    })
    this.classList.add('active');
    var li_value = this.getAttribute('data-li');
    item_elements.forEach(function(item){
      item.style.display = 'none';
    })
    if(li_value == 'teablack'){
      document.querySelector('.' + li_value).style.display = 'block';
    }
    else if(li_value == 'teawhite'){
      document.querySelector('.' + li_value).style.display = 'block';
    }
    else if(li_value == 'teagreen'){
      document.querySelector('.' + li_value).style.display = 'block';
    }
    else if(li_value == 'teaherbal'){
      document.querySelector('.' + li_value).style.display = 'block';
    }
    else if(li_value == 'teaspices'){
      document.querySelector('.' + li_value).style.display = 'block';
    }
    else if(li_value == 'tearooibos'){
      document.querySelector('.' + li_value).style.display = 'block';
    }
    else if(li_value == 'teafruit'){
      document.querySelector('.' + li_value).style.display = 'block';
    }
    else if(li_value == 'teaice'){
      document.querySelector('.' + li_value).style.display = 'block';
    }
    else if(li_value == 'joyberry'){
      document.querySelector('.' + li_value).style.display = 'block';
    }
    else if(li_value == 'joycitrus'){
      document.querySelector('.' + li_value).style.display = 'block';
    }
    else if(li_value == 'joyginger'){
      document.querySelector('.' + li_value).style.display = 'block';
    }
    else if(li_value == 'joygreen'){
      document.querySelector('.' + li_value).style.display = 'block';
    }
    else if(li_value == 'joyspicy'){
      document.querySelector('.' + li_value).style.display = 'block';
    }
    else{
      console.log('');
    }

  })
}



  const togglebtn = document.querySelector('.toggle');
  const sideBarLevel1 = document.querySelector('#sidebar');
  const sidebarClose = document.querySelector('.sidebarclose');

  function toggleMenu(){
    // togglebtn.classList.toggle('active')
    sideBarLevel1.classList.add( 'active')
    sidebarClose.classList.add('active')
  }
  togglebtn.addEventListener('click', toggleMenu)

  sidebarClose.addEventListener('click', ()=>{
    sidebarClose.classList.remove('active')
  })


$(document).ready(function() {  
  // $('.toggle').click(function(){
  //   $('#sidebar').addClass('active');
  // });

  $('.submenulink').hover(function(){     
      $('.sidebarsub').addClass('subactive');    
      $('.sidebarsub2').removeClass('subactive');    
  });
  $('#sidebar').hover(function(){     
      // $('.sidebarsub').removeClass('subactive');  
      $('.sidebarsub2').removeClass('subactive'); 
  });
  $('.sidebarsub').mouseleave(function(){     
      // $('.sidebarsub').removeClass('subactive');  
      $('.sidebarsub3').removeClass('subactive'); 
      $('.sidebarsub4').removeClass('subactive');   
  });
  $('.submenulink-nothing').hover(function(){     
      $('.sidebarsub').removeClass('subactive');    
      $('.sidebarsub3').removeClass('subactive'); 
      $('.sidebarsub4').removeClass('subactive'); 
      $('.sidebarsub2').removeClass('subactive');    
  });
  $('.submenulink3').hover(function(){     
      $('.sidebarsub3').addClass('subactive');    
  });
  $('.sidebarsub3').mouseleave(function(){     
      $('.sidebarsub3').removeClass('subactive');    
  });
  $('.submenulink4').hover(function(){     
      $('.sidebarsub4').addClass('subactive');    
  });
  $('.sidebarsub4').mouseleave(function(){     
      $('.sidebarsub4').removeClass('subactive');    
  });
  $('.submenulink2').hover(function(){     
      $('.sidebarsub2').addClass('subactive');    
  });
  $('.sidebarsub2').mouseleave(function(){     
      $('.sidebarsub2').removeClass('subactive');    
  });
  $('.sidebarsub2').hover(function(){     
      $('.sidebarsub').addClass('subactive');    
  });
  $('.sidebarsub3').hover(function(){     
      $('.sidebarsub').removeClass('subactive');    
  });
  $('#datamenu .header-link').hover(function(){     
      $('.sidebarsub2').removeClass('subactive');    
  });

  if ($('.sidebarsub2').hasClass('subactive')) {
    $(".sidebarsub").addClass('subactive');
  };
  if ($('.sidebarsub').not('subactive')) {
    $(".sidebarsub2").removeClass('subactive');
  };
  // if ($('.sidebarsub3').hasClass('subactive')) {
  //   $(".sidebarsub").removeClass('subactive');
  // };
  // if ($('.sidebarsub4').hasClass('subactive')) {
  //   $(".sidebarsub").removeClass('subactive');
  // };
  


  // $('.submenulink2').hover(function(){     
  //   $('.sidebarsub2').addClass('subactive');    
  // }); 
  // $('.submenulink2').mouseleave(function(){     
  //   $('.sidebarsub2').removeClass('subactive');    
  // }); 
  // $('.sidebarsub2').mouseleave(function(){     
  //   $('.sidebarsub2').removeClass('subactive');    
  // });         

  $('.sidebarclose').click(function(){
    $('.sidebarsub').removeClass('subactive');  
    $('#sidebar').removeClass('active'); 
    $('.sidebarsub2').removeClass('subactive'); 
    $('.sidebarsub3').removeClass('subactive'); 
    $('.sidebarsub4').removeClass('subactive'); 
  });  


});  
