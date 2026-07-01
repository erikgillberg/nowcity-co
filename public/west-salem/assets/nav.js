/* Shared mobile nav: injects a hamburger toggle and wires touch-friendly dropdowns.
   Works for both the site nav (#nav) and the Financial Model nav (#wsnav). */
(function(){
  function init(){
    var nav=document.getElementById('nav')||document.getElementById('wsnav');
    if(!nav)return;
    var wrap=nav.querySelector('.wrap');
    var links=nav.querySelector('.navlinks')||(wrap&&wrap.querySelector('ul'));
    if(!wrap||!links)return;
    if(!links.classList.contains('navlinks'))links.classList.add('navlinks');

    var btn=document.createElement('button');
    btn.className='navtoggle';
    btn.setAttribute('aria-label','Menu');
    btn.setAttribute('aria-expanded','false');
    btn.innerHTML='<span></span><span></span><span></span>';
    wrap.appendChild(btn);

    function mobile(){return window.matchMedia('(max-width:860px)').matches;}

    btn.addEventListener('click',function(){
      var open=nav.classList.toggle('navopen');
      btn.setAttribute('aria-expanded',open?'true':'false');
    });

    // Dropdown parents toggle their submenu on mobile instead of navigating.
    Array.prototype.forEach.call(links.querySelectorAll('.dd>a'),function(a){
      a.addEventListener('click',function(e){
        if(mobile()){e.preventDefault();a.parentNode.classList.toggle('open');}
      });
    });

    // Tapping a real link closes the menu.
    Array.prototype.forEach.call(links.querySelectorAll('a'),function(a){
      a.addEventListener('click',function(){
        if(!(a.parentNode&&a.parentNode.classList.contains('dd'))){
          nav.classList.remove('navopen');
          btn.setAttribute('aria-expanded','false');
        }
      });
    });

    window.addEventListener('resize',function(){
      if(!mobile()){
        nav.classList.remove('navopen');
        btn.setAttribute('aria-expanded','false');
      }
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);
  else init();
})();
