(this["webpackJsonpambire-wallet"]=this["webpackJsonpambire-wallet"]||[]).push([[18],{1749:function(e,t,a){},1750:function(e,t,a){},1751:function(e,t,a){},1752:function(e,t,a){e.exports={wrapper:"GasTankBalanceByTokensModal_wrapper__208BN",content:"GasTankBalanceByTokensModal_content__1hwE6",row:"GasTankBalanceByTokensModal_row__3OGhX",item:"GasTankBalanceByTokensModal_item__uZAPu",logo:"GasTankBalanceByTokensModal_logo__3krtn",balance:"GasTankBalanceByTokensModal_balance__3c873"}},1772:function(e,t,a){"use strict";a.r(t);var n=a(12),s=(a(1749),a(1750),a(769)),c=a(1061),r=a(5),i=function(e){var t=e.gasData,a=s.a.reduce((function(e,a){return e[a]=t.gasPrice.maxPriorityFeePerGas?t.gasPrice.maxPriorityFeePerGas[a]+t.gasPrice[a]:t.gasPrice[a],e}),{});return Object(r.jsxs)("div",{id:"gas-details-modal",children:[Object(r.jsxs)("div",{className:"gas-details-date",children:["Last updated: ",new Date(t.gasPrice.updated).toDateString()+" "+new Date(t.gasPrice.updated).toTimeString().substr(0,8)]}),Object(r.jsx)("div",{className:"gas-speed-row",children:s.a.map((function(e,t){return Object(r.jsxs)("div",{className:"gas-speed-block",children:[Object(r.jsx)("div",{className:"gas-speed-name",children:e}),Object(r.jsxs)("div",{className:"gas-speed-price",children:[Math.round(a[e]/Math.pow(10,9))," Gwei"]})]},t)}))}),Object(r.jsx)("h4",{children:"Estimated Cost of Transaction Actions"}),Object(r.jsx)("div",{className:"table-wrapper",children:Object(r.jsxs)("table",{className:"gas-action-costs",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Action"}),s.a.map((function(e,t){return Object(r.jsx)("th",{children:e},t)}))]})}),Object(r.jsx)("tbody",{children:c.a.map((function(e,n){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.name}),s.a.map((function(n,s){return Object(r.jsxs)("td",{children:["$",(a[n]*(e.gas+c.b)/Math.pow(10,18)*t.gasFeeAssets.native).toFixed(2)]},s)}))]},n)}))})]})})]})},o=a(17),l=a(16),d=a(9),u=a(907),b=(a(1751),a(101)),p=a(3),j=a(669),m=a(90),h=a(56),f=a(44),g=a(649),O=a(661),x=a(1752),v=a.n(x),y=function(e){var t=e.data,a=Object(f.f)().hideModal;return Object(r.jsx)(b.n,{className:v.a.wrapper,title:"Gas Tank Balance by Tokens",buttons:Object(r.jsx)(b.e,{clear:!0,icon:Object(r.jsx)(h.y,{}),onClick:a,children:"Close"}),children:Object(r.jsxs)("div",{className:v.a.content,children:[Object(r.jsxs)("div",{className:v.a.row,children:[Object(r.jsx)("div",{className:v.a.logo,children:" "}),Object(r.jsx)("div",{className:v.a.item,children:Object(r.jsx)("span",{children:"Token"})}),Object(r.jsx)("div",{className:v.a.balance,children:Object(r.jsx)("span",{children:"Amount"})}),Object(r.jsx)("div",{className:v.a.balance,children:Object(r.jsx)("span",{children:"Balance"})})]}),t&&t.sort((function(e,t){return t.balance-e.balance})).map((function(e,t){return Object(r.jsxs)("div",{className:v.a.row,children:[Object(r.jsx)("div",{className:v.a.logo,children:Object(r.jsx)("img",{width:"25px",height:"25px",alt:"logo",src:e.icon||Object(g.a)(e.network,e.address)})}),Object(r.jsx)("div",{className:v.a.item,children:Object(r.jsx)("span",{children:e.symbol.toUpperCase()})}),Object(r.jsx)("div",{className:v.a.balance,children:Object(r.jsx)("span",{children:Object(O.a)(e.balance,!0,6)})}),Object(r.jsx)("div",{className:v.a.balance,children:Object(r.jsxs)("span",{children:["$ ",Object(O.a)(e.balanceInUSD,!0,6)]})})]},t)}))]})})},k=a(687),w=a(22),T=a(48),N=function(e){var t,a=e.network,s=e.relayerURL,c=e.portfolio,i=e.account,x=e.userSorting,v=e.setUserSorting,N=e.gasTankState,_=e.setGasTankState,S=Object(u.a)({relayerURL:s,selectedAcc:i,network:a,portfolio:c,useRelayerData:f.j}),D=S.isLoading,C=S.balancesRes,G=S.gasTankBalances,U=S.totalSavedResult,A=S.gasTankFilledTxns,M=S.feeAssetsRes,F=S.availableFeeAssets,B=Object(f.f)().showModal,L=Object(T.a)().addToast,E=G?Object(O.a)(G,!0,2):"0.00",I=U&&U.length&&Object(O.a)(U.map((function(e){return e.saved})).reduce((function(e,t){return e+t})),!0,2),R=U&&U.length&&Object(O.a)(U.map((function(e){return e.cashback})).reduce((function(e,t){return e+t})),!0,2),P=c.isBalanceLoading,z=(null===(t=x.tokens)||void 0===t?void 0:t.sortType)||"decreasing",$=Object(f.c)(),J=Object(p.useState)([]),W=Object(n.a)(J,2),Y=W[0],q=W[1],X=null===F||void 0===F?void 0:F.filter((function(e){return!e.disableGasTankDeposit})).sort((function(e,t){return t.balanceUSD-e.balanceUSD})).sort((function(e,t){var n,s,c;if("custom"===z&&(null===(n=x.tokens)||void 0===n||null===(s=n.items)||void 0===s||null===(c=s["".concat(i,"-").concat(a.chainId)])||void 0===c?void 0:c.length))return x.tokens.items["".concat(i,"-").concat(a.chainId)].indexOf(e.address.toLowerCase())-x.tokens.items["".concat(i,"-").concat(a.chainId)].indexOf(t.address.toLowerCase());var r=t.balanceUSD-e.balanceUSD;return 0===r?e.symbol.toUpperCase().localeCompare(t.symbol.toUpperCase()):r})),Z=Object(f.d)("address",(function(e){v((function(t){var n;return Object(d.a)(Object(d.a)({},t),{},{tokens:{sortType:"custom",items:Object(d.a)(Object(d.a)({},null===(n=t.tokens)||void 0===n?void 0:n.items),{},Object(l.a)({},"".concat(i,"-").concat(a.chainId),e))}})}))})),H=Z.dragStart,K=Z.dragEnter,Q=Z.target,V=Z.handle,ee=Z.dragTarget,te=Z.drop,ae=N.length?N.find((function(e){return e.account===i})):_([].concat(Object(o.a)(N),[{account:i,isEnabled:!1}]));return Object(r.jsxs)("div",{id:"gas-tank",children:[Object(r.jsxs)("div",{className:"heading-wrapper",children:[Object(r.jsxs)("div",{className:"balance-wrapper",style:{cursor:"pointer"},onClick:function(){B(Object(r.jsx)(y,{data:C&&C.length?C:[]}))},children:[Object(r.jsxs)("span",{children:[Object(r.jsx)(j.a,{})," Balance on All Networks"]}),!D&&G?Object(r.jsxs)("div",{className:E.length>6?"inner-wrapper-left small-font":"inner-wrapper-left",children:[Object(r.jsx)("span",{children:"$ "}),E]}):Object(r.jsx)(b.m,{}),Object(r.jsx)("span",{children:"More details..."})]}),Object(r.jsxs)("div",{className:"switch-wrapper",children:[Object(r.jsx)(b.y,{checked:ae.isEnabled,onChange:function(){return function(){if(G||G.length){var e=N.map((function(e){return e.account===i?Object(d.a)(Object(d.a)({},e),{},{isEnabled:!e.isEnabled}):e}));_(e)}else L("Add assets from the list to the Gas Tank to enable it.",{error:!0})}()}}),ae.isEnabled?Object(r.jsx)("span",{children:"Enabled"}):Object(r.jsx)("span",{children:"Disabled"})]}),Object(r.jsxs)("div",{className:"balance-wrapper total-save",children:[Object(r.jsxs)("div",{className:"inner-wrapper-right",children:[Object(r.jsx)("div",{className:"label green",children:"Total Saved: "}),Object(r.jsxs)("div",{className:"amount",children:[Object(r.jsx)("span",{children:"$"})," ",I||"0.00"]})]}),Object(r.jsxs)("div",{className:"inner-wrapper-right",children:[Object(r.jsx)("div",{className:"label",children:"Total Cashback: "}),Object(r.jsxs)("div",{className:"amount",children:[Object(r.jsx)("span",{children:"$"})," ",R||"0.00"]})]}),Object(r.jsxs)("span",{children:["From transaction fees on ",a.id.toUpperCase()]})]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{className:"benefit",children:"Save over 20% of fees by enabling the gas tank"}),Object(r.jsx)("p",{children:"This is your special account for pre-paying transaction fees."}),Object(r.jsx)("p",{children:"By filling up your Gas Tank, you are setting aside, or prepaying for network fees."}),Object(r.jsx)("p",{children:"Only the tokens listed below are eligible for filling up your Gas Tank. You can add more tokens to your Gas Tank at any time."}),Object(r.jsx)("p",{children:"The tokens in your Gas Tank can pay network fees on all supported networks."})]}),Object(r.jsxs)("div",{className:"sort-holder",children:[Object(r.jsxs)("span",{className:"title",children:["Available fee tokens on ",a.id.toUpperCase()]}),X&&!$&&Object(r.jsxs)("div",{className:"sort-buttons",children:[Object(r.jsx)(b.z,{label:"Sorted tokens by drag and drop",children:Object(r.jsx)(h.i,{color:"custom"===z?"#80ffdb":"",cursor:"pointer",onClick:function(){return v((function(e){return Object(d.a)(Object(d.a)({},e),{},{tokens:Object(d.a)(Object(d.a)({},e.tokens),{},{sortType:"custom"})})}))}})}),Object(r.jsx)(b.z,{label:"Sorted tokens by DESC balance",children:Object(r.jsx)(h.I,{color:"decreasing"===z?"#80ffdb":"",cursor:"pointer",onClick:function(){return v((function(e){return Object(d.a)(Object(d.a)({},e),{},{tokens:Object(d.a)(Object(d.a)({},e.tokens),{},{sortType:"decreasing"})})}))}})})]})]}),Object(r.jsx)("div",{className:"list",children:P?Object(r.jsx)(b.m,{}):X&&(null===X||void 0===X?void 0:X.map((function(e,t){var a=e.address,n=e.symbol,s=e.tokenImageUrl,c=e.balance,i=e.balanceUSD,l=e.network,d=e.decimals,u=e.icon;return function(e,t,a,n,s,c){var i=arguments.length>6&&void 0!==arguments[6]&&arguments[6],l=arguments.length>7?arguments[7]:void 0,d=arguments.length>9?arguments[9]:void 0,u=arguments.length>10?arguments[10]:void 0,p=Y.includes(t)?Object(g.a)(l,c):t;return Object(r.jsxs)("div",{className:"token",disabled:0===n,draggable:"tokens"===d&&u>1&&"custom"===z&&!$,onDragStart:function(t){V.current===Q.current||V.current.contains(Q.current)?H(t,e):t.preventDefault()},onMouseDown:function(t){return ee(t,e)},onDragEnter:function(t){return K(t,e)},onDragEnd:function(){return te(X)},onDragOver:function(e){return e.preventDefault()},children:[u>1&&"custom"===z&&!$&&Object(r.jsx)(h.i,{size:20,className:"drag-handle",onClick:function(t){return H(t,e)},id:"".concat(e,"-handle")}),Object(r.jsx)("div",{className:"icon",children:Y.includes(p)?Object(r.jsx)(j.c,{size:20}):Object(r.jsx)("img",{src:p,draggable:"false",alt:"Token Icon",onError:function(){return q((function(e){return[].concat(Object(o.a)(e),[p])}))}})}),Object(r.jsx)("div",{className:"name",children:a.toUpperCase()}),Object(r.jsx)("div",{className:"separator"}),Object(r.jsxs)("div",{className:"balance",children:[Object(r.jsx)("div",{className:"currency",children:Object(r.jsx)("span",{className:"value",children:Object(O.a)(n,!0,4)})}),Object(r.jsxs)("div",{className:"dollar",children:[Object(r.jsx)("span",{className:"symbol",children:"$"})," ",s.toFixed(2)]})]}),i?Object(r.jsx)("div",{className:"actions",children:Object(r.jsx)(m.c,{to:{pathname:"/wallet/transfer/".concat(c),state:{gasTankMsg:"Warning: You are about to top up your Gas Tank. Top ups to the Gas Tank are non-refundable.",isTopUp:!0}},children:Object(r.jsx)(b.e,{className:"buttonComponent",small:!0,children:"Top up"})})}):null]},"token-".concat(c,"-").concat(e))}(t,s=s||u,n,c,i,a,!0,l,d,"tokens",X.length)})))}),Object(r.jsx)("div",{children:Object(r.jsx)(m.c,{to:{pathname:"/wallet/transfer/",state:{gasTankMsg:"Warning: You are about to top up your Gas Tank. Top ups to the Gas Tank are non-refundable.",isTopUp:!0}},children:Object(r.jsx)(b.e,{primaryGradient:!0,className:"deposit-button buttonComponent",small:!0,children:"Top up Gas Tank"})})}),Object(r.jsxs)("span",{className:"title",children:["Gas Tank top ups history on ",a.id.toUpperCase()]}),Object(r.jsx)("p",{className:"warning-msg",children:"Warning: It will take some time to top up the Gas Tank after the transaction is signed."}),Object(r.jsx)("div",{className:"txns-wrapper",children:A&&A.length?A.map((function(e,t){var n,s=M&&M.length?M.find((function(t){var a=t.address,n=t.network;return a.toLowerCase()===e.address.toLowerCase()&&n===e.network})):null;return s?Object(r.jsxs)("div",{className:"txns-item-wrapper",children:[Object(r.jsx)("div",{className:"logo",children:Object(r.jsx)(j.a,{size:20})}),Object(r.jsx)("div",{className:"date",children:e.submittedAt&&(n=new Date(e.submittedAt),"".concat(n.toLocaleDateString()," ").concat(n.toLocaleTimeString())).toString()}),Object(r.jsx)("div",{className:"balance",children:s&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("img",{width:"25px",height:"25px",alt:"logo",src:s.icon||Object(g.a)(e.network,e.address)}),Object(r.jsx)("div",{children:s.symbol.toUpperCase()}),s&&Object(w.formatUnits)(e.value.toString(),s.decimals).toString()]})}),Object(r.jsx)("div",{className:"logo",children:Object(r.jsx)("a",{href:a.explorerUrl+"/tx/"+e.txId,target:"_blank",rel:"noreferrer",onClick:function(e){return e.stopPropagation()},children:Object(r.jsx)(k.c,{size:20})})})]},t):null})).filter((function(e){return e})):Object(r.jsxs)("p",{children:["No top ups were made to Gas Tank on ",a.id.toUpperCase()]})})]})};t.default=function(e){var t=e.selectedNetwork,a=e.relayerURL,s=e.portfolio,c=e.selectedAccount,o=e.userSorting,l=e.setUserSorting,d=e.gasTankState,u=e.setGasTankState,j=Object(p.useState)((function(){return Date.now()})),m=Object(n.a)(j,2),h=m[0],g=m[1];Object(p.useEffect)((function(){Date.now()-h>5e3&&g(Date.now());var e=setTimeout((function(){return g(Date.now())}),6e4);return function(){return clearTimeout(e)}}),[h]);var O=a?"".concat(a,"/gasPrice/").concat(t.id,"?cacheBreak=").concat(h):null,x=Object(f.j)({url:O}),v=x.data,y=x.errMsg,k=x.isLoading,w=v?v.data:null;return Object(r.jsxs)("section",{id:"gas",children:[Object(r.jsx)(b.q,{className:"panel",title:"Current Network Fees",children:Object(r.jsxs)("div",{className:"description",children:[Object(r.jsx)("p",{children:"Network fees are determined on a market principle - if more users are trying to use the network, fees are higher. Each network has different fees."}),w&&!k&&Object(r.jsx)(i,{gasData:w}),k&&Object(r.jsx)(b.m,{}),!w&&y&&Object(r.jsxs)("h3",{className:"error",children:["Gas Information: ",y]})]})}),Object(r.jsx)(b.q,{className:"panel",title:"Gas Tank",children:Object(r.jsx)("div",{className:"description",children:t.isGasTankAvailable?Object(r.jsx)(N,{network:t,relayerURL:a,portfolio:s,account:c,userSorting:o,setUserSorting:l,gasTankState:d,setGasTankState:u}):Object(r.jsxs)("h3",{className:"error",children:["Gas Tank is not available on ",t.id.toUpperCase()]})})})]})}},649:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n={"0xb468a1e5596cfbcdf561f21a10490d99b4bb7b68":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jeff_Sessions_with_Elmo_and_Rosita_%28cropped%29.jpg/220px-Jeff_Sessions_with_Elmo_and_Rosita_%28cropped%29.jpg","0x88800092ff476844f74dc2fc427974bbee2794ae":"https://raw.githubusercontent.com/AmbireTech/ambire-brand/main/logos/ambire_logo_white_bg_250x250.png","0x47cd7e91c3cbaaf266369fe8518345fc4fc12935":"https://raw.githubusercontent.com/AmbireTech/ambire-brand/main/logos/xwallet_250x250.png","0xb6456b57f03352be48bf101b46c1752a0813491a":"https://raw.githubusercontent.com/AmbireTech/adex-brand/master/logos/vaporwave-adex-2.png","0xd9a4cb9dc9296e111c66dfacab8be034ee2e1c2c":"https://raw.githubusercontent.com/AmbireTech/adex-brand/master/logos/ADX-loyalty%40256x256.png","0xec3b10ce9cabab5dbf49f946a623e294963fbb4e":"https://raw.githubusercontent.com/AmbireTech/ambire-brand/main/logos/xwallet_250x250.png","0xe9415e904143e42007865e6864f7f632bd054a08":"https://raw.githubusercontent.com/AmbireTech/ambire-brand/main/logos/Ambire_logo_250x250.png","0xade00c28244d5ce17d72e40330b1c318cd12b7c3":"https://raw.githubusercontent.com/AmbireTech/ambire-brand/main/official-logos/Ambire-AdEx/Ambire_AdEx_Symbol_color_white_bg.png"},s="https://storage.googleapis.com/zapper-fi-assets/tokens";function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=t.toLowerCase(),c=e.toLowerCase();return n[a]||"".concat(s,"/").concat(c,"/").concat(a,".png")}},659:function(e){e.exports=JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')},661:function(e,t,a){"use strict";function n(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:18;if(isNaN(e)||isNaN(parseFloat(e))||"number"!==typeof e&&"string"!==typeof e)return e;try{var n=Math.min(2,a||0);return("number"===typeof e?e:parseFloat(e)).toLocaleString(void 0,{useGrouping:t,maximumFractionDigits:Math.max(n,a),minimumFractionDigits:n})}catch(s){return console.error(s),e}}a.d(t,"a",(function(){return n}))},769:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=["slow","medium","fast","ape"]},907:function(e,t,a){"use strict";var n=a(9),s=a(22),c=a(3);function r(e){return(null===e||void 0===e?void 0:e.address)&&"0x0000000000000000000000000000000000000000"!==(null===e||void 0===e?void 0:e.address)?3e4:12e3}var i=a(263),o=a(659),l=a(32),d=a(181),u=["txId","txns","submittedAt","gasTankFee","identity"],b=new s.Interface(o),p=b.getSighash(b.getFunction("transfer").format()),j=d.a.feeCollector;function m(e){return e[0]===j||!(!e[2].startsWith(p)||function(e){try{var t=b.decodeFunctionData("transfer",e);return Object(n.a)({value:l.a.from(t._value)},t)}catch(a){return console.error(a),{}}}(e[2])._to!==j)}var h=a(271);t.a=function(e){var t=e.relayerURL,a=e.selectedAcc,o=e.network,d=e.portfolio,f=e.useRelayerData,g=Object(h.a)().cacheBreak,O=d.tokens,x=t?"".concat(t,"/gas-tank/").concat(a,"/getBalance?cacheBreak=").concat(g):null,v=t?"".concat(t,"/gas-tank/assets?cacheBreak=").concat(g):null,y=t?"".concat(t,"/identity/").concat(a,"/").concat(null===o||void 0===o?void 0:o.id,"/transactions"):null,k=f({url:x}),w=k.data,T=k.isLoading,N=f({url:v}).data,_=f({url:y}).data,S=Object(c.useMemo)((function(){return w&&w.length&&w.map((function(e){return e.balanceInUSD})).reduce((function(e,t){return e+t}),0)}),[w]),D=Object(c.useMemo)((function(){return _&&_.txns.length&&_.txns.filter((function(e){return!!e.gasTankFee}))}),[_]),C=Object(c.useMemo)((function(){return N&&N.length&&N.filter((function(e){return e.network===(null===o||void 0===o?void 0:o.id)}))}),[N,null===o||void 0===o?void 0:o.id]),G=_&&_.txns.length&&_.txns,U=Object(c.useMemo)((function(){return G&&G.length&&function(e){var t=[];return e.forEach((function(e){var a=e.txId,s=e.txns,c=e.submittedAt,r=e.gasTankFee,o=e.identity,d=Object(i.a)(e,u),h=s.filter((function(e,t){return m(e)&&(r||t<s.length-1)})).map((function(e){return e[0]===j?Object(n.a)({submittedAt:c,address:"0x0000000000000000000000000000000000000000",value:l.a.from(e[1]),identity:o,txId:a},d):e[2].startsWith(p)&&b.decodeFunctionData("transfer",e[2])._to===j?Object(n.a)({submittedAt:c,address:e[0],value:l.a.from(b.decodeFunctionData("transfer",e[2])._value),identity:o,txId:a},d):null}));h.length&&t.push(h[0])})),t}(G)}),[G]),A=Object(c.useMemo)((function(){return null===C||void 0===C?void 0:C.map((function(e){var t=null===O||void 0===O?void 0:O.find((function(t){return t.address.toLowerCase()===e.address.toLowerCase()}));return t?Object(n.a)(Object(n.a)({},t),{},{tokenImageUrl:e.icon,decimals:e.decimals,symbol:e.symbol,balance:t.balance,disableGasTankDeposit:!!e.disableGasTankDeposit,balanceUSD:parseFloat(t.balance)*parseFloat(C.find((function(e){return e.address.toLowerCase()===t.address.toLowerCase()})).price||0)}):Object(n.a)(Object(n.a)({},e),{},{tokenImageUrl:e.icon,balance:0,balanceUSD:0,decimals:0,address:e.address.toLowerCase(),symbol:e.symbol.toUpperCase()})}))}),[C,O]),M=Object(c.useMemo)((function(){return D&&D.length&&D.map((function(e){var t=N?N.find((function(t){return t.symbol===e.feeToken})):null,a=t?r(t):null;return{saved:a?e.feeInUSDPerGas*a:0,cashback:e.gasTankFee&&e.gasTankFee.cashback?Object(s.formatUnits)(e.gasTankFee.cashback.toString(),null===t||void 0===t?void 0:t.decimals).toString()*(null===t||void 0===t?void 0:t.price):0}}))}),[N,D]);return{balancesRes:w,gasTankBalances:S,isLoading:T,gasTankTxns:D,feeAssetsRes:N,gasTankFilledTxns:U,totalSavedResult:M,availableFeeAssets:A}}}}]);
//# sourceMappingURL=18.d3229346.chunk.js.map