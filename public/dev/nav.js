/* Shared nav for the Now City Dev shelf.
   Single source of truth: add new docs to DOCS below and every page updates.
   Injected after DOMContentLoaded; hidden while the gate is up. */
(function(){
  var DOCS=[
    ["index.html","The Shelf"],
    ["atlas.html","Atlas"],
    ["now-city-homes.html","Homes Strategy"],
    ["million-homes.html","Million Homes"],
    ["jv-playbook.html","JV Playbook"],
    ["meeting-guides-jul-22.html","Meeting Guides"],
    ["atlas.html#codes","Codes"]
  ];
  var PARTNERS=[
    ["urban-reboot.html","Urban Reboot"],
    ["/denmark/","Salem & Denmark \u2197"],
    ["/denmark/coalition.html","Denmark Coalition \u2197"],
    ["/denmark/board.html","Coalition Board \u2197"]
  ];
  var EXT=[
    ["https://nowcity.co/invest/","Invest ↗"],
    ["https://nowcity.co/west-salem/","Edgewater ↗"],
    ["https://nowcity.co","nowcity.co ↗"]
  ];
  function init(){
    var css=[
      "#devnav{position:sticky;top:0;z-index:40;background:rgba(21,18,15,.97);border-bottom:1px solid var(--line,#3d392f);backdrop-filter:blur(6px)}",
      "body.gated #devnav{display:none}",
      "#devnav .nwrap{max-width:840px;margin:0 auto;padding:0 24px;display:flex;align-items:center;gap:18px;min-height:52px;flex-wrap:wrap}",
      "#devnav .nbrand{font-family:var(--serif,Georgia,serif);font-size:16px;color:var(--ink-strong,#f0ebe0);text-decoration:none;white-space:nowrap;padding:10px 0}",
      "#devnav .nbrand span{color:var(--accent,#d9a26c)}",
      "#devnav .nlinks{display:flex;align-items:center;gap:2px;flex-wrap:wrap;list-style:none;margin:0;padding:0}",
      "#devnav .nlinks a{font-size:11.5px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;text-decoration:none;color:var(--muted,#948d80);padding:6px 10px;border-radius:999px;white-space:nowrap}",
      "#devnav .nlinks a:hover{color:var(--accent,#d9a26c);background:rgba(217,162,108,.08)}",
      "#devnav .nlinks a.on{color:#1d1a16;background:var(--accent,#d9a26c)}",
      "#devnav .next{margin-left:auto;display:flex;gap:2px;flex-wrap:wrap}",
      "#devnav .next a{color:#6f6a5e}",
      "#devnav .ndd{position:relative}",
      "#devnav .ndd>a::after{content:' \\25BE';font-size:8px;opacity:.7}",
      "#devnav .nddm{display:none;position:absolute;top:100%;left:-6px;min-width:180px;background:#1f1c18;border:1px solid var(--line,#3d392f);border-radius:8px;padding:6px 0;z-index:60}",
      "#devnav .ndd:hover .nddm,#devnav .ndd:focus-within .nddm{display:block}",
      "#devnav .nddm a{display:block;border-radius:0;padding:7px 14px}",
      "@media print{#devnav{display:none}}",
      "@media(max-width:720px){#devnav .next{margin-left:0}}"
    ].join("\n");
    var st=document.createElement("style");st.textContent=css;document.head.appendChild(st);

    var here=(location.pathname.split("/").pop()||"index.html");
    var nav=document.createElement("nav");nav.id="devnav";
    var links=DOCS.map(function(d){
      var on=(d[0]===here)?' class="on"':'';
      return '<a href="'+d[0]+'"'+on+'>'+d[1]+'</a>';
    }).join("");
    var ext=EXT.map(function(d){return '<a href="'+d[0]+'">'+d[1]+'</a>';}).join("");
    var pOn=PARTNERS.some(function(d){return d[0]===here});
    var partners='<span class="ndd"><a href="urban-reboot.html"'+(pOn?' class="on"':'')+'>Partners</a><span class="nddm">'+
      PARTNERS.map(function(d){var on=(d[0]===here)?' class="on"':'';return '<a href="'+d[0]+'"'+on+'>'+d[1]+'</a>';}).join("")+'</span></span>';
    nav.innerHTML='<div class="nwrap"><a class="nbrand" href="index.html">Now City <span>Dev</span></a><div class="nlinks">'+links+partners+'</div><div class="nlinks next">'+ext+'</div></div>';
    document.body.insertBefore(nav,document.body.firstChild);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
  else init();
})();
