#!/usr/bin/env node
// Refresh om.html (and future pages) headline figures from the single source of truth.
// Usage:  node scripts/stamp-livecase.js
// Source of truth: assets/data/livecase.json  (regenerate that, then run this).
const fs=require('fs'), path=require('path');
const ROOT=path.join(__dirname,'..');
const d=JSON.parse(fs.readFileSync(path.join(ROOT,'assets/data/livecase.json'),'utf8')).headline;
const M1=x=>'$'+(x/1e6).toFixed(1)+'M';
const fig={
  totalCost:      M1(d.totalCost),
  seniorLoan:     M1(d.seniorLoan),
  totalEquity:    M1(d.totalEquity),
  coGpEquity:     M1(d.coGpEquity),
  lpEquity:       M1(d.lpEquity),
  netProfit:      M1(d.netProfit),
  leaseUpReserve: M1(d.leaseUpReserve),
  stabilizedNOI:  '$'+(d.stabilizedNOI/1e6).toFixed(2)+'M',
  leveredIRR:     (d.leveredIRR*100).toFixed(1)+'%',
  equityMultiple: d.equityMultiple.toFixed(2)+'x',
};
const PAGES=['om.html'];
let total=0;
for(const p of PAGES){
  const fp=path.join(ROOT,p); let html=fs.readFileSync(fp,'utf8'), n=0;
  for(const [k,v] of Object.entries(fig)){
    html=html.replace(new RegExp('(data-fig="'+k+'"[^>]*>)[^<]*(<)','g'),(m,a,b)=>{n++;return a+v+b;});
  }
  fs.writeFileSync(fp,html); total+=n; console.log(`  ${p}: stamped ${n} figures`);
}
console.log(`Done. ${total} figures refreshed from livecase.json (asOf ${require(path.join(ROOT,'assets/data/livecase.json')).asOf}).`);
