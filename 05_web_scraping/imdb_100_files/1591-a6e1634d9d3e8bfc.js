"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1591],{5035:function(e,t,i){var s=i(26911);let r=/^0/;function a(e){let t=!0;return e.filter(e=>{if("literal"!==e.type||e.value.trim())t=!1;else{if(t)return!1;t=!0}return!0})}function n(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o;this.locales=e,this.unit="second",this.style=t.style||n.styles.LONG,this.isTimer=this.style===n.styles.TIMER,this._format=t.format||(this.isTimer?"{minutes}:{seconds}":"{seconds}"),this.formatUnits=t.formatUnits||o.formatUnits,this.formatDuration=t.formatDuration||o.formatDuration,this.shouldRound=!0===t.round}n.units={DAY:"day",HOUR:"hour",MINUTE:"minute",SECOND:"second"},n.styles={CUSTOM:"custom",TIMER:"timer",LONG:"long",SHORT:"short",NARROW:"narrow"},n.prototype.format=function(e){return this.formatToParts(e).map(e=>{let{value:t}=e;return t}).join("")},n.prototype.formatToParts=function(e){let t=new s.ZP(this._format,this.locales).formatToParts({second:{unit:n.units.SECOND},seconds:{unit:n.units.SECOND},minute:{unit:n.units.MINUTE},minutes:{unit:n.units.MINUTE},hour:{unit:n.units.HOUR},hours:{unit:n.units.HOUR},day:{unit:n.units.DAY},days:{unit:n.units.DAY}}),i=function(e,t,i,s){let r=e*d[t];if(s){let e=[n.units.SECOND,n.units.MINUTE,n.units.HOUR,n.units.DAY].find(e=>u(i,e)),t=r%d[e];2*t>=d[e]&&(r+=d[e]-t)}let a={};return[n.units.DAY,n.units.HOUR,n.units.MINUTE,n.units.SECOND].forEach(e=>{u(i,e)&&(a[e]=Math.floor(r/d[e]),r-=a[e]*d[e])}),a}(e,this.unit,t,this.shouldRound),r=t.reduce((e,t)=>e.concat(this._formatToken(t,i)),[]);return this._trimOutput(r,t)},n.prototype._formatToken=function(e,t){let{value:i}=e;if(i.unit){let e=t[i.unit];return e||this.isTimer?this._formatDurationToParts(i.unit,e):[]}return i?[{type:"literal",value:i}]:[]},n.prototype._formatDurationToParts=function(e,t){var i;return this.isTimer?[{type:e,value:this._formatValue(t)}]:(i=this.style,[n.styles.LONG,n.styles.SHORT,n.styles.NARROW].includes(i))?new Intl.NumberFormat(this.locales,{style:"unit",unit:e,unitDisplay:this.style}).formatToParts(t).map(t=>({type:"integer"===t.type?e:t.type,value:t.value})):this.formatDuration.split(l).map(i=>{if("{value}"===i)return{type:e,value:this._formatValue(t)};if("{unit}"===i){let i=this.formatUnits[e]||"{value}";return{type:"unit",value:new s.ZP(i,this.locales).format({value:t})}}if(i)return{type:"literal",value:i}}).filter(Boolean)},n.prototype._formatValue=function(e){return this.isTimer?e.toString().padStart(2,"0"):e.toString()},n.prototype._trimOutput=function(e,t){let i=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=a(a(e).reverse()).reverse();if(t){let e=i.find(e=>"literal"!==e.type);e.value=e.value.replace(r,"")}return i}(e,this.isTimer);if(!i.find(e=>"literal"!==e.type)){let e=[n.units.SECOND,n.units.MINUTE,n.units.HOUR,n.units.DAY].find(e=>u(t,e));return this._formatDurationToParts(e,0)}return i};let o={formatDuration:"{value} {unit}",formatUnits:{[n.units.DAY]:"{value, plural, one {day} other {days}}",[n.units.HOUR]:"{value, plural, one {hour} other {hours}}",[n.units.MINUTE]:"{value, plural, one {minute} other {minutes}}",[n.units.SECOND]:"{value, plural, one {second} other {seconds}}"},style:n.styles.LONG},l=/(\{value\}|\{unit\})/,d={day:86400,hour:3600,minute:60,second:1};function u(e,t){return!!e.find(e=>e.value.unit===t)}t.Z=n},55260:function(e,t,i){i.d(t,{C:function(){return r},v:function(){return a}});var s=i(57260);let r=(e,t,i,r)=>{let a=[{queryVariables:{first:t,sort:{by:s.y1.LIST_ORDER,order:"ASC"}},text:e.formatMessage(s.wG.LIST_ORDER),value:s.y1.LIST_ORDER},{queryVariables:{first:t,sort:{by:s.y1.ALPHABETICAL,order:"ASC"}},text:e.formatMessage(s.wG.ALPHABETICAL),value:s.y1.ALPHABETICAL},{queryVariables:{first:t,sort:{by:s.y1.IMDB_RATING,order:"DESC"}},text:e.formatMessage(s.wG.IMDB_RATING),value:s.y1.IMDB_RATING},{queryVariables:{first:t,sort:{by:s.y1.POPULARITY,order:"ASC"}},text:e.formatMessage(s.wG.POPULARITY),value:s.y1.POPULARITY},{queryVariables:{first:t,sort:{by:s.y1.NUMBER_OF_RATINGS,order:"ASC"}},text:e.formatMessage(s.wG.NUMBER_OF_RATINGS),value:s.y1.NUMBER_OF_RATINGS},{queryVariables:{first:t,sort:{by:s.y1.RELEASE_DATE,order:"ASC"}},text:e.formatMessage(s.wG.RELEASE_DATE),value:s.y1.RELEASE_DATE},{queryVariables:{first:t,sort:{by:s.y1.RUNTIME,order:"ASC"}},text:e.formatMessage(s.wG.RUNTIME),value:s.y1.RUNTIME},{queryVariables:{first:t,sort:{by:s.y1.DATE_ADDED,order:"ASC"}},text:e.formatMessage(s.wG.DATE_ADDED),value:s.y1.DATE_ADDED}];return i&&a.push({queryVariables:{first:t,sort:{by:s.y1.YOUR_RATING,order:"DESC"}},text:e.formatMessage(s.wG.YOUR_RATING),value:s.y1.YOUR_RATING,queryContext:{personalized:!0,serverSideCacheable:!1}}),r?.length&&(a=a.filter(e=>!r.includes(e.value))),a},a=(e,t,i,s)=>{let a=r(e,t,i);if(s&&s?.order&&s?.by){let e=a.findIndex(e=>e.value===s.by);a.splice(e,1,{...a[e],queryVariables:{...a[e].queryVariables,sort:{...a[e].queryVariables?.sort,order:s.order}}})}return a}},14133:function(e,t,i){var s=i(52322);i(2784);var r=i(53665),a=i(19596),n=i(45103),o=i(91842),l=i(31885),d=i(6935),u=i(66724),c=i(11438),f=i(86294);t.Z=e=>{let{hideListItemCount:t,index:i,listId:a,listMetadata:o,listTitle:p,listType:h,listSize:I,primaryConstData:T,postElement:y,refMarkerBase:x=c.Cd.EMPTY,className:E}=e,C=(0,r.Z)(),{userRatingsLinkBuilder:b,listMainLinkBuilder:A}=(0,u.WO)(),P="RATINGS"===h;if(!a||!p)return null;let S=(0,f.sU)("RATINGS"===h?l.lZo.Titles:h,I,C),R=(0,d.Gs)({height:T.primaryImage?.height,width:T.primaryImage?.width,url:T.primaryImage?.url},T.primaryImage?.caption),_=i+1;return(0,s.jsx)(n.MetaDataListSummaryItem,{"data-testid":"user-ll-item",className:E,preElement:(0,s.jsx)(m,{children:(0,s.jsx)(n.Poster,{ariaLabel:C.formatMessage({id:"common_ariaLabels_gotoList",defaultMessage:"View list page for {listTitle}"},{listTitle:p}),href:P?b({urconst:a,refSuffix:[c.Cd.POSTER,{t:x,n:_}]}):A({lsconst:a,refSuffix:[c.Cd.POSTER,{t:x,n:_}]}),dynamicWidth:!0,children:(0,s.jsx)(n.Poster.Image,{imageModel:R,imageType:T.fallbackImage,size:"m"})})}),subTextList:o,textList:t?[]:[{text:S}],title:p,titleLink:P?b({urconst:a,refSuffix:[c.Cd.TEXT,{t:x,n:_}]}):A({lsconst:a,refSuffix:[c.Cd.TEXT,{t:x,n:_}]}),postElement:y?(0,s.jsx)(g,{children:y}):void 0})};let m=a.default.div.withConfig({componentId:"sc-c290bd09-0"})(["display:flex;flex-shrink:0;margin-right:",";width:4.5rem;"],o.spacing.xs),g=a.default.div.withConfig({componentId:"sc-c290bd09-1"})(["width:fit-content;"])},47131:function(e,t,i){var s=i(52322),r=i(72779),a=i.n(r);i(2784);var n=i(53665),o=i(19596),l=i(45103),d=i(91842),u=i(31885),c=i(11438),f=i(14438),m=i(37179),g=i(71321);t.Z=e=>{let t,i,r,{listId:o,listName:l,onSelect:d,resultUrl:I,status:T,className:y}=e,x=(0,n.Z)(),E=(0,f.EO)(),{triggerExport:C}=(0,g.uC)({listId:o,showSuccessSnack:!0,refSuffix:[c.Cd.EXPORT_CARD,c.Cd.RETRY]}),b="",A="";switch(T){case u.UoV.Ready:b=x.formatMessage({id:"export_ready_aria",defaultMessage:"Start download for {listName}."},{listName:l}),i="accent2",t="file-download",A=x.formatMessage({id:"export_ready",defaultMessage:"Ready"}),r=()=>{I&&(E({pageAction:m.QJ.DOWNLOAD_EXPORT,refMarkerSuffix:c.Cd.EXPORT_CARD}),window.location.href=I)};break;case u.UoV.Processing:A=x.formatMessage({id:"export_in_progress",defaultMessage:"In progress"}),i="textSecondary",t="downloading";break;default:b=x.formatMessage({id:"export_failed_aria",defaultMessage:"Retry export for {listName}."},{listName:l}),i="accent3",t="refresh",A=x.formatMessage({id:"export_failed",defaultMessage:"Failed"}),r=()=>{C()}}return(0,s.jsx)(p,{ariaLabel:b,className:a()(T,y),"data-testid":"export-status-button",onColor:i,disabled:T===u.UoV.Processing,onSelect:d??r,postIcon:t,children:(0,s.jsx)(h,{children:A})})};let p=(0,o.default)(l.TextButton).withConfig({componentId:"sc-50aa7943-0"})(["&.","{&:hover{cursor:default;}}svg{height:1.25rem;width:1.25rem;}"],u.UoV.Processing),h=o.default.span.withConfig({componentId:"sc-50aa7943-1"})(["margin-right:",";"],d.spacing.xxs)},34396:function(e,t,i){i.d(t,{_:function(){return x}});var s=i(52322),r=i(72579),a=i.n(r),n=i(2784),o=i(19596),l=i(91842),d=i(68701),u=i(11438),c=i(14438),f=i(37179),m=i(79241),g=i(83682),p=i.n(g),h=i(45103);let I=e=>{let{itemId:t,item:i,index:r}=e,a=(0,n.useRef)(null),o=(0,h.useBreakpointsAsConfig)(),l=o.s||o.xs;return(0,s.jsx)(s.Fragment,{children:!!i.image&&(0,s.jsx)(T,{id:t,"data-testid":t,width:i.image.maxWidth,height:i.image.maxHeight,href:i.href,className:"image-item-wrapper",ref:a,children:(0,s.jsx)(y,{loading:r<6?"eager":"lazy","data-testid":"image-gallery-image",imageModel:i.image,width:a.current?.offsetWidth||(l?480:820)})})})},T=o.default.a.withConfig({componentId:"sc-309c8597-0"})(["",""],e=>e.width&&e.height&&(0,o.css)(["width:","px;flex-grow:",";","{width:","px;flex-grow:",";}"],200*e.width/e.height,200*e.width/e.height,l.mediaQueries.breakpoints.below.m,120*e.width/e.height,120*e.width/e.height)),y=(0,o.default)(p()).withConfig({componentId:"sc-309c8597-1"})(["height:auto;vertical-align:middle;width:100%;"]),x=e=>{let{total:t,items:i,pagination:r,endCursor:o,onPagination:l,enableIndexPagination:g,indexPaginationProps:p}=e,h=(0,c.EO)(),[T,y]=(0,n.useState)(i??[]),[x,C]=(0,n.useState)(o??void 0),b=!!r&&!!t&&t>(i?.length??0),[A,P]=(0,n.useState)(b);return((0,n.useEffect)(()=>{y(i??[]),C(o??void 0),P(b)},[i]),T.length)?(0,s.jsxs)("section",{"data-testid":"sub-section-images",children:[(0,s.jsx)(E,{children:T.map((e,t)=>{if(!e.image)return;let i=`${e.id}-img-${t}`;return(0,s.jsx)(I,{itemId:i,item:e,index:t},i)})}),!g&&!!A&&!!r?.query&&(0,s.jsx)(d.ZP,{queryOptions:{query:r.query,variables:{after:x,...r?.queryVariables},context:r?.queryContext??{serverSideCacheable:!0,personalized:!1}},onDataReceived:e=>{let{items:t}=r?.transform(e)??{items:[]};if(t){let e=[...T,...t];y(e),l?.(e?.length)}if(r?.pathToPageInfo){let{hasNextPage:t,endCursor:i}=a()(e,r.pathToPageInfo)??{};t&&i?(P(!0),C(i)):(P(!1),C(void 0))}},onError:(e,t)=>{h({pageAction:f.QJ.PAGINATION_ERROR,refMarkerSuffix:[u.Cd.INTERSECTION_PAGINATION,u.Cd.ERROR]}),t&&h({pageAction:f.QJ.PAGINATION_ERROR_AND_DATA,refMarkerSuffix:[u.Cd.INTERSECTION_PAGINATION,u.Cd.ERROR,u.Cd.DATA]})},onFetch:()=>{h({pageAction:f.QJ.PAGINATION_NEXT,refMarkerSuffix:[u.Cd.INTERSECTION_PAGINATION,u.Cd.FETCH]})},intersectionOptions:r?.intersectionOptions}),!!g&&!!p&&(0,s.jsx)(m.ZP,{...p})]}):null},E=o.default.div.withConfig({componentId:"sc-cbdea9e6-0"})(["display:flex;flex-basis:100%;flex-flow:row wrap;gap:",";.image-item-wrapper{animation:skeleton-loading 1s linear infinite alternate;@keyframes skeleton-loading{0%{background-color:hsl(200deg 20% 80%);}100%{background-color:hsl(200deg 20% 95%);}}}"],l.spacing.xxs)},79241:function(e,t,i){i.d(t,{X8:function(){return u}});var s=i(52322);i(2784);var r=i(53665),a=i(19596),n=i(45103),o=i(91842);let l={NEXT:"index-pagination-nxt",PARENT:"index-pagination",PREVIOUS:"index-pagination-prv",SELECT:"index-pagination-select"},d={NEXT:{id:"common_pagination_next",defaultMessage:"Next"},PREVIOUS:{id:"common_pagination_previous",defaultMessage:"Previous"},COUNT:{id:"common_pagination_count",defaultMessage:"{current} of {total}"}},u=e=>{let{previousButtonProps:t,nextButtonProps:i,selectPageProps:a}=e,o=(0,r.Z)();if(!t&&!i&&!a)return null;let u=[];if(a&&a.totalPages>0)for(let e=1;e<=a.totalPages;e++){let t=e.toString();u.push({text:t,value:t})}return(0,s.jsxs)(c,{"data-testid":l.PARENT,children:[!!t&&(0,s.jsx)(n.ResponsiveButton,{...t,"data-testid":l.PREVIOUS,iconName:t.iconName||"chevron-left",label:t.label||o.formatMessage(d.PREVIOUS),ariaLabel:t.ariaLabel||o.formatMessage(d.PREVIOUS),onColor:t.onColor||"accent2",width:t.width||"half-padding"}),!!a&&(0,s.jsx)(c,{children:(0,s.jsx)(n.SimpleSelect,{...a,"data-testid":l.SELECT,orientLabel:"override-value-in-select",label:o.formatMessage(d.COUNT,{current:a.currentPage,total:a.totalPages}),options:u,value:a.currentPage.toString(),onChange:e=>{let t=Number(e);t&&t!==a.currentPage&&a.onChange(t)}})}),!!i&&(0,s.jsx)(n.ResponsiveButton,{...i,"data-testid":l.NEXT,isPostIcon:!0,iconName:i.iconName||"chevron-right",label:i.label||o.formatMessage(d.NEXT),ariaLabel:i.ariaLabel||o.formatMessage(d.NEXT),onColor:i.onColor||"accent2",width:i.width||"half-padding"})]})};t.ZP=u;let c=a.default.div.withConfig({componentId:"sc-703e34b1-0"})(["display:flex;flex-direction:row;align-items:center;justify-content:center;gap:",";margin-top:",";margin-bottom:",";"],o.spacing.s,o.spacing.s,o.spacing.s)},68701:function(e,t,i){i.d(t,{Yv:function(){return f}});var s=i(52322),r=i(2784),a=i(19596),n=i(45103),o=i(54588),l=i(14149),d=i(78716);let u="IntersectionPagination",c={rootMargin:"1000px"},f=e=>{let{queryOptions:t,onDataReceived:i,onFetch:a,onError:n,intersectionOptions:f}=e,g=(0,r.useRef)(null),[{data:p,fetching:h,error:I},T]=(0,d.p)({queryOptions:t,ref:g,options:{intersectionOptions:f??c,continueObserving:!0},onIntersection:a});return(0,r.useEffect)(()=>{(p||I)&&(p&&i(p),I&&n(I,p))},[p,I]),(0,s.jsxs)(o.Z,{name:u,children:[(0,s.jsx)("div",{ref:g,"data-testid":"ip_ref"}),h&&(0,s.jsx)(m,{}),I&&!p&&(0,s.jsx)(l.Kj,{name:u,canRetry:!0,onClickRetry:T})]})};t.ZP=f;let m=(0,a.default)(n.Loader).withConfig({componentId:"sc-9101c047-0"})(["min-height:2rem;"])},53801:function(e,t,i){i.d(t,{Z:function(){return em}});var s=i(52322),r=i(14973),a=i(5632),n=i(2784),o=i(53665),l=i(19596),d=i(45103),u=i(91842),c=i(23387),f=i(16711),m=i(14133),g=i(71610),p=i(1280),h=i(54073),I=i.n(h),T=i(71411);let y=(0,i(81999).vU)({listSearchTitle:{id:"list_search_label",defaultMessage:"Search within this list"},listSearchError:{id:"list_search_error",defaultMessage:"No matches found."}}),x=e=>{let{value:t,onChange:i,onDebouncedChange:r,onClear:a,showError:l,...d}=e,u=(0,o.Z)(),c=(0,n.useCallback)(I()(e=>{r(e)},500),[]);return(0,s.jsx)(E,{ariaLabel:u.formatMessage(y.listSearchTitle),errorText:l?u.formatMessage(y.listSearchError):void 0,className:"list-search-input",name:"list-search",label:u.formatMessage(y.listSearchTitle),preIcon:"search",postIcon:t?.length?"clear":void 0,onPostIconClick:a,value:t,onChange:e=>{i(e),c(e)},onKeyDown:e=>(0,T.S)(e,250),...d})},E=(0,l.styled)(d.TextInput).withConfig({componentId:"sc-5ebd9012-0"})(["margin-left:auto;margin-bottom:",";"],u.spacing.s);var C=i(82177),b=i(80136),A=i(34396),P=i(79241),S=i(41330),R=i(68701),_=i(4658),M=i(14149),N=i(31885),L=i(86958),v=i(41174),D=i(54729),O=i(66724),w=i(11438),j=i(14438),F=i(37179),V=i(30115),$=i(83163),k=i(48687),U=i(88472),q=i(15534),G=i(9028),Z=i(11209),B=i(77037),Q=e=>{let{selectedFilters:t,setSelectedFilters:i,ariaLabel:r,filterId:a,filterValues:n,id:o,label:l,filterKey:u,isMultiValue:c,personalized:f}=e,m=(0,B.uT)();return(0,s.jsx)(d.CheckBox,{ariaLabel:r,checked:(0,B.Um)(n,a),iconActiveColor:"accent2",id:o,label:l,onChange:e=>{let s=(0,B.nq)(e,n,a,l);m({isAddFilter:e,filterIngress:w.Cd.PROMPT,filterKey:u,filterValue:a}),i({...t,[u]:{isMultiValue:c,personalized:f,values:s}})}})};let H=l.default.div.withConfig({componentId:"sc-d581790a-0"})([""," "," margin-bottom:",";"],(0,u.setTypographyType)("overline"),(0,u.setPropertyToColorVar)("color","ipt-on-baseAlt-accent1-color"),u.spacing.s),Y=l.default.div.withConfig({componentId:"sc-d581790a-1"})([""," "," align-items:center;display:inline-flex;flex-wrap:wrap;gap:",";width:100%;"],(0,u.setTypographyType)("body"),(0,u.setPropertyToColorVar)("color","ipt-on-baseAlt-textPrimary-color"),u.spacing.xs);var z=e=>{let{selectedFilters:t,setSelectedFilters:i}=e,r=(0,o.Z)(),a=t?.[Z.uN.status]?.values??[];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(H,{children:r.formatMessage(Z.kF.STATUS)}),(0,s.jsxs)(Y,{children:[(0,s.jsx)(Q,{selectedFilters:t,setSelectedFilters:i,ariaLabel:r.formatMessage(Z.kF.READY_ARIA),filterId:N.UoV.Ready,filterValues:a,id:Z.cK.READY_FILTER,label:r.formatMessage(Z.kF.READY),filterKey:Z.uN.status,isMultiValue:!0,personalized:!0}),(0,s.jsx)(Q,{selectedFilters:t,setSelectedFilters:i,ariaLabel:r.formatMessage(Z.kF.IN_PROGRESS_ARIA),filterId:N.UoV.Processing,filterValues:a,id:Z.cK.IN_PROGRESS_FILTER,label:r.formatMessage(Z.kF.IN_PROGRESS),filterKey:Z.uN.status,isMultiValue:!0,personalized:!0}),(0,s.jsx)(Q,{selectedFilters:t,setSelectedFilters:i,ariaLabel:r.formatMessage(Z.kF.FAILED_ARIA),filterId:N.UoV.Failed,filterValues:a,id:Z.cK.FAILED_FILTER,label:r.formatMessage(Z.kF.FAILED),filterKey:Z.uN.status,isMultiValue:!0,personalized:!0})]})]})},K=i(73807),W=e=>{let{isListOwner:t,selectedFilters:i,setSelectedFilters:r}=e,a=(0,o.Z)(),n=i[Z.l5.anyVisibilities]?.values??[],l=i[Z.l5.anyListTypes]?.values??[];return(0,s.jsxs)(s.Fragment,{children:[t&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(H,{children:a.formatMessage(Z.Mr.PRIVACY)}),(0,s.jsxs)(Y,{children:[(0,s.jsx)(Q,{selectedFilters:i,setSelectedFilters:r,ariaLabel:a.formatMessage(Z.Mr.PUBLIC_ARIA),filterId:N.CyQ.Public,filterValues:n,id:Z.$_.PUBLIC_FILTER,label:a.formatMessage(Z.Mr.PUBLIC),filterKey:Z.l5.anyVisibilities,isMultiValue:!0,personalized:!0}),(0,s.jsx)(Q,{selectedFilters:i,setSelectedFilters:r,ariaLabel:a.formatMessage(Z.Mr.PRIVATE_ARIA),filterId:N.CyQ.Private,filterValues:n,id:Z.$_.PRIVATE_FILTER,label:a.formatMessage(Z.Mr.PRIVATE),filterKey:Z.l5.anyVisibilities,isMultiValue:!0,personalized:!0})]}),(0,s.jsx)(d.PageSectionDivider,{})]}),(0,s.jsx)(H,{children:a.formatMessage(Z.Mr.LIST_TYPE)}),(0,s.jsxs)(Y,{children:[(0,s.jsx)(Q,{selectedFilters:i,setSelectedFilters:r,ariaLabel:a.formatMessage(Z.Mr.TITLES_ARIA),filterId:N.lZo.Titles,filterValues:l,id:Z.$_.TITLES_FILTER,label:a.formatMessage(Z.Mr.TITLES),filterKey:Z.l5.anyListTypes,isMultiValue:!0,personalized:!!t}),(0,s.jsx)(Q,{selectedFilters:i,setSelectedFilters:r,ariaLabel:a.formatMessage(Z.Mr.PEOPLE_ARIA),filterId:N.lZo.People,filterValues:l,id:Z.$_.PEOPLE_FILTER,label:a.formatMessage(Z.Mr.PEOPLE),filterKey:Z.l5.anyListTypes,isMultiValue:!0,personalized:!!t}),(0,s.jsx)(Q,{selectedFilters:i,setSelectedFilters:r,ariaLabel:a.formatMessage(Z.Mr.IMAGES_ARIA),filterId:N.lZo.Images,filterValues:l,id:Z.$_.IMAGES_FILTER,label:a.formatMessage(Z.Mr.IMAGES),filterKey:Z.l5.anyListTypes,isMultiValue:!0,personalized:!!t}),(0,s.jsx)(Q,{selectedFilters:i,setSelectedFilters:r,ariaLabel:a.formatMessage(Z.Mr.VIDEOS_ARIA),filterId:N.lZo.Videos,filterValues:l,id:Z.$_.VIDEOS_FILTER,label:a.formatMessage(Z.Mr.VIDEOS),filterKey:Z.l5.anyListTypes,isMultiValue:!0,personalized:!!t})]})]})},X=i(7156),J=e=>{let{filterByState:t,selectedFilters:i,setFilterByState:r}=e,a=(0,B.uT)();return(0,s.jsx)(X.Z,{selectedFilters:i,onFilterChange:e=>{let{newSelectedFilters:i,filterKey:s,filterValue:n}=e;r({...t,isFetching:!0,selectedFilters:i,shouldIssueQuery:!0}),a({isAddFilter:!1,filterIngress:w.Cd.CHIP,filterKey:s,filterValue:n})}})},ee=i(27323),et=i(4170),ei=i(8830),es=i(43318),er=i(78153),ea=i(86008),en=i(25436),eo=i(49624),el=i(1833),ed=i(36230),eu=i(57066),ec=i(87657),ef=i(86054),em=e=>{let t,i,{customViewProps:l,filterByProps:u,listItems:h,listType:I,pageQueryVariables:T,paginatedQueryInfo:y,setListItems:E,sortByProps:S,totalItems:Z,totalPossibleItems:B,enableIndexPagination:Q=!1,initialPageNumber:H,isListOwner:Y,isPrivateList:X,emptyText:em,filteredEmptyText:ex,alwaysShowItemNumbers:eE}=e,eC=(0,o.Z)(),{nameMainLinkBuilder:eb}=(0,O.WO)(),eA=(0,v.nu)(),eP=(0,a.useRouter)(),eS=(0,L.B)().context,{pageConst:eR,subPageType:e_}=eS,eM=(0,k.hg)({weblabID:$.lh.IMDB_NEXT_LIST_SEARCH_956966,treatments:{T1:!0}}),eN=(0,k.hg)({weblabID:$.lh.IMDB_ULTRA_COMPACT_LIST_1210332,treatments:{T1:!0}}),eL=(0,j.EO)(),ev=I===N.lZo.Images,eD=I===N.lZo.People,eO=I===N.lZo.Titles,ew=!l?.listItemType&&(eD||eO),ej=!l?.listItemType&&!ev,{personalizedDataMap:eF,shouldFetchOtherUserRatings:eV}=function(e){let{listItems:t,setListItems:i,pageConst:s,subPageType:r,isListOwner:a,isTitleList:o}=e,[l,d]=(0,n.useState)({}),u=o?(0,ef.Dh)(t):[],c=r===en.SubPageType.RATINGS&&!a,f=(0,v.mg)(u,!o,c?s:void 0);return(0,n.useEffect)(()=>{if(!f?.data)return;let e={...l};f?.data?.titles.forEach(t=>{t?.id&&(e[t?.id]=t)}),i((0,es.qA)(t,e,c)),d(e)},[f?.data]),{personalizedDataMap:l,shouldFetchOtherUserRatings:c}}({listItems:h,setListItems:E,pageConst:eR,subPageType:e_,isListOwner:Y,isTitleList:eO}),{totalListItems:e$,pageNumber:ek,totalPages:eU,filterByState:eq,sortByState:eG,queryVariables:eZ,filterQueryVariables:eB,sortOptions:eQ,queryContext:eH,selectedFilters:eY,hasNextPage:ez,showListResults:eK,setFilterByState:eW,setSortByState:eX,setQueryVariables:eJ,setHasNextPage:e0,resetToPage1:e1,onPageChange:e5,retryFilterQuery:e4}=function(e){let{listType:t,totalItems:i,initialPageNumber:s,paginatedQueryInfo:r,filterByProps:a,sortByProps:o,isPrivateList:l,pageQueryVariables:d,isListOwner:u,intl:c,router:f,enableIndexPagination:m,isLoggedIn:g,isTitleList:p,personalizedDataMap:h,shouldFetchOtherUserRatings:I,setListItems:T}=e,y=(0,L.B)().context,{subPageType:x}=y,[E,C]=(0,n.useState)(i),[b,A]=(0,n.useState)(r?.pageInfo?.hasNextPage??!1),{pageNumber:P,totalPages:S,onPageChange:R,resetToPage1:_}=function(e){let{initialPageNumber:t,totalListItems:i,router:s,enableIndexPagination:r,setJumpToPositionQueryVar:a,issueQuery:o}=e,[l,d]=(0,n.useState)(t??1),u=Math.ceil(i/U.x0),c=e=>{let t=(0,el.f_)(s.asPath,ei.y,e?.toString());s.push(t,void 0,{shallow:!0})};return{pageNumber:l,totalPages:u,onPageChange:e=>{let t=(0,ec.B)(e,U.x0);d(e),a(t),o(),c(1===e?void 0:e)},resetToPage1:()=>{r&&(a(1),d(1),c(void 0))}}}({initialPageNumber:s,totalListItems:E,router:f,enableIndexPagination:m,setJumpToPositionQueryVar:e=>{F({...j,jumpToPosition:e})},issueQuery:()=>{$({...V,isFetching:!0,retryQuery:H,shouldIssueQuery:!0})}}),M=o?.sortOptions?.find(e=>e.value===o?.initialSelectionValue)?.queryVariables||{},[D,O]=(0,n.useState)({selectedSortOption:o?.sortOptions.find(e=>e.value===o.initialSelectionValue),isFetching:!1}),w=(0,es.Dm)(o?.sortOptions??[],l),[j,F]=(0,n.useState)({after:r?.pageInfo?.endCursor,...M,...d||{}}),[V,$]=(0,n.useState)({error:void 0,isFetching:!1,lastUpdatedFilterKey:"",retryQuery:void 0,selectedFilters:a?.selectedFilters??{},searchText:"",shouldIssueQuery:!1}),k=V?.selectedFilters??{},Z=x===en.SubPageType.EXPORTS||!!D?.selectedSortOption?.queryContext?.personalized||!!(Object.values(k).some(e=>e.personalized)||u),B={serverSideCacheable:!Z,personalized:Z},Q=(0,es.Ff)(a?.promptType,V?.selectedFilters,a?.inTheatersLocation,a?.singleUserRatingsInfo?.userId,a?.includeAdultTitles,V?.searchText),H=()=>$({...V,shouldIssueQuery:!0}),Y=a?.query;if(!Y)switch(t){case N.lZo.Videos:Y=ed.xr;break;case N.lZo.Images:Y=ed.dm;break;default:Y=G.eN}let[{data:z,error:K}]=(0,v.E8)({query:Y,context:B,variables:{...j,...Q,after:void 0},pause:!V.shouldIssueQuery});(0,n.useEffect)(()=>{if(z){if(a&&a?.itemsTransform){let{items:e,pageInfo:t,totalItems:i=0}=a.itemsTransform(z),s=p?(0,es.qA)(e,h,I):e;F({...j,after:t?.endCursor}),T(s),A(t.hasNextPage),$({...V,error:void 0,isFetching:!1,lastUpdatedFilterKey:"",retryQuery:void 0,shouldIssueQuery:!1}),C(i),(0,es.lW)({facetFields:a?.facetFields,inTheatersLocation:a.inTheatersLocation,isLoggedIn:g,promptType:a.promptType,router:f,selectedFilters:k,singleUserRatingUserId:a.singleUserRatingsInfo?.userId,searchText:V.searchText})}else if(m&&(t===N.lZo.Videos||t===N.lZo.Images)){let{items:e}=({[N.lZo.Videos]:e=>(0,eu.E)(e,c,y),[N.lZo.Images]:e=>(0,q.k)(e,y)})[t](z);T(e),$({...V,error:void 0,isFetching:!1,shouldIssueQuery:!1})}}else K&&$({...V,error:K,isFetching:!1,retryQuery:H,shouldIssueQuery:!1})},[z,K]),(0,n.useEffect)(()=>{if(p&&a?.myRatingsFilterProps?.myRatingsFilterValue!==void 0){let e={...V?.selectedFilters},t=a.myRatingsFilterProps.myRatingsFilterValue;t===eo.EW.None&&e[er.UJ.myRatingConstraint]?(delete e[er.UJ.myRatingConstraint],$({...V,isFetching:!0,selectedFilters:e,shouldIssueQuery:!0})):t!==eo.EW.None&&(e={...e,...(0,ea.Dv)(c,t)},$({...V,isFetching:!0,selectedFilters:e,shouldIssueQuery:!0}))}},[a?.myRatingsFilterProps?.myRatingsFilterValue]);let W=!D?.isFetching&&!D?.error&&!V?.isFetching&&!V?.error;return{totalListItems:E,pageNumber:P,totalPages:S,filterByState:V,sortByState:D,queryVariables:j,filterQueryVariables:Q,sortOptions:w,queryContext:B,selectedFilters:k,hasNextPage:b,showListResults:W,setFilterByState:e=>{_(),$(e)},setSortByState:O,setQueryVariables:F,setHasNextPage:A,resetToPage1:_,onPageChange:R,retryFilterQuery:H}}({listType:I,totalItems:Z,initialPageNumber:H,paginatedQueryInfo:y,filterByProps:u,sortByProps:S,isPrivateList:X,pageQueryVariables:T,isListOwner:Y,intl:eC,router:eP,enableIndexPagination:Q,isLoggedIn:eA,isTitleList:eO,personalizedDataMap:eF,shouldFetchOtherUserRatings:eV,setListItems:E}),{viewType:e2,setViewType:e3}=(0,D.UC)({forceFeature:!0,initialValue:l?.initialView??C.c.DETAILED,listType:I}),e8=(0,es.Zf)(I,e2),[e7,e9]=(0,n.useState)(u?.searchText||""),e6=eE||eG?.selectedSortOption?.value===N.Gkv.ListOrder;!function(e){let{router:t,pageNumber:i,filterByState:s,sortByState:r,onPageChange:a}=e;(0,n.useEffect)(()=>{let e=e=>{let t=Number(new URLSearchParams(e.split("?")[1]??"").get(ei.y)??1);r?.isFetching||s?.isFetching||t===i||(a(t),(0,es.cr)(G.kA.MC_PARENT))};return t.events.on("routeChangeComplete",e),()=>t.events.off("routeChangeComplete",e)},[t])}({router:eP,pageNumber:ek,filterByState:eq,sortByState:eG,onPageChange:e5});let te=e=>{eW({...eq,searchText:e,isFetching:!0,retryQuery:e4,shouldIssueQuery:!0})},tt=eK&&0===Z&&!B,ti=eK&&Z>0&&!h.length,ts=eC.formatMessage({id:"list_page_empty_text",defaultMessage:"This list is empty."});if(tt)return(0,s.jsx)(d.PageSection,{sidePadding:"pageMargin",className:G.kA.MC_PARENT,children:(0,s.jsx)(eT,{children:em||ts})});switch(u?.promptType){case G.Nr.Lists:t=W;break;case G.Nr.Title:t=et.Z;break;case G.Nr.Exports:t=z}l?.listItemType&&l?.listItemType===G.EA.UserListListItem&&(i=m.Z);let tr={previousButtonProps:{disabled:1===ek,onSelect:()=>{eL({refMarkerSuffix:[w.Cd.INDEX_PAGINATION,w.Cd.PREVIOUS],pageAction:F.QJ.PAGINATION_PREV,hitType:r.HitType.PAGE_HIT}),e5(ek-1),(0,es.cr)(G.kA.MC_PARENT)}},nextButtonProps:{disabled:ek===eU,onSelect:()=>{eL({refMarkerSuffix:[w.Cd.INDEX_PAGINATION,w.Cd.NEXT],pageAction:F.QJ.PAGINATION_NEXT,hitType:r.HitType.PAGE_HIT}),e5(ek+1),(0,es.cr)(G.kA.MC_PARENT)}},selectPageProps:{id:"listPagination",totalPages:eU,currentPage:ek||1,onChange:e=>{eL({refMarkerSuffix:[w.Cd.INDEX_PAGINATION,w.Cd.SELECT],pageAction:F.QJ.PAGINATION_NEXT,hitType:r.HitType.PAGE_HIT}),e5(e),(0,es.cr)(G.kA.MC_PARENT)}}};return(0,s.jsxs)(d.PageSection,{sidePadding:"pageMargin",className:G.kA.MC_PARENT,children:[(0,s.jsxs)(eg,{children:[(0,s.jsx)(ee.Z,{listType:I,totalItems:e$,pageSize:Q?U.x0:void 0,pageNumber:Q?ek:void 0}),(0,s.jsxs)(ep,{className:u?"has-filtering":"",children:[u&&!eD&&(0,s.jsx)(K.Z,{children:(0,s.jsx)(t,{facetFields:u?.facetFields,hiddenFilters:u?.hiddenFilters,isListOwner:u?.isListOwner,selectedFilters:eY,setSelectedFilters:e=>{eW({...eq,isFetching:!0,selectedFilters:e,shouldIssueQuery:!0})},singleUserRatingsInfo:u?.singleUserRatingsInfo,myRatingsFilterProps:u?.myRatingsFilterProps})}),S&&(0,s.jsx)(_.h,{...S,additionalQueryVariables:{...eZ,...eB,after:void 0},directionToggleProps:{sortByVariableName:S?.directionToggleProps?.sortByVariableName??"by",sortOrderVariableName:S?.directionToggleProps?.sortOrderVariableName??"order"},queryContext:eH,onDataReceived:(e,t)=>{let{items:i,pageInfo:s}=S?.itemsTransform(e?.data,eb)??{},r=eO?(0,es.qA)(i,eF,eV):i;eJ({...eZ,sort:t.queryVariables?.sort,after:s.endCursor}),eX({selectedSortOption:t,isFetching:!1}),E(r),e0(s.hasNextPage),(0,V.WN)(eP,S?.queryParamMap[t?.value],t.queryVariables?.sort?.order??t.queryVariables?.sort?.sortOrder)},onError:(e,t)=>{eX({error:e,isFetching:!1,retryQuery:t})},onFetchingStatusChange:(e,t)=>{e&&e1(),eX({selectedSortOption:t,error:void 0,isFetching:e,retryQuery:void 0})},sortOptions:eQ})]}),ej&&(0,s.jsx)(eh,{"data-testid":G.z7.MC_VIEW_OPTIONS,children:(0,s.jsx)(f.ZP,{hiddenViews:l?.hiddenViews,setSelectedView:e3,selectedView:e2})})]}),(0,s.jsx)(J,{filterByState:eq,selectedFilters:eY,setFilterByState:eW}),ev&&eK&&(0,s.jsx)(A._,{endCursor:y?.pageInfo?.endCursor,items:h,pagination:y?{query:y.query,queryContext:eH,queryVariables:{first:y.pageSize,lsConst:eR},transform:e=>{let t=(0,q.z)(e?.list,eS);return e0(e.list?.imageItems?.pageInfo?.hasNextPage??!1),{endCursor:e.list?.imageItems?.pageInfo.endCursor,items:t,total:e.list?.items?.total}},pathToPageInfo:"list.imageItems.pageInfo",intersectionOptions:{rootMargin:e8}}:void 0,total:e$,enableIndexPagination:Q,indexPaginationProps:tr}),ew&&eM&&(0,s.jsx)(x,{"data-testid":G.z7.MC_SEARCH,value:e7,onChange:e=>{e9(e.target.value||"")},onDebouncedChange:e=>{te(e.target.value||"")},onClear:()=>{e9(""),te("")},showError:h?.length===0&&e7?.length>0}),eK&&!ti&&ej&&(0,s.jsxs)("div",{"data-testid":G.z7.MC_LIST_CONTENT,children:[e2===C.c.DETAILED&&(0,s.jsx)(g.Z,{items:h,listType:I,batchRenderingProps:{renderingType:Q?"delayed":"intersection",rootMargin:e8},showItemNumbersInConstText:e6}),e2===C.c.GRID&&(0,s.jsx)(p.Z,{items:h,listType:I,batchRenderingProps:{renderingType:Q?"delayed":"intersection",rootMargin:e8},showItemNumbersInConstText:e6}),e2===C.c.COMPACT&&ew&&(0,s.jsx)(c.Z,{items:h,listType:I,batchRenderingProps:{renderingType:Q?"delayed":"intersection",rootMargin:e8},showItemNumbersInConstText:e6}),eN&&e2===C.c.ULTRA_COMPACT&&ew&&(0,s.jsx)(b.Z,{items:h,listType:I,batchRenderingProps:{renderingType:Q?"delayed":"intersection",rootMargin:e8},showItemNumbersInConstText:e6})]}),eK&&!ti&&!ej&&!ev&&(0,s.jsx)("div",{"data-testid":G.z7.MC_LIST_CONTENT,children:(0,s.jsx)(ey,{dividers:"between",children:h.map((e,t)=>(0,s.jsx)(i,{index:t,...e},`custom-list-item-${t}-${e.titleId}`))})}),ti&&(0,s.jsx)(eT,{children:ex}),eG?.error&&!eG?.isFetching||eq?.error&&!eq?.isFetching&&(0,s.jsx)(M.ZP,{canRetry:!0,error:eG?.error??eq?.error,name:"ListPageMainColumn",onClickRetry:()=>{eG?.error&&eG?.retryQuery?.(),eq?.error&&eq?.retryQuery?.()}}),(eG?.isFetching||eq?.isFetching)&&(0,s.jsx)(eI,{"data-testid":G.z7.MC_REFINER_CHANGE_LOADER,children:(0,s.jsx)(d.Loader,{})}),!Q&&y&&!ev&&ez&&eK&&(0,s.jsx)(R.Yv,{queryOptions:{query:y.query,variables:{...eZ,...eB,first:y?.pageSize},context:eH},onDataReceived:e=>{let{pageInfo:t,items:i}=y?.itemsTransform(e,h)??{};eJ({...eZ,after:t?.endCursor}),E(i),e0(t.hasNextPage)},onError:(e,t)=>{eL({refMarkerSuffix:[w.Cd.INTERSECTION_PAGINATION,w.Cd.ERROR],pageAction:F.QJ.PAGINATION_ERROR}),t&&eL({refMarkerSuffix:[w.Cd.INTERSECTION_PAGINATION,w.Cd.ERROR,w.Cd.DATA],pageAction:F.QJ.PAGINATION_ERROR_AND_DATA})},onFetch:()=>{eL({refMarkerSuffix:[w.Cd.INTERSECTION_PAGINATION,w.Cd.FETCH],pageAction:F.QJ.PAGINATION_NEXT})},intersectionOptions:{rootMargin:e8}}),Q&&eU>1&&y&&!ev&&eK&&(0,s.jsx)(P.ZP,{...tr})]})};let eg=l.default.div.withConfig({componentId:"sc-bb54f377-0"})(["align-items:center;display:flex;flex-flow:row wrap;margin-bottom:",";width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"],u.spacing.m),ep=l.default.div.withConfig({componentId:"sc-bb54f377-1"})(["align-items:center;display:flex;order:3;.","{min-width:1rem;}","{justify-content:end;width:100%;}&.has-filtering{","{.","{display:none;}}","{justify-content:space-between;}}"],S.Wp,u.mediaQueries.breakpoints.below.l,u.mediaQueries.breakpoints.below.m,S.Wp,u.mediaQueries.breakpoints.below.l),eh=l.default.div.withConfig({componentId:"sc-bb54f377-2"})(["order:5;width:fit-content;","{order:2;}"],u.mediaQueries.breakpoints.below.l),eI=l.default.div.withConfig({componentId:"sc-bb54f377-3"})(["align-items:center;display:flex;height:20rem;justify-content:center;"]),eT=l.default.div.withConfig({componentId:"sc-bb54f377-4"})(["margin-top:",";"],u.spacing.m),ey=(0,l.default)(d.MetaDataList).withConfig({componentId:"sc-bb54f377-5"})(["margin-bottom:",";","{",";border:1px solid ",";padding:",";}","{border-bottom:1px solid ",";border-top:1px solid ",";}"],u.spacing.s,u.mediaQueries.breakpoints.above.s,(0,u.setPropertyToShapeVar)("border-radius","ipt-cornerRadius"),(0,u.getColorVar)("ipt-base-border-color"),u.spacing.s,u.mediaQueries.breakpoints.below.m,(0,u.getColorVar)("ipt-base-border-color"),(0,u.getColorVar)("ipt-base-border-color"))},46780:function(e,t,i){i.d(t,{v:function(){return eb}});var s=i(52322),r=i(2784),a=i(53665),n=i(19596),o=i(45103),l=i(91842),d=i(6221),u=i(91359),c=i(66724),f=i(11438),m=i(14438),g=i(37179),p=i(6935);let h=e=>{let{listItems:t}=e,i=(0,a.Z)(),{titleMainLinkBuilder:n}=(0,c.WO)(),[l,h]=(0,r.useState)(void 0),I=(0,m.EO)();if(!t.length)return null;let E=t[l??0],C=(0,p.K0)({height:E.primaryImage?.height,width:E.primaryImage?.width,url:E.primaryImage?.url},E.primaryImage?.caption??"");return(0,s.jsxs)(y,{"data-testid":"prt-parent",children:[(0,s.jsx)(o.Title,{className:"prt-title",description:i.formatMessage({id:"pickRandomTitle_description",defaultMessage:"Randomly pick something from this list"}),padding:"none",children:i.formatMessage({id:"pickRandomTitle_title",defaultMessage:"What should I watch?"})}),void 0!==l&&(0,s.jsxs)(x,{children:[(0,s.jsx)(o.Poster,{ariaLabel:i.formatMessage(u.F.GO_TO,{target:E.titleText}),className:"prt-poster",href:n({tconst:E.titleId,refSuffix:f.Cd.EMPTY}),dynamicWidth:!0,imageProps:{imageModel:C,imageType:E.titleType.id,size:"m"}}),(0,s.jsx)(d.ZP,{className:"prt-selected-item-metadata",index:l,listItem:E,selectorPrefix:"prt",showItemNumbersInConstText:!1})]}),(0,s.jsx)(o.Button,{ariaLabel:i.formatMessage({id:"pickRandomTitle_pick_new_item",defaultMessage:"Pick a new item"}),"data-testid":"prt-btn",onSelect:()=>{let e=T(t.length);for(;t.length>1&&e===l;)e=T(t.length);h(e),I({pageAction:g.QJ.RANDOM_NUMBER_GENERATOR,refMarkerSuffix:f.Cd.EMPTY})},children:i.formatMessage({id:"pickRandomTitle_pick_new_item",defaultMessage:"Pick a new item"})})]})};var I=e=>(0,s.jsx)(f.xm,{value:f.Cd.PICK_RANDOM_TITLE,children:(0,s.jsx)(h,{...e})});let T=e=>Math.floor(Math.random()*e),y=n.default.div.withConfig({componentId:"sc-8581a80d-0"})(["display:flex;flex-direction:column;gap:",";padding:0 ",";.prt-title{margin:0;}.prt-poster{display:flex;flex-shrink:0;margin-right:",";width:4.5rem;}"],l.spacing.m,(0,l.getSpacingVar)("ipt-pageMargin"),l.spacing.xs),x=n.default.div.withConfig({componentId:"sc-8581a80d-1"})(["display:flex;flex-direction:row;align-items:center;"]);var E=i(10105),C=i(90297),b=i(84314),A=i(4363),P=i(55634),S=i(38129),R=i(93184),_=i(30382),M=i.n(_);let N=M()`
    query YouHaveRatedFromList($listId: ID!) {
        ratedCount: advancedTitleSearch(
            first: 0
            constraints: {
                myRatingConstraint: { filterType: INCLUDE }
                listConstraint: { inAnyList: [$listId] }
            }
        ) {
            total
        }
        notRatedCount: advancedTitleSearch(
            first: 0
            constraints: {
                myRatingConstraint: { filterType: EXCLUDE }
                listConstraint: { inAnyList: [$listId] }
            }
        ) {
            total
        }
    }
