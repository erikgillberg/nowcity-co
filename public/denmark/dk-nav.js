/* Shared nav for the Salem & Denmark mini-site (nowcity.co/denmark). */
(function(){
  var LINKS=[
    ["index.html","The Plan"],
    ["coalition.html","The Coalition"],
    ["board.html","The Board"],
    ["https://nowcity.co/west-salem/district.html","Edgewater ↗"]
  ];
  function init(){
    var css=[
      "#dknav{position:sticky;top:0;z-index:40;background:rgba(21,18,15,.97);border-bottom:1px solid var(--line,#3d392f);backdrop-filter:blur(6px)}",
      "body.gated #dknav{display:none}",
      "#dknav .nwrap{max-width:840px;margin:0 auto;padding:0 24px;display:flex;align-items:center;gap:18px;min-height:52px;flex-wrap:wrap}",
      "#dknav .nbrand{font-family:var(--serif,Georgia,serif);font-size:16px;color:var(--ink-strong,#f0ebe0);text-decoration:none;white-space:nowrap;padding:10px 0}",
      "#dknav .nbrand span{color:var(--accent,#d9a26c)}",
      "#dknav .nlinks{display:flex;align-items:center;gap:2px;flex-wrap:wrap;list-style:none;margin:0;padding:0}",
      "#dknav .nlinks a{display:block;padding:8px 11px;font-size:13px;color:var(--muted,#948d80);text-decoration:none;border-radius:6px}",
      "#dknav .nlinks a:hover{color:var(--accent,#d9a26c)}",
      "#dknav .nlinks a.on{color:var(--ink-strong,#f0ebe0)}"
    ].join("");
    var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
    var here=location.pathname.split('/').pop()||'index.html';
    var nav=document.createElement('nav');nav.id='dknav';
    var items=LINKS.map(function(l){return '<li><a href="'+l[0]+'"'+(here===l[0]?' class="on"':'')+'>'+l[1]+'</a></li>'}).join('');
    nav.innerHTML='<div class="nwrap"><a class="nbrand" href="index.html">Now City <span>&amp;</span> Denmark</a><ul class="nlinks">'+items+'</ul></div>';
    document.body.insertBefore(nav,document.body.firstChild);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
