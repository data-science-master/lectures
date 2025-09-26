"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7548],{15367:function(e,t,i){i.d(t,{v:function(){return P}});var r=i(52322);i(2784);var s=i(53665),a=i(19596),n=i(88169),o=i(86704),l=i(49996),d=i(69864),u=i(11438),c=i(50738);let g=e=>{let{item:t,renderAtIdealWidth:i,href:s,onSelect:a,testid:o}=e;if(!s&&!a)return null;let{image:l,idealImageWidth:d}=t;return(0,r.jsx)(f,{href:s,onSelect:a,className:i?"ideal-width":"","data-testid":o,children:(0,r.jsx)(n.DynamicImage,{imageModel:l,fillParentContainer:!0,dynamicWidth:!0,loading:"eager",width:i?d:1.75*d})})},f=(0,a.default)(c.SharedButtonBase).withConfig({componentId:"sc-83794ccd-0"})(["flex-grow:1;min-width:","px;padding:0;border:none;cursor:pointer;&.ideal-width{flex-grow:unset;}"],65),m=e=>e&&e.maxWidth/e.maxHeight||1,I="hide-b-m",h=e=>{let{onSelect:t,href:i,image:s,label:a,hideBelowMediumBP:o=!1,testid:l}=e;return(t||i)&&a?(0,r.jsxs)(p,{href:i,onSelect:t,className:o?I:"","data-testid":l,children:[(0,r.jsx)(T,{children:a}),!!s&&(0,r.jsx)(n.DynamicImage,{imageModel:s,width:125*m(s),fillParentContainer:!0,dynamicWidth:!0})]}):null},p=(0,a.default)(c.SharedButtonBase).withConfig({componentId:"sc-7bcad688-0"})(["position:relative;flex-shrink:0;width:","px;display:inline-block;overflow:hidden;padding:0;border:none;cursor:pointer;&.","{display:none;","{display:inline-block;}}"],100,I,o.mediaQueries.breakpoints.above.m),T=a.default.div.withConfig({componentId:"sc-7bcad688-1"})(["position:absolute;display:flex;align-items:center;justify-content:center;text-align:center;height:100%;width:100%;top:0;left:0;z-index:1;border-radius:",";font-size:",";",";background:rgba(",",0.5);"],o.spacing.s,(0,o.setTypographyType)("subtitle2"),(0,o.setPropertyToColorVar)("color","ipt-on-baseAlt-color"),(0,o.getColorVar)("ipt-baseAlt-rgb")),x=(e,t)=>{let i=[],r=0;if(e.length<=0)return{imageRows:i,displayedImageCount:r};let s=600,a=0,n={rowIndex:0,images:[],totalImagesWidth:0},o=()=>{n.images.length>0&&(i.push(n),s=600,n={rowIndex:++a,images:[],totalImagesWidth:0})},l=e=>{n.images.push(e),s-=e.idealImageWidth,n.totalImagesWidth+=e.idealImageWidth,r++,(s<=180||n.images.length>=4)&&o()};return e.forEach((i,r)=>{if(t&&n.rowIndex>=t)return;let a=i.idealImageWidth<s+180,d=i.idealImageWidth>600,u=0===n.images.length;a?l(i):d&&(u||o(),l(i)),r===e.length-1&&o()}),{imageRows:i,displayedImageCount:r}};var y=i(75824),E=i(6935);let A=e=>{let t=[],i=(0,y.N)({id:"title_main_hero_media_ariaLabel_imageLink_fallback",defaultMessage:"View Poster"});return e?.forEach(e=>{let{node:r}=e;if(r&&r.id){let e=E.K0({url:r.url,height:r.height,width:r.width},i);e&&t.push({id:r.id,image:e,idealImageWidth:125*m(e)})}}),t},P=e=>{let{imageEdges:t,totalImageCount:i,rows:a,customCTA:o}=e,c=(0,s.Z)(),{pageConst:f}=(0,l.y)(),m=A(t),I=(0,d.f)(),{imageRows:p,displayedImageCount:T}=x(m,a);if(p.length<=0||!f)return null;let y=i-T,E=y>0,P=c.formatNumber(y,{compactDisplay:"short",notation:"compact"});return(0,r.jsx)(n.PageSection,{sidePadding:"pageMargin",topPadding:"none",bottomPadding:"none",children:p.map((e,t)=>{let i;let{images:s,totalImagesWidth:a}=e,n=t+1===p.length,l=!!m[T],d=a<=420&&n&&!l;return n&&(i=E&&l?{href:I({pageConst:f,rmconst:m[T].id,refSuffix:u.Cd.MORE}),label:`+ ${P}`,hideBelowMediumBP:!0,image:m[T].image,...o}:o),(0,r.jsxs)(C,{children:[s.map((e,i)=>{let s=I({pageConst:f,rmconst:e.id,refSuffix:[{t:u.Cd.EMPTY,n:t},{t:u.Cd.EMPTY,n:i+1}]});return(0,r.jsx)(g,{item:e,href:s,renderAtIdealWidth:d,testid:`mosaic-img-${t}-${i}`},`im_${t}_${i}`)}),!!i&&(0,r.jsx)(h,{...i})]},t)})})},C=a.default.div.withConfig({componentId:"sc-a602d783-0"})(["display:flex;flex-flow:row;gap:",";margin-bottom:",";max-height:calc(","px * (1 + ","));min-height:calc(","px * (1 - ","));"],(0,o.getSpacingVar)("ipt-gutter"),(0,o.getSpacingVar)("ipt-gutter"),125,.3,125,.3)},55260:function(e,t,i){i.d(t,{C:function(){return s},v:function(){return a}});var r=i(57260);let s=(e,t,i,s)=>{let a=[{queryVariables:{first:t,sort:{by:r.y1.LIST_ORDER,order:"ASC"}},text:e.formatMessage(r.wG.LIST_ORDER),value:r.y1.LIST_ORDER},{queryVariables:{first:t,sort:{by:r.y1.ALPHABETICAL,order:"ASC"}},text:e.formatMessage(r.wG.ALPHABETICAL),value:r.y1.ALPHABETICAL},{queryVariables:{first:t,sort:{by:r.y1.IMDB_RATING,order:"DESC"}},text:e.formatMessage(r.wG.IMDB_RATING),value:r.y1.IMDB_RATING},{queryVariables:{first:t,sort:{by:r.y1.POPULARITY,order:"ASC"}},text:e.formatMessage(r.wG.POPULARITY),value:r.y1.POPULARITY},{queryVariables:{first:t,sort:{by:r.y1.NUMBER_OF_RATINGS,order:"ASC"}},text:e.formatMessage(r.wG.NUMBER_OF_RATINGS),value:r.y1.NUMBER_OF_RATINGS},{queryVariables:{first:t,sort:{by:r.y1.RELEASE_DATE,order:"ASC"}},text:e.formatMessage(r.wG.RELEASE_DATE),value:r.y1.RELEASE_DATE},{queryVariables:{first:t,sort:{by:r.y1.RUNTIME,order:"ASC"}},text:e.formatMessage(r.wG.RUNTIME),value:r.y1.RUNTIME},{queryVariables:{first:t,sort:{by:r.y1.DATE_ADDED,order:"ASC"}},text:e.formatMessage(r.wG.DATE_ADDED),value:r.y1.DATE_ADDED}];return i&&a.push({queryVariables:{first:t,sort:{by:r.y1.YOUR_RATING,order:"DESC"}},text:e.formatMessage(r.wG.YOUR_RATING),value:r.y1.YOUR_RATING,queryContext:{personalized:!0,serverSideCacheable:!1}}),s?.length&&(a=a.filter(e=>!s.includes(e.value))),a},a=(e,t,i,r)=>{let a=s(e,t,i);if(r&&r?.order&&r?.by){let e=a.findIndex(e=>e.value===r.by);a.splice(e,1,{...a[e],queryVariables:{...a[e].queryVariables,sort:{...a[e].queryVariables?.sort,order:r.order}}})}return a}},80136:function(e,t,i){i.d(t,{Z:function(){return N}});var r=i(52322);i(2784);var s=i(31885),a=i(92008),n=i(32908),o=i(19596),l=i(88169),d=i(86704),u=i(16883),c=i(66724),g=i(87801),f=i(68139),m=i(40981),I=i(81269),h=i(57708),p=i(18355),T=i(26204),x=i(26094),y=i(96966),E=i(42887);let A={METER_TITLE_HEADER:"ucli-meter-title-header",PARENT:"ucli-parent",POSTER:"ucli-poster",RATING_GROUP:"ucli-rating-group",TITLE_METADATA:"ucli-title-metadata"};var P=e=>{let{index:t,listItem:i,showItemNumbersInConstText:s}=e,{titleMainLinkBuilder:a}=(0,c.WOb)(),{formattedTitleData:n,titleText:o,textList:d=[]}=(0,E.G)(i,t,s,!1),m=(0,f.X)({series:{titleText:{text:i.series?.titleText},originalTitleText:{text:i.series?.originalTitleText}}}),x=m?`${m}: ${o}`:o;return(0,r.jsx)(l.MetaDataListSummaryItem,{className:A.PARENT,preElement:(0,r.jsx)(_,{children:(0,r.jsx)(p.y,{className:A.POSTER,title:{id:i.titleId,titleText:x,titleTypeId:i.titleType?.id??"",image:{url:i.primaryImage?.url,height:i.primaryImage?.height,width:i.primaryImage?.width}},ribbonSize:"s"})}),postElement:(0,r.jsx)(v,{children:(0,r.jsx)(y.n,{className:T.t,listItem:i})}),children:(0,r.jsxs)(C,{children:[!!i.meterRanking&&!!i.meterRanking.rankChange&&(0,r.jsx)(R,{className:A.METER_TITLE_HEADER,currentRank:i.meterRanking.currentRank,rankChange:i.meterRanking.rankChange}),(0,r.jsx)(I.Z,{showTitle:!0,index:t,titleDisplayData:{formattedTitleText:n.formattedTitleText,titleHref:a({tconst:i.series?i.series.id:i.titleId,refSuffix:g.C.TEXT})},selectorPrefix:"ucli",episode:i.series?{episodeName:o,episodeId:i.titleId,releaseYear:i.releaseYear,episodeHref:a({tconst:i.titleId,refSuffix:g.C.TEXT})}:void 0}),d.length>0&&(0,r.jsx)(b,{className:A.TITLE_METADATA,showDividers:!0,children:d.map((e,t)=>(0,r.jsx)(l.InlineListItem,{children:(0,r.jsx)(u.TextOrLink,{...e})},`${i.itemId}-metadata-${t}`))}),(0,r.jsxs)(S,{children:[(0,r.jsx)(L,{canRate:i.canRate,className:A.RATING_GROUP,hideMaxIMDbRating:!0,hideVoteCountOnSmallBreakpoints:!0,otherUserRating:i.otherUserRating,ratingsSummary:i.ratingSummary,showPlaceholderStarIfApplicable:!0,titleId:i.titleId,titleText:x}),!!i.canRate&&(0,r.jsx)(h.$,{titleId:i.titleId,titleText:x})]})]})})};let C=o.default.div.withConfig({componentId:"sc-f94f7c6f-0"})(["display:flex;flex-direction:column;height:max-content;padding-top:",";"],d.spacing.xxs),b=(0,o.default)(l.InlineList).withConfig({componentId:"sc-f94f7c6f-1"})(["margin-top:",";"],d.spacing.xxs),R=(0,o.default)(x.Z).withConfig({componentId:"sc-f94f7c6f-2"})(["height:",";max-width:fit-content;"],d.spacing.m),_=o.default.div.withConfig({componentId:"sc-f94f7c6f-3"})(["margin-right:0.5rem;flex-shrink:0;display:flex;width:54px;"]),S=o.default.div.withConfig({componentId:"sc-f94f7c6f-4"})(["align-items:center;display:flex;flex-direction:row;max-height:28px;height:28px;"]),L=(0,o.default)(m.Nf).withConfig({componentId:"sc-f94f7c6f-5"})(["flex-wrap:nowrap;margin-left:-2px;min-height:1.75rem;width:fit-content;.","{padding:0 ",";span{","}}"],m.z7.USER_RATING,d.spacing.xs,(0,l.setTypographyType)("bodySmall")),v=o.default.div.withConfig({componentId:"sc-f94f7c6f-6"})(["align-items:center;display:flex;height:100%;width:fit-content;.","{height:fit-content;}"],T.t);var N=(0,i(11800).W)(e=>{let{items:t,listType:i,showItemNumbersInConstText:o}=e;return t.length?(0,r.jsx)(n.Z,{className:"ultra-compact-list-view",children:t.map((e,t)=>{let n=t+1;return e.hideItemInList?null:i===s.lZo.Titles?(0,r.jsx)(P,{index:n,listItem:e,showItemNumbersInConstText:o},`ctli-${e.titleId}-${n}`):(0,r.jsx)(a.ZP,{index:n,listItem:e,showItemNumberWithNameText:o},`cnli-${e.nameId}-${n}`)})}):null})},14133:function(e,t,i){var r=i(52322);i(2784);var s=i(53665),a=i(19596),n=i(88169),o=i(86704),l=i(31885),d=i(6935),u=i(66724),c=i(11438),g=i(86294);t.Z=e=>{let{hideListItemCount:t,index:i,listId:a,listMetadata:o,listTitle:I,listType:h,listSize:p,primaryConstData:T,postElement:x,refMarkerBase:y=c.Cd.EMPTY,className:E}=e,A=(0,s.Z)(),{userRatingsLinkBuilder:P,listMainLinkBuilder:C}=(0,u.WOb)(),b="RATINGS"===h;if(!a||!I)return null;let R=(0,g.sU)("RATINGS"===h?l.lZo.Titles:h,p,A),_=(0,d.Gs)({height:T.primaryImage?.height,width:T.primaryImage?.width,url:T.primaryImage?.url},T.primaryImage?.caption),S=i+1;return(0,r.jsx)(n.MetaDataListSummaryItem,{"data-testid":"user-ll-item",className:E,preElement:(0,r.jsx)(f,{children:(0,r.jsx)(n.Poster,{ariaLabel:A.formatMessage({id:"common_ariaLabels_gotoList",defaultMessage:"View list page for {listTitle}"},{listTitle:I}),href:b?P({urconst:a,refSuffix:[c.Cd.POSTER,{t:y,n:S}]}):C({lsconst:a,refSuffix:[c.Cd.POSTER,{t:y,n:S}]}),dynamicWidth:!0,children:(0,r.jsx)(n.Poster.Image,{imageModel:_,imageType:T.fallbackImage,size:"m"})})}),subTextList:o,textList:t?[]:[{text:R}],title:I,titleLink:b?P({urconst:a,refSuffix:[c.Cd.TEXT,{t:y,n:S}]}):C({lsconst:a,refSuffix:[c.Cd.TEXT,{t:y,n:S}]}),postElement:x?(0,r.jsx)(m,{children:x}):void 0})};let f=a.default.div.withConfig({componentId:"sc-7ee4307f-0"})(["display:flex;flex-shrink:0;margin-right:",";width:4.5rem;"],o.spacing.xs),m=a.default.div.withConfig({componentId:"sc-7ee4307f-1"})(["width:fit-content;"])},34396:function(e,t,i){i.d(t,{_:function(){return C}});var r=i(52322),s=i(72579),a=i.n(s),n=i(2784),o=i(19596),l=i(86704),d=i(68701),u=i(11438),c=i(14438),g=i(37179),f=i(83163),m=i(48687),I=i(15367),h=i(79241),p=i(67482),T=i.n(p),x=i(88169);let y=e=>{let{itemId:t,item:i,index:s}=e,a=(0,n.useRef)(null),o=(0,x.useBreakpointsAsConfig)(),l=o.s||o.xs;return(0,r.jsx)(r.Fragment,{children:!!i.image&&(0,r.jsx)(E,{id:t,"data-testid":t,width:i.image.maxWidth,height:i.image.maxHeight,href:i.href,className:"image-item-wrapper",ref:a,children:(0,r.jsx)(A,{loading:s<6?"eager":"lazy","data-testid":"image-gallery-image",imageModel:i.image,width:a.current?.offsetWidth||(l?480:820)})})})},E=o.default.a.withConfig({componentId:"sc-1337a2aa-0"})(["",""],e=>e.width&&e.height&&(0,o.css)(["width:","px;flex-grow:",";","{width:","px;flex-grow:",";}"],200*e.width/e.height,200*e.width/e.height,l.mediaQueries.breakpoints.below.m,120*e.width/e.height,120*e.width/e.height)),A=(0,o.default)(T()).withConfig({componentId:"sc-1337a2aa-1"})(["height:auto;vertical-align:middle;width:100%;"]),P="img_gallery_pagination_loader",C=e=>{let{total:t,items:i,pagination:s,endCursor:o,onPagination:l,enableIndexPagination:d,indexPaginationProps:p}=e,T=(0,c.EO)(),x=(0,m.hg)({weblabID:f.lh.IMDB_NEXT_IMAGE_GALLERY_REFACTOR_1210566,treatments:{T1:!0}}),[E,A]=(0,n.useState)(i??[]),[C,_]=(0,n.useState)(o??void 0),S=!!s&&!!t&&t>(i?.length??0),[L,v]=(0,n.useState)(S);return((0,n.useEffect)(()=>{A(i??[]),_(o??void 0),v(S)},[i]),E?.length)?(0,r.jsxs)("section",{"data-testid":"sub-section-images",children:[!!x&&(0,r.jsx)(I.v,{imageEdges:E,totalImageCount:E.length,customCTA:void 0}),!x&&(0,r.jsx)(b,{children:E.map((e,t)=>{if(!e.image)return;let i=`${e.id}-img-${t}`;return(0,r.jsx)(y,{itemId:i,item:e,index:t},i)})}),!d&&!!L&&!!s?.query&&(0,r.jsx)(R,{loaderClassName:x?P:"",queryOptions:{query:s.query,variables:{after:C,...s?.queryVariables},context:s?.queryContext??{serverSideCacheable:!0,personalized:!1}},onDataReceived:e=>{let{items:t}=s?.transform(e)??{items:[]};if(t){let e=[...E,...t];A(e),l?.(e?.length)}if(s?.pathToPageInfo){let{hasNextPage:t,endCursor:i}=a()(e,s.pathToPageInfo)??{};t&&i?(v(!0),_(i)):(v(!1),_(void 0))}},onError:(e,t)=>{T({pageAction:g.QJ.PAGINATION_ERROR,refMarkerSuffix:[u.Cd.INTERSECTION_PAGINATION,u.Cd.ERROR]}),t&&T({pageAction:g.QJ.PAGINATION_ERROR_AND_DATA,refMarkerSuffix:[u.Cd.INTERSECTION_PAGINATION,u.Cd.ERROR,u.Cd.DATA]})},onFetch:()=>{T({pageAction:g.QJ.PAGINATION_NEXT,refMarkerSuffix:[u.Cd.INTERSECTION_PAGINATION,u.Cd.FETCH]})},intersectionOptions:s?.intersectionOptions}),!!d&&!!p&&(0,r.jsx)(h.ZP,{...p})]}):null},b=o.default.div.withConfig({componentId:"sc-d6ca102a-0"})(["display:flex;flex-basis:100%;flex-flow:row wrap;gap:",";.image-item-wrapper{animation:skeleton-loading 1s linear infinite alternate;@keyframes skeleton-loading{0%{background-color:hsl(200deg 20% 80%);}100%{background-color:hsl(200deg 20% 95%);}}}"],l.spacing.xxs),R=(0,o.default)(d.ZP).withConfig({componentId:"sc-d6ca102a-1"})(["&.","{","}"],P,(0,l.setPropertyToSpacingVar)("padding","ipt-pageMargin"))},79241:function(e,t,i){i.d(t,{X8:function(){return u}});var r=i(52322);i(2784);var s=i(53665),a=i(19596),n=i(88169),o=i(86704);let l={NEXT:"index-pagination-nxt",PARENT:"index-pagination",PREVIOUS:"index-pagination-prv",SELECT:"index-pagination-select"},d={NEXT:{id:"common_pagination_next",defaultMessage:"Next"},PREVIOUS:{id:"common_pagination_previous",defaultMessage:"Previous"},COUNT:{id:"common_pagination_count",defaultMessage:"{current} of {total}"}},u=e=>{let{previousButtonProps:t,nextButtonProps:i,selectPageProps:a}=e,o=(0,s.Z)();if(!t&&!i&&!a)return null;let u=[];if(a&&a.totalPages>0)for(let e=1;e<=a.totalPages;e++){let t=e.toString();u.push({text:t,value:t})}return(0,r.jsxs)(c,{"data-testid":l.PARENT,children:[!!t&&(0,r.jsx)(n.ResponsiveButton,{...t,"data-testid":l.PREVIOUS,iconName:t.iconName||"chevron-left",label:t.label||o.formatMessage(d.PREVIOUS),ariaLabel:t.ariaLabel||o.formatMessage(d.PREVIOUS),onColor:t.onColor||"accent2",width:t.width||"half-padding"}),!!a&&(0,r.jsx)(c,{children:(0,r.jsx)(n.SimpleSelect,{...a,"data-testid":l.SELECT,orientLabel:"override-value-in-select",label:o.formatMessage(d.COUNT,{current:a.currentPage,total:a.totalPages}),options:u,value:a.currentPage.toString(),onChange:e=>{let t=Number(e);t&&t!==a.currentPage&&a.onChange(t)}})}),!!i&&(0,r.jsx)(n.ResponsiveButton,{...i,"data-testid":l.NEXT,isPostIcon:!0,iconName:i.iconName||"chevron-right",label:i.label||o.formatMessage(d.NEXT),ariaLabel:i.ariaLabel||o.formatMessage(d.NEXT),onColor:i.onColor||"accent2",width:i.width||"half-padding"})]})};t.ZP=u;let c=a.default.div.withConfig({componentId:"sc-ac7612a0-0"})(["display:flex;flex-direction:row;align-items:center;justify-content:center;gap:",";margin-top:",";margin-bottom:",";"],o.spacing.s,o.spacing.s,o.spacing.s)},68701:function(e,t,i){i.d(t,{Yv:function(){return g}});var r=i(52322),s=i(88169),a=i(2784),n=i(19596),o=i(54588),l=i(14149),d=i(78716);let u="IntersectionPagination",c={rootMargin:"1000px"},g=e=>{let{queryOptions:t,onDataReceived:i,onFetch:s,onError:n,intersectionOptions:g,loaderClassName:m}=e,I=(0,a.useRef)(null),[{data:h,fetching:p,error:T},x]=(0,d.p)({queryOptions:t,ref:I,options:{intersectionOptions:g??c,continueObserving:!0},onIntersection:s});return(0,a.useEffect)(()=>{(h||T)&&(h&&i(h),T&&n(T,h))},[h,T]),(0,r.jsxs)(o.Z,{name:u,children:[(0,r.jsx)("div",{ref:I,"data-testid":"ip_ref"}),!!p&&(0,r.jsx)("span",{className:m,children:(0,r.jsx)(f,{})}),!!T&&!h&&(0,r.jsx)(l.Kj,{name:u,canRetry:!0,onClickRetry:x})]})};t.ZP=g;let f=(0,n.default)(s.Loader).withConfig({componentId:"sc-834cf615-0"})(["min-height:2rem;"])},4658:function(e,t,i){i.d(t,{h:function(){return u}});var r=i(52322),s=i(2784),a=i(19596),n=i(88169),o=i(86200),l=i(4363);let d={LOADER:"sort-by-loader"},u=e=>{let{additionalQueryVariables:t,directionToggleProps:i,initialSelectionValue:a,onDataReceived:n,onError:u,onFetchingStatusChange:g,hideLabel:f,query:m,queryContext:I,sortOptions:h}=e,p=h.find(e=>e.value===a),[T,x]=(0,s.useState)(p??h[0]),[y,E]=(0,s.useState)(!1),A=()=>E(!0),[P]=(0,l.E)({query:m,variables:{...t||{},...T?.queryVariables||{}},context:T?.queryContext??I,pause:!y}),{data:C,fetching:b,error:R}=P;(0,s.useEffect)(()=>{C&&T?(n(P,T),g?.(!1,T)):R&&u&&u(R,A,T),E(!1)},[C,R]);let _={selectedSortBy:T.value,sortByOptions:h,hideLabel:f,selectedSortOrder:i?T.queryVariables?.sort?.[i?.sortOrderVariableName]:void 0,onSortBy:e=>{let t=h.find(t=>t.value===e);t&&(g?.(!0),x(t),E(!0))},onSortOrder:i?e=>{let t={...T,queryVariables:{...T.queryVariables,sort:{[i.sortByVariableName]:T.queryVariables?.sort?.[i?.sortByVariableName]??"",[i.sortOrderVariableName]:e}}};x(t),i.onDirectionChange?.(e,t),i.preventQueryOnChange||(E(!0),g?.(!0))}:void 0};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{..._}),b&&!g&&(0,r.jsx)(c,{type:"circle",testId:d.LOADER})]})},c=(0,a.default)(n.Loader).withConfig({componentId:"sc-417ba06f-0"})(["display:flex;align-self:center;height:1.5rem;"])},99346:function(e,t,i){i.d(t,{Z:function(){return eT}});var r=i(52322),s=i(14973),a=i(5632),n=i(2784),o=i(53665),l=i(19596),d=i(88169),u=i(86704),c=i(23387),g=i(16711),f=i(14133),m=i(71610),I=i(1280),h=i(54073),p=i.n(h),T=i(71411);let x=(0,i(81999).vU)({listSearchTitle:{id:"list_search_label",defaultMessage:"Search within this list"},listSearchError:{id:"list_search_error",defaultMessage:"No matches found."}}),y=e=>{let{value:t,onChange:i,onDebouncedChange:s,onClear:a,showError:l,...d}=e,u=(0,o.Z)(),c=(0,n.useCallback)(p()(e=>{s(e)},500),[]);return(0,r.jsx)(E,{ariaLabel:u.formatMessage(x.listSearchTitle),errorText:l?u.formatMessage(x.listSearchError):void 0,className:"list-search-input",name:"list-search",label:u.formatMessage(x.listSearchTitle),preIcon:"search",postIcon:t?.length?"clear":void 0,onPostIconClick:a,value:t,onChange:e=>{i(e),c(e)},onKeyDown:e=>(0,T.S)(e,250),...d})},E=(0,l.styled)(d.TextInput).withConfig({componentId:"sc-14c60647-0"})(["margin-left:auto;margin-bottom:",";"],u.spacing.s);var A=i(82177),P=i(80136),C=i(34396),b=i(79241),R=i(41330),_=i(68701),S=i(4658),L=i(25436),v=i(14149),N=i(31885),M=i(86958),D=i(41174),w=i(54729),O=i(66724),j=i(11438),V=i(14438),F=i(37179),$=i(30115),k=i(83163),q=i(48687),U=i(88472),G=i(15534),Z=i(9028),B=i(11209),Q=i(77037),H=e=>{let{selectedFilters:t,setSelectedFilters:i,ariaLabel:s,filterId:a,filterValues:n,id:o,label:l,filterKey:u,isMultiValue:c,personalized:g}=e,f=(0,Q.uT)();return(0,r.jsx)(d.CheckBox,{ariaLabel:s,checked:(0,Q.Um)(n,a),iconActiveColor:"accent2",id:o,label:l,onChange:e=>{let r=(0,Q.nq)(e,n,a,l);f({isAddFilter:e,filterIngress:j.Cd.PROMPT,filterKey:u,filterValue:a}),i({...t,[u]:{isMultiValue:c,personalized:g,values:r}})}})};let Y=l.default.div.withConfig({componentId:"sc-a24dbde2-0"})([""," "," margin-bottom:",";"],(0,u.setTypographyType)("overline"),(0,u.setPropertyToColorVar)("color","ipt-on-baseAlt-accent1-color"),u.spacing.s),z=l.default.div.withConfig({componentId:"sc-a24dbde2-1"})([""," "," align-items:center;display:inline-flex;flex-wrap:wrap;gap:",";width:100%;"],(0,u.setTypographyType)("body"),(0,u.setPropertyToColorVar)("color","ipt-on-baseAlt-textPrimary-color"),u.spacing.xs);var W=e=>{let{selectedFilters:t,setSelectedFilters:i}=e,s=(0,o.Z)(),a=t?.[B.uN.status]?.values??[];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Y,{children:s.formatMessage(B.kF.STATUS)}),(0,r.jsxs)(z,{children:[(0,r.jsx)(H,{selectedFilters:t,setSelectedFilters:i,ariaLabel:s.formatMessage(B.kF.READY_ARIA),filterId:N.UoV.Ready,filterValues:a,id:B.cK.READY_FILTER,label:s.formatMessage(B.kF.READY),filterKey:B.uN.status,isMultiValue:!0,personalized:!0}),(0,r.jsx)(H,{selectedFilters:t,setSelectedFilters:i,ariaLabel:s.formatMessage(B.kF.IN_PROGRESS_ARIA),filterId:N.UoV.Processing,filterValues:a,id:B.cK.IN_PROGRESS_FILTER,label:s.formatMessage(B.kF.IN_PROGRESS),filterKey:B.uN.status,isMultiValue:!0,personalized:!0}),(0,r.jsx)(H,{selectedFilters:t,setSelectedFilters:i,ariaLabel:s.formatMessage(B.kF.FAILED_ARIA),filterId:N.UoV.Failed,filterValues:a,id:B.cK.FAILED_FILTER,label:s.formatMessage(B.kF.FAILED),filterKey:B.uN.status,isMultiValue:!0,personalized:!0})]})]})},X=i(73807),K=e=>{let{isListOwner:t,selectedFilters:i,setSelectedFilters:s}=e,a=(0,o.Z)(),n=i[B.l5.anyVisibilities]?.values??[],l=i[B.l5.anyListTypes]?.values??[];return(0,r.jsxs)(r.Fragment,{children:[t&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Y,{children:a.formatMessage(B.Mr.PRIVACY)}),(0,r.jsxs)(z,{children:[(0,r.jsx)(H,{selectedFilters:i,setSelectedFilters:s,ariaLabel:a.formatMessage(B.Mr.PUBLIC_ARIA),filterId:N.CyQ.Public,filterValues:n,id:B.$_.PUBLIC_FILTER,label:a.formatMessage(B.Mr.PUBLIC),filterKey:B.l5.anyVisibilities,isMultiValue:!0,personalized:!0}),(0,r.jsx)(H,{selectedFilters:i,setSelectedFilters:s,ariaLabel:a.formatMessage(B.Mr.PRIVATE_ARIA),filterId:N.CyQ.Private,filterValues:n,id:B.$_.PRIVATE_FILTER,label:a.formatMessage(B.Mr.PRIVATE),filterKey:B.l5.anyVisibilities,isMultiValue:!0,personalized:!0})]}),(0,r.jsx)(d.PageSectionDivider,{})]}),(0,r.jsx)(Y,{children:a.formatMessage(B.Mr.LIST_TYPE)}),(0,r.jsxs)(z,{children:[(0,r.jsx)(H,{selectedFilters:i,setSelectedFilters:s,ariaLabel:a.formatMessage(B.Mr.TITLES_ARIA),filterId:N.lZo.Titles,filterValues:l,id:B.$_.TITLES_FILTER,label:a.formatMessage(B.Mr.TITLES),filterKey:B.l5.anyListTypes,isMultiValue:!0,personalized:!!t}),(0,r.jsx)(H,{selectedFilters:i,setSelectedFilters:s,ariaLabel:a.formatMessage(B.Mr.PEOPLE_ARIA),filterId:N.lZo.People,filterValues:l,id:B.$_.PEOPLE_FILTER,label:a.formatMessage(B.Mr.PEOPLE),filterKey:B.l5.anyListTypes,isMultiValue:!0,personalized:!!t}),(0,r.jsx)(H,{selectedFilters:i,setSelectedFilters:s,ariaLabel:a.formatMessage(B.Mr.IMAGES_ARIA),filterId:N.lZo.Images,filterValues:l,id:B.$_.IMAGES_FILTER,label:a.formatMessage(B.Mr.IMAGES),filterKey:B.l5.anyListTypes,isMultiValue:!0,personalized:!!t}),(0,r.jsx)(H,{selectedFilters:i,setSelectedFilters:s,ariaLabel:a.formatMessage(B.Mr.VIDEOS_ARIA),filterId:N.lZo.Videos,filterValues:l,id:B.$_.VIDEOS_FILTER,label:a.formatMessage(B.Mr.VIDEOS),filterKey:B.l5.anyListTypes,isMultiValue:!0,personalized:!!t})]})]})},J=i(7156),ee=e=>{let{filterByState:t,selectedFilters:i,setFilterByState:s}=e,a=(0,Q.uT)();return(0,r.jsx)(J.Z,{selectedFilters:i,onFilterChange:e=>{let{newSelectedFilters:i,filterKey:r,filterValue:n}=e;s({...t,isFetching:!0,selectedFilters:i,shouldIssueQuery:!0}),a({isAddFilter:!1,filterIngress:j.Cd.CHIP,filterKey:r,filterValue:n})}})},et=i(27323),ei=i(55899),er=i(71321),es=i(87801);let ea=e=>{let{isListOwner:t,isFetching:i}=e,s=(0,o.Z)(),a=s.formatMessage({id:"ratings_index_pagination_max_records_exceeded",defaultMessage:"To view all your ratings, export the complete history."}),l=s.formatMessage({id:"ratings_export_button_text",defaultMessage:"Export ratings"}),{triggerExport:u}=(0,er.uC)({listId:"RATINGS",showSuccessSnack:!1,refSuffix:es.C.RATING}),c=s.formatMessage({id:"ratings_index_pagination_max_records_exceeded_not_list_owner",defaultMessage:"Hmm, it looks like we couldn't find that rating. Try updating your filters and sort options."}),g=s.formatMessage({id:"user_your_ratings",defaultMessage:"Your Ratings"}),[f,m]=(0,n.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[!i&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.PageSectionDivider,{}),t?(0,r.jsxs)(r.Fragment,{children:[a,(0,r.jsx)("div",{children:(0,r.jsx)(en,{onSelect:async()=>{await u()&&m(!0)},"data-testid":"export_button",children:l})})]}):(0,r.jsx)("div",{"data-testid":"overflow_text",children:c}),(0,r.jsx)(d.PageSectionDivider,{})]}),!!f&&(0,r.jsx)(ei.Z,{listTitle:g,onCloseClicked:()=>m(!1),showPrompt:f})]})},en=(0,l.default)(d.Button).withConfig({componentId:"sc-22be314a-0"})(["margin-top:",";"],u.spacing.m);var eo=i(4170),el=i(8830),ed=i(43318),eu=i(78153),ec=i(86008),eg=i(49624),ef=i(1833),em=i(36230),eI=i(57066),eh=i(87657),ep=i(86054),eT=e=>{let t,i,{customViewProps:l,filterByProps:u,listItems:h,listType:p,pageQueryVariables:T,paginatedQueryInfo:x,setListItems:E,sortByProps:R,totalItems:B,totalPossibleItems:Q,enableIndexPagination:H=!1,initialPageNumber:Y,isListOwner:z,isPrivateList:J,emptyText:ei,filteredEmptyText:er,alwaysShowItemNumbers:es}=e,en=(0,o.Z)(),{nameMainLinkBuilder:eT}=(0,O.WOb)(),eb=(0,D.nu)(),eR=(0,a.useRouter)(),e_=(0,M.B)().context,{pageConst:eS,pageType:eL,subPageType:ev}=e_,eN=(0,q.hg)({weblabID:k.lh.IMDB_NEXT_LIST_SEARCH_956966,treatments:{T1:!0}}),eM=(0,q.hg)({weblabID:k.lh.IMDB_ULTRA_COMPACT_LIST_1210332,treatments:{T1:!0}}),eD=(0,V.EO)(),ew=p===N.lZo.Images,eO=p===N.lZo.People,ej=p===N.lZo.Titles,eV=!l?.listItemType&&(eO||ej),eF=!l?.listItemType&&!ew,{personalizedDataMap:e$,shouldFetchOtherUserRatings:ek}=function(e){let{listItems:t,setListItems:i,pageConst:r,subPageType:s,isListOwner:a,isTitleList:o}=e,[l,d]=(0,n.useState)({}),u=o?(0,ep.Dh)(t):[],c=s===L.SubPageType.RATINGS&&!a,g=(0,D.LI)({titleIds:u,customPause:!o,otherUserId:c?r:void 0});return(0,n.useEffect)(()=>{if(!g?.data)return;let e={...l};g?.data?.titles.forEach(t=>{t?.id&&(e[t?.id]=t)}),i((0,ed.qA)(t,e,c)),d(e)},[g?.data]),{personalizedDataMap:l,shouldFetchOtherUserRatings:c}}({listItems:h,setListItems:E,pageConst:eS,subPageType:ev,isListOwner:z,isTitleList:ej}),{totalListItems:eq,pageNumber:eU,totalPages:eG,filterByState:eZ,sortByState:eB,queryVariables:eQ,filterQueryVariables:eH,sortOptions:eY,queryContext:ez,selectedFilters:eW,hasNextPage:eX,showListResults:eK,setFilterByState:eJ,setSortByState:e0,setQueryVariables:e1,setHasNextPage:e8,resetToPage1:e6,onPageChange:e2,retryFilterQuery:e4}=function(e){let{listType:t,totalItems:i,initialPageNumber:r,paginatedQueryInfo:s,filterByProps:a,sortByProps:o,isPrivateList:l,pageQueryVariables:d,isListOwner:u,intl:c,router:g,enableIndexPagination:f,isLoggedIn:m,isTitleList:I,personalizedDataMap:h,shouldFetchOtherUserRatings:p,setListItems:T}=e,x=(0,M.B)().context,{subPageType:y}=x,[E,A]=(0,n.useState)(i),[P,C]=(0,n.useState)(s?.pageInfo?.hasNextPage??!1),{pageNumber:b,totalPages:R,onPageChange:_,resetToPage1:S}=function(e){let{initialPageNumber:t,totalListItems:i,router:r,enableIndexPagination:s,setJumpToPositionQueryVar:a,issueQuery:o}=e,[l,d]=(0,n.useState)(t??1),u=Math.ceil(i/U.x0),c=e=>{let t=(0,ef.f_)(r.asPath,el.y,e?.toString());r.push(t,void 0,{shallow:!0})};return{pageNumber:l,totalPages:u,onPageChange:e=>{let t=(0,eh.B)(e,U.x0);d(e),a(t),o(),c(1===e?void 0:e)},resetToPage1:()=>{s&&(a(1),d(1),c(void 0))}}}({initialPageNumber:r,totalListItems:E,router:g,enableIndexPagination:f,setJumpToPositionQueryVar:e=>{F({...V,jumpToPosition:e})},issueQuery:()=>{k({...$,isFetching:!0,retryQuery:Y,shouldIssueQuery:!0})}}),v=o?.sortOptions?.find(e=>e.value===o?.initialSelectionValue)?.queryVariables||{},[w,O]=(0,n.useState)({selectedSortOption:o?.sortOptions.find(e=>e.value===o.initialSelectionValue),isFetching:!1}),j=(0,ed.Dm)(o?.sortOptions??[],l),[V,F]=(0,n.useState)({after:s?.pageInfo?.endCursor,...v,...d||{}}),[$,k]=(0,n.useState)({error:void 0,isFetching:!1,lastUpdatedFilterKey:"",retryQuery:void 0,selectedFilters:a?.selectedFilters??{},searchText:"",shouldIssueQuery:!1}),q=$?.selectedFilters??{},B=y===L.SubPageType.EXPORTS||!!w?.selectedSortOption?.queryContext?.personalized||!!(Object.values(q).some(e=>e.personalized)||u),Q={serverSideCacheable:!B,personalized:B},H=(0,ed.Ff)(a?.promptType,$?.selectedFilters,a?.inTheatersLocation,a?.singleUserRatingsInfo?.userId,a?.includeAdultTitles,$?.searchText),Y=()=>k({...$,shouldIssueQuery:!0}),z=a?.query;if(!z)switch(t){case N.lZo.Videos:z=em.xr;break;case N.lZo.Images:z=em.dm;break;default:z=Z.eN}let[{data:W,error:X}]=(0,D.E8)({query:z,context:Q,variables:{...V,...H,after:void 0},pause:!$.shouldIssueQuery});(0,n.useEffect)(()=>{if(W){if(a&&a?.itemsTransform){let{items:e,pageInfo:t,totalItems:i=0}=a.itemsTransform(W),r=I?(0,ed.qA)(e,h,p):e;F({...V,after:t?.endCursor}),T(r),C(t.hasNextPage),k({...$,error:void 0,isFetching:!1,lastUpdatedFilterKey:"",retryQuery:void 0,shouldIssueQuery:!1}),b<U.E1&&A(i),(0,ed.lW)({facetFields:a?.facetFields,inTheatersLocation:a.inTheatersLocation,isLoggedIn:m,promptType:a.promptType,router:g,selectedFilters:q,singleUserRatingUserId:a.singleUserRatingsInfo?.userId,searchText:$.searchText})}else if(f&&(t===N.lZo.Videos||t===N.lZo.Images)){let{items:e}=({[N.lZo.Videos]:e=>(0,eI.E)(e,c,x),[N.lZo.Images]:e=>(0,G.k)(e,x)})[t](W);T(e),k({...$,error:void 0,isFetching:!1,shouldIssueQuery:!1})}}else X&&k({...$,error:X,isFetching:!1,retryQuery:Y,shouldIssueQuery:!1})},[W,X]),(0,n.useEffect)(()=>{if(I&&a?.myRatingsFilterProps?.myRatingsFilterValue!==void 0){let e={...$?.selectedFilters},t=a.myRatingsFilterProps.myRatingsFilterValue;t===eg.EW.None&&e[eu.UJ.myRatingConstraint]?(delete e[eu.UJ.myRatingConstraint],k({...$,isFetching:!0,selectedFilters:e,shouldIssueQuery:!0})):t!==eg.EW.None&&(e={...e,...(0,ec.Dv)(c,t)},k({...$,isFetching:!0,selectedFilters:e,shouldIssueQuery:!0}))}},[a?.myRatingsFilterProps?.myRatingsFilterValue]);let K=!w?.isFetching&&!w?.error&&!$?.isFetching&&!$?.error;return{totalListItems:E,pageNumber:b,totalPages:R,filterByState:$,sortByState:w,queryVariables:V,filterQueryVariables:H,sortOptions:j,queryContext:Q,selectedFilters:q,hasNextPage:P,showListResults:K,setFilterByState:e=>{S(),k(e)},setSortByState:O,setQueryVariables:F,setHasNextPage:C,resetToPage1:S,onPageChange:_,retryFilterQuery:Y}}({listType:p,totalItems:B,initialPageNumber:Y,paginatedQueryInfo:x,filterByProps:u,sortByProps:R,isPrivateList:J,pageQueryVariables:T,isListOwner:z,intl:en,router:eR,enableIndexPagination:H,isLoggedIn:eb,isTitleList:ej,personalizedDataMap:e$,shouldFetchOtherUserRatings:ek,setListItems:E}),{viewType:e5,setViewType:e7}=(0,w.UC)({forceFeature:!0,initialValue:l?.initialView??A.c.DETAILED,listType:p}),e3=(0,ed.Zf)(p,e5),[e9,te]=(0,n.useState)(u?.searchText||""),tt=es||eB?.selectedSortOption?.value===N.Gkv.ListOrder,ti=eL===L.PageType.USER&&ev===L.SubPageType.RATINGS&&H?eU:0;!function(e){let{router:t,pageNumber:i,filterByState:r,sortByState:s,onPageChange:a}=e;(0,n.useEffect)(()=>{let e=e=>{let t=Number(new URLSearchParams(e.split("?")[1]??"").get(el.y)??1);s?.isFetching||r?.isFetching||t===i||(a(t),(0,ed.cr)(Z.kA.MC_PARENT))};return t.events.on("routeChangeComplete",e),()=>t.events.off("routeChangeComplete",e)},[t])}({router:eR,pageNumber:eU,filterByState:eZ,sortByState:eB,onPageChange:e2});let tr=e=>{eJ({...eZ,searchText:e,isFetching:!0,retryQuery:e4,shouldIssueQuery:!0})},ts=eK&&0===B&&!Q,ta=eK&&B>0&&!h.length&&eU<U.E1,tn=en.formatMessage({id:"list_page_empty_text",defaultMessage:"This list is empty."});if(ts)return(0,r.jsx)(d.PageSection,{sidePadding:"pageMargin",className:Z.kA.MC_PARENT,children:(0,r.jsx)(eP,{children:ei||tn})});switch(u?.promptType){case Z.Nr.Lists:t=K;break;case Z.Nr.Title:t=eo.Z;break;case Z.Nr.Exports:t=W}l?.listItemType&&l?.listItemType===Z.EA.UserListListItem&&(i=f.Z);let to={previousButtonProps:{disabled:1===eU,onSelect:()=>{eD({refMarkerSuffix:[j.Cd.INDEX_PAGINATION,j.Cd.PREVIOUS],pageAction:F.QJ.PAGINATION_PREV,hitType:s.HitType.PAGE_HIT}),e2(eU-1),(0,ed.cr)(Z.kA.MC_PARENT)}},nextButtonProps:{disabled:eU===eG||eU===U.E1,onSelect:()=>{eD({refMarkerSuffix:[j.Cd.INDEX_PAGINATION,j.Cd.NEXT],pageAction:F.QJ.PAGINATION_NEXT,hitType:s.HitType.PAGE_HIT}),e2(eU+1),(0,ed.cr)(Z.kA.MC_PARENT)}},selectPageProps:{id:"listPagination",totalPages:eG>U.E1?U.E1-1:eG,currentPage:eU||1,onChange:e=>{eD({refMarkerSuffix:[j.Cd.INDEX_PAGINATION,j.Cd.SELECT],pageAction:F.QJ.PAGINATION_NEXT,hitType:s.HitType.PAGE_HIT}),e2(e),(0,ed.cr)(Z.kA.MC_PARENT)}}};return(0,r.jsxs)(d.PageSection,{sidePadding:"pageMargin",className:Z.kA.MC_PARENT,children:[(0,r.jsxs)(ex,{children:[(0,r.jsx)(et.Z,{listType:p,totalItems:eq,pageSize:H?U.x0:void 0,pageNumber:H?eU:void 0}),(0,r.jsxs)(ey,{className:u?"has-filtering":"",children:[!!u&&!eO&&(0,r.jsx)(X.Z,{children:(0,r.jsx)(t,{facetFields:u?.facetFields,hiddenFilters:u?.hiddenFilters,isListOwner:u?.isListOwner,selectedFilters:eW,setSelectedFilters:e=>{eJ({...eZ,isFetching:!0,selectedFilters:e,shouldIssueQuery:!0})},singleUserRatingsInfo:u?.singleUserRatingsInfo,myRatingsFilterProps:u?.myRatingsFilterProps})}),!!R&&(0,r.jsx)(S.h,{...R,additionalQueryVariables:{...eQ,...eH,after:void 0},directionToggleProps:{sortByVariableName:R?.directionToggleProps?.sortByVariableName??"by",sortOrderVariableName:R?.directionToggleProps?.sortOrderVariableName??"order"},queryContext:ez,onDataReceived:(e,t)=>{let{items:i,pageInfo:r}=R?.itemsTransform(e?.data,eT)??{},s=ej?(0,ed.qA)(i,e$,ek):i;e1({...eQ,sort:t.queryVariables?.sort,after:r.endCursor}),e0({selectedSortOption:t,isFetching:!1}),E(s),e8(r.hasNextPage),(0,$.WN)(eR,R?.queryParamMap[t?.value],t.queryVariables?.sort?.order??t.queryVariables?.sort?.sortOrder)},onError:(e,t)=>{e0({error:e,isFetching:!1,retryQuery:t})},onFetchingStatusChange:(e,t)=>{e&&e6(),e0({selectedSortOption:t,error:void 0,isFetching:e,retryQuery:void 0})},sortOptions:eY})]}),!!eF&&(0,r.jsx)(eE,{"data-testid":Z.z7.MC_VIEW_OPTIONS,children:(0,r.jsx)(g.ZP,{hiddenViews:l?.hiddenViews,setSelectedView:e7,selectedView:e5})})]}),(0,r.jsx)(ee,{filterByState:eZ,selectedFilters:eW,setFilterByState:eJ}),!!ew&&!!eK&&(0,r.jsx)(C._,{endCursor:x?.pageInfo?.endCursor,items:h,pagination:x?{query:x.query,queryContext:ez,queryVariables:{first:x.pageSize,lsConst:eS},transform:e=>{let t=(0,G.z)(e?.list,e_);return e8(e.list?.imageItems?.pageInfo?.hasNextPage??!1),{endCursor:e.list?.imageItems?.pageInfo.endCursor,items:t,total:e.list?.items?.total}},pathToPageInfo:"list.imageItems.pageInfo",intersectionOptions:{rootMargin:e3}}:void 0,total:eq,enableIndexPagination:H,indexPaginationProps:to}),!!eV&&!!eN&&(0,r.jsx)(y,{"data-testid":Z.z7.MC_SEARCH,value:e9,onChange:e=>{te(e.target.value||"")},onDebouncedChange:e=>{tr(e.target.value||"")},onClear:()=>{te(""),tr("")},showError:h?.length===0&&e9?.length>0}),!!eK&&!ta&&!!eF&&(0,r.jsxs)("div",{"data-testid":Z.z7.MC_LIST_CONTENT,children:[e5===A.c.DETAILED&&(0,r.jsx)(m.Z,{items:h,listType:p,batchRenderingProps:{renderingType:H?"delayed":"intersection",rootMargin:e3},showItemNumbersInConstText:tt,pageNumber:ti}),e5===A.c.GRID&&(0,r.jsx)(I.Z,{items:h,listType:p,batchRenderingProps:{renderingType:H?"delayed":"intersection",rootMargin:e3},showItemNumbersInConstText:tt,pageNumber:ti}),e5===A.c.COMPACT&&!!eV&&(0,r.jsx)(c.Z,{items:h,listType:p,batchRenderingProps:{renderingType:H?"delayed":"intersection",rootMargin:e3},showItemNumbersInConstText:tt,pageNumber:ti}),!!eM&&e5===A.c.ULTRA_COMPACT&&!!eV&&(0,r.jsx)(P.Z,{items:h,listType:p,batchRenderingProps:{renderingType:H?"delayed":"intersection",rootMargin:e3},showItemNumbersInConstText:tt})]}),!!eK&&!ta&&!eF&&!ew&&(0,r.jsx)("div",{"data-testid":Z.z7.MC_LIST_CONTENT,children:(0,r.jsx)(eC,{dividers:"between",children:h.map((e,t)=>(0,r.jsx)(i,{index:t,...e},`custom-list-item-${t}-${e.titleId}`))})}),!!ta&&(0,r.jsx)(eP,{children:er}),eB?.error&&!eB?.isFetching||eZ?.error&&!eZ?.isFetching&&(0,r.jsx)(v.ZP,{canRetry:!0,error:eB?.error??eZ?.error,name:"ListPageMainColumn",onClickRetry:()=>{eB?.error&&eB?.retryQuery?.(),eZ?.error&&eZ?.retryQuery?.()}}),!!(eB?.isFetching||eZ?.isFetching)&&(0,r.jsx)(eA,{"data-testid":Z.z7.MC_REFINER_CHANGE_LOADER,children:(0,r.jsx)(d.Loader,{})}),!H&&!!x&&!ew&&!!eX&&!!eK&&(0,r.jsx)(_.Yv,{queryOptions:{query:x.query,variables:{...eQ,...eH,first:x?.pageSize},context:ez},onDataReceived:e=>{let{pageInfo:t,items:i}=x?.itemsTransform(e,h)??{};e1({...eQ,after:t?.endCursor}),E(i),e8(t.hasNextPage)},onError:(e,t)=>{eD({refMarkerSuffix:[j.Cd.INTERSECTION_PAGINATION,j.Cd.ERROR],pageAction:F.QJ.PAGINATION_ERROR}),t&&eD({refMarkerSuffix:[j.Cd.INTERSECTION_PAGINATION,j.Cd.ERROR,j.Cd.DATA],pageAction:F.QJ.PAGINATION_ERROR_AND_DATA})},onFetch:()=>{eD({refMarkerSuffix:[j.Cd.INTERSECTION_PAGINATION,j.Cd.FETCH],pageAction:F.QJ.PAGINATION_NEXT})},intersectionOptions:{rootMargin:e3}}),eU===U.E1&&(0,r.jsx)(ea,{isListOwner:z??!1,isFetching:eB?.isFetching||eZ?.isFetching}),!!H&&eG>1&&!!x&&!ew&&!!eK&&(0,r.jsx)(b.ZP,{...to})]})};let ex=l.default.div.withConfig({componentId:"sc-b9995ff0-0"})(["align-items:center;display:flex;flex-flow:row wrap;margin-bottom:",";width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"],u.spacing.m),ey=l.default.div.withConfig({componentId:"sc-b9995ff0-1"})(["align-items:center;display:flex;order:3;.","{min-width:1rem;}","{justify-content:end;width:100%;}&.has-filtering{","{.","{display:none;}}","{justify-content:space-between;}}"],R.Wp,u.mediaQueries.breakpoints.below.l,u.mediaQueries.breakpoints.below.m,R.Wp,u.mediaQueries.breakpoints.below.l),eE=l.default.div.withConfig({componentId:"sc-b9995ff0-2"})(["order:5;width:fit-content;","{order:2;}"],u.mediaQueries.breakpoints.below.l),eA=l.default.div.withConfig({componentId:"sc-b9995ff0-3"})(["align-items:center;display:flex;height:20rem;justify-content:center;"]),eP=l.default.div.withConfig({componentId:"sc-b9995ff0-4"})(["margin-top:",";"],u.spacing.m),eC=(0,l.default)(d.MetaDataList).withConfig({componentId:"sc-b9995ff0-5"})(["margin-bottom:",";","{",";border:1px solid ",";padding:",";}","{border-bottom:1px solid ",";border-top:1px solid ",";}"],u.spacing.s,u.mediaQueries.breakpoints.above.s,(0,u.setPropertyToShapeVar)("border-radius","ipt-cornerRadius"),(0,u.getColorVar)("ipt-base-border-color"),u.spacing.s,u.mediaQueries.breakpoints.below.m,(0,u.getColorVar)("ipt-base-border-color"),(0,u.getColorVar)("ipt-base-border-color"))},69424:function(e,t,i){i.d(t,{NJ:function(){return o},Tv:function(){return n},Vs:function(){return a},_Z:function(){return d},l5:function(){return l},lC:function(){return c},m7:function(){return u}});var r=i(87801),s=i(30115);let a=r.l.LIST_MAIN,n={LIST_ORDER:"LIST_ORDER",ALPHABETICAL:"NAME",POPULARITY:"POPULARITY",DATE_ADDED:"DATE_ADDED"},o={LIST_ORDER:{id:"common_sort_by_list_order",defaultMessage:"List order"},ALPHABETICAL:{id:"common_sort_by_alphabetical",defaultMessage:"Alphabetical"},POPULARITY:{id:"common_sort_by_starmeter",defaultMessage:"STARmeter"},DATE_ADDED:{id:"common_sort_by_date_added",defaultMessage:"Date added"}},l={[n.LIST_ORDER]:s.kq.LIST_ORDER,[n.ALPHABETICAL]:s.kq.ALPHABETICAL,[n.POPULARITY]:s.kq.POPULARITY,[n.DATE_ADDED]:s.kq.DATE_ADDED},d={LIST_ORDER:"LIST_ORDER",DATE_ADDED:"CREATED_DATE"},u={LIST_ORDER:{id:"common_sort_by_list_order",defaultMessage:"List order"},DATE_ADDED:{id:"common_sort_by_date_added",defaultMessage:"Date added"}},c={[d.LIST_ORDER]:s.kq.LIST_ORDER,[d.DATE_ADDED]:s.kq.DATE_ADDED}},36230:function(e,t,i){i.d(t,{N1:function(){return c},QF:function(){return g},dm:function(){return f},xr:function(){return m}});var r=i(30382),s=i.n(r),a=i(64072),n=i(88758),o=i(80032),l=i(36543),d=i(97149),u=i(56941);s()`
    query ListMainListMetadata($lsConst: ID!) {
        list(id: $lsConst) {
            author {
                userId
                username {
                    text
                }
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
`;let c=s()`
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
`;s()`
    query TitleListMainPageFacetFieldsAndTotal($lsConst: ID!) {
        list(id: $lsConst) {
            titleListItemSearch(first: 0) {
                ...TitleListFacetFields
                total
            }
        }
    }
    ${l.qp}
`;let g=s()`
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
`,f=s()`
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
`,m=s()`
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
`;s()`
    query ListFromPoll($pollListId: ID!) {
        poll(id: $pollListId) {
            createdFromListId
        }
    }
`},15534:function(e,t,i){i.d(t,{k:function(){return a},z:function(){return n}});var r=i(4689),s=i(24298);let a=(e,t)=>{let{authorMetadata:i,createdDate:r,description:a,lastModifiedDate:o,listType:l,name:d,total:u}=(0,s.yr)(e);return{authorMetadata:i,createdDate:r,description:a,lastModifiedDate:o,listType:l,name:d,items:n(e.list,t),total:u}},n=(e,t)=>{let i=e?.imageItems?.edges,s=[];return i?.forEach(e=>{let i=r.Q(e.node,t);s.push(i)}),s}},55412:function(e,t,i){i.d(t,{A0:function(){return d},Xb:function(){return l},v9:function(){return o}});var r=i(34764),s=i(31885),a=i(69424),n=i(24298);let o=(e,t)=>{let{authorMetadata:i,createdDate:r,description:s,lastModifiedDate:a,listType:o,name:d,total:u}=(0,n.yr)(e);return{authorMetadata:i,createdDate:r,description:s,items:l(e.list,t),lastModifiedDate:a,listType:o,name:d,total:u}},l=(e,t)=>{let i=e?.nameListItemSearch?.edges,s=[];return i?.forEach(e=>{let i=r.Hv({...e.node,listItem:e.listItem},t);s.push(i)}),s},d=(e,t,i)=>[{queryVariables:{first:t,sort:{by:a.Tv.LIST_ORDER,order:s.Asd.Asc}},text:e.formatMessage(a.NJ.LIST_ORDER),value:a.Tv.LIST_ORDER},{queryVariables:{first:t,sort:{by:a.Tv.POPULARITY,order:s.Asd.Asc}},text:e.formatMessage(a.NJ.POPULARITY),value:a.Tv.POPULARITY},{queryVariables:{first:t,sort:{by:a.Tv.ALPHABETICAL,order:s.Asd.Asc}},text:e.formatMessage(a.NJ.ALPHABETICAL),value:a.Tv.ALPHABETICAL},{queryVariables:{first:t,sort:{by:a.Tv.DATE_ADDED,order:s.Asd.Asc}},text:e.formatMessage(a.NJ.DATE_ADDED),value:a.Tv.DATE_ADDED}].map(e=>e.value!==i?.by?e:{...e,queryVariables:{...e.queryVariables,sort:{...e?.queryVariables?.sort,order:i.order}}})},24298:function(e,t,i){i.d(t,{CX:function(){return f},I:function(){return m},yr:function(){return g}});var r=i(57260),s=i(55260),a=i(31885),n=i(87657),o=i(69424),l=i(36230),d=i(55412),u=i(13726),c=i(57066);let g=e=>{let t=e.list?.name?.originalText??"",i=e?.list?.author?.username?.text??e?.list?.author?.userId??"",r=e.list?.items?.total??0,s=e.list?.listType?.id;return{authorMetadata:{authorName:i,authorId:e.list?.author?.userId||""},createdDate:e.list?.createdDate,name:t,description:{markdown:e.list?.description?.originalText?.markdown??"",plaidHtml:e.list?.description?.originalText?.plaidHtml??"",plainText:e.list?.description?.originalText?.plainText??""},lastModifiedDate:e.list?.lastModifiedDate,listType:s,total:r}},f=(e,t,i,r,s,d,u,c)=>{let g,f;let m={first:r,lsConst:t,jumpToPosition:c?(0,n.B)(c,r):void 0};switch(e){case a.lZo.Titles:g=l.N1,f={...m,filter:u,sort:d,isInPace:s};break;case a.lZo.People:g=l.QF,f={...m,refTagQueryParam:o.Vs,originalTitleText:i,filter:u,sort:d,isInPace:s};break;case a.lZo.Images:g=l.dm,f=m;break;case a.lZo.Videos:g=l.xr,f={...m,sort:d}}return{pageQuery:g,pageQueryVariables:f}},m=(e,t,i,n,g,f,m)=>{switch(e){case a.lZo.Titles:return{query:l.N1,queryParamMap:r.G6,initialSelectionValue:m?.by??r.y1.LIST_ORDER,itemsTransform:e=>{let t=(0,u.t)(e?.list,f);return{pageInfo:e?.list?.titleListItemSearch?.pageInfo??{hasNextPage:!1,hasPreviousPage:!1,endCursor:""},items:t,totalItems:e?.list?.titleListItemSearch?.total}},sortOptions:(0,s.v)(t,g,n,m)};case a.lZo.People:return{query:l.QF,queryParamMap:o.l5,initialSelectionValue:m?.by??o.Tv.LIST_ORDER,itemsTransform:e=>{let t=(0,d.Xb)(e?.list,f);return{pageInfo:e?.list?.nameListItemSearch?.pageInfo??{hasNextPage:!1,hasPreviousPage:!1,endCursor:""},items:t,totalItems:e?.list?.nameListItemSearch?.total}},sortOptions:(0,d.A0)(t,g,m)};case a.lZo.Videos:return{query:l.xr,queryParamMap:o.lC,initialSelectionValue:m?.by??o._Z.LIST_ORDER,itemsTransform:e=>{let r=(0,c.UV)(e?.list,i,t);return{pageInfo:e?.list?.videoItems?.pageInfo??{hasNextPage:!1,hasPreviousPage:!1,endCursor:""},items:r,totalItems:e?.list?.videoItems?.total}},sortOptions:(0,c.uI)(t,g,m)};default:return}}},13726:function(e,t,i){i.d(t,{T:function(){return a},t:function(){return n}});var r=i(86054),s=i(24298);let a=(e,t)=>{let{authorMetadata:i,createdDate:r,description:a,lastModifiedDate:o,listType:l,name:d}=(0,s.yr)(e);return{authorMetadata:i,createdDate:r,description:a,items:n(e.list,t),lastModifiedDate:o,listType:l,name:d,total:e?.list?.titleListItemSearch?.total??0}},n=(e,t)=>{let i=e?.titleListItemSearch?.edges,s=[];return i?.forEach(e=>{let i=r.GI({...e.node,listItem:e.listItem},t);s.push(i)}),s}},57066:function(e,t,i){i.d(t,{E:function(){return o},UV:function(){return l},uI:function(){return d}}),i(45455);var r=i(19705),s=i(31885),a=i(69424),n=i(24298);let o=(e,t,i)=>{let{authorMetadata:r,createdDate:s,description:a,lastModifiedDate:o,listType:d,name:u,total:c}=(0,n.yr)(e);return{authorMetadata:r,createdDate:s,description:a,items:l(e.list,i,t),lastModifiedDate:o,listType:d,name:u,total:c}},l=(e,t,i)=>{let s=e?.videoItems?.edges,a=[];return e&&s&&s?.forEach(e=>{if(!e.node||!e.node.listItem)return;let s=r.Rz(e.node,t,i);a.push(s)}),a},d=(e,t,i)=>[{queryVariables:{first:t,sort:{by:a._Z.LIST_ORDER,order:s.Asd.Asc}},text:e.formatMessage(a.m7.LIST_ORDER),value:a._Z.LIST_ORDER},{queryVariables:{first:t,sort:{by:a._Z.DATE_ADDED,order:s.Asd.Asc}},text:e.formatMessage(a.m7.DATE_ADDED),value:a._Z.DATE_ADDED}].map(e=>e.value!==i?.by?e:{...e,queryVariables:{...e.queryVariables,sort:{...e?.queryVariables?.sort,order:i.order}}})},40087:function(e,t,i){i.d(t,{p:function(){return m}});var r=i(52322);i(2784);var s=i(53665),a=i(19596),n=i(88169),o=i(86704),l=i(99513),d=i(27513),u=i(66724),c=i(11438),g=i(21795);let f={CONTAINER:"list-author-and-metrics",AUTHOR_LINK:"list-author-link"},m=e=>{let{authorMetadata:t,createdDate:i,lastModifiedDate:a,listDescription:o}=e,m=(0,s.Z)(),{userProfileLinkBuilder:h}=(0,u.WOb)(),p=new Date,T=new Date(Date.UTC(p.getUTCFullYear(),p.getUTCMonth(),p.getUTCDate(),p.getUTCHours(),p.getUTCMinutes(),p.getUTCSeconds())),x=i?(0,d.LU)(m,new Date(i),T):void 0,y=x?m.formatMessage({id:"list_main_created",defaultMessage:"Created {duration} ago"},{duration:x}):void 0,E=a?(0,d.LU)(m,new Date(a),T):void 0,A=E?m.formatMessage({id:"list_main_last_modified",defaultMessage:"Modified {duration} ago"},{duration:E}):void 0;return(0,r.jsxs)("div",{"data-testid":f.CONTAINER,children:[(0,r.jsx)(l.MQ,{children:[t?.authorName?(0,r.jsxs)(r.Fragment,{children:[m.formatMessage({id:"common_by",defaultMessage:"By"})," ",(0,r.jsx)(n.TextLink,{"data-testid":f.AUTHOR_LINK,href:h({urconst:t.authorId??"",refSuffix:[c.Cd.USER,c.Cd.HERO]}),text:t?.authorName})]}):null,y,A].filter(Boolean).map((e,t)=>(0,r.jsx)("span",{children:e},t)).reduce((e,t)=>null===e?[t]:[...e," • ",t],null)}),(0,r.jsx)(I,{className:g.k.LIST_DESCRIPTION,children:o})]})},I=(0,a.default)(l.MQ).withConfig({componentId:"sc-6a2b2d0f-0"})(["margin-top:",";"],o.spacing.l)},56941:function(e,t,i){i.d(t,{Bu:function(){return l},OO:function(){return u},Xd:function(){return g},b3:function(){return f}});var r=i(30382),s=i.n(r),a=i(64072),n=i(80032),o=i(97149);let l=s()`
    fragment ListMainInteractions on List {
        allTimeInteractions: listInteractionCounts(timeRanges: [ALL_TIME]) {
            views
        }
        weekInteractions: listInteractionCounts(timeRanges: [ONE_WEEK]) {
            views
        }
    }
`,d=s()`
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
                    productionStatus(useEntitlement: false) {
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
`,u=s()`
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
`,c=s()`
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
`,g=s()`
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
`,f=s()`
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
`},8830:function(e,t,i){i.d(t,{y:function(){return r}});let r="page"},78716:function(e,t,i){i.d(t,{p:function(){return d}});var r=i(2784),s=i(93855),a=i(99546),n=i(89105),o=i(4363);let l={fetching:!0,stale:!1},d=e=>{let{queryOptions:t,ref:i,pause:d,options:u,onIntersection:c}=e,g=(0,n.OV)(),f=!u?.disableAds&&g,[m,I]=(0,r.useState)(!1),[h,p]=(0,r.useState)(!1),T=(0,s.Jf)(i,!u?.continueObserving&&h,I);(0,a.S)(i,T,{...u?.intersectionOptions}),(0,r.useEffect)(()=>{m&&c?.()},[m]);let x=!u?.disableIntersection&&!m,[y,E]=(0,o.E)({...t,pause:f||x||d||!1});return((0,r.useEffect)(()=>{y?.data&&p(!0)},[y?.data]),y.data||y.error)?[y,E]:[l,E]}},54729:function(e,t,i){i.d(t,{UC:function(){return T}});var r=i(5632),s=i(2784),a=i(82177),n=i(31885),o=i(86958),l=i(72416),d=i(1833);let u="view",c=(e,t)=>{let i=e?.[u]?.toString();return i&&t.includes(i)?i:null},g=(e,t)=>{let i=(0,d.f_)(e.asPath,u,t);e.push(i,void 0,{shallow:!0})};var f=i(83163),m=i(48687),I=i(84314);let h="view",p={[n.lZo.Titles]:[a.c.COMPACT,a.c.DETAILED,a.c.GRID,a.c.ULTRA_COMPACT],[n.lZo.People]:[a.c.COMPACT,a.c.DETAILED,a.c.GRID],[n.lZo.Videos]:[a.c.DETAILED,a.c.GRID]},T=e=>{let{forceFeature:t,initialValue:i,listType:a}=e,n=(0,r.useRouter)(),{context:d}=(0,o.B)(),u=(0,I.n)(),T=p[a]??[],x=(0,m.hg)({weblabID:f.lh.IMDB_STORE_LIST_VIEW_TYPE_917748,treatments:{T1:!0}})||t,[y,E]=(0,s.useState)(()=>{if(x){let e=c(d.queryParams,T);if(null!==e)return e}return i});return(0,s.useEffect)(()=>{if(x){if(!u){(0,l.dZ)(h);return}let e=(0,l.ID)(h),t=null!==c(d.queryParams,T);null!==e&&!t&&T.includes(e)&&E(e)}},[]),{viewType:y,setViewType:e=>{x&&(u&&(0,l._2)(h,e),g(n,e)),E(e)}}}},69864:function(e,t,i){i.d(t,{f:function(){return n}});var r=i(25436),s=i(49996),a=i(66724);let n=()=>{let{pageType:e}=(0,s.y)(),{nameMediaViewerLinkBuilder:t,titleMediaViewerLinkBuilder:i,galleryMediaViewerLinkBuilder:n,listMediaViewerLinkBuilder:o}=(0,a.WOb)();return s=>{let{pageConst:a,rmconst:l,...d}=s;if(e===r.PageType.TITLE)return i({tconst:a,rmconst:l,...d});if(e===r.PageType.NAME)return t({nconst:a,rmconst:l,...d});if(e===r.PageType.GALLERY)return n({rgconst:a,rmconst:l,...d});if(e===r.PageType.LIST)return o({lsconst:a,rmconst:l,...d});throw Error(`Unrecognized page type provided to useMediaViewerLinkBuilder: ${e}`)}}},68139:function(e,t,i){i.d(t,{X:function(){return s},k:function(){return a}});var r=i(63370);let s=e=>{let t=e?.series?.originalTitleText?.text,i=e?.series?.titleText?.text;return(0,r.K)({titleText:i,originalTitleText:t})},a=(e,t)=>{let i=t?.series.originalTitleText?.text,s=t?.series.titleText?.text;return(0,r.L)(e,i,s)}}}]);