`,L=e=>{let{listId:t,shouldHideRatedTitles:i,onChangeRatedVisibility:r,csmOnLoadHandler:a,csaOnLoadHandler:n,cel_widget_id:o,className:l}=e,d=(0,b.n)(),[u]=(0,A.E)({query:N,variables:{listId:t},context:{serverSideCacheable:!1,personalized:!0},pause:!d});if((0,S.LQ)(u,a,n),!d||u.error)return null;if(u.fetching)return(0,s.jsx)(E.ZP,{height:R.fY});let c=u.data?.ratedCount?.total,f=u.data?.notRatedCount?.total;return c&&f?(0,s.jsx)(S.Lz,{componentId:P.NG.YouHaveRated,children:(0,s.jsx)(v,{baseColor:"none",topPadding:"none",bottomPadding:"none",cel_widget_id:o,"data-testid":o,className:l,children:(0,s.jsx)(C.g,{ratedTitleCount:c,totalTitleCount:c+f,shouldHideRatedTitles:i,onChangeRatedVisibility:r})})}):null},v=(0,n.default)(o.PageSection).withConfig({componentId:"sc-14d62a8f-0"})([""]);var D=i(14865),O=i(45455),w=i.n(O),j=i(31885),F=i(23906),V=i(47131),$=i(30952),k=i(3322),U=i(96459);let q=M()`
    fragment ExportPreviewCard on ExportDetail {
        startedOn
        totalExportedObjects
        status {
            id
        }
        resultUrl
        expiresOn
        exportType
        ... on ListExportDetail {
            listExportMetadata {
                id
                authorNickname
                listClassId
                listType
                name
            }
        }
    }
