(this["webpackJsonpambire-wallet"]=this["webpackJsonpambire-wallet"]||[]).push([[22],{1576:function(e,t,n){},1577:function(e,t,n){},1578:function(e,t,n){},1607:function(e,t,n){"use strict";n.r(t);var a=n(17),r=n(2),c=n.n(r),s=n(11),o=n(7),u=n(8),i=(n(1576),n(152)),l=n(3),d=n(52),b=n(21),j=n(79),f=n(85),m="https://backend.movr.network/v1",h=function(){var e=Object(l.useCallback)(Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.c)("".concat(m,"/supported/chains"));case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return",null);case 5:return e.abrupt("return",t.result);case 6:case"end":return e.stop()}}),e)}))),[]),t=Object(l.useCallback)(function(){var e=Object(s.a)(c.a.mark((function e(t,n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.c)("".concat(m,"/supported/from-token-list?fromChainId=").concat(t,"&toChainId=").concat(n));case 2:if(a=e.sent){e.next=5;break}return e.abrupt("return",null);case 5:return e.abrupt("return",a.result.map((function(e){return e.token})));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[]),n=Object(l.useCallback)(function(){var e=Object(s.a)(c.a.mark((function e(t,n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.c)("".concat(m,"/supported/to-token-list?fromChainId=").concat(t,"&toChainId=").concat(n));case 2:if(a=e.sent){e.next=5;break}return e.abrupt("return",null);case 5:return e.abrupt("return",a.result.map((function(e){return e.token})));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[]),a=Object(l.useCallback)(function(){var e=Object(s.a)(c.a.mark((function e(t,n,a,r,s,o){var u,i,l=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=l.length>6&&void 0!==l[6]?l[6]:"cheapestRoute",e.next=3,Object(f.c)("".concat(m,"/quote?fromAsset=").concat(t,"&fromChainId=").concat(n,"&toAsset=").concat(a,"&toChainId=").concat(r,"&amount=").concat(s,"&excludeBridges=").concat(o,"&sort=").concat(u));case 3:if(i=e.sent){e.next=6;break}return e.abrupt("return",null);case 6:return e.abrupt("return",i.result);case 7:case"end":return e.stop()}}),e)})));return function(t,n,a,r,c,s){return e.apply(this,arguments)}}(),[]),r=Object(l.useCallback)(function(){var e=Object(s.a)(c.a.mark((function e(t,n,a,r){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.c)("".concat(m,"/approval/check-allowance?chainID=").concat(t,"&owner=").concat(n,"&allowanceTarget=").concat(a,"&tokenAddress=").concat(r));case 2:if(s=e.sent){e.next=5;break}return e.abrupt("return",null);case 5:return e.abrupt("return",s.result);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),[]),o=Object(l.useCallback)(function(){var e=Object(s.a)(c.a.mark((function e(t,n,a,r,s){var o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.c)("".concat(m,"/approval/build-tx?chainID=").concat(t,"&owner=").concat(n,"&allowanceTarget=").concat(a,"&tokenAddress=").concat(r,"&amount=").concat(s));case 2:if(o=e.sent){e.next=5;break}return e.abrupt("return",null);case 5:return e.abrupt("return",o.result);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r,c){return e.apply(this,arguments)}}(),[]),u=Object(l.useCallback)(function(){var e=Object(s.a)(c.a.mark((function e(t,n,a,r,s,o,u,i){var l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.c)("".concat(m,"/send/build-tx?recipient=").concat(t,"&fromAsset=").concat(n,"&fromChainId=").concat(a,"&toAsset=").concat(r,"&toChainId=").concat(s,"&amount=").concat(o,"&output=").concat(u,"&fromAddress=").concat(t,"&routePath=").concat(i));case 2:if(l=e.sent){e.next=5;break}return e.abrupt("return",null);case 5:return e.abrupt("return",l.result);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r,c,s,o,u){return e.apply(this,arguments)}}(),[]),i=Object(l.useCallback)(function(){var e=Object(s.a)(c.a.mark((function e(t,n,a){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.c)("".concat("https://watcherapi.fund.movr.network/api/v1","/transaction-status?transactionHash=").concat(t,"&fromChainId=").concat(n,"&toChainId=").concat(a));case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",null);case 5:return e.abrupt("return",r.result);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),[]);return{fetchChains:e,fetchToTokens:n,fetchFromTokens:t,fetchQuotes:a,checkApprovalAllowance:r,approvalBuildTx:o,sendBuildTx:u,checkTxStatus:i}},p=n(60),v=n(44),O=n(37),x=(n(1577),n(36)),k=n(4),w=function(e,t){return e/Math.pow(10,t.decimals)},g=function(e,t){var n=e.address===t.toAsset.address?t.toAsset:t.fromAsset;return w(e.amount,n)},N=function(e){return p.a.find((function(t){return t.chainId===e}))},I=function(e){var t=e.addRequest,n=e.selectedAccount,a=e.fromTokensItems,r=e.quotes,i=e.onQuotesConfirmed,d=e.onCancel,b=Object(v.a)().addToast,f=h(),m=f.approvalBuildTx,p=f.sendBuildTx,O=r.toAsset,I=a.find((function(e){return e.value===r.fromAsset.address})),y=N(r.fromAsset.chainId),C=N(O.chainId),T=Object(l.useState)(null),A=Object(u.a)(T,2),_=A[0],S=A[1],E=Object(l.useState)(!1),R=Object(u.a)(E,2),D=R[0],M=R[1],F=r.routes.map((function(e){var t=e.fees,n=e.middlewareRoute,a=e.bridgeRoute;return Object(o.a)(Object(o.a)({},e),{},{middlewareFee:n?g(t.middlewareFee,n):0,bridgeFee:a?g(t.bridgeFee,a):0})})),q=F.map((function(e){var t=e.routePath,n=e.middlewareFee,a=e.bridgeFee,r=e.middlewareRoute,c=e.bridgeRoute;return{label:Object(k.jsxs)("div",{className:"route",children:[Object(k.jsxs)("div",{className:"info",children:[r?Object(k.jsxs)("div",{className:"middleware",children:[Object(k.jsx)("div",{className:"icon",style:{backgroundImage:"url(".concat(r.middlewareInfo.icon,")")}}),Object(k.jsx)("div",{className:"name",children:r.middlewareInfo.displayName})]}):null,Object(k.jsxs)("div",{className:"bridge",children:[Object(k.jsx)("div",{className:"icon",style:{backgroundImage:"url(".concat(c.bridgeInfo.icon,")")}}),Object(k.jsx)("div",{className:"name",children:c.bridgeInfo.displayName})]})]}),Object(k.jsxs)("div",{className:"summary",children:[Object(k.jsxs)("div",{className:"amounts",children:[r?Object(k.jsxs)("div",{className:"amount",children:[w(r.inputAmount,r.fromAsset)," ",r.fromAsset.symbol]}):null,Object(k.jsxs)("div",{className:"amount",children:[w(c.outputAmount,c.toAsset)," ",c.toAsset.symbol]})]}),Object(k.jsxs)("div",{className:"fees",children:[r?Object(k.jsx)("div",{className:"fee",children:n?Object(k.jsxs)(k.Fragment,{children:["Fee: ",n," ",r.fromAsset.symbol]}):null}):null,Object(k.jsx)("div",{className:"fee",children:a?Object(k.jsxs)(k.Fragment,{children:["Fee: ",a," ",c.toAsset.symbol]}):null})]})]})]}),value:t}})),B=function(e,a,r,c){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"0x00";t({id:e,chainId:a,account:n,type:"eth_sendTransaction",txn:{to:r,data:c,value:s}})},L=function(){var e=Object(s.a)(c.a.mark((function e(){var t,a,r,s,o,u,l,j,f,h,v,O,x,k,w,g,N;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(M(!0),e.prev=1,t=F.find((function(e){return e.routePath===_})),a=t.allowanceTarget,r=t.isApprovalRequired,s=t.middlewareRoute,o=t.bridgeRoute,u=t.routePath,j=null,s?(l=s.fromAsset,j=s.inputAmount):(l=o.fromAsset,j=o.inputAmount),f=o.toAsset,h=o.outputAmount,v=o.bridgeInfo,!r){e.next=13;break}return e.next=9,m(l.chainId,n,a,l.address,j);case 9:O=e.sent,x=O.to,k=O.data,B("transfer_approval_crosschain_".concat(Date.now()),l.chainId,x,k);case 13:return e.next=15,p(n,l.address,l.chainId,f.address,f.chainId,j,h,u);case 15:w=e.sent,g=w.tx,B("transfer_send_crosschain_".concat(Date.now()),l.chainId,g.to,g.data,g.value.hex),N=new Date(((null===v||void 0===v?void 0:v.serviceTime)||0)+((null===s||void 0===s?void 0:s.serviceTime)||0)).getMinutes(),i({txData:g.data,serviceTimeMinutes:N,to:{chainId:f.chainId,asset:f,amount:h}}),d(),e.next=27;break;case 23:e.prev=23,e.t0=e.catch(1),console.error(e.t0),b(e.t0.message||e.t0,{error:!0});case 27:M(!1);case 28:case"end":return e.stop()}}),e,null,[[1,23]])})));return function(){return e.apply(this,arguments)}}();return Object(k.jsxs)("div",{id:"quotes",children:[Object(k.jsxs)("div",{id:"summary",children:[Object(k.jsxs)("div",{className:"path",children:[Object(k.jsxs)("div",{className:"network",children:[Object(k.jsx)("div",{className:"icon",style:{backgroundImage:"url(".concat(y.icon,")")}}),Object(k.jsx)("div",{className:"name",children:y.name})]}),Object(k.jsxs)("div",{className:"token",children:[Object(k.jsx)("div",{className:"icon",style:{backgroundImage:"url(".concat(I.icon,")")}}),Object(k.jsx)("div",{className:"name",children:I.label})]})]}),Object(k.jsx)(x.F,{}),Object(k.jsxs)("div",{className:"path",children:[Object(k.jsxs)("div",{className:"network",children:[Object(k.jsx)("div",{className:"icon",style:{backgroundImage:"url(".concat(C.icon,")")}}),Object(k.jsx)("div",{className:"name",children:C.name})]}),Object(k.jsxs)("div",{className:"token",children:[Object(k.jsx)("div",{className:"icon",style:{backgroundImage:"url(".concat(O.icon,")")}}),Object(k.jsxs)("div",{className:"name",children:[O.name," (",O.symbol,")"]})]})]})]}),D?Object(k.jsx)(j.m,{}):Object(k.jsxs)("div",{id:"routes",children:[Object(k.jsx)("div",{className:"title",children:"Routes"}),q.length?Object(k.jsx)(j.r,{radios:q,onChange:function(e){return S(e)}}):Object(k.jsxs)("div",{id:"no-routes-placeholder",children:["There is no routes available for this configuration at the moment.",Object(k.jsx)("br",{}),"Try increasing the amount or switching token."]})]}),Object(k.jsx)("div",{className:"separator"}),Object(k.jsxs)("div",{id:"buttons",children:[Object(k.jsx)(j.e,{small:!0,clear:!0,icon:F.length?Object(k.jsx)(x.I,{}):Object(k.jsx)(x.E,{}),disabled:D,onClick:d,children:F.length?"Cancel":"Go Back"}),F.length?Object(k.jsx)(j.e,{small:!0,icon:Object(k.jsx)(x.H,{}),disabled:!_||D,onClick:L,children:"Confirm"}):null]})]})},y=(n(1578),n(625)),C=n(12),T=n(154),A=n(595),_=function(e,t){var n=Object(T.a)(t);return e[n]||T.e[n]||["Unknown",0]},S=function(e,t){var n=p.a.find((function(e){return e.chainId===t}));return n?Object(A.a)(n.id,Object(T.a)(e)):null},E=function(e,t,n,a,r,c){var s=_(e,a),o=_(e,r),u=S(a,t),i=S(r,t);return{from:{chainId:t,asset:{address:a,symbol:s[0],decimals:s[1],icon:u},amount:c.toString()},to:{chainId:n.toNumber(),asset:{address:r,symbol:o[0],decimals:o[1],icon:i},amount:null}}},R=function(e){var t,n=e.tokens,a=e.abis,r=new b.Interface(a.MovrAnyswap),c=new b.Interface(a.MovrRouter);return t={},Object(C.a)(t,r.getSighash("outboundTransferTo"),(function(e,t,a){var c=r.parseTransaction({data:t,value:e}).args[0],s=c.middlewareInputToken,o=c.amount,u=c.tokenToBridge,i=c.toChainId;return E(n,a.chainId,i,s,u,o)})),Object(C.a)(t,c.getSighash("outboundTransferTo"),(function(e,t,a){var r=c.parseTransaction({data:t,value:e}).args[0],s=r.middlewareRequest,o=r.amount,u=r.bridgeRequest,i=r.toChainId,l=s.inputToken,d=u.inputToken;return E(n,a.chainId,i,l,d,o)})),t},D=n(153),M=function(e){var t=e.relayerURL,n=e.network,a=e.account,r=e.quotesConfirmed,i=Object(D.a)().constants.humanizerInfo,d=Object(v.a)().addToast,b=h().checkTxStatus,f=Object(l.useState)([]),m=Object(u.a)(f,2),w=m[0],g=m[1],N=Object(l.useState)(!1),I=Object(u.a)(N,2),C=I[0],T=I[1],A=Object(l.useState)((function(){return Date.now()})),_=Object(u.a)(A,2),S=_[0],E=_[1],M=Object(l.useRef)(n.id),F=function(e){return p.a.find((function(t){return t.chainId===e}))},q=function(e,t){return e/Math.pow(10,t.decimals)};Object(l.useEffect)((function(){Date.now()-S>5e3&&E(Date.now());var e=setTimeout((function(){return E(Date.now())}),1e4);return function(){return clearTimeout(e)}}),[S]);var B=t?"".concat(t,"/identity/").concat(a,"/").concat(n.id,"/transactions?cacheBreak=").concat(S):null,L=Object(O.j)({url:B}),P=L.data,U=L.errMsg,H=L.isLoading,Q=Object(l.useMemo)((function(){return n.id!==M.current?[]:(P&&P.txns?P.txns:[]).map((function(e){var t=e.txId,a=e.txns.map((function(e){var t=Object(u.a)(e,3),a=t[1],r=t[2],c=r.slice(0,10),s=R(i)[c];return s?Object(o.a)({txData:r},s(a,r,n)):null})).filter((function(e){return e}));return a.length?Object(o.a)({hash:t},a[0]):null})).filter((function(e){return e}))}),[P,n,i]);return Object(l.useEffect)((function(){function e(){return e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(Q.map(function(){var e=Object(s.a)(c.a.mark((function e(t){var n,a,s,u,i,l,j,f,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.hash,a=t.txData,s=t.from,u=t.to,i=r.find((function(e){return e.txData===a})),l=i&&i.serviceTimeMinutes||null,j=F(s.chainId),f=F(u.chainId),e.prev=5,e.next=8,b(n,s.chainId,u.chainId);case 8:return m=e.sent,e.abrupt("return",Object(o.a)(Object(o.a)({},m),{},{from:s,to:i?i.to||null:u,serviceTimeMinutes:l,fromNetwork:j,toNetwork:f,isPending:!("COMPLETED"===m.sourceTxStatus&&"COMPLETED"===m.destinationTxStatus)}));case 12:return e.prev=12,e.t0=e.catch(5),console.error(e.t0),d("Cross-Chain History: Unable to fetch transfer status.",{error:!0}),e.abrupt("return",{sourceTx:n,from:s,to:u,serviceTimeMinutes:l,fromNetwork:j,toNetwork:f,statusError:!0});case 17:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t){return e.apply(this,arguments)}}()));case 2:if(t=e.sent,n.id===M.current){e.next=5;break}return e.abrupt("return");case 5:g(t);case 6:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[Q,r,n,b,d]),Object(l.useEffect)((function(){U&&(console.error(U),d("Cross-Chain History: ".concat(U),{error:!0}))}),[U,d]),Object(l.useEffect)((function(){T(H&&!w.length)}),[H,w]),Object(l.useEffect)((function(){M.current=n.id,g([]),E(Date.now())}),[n]),Object(k.jsxs)("div",{id:"history",className:"panel",children:[Object(k.jsx)("div",{className:"title",children:"History"}),Object(k.jsx)("div",{children:C?Object(k.jsx)(j.m,{}):w.length?w.map((function(e){var t,n,a,r,c=e.sourceTx,s=e.fromNetwork,o=e.toNetwork,u=e.from,i=e.to,l=e.serviceTimeMinutes,d=e.isPending,b=e.statusError;return Object(k.jsxs)("div",{className:"tx-status",children:[Object(k.jsxs)("div",{className:"summary",children:[Object(k.jsxs)("div",{className:"path",children:[Object(k.jsxs)("div",{className:"network",children:[Object(k.jsx)("div",{className:"icon",style:{backgroundImage:"url(".concat(s.icon,")")}}),Object(k.jsx)("div",{className:"name",children:s.name})]}),Object(k.jsxs)("div",{className:"amount",children:[u.amount?q(u.amount,u.asset):"",Object(k.jsxs)("div",{className:"asset",children:[Object(k.jsx)("div",{className:"icon",style:{backgroundImage:"url(".concat(null===u||void 0===u||null===(t=u.asset)||void 0===t?void 0:t.icon,")")}}),Object(k.jsx)("div",{className:"name",children:null===u||void 0===u||null===(n=u.asset)||void 0===n?void 0:n.symbol})]})]})]}),Object(k.jsx)(x.F,{}),Object(k.jsxs)("div",{className:"path",children:[Object(k.jsxs)("div",{className:"network",children:[Object(k.jsx)("div",{className:"icon",style:{backgroundImage:"url(".concat(o.icon,")")}}),Object(k.jsx)("div",{className:"name",children:o.name})]}),Object(k.jsxs)("div",{className:"amount",children:[i.amount?q(i.amount,i.asset):"",Object(k.jsxs)("div",{className:"asset",children:[Object(k.jsx)("div",{className:"icon",style:{backgroundImage:"url(".concat(null===i||void 0===i||null===(a=i.asset)||void 0===a?void 0:a.icon,")")}}),Object(k.jsx)("div",{className:"name",children:null===i||void 0===i||null===(r=i.asset)||void 0===r?void 0:r.symbol})]})]})]})]}),Object(k.jsxs)("div",{className:"details",children:[Object(k.jsxs)("a",{href:"".concat(s.explorerUrl,"/tx/").concat(c),target:"_blank",rel:"noreferrer",children:["View on Block Explorer ",Object(k.jsx)(y.c,{})]}),b?Object(k.jsxs)("div",{className:"status error",children:[Object(k.jsx)(x.I,{}),"Could not fetch status"]}):d?Object(k.jsxs)("div",{className:"status pending",children:[Object(k.jsx)(j.m,{}),"Pending",Object(k.jsxs)("span",{children:["(Usually takes ",l||20," minutes)"]})]}):Object(k.jsxs)("div",{className:"status confirmed",children:[Object(k.jsx)(x.H,{}),"Confirmed"]})]})]},c)})):Object(k.jsx)("div",{children:"No pending transfer/swap on this network."})})]})};t.default=function(e){var t=e.addRequest,n=e.selectedAccount,r=e.portfolio,f=e.network,m=e.relayerURL,x=Object(v.a)().addToast,w=h(),g=w.fetchChains,N=w.fetchFromTokens,y=w.fetchQuotes,C=w.fetchToTokens,T=Object(l.useState)(!1),A=Object(u.a)(T,2),_=A[0],S=A[1],E=Object(l.useState)(!0),R=Object(u.a)(E,2),D=R[0],F=R[1],q=Object(l.useState)(!1),B=Object(u.a)(q,2),L=B[0],P=B[1],U=Object(l.useState)(!1),H=Object(u.a)(U,2),Q=H[0],V=H[1],J=Object(l.useState)(!1),z=Object(u.a)(J,2),G=z[0],X=z[1],Y=Object(l.useState)([]),K=Object(u.a)(Y,2),W=K[0],Z=K[1],$=Object(l.useState)(null),ee=Object(u.a)($,2),te=ee[0],ne=ee[1],ae=Object(l.useState)(0),re=Object(u.a)(ae,2),ce=re[0],se=re[1],oe=Object(l.useState)([]),ue=Object(u.a)(oe,2),ie=ue[0],le=ue[1],de=Object(l.useState)(null),be=Object(u.a)(de,2),je=be[0],fe=be[1],me=Object(l.useState)([]),he=Object(u.a)(me,2),pe=he[0],ve=he[1],Oe=Object(l.useState)(null),xe=Object(u.a)(Oe,2),ke=xe[0],we=xe[1],ge=Object(l.useState)(null),Ne=Object(u.a)(ge,2),Ie=Ne[0],ye=Ne[1],Ce=Object(l.useRef)([]),Te=Object(O.e)({key:"quotesConfirmed",defaultValue:[]}),Ae=Object(u.a)(Te,2),_e=Ae[0],Se=Ae[1],Ee=Object(l.useMemo)((function(){return f.chainId}),[f.chainId]),Re=!(te&&ke&&Ee&&je&&ce>0),De=!r.balance.total.full,Me=Object(l.useCallback)((function(e){return r.tokens.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{address:0===Number(e.address)?"0x".concat("e".repeat(40)):e.address})})).find((function(t){return t.address===e}))}),[r.tokens]),Fe=Object(l.useCallback)(Object(s.a)(c.a.mark((function e(){var t,n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g();case 3:if(t=e.sent,n=t.find((function(e){return e.chainId===Ee})),S(!n),n){e.next=8;break}return e.abrupt("return");case 8:return a=t.filter((function(e){var t=e.chainId;return t!==Ee&&p.a.map((function(e){return e.chainId})).includes(t)})).map((function(e){var t=e.icon,n=e.chainId;return{icon:t,label:e.name,value:n}})),le(a),fe(a[0].value),e.abrupt("return",!0);case 14:return e.prev=14,e.t0=e.catch(0),console.error(e.t0),x("Error while loading chains: ".concat(e.t0.message||e.t0),{error:!0}),e.abrupt("return",!1);case 19:case"end":return e.stop()}}),e,null,[[0,14]])}))),[Ee,g,x]),qe=Object(l.useCallback)(Object(s.a)(c.a.mark((function e(){var t,n,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ee&&je){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,N(Ee,je);case 5:return t=e.sent,n=t.filter((function(e){return e.name})),r=Object(a.a)(new Set(t.filter((function(e){var t=e.address;return Ce.current.map((function(e){return e.address})).map((function(e){return 0===Number(e)?"0x".concat("e".repeat(40)):e})).includes(t)})).map((function(e){return e.address})))),s=r.map((function(e){return n.find((function(t){return t.address===e}))})).filter((function(e){return e})).map((function(e){var t=e.icon,n=e.name,a=e.symbol,r=e.address;return{icon:t,label:"".concat(n," (").concat(a,")"),value:r,symbol:a}})),Z(s),e.abrupt("return",!0);case 13:return e.prev=13,e.t0=e.catch(2),console.error(e.t0),x("Error while loading from tokens: ".concat(e.t0.message||e.t0),{error:!0}),e.abrupt("return",!1);case 18:case"end":return e.stop()}}),e,null,[[2,13]])}))),[Ee,je,N,x]),Be=Object(l.useCallback)(Object(s.a)(c.a.mark((function e(){var t,n,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ee&&je){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,C(Ee,je);case 5:return t=e.sent,n=t.filter((function(e){return e.name})),r=Object(a.a)(new Set(t.map((function(e){return e.address})))),s=r.map((function(e){return n.find((function(t){return t.address===e}))})).filter((function(e){return e})).map((function(e){var t=e.icon,n=e.name,a=e.symbol,r=e.address;return{icon:t,label:"".concat(n," (").concat(a,")"),value:r,symbol:a}})).sort((function(e,t){return e.label.localeCompare(t.label)})),ve(s),e.abrupt("return",!0);case 13:return e.prev=13,e.t0=e.catch(2),console.error(e.t0),x("Error while loading to tokens: ".concat(e.t0.message||e.t0),{error:!0}),e.abrupt("return",!1);case 18:case"end":return e.stop()}}),e,null,[[2,13]])}))),[Ee,je,C,x]),Le=Object(l.useMemo)((function(){try{var e=Me(te);if(!e)return 0;var t=e.balanceRaw,n=e.decimals;return d.ethers.utils.formatUnits(t,n)}catch(a){console.error(a),x("Error while formating amount: ".concat(a.message||a),{error:!0})}}),[Me,te,x]),Pe=function(){var e=Object(s.a)(c.a.mark((function e(){var t,n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(X(!0),e.prev=1,t=Me(te)){e.next=5;break}return e.abrupt("return");case 5:return n=t.decimals,a=Object(b.parseUnits)(ce,n).toString(),e.next=9,y(te,Ee,ke,je,a,["hyphen","celer"]);case 9:r=e.sent,ye(r),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0),x("Error while loading quotes: ".concat(e.t0.message||e.t0),{error:!0});case 17:X(!1);case 18:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){return se(0)}),[te]),Object(l.useEffect)((function(){var e=W.find((function(e){return e.value===te}));if(e){var t=pe.find((function(t){return t.symbol===e.symbol}));t&&we(t.value)}}),[W,pe,te]);var Ue=function(){var e=Object(s.a)(c.a.mark((function e(t,n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(!0),e.next=3,n();case 3:a=e.sent,t(!a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){je&&Ue(V,Be)}),[je,Be]),Object(l.useEffect)((function(){je&&Ue(P,qe)}),[je,qe]),Object(l.useEffect)((function(){Ee&&!r.isCurrNetworkBalanceLoading&&(ye(null),Ue(F,Fe))}),[Ee,r.isCurrNetworkBalanceLoading,Fe]),Object(l.useEffect)((function(){return Ce.current=r.tokens}),[r.tokens]);var He=Object(k.jsxs)("div",{className:"amount-label",children:["Available Amount: ",Object(k.jsx)("span",{children:Le})]});return Object(k.jsxs)("div",{id:"cross-chain",children:[Object(k.jsxs)("div",{className:"panel",children:[Object(k.jsxs)("div",{className:"title",children:["Cross-chain transfers/swaps",Object(k.jsx)("div",{id:"powered",children:"Powered by Socket"})]}),_?Object(k.jsx)("div",{className:"placeholder",children:"Not supported on this Network"}):D||r.isCurrNetworkBalanceLoading?Object(k.jsx)(j.m,{}):De?Object(k.jsx)(j.o,{}):L||Q||W.length?G?Object(k.jsx)(j.m,{}):Ie?Object(k.jsx)(I,{addRequest:t,selectedAccount:n,fromTokensItems:W,quotes:Ie,onQuotesConfirmed:function(e){var t=[].concat(Object(a.a)(_e),[e]);Se(t)},onCancel:function(){return ye(null)}}):Object(k.jsxs)("div",{className:"form",children:[Object(k.jsx)("label",{children:"From"}),Object(k.jsxs)("div",{className:"inputs",children:[L?Object(k.jsx)(j.m,{}):null,Object(k.jsx)(j.t,{searchable:!0,defaultValue:te,items:W,onChange:function(e){var t=e.value;return ne(t)}}),Object(k.jsx)(j.p,{min:"0",label:He,value:ce,onInput:function(e){return se(e)},button:"MAX",onButtonClick:function(){return se(Le)}})]}),Object(k.jsx)("div",{className:"separator",children:Object(k.jsx)(i.a,{})}),Object(k.jsx)("label",{children:"To"}),Object(k.jsxs)("div",{className:"inputs",children:[Q?Object(k.jsx)(j.m,{}):null,Object(k.jsx)(j.t,{searchable:!0,defaultValue:je,items:ie,onChange:function(e){var t=e.value;return fe(t)}}),Object(k.jsx)(j.t,{searchable:!0,defaultValue:ke,items:pe,onChange:function(e){var t=e.value;return we(t)}})]}),Object(k.jsx)(j.e,{disabled:Re,onClick:Pe,children:"Get Quotes"})]}):Object(k.jsx)("div",{className:"placeholder",children:"You don't have any available tokens to swap"})]}),Object(k.jsx)(M,{network:f,account:n,quotesConfirmed:_e,relayerURL:m})]})}},595:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a={"0xb468a1e5596cfbcdf561f21a10490d99b4bb7b68":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jeff_Sessions_with_Elmo_and_Rosita_%28cropped%29.jpg/220px-Jeff_Sessions_with_Elmo_and_Rosita_%28cropped%29.jpg","0x88800092ff476844f74dc2fc427974bbee2794ae":"https://raw.githubusercontent.com/AmbireTech/ambire-brand/main/logos/ambire_logo_white_bg_250x250.png","0x47cd7e91c3cbaaf266369fe8518345fc4fc12935":"https://raw.githubusercontent.com/AmbireTech/ambire-brand/main/logos/xwallet_250x250.png","0xb6456b57f03352be48bf101b46c1752a0813491a":"https://raw.githubusercontent.com/AmbireTech/adex-brand/master/logos/vaporwave-adex-2.png","0xd9a4cb9dc9296e111c66dfacab8be034ee2e1c2c":"https://raw.githubusercontent.com/AmbireTech/adex-brand/master/logos/ADX-loyalty%40256x256.png","0xec3b10ce9cabab5dbf49f946a623e294963fbb4e":"https://raw.githubusercontent.com/AmbireTech/ambire-brand/main/logos/xwallet_250x250.png","0xe9415e904143e42007865e6864f7f632bd054a08":"https://raw.githubusercontent.com/AmbireTech/ambire-brand/main/logos/Ambire_logo_250x250.png","0xade00c28244d5ce17d72e40330b1c318cd12b7c3":"https://raw.githubusercontent.com/AmbireTech/ambire-brand/main/official-logos/Ambire-AdEx/Ambire_AdEx_Symbol_color_white_bg.png"},r="https://storage.googleapis.com/zapper-fi-assets/tokens";function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t.toLowerCase(),c=e.toLowerCase();return a[n]||"".concat(r,"/").concat(c,"/").concat(n,".png")}}}]);
//# sourceMappingURL=22.93025728.chunk.js.map