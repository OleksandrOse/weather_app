(()=>{"use strict";var e={969:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Pe});var n=r(5004),i=r(1985),o=r(5861),a=r(885),c=r(3624),l=r(7602),s=r(6792),d=r(229),f=r(3019),u=r(8670),h=r(6434),y=r(9385),p=r(9711),g=function(){return(0,i.useDispatch)()},j=i.useSelector;function x(e){var t,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={method:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET"};return r&&(n.body=JSON.stringify(r),n.headers={"Content-Type":"application/json; charset=UTF-8","Accept-Language":"en-us"}),(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(e,n)})).then((function(e){return e.json()}))}var b=function(e){return x(e)},m=r(2087),w=r(8282),O=r(9951),v=function(){var e=(0,o.default)((function*(){try{return(yield(0,m.requestForegroundPermissionsAsync)()).status===w.PermissionStatus.GRANTED?(yield(0,m.getCurrentPositionAsync)({accuracy:O.LocationAccuracy.Balanced})).coords:(console.error("Permission to access location was denied."),c.default.alert("Permision to access location was denied"),{latitude:50.4501,longitude:30.5234})}catch(e){return console.error("Error getting location:",e),null}}));return function(){return e.apply(this,arguments)}}(),P=r(1054),C=r(5326),S=r(4942),D=r(4710),M=r(2629);function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){(0,S.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e){return(0,M.jsxs)(D.Svg,k(k({width:27,height:27,fill:"none"},e),{},{children:[(0,M.jsx)(D.G,{filter:"url(#a)",children:(0,M.jsx)(D.Path,{fill:"#fff",d:"m13.5 26.694-7.16-7.16a10.125 10.125 0 1 1 14.32 0l-7.16 7.16Zm5.569-8.75a7.875 7.875 0 1 0-11.138 0l5.569 5.568 5.569-5.568Zm-5.569-3.32a2.25 2.25 0 1 1 0-4.499 2.25 2.25 0 0 1 0 4.5Z"})}),(0,M.jsx)(D.Defs,{})]}))}var T=r(6591),$=r(4584),Z=r(9941),I=r(3507),_=r(195),B=(0,_.createSlice)({name:"address",initialState:{address:"",loading:!1,error:""},reducers:{setLoading:function(e,t){e.loading=t.payload},set:function(e,t){e.address=t.payload}}});const F=B.reducer;var A=B.actions,R="https://api.weatherapi.com/v1/forecast.json?key=f0008aab609e4afc85c182548232209",H=function(e){return b(`${R}&q=${e}&days=7`)},W=(0,_.createAsyncThunk)("weather/get",(function(e){return H(e.city)})),L=(0,_.createSlice)({name:"weather",initialState:{weather:null,isCelsium:!0,loading:!1,error:""},reducers:{setLoading:function(e,t){e.loading=t.payload},set:function(e,t){e.weather=t.payload},remove:function(e){e.weather=null},removeError:function(e){e.error=""},changeCelsium:function(e,t){e.isCelsium=t.payload}},extraReducers:function(e){e.addCase(W.pending,(function(e){e.loading=!0})),e.addCase(W.fulfilled,(function(e,t){e.weather=t.payload,e.loading=!1})),e.addCase(W.rejected,(function(e){e.loading=!1,e.weather=null,e.error="Something went wrong"}))}});const V=L.reducer;var q=L.actions;const G=function(){var e=g(),t=(0,n.useState)(""),r=(0,a.default)(t,2),i=r[0],l=r[1],s=(0,Z.useDebounce)(i,3e3),d=(0,a.default)(s,1)[0];function f(){return f=(0,o.default)((function*(){try{var t=yield H(d);t.current?(e(q.set(t)),e(A.set(t.location.name))):c.default.alert("Error","There is no such city")}catch(r){c.default.alert("Error","Something went wrong")}finally{l("")}})),f.apply(this,arguments)}return(0,n.useEffect)((function(){""!==d&&function(){f.apply(this,arguments)}()}),[d]),(0,M.jsxs)(y.default,{style:N.searchBar,children:[(0,M.jsx)(T.default,{style:N.searchInput,placeholder:"Search City",value:i,onChange:function(e){return l(e.nativeEvent.text)}}),(0,M.jsx)(I.default,{name:"search",size:28,color:"black"})]})};var N=s.default.create({searchBar:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:$.default.get("screen").width/2.2,borderWidth:1,borderColor:"lightgray",borderRadius:15,paddingHorizontal:10,backgroundColor:"lightgray"},searchInput:{width:$.default.get("screen").width/3,paddingVertical:5,paddingHorizontal:10,borderWidth:0,borderColor:"transparent"}}),J=r(9294);function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){(0,S.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Q(e){return(0,M.jsxs)(D.default,K(K({width:35,height:35,fill:"#fff",viewBox:"0 0 24 24"},e),{},{children:[(0,M.jsx)(D.Path,{d:"M17.5 14a1.5 1.5 0 1 1 1.5-1.5 1.502 1.502 0 0 1-1.5 1.5zM14 12.5a1.5 1.5 0 1 0-1.5 1.5 1.502 1.502 0 0 0 1.5-1.5zm-5 0A1.5 1.5 0 1 0 7.5 14 1.502 1.502 0 0 0 9 12.5zm13.8 0A10.3 10.3 0 1 1 12.5 2.2a10.297 10.297 0 0 1 10.3 10.3zm-1 0a9.3 9.3 0 1 0-9.3 9.3 9.31 9.31 0 0 0 9.3-9.3z"}),(0,M.jsx)(D.Path,{fill:"none",d:"M0 0h24v24H0z"})]}))}function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){(0,S.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ee(e){return(0,M.jsx)(D.default,Y(Y({width:20,height:20,fill:"#fff",stroke:"#fff",viewBox:"0 0 12 12"},e),{},{children:(0,M.jsx)(D.Path,{fill:"#1D1D1B",d:"m5 9.854-5-5 .707-.708L5 8.44l6.293-6.293.707.708z"})}))}var te=s.default.create({centeredView:{flex:1,alignItems:"flex-end"},modalView:{margin:10,marginTop:20,backgroundColor:"#0345fc",borderRadius:20,padding:35,alignItems:"center"},item:{flexDirection:"row",borderBottomWidth:1,borderColor:"gray",borderRadius:10,padding:10,gap:10},buttonClose:{backgroundColor:"#2196F3"},textStyle:{color:"white",fontWeight:"bold",textAlign:"center"},modalText:{color:"white",fontSize:24,textAlign:"center"},text:{color:"white",fontSize:16,fontWeight:"bold"}});const re=function(){var e=(0,n.useState)(!1),t=(0,a.default)(e,2),r=t[0],i=t[1],o=g(),c=j((function(e){return e.weather.isCelsium})),l=function(e){i(!r),o(q.changeCelsium(e))};return(0,M.jsxs)(y.default,{children:[(0,M.jsx)(J.default,{animationType:"fade",transparent:!0,visible:r,onRequestClose:function(){i(!r)},children:(0,M.jsx)(y.default,{style:te.centeredView,children:(0,M.jsxs)(y.default,{style:te.modalView,children:[(0,M.jsx)(P.default,{style:te.modalText,children:"Settings:"}),(0,M.jsxs)(C.default,{style:te.item,onPress:function(){return l(!0)},children:[(0,M.jsx)(y.default,{style:{width:30},children:c&&(0,M.jsx)(ee,{})}),(0,M.jsx)(y.default,{style:{width:90},children:(0,M.jsx)(P.default,{style:te.text,children:"Celsius"})}),(0,M.jsx)(y.default,{style:{width:30},children:(0,M.jsx)(P.default,{style:te.text,children:"\xb0C"})})]}),(0,M.jsxs)(C.default,{style:te.item,onPress:function(){return l(!1)},children:[(0,M.jsx)(y.default,{style:{width:30},children:!c&&(0,M.jsx)(ee,{})}),(0,M.jsx)(y.default,{style:{width:90},children:(0,M.jsx)(P.default,{style:te.text,children:"Fahrenheit"})}),(0,M.jsx)(y.default,{style:{width:30},children:(0,M.jsx)(P.default,{style:te.text,children:"\xb0F"})})]})]})})}),(0,M.jsx)(C.default,{onPress:function(){return i(!0)},children:(0,M.jsx)(Q,{})})]})};var ne=s.default.create({container:{flex:1,flexDirection:"row",justifyContent:"space-between",paddingTop:10,marginBottom:10},location:{padding:5},info:{flexDirection:"row",gap:5,alignItems:"center"},city:{fontSize:17,fontWeight:"bold",color:"#fff"},country:{fontSize:18}});const ie=function(e){var t=e.address,r=e.loadForecast,n=function(){var e=(0,o.default)((function*(){yield r()}));return function(){return e.apply(this,arguments)}}();return(0,M.jsxs)(y.default,{style:ne.container,children:[(0,M.jsxs)(y.default,{style:ne.info,children:[(0,M.jsx)(C.default,{onPress:function(){return n()},children:(0,M.jsx)(E,{style:ne.location})}),(0,M.jsx)(P.default,{style:ne.city,children:t})]}),(0,M.jsxs)(y.default,{style:ne.info,children:[(0,M.jsx)(G,{}),(0,M.jsx)(re,{})]})]})};var oe=r(3287);function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){(0,S.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function le(e){return(0,M.jsxs)(D.default,ce(ce({width:25,height:24,fill:"none"},e),{},{children:[(0,M.jsx)(D.Path,{fill:"#fff",d:"M4.433 10.376h7.677a3.768 3.768 0 0 0 3.77-3.334 3.656 3.656 0 0 0-.943-2.835A3.697 3.697 0 0 0 12.21 3h-2.072a.933.933 0 0 0 0 1.865h2.072a1.825 1.825 0 0 1 1.806 2.063 1.865 1.865 0 0 1-1.88 1.581H4.433a.933.933 0 1 0 0 1.866ZM21.483 16.53a3.768 3.768 0 0 0-3.77-3.334H11.3a.933.933 0 1 0 0 1.865h6.439a1.865 1.865 0 0 1 1.88 1.581 1.824 1.824 0 0 1-1.807 2.063H15.74a.933.933 0 1 0 0 1.866h2.071a3.696 3.696 0 0 0 2.729-1.207 3.655 3.655 0 0 0 .943-2.835ZM9.245 14.13a.934.934 0 0 0-.933-.934h-3.88a.932.932 0 1 0 0 1.865h3.88a.934.934 0 0 0 .933-.932ZM16.205 10.978a.3.3 0 0 0 .212-.088l.632-.632a2.56 2.56 0 0 0 2.97-3.18.3.3 0 0 0-.212-.213 2.561 2.561 0 0 0-3.18 2.97l-.634.63a.3.3 0 0 0 .212.513Z"}),(0,M.jsx)(D.Path,{fill:"#fff",d:"m9.731 16.324-.632-.632a.3.3 0 0 0-.424.424l.632.633c-.163.836.099 1.699.699 2.304.624.618 2.018 1.142 2.694.45a2.561 2.561 0 0 0-2.969-3.18v.001Z"})]}))}function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function de(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(Object(r),!0).forEach((function(t){(0,S.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function fe(e){return(0,M.jsx)(D.default,de(de({width:24,height:24,fill:"none"},e),{},{children:(0,M.jsx)(D.Path,{fill:"#fff",d:"M7.908 9.01c1.016-.411 1.56-1.54 1.147-2.561-.412-1.017-3.176-2.45-3.176-2.45s-.992 2.954-.58 3.97c.413 1.02 1.59 1.454 2.609 1.04v.001ZM12.165 15.029s-1.02 2.875-.61 3.89c.414 1.02 1.587 1.455 2.607 1.042 1.019-.412 1.56-1.541 1.147-2.56-.412-1.017-3.144-2.372-3.144-2.372ZM5.78 13.88s-1.12 3.096-.676 4.19c.444 1.098 1.733 1.577 2.831 1.133a2.09 2.09 0 0 0 1.163-2.75C8.655 15.36 5.78 13.88 5.78 13.88ZM12.14 12.941c.626-.253.874-.99.652-1.537-.254-.628-1.855-1.436-1.855-1.436s-.589 1.695-.335 2.323c.222.547.912.904 1.539.65ZM18.275 12.681c-.255-.628-1.856-1.436-1.856-1.436s-.588 1.695-.334 2.323c.222.548.912.905 1.538.651.625-.253.874-.99.652-1.538ZM17.052 6.636c-.411-1.016-3.175-2.448-3.175-2.448s-.992 2.953-.58 3.969c.413 1.02 1.59 1.453 2.608 1.04 1.017-.41 1.56-1.54 1.147-2.56ZM19.802 18.741c-.254-.628-1.856-1.436-1.856-1.436s-.588 1.695-.334 2.323c.222.548.912.905 1.538.65.625-.252.874-.989.652-1.537Z"})}))}function ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function he(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(r),!0).forEach((function(t){(0,S.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ye(e){return(0,M.jsxs)(D.default,he(he({width:25,height:24,fill:"none"},e),{},{children:[(0,M.jsx)(D.Path,{fill:"#fff",d:"M12.528 16.165c-.25-.219-.455-.67-.455-1.003V3.605A.606.606 0 0 0 11.468 3h-.775a.606.606 0 0 0-.605.605v11.557c0 .333-.213.774-.474.98 0 0-1.114.883-1.114 1.717 0 1.287 1.133 2.331 2.53 2.331 1.399 0 2.532-1.044 2.532-2.331 0-.795-1.034-1.695-1.034-1.695Z"}),(0,M.jsx)(D.Path,{fill:"#fff",d:"M11.822 6.358a.606.606 0 0 1-.605.605h-.265a.606.606 0 0 1-.604-.605v-2.49c0-.333.271-.605.604-.605h.265c.332 0 .604.272.604.604v2.491ZM15.092 13.601a1.033 1.033 0 1 1-2.067 0l1.02-1.86 1.047 1.86ZM16.205 15.293a.6.6 0 1 1-1.2-.012l.602-1.074.598 1.086ZM15.987 12.64a.357.357 0 1 1-.715-.006l.36-.64.355.647ZM12.507 18.337h.038c.04 0-.047.244-.194.543l-.048.097c-.147.298-.486.542-.753.542h-.971c-.267 0-.605-.244-.752-.542l-.048-.097c-.147-.299-.234-.543-.193-.543H12.507ZM10.845 18.076c-.386-.023-.606-.147-.803-.52-.197-.375-.173-.519.025-.956l.013.001c.464.083.595.147.79.519.197.373.175.626-.025.955M11.296 17.01c-.171-.01-.27-.065-.357-.232-.088-.166-.078-.23.011-.425h.005c.207.037.265.066.352.231.088.166.078.28-.011.426M11.518 18.076c-.176-.216-.216-.393-.114-.68.104-.286.192-.343.52-.45l.006.007c.181.287.21.388.108.672-.103.286-.248.396-.52.45"})]}))}var pe=s.default.create({card:{flex:1,justifyContent:"center",alignItems:"center",marginBottom:10},infoContainer:{alignItems:"center",justifyContent:"center",marginBottom:10},containerDescription:{width:"100%",flexDirection:"row",justifyContent:"space-between",backgroundColor:"#0345fc",borderRadius:10,opacity:.8,padding:10},content:{flexDirection:"row",alignItems:"center",gap:5},text:{fontWeight:"700",fontSize:14,lineHeight:17,color:"#fff",alignItems:"center"},temperature:{fontSize:54,fontWeight:"bold",color:"#fff",textAlign:"center",marginTop:-10},description:{fontSize:18,color:"#fff"},image:{width:150,height:150,aspectRatio:"8/8",borderRadius:10,marginBottom:5}});const ge=function(e){var t=e.weather,r=j((function(e){return e.weather.isCelsium})),n=t.forecast;return(0,M.jsx)(y.default,{children:(0,M.jsxs)(y.default,{style:pe.card,children:[(0,M.jsxs)(y.default,{style:pe.infoContainer,children:[(0,M.jsx)(oe.default,{style:pe.image,source:{uri:`https:${t.current.condition.icon}`}}),(0,M.jsx)(P.default,{style:pe.temperature,children:r?`${t.current.temp_c}\xb0C`:`${t.current.temp_f}\xb0F`}),(0,M.jsx)(P.default,{style:pe.description,children:"Precipitations:"}),(0,M.jsxs)(y.default,{style:{flexDirection:"row",gap:10,alignItems:"center",justifyContent:"center"},children:[(0,M.jsx)(P.default,{style:pe.description,children:r?`Max.: ${n.forecastday[0].day.maxtemp_c}\xb0`:`Max.: ${n.forecastday[0].day.maxtemp_f}\xb0`}),(0,M.jsx)(P.default,{style:pe.description,children:`Min.: ${t.forecast.forecastday[0].day.mintemp_c}\xb0`})]})]}),(0,M.jsxs)(y.default,{style:pe.containerDescription,children:[(0,M.jsxs)(y.default,{style:pe.content,children:[(0,M.jsx)(fe,{}),(0,M.jsx)(P.default,{style:pe.text,children:`${t.current.precip_in}%`})]}),(0,M.jsxs)(y.default,{style:pe.content,children:[(0,M.jsx)(le,{}),(0,M.jsx)(P.default,{style:pe.text,children:`${t.current.humidity}%`})]}),(0,M.jsxs)(y.default,{style:pe.content,children:[(0,M.jsx)(ye,{}),(0,M.jsx)(P.default,{style:pe.text,children:`${t.current.wind_kph} km/h`})]})]})]})})};var je=s.default.create({container:{backgroundColor:"#0345fc",borderRadius:10,padding:10,opacity:.8},title:{fontSize:24,color:"#fff"},containerInfo:{flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderTopWidth:1,borderColor:"gray",margin:5,paddingLeft:10,paddingRight:10},containerForecast:{flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center",gap:10},text:{fontSize:16,color:"#fff"},image:{flex:1,width:"100%",height:40,resizeMode:"contain",borderRadius:10}});const xe=function(e){var t=e.weather.forecast,r=j((function(e){return e.weather.isCelsium}));return(0,M.jsxs)(y.default,{style:je.container,children:[(0,M.jsx)(P.default,{style:je.title,children:"Next Forecast"}),t.forecastday.slice(1).map((function(e,t){return(0,M.jsxs)(y.default,{style:je.containerInfo,children:[(0,M.jsx)(y.default,{style:{width:80},children:(0,M.jsx)(P.default,{style:je.text,children:`${n=e.date,["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(n).getDay()]}`})}),(0,M.jsx)(y.default,{style:{width:80},children:(0,M.jsx)(oe.default,{style:je.image,source:{uri:`https:${e.day.condition.icon}`}})}),(0,M.jsx)(y.default,{style:{width:80},children:(0,M.jsxs)(y.default,{style:je.containerForecast,children:[(0,M.jsx)(P.default,{style:je.text,children:r?`${e.day.mintemp_c}\xb0C`:`${e.day.mintemp_f}\xb0F`}),(0,M.jsx)(P.default,{style:je.text,children:r?`${e.day.maxtemp_c}\xb0C`:`${e.day.maxtemp_f}\xb0F`})]})})]},t);var n}))]})};const be=function(e){var t=e.weather.forecast,r=j((function(e){return e.weather.isCelsium}));return(0,M.jsx)(y.default,{style:me.container,children:(0,M.jsx)(f.default,{horizontal:!0,contentContainerStyle:me.contentContainer,showsHorizontalScrollIndicator:!1,children:t.forecastday[0].hour.map((function(e,t){var n=e.time.split(" ")[1].split(":")[0];return(0,M.jsxs)(y.default,{style:me.current,children:[(0,M.jsx)(P.default,{style:me.currentDescription,children:n}),(0,M.jsx)(oe.default,{style:me.image,source:{uri:`https:${e.condition.icon}`}}),(0,M.jsx)(P.default,{style:me.currentDescription,children:r?`${e.temp_c}\xb0`:`${e.temp_f}\xb0`})]},t)}))})})};var me=s.default.create({container:{backgroundColor:"#0345fc",borderRadius:10,marginBottom:10,opacity:.8},contentContainer:{paddingHorizontal:10,paddingVertical:10,gap:20},current:{alignItems:"center",gap:5},image:{flex:1,width:"100%",height:40,resizeMode:"contain"},currentDescription:{fontSize:18,color:"#fff"}});const we=function(){var e,t,i=g(),s=j((function(e){return e.weather.weather})),p=j((function(e){return e.weather.error})),x=j((function(e){return e.address.address})),m=(0,n.useState)(!1),w=(0,a.default)(m,2),O=w[0],P=w[1],C=function(){var e=(0,o.default)((function*(){P(!0);try{var e=yield v(),t=yield function(e){var t=e.latitude,r=e.longitude;return b(`https://us1.locationiq.com/v1/reverse?key=pk.0086320e375054fb45f505f19c461874&lat=${t}&lon=${r}&accept-language=en&format=json`).then((function(e){return e.address.city}))}(e);i(A.set(t)),i(W({city:t}))}catch(r){c.default.alert("Error","Something went wrong")}finally{P(!1)}}));return function(){return e.apply(this,arguments)}}();if((0,n.useEffect)((function(){(0,o.default)((function*(){yield C()}))()}),[]),null==s||!s.current||p)return(0,M.jsx)(l.default,{children:(0,M.jsx)(d.default,{size:"large"})});return(0,M.jsx)(h.default,{source:(e=s.current.is_day,t=s.current.condition.text,r("Patchy rain possible"===t||"Light rain"===t||"Light drizzle"===t?3446:"Light rain"===t?9280:e?"Partly cloudy"===t||"Overcast"===t||"Cloudy"===t?1367:"Patchy snow possible"===t||"Patchy sleet possible"===t||"Blowing snow"===t||"Patchy moderate snow"===t||"Patchy heavy snow"===t||"Heavy snow"===t?2342:3897:"Partly cloudy"===t||"Overcast"===t||"Cloudy"===t?3164:"Patchy snow possible"===t||"Patchy sleet possible"===t||"Blowing snow"===t||"Patchy moderate snow"===t||"Patchy heavy snow"===t||"Heavy snow"===t?3430:760)),style:Oe.image,children:(0,M.jsx)(l.default,{style:Oe.container,children:(0,M.jsx)(f.default,{refreshControl:(0,M.jsx)(u.default,{refreshing:O,onRefresh:void(0,o.default)((function*(){yield C()}))}),children:(0,M.jsxs)(y.default,{style:Oe.containerContent,children:[(0,M.jsx)(ie,{address:x,loadForecast:C}),s?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(ge,{weather:s}),(0,M.jsx)(be,{weather:s}),(0,M.jsx)(xe,{weather:s})]}):(0,M.jsx)(d.default,{size:"large"})]})})})})};var Oe=s.default.create({container:{flex:1,paddingTop:p.default.statusBarHeight,height:"auto"},containerContent:{flex:1,margin:10},refresh:{alignItems:"center",justifyContent:"center"},largeIcon:{width:300,height:250},currentTemp:{fontSize:32,fontWeight:"bold",textAlign:"center"},image:{flex:1,justifyContent:"center",resizeMode:"cover"},currentDescription:{fontSize:24,width:"100%",fontWeight:"200",marginBottom:20}}),ve=(0,_.configureStore)({reducer:{address:F,weather:V}});function Pe(){return(0,M.jsx)(i.Provider,{store:ve,children:(0,M.jsx)(we,{})})}},1367:(e,t,r)=>{e.exports=r.p+"static/media/cloudy.8181a86e7cec2fddf8d9.gif"},760:(e,t,r)=>{e.exports=r.p+"static/media/night.017d94c2aeca2717c191.gif"},3164:(e,t,r)=>{e.exports=r.p+"static/media/partly-cloudy.b2bd9b7ca680c9a0105c.gif"},3446:(e,t,r)=>{e.exports=r.p+"static/media/patchy-rain-possible.e27b9d4992e9c7cce2bf.gif"},9280:(e,t,r)=>{e.exports=r.p+"static/media/rain.6803f95cb7e6bb78bc00.gif"},2342:(e,t,r)=>{e.exports=r.p+"static/media/snow.75482c43dd8d264a5d0c.gif"},3430:(e,t,r)=>{e.exports=r.p+"static/media/snowy-night.0cb8552a87994ff15739.gif"},3897:(e,t,r)=>{e.exports=r.p+"static/media/sunny.64c575da669e9d1eb57e.gif"}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.m=e,(()=>{var e=[];r.O=(t,n,i,o)=>{if(!n){var a=1/0;for(d=0;d<e.length;d++){for(var[n,i,o]=e[d],c=!0,l=0;l<n.length;l++)(!1&o||a>=o)&&Object.keys(r.O).every((e=>r.O[e](n[l])))?n.splice(l--,1):(c=!1,o<a&&(a=o));if(c){e.splice(d--,1);var s=i();void 0!==s&&(t=s)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,i,o]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/weather_app/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var i,o,[a,c,l]=n,s=0;if(a.some((t=>0!==e[t]))){for(i in c)r.o(c,i)&&(r.m[i]=c[i]);if(l)var d=l(r)}for(t&&t(n);s<a.length;s++)o=a[s],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[819],(()=>r(6271)));n=r.O(n)})();
//# sourceMappingURL=main.3dd121f7.js.map