`,G=e=>{let t,i,r,{exportData:n,index:o,className:l}=e,d=(0,a.Z)(),u=(0,F.wL)("ExportPreviewCard"),{exportsLinkBuilder:m}=(0,c.WO)();if(n.exportType===j.tM1.List){let e=n.listExportMetadata;if(!e)return null;t=e.name,e.listClassId===j.JQJ.WatchList?t=d.formatMessage({id:"export_title_watchlist",defaultMessage:"{authorName}'s Watchlist"},{authorName:e.authorNickname}):e.listClassId===j.JQJ.CheckIns&&(t=d.formatMessage({id:"export_title_checkins",defaultMessage:"{authorName}'s Check-Ins"},{authorName:e.authorNickname})),i=e.id,r=e.listType}else{if(n.exportType!==j.tM1.Ratings)return u.error(`Failed to render ExportPreviewCard of unrecognized export type: ${n.exportType}`),null;t=d.formatMessage($.JP),i=$.oe,r=j.lZo.Titles}return(0,s.jsx)(k.Ok,{borderType:"line",className:l,"data-testid":`export-preview-card-${i}`,children:(0,s.jsxs)(B,{children:[(0,s.jsx)(k.dy,{href:m({refSuffix:{t:f.Cd.CARD,n:o}}),children:(0,s.jsxs)(k.lU,{children:[(0,s.jsx)(k.Gv,{className:"listName",children:t}),(0,s.jsx)(U.l,{displayDate:n.expiresOn,displayDateStringId:$.Vy,itemCount:n.totalExportedObjects||void 0,itemType:$.wK[r]})]})}),(0,s.jsx)(Z,{listId:i,listName:t,resultUrl:n.resultUrl,status:n.status.id??j.UoV.Failed})]})})},Z=(0,n.default)(V.Z).withConfig({componentId:"sc-84ff7f0b-0"})(["flex:0 0 auto;"]),B=n.default.div.withConfig({componentId:"sc-84ff7f0b-1"})(["display:flex;justify-content:space-between;"]);var Q=i(82951);let H=M()`
    query YourExports($first: Int!) {
        getExports(
            first: $first
            input: { exportTypes: [LIST, RATINGS] }
            sort: { by: STARTED_ON, order: DESC }
        ) {
            edges {
                node {
                    ...ExportPreviewCard
                }
            }
        }
    }
    ${q}
