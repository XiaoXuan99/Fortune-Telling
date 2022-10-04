// Automatically generated with Reach 0.1.12 (4ca32459)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (4ca32459)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Address;
  
  
  const v198 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v199 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v199, v198],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:35:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v199, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v203, v204], secs: v206, time: v205, didSend: v31, from: v202 } = txn1;
      
      sim_r.txns.push({
        amt: v203,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v215 = stdlib.safeAdd(v205, v204);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v203, v204], secs: v206, time: v205, didSend: v31, from: v202 } = txn1;
  ;
  const v215 = stdlib.safeAdd(v205, v204);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v215],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v202, v203, v204, v215],
      evt_cnt: 0,
      funcNum: 2,
      lct: v205,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v319, time: v318, didSend: v164, from: v317 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v202,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v319, time: v318, didSend: v164, from: v317 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:27:35:application',
      fs: ['at ./index.rsh:26:14:application call to [unknown function] (defined at: ./index.rsh:26:32:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:25:30:function exp)', 'at ./index.rsh:43:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v221, time: v220, didSend: v40, from: v219 } = txn2;
    const v223 = stdlib.add(v203, v203);
    ;
    let v224 = false;
    let v225 = v220;
    let v232 = v223;
    
    let txn3 = txn2;
    while (await (async () => {
      const v236 = v224 ? false : true;
      
      return v236;})()) {
      const v243 = stdlib.safeAdd(v225, v204);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc0],
        timeoutAt: ['time', v243],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v202, v203, v204, v219, v232, v243],
          evt_cnt: 0,
          funcNum: 5,
          lct: v225,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v293, time: v292, didSend: v127, from: v291 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v202,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v293, time: v292, didSend: v127, from: v291 } = txn5;
        ;
        const v294 = stdlib.addressEq(v202, v291);
        const v295 = stdlib.addressEq(v219, v291);
        const v296 = v294 ? true : v295;
        stdlib.assert(v296, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:55:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:27:35:application',
          fs: ['at ./index.rsh:26:14:application call to [unknown function] (defined at: ./index.rsh:26:32:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:25:30:function exp)', 'at ./index.rsh:55:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v249], secs: v251, time: v250, didSend: v57, from: v248 } = txn4;
        ;
        const v252 = stdlib.addressEq(v219, v248);
        stdlib.assert(v252, {
          at: './index.rsh:54:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v259 = stdlib.safeAdd(v250, v204);
        const v263 = stdlib.protect(ctc1, await interact.getDecision(v249), {
          at: './index.rsh:59:66:application',
          fs: ['at ./index.rsh:58:19:application call to [unknown function] (defined at: ./index.rsh:58:23:function exp)'],
          msg: 'getDecision',
          who: 'Alice'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v202, v203, v204, v219, v232, v259, v263],
          evt_cnt: 1,
          funcNum: 6,
          lct: v250,
          onlyIf: true,
          out_tys: [ctc1],
          pay: [stdlib.checkedBigNumberify('./index.rsh:61:15:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v265], secs: v267, time: v266, didSend: v67, from: v264 } = txn5;
            
            ;
            
            const cv224 = v265;
            const cv225 = v266;
            const cv232 = v232;
            
            await (async () => {
              const v224 = cv224;
              const v225 = cv225;
              const v232 = cv232;
              
              if (await (async () => {
                const v236 = v224 ? false : true;
                
                return v236;})()) {
                const v243 = stdlib.safeAdd(v225, v204);
                sim_r.isHalt = false;
                }
              else {
                const v310 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '2'), v203);
                sim_r.txns.push({
                  kind: 'from',
                  to: v219,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v259],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc1],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v202, v203, v204, v219, v232, v259],
            evt_cnt: 0,
            funcNum: 7,
            lct: v250,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v275, time: v274, didSend: v93, from: v273 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v219,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v275, time: v274, didSend: v93, from: v273 } = txn6;
          ;
          const v276 = stdlib.addressEq(v202, v273);
          const v277 = stdlib.addressEq(v219, v273);
          const v278 = v276 ? true : v277;
          stdlib.assert(v278, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:62:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:27:35:application',
            fs: ['at ./index.rsh:26:14:application call to [unknown function] (defined at: ./index.rsh:26:32:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:25:30:function exp)', 'at ./index.rsh:62:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v265], secs: v267, time: v266, didSend: v67, from: v264 } = txn5;
          ;
          const v268 = stdlib.addressEq(v202, v264);
          stdlib.assert(v268, {
            at: './index.rsh:61:15:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          stdlib.protect(ctc2, await interact.seeOutcome(v265, v249), {
            at: './index.rsh:65:32:application',
            fs: ['at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:31:function exp)'],
            msg: 'seeOutcome',
            who: 'Alice'
            });
          
          const cv224 = v265;
          const cv225 = v266;
          const cv232 = v232;
          
          v224 = cv224;
          v225 = cv225;
          v232 = cv232;
          
          txn3 = txn5;
          continue;}
        
        }
      
      }
    const v310 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '2'), v203);
    ;
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v203, v204], secs: v206, time: v205, didSend: v31, from: v202 } = txn1;
  ;
  const v215 = stdlib.safeAdd(v205, v204);
  stdlib.protect(ctc1, await interact.acceptWager(v203), {
    at: './index.rsh:40:29:application',
    fs: ['at ./index.rsh:39:13:application call to [unknown function] (defined at: ./index.rsh:39:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v202, v203, v204, v215],
    evt_cnt: 0,
    funcNum: 1,
    lct: v205,
    onlyIf: true,
    out_tys: [],
    pay: [v203, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v221, time: v220, didSend: v40, from: v219 } = txn2;
      
      const v223 = stdlib.add(v203, v203);
      sim_r.txns.push({
        amt: v203,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v224 = false;
      const v225 = v220;
      const v232 = v223;
      
      if (await (async () => {
        const v236 = v224 ? false : true;
        
        return v236;})()) {
        const v243 = stdlib.safeAdd(v225, v204);
        sim_r.isHalt = false;
        }
      else {
        const v310 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '2'), v203);
        sim_r.txns.push({
          kind: 'from',
          to: v219,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v215],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v202, v203, v204, v215],
      evt_cnt: 0,
      funcNum: 2,
      lct: v205,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v319, time: v318, didSend: v164, from: v317 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v202,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v319, time: v318, didSend: v164, from: v317 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:27:35:application',
      fs: ['at ./index.rsh:26:14:application call to [unknown function] (defined at: ./index.rsh:26:32:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:25:30:function exp)', 'at ./index.rsh:43:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v221, time: v220, didSend: v40, from: v219 } = txn2;
    const v223 = stdlib.add(v203, v203);
    ;
    let v224 = false;
    let v225 = v220;
    let v232 = v223;
    
    let txn3 = txn2;
    while (await (async () => {
      const v236 = v224 ? false : true;
      
      return v236;})()) {
      const v243 = stdlib.safeAdd(v225, v204);
      const v247 = stdlib.protect(ctc0, await interact.getFortune(), {
        at: './index.rsh:51:62:application',
        fs: ['at ./index.rsh:50:17:application call to [unknown function] (defined at: ./index.rsh:50:21:function exp)'],
        msg: 'getFortune',
        who: 'Bob'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v202, v203, v204, v219, v232, v243, v247],
        evt_cnt: 1,
        funcNum: 4,
        lct: v225,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:54:13:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v249], secs: v251, time: v250, didSend: v57, from: v248 } = txn4;
          
          ;
          const v259 = stdlib.safeAdd(v250, v204);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v243],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v202, v203, v204, v219, v232, v243],
          evt_cnt: 0,
          funcNum: 5,
          lct: v225,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v293, time: v292, didSend: v127, from: v291 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v202,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v293, time: v292, didSend: v127, from: v291 } = txn5;
        ;
        const v294 = stdlib.addressEq(v202, v291);
        const v295 = stdlib.addressEq(v219, v291);
        const v296 = v294 ? true : v295;
        stdlib.assert(v296, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:55:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:27:35:application',
          fs: ['at ./index.rsh:26:14:application call to [unknown function] (defined at: ./index.rsh:26:32:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:25:30:function exp)', 'at ./index.rsh:55:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v249], secs: v251, time: v250, didSend: v57, from: v248 } = txn4;
        ;
        const v252 = stdlib.addressEq(v219, v248);
        stdlib.assert(v252, {
          at: './index.rsh:54:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v259 = stdlib.safeAdd(v250, v204);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc2],
          timeoutAt: ['time', v259],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v202, v203, v204, v219, v232, v259],
            evt_cnt: 0,
            funcNum: 7,
            lct: v250,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v275, time: v274, didSend: v93, from: v273 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v219,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v275, time: v274, didSend: v93, from: v273 } = txn6;
          ;
          const v276 = stdlib.addressEq(v202, v273);
          const v277 = stdlib.addressEq(v219, v273);
          const v278 = v276 ? true : v277;
          stdlib.assert(v278, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:62:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:27:35:application',
            fs: ['at ./index.rsh:26:14:application call to [unknown function] (defined at: ./index.rsh:26:32:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:25:30:function exp)', 'at ./index.rsh:62:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v265], secs: v267, time: v266, didSend: v67, from: v264 } = txn5;
          ;
          const v268 = stdlib.addressEq(v202, v264);
          stdlib.assert(v268, {
            at: './index.rsh:61:15:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          stdlib.protect(ctc1, await interact.seeOutcome(v265, v249), {
            at: './index.rsh:65:32:application',
            fs: ['at ./index.rsh:64:13:application call to [unknown function] (defined at: ./index.rsh:64:31:function exp)'],
            msg: 'seeOutcome',
            who: 'Bob'
            });
          
          const cv224 = v265;
          const cv225 = v266;
          const cv232 = v232;
          
          v224 = cv224;
          v225 = cv225;
          v232 = cv232;
          
          txn3 = txn5;
          continue;}
        
        }
      
      }
    const v310 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:73:14:decimal', stdlib.UInt_max, '2'), v203);
    ;
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByALAAEHBVhQIAIoCDAmAgEAACI1ADEYQQNbKWRJIls1ASEJWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0mBBAxAAZBJgQYMQACzSSQMQABSJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDVzAgNf+ABOIbs6mwMgY0AyEEWw9ENANXACAxABI0/zEAEhFEsSKyATQDIQVbsggjshA0/7IHs0ICfkgkNAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BRc1/oAElcsXbDT+FlEHCFCwMgY0AyEEWwxENP8xABJENP80AyEGWzQDIQhbNANXMCA0/jIGNAMhBVtCAcxJJQxAAFBIJTQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf+ABMyZklywMgY0AyEEWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDIQVbsggjshA0/7IHs0IBzUglNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEGWzX+IQhbNf1XMCA1/CEFWzX7STUFFzX6gAT5i694NPoWULAyBjQDIQRbDEQ0/DEAEkQyBjT9CDX5NP80/hZQNP0WUDT8UDT7FlA0+RZQKEsBVwBgZ0gkNQEyBjUCQgFoSSMMQACQSSEHDEAAQSEHEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQpbD0SxIrIBNAMhBluyCCOyEDQDVwAgsgezQgD/SCM0ARJENARJIhJMNAISEUQoZEk1AyEGWzX/gASai5F0sDIGNAMhClsMRDT/iAE8NANXACA0/zQDIQhbMQAiMgY0/0kIQgBgSIGgjQaIARwiNAESRDQESSISTDQCEhFESTUFSSJbNf8hCVs1/oAErNEfwzT/FlA0/hZQsDT/iADrMgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgByNf81/jX9Nfw1+zX6Nfk0/UEAFrEisgEhBzT6C7III7IQNPyyB7NCAC40/jT7CDX4NPk0+hZQNPsWUDT8UDT/FlA0+BZQKEsBVwBgZ0glNQEyBjUCQgAbMRklEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQcxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 96,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v203",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v204",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v203",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v204",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v249",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v265",
                "type": "bool"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v249",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v265",
                "type": "bool"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001616380380620016168339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611299806200037d6000396000f3fe6080604052600436106100845760003560e01c8063832307571161005657806383230757146100ea5780638e314769146100ff578063a209ad4e14610112578063ab53f2c614610125578063bf2c5b241461014857005b80631e93b0f11461008d5780632c10a159146100b15780636da017a0146100c45780637eea518c146100d757005b3661008b57005b005b34801561009957600080fd5b506003545b6040519081526020015b60405180910390f35b61008b6100bf366004610f4d565b61015b565b61008b6100d2366004610f4d565b6102ea565b61008b6100e5366004610f4d565b61049b565b3480156100f657600080fd5b5060015461009e565b61008b61010d366004610f4d565b610619565b61008b610120366004610f4d565b6107b0565b34801561013157600080fd5b5061013a6109cb565b6040516100a8929190610f70565b61008b610156366004610f4d565b610a68565b61016b6001600054146009610c03565b6101858135158061017e57506001548235145b600a610c03565b60008080556002805461019790610fcd565b80601f01602080910402602001604051908101604052809291908181526020018280546101c390610fcd565b80156102105780601f106101e557610100808354040283529160200191610210565b820191906000526020600020905b8154815290600101906020018083116101f357829003601f168201915b5050505050806020019051810190610228919061101e565b905061023b81606001514310600b610c03565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161026c9291906110a7565b60405180910390a1610285816020015134146008610c03565b61028d610e11565b815181516001600160a01b03909116905260208083018051835183015260408085015184519091015282513360609091015281830180516000905251439201919091525180016020820151604001526102e581610c29565b505050565b6102fa600760005414601c610c03565b6103148135158061030d57506001548235145b601d610c03565b60008080556002805461032690610fcd565b80601f016020809104026020016040519081016040528092919081815260200182805461035290610fcd565b801561039f5780601f106103745761010080835404028352916020019161039f565b820191906000526020600020905b81548152906001019060200180831161038257829003601f168201915b50505050508060200190518101906103b79190611170565b90506103ca8160a001514310601e610c03565b7f3db107724932cd939a23b93f47d8ef0f579ae2be97d3305f6cc838fe2fb98dfe33836040516103fb9291906110a7565b60405180910390a161040f3415601a610c03565b8051610427906001600160a01b03163314601b610c03565b61042f610e11565b815181516001600160a01b039182169052602080840151835182015260408085015184518201526060808601518551941693019290925261047491850190850161118c565b6020808301805192151590925281514391015260808301519051604001526102e581610c29565b6104ab600160005414600d610c03565b6104c5813515806104be57506001548235145b600e610c03565b6000808055600280546104d790610fcd565b80601f016020809104026020016040519081016040528092919081815260200182805461050390610fcd565b80156105505780601f1061052557610100808354040283529160200191610550565b820191906000526020600020905b81548152906001019060200180831161053357829003601f168201915b5050505050806020019051810190610568919061101e565b905061057c8160600151431015600f610c03565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516105ad9291906110a7565b60405180910390a16105c13415600c610c03565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156105fe573d6000803e3d6000fd5b506000808055600181905561061590600290610e5f565b5050565b6106296005600054146017610c03565b6106438135158061063c57506001548235145b6018610c03565b60008080556002805461065590610fcd565b80601f016020809104026020016040519081016040528092919081815260200182805461068190610fcd565b80156106ce5780601f106106a3576101008083540402835291602001916106ce565b820191906000526020600020905b8154815290600101906020018083116106b157829003601f168201915b50505050508060200190518101906106e69190611170565b90506106fa8160a001514310156019610c03565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161072b9291906110a7565b60405180910390a161073f34156015610c03565b8051610773906001600160a01b031633146107695760608201516001600160a01b0316331461076c565b60015b6016610c03565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156105fe573d6000803e3d6000fd5b6107c06005600054146012610c03565b6107da813515806107d357506001548235145b6013610c03565b6000808055600280546107ec90610fcd565b80601f016020809104026020016040519081016040528092919081815260200182805461081890610fcd565b80156108655780601f1061083a57610100808354040283529160200191610865565b820191906000526020600020905b81548152906001019060200180831161084857829003601f168201915b505050505080602001905181019061087d9190611170565b90506108956040518060200160405280600081525090565b6108a68260a0015143106014610c03565b6040805133815284356020808301919091528501358183015290517f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc09181900360600190a16108f734156010610c03565b6060820151610912906001600160a01b031633146011610c03565b610920438360400151610d5f565b81526040805160c081018252600080825260208083018281528385018381526060808601858152608080880187815260a089018881528c516001600160a01b039081168b528d8901519097528c8b0151909552928b015190941690529188015190915285519052600790915543600155915190916109a0918391016111a7565b604051602081830303815290604052600290805190602001906109c4929190610e9c565b5050505050565b6000606060005460028080546109e090610fcd565b80601f0160208091040260200160405190810160405280929190818152602001828054610a0c90610fcd565b8015610a595780601f10610a2e57610100808354040283529160200191610a59565b820191906000526020600020905b815481529060010190602001808311610a3c57829003601f168201915b50505050509050915091509091565b610a786007600054146021610c03565b610a9281351580610a8b57506001548235145b6022610c03565b600080805560028054610aa490610fcd565b80601f0160208091040260200160405190810160405280929190818152602001828054610ad090610fcd565b8015610b1d5780601f10610af257610100808354040283529160200191610b1d565b820191906000526020600020905b815481529060010190602001808311610b0057829003601f168201915b5050505050806020019051810190610b359190611170565b9050610b498160a001514310156023610c03565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610b7a9291906110a7565b60405180910390a1610b8e3415601f610c03565b8051610bc2906001600160a01b03163314610bb85760608201516001600160a01b03163314610bbb565b60015b6020610c03565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156105fe573d6000803e3d6000fd5b816106155760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60408051602081019091526000815260208201515115610c93578160000151606001516001600160a01b03166108fc610c6b6002856000015160200151610db2565b6040518115909202916000818181858888f193505050501580156105fe573d6000803e3d6000fd5b610cad826020015160200151836000015160400151610d5f565b81526040805160c0810182526000808252602080830182815283850183815260608086018581526080870186815260a088018781528b51516001600160a01b039081168a528c518801519096528b518a01519094528a5190920151909316909252878301518601519091528551905260059091554360015591519091610d35918391016111a7565b60405160208183030381529060405260029080519060200190610d59929190610e9c565b50505050565b600082610d6c838261120a565b9150811015610dac5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610c20565b92915050565b6000811580610dd657508282610dc88183611222565b9250610dd49083611241565b145b610dac5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401610c20565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260408051606081018252600080825260208281018290529282015291015290565b508054610e6b90610fcd565b6000825580601f10610e7b575050565b601f016020900490600052602060002090810190610e999190610f20565b50565b828054610ea890610fcd565b90600052602060002090601f016020900481019282610eca5760008555610f10565b82601f10610ee357805160ff1916838001178555610f10565b82800160010185558215610f10579182015b82811115610f10578251825591602001919060010190610ef5565b50610f1c929150610f20565b5090565b5b80821115610f1c5760008155600101610f21565b600060408284031215610f4757600080fd5b50919050565b600060408284031215610f5f57600080fd5b610f698383610f35565b9392505050565b82815260006020604081840152835180604085015260005b81811015610fa457858101830151858201606001528201610f88565b81811115610fb6576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610fe157607f821691505b60208210811415610f4757634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461101957600080fd5b919050565b60006080828403121561103057600080fd5b6040516080810181811067ffffffffffffffff8211171561106157634e487b7160e01b600052604160045260246000fd5b60405261106d83611002565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b8035801515811461101957600080fd5b6001600160a01b0383168152813560208083019190915260608201906110ce908401611097565b151560408301529392505050565b600060c082840312156110ee57600080fd5b60405160c0810181811067ffffffffffffffff8211171561111f57634e487b7160e01b600052604160045260246000fd5b60405290508061112e83611002565b8152602083015160208201526040830151604082015261115060608401611002565b60608201526080830151608082015260a083015160a08201525092915050565b600060c0828403121561118257600080fd5b610f6983836110dc565b60006020828403121561119e57600080fd5b610f6982611097565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0808301519082015260c08101610dac565b634e487b7160e01b600052601160045260246000fd5b6000821982111561121d5761121d6111f4565b500190565b600081600019048311821515161561123c5761123c6111f4565b500290565b60008261125e57634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212205f5dc2b88d59d45a2fc0f4badb026b53b6b1cedaba458efd4fbe622631a5141564736f6c634300080c0033`,
  BytecodeLen: 5654,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:37:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:43:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:74:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:48:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:55:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:56:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:62:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
