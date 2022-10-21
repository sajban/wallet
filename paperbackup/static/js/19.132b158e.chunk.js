(this["webpackJsonpambire-wallet"]=this["webpackJsonpambire-wallet"]||[]).push([[19],{1624:function(e,t,a){},1625:function(e,t,a){},1626:function(e,t,a){},1644:function(e,t,a){"use strict";a.r(t);var n=a(7),s=(a(1624),a(1625),a(730)),c=a(956),r=a(4),i=function(e){var t=e.gasData,a=s.a.reduce((function(e,a){return e[a]=t.gasPrice.maxPriorityFeePerGas?t.gasPrice.maxPriorityFeePerGas[a]+t.gasPrice[a]:t.gasPrice[a],e}),{});return Object(r.jsxs)("div",{id:"gas-details-modal",children:[Object(r.jsxs)("div",{className:"gas-details-date",children:["Last updated: ",new Date(t.gasPrice.updated).toDateString()+" "+new Date(t.gasPrice.updated).toTimeString().substr(0,8)]}),Object(r.jsx)("div",{className:"gas-speed-row",children:s.a.map((function(e,t){return Object(r.jsxs)("div",{className:"gas-speed-block",children:[Object(r.jsx)("div",{className:"gas-speed-name",children:e}),Object(r.jsxs)("div",{className:"gas-speed-price",children:[Math.round(a[e]/Math.pow(10,9))," Gwei"]})]},t)}))}),Object(r.jsx)("h4",{children:"Estimated Cost of Transaction Actions"}),Object(r.jsx)("div",{className:"table-wrapper",children:Object(r.jsxs)("table",{className:"gas-action-costs",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Action"}),s.a.map((function(e,t){return Object(r.jsx)("th",{children:e},t)}))]})}),Object(r.jsx)("tbody",{children:c.a.map((function(e,n){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.name}),s.a.map((function(n,s){return Object(r.jsxs)("td",{children:["$",(a[n]*(e.gas+c.b)/Math.pow(10,18)*t.gasFeeAssets.native).toFixed(2)]},s)}))]},n)}))})]})})]})},o=a(17),l=a(12),d=a(8),u=a(813),j=(a(1626),a(77)),b=a(3),h=a(229),p=a(69),O=a(37),f=a(34),m=a(596),g=a(604),x=a(666),v=a(616),k=a(21),w=a(44),T=function(e){var t,a=e.network,s=e.relayerURL,c=e.portfolio,i=e.account,T=e.userSorting,y=e.setUserSorting,N=e.gasTankState,S=e.setGasTankState,D=Object(u.a)({relayerURL:s,selectedAcc:i,network:a,portfolio:c,useRelayerData:f.j}),U=D.isLoading,C=D.balancesRes,G=D.gasTankBalances,F=D.totalSavedResult,L=D.gasTankFilledTxns,A=D.feeAssetsRes,I=D.availableFeeAssets,E=Object(f.f)().showModal,M=Object(w.a)().addToast,P=G?Object(g.a)(G,!0,2):"0.00",R=F&&F.length&&Object(g.a)(F.map((function(e){return e.saved})).reduce((function(e,t){return e+t})),!0,2),B=F&&F.length&&Object(g.a)(F.map((function(e){return e.cashback})).reduce((function(e,t){return e+t})),!0,2),W=c.isBalanceLoading,$=(null===(t=T.tokens)||void 0===t?void 0:t.sortType)||"decreasing",_=Object(f.c)(),z=Object(b.useState)([]),Y=Object(n.a)(z,2),J=Y[0],q=Y[1],H=null===I||void 0===I?void 0:I.filter((function(e){return!e.disableGasTankDeposit})).sort((function(e,t){return t.balanceUSD-e.balanceUSD})).sort((function(e,t){var n,s,c;if("custom"===$&&(null===(n=T.tokens)||void 0===n||null===(s=n.items)||void 0===s||null===(c=s["".concat(i,"-").concat(a.chainId)])||void 0===c?void 0:c.length))return T.tokens.items["".concat(i,"-").concat(a.chainId)].indexOf(e.address.toLowerCase())-T.tokens.items["".concat(i,"-").concat(a.chainId)].indexOf(t.address.toLowerCase());var r=t.balanceUSD-e.balanceUSD;return 0===r?e.symbol.toUpperCase().localeCompare(t.symbol.toUpperCase()):r})),K=Object(f.d)("address",(function(e){y((function(t){var n;return Object(d.a)(Object(d.a)({},t),{},{tokens:{sortType:"custom",items:Object(d.a)(Object(d.a)({},null===(n=t.tokens)||void 0===n?void 0:n.items),{},Object(l.a)({},"".concat(i,"-").concat(a.chainId),e))}})}))})),Q=K.dragStart,V=K.dragEnter,X=K.target,Z=K.handle,ee=K.dragTarget,te=K.drop,ae=N.length?N.find((function(e){return e.account===i})):S([].concat(Object(o.a)(N),[{account:i,isEnabled:!1}]));return Object(r.jsxs)("div",{id:"gas-tank",children:[Object(r.jsxs)("div",{className:"heading-wrapper",children:[Object(r.jsxs)("div",{className:"balance-wrapper",style:{cursor:"pointer"},onClick:function(){E(Object(r.jsx)(x.a,{data:C&&C.length?C:[]}))},children:[Object(r.jsxs)("span",{children:[Object(r.jsx)(h.a,{})," Balance on All Networks"]}),!U&&G?Object(r.jsxs)("div",{className:P.length>6?"inner-wrapper-left small-font":"inner-wrapper-left",children:[Object(r.jsx)("span",{children:"$ "}),P]}):Object(r.jsx)(j.m,{}),Object(r.jsx)("span",{children:"More details..."})]}),Object(r.jsxs)("div",{className:"switch-wrapper",children:[Object(r.jsx)(j.x,{checked:ae.isEnabled,onChange:function(){return function(){if(G||G.length){var e=N.map((function(e){return e.account===i?Object(d.a)(Object(d.a)({},e),{},{isEnabled:!e.isEnabled}):e}));S(e)}else M("Add assets from the list to the Gas Tank to enable it.",{error:!0})}()}}),ae.isEnabled?Object(r.jsx)("span",{children:"Enabled"}):Object(r.jsx)("span",{children:"Disabled"})]}),Object(r.jsxs)("div",{className:"balance-wrapper total-save",children:[Object(r.jsxs)("div",{className:"inner-wrapper-right",children:[Object(r.jsx)("div",{className:"label green",children:"Total Saved: "}),Object(r.jsxs)("div",{className:"amount",children:[Object(r.jsx)("span",{children:"$"})," ",R||"0.00"]})]}),Object(r.jsxs)("div",{className:"inner-wrapper-right",children:[Object(r.jsx)("div",{className:"label",children:"Total Cashback: "}),Object(r.jsxs)("div",{className:"amount",children:[Object(r.jsx)("span",{children:"$"})," ",B||"0.00"]})]}),Object(r.jsxs)("span",{children:["From transaction fees on ",a.id.toUpperCase()]})]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"benefit",children:"Save over 20% of fees by enabling the gas tank"}),Object(r.jsx)("p",{children:"This is your special account for pre-paying transaction fees."}),Object(r.jsx)("p",{children:"By filling up your Gas Tank, you are setting aside, or prepaying for network fees."}),Object(r.jsx)("p",{children:"Only the tokens listed below are eligible for filling up your Gas Tank. You can add more tokens to your Gas Tank at any time."}),Object(r.jsx)("p",{children:"The tokens in your Gas Tank can pay network fees on all supported networks."})]}),Object(r.jsxs)("div",{className:"sort-holder",children:[Object(r.jsxs)("span",{className:"title",children:["Available fee tokens on ",a.id.toUpperCase()]}),H&&!_&&Object(r.jsxs)("div",{className:"sort-buttons",children:[Object(r.jsx)(j.y,{label:"Sorted tokens by drag and drop",children:Object(r.jsx)(O.n,{color:"custom"===$?"#80ffdb":"",cursor:"pointer",onClick:function(){return y((function(e){return Object(d.a)(Object(d.a)({},e),{},{tokens:Object(d.a)(Object(d.a)({},e.tokens),{},{sortType:"custom"})})}))}})}),Object(r.jsx)(j.y,{label:"Sorted tokens by DESC balance",children:Object(r.jsx)(O.W,{color:"decreasing"===$?"#80ffdb":"",cursor:"pointer",onClick:function(){return y((function(e){return Object(d.a)(Object(d.a)({},e),{},{tokens:Object(d.a)(Object(d.a)({},e.tokens),{},{sortType:"decreasing"})})}))}})})]})]}),Object(r.jsx)("div",{className:"list",children:W?Object(r.jsx)(j.m,{}):H&&(null===H||void 0===H?void 0:H.map((function(e,t){var a=e.address,n=e.symbol,s=e.tokenImageUrl,c=e.balance,i=e.balanceUSD,l=e.network,d=e.decimals,u=e.icon;return function(e,t,a,n,s,c){var i=arguments.length>6&&void 0!==arguments[6]&&arguments[6],l=arguments.length>7?arguments[7]:void 0,d=arguments.length>9?arguments[9]:void 0,u=arguments.length>10?arguments[10]:void 0,b=J.includes(t)?Object(m.a)(l,c):t;return Object(r.jsxs)("div",{className:"token",disabled:0===n,draggable:"tokens"===d&&u>1&&"custom"===$&&!_,onDragStart:function(t){Z.current===X.current||Z.current.contains(X.current)?Q(t,e):t.preventDefault()},onMouseDown:function(t){return ee(t,e)},onDragEnter:function(t){return V(t,e)},onDragEnd:function(){return te(H)},onDragOver:function(e){return e.preventDefault()},children:[u>1&&"custom"===$&&!_&&Object(r.jsx)(O.n,{size:20,className:"drag-handle",onClick:function(t){return Q(t,e)},id:"".concat(e,"-handle")}),Object(r.jsx)("div",{className:"icon",children:J.includes(b)?Object(r.jsx)(h.d,{size:20}):Object(r.jsx)("img",{src:b,draggable:"false",alt:"Token Icon",onError:function(){return q((function(e){return[].concat(Object(o.a)(e),[b])}))}})}),Object(r.jsx)("div",{className:"name",children:a.toUpperCase()}),Object(r.jsx)("div",{className:"separator"}),Object(r.jsxs)("div",{className:"balance",children:[Object(r.jsx)("div",{className:"currency",children:Object(r.jsx)("span",{className:"value",children:Object(g.a)(n,!0,4)})}),Object(r.jsxs)("div",{className:"dollar",children:[Object(r.jsx)("span",{className:"symbol",children:"$"})," ",s.toFixed(2)]})]}),i?Object(r.jsx)("div",{className:"actions",children:Object(r.jsx)(p.c,{to:{pathname:"/wallet/transfer/".concat(c),state:{gasTankMsg:"Warning: You are about to top up your Gas Tank. Top ups to the Gas Tank are non-refundable.",isTopUp:!0}},children:Object(r.jsx)(j.e,{small:!0,children:"Top up"})})}):null]},"token-".concat(c,"-").concat(e))}(t,s=s||u,n,c,i,a,!0,l,d,"tokens",H.length)})))}),Object(r.jsx)("div",{children:Object(r.jsx)(p.c,{to:{pathname:"/wallet/transfer/",state:{gasTankMsg:"Warning: You are about to top up your Gas Tank. Top ups to the Gas Tank are non-refundable.",isTopUp:!0}},children:Object(r.jsx)(j.e,{className:"deposit-button",small:!0,children:"top up gas tank"})})}),Object(r.jsxs)("span",{className:"title",children:["Gas Tank top ups history on ",a.id.toUpperCase()]}),Object(r.jsx)("p",{className:"warning-msg",children:"Warning: It will take some time to top up the Gas Tank after the transaction is signed."}),Object(r.jsx)("div",{className:"txns-wrapper",children:L&&L.length?L.map((function(e,t){var n,s=A&&A.length?A.find((function(t){var a=t.address,n=t.network;return a.toLowerCase()===e.address.toLowerCase()&&n===e.network})):null;return s?Object(r.jsxs)("div",{className:"txns-item-wrapper",children:[Object(r.jsx)("div",{className:"logo",children:Object(r.jsx)(h.a,{size:20})}),Object(r.jsx)("div",{className:"date",children:e.submittedAt&&(n=new Date(e.submittedAt),"".concat(n.toLocaleDateString()," ").concat(n.toLocaleTimeString())).toString()}),Object(r.jsx)("div",{className:"balance",children:s&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("img",{width:"25px",height:"25px",alt:"logo",src:s.icon||Object(m.a)(e.network,e.address)}),Object(r.jsx)("div",{children:s.symbol.toUpperCase()}),s&&Object(k.formatUnits)(e.value.toString(),s.decimals).toString()]})}),Object(r.jsx)("div",{className:"logo",children:Object(r.jsx)("a",{href:a.explorerUrl+"/tx/"+e.txId,target:"_blank",rel:"noreferrer",onClick:function(e){return e.stopPropagation()},children:Object(r.jsx)(v.c,{size:20})})})]},t):null})).filter((function(e){return e})):Object(r.jsxs)("p",{children:["No top ups were made to Gas Tank on ",a.id.toUpperCase()]})})]})};t.default=function(e){var t=e.selectedNetwork,a=e.relayerURL,s=e.portfolio,c=e.selectedAccount,o=e.userSorting,l=e.setUserSorting,d=e.gasTankState,u=e.setGasTankState,h=Object(b.useState)((function(){return Date.now()})),p=Object(n.a)(h,2),O=p[0],m=p[1];Object(b.useEffect)((function(){Date.now()-O>5e3&&m(Date.now());var e=setTimeout((function(){return m(Date.now())}),6e4);return function(){return clearTimeout(e)}}),[O]);var g=a?"".concat(a,"/gasPrice/").concat(t.id,"?cacheBreak=").concat(O):null,x=Object(f.j)({url:g}),v=x.data,k=x.errMsg,w=x.isLoading,y=v?v.data:null;return Object(r.jsxs)("section",{id:"gas",children:[Object(r.jsxs)("div",{className:"panel",children:[Object(r.jsx)("div",{className:"heading",children:Object(r.jsx)("div",{className:"title",children:"Current Network Fees"})}),Object(r.jsxs)("div",{className:"description",children:[Object(r.jsx)("p",{children:"Network fees are determined on a market principle - if more users are trying to use the network, fees are higher. Each network has different fees."}),y&&!w&&Object(r.jsx)(i,{gasData:y}),w&&Object(r.jsx)(j.m,{}),!y&&k&&Object(r.jsxs)("h3",{className:"error",children:["Gas Information: ",k]})]})]}),Object(r.jsxs)("div",{className:"panel",children:[Object(r.jsx)("div",{className:"heading",children:Object(r.jsx)("div",{className:"title",children:"Gas Tank"})}),Object(r.jsx)("div",{className:"description",children:t.isGasTankAvailable?Object(r.jsx)(T,{network:t,relayerURL:a,portfolio:s,account:c,userSorting:o,setUserSorting:l,gasTankState:d,setGasTankState:u}):Object(r.jsxs)("h3",{className:"error",children:["Gas Tank is not available on ",t.id.toUpperCase()]})})]})]})}},636:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(108);function s(e,t){if(null==e)return{};var a,s,c=Object(n.a)(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}},730:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=["slow","medium","fast","ape"]},813:function(e,t,a){"use strict";var n=a(8),s=a(21),c=a(3);function r(e){return(null===e||void 0===e?void 0:e.address)&&"0x0000000000000000000000000000000000000000"!==(null===e||void 0===e?void 0:e.address)?3e4:12e3}var i=a(636),o=a(607),l=a(26),d=a(151),u=["txId","txns","submittedAt","gasTankFee","identity"],j=new s.Interface(o),b=j.getSighash(j.getFunction("transfer").format()),h=d.a.feeCollector;function p(e){return e[0]===h||!(!e[2].startsWith(b)||function(e){try{var t=j.decodeFunctionData("transfer",e);return Object(n.a)({value:l.a.from(t._value)},t)}catch(a){return console.error(a),{}}}(e[2])._to!==h)}var O=a(242);t.a=function(e){var t=e.relayerURL,a=e.selectedAcc,o=e.network,d=e.portfolio,f=e.useRelayerData,m=Object(O.a)().cacheBreak,g=d.tokens,x=t?"".concat(t,"/gas-tank/").concat(a,"/getBalance?cacheBreak=").concat(m):null,v=t?"".concat(t,"/gas-tank/assets?cacheBreak=").concat(m):null,k=t?"".concat(t,"/identity/").concat(a,"/").concat(null===o||void 0===o?void 0:o.id,"/transactions"):null,w=f({url:x}),T=w.data,y=w.isLoading,N=f({url:v}).data,S=f({url:k}).data,D=Object(c.useMemo)((function(){return T&&T.length&&T.map((function(e){return e.balanceInUSD})).reduce((function(e,t){return e+t}),0)}),[T]),U=Object(c.useMemo)((function(){return S&&S.txns.length&&S.txns.filter((function(e){return!!e.gasTankFee}))}),[S]),C=Object(c.useMemo)((function(){return N&&N.length&&N.filter((function(e){return e.network===(null===o||void 0===o?void 0:o.id)}))}),[N,null===o||void 0===o?void 0:o.id]),G=S&&S.txns.length&&S.txns,F=Object(c.useMemo)((function(){return G&&G.length&&function(e){var t=[];return e.forEach((function(e){var a=e.txId,s=e.txns,c=e.submittedAt,r=e.gasTankFee,o=e.identity,d=Object(i.a)(e,u),O=s.filter((function(e,t){return p(e)&&(r||t<s.length-1)})).map((function(e){return e[0]===h?Object(n.a)({submittedAt:c,address:"0x0000000000000000000000000000000000000000",value:l.a.from(e[1]),identity:o,txId:a},d):e[2].startsWith(b)&&j.decodeFunctionData("transfer",e[2])._to===h?Object(n.a)({submittedAt:c,address:e[0],value:l.a.from(j.decodeFunctionData("transfer",e[2])._value),identity:o,txId:a},d):null}));O.length&&t.push(O[0])})),t}(G)}),[G]),L=Object(c.useMemo)((function(){return null===C||void 0===C?void 0:C.map((function(e){var t=null===g||void 0===g?void 0:g.find((function(t){return t.address.toLowerCase()===e.address.toLowerCase()}));return t?Object(n.a)(Object(n.a)({},t),{},{tokenImageUrl:e.icon,decimals:e.decimals,symbol:e.symbol,balance:t.balance,disableGasTankDeposit:!!e.disableGasTankDeposit,balanceUSD:parseFloat(t.balance)*parseFloat(C.find((function(e){return e.address.toLowerCase()===t.address.toLowerCase()})).price||0)}):Object(n.a)(Object(n.a)({},e),{},{tokenImageUrl:e.icon,balance:0,balanceUSD:0,decimals:0,address:e.address.toLowerCase(),symbol:e.symbol.toUpperCase()})}))}),[C,g]),A=Object(c.useMemo)((function(){return U&&U.length&&U.map((function(e){var t=N?N.find((function(t){return t.symbol===e.feeToken})):null,a=t?r(t):null;return{saved:a?e.feeInUSDPerGas*a:0,cashback:e.gasTankFee&&e.gasTankFee.cashback?Object(s.formatUnits)(e.gasTankFee.cashback.toString(),null===t||void 0===t?void 0:t.decimals).toString()*(null===t||void 0===t?void 0:t.price):0}}))}),[N,U]);return{balancesRes:T,gasTankBalances:D,isLoading:y,gasTankTxns:U,feeAssetsRes:N,gasTankFilledTxns:F,totalSavedResult:A,availableFeeAssets:L}}}}]);
//# sourceMappingURL=19.132b158e.chunk.js.map