`,Y=e=>{let{exportsLinkBuilder:t}=(0,c.WO)(),i=e=>{let t=e?.getExports.edges;return!t||w()(t)?[]:t?.map((e,t)=>s.jsx(G,{exportData:e.node,index:t+1},`sidebar-exports-item-${t}`))};return(0,s.jsx)(S.Lz,{componentId:P.NG.YourExports,children:(0,s.jsx)(Q.i,{id:"exports",showCreateListLink:!1,queryOptions:{query:H,variables:{first:R.kg},context:{serverSideCacheable:!1,personalized:!0,emitMetrics:{noData:(e,t)=>w()(t?.getExports.edges)}},pause:(0,D.getIsNode)()},titleString:R.se,titleHref:t({refSuffix:f.Cd.SIDEBAR}),queryToCardTransform:e=>i(e),queryTransform:()=>[],...e})})};var z=i(66456),K=i(58656);let W=e=>{let t=(0,z.I)(),{userListsLinkBuilder:i}=(0,c.WO)();return t?(0,s.jsx)(S.Lz,{componentId:P.NG.YourLists,children:(0,s.jsx)(Q.i,{id:"your",titleString:R.YU,titleHref:i({urconst:t,refSuffix:f.Cd.EMPTY}),showCreateListLink:!0,useLastModifiedDate:!0,queryOptions:{query:K.O_,variables:{first:R.in},context:{serverSideCacheable:!1,personalized:!0},pause:(0,D.getIsNode)()},queryTransform:e=>e.lists.edges,...e})}):null};var X=i(83163),J=i(48687),ee=i(87801);let et=e=>{let{checkinsData:t}=e,i=(0,a.Z)(),r=(0,z.I)(),{listCheckinsLinkBuilder:n,userCheckinsLinkBuilder:o}=(0,c.WO)(),l=i.formatMessage(R.uw),d=(0,p.K0)(t?.primaryImage?.image,l),u=r?o({urconst:r,refSuffix:ee.C.SEE_MORE}):n({refSuffix:ee.C.SEE_MORE});return(0,s.jsx)(k.Ok,{borderType:"line",children:(0,s.jsx)(k.dy,{href:u,children:(0,s.jsxs)(k.CC,{children:[(0,s.jsxs)(k.lU,{subtext:!0,children:[(0,s.jsx)(k.Gv,{className:"listName",children:l}),(0,s.jsx)(U.l,{displayDateStringId:R.$B,displayDate:t?.lastModifiedDate,itemCount:t?.items?.total,itemType:$.wK.TITLES,fallbackMessage:R.cj})]}),(0,s.jsx)(ei,{children:(0,s.jsx)(es,{className:"poster",size:"xs",imageModel:d,imageType:"movie"})})]})})})},ei=n.default.div.withConfig({componentId:"sc-5c197938-0"})(["padding:",";"],l.spacing.xxs),es=(0,n.default)(o.PosterImage).withConfig({componentId:"sc-5c197938-1"})(["height:100%;"]),er=e=>{let{ratingsData:t}=e,i=(0,a.Z)(),r=(0,z.I)(),{listRatingsLinkBuilder:n,userRatingsLinkBuilder:o}=(0,c.WO)(),l=i.formatMessage(R.tu),d=(0,p.K0)(t?.edges[0]?.node?.title.primaryImage,l),u=r?o({urconst:r,refSuffix:ee.C.SEE_MORE}):n({refSuffix:ee.C.SEE_MORE});return(0,s.jsx)(k.Ok,{borderType:"line",children:(0,s.jsx)(k.dy,{href:u,children:(0,s.jsxs)(k.CC,{children:[(0,s.jsxs)(k.lU,{subtext:!0,children:[(0,s.jsx)(k.Gv,{className:"listName",children:l}),(0,s.jsx)(U.l,{displayDateStringId:R.$B,displayDate:t?.edges[0]?.node?.title?.userRating?.date,itemCount:t?.total,itemType:$.wK.TITLES,fallbackMessage:R.dx})]}),(0,s.jsx)(ea,{children:(0,s.jsx)(en,{className:"poster",size:"xs",imageModel:d,imageType:"movie"})})]})})})},ea=n.default.div.withConfig({componentId:"sc-d4a79fad-0"})(["padding:",";"],l.spacing.xxs),en=(0,n.default)(o.PosterImage).withConfig({componentId:"sc-d4a79fad-1"})(["height:100%;"]),eo=e=>{let{watchHistoryData:t}=e,i=(0,a.Z)(),r=(0,z.I)(),{listWatchHistoryLinkBuilder:n,userWatchHistoryLinkBuilder:o}=(0,c.WO)(),l=i.formatMessage(R.vc),d=(0,p.K0)(t?.edges[0]?.node?.title.primaryImage,l),u=r?o({urconst:r,refSuffix:f.Cd.SEE_MORE}):n({refSuffix:f.Cd.SEE_MORE});return(0,s.jsx)(k.Ok,{borderType:"line",children:(0,s.jsx)(k.dy,{href:u,children:(0,s.jsxs)(k.CC,{children:[(0,s.jsxs)(k.lU,{subtext:!0,children:[(0,s.jsx)(k.Gv,{className:"listName",children:l}),(0,s.jsx)(U.l,{displayDateStringId:R.$B,displayDate:t?.edges[0]?.node?.watchedStatus.firstWatched,itemCount:t?.total,itemType:$.wK.TITLES,fallbackMessage:R.KG})]}),(0,s.jsx)(el,{children:(0,s.jsx)(ed,{className:"poster",size:"xs",imageModel:d,imageType:"movie"})})]})})})},el=n.default.div.withConfig({componentId:"sc-1b02d52b-0"})(["padding:",";"],l.spacing.xxs),ed=(0,n.default)(o.PosterImage).withConfig({componentId:"sc-1b02d52b-1"})(["height:100%;"]),eu=e=>{let{watchlistData:t}=e,i=(0,a.Z)(),r=(0,z.I)(),{listWatchlistLinkBuilder:n,userWatchlistLinkBuilder:o}=(0,c.WO)(),l=i.formatMessage(R.Qq),d=(0,p.K0)(t?.primaryImage?.image,l),u=r?o({urconst:r,refSuffix:f.Cd.SEE_MORE}):n({refSuffix:f.Cd.SEE_MORE});return(0,s.jsx)(k.Ok,{borderType:"line",children:(0,s.jsx)(k.dy,{href:u,children:(0,s.jsxs)(k.CC,{children:[(0,s.jsxs)(k.lU,{subtext:!0,children:[(0,s.jsx)(k.Gv,{className:"listName",children:l}),(0,s.jsx)(U.l,{displayDateStringId:R.$B,displayDate:t?.lastModifiedDate,itemCount:t?.items?.total,itemType:$.wK.TITLES,fallbackMessage:R.n7})]}),(0,s.jsx)(ec,{children:(0,s.jsx)(ef,{className:"poster",size:"xs",imageModel:d,imageType:"movie"})})]})})})},ec=n.default.div.withConfig({componentId:"sc-9f470883-0"})(["padding:",";"],l.spacing.xxs),ef=(0,n.default)(o.PosterImage).withConfig({componentId:"sc-9f470883-1"})(["height:100%;"]),em=e=>{if(!(0,b.n)())return null;let t=(0,J.hg)({weblabID:X.lh.IMDB_NEXT_WATCHED_FEATURE_1045775,treatments:{T1:!0}})??!1,i=e=>[(0,s.jsx)(et,{checkinsData:e?.checkins},"sidebar-predefined-checkins"),(0,s.jsx)(er,{ratingsData:e?.ratings},"sidebar-predefined-ratings"),(0,s.jsx)(eu,{watchlistData:e?.watchlist},"sidebar-predefined-watchlist"),...t?[(0,s.jsx)(eo,{watchHistoryData:e?.watchHistory},"sidebar-predefined-watchhistory")]:[]];return(0,s.jsx)(S.Lz,{componentId:P.NG.YourPredefinedLists,children:(0,s.jsx)(Q.i,{id:"predefined",showCreateListLink:!1,useLastModifiedDate:!0,queryOptions:{query:K.L8,context:{serverSideCacheable:!1,personalized:!0},pause:(0,D.getIsNode)()},queryToCardTransform:e=>i(e),queryTransform:()=>[],...e})})};var eg=i(47521),ep=i(25436),eh=i(86528),eI=i(49996),eT=i(49624),ey=i(9028);let ex={id:"list_sidebar_feedback_heading",defaultMessage:"Feedback"},eE={id:"list_sidebar_feedback_link",defaultMessage:"Tell us what you think about this feature."},eC={id:"list_sidebar_feedback_report",defaultMessage:"Report this list"},eb=e=>{let{isListOwner:t,listType:i,myRatingsFilterProps:r,titleListItems:n}=e,l=(0,a.Z)(),{pageType:d,subPageType:u,pageConst:c}=(0,eI.y)(),{value:m}=(0,f.Lz)(),g=t&&d===ep.PageType.USER&&u===ep.SubPageType.LISTS,p=i===j.lZo.Titles&&!!c&&d===ep.PageType.LIST&&u===ep.SubPageType.MAIN,h=(0,J.hg)({weblabID:X.lh.IMDB_PICK_RANDOM_TITLE_916019,treatments:{T1:!0}})&&i===j.lZo.Titles&&n&&n.length>1&&[ep.SubPageType.CHECKINS,ep.SubPageType.RATINGS,ep.SubPageType.WATCHLIST,ep.SubPageType.MAIN].includes(u)&&(!t||u!==ep.SubPageType.CHECKINS)&&(!t||u!==ep.SubPageType.RATINGS),T=d===ep.PageType.USER&&u in[ep.SubPageType.CHECKINS,ep.SubPageType.RATINGS,ep.SubPageType.WATCHLIST],y=`https://help.imdb.com/article/imdb/general-information/getsatisfaction-community-access-you-re-about-to-leave-imdb-com/GP4FF3REXES9AR3P?ref_=cons_${m}_lst_fdbk`,x=r?.myRatingsFilterValue===eT.EW.TitlesIDidNotRate;return(0,s.jsx)(eh.Z,{children:(0,s.jsxs)(eA,{children:[p&&(0,s.jsx)(L,{listId:c,shouldHideRatedTitles:x,onChangeRatedVisibility:e=>{r&&r.setMyRatingsFilterValue(e?eT.EW.TitlesIDidNotRate:eT.EW.None)}}),!T&&(0,s.jsx)(em,{}),!g&&(0,s.jsx)(W,{}),u!==ep.SubPageType.EXPORTS&&(0,s.jsx)(Y,{}),(0,s.jsx)(o.PageSection,{topPadding:"none",bottomPadding:"none",baseColor:"none","data-testid":ey.z7.SIDEBAR_FEEDBACK_FEATURE,children:(0,s.jsxs)(o.ListCard,{borderType:"line",children:[(0,s.jsx)(o.Title,{padding:"none",children:l.formatMessage(ex)}),(0,s.jsx)(o.TextLink,{text:l.formatMessage(eE),href:y}),d===ep.PageType.LIST&&u===ep.SubPageType.MAIN&&!t&&(0,s.jsx)(o.TextLink,{className:"list-sidebar-report-link",href:`https://help.imdb.com/contact?deepLink=list_report&disableLoginPopup=true&list=${c}&ref_=${m}_ttls_rpt`,text:l.formatMessage(eC)})]})}),h&&(0,s.jsx)(I,{listItems:n??[]})]})})},eA=n.default.div.withConfig({componentId:"sc-216f7109-0"})([""," .list-sidebar-report-link{margin-top:",";}"],eg.n,l.spacing.m)},69424:function(e,t,i){i.d(t,{NJ:function(){return o},Tv:function(){return n},Vs:function(){return a},_Z:function(){return d},l5:function(){return l},lC:function(){return c},m7:function(){return u}});var s=i(87801),r=i(30115);let a=s.l.LIST_MAIN,n={LIST_ORDER:"LIST_ORDER",ALPHABETICAL:"NAME",POPULARITY:"POPULARITY",DATE_ADDED:"DATE_ADDED"},o={LIST_ORDER:{id:"common_sort_by_list_order",defaultMessage:"List order"},ALPHABETICAL:{id:"common_sort_by_alphabetical",defaultMessage:"Alphabetical"},POPULARITY:{id:"common_sort_by_starmeter",defaultMessage:"STARmeter"},DATE_ADDED:{id:"common_sort_by_date_added",defaultMessage:"Date added"}},l={[n.LIST_ORDER]:r.kq.LIST_ORDER,[n.ALPHABETICAL]:r.kq.ALPHABETICAL,[n.POPULARITY]:r.kq.POPULARITY,[n.DATE_ADDED]:r.kq.DATE_ADDED},d={LIST_ORDER:"LIST_ORDER",DATE_ADDED:"CREATED_DATE"},u={LIST_ORDER:{id:"common_sort_by_list_order",defaultMessage:"List order"},DATE_ADDED:{id:"common_sort_by_date_added",defaultMessage:"Date added"}},c={[d.LIST_ORDER]:r.kq.LIST_ORDER,[d.DATE_ADDED]:r.kq.DATE_ADDED}},36230:function(e,t,i){i.d(t,{N1:function(){return c},QF:function(){return f},dm:function(){return m},xr:function(){return g}});var s=i(30382),r=i.n(s),a=i(64072),n=i(88758),o=i(80032),l=i(36543),d=i(97149),u=i(56941);r()`
    query ListMainListMetadata($lsConst: ID!) {
        list(id: $lsConst) {
            author {
                userId
            }
            listClass {
                id
            }
            listType {
                id
            }
            ...ListMainInteractions
            items(first: 0) {
                total
            }
        }
    }
    ${u.Bu}
