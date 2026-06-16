#!/usr/bin/env node
// Generate assets/data/livecase.json FROM the engine's Live Case (so the stamped figures in
// om.html always match the embedded Explorer dashboards). Run after changing SCN.live.
// Usage: node scripts/gen-livecase.js   (then: node scripts/stamp-livecase.js)
const fs=require('fs'), path=require('path');
const ROOT=path.join(__dirname,'..');
const s=fs.readFileSync(path.join(ROOT,'upside.html'),'utf8');
const eng=s.slice(s.indexOf('const RETNRA='),s.indexOf('// ===== UI ====='));
const scn=s.match(/const SCN=\{[\s\S]*?\n\};/)[0];
let R; eval(eng+scn+'R=run({...BASE,...SCN.live.inputs});');
const su=R.su.sources;
const jp=path.join(ROOT,'assets/data/livecase.json');
const cur=JSON.parse(fs.readFileSync(jp,'utf8'));
cur.asOf=new Date().toISOString().slice(0,10);
cur.basis='Phase 1 (5.29 AC, 740 Bassett) - NCUE Live Case, engine-generated';
cur.headline={
  totalCost:Math.round(R.totalCost), seniorLoan:Math.round(su.seniorLoan), ltc:+R.ltc.toFixed(4),
  totalEquity:Math.round(R.eqTot), coGpEquity:Math.round(su.gpEquity), lpEquity:Math.round(su.lpEquity),
  sdcCredit:Math.round(su.grantsSubsidy),
  leveredIRR:+R.irr.toFixed(4), equityMultiple:+R.em.toFixed(3), netProfit:Math.round(R.profit),
  stabilizedNOI:Math.round(R.opStmt.noi), yieldOnCost:+R.yoc.toFixed(4),
  leaseUpReserve:(cur.headline&&cur.headline.leaseUpReserve)||8405287,
  recapIRR:0.1255, recapEquityMultiple:1.454
};
fs.writeFileSync(jp, JSON.stringify(cur,null,2));
console.log('livecase.json regenerated from engine: cost $'+(R.totalCost/1e6).toFixed(1)+'M, loan $'+(su.seniorLoan/1e6).toFixed(1)+'M, IRR '+(R.irr*100).toFixed(2)+'%, EM '+R.em.toFixed(2)+', profit $'+(R.profit/1e6).toFixed(1)+'M');