`;let c=r()`
    query TitleListMainPage(
        $first: Int!
        $lsConst: ID!
        $after: String
        $filter: AdvancedTitleSearchConstraints
        $sort: TitleListSearchSort
        $jumpToPosition: Int
        $isInPace: Boolean!
    ) {
        list(id: $lsConst) {
            ...UserListListItemMetadata
            titleListItemSearch(
                first: $first
                after: $after
                filter: $filter
                sort: $sort
                jumpToPosition: $jumpToPosition
            ) {
                total
                pageInfo {
                    hasNextPage
                    hasPreviousPage
                    endCursor
                }
                edges {
                    node {
                        ...ListSearchItemMetadata
                    }
                    listItem: title {
                        ...TitleListItemMetadata
                        ...TitleTotalEpisodes
                        ...TitleTopCastAndCrew
                        ...TitleListItemMetascore
                    }
                }
            }
        }
    }
    ${o.EC}
    ${l.Zz}
    ${l.f1}
    ${l.Dl}
    ${l._A}
    ${o.O4}
`;r()`
    query TitleListMainPageFacetFieldsAndTotal($lsConst: ID!) {
        list(id: $lsConst) {
            titleListItemSearch(first: 0) {
                ...TitleListFacetFields
                total
            }
        }
    }
    ${l.qp}
`;let f=r()`
    query NameListMainPage(
        $first: Int!
        $lsConst: ID!
        $originalTitleText: Boolean
        $refTagQueryParam: String
        $after: String
        $sort: NameListSearchSort
        $filter: AdvancedNameSearchConstraints
        $jumpToPosition: Int
        $isInPace: Boolean! = false
    ) {
        list(id: $lsConst) {
            ...UserListListItemMetadata
            nameListItemSearch(
                first: $first
                after: $after
                sort: $sort
                filter: $filter
                jumpToPosition: $jumpToPosition
            ) {
                total
                pageInfo {
                    hasNextPage
                    hasPreviousPage
                    endCursor
                }
                edges {
                    node {
                        ...ListSearchItemMetadata
                    }
                    listItem: name {
                        ...NameListItemMetadata
                    }
                }
            }
        }
    }
    ${o.EC}
    ${n.E}
    ${o.O4}
`,m=r()`
    query ImageListMainPage(
        $first: Int!
        $lsConst: ID!
        $after: ID
        $jumpToPosition: Int
    ) {
        list(id: $lsConst) {
            ...UserListListItemMetadata
            imageItems: items(
                first: $first
                after: $after
                jumpToPosition: $jumpToPosition
            ) {
                total
                pageInfo {
                    hasNextPage
                    hasPreviousPage
                    endCursor
                }
                edges {
                    node {
                        ...ViewListItemMetadata
                        listItem {
                            ...ImageListItemMetadata
                        }
                    }
                }
            }
        }
    }
    ${o.nq}
    ${a.w}
    ${o.O4}
`,g=r()`
    query VideoListMainPage(
        $first: Int!
        $lsConst: ID!
        $after: ID
        $sort: ListItemSort = { by: LIST_ORDER, order: ASC }
        $jumpToPosition: Int
    ) {
        list(id: $lsConst) {
            ...UserListListItemMetadata
            videoItems: items(
                first: $first
                after: $after
                sort: $sort
                jumpToPosition: $jumpToPosition
            ) {
                total
                pageInfo {
                    hasNextPage
                    hasPreviousPage
                    endCursor
                }
                edges {
                    node {
                        ...ViewListItemMetadata
                        listItem {
                            ...VideoListItemMetadata
                        }
                    }
                }
            }
        }
    }
    ${o.nq}
    ${d.X}
    ${o.O4}
`},15534:function(e,t,i){i.d(t,{k:function(){return a},z:function(){return n}});var s=i(4689),r=i(24298);let a=(e,t)=>{let{authorMetadata:i,createdDate:s,description:a,lastModifiedDate:o,listType:l,name:d,total:u}=(0,r.yr)(e);return{authorMetadata:i,createdDate:s,description:a,lastModifiedDate:o,listType:l,name:d,items:n(e.list,t),total:u}},n=(e,t)=>{let i=e?.imageItems?.edges,r=[];return i?.forEach(e=>{let i=s.Q(e.node,t);r.push(i)}),r}},55412:function(e,t,i){i.d(t,{A0:function(){return d},Xb:function(){return l},v9:function(){return o}});var s=i(34764),r=i(31885),a=i(69424),n=i(24298);let o=(e,t)=>{let{authorMetadata:i,createdDate:s,description:r,lastModifiedDate:a,listType:o,name:d,total:u}=(0,n.yr)(e);return{authorMetadata:i,createdDate:s,description:r,items:l(e.list,t),lastModifiedDate:a,listType:o,name:d,total:u}},l=(e,t)=>{let i=e?.nameListItemSearch?.edges,r=[];return i?.forEach(e=>{let i=s.Hv({...e.node,listItem:e.listItem},t);r.push(i)}),r},d=(e,t,i)=>[{queryVariables:{first:t,sort:{by:a.Tv.LIST_ORDER,order:r.Asd.Asc}},text:e.formatMessage(a.NJ.LIST_ORDER),value:a.Tv.LIST_ORDER},{queryVariables:{first:t,sort:{by:a.Tv.POPULARITY,order:r.Asd.Asc}},text:e.formatMessage(a.NJ.POPULARITY),value:a.Tv.POPULARITY},{queryVariables:{first:t,sort:{by:a.Tv.ALPHABETICAL,order:r.Asd.Asc}},text:e.formatMessage(a.NJ.ALPHABETICAL),value:a.Tv.ALPHABETICAL},{queryVariables:{first:t,sort:{by:a.Tv.DATE_ADDED,order:r.Asd.Asc}},text:e.formatMessage(a.NJ.DATE_ADDED),value:a.Tv.DATE_ADDED}].map(e=>e.value!==i?.by?e:{...e,queryVariables:{...e.queryVariables,sort:{...e?.queryVariables?.sort,order:i.order}}})},24298:function(e,t,i){i.d(t,{CX:function(){return m},I:function(){return g},yr:function(){return f}});var s=i(57260),r=i(55260),a=i(31885),n=i(87657),o=i(69424),l=i(36230),d=i(55412),u=i(13726),c=i(57066);let f=e=>{let t=e.list?.name?.originalText??"",i=e?.list?.author?.nickName??e?.list?.author?.userId??"",s=e.list?.items?.total??0,r=e.list?.listType?.id;return{authorMetadata:{authorName:i,authorId:e.list?.author?.userId||""},createdDate:e.list?.createdDate,name:t,description:{markdown:e.list?.description?.originalText?.markdown??"",plaidHtml:e.list?.description?.originalText?.plaidHtml??"",plainText:e.list?.description?.originalText?.plainText??""},lastModifiedDate:e.list?.lastModifiedDate,listType:r,total:s}},m=(e,t,i,s,r,d,u,c)=>{let f,m;let g={first:s,lsConst:t,jumpToPosition:c?(0,n.B)(c,s):void 0};switch(e){case a.lZo.Titles:f=l.N1,m={...g,filter:u,sort:d,isInPace:r};break;case a.lZo.People:f=l.QF,m={...g,refTagQueryParam:o.Vs,originalTitleText:i,filter:u,sort:d,isInPace:r};break;case a.lZo.Images:f=l.dm,m=g;break;case a.lZo.Videos:f=l.xr,m={...g,sort:d}}return{pageQuery:f,pageQueryVariables:m}},g=(e,t,i,n,f,m,g)=>{switch(e){case a.lZo.Titles:return{query:l.N1,queryParamMap:s.G6,initialSelectionValue:g?.by??s.y1.LIST_ORDER,itemsTransform:e=>{let t=(0,u.t)(e?.list,m);return{pageInfo:e?.list?.titleListItemSearch?.pageInfo??{hasNextPage:!1,hasPreviousPage:!1,endCursor:""},items:t,totalItems:e?.list?.titleListItemSearch?.total}},sortOptions:(0,r.v)(t,f,n,g)};case a.lZo.People:return{query:l.QF,queryParamMap:o.l5,initialSelectionValue:g?.by??o.Tv.LIST_ORDER,itemsTransform:e=>{let t=(0,d.Xb)(e?.list,m);return{pageInfo:e?.list?.nameListItemSearch?.pageInfo??{hasNextPage:!1,hasPreviousPage:!1,endCursor:""},items:t,totalItems:e?.list?.nameListItemSearch?.total}},sortOptions:(0,d.A0)(t,f,g)};case a.lZo.Videos:return{query:l.xr,queryParamMap:o.lC,initialSelectionValue:g?.by??o._Z.LIST_ORDER,itemsTransform:e=>{let s=(0,c.UV)(e?.list,i,t);return{pageInfo:e?.list?.videoItems?.pageInfo??{hasNextPage:!1,hasPreviousPage:!1,endCursor:""},items:s,totalItems:e?.list?.videoItems?.total}},sortOptions:(0,c.uI)(t,f,g)};default:return}}},13726:function(e,t,i){i.d(t,{T:function(){return a},t:function(){return n}});var s=i(86054),r=i(24298);let a=(e,t)=>{let{authorMetadata:i,createdDate:s,description:a,lastModifiedDate:o,listType:l,name:d}=(0,r.yr)(e);return{authorMetadata:i,createdDate:s,description:a,items:n(e.list,t),lastModifiedDate:o,listType:l,name:d,total:e?.list?.titleListItemSearch?.total??0}},n=(e,t)=>{let i=e?.titleListItemSearch?.edges,r=[];return i?.forEach(e=>{let i=s.GI({...e.node,listItem:e.listItem},t);r.push(i)}),r}},57066:function(e,t,i){i.d(t,{E:function(){return o},UV:function(){return l},uI:function(){return d}}),i(45455);var s=i(19705),r=i(31885),a=i(69424),n=i(24298);let o=(e,t,i)=>{let{authorMetadata:s,createdDate:r,description:a,lastModifiedDate:o,listType:d,name:u,total:c}=(0,n.yr)(e);return{authorMetadata:s,createdDate:r,description:a,items:l(e.list,i,t),lastModifiedDate:o,listType:d,name:u,total:c}},l=(e,t,i)=>{let r=e?.videoItems?.edges,a=[];return e&&r&&r?.forEach(e=>{if(!e.node||!e.node.listItem)return;let r=s.Rz(e.node,t,i);a.push(r)}),a},d=(e,t,i)=>[{queryVariables:{first:t,sort:{by:a._Z.LIST_ORDER,order:r.Asd.Asc}},text:e.formatMessage(a.m7.LIST_ORDER),value:a._Z.LIST_ORDER},{queryVariables:{first:t,sort:{by:a._Z.DATE_ADDED,order:r.Asd.Asc}},text:e.formatMessage(a.m7.DATE_ADDED),value:a._Z.DATE_ADDED}].map(e=>e.value!==i?.by?e:{...e,queryVariables:{...e.queryVariables,sort:{...e?.queryVariables?.sort,order:i.order}}})},56941:function(e,t,i){i.d(t,{Bu:function(){return l},OO:function(){return u},Xd:function(){return f},b3:function(){return m}});var s=i(30382),r=i.n(s),a=i(64072),n=i(80032),o=i(97149);let l=r()`
    fragment ListMainInteractions on List {
        allTimeInteractions: listInteractionCounts(timeRanges: [ALL_TIME]) {
            views
        }
        weekInteractions: listInteractionCounts(timeRanges: [ONE_WEEK]) {
            views
        }
    }
`,d=r()`
    fragment ListItemEdge on ListItemEdge {
        node {
            ...EditListItemMetadata
            listItem {
                ... on Title {
                    id
                    titleText {
                        text
                    }
                    titleType {
                        id
                        text
                        canHaveEpisodes
                        displayableProperty {
                            value {
                                plainText
                            }
                        }
                    }
                    originalTitleText {
                        text
                    }
                    primaryImage {
                        id
                        width
                        height
                        url
                        caption {
                            plainText
                        }
                    }
                    releaseYear {
                        year
                        endYear
                    }
                    releaseDate {
                        day
                        month
                        year
                    }
                    productionStatus {
                        currentProductionStage {
                            id
                            text
                        }
                    }
                    ratingsSummary {
                        aggregateRating
                        voteCount
                    }
                    runtime {
                        seconds
                    }
                    certificate {
                        rating
                    }
                    canRate {
                        isRatable
                    }
                    series {
                        series {
                            id
                            originalTitleText {
                                text
                            }
                            releaseYear {
                                endYear
                                year
                            }
                            titleText {
                                text
                            }
                        }
                    }
                }
                ... on Name {
                    id
                    primaryImage {
                        url
                        caption {
                            plainText
                        }
                        width
                        height
                    }
                    nameText {
                        text
                    }
                }
                ... on Image {
                    ...ImageListItemMetadata
                }
                ... on Video {
                    ...VideoListItemMetadata
                }
            }
        }
    }
    ${n.rc}
    ${a.w}
    ${o.X}
`,u=r()`
    fragment ListItems on List {
        listItems: items(
            first: $first
            sort: $sort
            jumpToPosition: $jumpToPosition
        ) {
            edges {
                ...ListItemEdge
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                endCursor
            }
            total
        }
    }
    ${d}
    ${n.rc}
    ${a.w}
    ${o.X}
`,c=r()`
    fragment ListPaginationItems on List {
        listItems: items(first: $first, sort: $sort) {
            edges {
                ...ListItemEdge
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                endCursor
            }
            total
        }
    }
    ${d}
    ${n.rc}
    ${a.w}
    ${o.X}
`,f=r()`
    query ListPageSort(
        $first: Int!
        $lsConst: ID!
        $sort: ListItemSort!
        $jumpToPosition: Int!
    ) {
        list(id: $lsConst) {
            ...ListItems
        }
    }
    ${u}
`,m=r()`
    query ListPagePagination(
        $first: Int!
        $lsConst: ID!
        $after: ID
        $sort: ListItemSort!
    ) {
        list(id: $lsConst) {
            ...ListPaginationItems
        }
    }
    ${c}
`},8830:function(e,t,i){i.d(t,{y:function(){return s}});let s="page"},88472:function(e,t,i){i.d(t,{JF:function(){return n},KC:function(){return r},x0:function(){return a}});var s=i(31885);let r=250,a=250;s.Gkv.DateAdded,s.Asd.Desc;let n={LISTS:"lists.pageInfo"}},78716:function(e,t,i){i.d(t,{p:function(){return d}});var s=i(2784),r=i(72008),a=i(99546),n=i(89105),o=i(4363);let l={fetching:!0,stale:!1},d=e=>{let{queryOptions:t,ref:i,pause:d,options:u,onIntersection:c}=e,f=(0,n.OV)(),m=!u?.disableAds&&f,[g,p]=(0,s.useState)(!1),[h,I]=(0,s.useState)(!1),T=(0,r.Jf)(i,!u?.continueObserving&&h,p);(0,a.S)(i,T,{...u?.intersectionOptions}),(0,s.useEffect)(()=>{g&&c?.()},[g]);let y=!u?.disableIntersection&&!g,[x,E]=(0,o.E)({...t,pause:m||y||d||!1});return((0,s.useEffect)(()=>{x?.data&&I(!0)},[x?.data]),x.data||x.error)?[x,E]:[l,E]}},98757:function(e,t,i){var s,r,a,n;i.d(t,{$y:function(){return r},CV:function(){return o},m8:function(){return s}}),(a=s||(s={})).PersonName="name",a.ShowAllCredits="showAllCredits",(n=r||(r={})).Name="name",n.BirthDate="birth_date",n.DeathDate="death_date",n.Awards="groups",n.Lists="lists",n.Filmography="roles",n.Sort="sort",n.Adult="adult",n.GenderIdentity="gender",n.Birthday="birth_monthday",n.PageTopic="has",n.Biography="bio",n.BirthPlace="birth_place",n.DeathPlace="death_place",n.Quotes="quotes",n.Trivia="trivia",n.Count="count",n.BioAuthor="bio_author",n.BirthYear="birth_year";let o=e=>({key:"name",value:e})}}]);