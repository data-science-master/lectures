(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3402],{3357:function(e,t,i){"use strict";i.d(t,{C5:function(){return a},DA:function(){return c},EQ:function(){return g},Ew:function(){return m},RQ:function(){return f},dS:function(){return u},gd:function(){return h},ih:function(){return p}});var n,a,r=i(16189),s=i(54122);(n=a||(a={})).activate="activate",n.midpoint1="midpoint1",n.midpoint2="midpoint2",n.midpoint3="midpoint3",n.complete="complete";let o=new Map([["videoStartTrackers","activate"],["videoFirstQuartileTrackers","midpoint1"],["videoMidpointTrackers","midpoint2"],["videoThirdQuartileTrackers","midpoint3"],["videoCompleteTrackers","complete"]]),l="imdb-promoted-ad-trackers",d=(0,r.createLogger)()("AutorotateHero-AdTracker"),c=e=>Object.keys(e).reduce((t,i)=>{let n=e[i],a=o.get(i),r=n&&a&&n.map(e=>({track:e,when:a}));return r&&r.forEach(e=>t.push(e)),t},[]),g=e=>new Promise(t=>{let i=new Image;i.src=e,i.onload=()=>t(),i.onerror=()=>t()}),m=async e=>{e.length&&await Promise.all(e.map(e=>g(e)))},p=e=>{e?.formattedVideoTrackers&&window.sessionStorage&&window.sessionStorage.setItem(l,JSON.stringify(e.formattedVideoTrackers))},u=e=>{"undefined"!=typeof document&&document.location&&document.location.assign(e)},h=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(e){d.error("There was a problem decoding promotedVideoAd JSON",e)}else if(e&&e.id)return e};function f(){let e=(0,s.G)(l);if(e){(0,s.VV)(l);try{return JSON.parse(e)}catch(e){d.error("Error parsing trackers",e)}}}},54137:function(e,t,i){"use strict";i.d(t,{Ec:function(){return g},$:function(){return m}});var n=i(52322),a=i(72779),r=i.n(a);i(2784);var s=i(19596),o=i(88169),l=i(86704),d=i(75824),c=i(47069);let g={SPONSORED_LINK:"sponsored-link",SPONSORED_TEXT:"sponsored-text",SPONSORED_DOT:"sponsored-dot",INHERIT_FONT:"sponsored-inherit-font",SPONSORED_ICON:"sponsored-icon"},m=e=>{let{adFeedbackUrl:t,includeSpacingDot:i,inheritFontSize:a}=e,s=(0,d.N)({id:"compliance_sponsored_ad_link",defaultMessage:"Sponsored"});return(0,n.jsxs)(u,{"aria-label":s,className:r()(g.SPONSORED_LINK,{[g.INHERIT_FONT]:a}),href:t,target:"_blank",onClick:p,children:[!!i&&(0,n.jsx)("span",{className:g.SPONSORED_DOT,children:"•"}),(0,n.jsx)("span",{className:g.SPONSORED_TEXT,children:s}),(0,n.jsx)(o.Icon,{className:g.SPONSORED_ICON,name:"info"})]})},p=e=>{e.stopPropagation(),(0,c.P)("SponsoredLink.PromotedVideo")},u=s.default.a.withConfig({componentId:"sc-7a5c1d1d-0"})(["font-size:11px;color:",";text-decoration:none;&:hover{opacity:0.85;}&.","{font-size:inherit;}.","{padding:0 ",";}.","{width:14px;height:14px;margin:-3px 0 0 2px;}"],(0,l.getColorVarValue)("ipt-on-baseAlt-textSecondary-color"),g.INHERIT_FONT,g.SPONSORED_DOT,l.spacing.xs,g.SPONSORED_ICON)},78893:function(e,t,i){"use strict";i.d(t,{p:function(){return h}});var n=i(52322),a=i(2784),r=i(53665),s=i(19596),o=i(88169),l=i(86704),d=i(66724),c=i(11438),g=i(14438);let m={id:"eventHistoryWidget_title",defaultMessage:"Event history"},p={2030:{id:"eventHistoryWidget_decadeTabLabel_2030",defaultMessage:"2030s"},2020:{id:"eventHistoryWidget_decadeTabLabel_2020",defaultMessage:"2020s"},2010:{id:"eventHistoryWidget_decadeTabLabel_2010",defaultMessage:"2010s"},2e3:{id:"eventHistoryWidget_decadeTabLabel_2000",defaultMessage:"2000s"},1990:{id:"eventHistoryWidget_decadeTabLabel_1990",defaultMessage:"1990s"},1980:{id:"eventHistoryWidget_decadeTabLabel_1980",defaultMessage:"1980s"},1970:{id:"eventHistoryWidget_decadeTabLabel_1970",defaultMessage:"1970s"},1960:{id:"eventHistoryWidget_decadeTabLabel_1960",defaultMessage:"1960s"},1950:{id:"eventHistoryWidget_decadeTabLabel_1950",defaultMessage:"1950s"},1940:{id:"eventHistoryWidget_decadeTabLabel_1940",defaultMessage:"1940s"},1930:{id:"eventHistoryWidget_decadeTabLabel_1930",defaultMessage:"1930s"},1920:{id:"eventHistoryWidget_decadeTabLabel_1920",defaultMessage:"1920s"},1910:{id:"eventHistoryWidget_decadeTabLabel_1910",defaultMessage:"1910s"},1900:{id:"eventHistoryWidget_decadeTabLabel_1900",defaultMessage:"1900s"},1890:{id:"eventHistoryWidget_decadeTabLabel_1890",defaultMessage:"1890s"}},u={id:"eventHistoryWidget_decadeTabLabel_fallback",defaultMessage:"Other years"},h=e=>{let{eventId:t,eventEditions:i,headerText:s,hideHeader:l=!1,selectedEventEditionId:p}=e,u=(0,r.Z)(),{eventMainLinkBuilder:h,eventMainYearInstanceLinkBuilder:y}=(0,d.WOb)(),I=(0,g.EO)(),v=h({evconst:t,refSuffix:c.Cd.TEXT}),{decadeToEventMap:w,selectedDecade:E}=f(i,p),C=[];Object.keys(w).forEach(e=>{C.unshift({id:e,label:u.formatMessage(x(e))})});let[_,S]=(0,a.useState)(E||C[0]?.id);if(!i||!i.length)return null;let k=Object.keys(w).length>1;return(0,n.jsxs)(T,{"data-testid":"event-history-widget",sidePadding:"pageMargin",children:[!l&&(0,n.jsx)(o.SubSectionTitle,{padding:"none",href:v,children:s||u.formatMessage(m)}),(0,n.jsxs)(o.PageSection,{topPadding:"none",bottomPadding:"none",borderType:"responsiveLine",className:"event-history-tabs-container",children:[!!k&&(0,n.jsx)(o.Tabs,{tabs:C,disableUppercase:!0,value:_,backgroundColor:"shade1",onChange:(e,t)=>{S(e),I({refMarkerSuffix:[c.Cd.NAVIGATION,{t:c.Cd.TAB,n:t+1}],pageAction:"tab-select"})},onNextPage:()=>I({refMarkerSuffix:c.Cd.NAVIGATION,pageAction:"next-button-click"}),onPreviousPage:()=>I({refMarkerSuffix:c.Cd.NAVIGATION,pageAction:"prev-button-click"})}),!!w[_]&&(0,n.jsx)(o.PageSection,{topPadding:"none",bottomPadding:"none",children:(0,n.jsx)(b,{children:w[_].map((e,i)=>(0,n.jsx)(o.Chip,{id:`event-history-edition-${i}`,label:`${e.year}`,href:y({evconst:t,year:e.year,instance:e.instanceWithinYear,refSuffix:{t:c.Cd.YEAR,n:i+1}}),onColor:e.id===p?"accent1":"",filled:e.id===p},`event-history-edition-${i}`))})})]})]})},f=(e,t)=>{let i;if(!e)return{decadeToEventMap:{},selectedDecade:void 0};let n={};return e.forEach(e=>{let a=10*Math.floor(e.year/10);n[a]=n[a]||[],n[a].push(e),e.id===t&&(i=a.toString())}),{decadeToEventMap:n,selectedDecade:i}},x=e=>p[e]||u,T=(0,s.default)(o.PageSection).withConfig({componentId:"sc-c453816c-0"})(["&&{margin-bottom:",";}"],l.spacing.xs),b=(0,s.default)(o.ChipList).withConfig({componentId:"sc-c453816c-1"})(["margin-top:",";","{padding-left:",";padding-right:",";margin-bottom:",";}"],l.spacing.m,l.mediaQueries.breakpoints.above.l,l.spacing.m,l.spacing.m,l.spacing.xs)},42748:function(e,t,i){"use strict";i.d(t,{X:function(){return s}});var n=i(52322);i(2784);var a=i(89105),r=i(10105);let s=e=>{let{children:t,componentId:i,hideLoader:s}=e,o=(0,a.OV)(i),l=s?null:(0,n.jsx)(r.ZP,{height:650,"data-testid":"delayed-loader"});return o?l:t}},79523:function(e,t,i){"use strict";i.d(t,{U:function(){return s}});var n=i(52322),a=i(27722);i(2784);var r=i(4736);let s=e=>{let{constId:t}=e,{trackInfo:i,ariaLabel:s,isPending:o,onClick:l}=(0,r.R)(t);return(0,n.jsx)(a.IconButton,{name:i?.isTracking?"notifications-add-check":"notifications-add",label:s,onSelect:l,disabled:o})}},24216:function(e,t,i){"use strict";i.d(t,{B:function(){return a},T:function(){return n}});let n={IN_TRACK:{id:"common_buttons_track_label_inTrack",defaultMessage:"Tracking"},NOT_TRACKED:{id:"common_buttons_track_label_addToTrack",defaultMessage:"Track"},IS_LOADING:{id:"common_ariaLabel_loading",defaultMessage:"Loading"},FAILED:{id:"common_buttons_track_failure",defaultMessage:"Failed to update, please try again"}},a={pendingItems:{},items:{},isRequesting:!1}},40962:function(e,t,i){"use strict";i.d(t,{S:function(){return b},Y:function(){return y}});var n=i(52322),a=i(2784);let r=(e,t)=>{switch(t.type){case"CHECK_IN_TRACK":if(void 0!==e.items[t.id])return e;return{...e,pendingItems:{...e.pendingItems,[t.id]:{isTracking:!0}}};case"SET_REQUESTING":if(e.isRequesting)return e;return{...e,isRequesting:!0};case"UPDATE_TRACK_STATE":{let i={...e,isRequesting:!1};return Object.keys(t.items).forEach(e=>{delete i.pendingItems[e],i.items[e]=t.items[e]}),i}case"ADD_TO_TRACK":{if(!t.id)return e;let i={...e,items:{...e.items,[t.id]:{isTracking:!0}}};return delete i.pendingItems[t.id],i}case"REMOVE_FROM_TRACK":{if(!t.id||"boolean"==typeof e.items[t.id]&&!e.items[t.id])return e;let i={...e,items:{...e.items,[t.id]:{isTracking:!1}}};return delete i.pendingItems[t.id],i}default:return e}};var s=i(24216),o=i(16189),l=i(91754),d=i(11602),c=i(30382),g=i.n(c);let m=g()`
    query IsNameTracked($ids: [ID!]!) {
        names(ids: $ids) {
            id
            trackNotificationPreferences {
                isTracking
            }
        }
    }
`,p=g()`
    query IsTitleTracked($ids: [ID!]!) {
        titles(ids: $ids) {
            id
            trackNotificationPreferences {
                isTracking
            }
        }
    }
`,u=(0,o.createLogger)()("ZukoTrackCalls"),h=()=>{let{queryWithContext:e}=(0,l.x)();return t=>e(p,{ids:t},{personalized:!0,serverSideCacheable:!1}).toPromise().then(e=>{let{data:t,error:i}=e,n={};return t?.titles.forEach(e=>{e&&(n[e.id]={isTracking:!!e?.trackNotificationPreferences?.isTracking})}),i&&u.error(i),n}).catch(e=>(u.error(e),{}))},f=()=>{let{queryWithContext:e}=(0,l.x)();return t=>e(m,{ids:t},{personalized:!0,serverSideCacheable:!1}).toPromise().then(e=>{let{data:t,error:i}=e,n={};return t?.names.forEach(e=>{e&&(n[e.id]={isTracking:!!e?.trackNotificationPreferences?.isTracking})}),i&&u.error(i),n}).catch(e=>(u.error(e),{}))},x=()=>{let{mutation:e}=(0,l.x)();return t=>e(d.qb,{input:{id:t}},{personalized:!0,serverSideCacheable:!1}).toPromise().then(e=>{let{data:t,error:i}=e;return i&&u.error(i),!!t?.trackConst?.success}).catch(e=>(u.error(e),!1))},T=()=>{let{mutation:e}=(0,l.x)();return t=>e(d.Vc,{input:{id:t}},{personalized:!0,serverSideCacheable:!1}).toPromise().then(e=>{let{data:t,error:i}=e;return i&&u.error(i),!!t?.untrackConst?.success}).catch(e=>(u.error(e),!1))},b=(0,a.createContext)({state:s.B,getIsInTrack:()=>Promise.resolve(void 0),addToTrack:()=>Promise.resolve(!1),removeFromTrack:()=>Promise.resolve(!1)}),y=e=>{let{children:t}=e,i=h(),o=f(),l=x(),d=T(),[c,g]=(0,a.useReducer)(r,s.B);(0,a.useEffect)(()=>{let e=Object.keys(c.pendingItems);if(e.length>0&&!c.isRequesting){g({type:"SET_REQUESTING"});let t=e.filter(e=>e.startsWith("nm")),n=e.filter(e=>e.startsWith("tt"));t.length>0&&o(t).then(e=>{g({type:"UPDATE_TRACK_STATE",items:e})}),n.length>0&&i(n).then(e=>{g({type:"UPDATE_TRACK_STATE",items:e})})}},[c.pendingItems,c.isRequesting]);let m=(0,a.useCallback)(e=>void 0!==c.items[e]?Promise.resolve(c.items[e]):(g({type:"CHECK_IN_TRACK",id:e}),Promise.resolve(void 0)),[c.pendingItems,c.items]),p=(0,a.useCallback)(async e=>{let t=await l(e);return t&&g({type:"ADD_TO_TRACK",id:e}),t},[]),u=(0,a.useCallback)(async e=>{let t=await d(e);return t&&g({type:"REMOVE_FROM_TRACK",id:e}),t},[]),y=(0,a.useMemo)(()=>({state:c,getIsInTrack:m,addToTrack:p,removeFromTrack:u}),[c]);return(0,n.jsx)(b.Provider,{value:y,children:t})}},4736:function(e,t,i){"use strict";i.d(t,{R:function(){return g}});var n=i(2784),a=i(53665),r=i(41174),s=i(11438),o=i(14438),l=i(37179),d=i(40962),c=i(24216);let g=e=>{let{sendFailureSnack:t}=(0,r.c1)(),{formatMessage:i}=(0,a.Z)(),{makeRefMarker:g}=(0,s.Lz)(),m=(0,o.EO)(),{state:p,addToTrack:u,removeFromTrack:h,getIsInTrack:f}=(0,n.useContext)(d.S),x=void 0!==p.items[e],T=void 0!==p.pendingItems[e],[b,y]=(0,n.useState)({trackInfo:p.items[e],isPending:!x});(0,n.useEffect)(()=>{let t=x&&!!p.items[e].isTracking!==b.trackInfo?.isTracking,i=b.isPending&&x;T||x?(t||i)&&y({trackInfo:p.items[e],isPending:!1}):f(e)},[p.items[e],p.pendingItems[e]]);let I=i(c.T.IS_LOADING),v=b.trackInfo?.isTracking?i(c.T.IN_TRACK):i(c.T.NOT_TRACKED);return{...b,ariaLabel:b.isPending?I:v,onClick:async()=>{y({...b,isPending:!0}),b.trackInfo?.isTracking?await h(e)?m({refMarkerString:g(s.Cd.TRACK),pageAction:`${l.QJ.TRACK_OFF}-${e}`}):t(i(c.T.FAILED)):await u(e)?m({refMarkerString:g(s.Cd.TRACK),pageAction:`${l.QJ.TRACK_ON}-${e}`}):t(i(c.T.FAILED))}}}},68557:function(e,t,i){"use strict";i.d(t,{i:function(){return s}});var n=i(52322),a=i(72779),r=i.n(a);i(2784);let s=e=>{let{children:t,displayStyle:i}=e,a=r()("grid w-full",{"grid-cols-1 m:grid-flow-col m:grid-cols-2 m:grid-rows-3":"dynamic"===i},{"grid-cols-1":"singleColumn"===i});return(0,n.jsx)("div",{className:a,children:t})}},65991:function(e,t,i){"use strict";i.d(t,{p:function(){return o}});var n=i(52322),a=i(72779),r=i.n(a);i(2784);var s=i(72113);let o=e=>{let{color:t,type:i}=(0,s.G)(),a=e.condensedPadding?"py-xs":"py-s";return(0,n.jsxs)("div",{className:r()(e.titleClassName,a,"flex px-m items-center"),children:[!!e.rankNumber&&(0,n.jsx)("div",{className:"pr-m",children:e.rankNumber}),e.preElement,(0,n.jsxs)("div",{className:"flex justify-between min-w-[0] w-full",children:[(0,n.jsxs)("a",{className:"pl-s block overflow-hidden hover:opacity-80 no-underline grow",href:e.titlePageLink,children:[(0,n.jsx)("div",{className:r()(t("accent2"),i("body"),"text-nowrap overflow-hidden text-ellipsis"),children:e.titleName}),(0,n.jsx)("div",{className:r()(t("textSecondary"),i("bodySmall")),children:e.secondaryText})]}),e.postElement]})]})}},9707:function(e,t,i){"use strict";i.d(t,{r:function(){return g}});var n=i(52322);i(2784);var a=i(53665),r=i(19596),s=i(88169),o=i(86704),l=i(22619),d=i(11947),c=i(43986);let g=e=>{let{scopedTitleIds:t,totalNumber:i,...r}=e,{watchedTitles:o}=(0,l.V)(),g=(0,a.Z)(),u=0,h=Math.min((u=t?.length?Object.keys(t?.reduce((e,t)=>o[t]?{...e,[t]:!0}:e,{})??{}).length:Object.keys(o).length)/i,1),f=g.formatMessage(c.TY.watchedProgress,{currentNumber:u,totalNumber:i});return(0,n.jsxs)(m,{...r,children:[(0,n.jsx)(s.ProgressBar,{ariaLabel:f,currentNumber:u,totalNumber:i}),(0,n.jsxs)(p,{"aria-hidden":!0,"data-testid":c.z7.WATCHED_PROGRESS_TEST_ID,children:[(0,n.jsx)("span",{children:f}),(0,n.jsx)("span",{children:(0,n.jsx)(d.A,{maximumFractionDigits:0,style:"percent",unit:"percent",value:h})})]})]})},m=r.default.div.withConfig({componentId:"sc-14c4aaa0-0"})(["margin-top:",";"],o.spacing.l),p=r.default.div.withConfig({componentId:"sc-14c4aaa0-1"})([""," display:flex;justify-content:space-between;margin-top:",";"],(0,o.setTypographyType)("overline"),o.spacing.xs)},67626:function(e,t,i){"use strict";i.d(t,{Z:function(){return y}});var n=i(52322);i(2784);var a=i(59430),r=i.n(a),s=i(55634),o=i(59002),l=i(14438),d=i(11438),c=i(8e3),g=i(19596),m=i(88169),p=i(86704),u=i(55220);let h=e=>{let{videos:t,listId:i,logShovelerInteraction:a}=e;if(!t||0===t.length)return null;let r=t.slice(0,2),s=t.slice(1,6);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f,{"data-testid":"grid_first_row_video",children:(0,n.jsx)(T,{rowNumber:1,videos:r,listId:i})}),(0,n.jsx)(x,{"data-testid":"grid_second_row_video",children:(0,n.jsx)(T,{videos:s,listId:i,rowNumber:2,isShoveler:s.length>=3,logShovelerInteraction:a})})]})},f=g.default.div.withConfig({componentId:"sc-fd689d34-0"})([".video-display{display:none;","{display:flex;}}"],p.mediaQueries.breakpoints.above.m),x=g.default.div.withConfig({componentId:"sc-fd689d34-1"})(["padding-top:",";.video-item{grid-column:span 2;}.video-display{display:flex;","{display:none;}}"],p.spacing.xs,p.mediaQueries.breakpoints.above.m),T=e=>{let{videos:t,listId:i,isShoveler:a=!1,rowNumber:r,logShovelerInteraction:s=()=>{}}=e,o=a?m.Shoveler:m.SubGrid;return(0,n.jsx)(o,{wrapsAt:2===r?"above-m":void 0,onPageChange:a?s:void 0,children:t.map((e,t)=>(0,n.jsx)(u.Z,{video:e,index:t+(r-1),listId:i,className:`video-item ${2===r&&0===t||1===r&&1===t?"video-display":""}`,slateProps:{overlayProps:{lineClamp:1}},titleProps:{title:e.name.value}},`VideoItem--${e.id}--${t}`))})},b=e=>{let{videos:t,videoCount:i,videoSectionTitle:a,videoSectionSubTitle:g,refTagPrefixOverride:m,listId:p,videoSectionTitleLinkType:u}=e,{value:f}=(0,d.Lz)(),x=m||f,T=(0,l.EJ)(`${x}_vi`);return t?.length?(0,n.jsx)(o.wW,{componentId:s.NG.Videos,children:(0,n.jsxs)(r(),{baseColor:"base","data-testid":"videos-section",children:[(0,n.jsx)(c.G,{videoCount:i,videoSectionTitle:a,videoSectionSubTitle:g,refTagPrefixOverride:m,videoPlaylistId:p,videoSectionTitleLinkType:u}),(0,n.jsx)(h,{videos:t,listId:p,logShovelerInteraction:()=>T})]})}):(0,n.jsx)(n.Fragment,{})};var y=e=>(0,n.jsx)(d.xm,{value:d.Cd.VIDEOS,children:(0,n.jsx)(b,{...e})})},8e3:function(e,t,i){"use strict";i.d(t,{G:function(){return m},o:function(){return a}});var n,a,r=i(52322);i(2784);var s=i(88169),o=i(75824),l=i(49996),d=i(66724),c=i(11438),g=i(1833);(n=a||(a={})).NAME_VIDEO_GALLERY="NAME_VIDEO_GALLERY",n.TITLE_VIDEO_GALLERY="TITLE_VIDEO_GALLERY",n.PLAYLIST="PLAYLIST";let m=e=>{let t,{videoCount:i,videoSectionTitle:n,videoSectionSubTitle:a,refTagPrefixOverride:m,videoSectionTitleLinkType:p,videoPlaylistId:u}=e,{nameVideoGalleryLinkBuilder:h,titleVideoGalleryLinkBuilder:f,listMainLinkBuilder:x}=(0,d.WOb)(),{pageConst:T="",pageType:b}=(0,l.y)(),y=(0,o.N)({id:"feature_videos_title",defaultMessage:"Videos"});"PLAYLIST"===p&&u?t=x({lsconst:u,refSuffix:c.Cd.SEE_MORE}):"TITLE_VIDEO_GALLERY"===p?t=f({tconst:T,refSuffix:c.Cd.SEE_MORE}):"NAME_VIDEO_GALLERY"===p&&(t=h({nconst:T,refSuffix:c.Cd.SEE_MORE}));let I=m?`${m}_${c.Cd.SEE_MORE}`:void 0,v=t&&I?(0,g.Lr)(t,I):t;return(0,r.jsx)(s.SectionTitle,{"data-testid":"videos-title",href:v,subText:i?.toString(),description:a,children:n||y})}},21915:function(e,t,i){"use strict";i.d(t,{S:function(){return R}});var n=i(52322),a=i(14865),r=i(2784),s=i(19596),o=i(88169),l=i(86704),d=i(54588),c=i(75824),g=i(11438),m=i(50176);let p=e=>{if(!e)return{};let{awardId:t,eventEditionId:i,numWinners:n,winnersOffset:a}=(0,m.parse)(e.replace("?",""));return{overrideEvent:t&&i?{awardId:t.toString(),eventEditionId:i.toString()}:void 0,numWinners:n?parseInt(n.toString()):void 0,winnersOffset:a?parseInt(a.toString()):void 0}};var u=i(41174),h=i(66724),f=i(87801);let x=(e,t,i)=>(e||[]).map(e=>{let n,a;if(a=e.forEpisodes?e.forEpisodes[0].titleText?.text:void 0,a=e.forSongTitles?e.forSongTitles[0]:a,"AwardedNames"===e.awardedEntities.__typename){let i=e.awardedEntities,r=i.names[0];if(!r.primaryImage?.url||!r.primaryImage?.height||!r.primaryImage?.width||!r.primaryImage?.caption?.plainText||!e.award.category?.text||!r.nameText?.text)return;n={poster:{url:r.primaryImage.url,maxHeight:r.primaryImage.height,maxWidth:r.primaryImage.width,caption:r.primaryImage.caption.plainText},pageLink:t({nconst:r.id,refSuffix:f.C.EMPTY}),awardName:e.award.category.text,winnerName:r.nameText.text,constId:r.id,title:!1,secondaryWinners:(i.secondaryTitles||[]).map(e=>e.titleText?.text).filter(Boolean),notes:a}}else if("AwardedTitles"===e.awardedEntities.__typename){let t=e.awardedEntities,r=t.titles[0];if(!r.primaryImage?.url||!r.primaryImage?.height||!r.primaryImage?.width||!r.primaryImage?.caption?.plainText||!e.award.category?.text||!r.titleText?.text)return;n={poster:{url:r.primaryImage.url,maxHeight:r.primaryImage.height,maxWidth:r.primaryImage.width,caption:r.primaryImage.caption.plainText},pageLink:i({tconst:r.id,refSuffix:f.C.EMPTY}),awardName:e.award.category.text,winnerName:r.titleText.text,constId:r.id,title:!0,secondaryWinners:(t.secondaryNames||[]).map(e=>e.nameText?.text).filter(Boolean),notes:a}}return n}).filter(Boolean);var T=i(30382),b=i.n(T);let y=b()`
    query WinnersWidget(
        $enableOverride: Boolean!
        $overrideEvent: OverrideLiveEventInput
        $numWinners: Int!
    ) {
        eventLiveResults(
            override: {
                enableOverride: $enableOverride
                overrideEvent: $overrideEvent
            }
        ) {
            eventId
            noWinnersBlurb {
                value
            }
            eventPageUrl
            displayDescription {
                value
            }
            displayTitle {
                value
            }
            eventEditionAward {
                id
                awardName
                winners(limit: $numWinners) {
                    id
                    award {
                        category {
                            text
                        }
                    }
                    forEpisodes {
                        titleText {
                            text
                        }
                    }
                    forSongTitles
                    awardedEntities {
                        ... on AwardedNames {
                            __typename
                            names {
                                id
                                nameText {
                                    text
                                }
                                primaryImage {
                                    url
                                    height
                                    width
                                    caption {
                                        plainText
                                    }
                                }
                            }
                            secondaryTitles {
                                titleText {
                                    text
                                }
                            }
                            secondaryCompanies {
                                companyText {
                                    text
                                }
                            }
                        }
                        ... on AwardedTitles {
                            __typename
                            titles {
                                id
                                titleText {
                                    text
                                }
                                primaryImage {
                                    url
                                    height
                                    width
                                    caption {
                                        plainText
                                    }
                                }
                            }
                            secondaryNames {
                                nameText {
                                    text
                                }
                            }
                            secondaryCompanies {
                                companyText {
                                    text
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`,I=e=>{let{numWinners:t,winnersOffset:i,overrideEvent:n}=e,{nameMainLinkBuilder:s,titleMainLinkBuilder:o}=(0,h.WOb)(),l=(0,a.getIsBrowser)(),[d,c]=(0,r.useState)(l),[g,m]=(0,r.useState)(void 0),[p,f]=(0,r.useState)(void 0),[T,b]=(0,r.useState)(void 0),[I,v]=(0,r.useState)(void 0),[w,E]=(0,r.useState)(void 0),[C,_]=(0,r.useState)(void 0),[{data:S}]=(0,u.E8)({query:y,requestPolicy:"network-only",variables:{enableOverride:!!n,overrideEvent:n,numWinners:t},context:{personalized:!1,serverSideCacheable:!1},pause:!d});return(0,r.useEffect)(()=>{if(!S)return;if(!S.eventLiveResults){c(!1),setTimeout(()=>c(!0),9e5);return}m(S.eventLiveResults.displayTitle.value),f(S.eventLiveResults.displayDescription?.value),b(S.eventLiveResults.eventPageUrl),v(S.eventLiveResults.noWinnersBlurb.value);let e=x(S.eventLiveResults.eventEditionAward.winners,s,o);E(e?.slice(i,i+3)),_(S.eventLiveResults.eventId),c(!1),setTimeout(()=>c(!0),3e4)},[S,i]),{displayTitle:g,displayDescription:p,eventPageUrl:T,noWinnersBlurb:I,winners:w,eventId:C}};var v=i(82925),w=i(12563);let E=e=>{let{winner:t}=e,{title:i,constId:a,poster:s,pageLink:l,awardName:d,winnerName:m,secondaryWinners:p,notes:u}=t,{baseColor:h}=(0,r.useContext)(v.Theme).palette,{makeRefMarker:f,value:x}=(0,g.Lz)(),{isInWatchlist:T,isPending:b,onClick:y,ariaLabel:I}=(0,w.X)(a,x),E=`${l}?ref_=${f(i?g.Cd.TITLE:g.Cd.NAME)}`,M=(0,c.N)({id:"common_ariaLabel_goTo",defaultMessage:m},{target:m}),N=(0,c.N)({id:"feature_winnersWidget_signpost",defaultMessage:"WINNER"});return(0,n.jsxs)(C,{children:[(0,n.jsx)(o.Poster,{ariaLabel:M,href:E,imageProps:{imageModel:s,size:"s",imageType:i?"movie":"name",className:"poster"},watchlistRibbonProps:i?{inWatchlist:T,isLoading:b,onClick:y,ariaLabel:I}:void 0}),(0,n.jsxs)(P,{"data-testid":"winner-detail","aria-label":M,href:E,className:h,children:[(0,n.jsx)(o.Signpost,{text:N}),(0,n.jsx)(k,{children:d}),(0,n.jsx)(L,{children:m}),p?.length?(0,n.jsx)(_,{"data-testid":"winners-secondary",className:h,children:p.map((e,t)=>(0,n.jsxs)(S,{children:[e,t<p.length-1?", ":""]},t))}):null,void 0===u?null:(0,n.jsx)(j,{"data-testid":"winners-notes",children:u})]})]})},C=s.default.div.withConfig({componentId:"sc-c0364e9e-0"})(["display:flex;align-items:flex-start;padding-bottom:",";width:33%;","{padding-top:",";border-bottom:1px solid rgba(",",0.1);width:100%;}"],l.spacing.m,l.mediaQueries.breakpoints.below.l,l.spacing.m,(0,l.getColorVarValue)("ipt-base-rgb")),_=s.default.div.withConfig({componentId:"sc-c0364e9e-1"})(["",";max-width:85%;&.base{",";}&.baseAlt{",";}"],(0,l.setTypographyType)("body"),(0,l.setPropertyToColorVar)("color","ipt-on-base-textSecondary-color"),(0,l.setPropertyToColorVar)("color","ipt-on-baseAlt-textSecondary-color")),S=s.default.span.withConfig({componentId:"sc-c0364e9e-2"})(["display:inline-block;white-space:pre-wrap;"]),k=s.default.div.withConfig({componentId:"sc-c0364e9e-3"})(["",";margin-top:",";margin-bottom:",";font-weight:bold;max-width:85%;"],(0,l.setTypographyType)("body"),l.spacing.xs,l.spacing.xs),L=s.default.div.withConfig({componentId:"sc-c0364e9e-4"})(["",";text-align:left;max-width:85%;"],(0,l.setTypographyType)("body")),j=s.default.div.withConfig({componentId:"sc-c0364e9e-5"})(["",";margin-bottom:",";max-width:85%;"],(0,l.setTypographyType)("bodySmall"),l.spacing.xxs),P=s.default.a.withConfig({componentId:"sc-c0364e9e-6"})(["",";padding-left:",";text-decoration:none;width:100%;&.base{",";}&.baseAlt{",";}"],(0,l.setPropertyToColorVar)("color","ipt-on-baseAlt-textPrimary-color"),l.spacing.m,(0,l.setPropertyToColorVar)("color","ipt-on-base-textPrimary-color"),(0,l.setPropertyToColorVar)("color","ipt-on-baseAlt-textPrimary-color")),M={SUBSECTION_TITLE:"winners-subsection-title",SECTION_CONTENT:"winners-section-content",EMPTY:"winners-empty",CONTENT:"winners-content"},N=(e,t)=>{if(!e)return!1;let{displayTitle:i,displayDescription:n,eventPageUrl:a,noWinnersBlurb:r,winners:s,eventId:o}=e;return(!t||o===t)&&!!e&&!!i&&!!n&&!!a&&!!r&&!!s},R=e=>{let{fallbackComponent:t,mustMatchEventId:i,headerText:a}=e;return(0,n.jsx)(d.Z,{name:"WinnersWidget",children:(0,n.jsx)(g.xm,{value:g.Cd.WINNERS_WIDGET,children:(0,n.jsx)(A,{fallbackComponent:t,mustMatchEventId:i,headerText:a})})})},A=e=>{let{fallbackComponent:t,mustMatchEventId:i,headerText:r}=e,{makeRefMarker:s}=(0,g.Lz)(),{overrideEvent:l,numWinners:d,winnersOffset:m}=p(a.isBrowser?window.location.search:void 0),{displayTitle:u,displayDescription:h,eventPageUrl:f,noWinnersBlurb:x,winners:T,eventId:b}=I({numWinners:d??3,winnersOffset:m??0,overrideEvent:l}),y=(0,c.N)({id:"winners_widget_see_all_link_text",defaultMessage:"See the full list of winners and nominees"}),v=N({displayTitle:u,displayDescription:h,eventPageUrl:f,noWinnersBlurb:x,winners:T,eventId:b},i);return v||t?(0,n.jsxs)(n.Fragment,{children:[v&&(0,n.jsxs)(o.PageSection,{topPadding:"none",bottomPadding:"none",children:[(0,n.jsx)(o.SubSectionTitle,{"data-testid":M.SUBSECTION_TITLE,description:h,href:`${f}?ref_=${s(g.Cd.TOP)}`,children:r||u}),(0,n.jsxs)($,{"data-testid":M.SECTION_CONTENT,children:[T&&0===T.length&&(0,n.jsx)(O,{"data-testid":M.EMPTY,children:x}),T&&T.length>0&&(0,n.jsx)(D,{"data-testid":M.CONTENT,children:T.map((e,t)=>(0,n.jsx)(E,{winner:e},t))}),(0,n.jsx)(V,{text:y,href:`${f}?ref_=${s(g.Cd.BOTTOM)}`})]})]}),!v&&t]}):null},O=s.default.div.withConfig({componentId:"sc-e5012e40-0"})(["padding-bottom:",";"],l.spacing.s),$=s.default.div.withConfig({componentId:"sc-e5012e40-1"})([""," ",""],(0,l.setPropertyToSpacingVar)("padding-left","ipt-pageMargin"),(0,l.setPropertyToSpacingVar)("padding-right","ipt-pageMargin")),D=s.default.div.withConfig({componentId:"sc-e5012e40-2"})(["","{display:flex;}"],l.mediaQueries.breakpoints.above.l),V=(0,s.default)(o.TextLink).withConfig({componentId:"sc-e5012e40-3"})(["","{padding-top:",";}"],l.mediaQueries.breakpoints.below.l,l.spacing.m)},76857:function(e,t,i){"use strict";var n,a;i.d(t,{Ei:function(){return s},NE:function(){return o},oM:function(){return r},wF:function(){return n}}),(a=n||(n={})).IMDB_TV="IMDbTV",a.IMDB_ORIGINAL="IMDbOriginal",a.VIDEO="Video";let r="video-hero",s="ls053181649",o={HERO_SLATE:"hero-slate",TITLE_POSTER:"title-poster"}},59899:function(e,t,i){"use strict";i.d(t,{E:function(){return r},f:function(){return a}});var n=i(2784);let a=n.createContext({}),r=n.createContext({})},63402:function(e,t,i){"use strict";i.d(t,{Z:function(){return nn}});var n,a,r,s,o,l,d=i(52322),c=i(2784),g=i(25436),m=i(54588),p=i(23906),u=i(55634),h=i(59002),f=i(11438),x=i(24391),T=i(88959),b=i(95746),y=i(88854),I=i(11778),v=i(19596),w=i(88169),E=i(86704),C=i(86958),_=i(2759);let S=/\/symphony\/preview\/\w+\/([\w\d-]+)\//,k=e=>{let t=(0,C.B)().context.queryParams,i=(0,_.Zl)();if(!t||!i)return;let n=t[`slot_${e}`]||void 0;return n&&"string"==typeof n?S.exec(n)?.[1]:void 0},L=e=>{let{slotName:t,slotData:i}=e,n=k(t),a=`https://${(0,I.isDevStage)()?"beta.":""}console.harmony.a2z.com/content-symphony/NA`,r=i&&i.symphonyMetadata?.creativeId||n,s=r&&i&&i.symphonyMetadata?.placementId,o=i&&i.componentName;return(0,d.jsxs)(j,{"data-testid":"slot-debug-bar",children:[!!o&&(0,d.jsxs)("span",{children:[(0,d.jsx)("b",{children:"Component:"})," ",o," -"," "]}),(0,d.jsxs)("span",{children:[(0,d.jsx)("b",{children:"Symphony Slot:"})," ",t]}),!!(r||s)&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{children:" - "}),!!r&&(0,d.jsx)(w.TextLink,{href:`${a}/creatives/summary/${r}/content`,text:"Campaign"}),!!s&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{children:" - "}),(0,d.jsx)(w.TextLink,{href:`${a}/creatives/summary/${r}/scheduling/edit/${s}`,text:"Placement"})]})]})]})},j=v.default.div.withConfig({componentId:"sc-dadf9052-0"})(["background-color:",";color:",";padding:0.25rem;b{font-weight:bolder;}"],(0,E.getColorVarValue)("ipt-accent1-bg"),(0,E.getColorVarValue)("ipt-on-accent1-color")),P=e=>{switch(e){case T.FO.MAIN:return 2;case T.FO.SIDE:return 1;default:return 3}},M=e=>{switch(e){case T.FO.MAIN:return w.SectionTitle;case T.FO.SIDE:return w.Title;default:return w.SubSectionTitle}};(n=s||(s={})).main="announcement-widget",n.grid="announcement-widget--grid",n.title="announcement-widget--title",n.image="announcement-widget--image",n.imageAspect="announcement-widget--image-aspect",n.description="announcement-widget--desc",n.cta="announcement-widget--cta",n.ctaFullWidth="announcement-widget--cta--full-width";let N=e=>{let{placementArgs:t,displayType:i}=e,{displayTitle:n,description:a,linkTargetLabel:r,linkTargetUrl:s,slateImageModel:o}=t,{makeRefMarker:l}=(0,f.Lz)(),c=i===T.FO.SIDE?"both":void 0,g=P(i),m=M(i);return(0,d.jsx)(R,{sidePadding:"",children:(0,d.jsx)(w.PageGridItem,{span:g,children:(0,d.jsxs)(A,{omitPageMargin:c,children:[(0,d.jsx)(m,{className:"announcement-widget--title",href:`${s}?ref_=${l(f.Cd.TITLE)}`,children:n}),(0,d.jsx)(O,{className:"announcement-widget--image-aspect",href:`${s}?ref_=${l(f.Cd.IMAGE)}`,ariaLabel:n,imageProps:{imageModel:o,aspectRatio:"16:9",loading:"eager",radius:"media"}}),(0,d.jsx)($,{className:"announcement-widget--desc",html:a}),r?(0,d.jsx)(D,{className:"announcement-widget--cta",postIcon:"chevron-right",href:`${s}?ref_=${l(f.Cd.SEE_MORE)}`,children:r}):(0,d.jsx)(d.Fragment,{})]})})})},R=(0,v.default)(w.PageSection).withConfig({componentId:"sc-75d0e8cb-0"})(["container:widget / inline-size;"]),A=(0,v.default)(w.SubGrid).withConfig({componentId:"sc-75d0e8cb-1"})(["width:100%;grid-template-rows:auto 1fr min-content min-content;row-gap:0;@container widget (min-width:"," ) and (max-width:","){grid-template-rows:auto 1fr min-content;}@container widget (min-width:"," ){grid-template-rows:auto min-content 1fr;}@supports not (container:inline-size){","{grid-template-rows:auto 1fr min-content;}","{grid-template-rows:auto min-content 1fr;}}.","{grid-area:1 / 1 / 2 / -1;padding:0;@container widget (min-width:"," ){grid-area:1 / 5 / 1 / -1;}@supports not (container:inline-size){","{grid-area:1 / 5 / 1 / -1;}}}"],E.breakpoints.sizes.m,E.breakpoints.sizes.l,E.breakpoints.sizes.l,E.mediaQueries.breakpoints.above.m,E.mediaQueries.breakpoints.above.l,"announcement-widget--title",E.breakpoints.sizes.l,E.mediaQueries.breakpoints.above.l),O=(0,v.default)(w.Slate).withConfig({componentId:"sc-75d0e8cb-2"})(["display:flex;position:relative;aspect-ratio:16/9;grid-area:2 / 1 / span 2 / span 2;@container widget (min-width:"," ){grid-area:2 / 1 / -1 / span 3;}@container widget (min-width:"," ){grid-area:1 / 1 / -1 / span 4;}@supports not (container:inline-size){","{grid-area:2 / 1 / -1 / span 3;}","{grid-area:1 / 1 / -1 / span 4;}}"],E.breakpoints.sizes.m,E.breakpoints.sizes.l,E.mediaQueries.breakpoints.above.m,E.mediaQueries.breakpoints.above.l),$=(0,v.default)(w.HTMLContent).withConfig({componentId:"sc-75d0e8cb-3"})(["grid-area:2 / 3 / -1 / -1;@container widget (min-width:"," ){grid-area:2 / 4 / 2 / -1;}@container widget (width >= 768px) and (max-width:","){grid-column:4 / -2;}@container widget (min-width:"," ){grid-column:5 / -3;margin-bottom:1rem;}@supports not (container:inline-size){","{grid-area:2 / 4 / 2 / -1;}@media (width >= 768px) and (max-width:","){grid-column:4 / -2;}","{grid-column:5 / -3;margin-bottom:1rem;}}"],E.breakpoints.sizes.m,E.breakpoints.breakpoints.l,E.breakpoints.sizes.l,E.mediaQueries.breakpoints.above.m,E.breakpoints.breakpoints.l,E.mediaQueries.breakpoints.above.l),D=(0,v.default)(w.SecondaryButton).withConfig({componentId:"sc-75d0e8cb-4"})(["grid-row:4;grid-column:1 / -1;margin-top:1rem;width:min-content;flex-shrink:0;display:flex;white-space:nowrap;@container widget (min-width:"," ){display:flex;margin-top:0;width:min-content;height:min-content;align-self:self-end;grid-row:3;grid-column:4 / -1;}@container widget (min-width:"," ){grid-column:5 / -1;}@supports not (container:inline-size){","{display:flex;margin-top:0;width:min-content;height:min-content;align-self:self-end;grid-row:3;grid-column:4 / -1;}","{grid-column:5 / -1;}}"],E.breakpoints.sizes.m,E.breakpoints.sizes.l,E.mediaQueries.breakpoints.above.m,E.mediaQueries.breakpoints.above.l);var V=i(54137),W=i(69380),U=i(75824),F=i(76857);let z=e=>{let{headingText:t,subHeadingText:i,runtime:n,children:a}=e;return(0,d.jsxs)(B,{children:[(0,d.jsxs)(Y,{children:[(0,d.jsx)(G,{children:t}),(0,d.jsx)(J,{children:n})]},"h2"),(0,d.jsx)(H,{children:i},"h3"),a]})},Q=v.default.figcaption.withConfig({componentId:"sc-809ef538-0"})(["display:flex;flex-direction:row;min-width:0;margin:16px 16px 0;position:absolute;bottom:0;right:0;left:177px;","{align-items:flex-start;}","{left:148px;}","{left:165px;}","{left:90px;flex-direction:column;}"],E.mediaQueries.breakpoints.above.m,E.mediaQueries.breakpoints.only.l,E.mediaQueries.breakpoints.only.m,E.mediaQueries.breakpoints.below.m),B=v.default.div.withConfig({componentId:"sc-809ef538-1"})(["display:flex;flex-direction:column;min-width:0;justify-content:space-around;width:100%;"]),Y=v.default.div.withConfig({componentId:"sc-809ef538-2"})(["display:flex;align-items:flex-end;","{font-size:1.25rem;}","{font-size:34px;line-height:40px;}"],E.mediaQueries.breakpoints.below.s,E.mediaQueries.breakpoints.above.m),H=v.default.div.withConfig({componentId:"sc-809ef538-3"})(["","{"," font-weight:400;}","{"," font-weight:400;}","{","}color:",";font-weight:400;margin:0.25rem 0 0;overflow:hidden;text-align:start;text-overflow:ellipsis;white-space:nowrap;"],E.mediaQueries.breakpoints.only.xl,(0,E.setTypographyType)("headline5"),E.mediaQueries.breakpoints.above.m,(0,E.setTypographyType)("headline6"),E.mediaQueries.breakpoints.below.s,(0,E.setTypographyType)("subtitle2"),(0,E.getColorVarValue)("ipt-on-baseAlt-textSecondary-color")),G=v.default.span.withConfig({componentId:"sc-809ef538-4"})(["color:",";","{","}","{"," font-weight:400;}","{"," font-weight:400;}","{"," font-weight:400;}display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;"],(0,E.getColorVarValue)("ipt-on-baseAlt-color"),E.mediaQueries.breakpoints.only.xs,(0,E.setTypographyType)("subtitle"),E.mediaQueries.breakpoints.above.s,(0,E.setTypographyType)("headline6"),E.mediaQueries.breakpoints.above.m,(0,E.setTypographyType)("headline5"),E.mediaQueries.breakpoints.above.xl,(0,E.setTypographyType)("headline4")),q=(0,v.css)(["height:50px;margin:0 0 8px 0;width:50px;","{height:72px;margin:0 16px 0 0;width:72px;}g{","}"],E.mediaQueries.breakpoints.above.m,(0,E.setPropertyToColorVar)("color","ipt-on-baseAlt-color")),K=(0,v.default)(w.Icon).withConfig({componentId:"sc-809ef538-5"})(["",""],q),Z=(0,v.default)(w.Icon).withConfig({componentId:"sc-809ef538-6"})(["color:#cf1f4a;",""],q),X=v.default.div.withConfig({componentId:"sc-809ef538-7"})(["align-items:center;display:flex;"]),J=v.default.span.withConfig({componentId:"sc-809ef538-8"})(["color:",";display:none;font-size:1rem;line-height:28px;margin-left:2rem;","{display:inline;font-size:1.25rem;align-self:flex-end;}"],(0,E.getColorVarValue)("ipt-on-baseAlt-textSecondary-color"),E.mediaQueries.breakpoints.above.m),ee=v.default.span.withConfig({componentId:"sc-809ef538-9"})(["display:block;margin-left:1rem;","{display:none;}"],E.mediaQueries.breakpoints.above.m);var et=e=>{let{subHeadingText:t,mainHeadingText:i,runtime:n,videoContentType:a,children:r}=e,s=(0,U.N)({id:"video_hero_watch_on_imdb_tv",defaultMessage:"Watch Now on IMDb TV!"});return(0,d.jsx)(Q,{children:(()=>{switch(a){case F.wF.IMDB_ORIGINAL:return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(X,{children:[(0,d.jsx)(K,{name:"play-circle-outline-large-inline",className:"slide-caption-play-icon"}),(0,d.jsx)(ee,{children:n})]}),(0,d.jsx)(z,{headingText:i,subHeadingText:t,runtime:n,children:r})]});case F.wF.IMDB_TV:return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(X,{children:[(0,d.jsx)(Z,{name:"play-circle-outline-large-inline",className:"slide-caption-play-icon"}),(0,d.jsx)(ee,{children:n})]}),(0,d.jsx)(z,{headingText:i,subHeadingText:s,runtime:n,children:r})]});default:return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(X,{children:[(0,d.jsx)(K,{name:"play-circle-outline-large-inline",className:"slide-caption-play-icon"}),(0,d.jsx)(ee,{children:n})]}),(0,d.jsx)(z,{headingText:i,subHeadingText:t,runtime:n,children:r})]})}})()})},ei=i(12563),en=i(3357),ea=i(1833),er=i(66724),es=i(59899);let eo=(0,v.default)(w.Slate).withConfig({componentId:"sc-763a1cd7-0"})(["cursor:pointer;text-align:left;padding-bottom:70px;position:relative;&&{outline:none;}&:hover:not(:has(.",":hover)){.slide-caption-play-icon{","}}"],V.Ec.SPONSORED_LINK,(0,E.setPropertyToColorVar)("color","ipt-on-baseAlt-accent1-color")),el=(0,v.default)(w.Slate.Image).withConfig({componentId:"sc-763a1cd7-1"})(["align-items:center;"]);var ed=e=>{let{videoId:t,listId:i,videoTitle:n,titleText:a,slotName:r}=e.videoSlateMetadata,{children:s,imageProps:o,className:l}=e,{videoSingleLinkBuilder:g}=(0,er.WOb)(),{makeRefMarker:m}=(0,f.Lz)(),p=(0,c.useContext)(es.E).indexInCarousel||0,u=(0,c.useContext)(es.f),h=g({viconst:t,refSuffix:f.Cd.EMPTY,query:i?{listId:i}:void 0}),x=(0,ea.Lr)(h,m([f.Cd.VIDEO,(0,f.Qk)({refStr:r,explanation:"This value is generated by symphony content"}),{t:f.Cd.EMPTY,n:p+1}])),T={...u?{onClick:()=>{(0,en.ih)(u),x&&(0,en.dS)(x)}}:{href:x}},b=(0,U.N)({id:"video_slate_ariaLabel_fallback",defaultMessage:"Video slide"});return(0,d.jsxs)(eo,{...T,dynamicWidth:!0,ariaLabel:n||a||b,className:l,"data-testid":F.NE.HERO_SLATE,children:[(0,d.jsx)(el,{imageModel:o?.imageModel,aspectRatio:"16:9",loading:0===p?"eager":"lazy"}),s]})};let ec=v.default.figure.withConfig({componentId:"sc-d199aea7-0"})(["height:100%;position:relative;"]),eg=v.default.div.withConfig({componentId:"sc-d199aea7-1"})(["display:flex;position:relative;"]),em=(0,v.default)(e=>{let{titleId:t,titleText:i,clickThroughUri:n,slotName:a}=e.titlePosterMetadata,{className:r,dynamicWidth:s,watchlistRibbonSize:o,imageProps:l}=e,g=l?.imageModel||void 0,{titleMainLinkBuilder:m}=(0,er.WOb)(),{makeRefMarker:p}=(0,f.Lz)(),u=(0,c.useContext)(es.E),h=(0,c.useContext)(es.f),x=u.indexInCarousel||0,T=p([f.Cd.CAP,f.Cd.PRI,(0,f.Qk)({refStr:a,explanation:"This value is generated by symphony content"}),{t:f.Cd.EMPTY,n:x+1}]),b=p([f.Cd.VIDEO,f.Cd.WATCHLIST_RIBBON,(0,f.Qk)({refStr:a,explanation:"This value is generated by symphony content"}),{t:f.Cd.EMPTY,n:x+1}]),{isInWatchlist:y,isPending:I,onClick:v,ariaLabel:E}=(0,ei.X)(t,b),C=n||m({tconst:t,refSuffix:f.Cd.POSTER}),_=(0,ea.Lr)(C,T),S=async()=>{h&&await (0,en.Ew)(h),_&&(0,en.dS)(_)},k=(0,U.N)({id:"title_main_hero_media_ariaLabel_poster_fallback",defaultMessage:"Poster"}),L={...h?{onClick:S}:{href:_},ariaLabel:i||k,dynamicWidth:s};return(0,d.jsx)(w.Poster,{...L,className:r,"data-testid":F.NE.TITLE_POSTER,imageProps:{imageModel:g,dynamicWidth:s,loading:0===x?"eager":"lazy"},watchlistRibbonProps:{inWatchlist:y,isLoading:I,onClick:v,ariaLabel:E,className:"ipc-poster__watchlist-ribbon",size:o,onImage:!0}})}).withConfig({componentId:"sc-d199aea7-2"})(["position:absolute;width:165px;z-index:100;bottom:0;left:16px;","{width:132px;}","{width:90px;left:0;}"],E.mediaQueries.breakpoints.below.xl,E.mediaQueries.breakpoints.below.m),ep=(0,v.default)(w.Slate.Overlay).withConfig({componentId:"sc-d199aea7-3"})(["background:linear-gradient( 180deg,transparent 0%,transparent 65%,rgba(0,0,0,0.7) 75%,rgba(0,0,0,1) 85%,rgba(0,0,0,1) 100% );background:linear-gradient( 180deg,transparent 0%,transparent 65%,rgba(",",0.7) 77%,rgba(",",1) 85%,rgba(",",1) 100% );","{background:linear-gradient( 180deg,transparent 0%,transparent 65%,rgba(0,0,0,0.7) 70%,rgba(0,0,0,1) 82%,rgba(0,0,0,1) 100% );background:linear-gradient( 180deg,transparent 0%,transparent 65%,rgba(",",0.7) 70%,rgba(",",1) 82%,rgba(",",1) 100% );}"],(0,E.getColorVarValue)("ipt-baseAlt-rgb"),(0,E.getColorVarValue)("ipt-baseAlt-rgb"),(0,E.getColorVarValue)("ipt-baseAlt-rgb"),E.mediaQueries.breakpoints.below.s,(0,E.getColorVarValue)("ipt-baseAlt-rgb"),(0,E.getColorVarValue)("ipt-baseAlt-rgb"),(0,E.getColorVarValue)("ipt-baseAlt-rgb")),eu=(0,v.default)(W.I).withConfig({componentId:"sc-d199aea7-4"})(["margin-top:",";"],E.spacing.xxs);var eh=e=>{let{titleText:t,titleId:i,headline:n,subHeadline:a,videoId:r,listId:s,runtime:o,videoContentType:l,posterImage:c,videoSlateImage:g,slotName:m,adData:p}=e;return(0,d.jsx)(ec,{children:(0,d.jsxs)(eg,{children:[(0,d.jsx)(em,{titlePosterMetadata:{titleText:t,titleId:i,slotName:m},watchlistRibbonSize:"l",dynamicWidth:!0,imageProps:{imageModel:c}}),(0,d.jsx)(ed,{videoSlateMetadata:{videoTitle:n,videoId:r,listId:s,videoContentType:l,titleText:t,slotName:m},imageProps:{imageModel:g},children:(0,d.jsx)(ep,{children:(0,d.jsx)(et,{subHeadingText:a,mainHeadingText:n,videoContentType:l,runtime:o,children:(0,d.jsx)(d.Fragment,{children:p?(0,d.jsx)("div",{children:(0,d.jsx)(V.$,{adFeedbackUrl:p.adFeedbackUrl})}):(0,d.jsx)(eu,{associatedConstId:r,entityType:"video"})})})})})]})})};i(22073);var ef=i(6935),ex=i(63370),eT=i(41174),eb=i(53665),ey=i(4736),eI=i(31885);let ev=e=>{let{card:t}=e,i=(0,eb.Z)(),n=(0,ex.K)(t.titleTextData||{}),a=t.listType===eI.lZo.Titles?n:t.caption,{trackInfo:r,ariaLabel:s,isPending:o,onClick:l}=(0,ey.R)(t.id);return(0,d.jsx)(w.PosterCard,{dynamicWidth:!0,actionProps:t.subtitle?{children:t.subtitle}:void 0,titleProps:{children:t.title,href:t.linkUrl,lineClamp:1},posterProps:{href:t.linkUrl,ariaLabel:i.formatMessage({id:"common_ariaLabel_goTo",defaultMessage:"Go to {target}"},{target:a}),imageProps:t.image?.url&&t.image?.height&&t.image?.width?{imageModel:{url:t.image?.url,maxHeight:t.image?.height,maxWidth:t.image?.width,caption:t.image?.caption?.plainText??""},imageType:t.itemType}:void 0,watchlistRibbonProps:{ariaLabel:s,inWatchlist:!!r?.isTracking,onClick:l,isLoading:o,iconOverrides:{inWatchlist:"notifications-add-check",notInWatchlist:"notifications-add"}}}})};var ew=i(30382),eE=i.n(ew),eC=i(88758),e_=i(80032),eS=i(36543);let ek=eE()`
    query ConstCardShovelerListMetadata($lsConst: ID!) {
        list(id: $lsConst) {
            listType {
                id
            }
        }
    }
`,eL=eE()`
    query ConstCardShovelerTitleListData($lsConst: ID!, $first: Int!) {
        list(id: $lsConst) {
            ...UserListListItemMetadata
            titleListItemSearch(first: $first) {
                edges {
                    listItem: title {
                        ...TitleListItemMetadata
                        principalCredits(
                            filter: {
                                categories: ["cast", "director", "creator"]
                            }
                        ) {
                            category {
                                id
                                text
                            }
                            credits {
                                name {
                                    id
                                    nameText {
                                        text
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    ${e_.O4}
    ${eS.Zz}
`,ej=eE()`
    query ConstCardShovelerNameListData(
        $lsConst: ID!
        $first: Int!
        $isInPace: Boolean!
        $refTagQueryParam: String
        $originalTitleText: Boolean
    ) {
        list(id: $lsConst) {
            ...UserListListItemMetadata
            nameListItemSearch(first: $first) {
                edges {
                    listItem: name {
                        ...NameListItemMetadata
                    }
                }
            }
        }
    }
    ${e_.O4}
    ${eC.E}
`;var eP=i(72779),eM=i.n(eP),eN=i(72113);let eR=e=>e?.listType?.id===eI.lZo.Titles,eA=e=>e?.listType?.id===eI.lZo.People,eO=e=>{let t=e.principalCredits?.find(e=>"director"===e.category.id);return t?.credits[0]?.name.nameText?.text||""},e$=e=>e.primaryProfessions&&e.primaryProfessions.length>0?e.primaryProfessions[0].category.text:e.professions&&e.professions.length>0&&e.professions[0].profession?.text||"",eD=e=>{let t=e.knownFor?.edges[0]?.node.title;return t&&(t.titleText?.text||t.originalTitleText?.text)||""},eV=e=>{let{text:t,titleTextData:i}=e,n=(0,eN.G)(),a=(0,ex.K)(i||{});return(0,d.jsx)("div",{className:eM()(n.color("textPrimary"),n.type("subtitle")),children:a??t})},eW=e=>{let{firstLine:t,secondLine:i}=e,n=(0,eN.G)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:eM()(n.color("textPrimary"),n.type("body")),children:t}),(0,d.jsx)("div",{className:eM()(n.color("textSecondary"),n.type("bodySmall")),children:i})]})},eU=e=>{let t={originalTitleText:e?.originalTitleText,titleText:e?.titleText},i=e.releaseYear?.year?`(${e.releaseYear.year})`:"",n=eO(e);return{id:e.id,title:(0,d.jsx)(eV,{titleTextData:t}),subtitle:(0,d.jsx)(eW,{firstLine:i,secondLine:n}),image:e.primaryImage||void 0,linkUrl:`/title/${e.id}/`,listType:eI.lZo.Titles,itemType:e.titleType?.id,titleTextData:t}},eF=e=>{let t=e$(e),i=eD(e),n=e.nameText?.text||"";return{id:e.id,title:(0,d.jsx)(eV,{text:n}),subtitle:(0,d.jsx)(eW,{firstLine:t,secondLine:i}),image:e.primaryImage||void 0,caption:n,linkUrl:`/name/${e.id}/`,listType:eI.lZo.People,itemType:"name"}},ez=e=>{let t=[];return eR(e)&&e?.titleListItemSearch?.edges&&e.titleListItemSearch.edges.forEach(e=>{t.push(eU(e.listItem))}),eA(e)&&e?.nameListItemSearch?.edges&&e.nameListItemSearch.edges.forEach(e=>{t.push(eF(e.listItem))}),t},eQ=e=>{let t=[...e];for(let e=t.length-1;e>0;e--){let i=Math.floor(Math.random()*(e+1));[t[e],t[i]]=[t[i],t[e]]}return t};i(47774),i(27991),i(75289),eE()`
    query EnhancedListData(
        $titleIds: [ID!]!
        $nameIds: [ID!]!
        $imageIds: [ID!]!
        $videoIds: [ID!]!
    ) {
        titles(ids: $titleIds) {
            ...EnhancedListTitle
        }
        names(ids: $nameIds) {
            ...EnhancedListName
        }
        images(ids: $imageIds) {
            ...EnhancedListImage
        }
        videos(ids: $videoIds) {
            ...EnhancedListVideo
        }
    }
    fragment EnhancedListName on Name {
        id
        nameText {
            text
        }
        primaryImage {
            ...EnhancedListImage
        }
    }
    fragment EnhancedListTitle on Title {
        id
        titleText {
            text
        }
        primaryImage {
            ...EnhancedListImage
        }
        titleType {
            id
            isSeries
            text
        }
        originalTitleText {
            text
        }
        certificate {
            rating
        }
        ratingsSummary {
            aggregateRating
        }
        meterRanking {
            currentRank
            meterType
            rankChange {
                changeDirection
                difference
            }
        }
        runtime {
            seconds
            displayableProperty {
                value {
                    plainText
                }
            }
        }
        episodes {
            isOngoing
            displayableSeasons(first: 100) {
                total
            }
            displayableYears(first: 100) {
                edges {
                    node {
                        year
                    }
                }
            }
        }
    }
    fragment EnhancedListImage on Image {
        id
        url
        width
        height
        caption {
            plainText
        }
    }
    fragment EnhancedListVideo on Video {
        id
        name {
            value
        }
        runtime {
            value
            unit
        }
        thumbnail {
            url
            width
            height
        }
        contentType {
            id
            displayName {
                value
            }
        }
        playbackURLs {
            displayName {
                value
            }
            url
            videoDefinition
            videoMimeType
        }
        previewURLs {
            displayName {
                value
            }
            url
            videoDefinition
            videoMimeType
        }
    }
`;var eB=i(78893),eY=i(21915);i(16214),eE()`
    query EventHistory($id: ID!) {
        eventMetadata {
            event(id: $id) {
                editions(first: 150) {
                    edges {
                        node {
                            id
                            instanceWithinYear
                            year
                        }
                    }
                }
            }
        }
    }
`;let eH=e=>e.replace(/ {2}\n/g,"<br>").replace(/\[image=([^\]]+)\](.*?)\[\/image\]/g,'<img src="$1" alt="$2">'),eG=(0,v.default)(w.PageSection).withConfig({componentId:"sc-68e0bffa-0"})(["&&{margin-bottom:var(--ipc-pageSection-bottomMargin);}"]),eq=(0,v.default)(w.HTMLContent).withConfig({componentId:"sc-68e0bffa-1"})([""," "," img{margin:0 auto;display:block;max-width:100%;}"],(0,E.setPropertyToSpacingVar)("padding-left","ipt-pageMargin"),(0,E.setPropertyToSpacingVar)("padding-right","ipt-pageMargin"));eE()`
    query images($ids: [ID!]!) {
        images(ids: $ids) {
            id
            width
            height
            url
            caption {
                plainText
            }
        }
    }
`,eE()`
    query imageGalleries($ids: [ID!]!) {
        imageGalleries(ids: $ids) {
            id
            galleryText
            images(first: 1) {
                edges {
                    node {
                        id
                        width
                        height
                        url
                        caption {
                            plainText
                        }
                    }
                }
            }
        }
    }
`,eE()`
    query videos($ids: [ID!]!) {
        videos(ids: $ids) {
            id
            runtime {
                value
                unit
            }
            thumbnail {
                width
                height
                url
            }
            name {
                value
            }
            primaryTitle {
                id
                titleText {
                    text
                    isOriginalTitle
                }
                originalTitleText {
                    text
                }
                primaryImage {
                    url
                    caption {
                        plainText
                    }
                    height
                    width
                }
                series {
                    series {
                        primaryImage {
                            url
                            caption {
                                plainText
                            }
                            height
                            width
                        }
                    }
                }
            }
        }
    }
`,eE()`
    query renderedMarkdown(
        $markdownString: String!
        $queryParams: String
        $showOriginalTitleText: Boolean
    ) {
        renderedMarkdown(markdownString: $markdownString) {
            markdown
            plaidHtml(
                queryParams: $queryParams
                showOriginalTitleText: $showOriginalTitleText
            )
        }
    }
`;var eK=i(49236);let eZ=(0,v.default)(w.PageSection).withConfig({componentId:"sc-6fdee83c-0"})(["display:flex;justify-content:space-between;"," "," &&{margin-bottom:var(--ipc-pageSection-bottomMargin);}"],(0,E.setPropertyToSpacingVar)("padding-left","ipt-pageMargin"),(0,E.setPropertyToSpacingVar)("padding-right","ipt-pageMargin")),eX=v.default.div.withConfig({componentId:"sc-6fdee83c-1"})(["width:33%;text-align:center;"]),eJ=v.default.a.withConfig({componentId:"sc-6fdee83c-2"})([""," display:block;&:hover{text-decoration:underline;}"],(0,E.setPropertyToColorVar)("color","ipt-on-base-textPrimary-color")),e0=v.default.span.withConfig({componentId:"sc-6fdee83c-3"})(["display:block;"," ",""],(0,E.setTypographyType)("body"),(0,E.setPropertyToColorVar)("color","ipt-on-base-textPrimary-color")),e1=v.default.span.withConfig({componentId:"sc-6fdee83c-4"})(["display:block;"," ",""],(0,E.setTypographyType)("bodySmall"),(0,E.setPropertyToColorVar)("color","ipt-on-base-textSecondary-color"));var e2=i(27722),e5=i(46107),e8=i.n(e5);let e4=e=>{let{imageBreakpointOverrides:t,...i}=e,n={xs:{targetUrl:i.targetUrl,url:i.imageUrl,caption:i.imageCaption,maxHeight:i.imageHeight,maxWidth:i.imageWidth}};if(t&&JSON.parse(t)){let e=JSON.parse(t);Object.keys(e).forEach(t=>{n[t]={targetUrl:e[t].targetUrl||i.targetUrl,url:e[t].url||i.imageUrl,caption:e[t].caption||i.imageCaption,maxHeight:e[t].height||i.imageHeight,maxWidth:e[t].width||i.imageWidth}})}return n},e9=e=>{let{images:t}=e,i=Object.keys(t);return(0,d.jsx)(d.Fragment,{children:i.map((e,n)=>{let a=t[e],r=i[n+1],s=n>0;return(0,d.jsx)("a",{href:a.targetUrl,style:{aspectRatio:`${a.maxWidth}/${a.maxHeight}`,width:`calc(100% - (2 * ${(0,E.getSpacingVar)("ipt-pageMargin")}))`},className:`mx-pageMargin mb-m inline-flex ${eM()({[e8().hide]:s,[e8()[`show-at-${e}`]]:s,[e8()[`hide-at-${r}`]]:r})}`,children:(0,d.jsx)(e2.DynamicImage,{imageModel:t[e],dynamicWidth:!0})},e+t[e].url)})})};function e3(e){let{prefix:t,suffix:i}=e;return t&&i?`${t}_${i}`:t||i}var e7=i(45455),e6=i.n(e7),te=i(95441);let tt="editorial-single-main-column-image",ti=e=>{let{linkedImages:t,slateProps:i,children:n,refMarker:a}=e;if(!t)return null;if(1===t.length)return(0,d.jsx)(tr,{children:(0,d.jsx)(ta,{"data-testid":"main-column-editorial-styled-slate",slateProps:i,dynamicWidth:!0,children:n})});let r=2===t.length?td:tl;return(0,d.jsx)(ts,{"data-testid":"main-column-editorial-multiple-images",children:t.map((e,t)=>{let i=e.link&&a?(0,ea.Lr)(e.link,`${a}_i`):e.link;return(0,d.jsx)(to,{className:tt,children:(0,d.jsx)(r,{children:(0,d.jsx)(w.Poster,{imageProps:{imageModel:e.imageModel},dynamicWidth:!0,href:i,ariaLabel:"editorial image"})})},`${tt}-${t}`)})})},tn=e=>{let{titleProps:t,actionProps:i,description:n,linkedImages:a}=e;return e6()(a)?(0,d.jsxs)(tc,{"data-testid":"main-column-editorial-single",children:[(0,d.jsx)(tf,{children:t?.title}),(0,d.jsx)(tx,{children:t?.title}),(0,d.jsx)(tT,{html:n}),i?.children]}):(0,d.jsxs)(tc,{"data-testid":"main-column-editorial-single",children:[(0,d.jsx)(tf,{children:t?.title}),(0,d.jsxs)(tm,{"data-testid":"content-with-images",children:[(0,d.jsxs)(tg,{children:[(0,d.jsx)(tx,{children:t?.title}),(0,d.jsx)(tT,{html:n}),i?.children]}),(0,d.jsx)(ti,{...e})]})]})},ta=(0,v.default)(w.SlateCard).withConfig({componentId:"sc-546ed1e8-0"})(["width:100%;"]),tr=v.default.div.withConfig({componentId:"sc-546ed1e8-1"})(["width:100%;","{width:63%;}"],E.mediaQueries.breakpoints.above.m),ts=v.default.div.withConfig({componentId:"sc-546ed1e8-2"})(["display:flex;width:100%;& > .","{margin-right:",";}& > :last-child{margin-right:0;}","{width:63%;}.editorial-single-main-column-image{&:focus-within{outline:1px dashed currentColor;}}"],tt,E.spacing.s,E.mediaQueries.breakpoints.above.m),to=v.default.div.withConfig({componentId:"sc-546ed1e8-3"})(["overflow:hidden;display:inline-flex;position:relative;justify-content:center;align-items:center;width:100%;padding-bottom:calc(","% * 100);"],E.IMAGE_RATIOS["slate-16x9"]),tl=v.default.div.withConfig({componentId:"sc-546ed1e8-4"})(["position:absolute;height:100%;width:122%;top:0;"]),td=v.default.div.withConfig({componentId:"sc-546ed1e8-5"})(["position:absolute;height:100%;width:100%;top:0;"]),tc=(0,v.default)(w.PageSection).withConfig({componentId:"sc-546ed1e8-6"})(["display:flex;flex-direction:column;"," "," &&{margin-bottom:var(--ipc-pageSection-bottomMargin);}"],(0,E.setPropertyToSpacingVar)("padding-right","ipt-pageMargin"),(0,E.setPropertyToSpacingVar)("padding-left","ipt-pageMargin")),tg=v.default.div.withConfig({componentId:"sc-546ed1e8-7"})(["display:flex;flex-direction:column;margin-top:",";z-index:1;","{width:37%;margin-right:",";margin-top:0;}"],E.spacing.m,E.mediaQueries.breakpoints.above.m,E.spacing.m),tm=v.default.div.withConfig({componentId:"sc-546ed1e8-8"})(["display:flex;flex-direction:column-reverse;","{flex-direction:row;}"],E.mediaQueries.breakpoints.above.m),tp=v.default.h2.withConfig({componentId:"sc-546ed1e8-9"})(["margin-top:0;font-size:1.25rem;font-weight:600;margin-bottom:",";"],E.spacing.l),tu=(0,v.css)(["display:block;padding-left:",";position:relative;&:before{",";",";content:'';position:absolute;height:1.5rem;width:0.25rem;margin-left:-",";}"],E.spacing.m,(0,E.setPropertyToColorVar)("background","ipt-accent1-bg"),(0,E.setPropertyToShapeVar)("border-radius","ipt-cornerRadius"),E.spacing.m),th=(0,v.css)(["display:block;padding-top:",";position:relative;&:before{",";",";content:'';position:absolute;height:0.25rem;width:2.25rem;margin-top:-",";}"],E.spacing.l,(0,E.setPropertyToColorVar)("background","ipt-accent1-bg"),(0,E.setPropertyToShapeVar)("border-radius","ipt-cornerRadius"),E.spacing.l),tf=(0,v.default)(tp).withConfig({componentId:"sc-546ed1e8-10"})(["display:none;","{"," ","}","{"," ","}","{"," ","}","{"," ","}"],E.mediaQueries.breakpoints.only.l,tu,(0,te.S)(1),E.mediaQueries.breakpoints.only.m,tu,(0,te.S)(1),E.mediaQueries.breakpoints.only.s,th,(0,te.S)(2),E.mediaQueries.breakpoints.below.s,th,(0,te.S)(2)),tx=(0,v.default)(tp).withConfig({componentId:"sc-546ed1e8-11"})(["display:none;","{"," ","}"],E.mediaQueries.breakpoints.only.xl,th,(0,te.S)(2)),tT=(0,v.default)(w.HTMLContent).withConfig({componentId:"sc-546ed1e8-12"})(["margin-bottom:1.75rem;"," ","{","}","{","}","{","}"],(0,te.S)(5),E.mediaQueries.breakpoints.only.xl,(0,te.S)(6),E.mediaQueries.breakpoints.only.l,(0,te.S)(7),E.mediaQueries.breakpoints.only.m,(0,te.S)(7));i(72579),i(14481),(a=o||(o={})).LARGE="large",a.LISTER_SIMPLE="lister_simple",a.LSC_CENTERWIDTH="lsc_centerwidth",a.LSC_LARGE="lsc_large",a.LSC_MEDIUM="lsc_medium",a.LSC_SMALL="lsc_small",a.LSC_XLARGE="lsc_xlarge",a.LSC_XSMALL="lsc_xsmall",a.MEDIUM="medium",a.METER_ITEM="meter_item",a.MOBILE="mobile",a.MOBILE_LIST="mobile_list",a.MOBILE_SUBPAGE="mobile_subpage",a.OG_IMAGE="og_image",a.PORTRAIT_LARGE="portrait_large",a.PORTRAIT_MEDIUM="portrait_medium",a.PORTRAIT_SMALL="portrait_small",a.PORTRAIT_SPECIAL="portrait_special",a.PORTRAIT_XLARGE="portrait_xlarge",a.PORTRAIT_XSMALL="portrait_xsmall",a.PS_105X105="ps_105x105",a.PS_122X176="ps_122x176",a.PS_150X150="ps_150x150",a.PS_38X38="ps_38x38",a.PS_86X86="ps_86x86",a.PS_90X90="ps_90x90",a.SMALL="small",a.SQUARE_LARGE="square_large",a.SQUARE_MEDIUM="square_medium",a.SQUARE_SMALL="square_small",a.SQUARE_XSMALL="square_xsmall",a.TINY="tiny";let tb={[T.Et.LIST]:"editorialSingle_label_list",[T.Et.GALLERY]:"editorialSingle_label_photos",[T.Et.IMAGE]:"editorialSingle_label_photos"};T.Et.VIDEO,T.LQ.PLAY_CIRCLE_OUTLINE,T.Et.GALLERY,T.LQ.COLLECTIONS,T.Et.LIST,T.LQ.LIST,T.LQ.COLLECTIONS;let ty=e=>{var t,i;let n,a,{placementArgs:r,refMarker:s,displayType:o}=e,l=(0,p.wL)("component_IMDbEditorialSingle"),c=(0,eb.Z)(),g=(t=r.refTag)&&s?s?.prefix&&s.prefix.indexOf(t)>=0?e3(s):(0,eK.z)(t,s):s?e3(s):t||void 0,m=(i=r.refTag)&&s?s?.prefix&&s.prefix.indexOf(i)>=0?e3(s):(0,eK.z)(`c_${i}`,s):s?(0,eK.z)("c",s):i?`${i}_c`:void 0;try{a=r.linkedImages?.map(e=>({fullRefMarker:g,link:e.link,imageModel:e.imageModel?{...e.imageModel,caption:e.imageModel?.caption||"Image caption not available"}:void 0}))??[];let e=r.callToActionUrl&&r.callToActionText&&{children:(0,d.jsx)(w.TextLink,{href:m&&!tv(r.callToActionUrl)?(0,ea.Lr)(r.callToActionUrl,`${m}_cta`):r.callToActionUrl,text:r.callToActionText})};n=function(e,t,i,n,a,r,s){let o={[tb[T.Et.LIST]]:e.formatMessage({id:tb[T.Et.LIST],defaultMessage:"List"}),[tb[T.Et.GALLERY]]:e.formatMessage({id:tb[T.Et.GALLERY],defaultMessage:"Photos"})},l={iconName:i,text:r&&Object.keys(o).includes(r)?o[r]:r,gradientType:"linear"},d=a?.imageModel,c=a?.link,g=s&&c&&!tv(c)?(0,ea.Lr)(c,`${s}_i`):c,m=s&&c&&!tv(c)?(0,ea.Lr)(c,`${s}_t`):c;return{slateProps:{imageProps:{imageModel:d},overlayProps:l,onClick:()=>g,href:g,ariaLabel:l?.text?l.text:"editorial image"},titleProps:{title:t,href:m,lineClamp:"none"},actionProps:n}}(c,r.displayTitle,r.iconName,e,a[0],r.overlayCaption,g)}catch(e){return l.error("Exception rendering component IMDbEditorialSingle",{message:e.message,stack:e.stack}),null}let u=(0,T.zc)(r.constId??"")===T.Et.VIDEO?(0,d.jsx)(W.Q,{associatedConstId:r.constId,entityType:"video"}):void 0;return n={...n,children:u},(0,d.jsx)(d.Fragment,{children:o===T.FO.MAIN?(0,d.jsx)(tn,{...n,description:r.description,linkedImages:a,refMarker:g}):(0,d.jsx)(tI,{className:"imdb-editorial-single",dynamicWidth:!0,size:"s",...n})})},tI=(0,v.default)(w.SlateCard).withConfig({componentId:"sc-73d1a9c6-0"})(["width:100%;"]),tv=e=>"https://"===e.substring(0,8)||"http://"===e.substring(0,7);eE()`
    query AdvancedTitleSearchWidget(
        $titleTypeConstraint: TitleTypeSearchConstraint
        $userRatingsConstraint: UserRatingsSearchConstraint
        $keywordConstraint: KeywordSearchConstraint
        $genreConstraint: GenreSearchConstraint
        $sort: AdvancedTitleSearchSort
    ) {
        advancedTitleSearch(
            first: 3
            constraints: {
                titleTypeConstraint: $titleTypeConstraint
                userRatingsConstraint: $userRatingsConstraint
                keywordConstraint: $keywordConstraint
                genreConstraint: $genreConstraint
            }
            sort: $sort
        ) {
            edges {
                node {
                    title {
                        id
                        titleText {
                            text
                        }
                        originalTitleText {
                            text
                        }
                        primaryImage {
                            url
                            height
                            width
                            caption {
                                plainText
                            }
                        }
                    }
                }
            }
        }
    }
`;var tw=i(74095),tE=i(78267),tC=i(75785),t_=i(42748),tS=i(84314),tk=i(49996),tL=i(14438);let tj=(e,t)=>{if(t?.[e]===void 0)return;let i=Object.entries(t[e]??{}).find(e=>{let[,t]=e;return t});return i?i[0]:void 0},tP=c.createContext({subscribeToRatingChange:void 0,subscribeToWatchlistChange:void 0});tP.Provider,tP.Consumer;var tM=i(44958),tN=i(3557);let tR=()=>{let e=(0,c.useContext)(tP),t=(0,c.useContext)(tM.E5).ratings;(0,c.useEffect)(()=>{e.subscribeToRatingChange&&e.subscribeToRatingChange(t)},[t]);let i=(0,c.useContext)(tN.r).state.items;return(0,c.useEffect)(()=>{e.subscribeToWatchlistChange&&e.subscribeToWatchlistChange(i)},[i]),(0,d.jsx)(d.Fragment,{})};var tA=i(61139),tO=i(44115),t$=i(43698),tD=i(51347),tV=i(36123),tW=i(23279),tU=i(55736);let tF=(e,t)=>{let i={};return t.forEach(t=>{let n=e.getPropertyValue(t);n&&(i[t]=n.trim())}),i};var tz=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.documentElement,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2?arguments[2]:void 0,n=i||Array.from(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.styleSheets,t=new Set;for(let i=0;i<e.length;i++)try{let n=e[i];for(let e=0;e<n.cssRules.length;e++)try{let i=n.cssRules[e];for(let e=0;e<i.style.length;e++){let n=i.style[e];n.startsWith("--")&&t.add(n)}}catch(e){continue}}catch(e){continue}return Array.from(t)}());return tF(window.getComputedStyle(e,t),n)};let tQ={getIsReady:()=>!0,getWidgetSize:null,getSiteVariant:()=>"web",getPlatform:()=>"web",getPlacementData:null,getPageContext:null,getWeblabActivations:null,openTitlePrompt:null,openCreditPrompt:null,openRatingPrompt:null,recordMetric:null,setRating:null,setWatchlist:null,subscribeToRatingChange:null,subscribeToWatchlistChange:null,getScrollOffset:tA.default,getViewportSize:tO.ZP,getTheme:e=>tz(e),getThemeVariables:e=>tz(e),setWidgetAspectRatio:t$.ZP,subscribeToIntersectionObserver:tD.IH,unsubscribeFromIntersectionObserver:tD.Od,subscribeToMediaQueries:tV.IH,unsubscribeFromMediaQueries:tV.Od,subscribeToResize:tW.IH,unsubscribeFromResize:tW.Od,subscribeToScrollChange:tU.IH,unsubscribeFromScrollChange:tU.Od},tB=e=>{let{title:t,url:i}=e;return{slotName:e.slotName||"",title:t,url:i,height:e.height||"400",generatedPrefix:e.generatedPrefix||"",isPageSection:e.isPageSection||"",disableLazyLoad:e.disableLazyLoad||""}},tY=(e,t,i)=>{let n=e.contentWindow;n&&(n.EmbeddableBridge?(n.EmbeddableBridge.pageContext=t,n.EmbeddableBridge.placementData=i,n.EmbeddableBridge.requests||(n.EmbeddableBridge.requests=[])):n.EmbeddableBridge={requests:[],pageContext:t,placementData:i},n.setEmbeddableReady?n.setEmbeddableReady():(0,tC.ZP)(n,{messageType:"embeddableReady"},"*"))},tH=(e,t)=>{if(!e)return!1;let{pageAction:i,refMarkerString:n,customPageMetadata:a}=e;if("string"==typeof i&&"string"==typeof n){let e={pageAction:i,refMarkerString:n};return a&&(e.customPageMetadata=a),t(e),!0}return!1},tG=/\/(m|www)?(\.)?((dev|preprod|beta|gamma|(([a-zA-Z]+\.)+)?desktop)+)?\.imdb\.com/,tq=e=>!!e&&!!e.match(tG),tK=(e,t)=>{let i=new URL(e),n=new URL(t);return tX(n.href)?(i.hostname=n.hostname,i.href):e},tZ=/[0-9a-z-]+\.amazon\.com[:0-9]+?\/embeddable\//,tX=e=>tq(e)||tZ.test(e),tJ="IMDbEmbeddable",t0="embeddableMessage",t1=`component_${tJ}`,t2=e=>{let{isPageSection:t,children:i}=e;return t?(0,d.jsx)(w.PageSection,{"data-testid":"embeddable-section",children:i}):(0,d.jsx)(t5,{children:i})},t5=v.default.div.withConfig({componentId:"sc-a0df6ef8-0"})(["position:relative;width:100%;line-height:0;"]),t8=v.default.iframe.withConfig({componentId:"sc-a0df6ef8-1"})(["width:100%;"]),t4=(0,v.default)(w.SlateCard).withConfig({componentId:"sc-19912bf7-0"})(["width:100%;"]),t9=(0,v.default)(w.TextLink).withConfig({componentId:"sc-19912bf7-1"})(["",""],(0,te.S)(2)),t3=(0,v.default)(w.Slate).withConfig({componentId:"sc-19912bf7-2"})(["width:63%;"]),t7=(0,v.default)(w.Title).withConfig({componentId:"sc-19912bf7-3"})(["padding-left:0;"]),t6=v.default.div.withConfig({componentId:"sc-19912bf7-4"})(["","{display:none;}"],E.mediaQueries.breakpoints.only.m),ie=(0,v.default)(w.PageSection).withConfig({componentId:"sc-19912bf7-5"})(["display:none;","{display:flex;flex-direction:column;}"],E.mediaQueries.breakpoints.only.m),it=(0,v.default)(w.HTMLContent).withConfig({componentId:"sc-19912bf7-6"})(["margin-bottom:",";",""],E.spacing.l,(0,te.S)(7)),ii=v.default.div.withConfig({componentId:"sc-19912bf7-7"})(["width:37%;margin-right:",";"],E.spacing.m),ia=v.default.div.withConfig({componentId:"sc-19912bf7-8"})(["display:flex;flex-direction:row;"]);var ir=i(11947),is=i(15030),io=i(40981),il=i(57708);let id=e=>{let{rank:t,title:i,link:n,imageModel:a,rankChange:r,percentage:s,ratingData:o,refOverride:l}=e,c=s?s.weight/s.total:void 0,g=c&&c<.01,m=a?.type==="name"?w.AvatarImage:w.PosterImage;return(0,d.jsx)(w.MetaDataListItem,{labelLink:n,labelLinkAriaLabel:`${t}. ${i}`,display:"inline",preElement:a?(0,d.jsx)(ic,{children:(0,d.jsx)(m,{imageModel:a,size:"48px",dynamicWidth:!0,imageType:a.type||"movie",dynamicAspectRatio:!0})}):void 0,children:(0,d.jsxs)(ig,{children:[(0,d.jsxs)(im,{children:[(0,d.jsxs)(iT,{"data-testid":"rank-list-item-title",children:[(0,d.jsx)(ib,{children:t}),i]}),!!o?.aggregateRating&&(0,d.jsxs)(ih,{onClick:e=>e.stopPropagation(),children:[(0,d.jsx)(ip,{hideMaxIMDbRating:!0,canRate:o.canRate,titleId:o.titleId,titleText:i,ratingsSummary:{aggregateRating:o.aggregateRating},refOverride:l}),!!o?.canRate&&(0,d.jsx)(iu,{titleId:o?.titleId,titleText:i})]})]}),(0,d.jsxs)(ix,{children:[!!r&&!!r.direction&&"number"==typeof r.difference&&(0,d.jsx)(is.x,{difference:r.difference,direction:r.direction}),!!c&&(0,d.jsxs)(d.Fragment,{children:[!!g&&"<",(0,d.jsx)(ir.A,{value:g?.01:c,unit:"percent",style:"percent",maximumFractionDigits:g?0:1})]})]})]})})},ic=v.default.span.withConfig({componentId:"sc-29915307-0"})(["display:flex;width:3rem;flex-shrink:0;"]),ig=v.default.div.withConfig({componentId:"sc-29915307-1"})(["display:flex;flex-direction:row;margin-left:",";"," ",""],E.spacing.s,(0,E.setPropertyToColorVar)("color","ipt-on-base-textSecondary-color"),(0,E.setTypographyType)("bodySmall")),im=v.default.div.withConfig({componentId:"sc-29915307-2"})(["display:flex;flex-direction:column;flex-grow:1;","{flex-direction:row;justify-content:space-between;align-items:center;margin-right:",";}"],E.mediaQueries.breakpoints.above.l,E.spacing.xs),ip=(0,v.default)(io.Nf).withConfig({componentId:"sc-29915307-3"})(["flex-wrap:nowrap;margin-left:-2px;min-height:1.75rem;width:fit-content;.","{padding:0 ",";span{",";}}"],io.z7.USER_RATING,E.spacing.s,(0,E.setTypographyType)("bodySmall")),iu=(0,v.default)(il.$).withConfig({componentId:"sc-29915307-4"})(["","{margin-left:-",";padding-top:0;padding-bottom:0;min-height:auto;}"],E.mediaQueries.breakpoints.below.s,E.spacing.xs),ih=v.default.div.withConfig({componentId:"sc-29915307-5"})(["display:flex;align-items:center;flex-wrap:wrap;gap:0 ",";"],E.spacing.xxs),ix=v.default.div.withConfig({componentId:"sc-29915307-6"})(["display:flex;flex-direction:row;flex-grow:0;align-items:center;"]),iT=v.default.span.withConfig({componentId:"sc-29915307-7"})([""," "," ","{display:inline-flex;align-items:center;padding:0.75rem 0 0;}"],(0,E.setTypographyType)("body"),(0,E.setPropertyToColorVar)("color","ipt-on-base-textPrimary-color"),E.mediaQueries.breakpoints.below.l),ib=v.default.span.withConfig({componentId:"sc-29915307-8"})(["font-weight:bold;margin-right:",";"],E.spacing.s);var iy=i(9707),iI=i(86528);let iv=(0,v.default)(w.PageSection).withConfig({componentId:"sc-355af3ec-0"})(["&&{margin-bottom:var(--ipc-pageSection-bottomMargin);}"]),iw=(0,v.default)(e=>{let{items:t,...i}=e;return t&&0!==t.length?(0,d.jsx)(w.MetaDataList,{...i,display:"compact",children:t.map(e=>(0,c.createElement)(id,{...e,refOverride:i.refOverride,key:`${e.rank}-${e.title}`}))}):null}).withConfig({componentId:"sc-355af3ec-1"})([""," ",""],(0,E.setPropertyToSpacingVar)("margin-left","ipt-pageMargin"),(0,E.setPropertyToSpacingVar)("margin-right","ipt-pageMargin")),iE=v.default.div.withConfig({componentId:"sc-355af3ec-2"})(["align-items:center;display:flex;justify-content:center;min-height:2.25rem;"]),iC=v.default.div.withConfig({componentId:"sc-355af3ec-3"})(["margin-top:",";"," "," margin-bottom:",";min-height:2.25rem;"],E.spacing.l,(0,E.setPropertyToSpacingVar)("margin-left","ipt-pageMargin"),(0,E.setPropertyToSpacingVar)("margin-right","ipt-pageMargin"),E.spacing.l);var i_=i(85018);(r=l||(l={})).TitleTrendsUpcoming="INDIA_TITLE_TRENDS_UPCOMING",r.TitleTrendsReleasedTamil="INDIA_TITLE_TRENDS_RELEASED_TAMIL",r.TitleTrendsReleasedTelugu="INDIA_TITLE_TRENDS_RELEASED_TELUGU",r.TitleRankingsTop250India="TOP_250_INDIA",r.TitleRankingsTop50Tamil="TOP_50_TAMIL",r.TitleRankingsTop50Telugu="TOP_50_TELUGU",r.TitleRankingsTop50Malayalam="TOP_50_MALAYALAM",eI._pv.IndiaTitleTrendsUpcoming,eI._pv.IndiaTitleTrendsReleasedTamil,eI._pv.IndiaTitleTrendsReleasedTelugu,eI.dO5.Top_250India,eI.dO5.Top_50Tamil,eI.dO5.Top_50Telugu,eI.dO5.Top_50Malayalam;let iS=eE()`
    fragment TitleItem on Title {
        ...BaseTitleCard
        ...TitleCardTrailer
    }
    ${i_.sq}
    ${i_.F4}
`,ik=eE()`
    fragment TrendingTitle on TrendingTitleNode {
        rank
        weightRank
        item {
            ...TitleItem
        }
    }
    ${iS}
`;eE()`
    query IndiaWidgetTrendingTitles(
        $numResults: Int!
        $input: TopTrendingPredefinedEnum!
    ) {
        topTrendingSetsPredefined(
            first: $numResults
            input: { topTrendingSetPredefined: $input }
        ) {
            edges {
                node {
                    ...TrendingTitle
                }
            }
        }
    }
    ${ik}
`;let iL=eE()`
    fragment RankTitle on TitleChartRankingsNode {
        item {
            ...TitleItem
        }
    }
    ${iS}
`;eE()`
    query IndiaWidgetTopRatedTitles(
        $numResults: Int!
        $input: TitleChartRankingsType!
    ) {
        titleChartRankings(
            first: $numResults
            input: { rankingsChartType: $input }
        ) {
            edges {
                node {
                    ...RankTitle
                }
            }
        }
    }
    ${iL}
`;var ij=i(23842);let iP=(0,v.default)(w.PageSection).withConfig({componentId:"sc-7ab67fd6-0"})(["&&{margin-bottom:var(--ipc-pageSection-bottomMargin);}"]),iM=(0,v.default)(w.TextLink).withConfig({componentId:"sc-7ab67fd6-1"})([""," margin-top:1.75rem;"],(0,E.setPropertyToSpacingVar)("margin-left","ipt-pageMargin")),iN=(0,v.default)(w.PageSection).withConfig({componentId:"sc-eafbde39-0"})(["&&{margin-bottom:var(--ipc-pageSection-bottomMargin);}"]),iR=(0,v.default)(w.ChipList).withConfig({componentId:"sc-eafbde39-1"})([""," ",""],(0,E.setPropertyToSpacingVar)("padding-left","ipt-pageMargin"),(0,E.setPropertyToSpacingVar)("padding-right","ipt-pageMargin"));var iA=i(5632),iO=i(31769);let i$=v.default.div.withConfig({componentId:"sc-45354452-0"})(["display:flex;flex-direction:column;padding-top:",";"," ",""],E.spacing.m,e=>e.backgroundColor&&(0,v.css)(["background-color:",";"],e.backgroundColor),e=>e.backgroundImage&&(0,v.css)(["background:url(",");background-size:cover;"],e.backgroundImage)),iD=v.default.div.withConfig({componentId:"sc-45354452-1"})(["display:flex;flex-direction:row;"]),iV=(0,v.default)(w.PageTitle).withConfig({componentId:"sc-45354452-2"})([""," ",""],e=>e.headingColor&&(0,v.css)(["h1{color:",";}"],e.headingColor),e=>e.href&&(0,v.css)(["svg{display:none;}"])),iW=v.default.div.withConfig({componentId:"sc-45354452-3"})(["",""],(0,E.setPropertyToSpacingVar)("padding-right","ipt-pageMargin")),iU=(0,v.default)(iO.ZP).withConfig({componentId:"sc-45354452-4"})(["",""],e=>e.color&&(0,v.css)(["color:",";&:hover{color:",";}"],e.color,e.color)),iF=(0,v.default)(w.Tabs).withConfig({componentId:"sc-45354452-5"})([""," "," ",""],e=>e.tabBackgroundColor&&(0,v.css)(["background-color:",";"],e.tabBackgroundColor),e=>e.tabColor&&(0,v.css)([".ipc-tab > span{color:",";}"],e.tabColor),e=>e.selectedTabColor&&(0,v.css)([".ipc-tabs__indicator{background:",";}"],e.selectedTabColor));var iz=i(97729),iQ=i.n(iz),iB=i(73286),iY=i(34231);let iH=e=>[e.section,e.subSection].filter(Boolean).join("."),iG=e=>{let{pageType:t,subPageType:i,queryParams:n}=e,a=iH(n||{});return(0,d.jsxs)(d.Fragment,{children:[!!t&&(0,d.jsx)("meta",{property:"imdb:pageType",content:t}),!!i&&(0,d.jsx)("meta",{property:"imdb:subPageType",content:i}),!!a&&(0,d.jsx)("meta",{property:"imdb:specialSectionPageId",content:a})]})},iq=()=>{let e=new URL((0,iA.useRouter)().asPath,"https://www.imdb.com"),t=(0,ea.ps)()??"";return`https://${e.hostname}${t}${e.pathname}${e.pathname.endsWith("/")?"":"/"}`},iK=e=>{let t={};e.forEach(e=>{Object.keys(e).forEach(i=>{let n=`background-${i}`,a=t[n]?t[n]:null;t[n]=`${null!==a?`${a}, `:""}${e[i]}`})});let i="";return Object.keys(t).forEach(e=>{i+=`
	${e}: ${t[e]}; `}),i},iZ=e=>{let t=/^--/,i="";return Object.keys(e).forEach(n=>{let a=t.test(n)?n:`--${n}`;i+=`
	${a}: ${e[n]}; `}),i};var iX=i(68557),iJ=i(83163),i0=i(48687);let i1=eE()`
    fragment RankedListNameMetadata on Name {
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
        primaryProfessions {
            category {
                text
            }
        }
        # IMDB_WEB_PACE_SPECIFIC_PROFESSIONS_DISPLAY_1112523
        professions {
            profession {
                text
            }
        }
        knownForV2(limit: 1) @include(if: $isInPace) {
            credits {
                title {
                    id
                    originalTitleText {
                        text
                    }
                    titleText {
                        text
                    }
                    titleType {
                        canHaveEpisodes
                    }
                    releaseYear {
                        year
                        endYear
                    }
                }
                episodeCredits(first: 0) {
                    yearRange {
                        year
                        endYear
                    }
                }
            }
        }
        knownFor(first: 1) {
            edges {
                node {
                    summary {
                        yearRange {
                            year
                            endYear
                        }
                    }
                    title {
                        id
                        originalTitleText {
                            text
                        }
                        titleText {
                            text
                        }
                        titleType {
                            canHaveEpisodes
                        }
                    }
                }
            }
        }
    }
`,i2=eE()`
    fragment RankedTitleListMetadata on Title {
        ...BaseTitleCard
        principalCredits {
            credits {
                category {
                    id
                    text
                }
                name {
                    id
                    nameText {
                        text
                    }
                }
            }
        }
    }

    ${i_.sq}
`,i5=eE()`
    query RankedList($lsConst: ID!, $first: Int!, $isInPace: Boolean!) {
        list(id: $lsConst) {
            id
            items(first: $first) {
                edges {
                    node {
                        listItem {
                            __typename
                            ... on Name {
                                ...RankedListNameMetadata
                            }
                            ... on Title {
                                ...RankedTitleListMetadata
                            }
                        }
                    }
                }
            }
        }
    }
    ${i2}
    ${i1}
`;var i8=i(79523),i4=i(65991);let i9=e=>{let t,i,{nameListData:n,rankNumber:a}=e,{nameMainLinkBuilder:r}=(0,er.WOb)();(0,i0.hg)({weblabID:iJ.lh.IMDB_WEB_PACE_CREDITS_1201882,treatments:{T1:!0}})?(t=n.knownForV2?.credits[0]?.title,i=n.professions?.[0].profession?.text):(t=n.knownFor?.edges[0]?.node.title,i=n.primaryProfessions?.[0].category.text);let s=(0,ex.K)(t||{}),o=n.nameText?.text;if(!o)return null;let l=(0,ef.K0)(n.primaryImage,o),c={titleName:o,condensedPadding:!0,secondaryText:(0,d.jsxs)(e2.InlineList,{showDividers:!0,noWrap:!0,inline:!0,children:[(0,d.jsx)(e2.InlineListItem,{children:i}),!!s&&(0,d.jsx)(e2.InlineListItem,{children:s})]}),titlePageLink:r({nconst:n.id,refSuffix:[{t:f.Cd.LIST,n:a}]}),preElement:(0,d.jsx)(e2.PosterImage,{imageModel:l,size:"48",imageType:"name"}),rankNumber:a,postElement:(0,d.jsx)(i8.U,{constId:n.id})};return(0,d.jsx)(i4.p,{...c})},i3=e=>{let{titleListData:t,rankNumber:i}=e,{titleMainLinkBuilder:n}=(0,er.WOb)(),a=(0,ex.K)(t||{}),r=t.principalCredits?.[0].credits[0].category.text,s=t.principalCredits?.[0].credits[0].name.nameText?.text;if(!a||!s)return null;let o=(0,ef.K0)(t.primaryImage,a),l={titleName:a,condensedPadding:!0,secondaryText:(0,d.jsxs)(d.Fragment,{children:[!!r&&`${r}, `,s]}),titlePageLink:n({tconst:t.id,refSuffix:[{t:f.Cd.LIST,n:i}]}),preElement:(0,d.jsx)(e2.PosterImage,{imageModel:o,size:"48",imageType:t.titleType?.id}),rankNumber:i,postElement:(0,d.jsx)(i8.U,{constId:t.id})};return(0,d.jsx)(i4.p,{...l})};var i7=i(8e3),i6=i(67626);i(35061),eE()`
    query VideoPlaylistWidgetList($id: ID!) {
        list(id: $id) {
            name {
                originalText
            }
            listType {
                id
            }
            listClass {
                id
            }
            description {
                originalText {
                    plaidHtml
                }
            }
            items(first: 100) {
                total
                edges {
                    cursor
                    position
                    node {
                        description {
                            originalText {
                                plaidHtml
                            }
                        }
                        listItem {
                            ... on Video {
                                id
                                contentType {
                                    displayName {
                                        value
                                    }
                                }
                                name {
                                    value
                                }
                                runtime {
                                    value
                                }
                                thumbnail {
                                    height
                                    url
                                    width
                                }
                                primaryTitle {
                                    originalTitleText {
                                        text
                                    }
                                    titleText {
                                        text
                                    }
                                    releaseYear {
                                        year
                                        endYear
                                    }
                                    titleType {
                                        canHaveEpisodes
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;let ne={AdvancedTitleSearchWidget:e=>{let t=e.refMarker?e.refMarker:{prefix:e.placementArgs.generatedPrefix};return(0,d.jsx)(ty,{...e,refMarker:t})},ChartWidget:e=>{let{placementArgs:{heading:t,subheading:i,items:n,generatedPrefix:a,voteTotal:r}}=e,{titleMainLinkBuilder:s}=(0,er.WOb)(),o=(0,eT.nu)(),l=(0,eT.LI)({titleIds:n?.map(e=>e.item.id)??[]}),c=(0,C.B)().context;if(!n||0===n.length)return null;let g=n.some(e=>{let{item:t}=e;return t.canRate?.isRatable}),m=!!(l?.fetching&&o),p=n.map((e,t)=>{let i=e.item,n=(0,ex.L)(c,i.originalTitleText?.text,i.titleText?.text),o=e.rank||t+1,l=r?{weight:e.weightRank||0,total:r}:void 0,d=i.ratingsSummary?.aggregateRating?{aggregateRating:i.ratingsSummary.aggregateRating,voteCount:i.ratingsSummary.voteCount,titleId:i.id,canRate:!0}:void 0;if(n&&o)return{rank:o.toString(),title:n,imageModel:(0,ef.K0)(i.primaryImage,n),link:s({tconst:e.item.id,refSuffix:{t:(0,f.Qk)({refStr:a,explanation:"This ref marker is vended from the graph dynamically"}),n:t+1}}),percentage:l,ratingData:d}}).filter(Boolean);return(0,d.jsxs)(iv,{"data-testid":"symphony-IMDbChartWidget",children:[!!t&&(0,d.jsx)(w.SubSectionTitle,{description:i,children:t}),!!g&&(0,d.jsx)(iC,{children:(0,d.jsx)(iI.Z,{children:m&&o?(0,d.jsx)(iE,{children:(0,d.jsx)(w.Loader,{})}):(0,d.jsx)(iy.r,{totalNumber:p.length})})}),(0,d.jsx)(iw,{items:p,refOverride:a})]})},EventHistoryWidget:e=>{let{placementArgs:t}=e;return(0,d.jsx)(eY.S,{mustMatchEventId:t.eventId,fallbackComponent:(0,d.jsx)(f.xm,{value:(0,f.Qk)({refStr:t.generatedPrefix??"",explanation:`
                        We will continue to support ref strings provided
                        by the editorial team as well as the generated ref
                        prefix that includes the slot name.`}),children:(0,d.jsx)(eB.p,{...t})}),headerText:t.headerText})},FreeFormMarkdown:e=>{let{placementArgs:{heading:t,subheading:i,blurbHtml:n}}=e;return n?(0,d.jsxs)(eG,{"data-testid":"symphony-FreeFormMarkdown",children:[!!t&&(0,d.jsx)(w.SubSectionTitle,{description:i,children:t}),!!n&&(0,d.jsx)(eq,{html:eH(n)})]}):null},HeroWidget:e=>{let{placementArgs:t}=e,{imageLockups:i,generatedPrefix:n}=t,a={prefix:n};return(0,d.jsx)(d.Fragment,{children:!!i&&i.length>0&&(0,d.jsx)(eZ,{"data-testid":"symphony-HeroWidget",children:i.map((e,t)=>{let i=t+1,n=`${e.imageUrl}?ref_=${(0,eK.z)(`${f.Cd.POSTER}_${i}`,a)}`,r=`${e.primaryTextUrl||e.imageUrl}?ref_=${(0,eK.z)(`${f.Cd.TEXT}_${i}`,a)}`,s=e.primaryText||e.secondaryText||e.image?.caption;return(0,d.jsxs)(eX,{children:[(0,d.jsx)(w.Poster,{imageProps:{imageModel:e.image,imageType:"movie"},href:n,ariaLabel:s,dynamicWidth:!0}),!!r&&!!(e.primaryText||e.secondaryText)&&(0,d.jsxs)(eJ,{href:r,children:[!!e.primaryText&&(0,d.jsx)(e0,{children:e.primaryText}),!!e.secondaryText&&(0,d.jsx)(e1,{children:e.secondaryText})]})]},`hero-widget-lockup-${i}`)})})})},IMDbAutorotatePromotedVideoAd:e=>{let{placementArgs:t}=e,i=(0,en.gd)(t.promotedVideoAd),n=(0,ex.K)({originalTitleText:t.promotedVideoData.originalTitleText,titleText:t.promotedVideoData.title})||t.promotedVideoData.headline,a=i?.impressionTrackers,r=i?.titlePageClickTrackers,s={...i},o=(0,en.DA)(s),l={...t.promotedVideoData,titleText:n},g=async()=>{a?.length&&await (0,en.Ew)(a)};return(0,c.useEffect)(()=>{g()},[]),(0,d.jsx)(es.f.Provider,{value:{titlePageClickTrackers:r,formattedVideoTrackers:o},children:(0,d.jsx)(eh,{...l})})},IMDbAutorotateVideo:e=>{let{placementArgs:t}=e;return(0,d.jsx)(eh,{...t})},IMDbBannerImage:e=>{let{placementArgs:t}=e;if(!t||!t.imageUrl)return null;let i=e4(t);return(0,d.jsx)(e9,{images:i})},IMDbEditorialAnnouncement:e=>{let{refTag:t}=e.placementArgs;return(0,d.jsx)(f.xm,{value:(0,f.Qk)({refStr:`${f.Cd.ANNOUNCEMENT}_${t}`,explanation:`
                        We will continue to support ref strings provided
                        by the editorial team as well as the generated ref
                        prefix that includes the slot name.`}),children:(0,d.jsx)(N,{...e})})},IMDbEditorialSingle:ty,IMDbEmbeddableWidget:e=>{let{placementArgs:t}=e,{url:i,title:n,height:a,slotName:r,generatedPrefix:s,isPageSection:o,disableLazyLoad:l}=tB(t),{context:g}=(0,C.B)(),{isDebug:m=!1}=(0,y.kp)(),u=g.headers?.host,h=u?`https://${u}`:i,f=tK(i,h),x=tX(f),T=(0,p.wL)(t1),b=(0,tS.n)(),I=(0,tk.y)(),v=(0,c.createRef)(),w=(0,c.useContext)(tP),E=(0,tL.EO)(),_=(0,c.useMemo)(()=>({...I,isUserLoggedIn:b,isDebug:!!m,slotId:r,siteVariant:"web"}),[I,b,r,m]),S={...tQ,getPageContext:()=>_,getPlacementData:()=>t,getWeblabActivations:(e,t)=>{let i={};return("string"==typeof t?[t]:t).forEach(e=>{let t=tj(e);t&&(i[e]=t)}),i},recordMetric:(e,t)=>tH(t,E),subscribeToWatchlistChange:(e,t,i)=>(w.subscribeToWatchlistChange=e=>{(0,tC.ZP)(i.source,{...t,messageType:t0,subscribeKey:tE.hP.watchlist,subscribeData:e},i.origin)},null),subscribeToRatingChange:(e,t,i)=>(w.subscribeToRatingChange=e=>{(0,tC.ZP)(i.source,{...t,messageType:t0,subscribeKey:tE.hP.rating,subscribeData:e},i.origin)},null)},k=(0,c.useCallback)(e=>{let t=e.origin,i=e.source,{messageType:n,requestKey:a,requestData:r}=e.data,s={...e.data};if(n===t0){try{let e=i.frameElement,n=S[a];if(n){let a=n(e,r,{source:i,origin:t});s.responseData=a||s.responseData}else throw(0,tw.UnknownRequestError)(a)}catch(e){T.info(`IMDbEmbeddableBridge requestKey ${a} has no bridgeResponseMethod defined`,e.message,e.stack),s.responseError=e}(0,tC.ZP)(i,s,t)}},[T]);if((0,c.useEffect)(()=>{v.current&&_&&t&&tY(v.current,_,t)},[v,_,t]),(0,c.useEffect)(()=>(window?.addEventListener("message",k),()=>window?.removeEventListener("message",k)),[k]),!x)return T.error(`IMDbEmbeddableWidget[${r}] has invalid url [${f}] defined in creative configuration`),null;let L=(0,d.jsxs)(t2,{isPageSection:"true"===o,children:[(0,d.jsx)(t8,{"data-testid":"embeddable-iframe","data-slotid":r,"data-refprefix":s,ref:v,height:a,title:n,src:f}),(0,d.jsx)(tR,{})]});return"true"!==l?(0,d.jsx)(t_.X,{componentId:`${tJ}_${r}`,children:L}):L},IMDbEnhancedList:e=>{let{placementArgs:t}=e,{items:i,errors:n}=t;return n?.length?(0,d.jsx)("div",{"data-testid":"enhanced-list-widget-error",children:n.map((e,t)=>{let i=`widget-error-${t}`;return(0,d.jsxs)("div",{children:[e.code,(0,d.jsx)("br",{}),e.context," ",e.message]},i)})}):i.length?(0,d.jsxs)("div",{"data-testid":"enhanced-list-widget",children:[i.map(e=>(0,d.jsx)("div",{children:e.titleData?.titleText?.text},e.id)),`hello world - item count: ${i.length}`]}):null},IMDbProSidebarWidget:e=>{let t,i,n,{placementArgs:a}=e,r=(0,p.wL)("component_IMDbProSidebarWidget"),{blurbContent:s,blurbLink:o,ctaText:l,ctaLink:c,heading:g,imageUrl:m,imageCaption:u,imageMaxWidth:h,imageMaxHeight:f,imageLink:x}=a;try{t={children:(0,d.jsx)(t9,{href:c,text:l})},i={...(n={slateProps:{imageProps:{imageModel:{url:m,maxHeight:f,maxWidth:h,caption:u}},onClick:()=>x,href:x,ariaLabel:u},titleProps:{title:s,href:o,lineClamp:"none"},actionProps:t,dynamicWidth:!0}).slateProps,dynamicWidth:!0}}catch(e){return r.error("Exception rendering component IMDbProSidebarWidget",{message:e.message,stack:e.stack}),null}return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(t6,{"data-testid":"imdb-pro-sidebar-widget",children:[(0,d.jsx)(t7,{children:g}),(0,d.jsx)(t4,{size:"s",...n})]}),(0,d.jsx)(ie,{baseColor:"none","data-testid":"imdb-pro-sidebar-widget-m",children:(0,d.jsxs)(ia,{children:[(0,d.jsxs)(ii,{children:[(0,d.jsx)(t7,{children:g}),(0,d.jsx)(it,{html:s}),t?.children]}),(0,d.jsx)(t3,{...i})]})})]})},IMDbRankedList:e=>{let{placementArgs:t}=e,{listId:i,widgetTitle:n,widgetTitleUrl:a,description:r,subListText:s,subListTextUrl:o}=t,l=(0,i0.hg)({weblabID:iJ.lh.IMDB_WEB_PACE_CREDITS_1201882,treatments:{T1:!0}}),[{data:c,fetching:g,error:m}]=(0,eT.E8)({query:i5,variables:{lsConst:i,first:5,isInPace:l},context:{personalized:!1,serverSideCacheable:!0}});if(m||g||0>=(c?.list?.items?.edges.length||0))return null;let p=c?.list?.items?.edges[0].node.listItem?.__typename==="Name",u=c?.list?.items?.edges[0].node.listItem?.__typename==="Title";return p||u?(0,d.jsxs)("div",{children:[(0,d.jsx)(w.SubSectionTitle,{description:r,href:a,children:n}),(0,d.jsx)(iX.i,{displayStyle:"singleColumn",children:(0,d.jsxs)(d.Fragment,{children:[!!p&&c?.list?.items?.edges.map((e,t)=>{let{node:i}=e,n=i.listItem;return d.jsx(i9,{nameListData:n,rankNumber:t+1},n.id)}),!!u&&c?.list?.items?.edges.map((e,t)=>{let{node:i}=e,n=i.listItem;return d.jsx(i3,{titleListData:n,rankNumber:t+1},n.id)})]})}),!!s&&!!o&&(0,d.jsx)("div",{className:"pl-pageMargin pt-s",children:(0,d.jsx)(w.TextLink,{text:s,href:o})})]}):null},IMDbConstCardShoveler:e=>{let{placementArgs:t}=e,{listId:i,titleText:n,titleUrl:a,description:r,subShovelerText:s,subShovelerUrl:o}=t,[{data:l,fetching:c,error:g}]=(0,eT.E8)({query:ek,variables:{lsConst:i},context:{personalized:!1,serverSideCacheable:!0}}),m=eR(l?.list),p=eA(l?.list),[{data:u,fetching:h,error:f}]=(0,eT.E8)({query:m?eL:ej,variables:{lsConst:i,first:25,isInPace:!1,refTagQueryParam:null,originalTitleText:!1},context:{personalized:!1,serverSideCacheable:!0},pause:c||!!g||!m&&!p});if(g||f||c||h||!m&&!p||!u?.list)return null;let x=ez(u.list),T=eQ(x);return 0===x.length?null:(0,d.jsxs)("div",{children:[(0,d.jsx)(w.SectionTitle,{tag:"h2",description:r,href:a,children:n}),(0,d.jsx)(w.Shoveler,{children:T.map((e,t)=>(0,d.jsx)(ev,{card:e},`${e.id}_${t}`))}),!!s&&(0,d.jsx)("div",{className:"pl-pageMargin pt-s",children:(0,d.jsx)(w.TextLink,{text:s,href:o})})]})},IMDbSectionHeader:e=>{let{placementArgs:t}=e;return t&&t.headerText?(0,d.jsx)("div",{children:(0,d.jsx)(w.SubSectionTitle,{tag:"h2",description:t.subHeaderText,children:t.headerText})}):null},LinksWidget:e=>{let{placementArgs:t}=e,{heading:i,subheading:n,generatedPrefix:a}=t,r=[],s=1;for(let e=0;e<100;e++){let i=e<10?`0${e}_url`:`${e}_url`,n=e<10?`0${e}_urllabel`:`${e}_urllabel`;t[i]&&t[n]&&(r.push((0,d.jsx)(w.Chip,{label:t[n],href:`${t[i]}?ref_=${(0,eK.z)(s.toString(),{prefix:a})}`},i)),s+=1)}return r.length?(0,d.jsxs)(iN,{"data-testid":"symphony-LinksWidget",children:[!!i&&(0,d.jsx)(w.SubSectionTitle,{description:n,children:i}),(0,d.jsx)(iR,{wrap:!0,children:r})]}):null},NavigationWidget:e=>{let{placementArgs:t}=e,i=t.heading?(0,d.jsx)(iV,{headingColor:t.headingcolor,href:t.targeturl,tag:"h1",children:t.heading}):null,n=t.showsocialsharingwidget?(0,d.jsx)(iW,{children:(0,d.jsx)(iU,{color:t.socialsharingwidgetcolor,shareProps:{label:t.socialsharingtext}})}):null,a=[],r=1;for(let e=0;e<100;e++){let i=e<10?`0${e}_url`:`${e}_url`,n=e<10?`0${e}_urllabel`:`${e}_urllabel`;t[i]&&t[n]&&(a.push({id:i,label:t[n],href:`${t[i]}?ref_=${(0,eK.z)(r.toString(),{prefix:t.generatedPrefix})}`}),r+=1)}let s=(0,iA.useRouter)(),o=a.find(e=>t[e.id]===s.asPath.split("?")?.[0]),l=o?.id;return a.length?(0,d.jsxs)(i$,{"data-testid":"symphony-NavigationWidget",backgroundColor:t.backgroundcolor,backgroundImage:t.backgroundimageid,children:[(0,d.jsxs)(iD,{children:[i,n]}),(0,d.jsx)(iF,{tabs:a,tabBackgroundColor:t.tabbackgroundcolor,tabColor:t.tabtextcolor,selectedTabColor:t.tabkeycolor,value:l})]}):null},NinjaWidget:e=>{let t=e.refMarker?e.refMarker:{prefix:e.placementArgs.generatedPrefix};return(0,d.jsx)(ty,{...e,refMarker:t})},PageDetailsWidget:e=>{let{placementArgs:t}=e,{context:i,update:n}=(0,C.B)(),a=iq(),r=(0,iY.z)(a),{makeRefMarker:s}=(0,f.Lz)();if((0,c.useEffect)(()=>{t?.baseref&&n({...i,refTagPrefix:s((0,f.Qk)({refStr:t.baseref,explanation:"This ref marker comes from symphony content."}))})},[]),!t||!Object.keys(t).length)return null;let o=[],l=[],g=null;t.title&&(g=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("title",{children:[t.title," - IMDb"]}),(0,d.jsx)("meta",{name:"title",content:`${t.title} - IMDb`})]}),o.push((0,d.jsx)("meta",{property:"og:title",content:`${t.title} - IMDb`},"og-title")),l.push((0,d.jsx)("meta",{property:"twitter:title",content:`${t.title} - IMDb`},"tw-title")));let m=null;t.description&&(m=(0,d.jsx)("meta",{name:"description",content:t.description}),o.push((0,d.jsx)("meta",{property:"og:description",content:t.description},"og-desc")),l.push((0,d.jsx)("meta",{property:"twitter:description",content:t.description},"tw-desc")));let p=null;t.keywords&&(p=(0,d.jsx)("meta",{name:"keywords",content:t.keywords}));let u=[];if(t.backgroundimageid&&(u.push(`background-image: url(${t.backgroundimageid});`,"background-position: center top;","background-repeat: no-repeat;"),t.backgroundscroll)){let e="true"===t.backgroundscroll?"scroll":"fixed";u.push(`background-attachment: ${e};`)}if(t.backgroundcolor&&u.push(`background-color: ${t.backgroundcolor};`),t.backgroundstyles)try{let e=JSON.parse(t.backgroundstyles),i=iK(e);u.push(i)}catch(e){}let h=null;t.socialimageid&&(h=(0,d.jsx)("link",{rel:"image_src",href:t.socialimageid}),o.push((0,d.jsx)("meta",{property:"og:image",content:t.socialimageid},"og-img"),(0,d.jsx)("meta",{property:"og:image:secure_url",content:t.socialimageid},"og-imgsecureurl")),l.push((0,d.jsx)("meta",{property:"twitter:image",content:t.socialimageid},"tw-img"))),t.socialimageheight&&o.push((0,d.jsx)("meta",{property:"og:image:height",content:t.socialimageheight},"og-imgheight")),t.socialimagewidth&&o.push((0,d.jsx)("meta",{property:"og:image:width",content:t.socialimagewidth},"og-imgwidth"));let x="";if(t.stylevars)try{let e=iZ(JSON.parse(t.stylevars));x=`${e}`}catch(e){}o.push((0,d.jsx)("meta",{property:"og:type",content:"website"},"og-type")),l.push((0,d.jsx)("meta",{property:"twitter:card",content:"summary_large_image"},"tw-card")),o.push((0,d.jsx)("meta",{property:"og:url",content:a},"og-url")),l.push((0,d.jsx)("meta",{property:"twitter:url",content:a},"tw-url"));let T=[];return x.length&&T.push(`:root {
	${x}
}`),u.length&&T.push(`#ipc-wrap-background-id {
	${u.join("\n	")}
}`),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(iQ(),{children:[g,(0,d.jsx)(d.Fragment,{children:m}),(0,d.jsx)(d.Fragment,{children:p}),(0,d.jsx)(d.Fragment,{children:h}),(0,d.jsx)("link",{rel:"canonical",href:a}),(0,iB.W)(r),(0,d.jsx)(d.Fragment,{children:iG(i)}),o,l]}),(0,d.jsx)("style",{id:"symphony-custom-stylings",dangerouslySetInnerHTML:{__html:`${T.join("\n")}`}})]})},popular_shoveler:e=>{let{placementArgs:{heading:t,subheading:i,urlLabel:n,targetURL:a,titleCards:r=[],generatedPrefix:s}}=e;return r.length?(0,d.jsx)(iP,{"data-testid":"symphony-IMDbIndiaShoveler",children:(0,d.jsxs)(f.xm,{value:(0,f.Qk)({refStr:s??"",explanation:`
                    We will continue to support ref strings provided
                    by the editorial team as well as the generated ref
                    prefix that includes the slot name.`}),children:[!!t&&(0,d.jsx)(w.SubSectionTitle,{description:i,children:t}),(0,d.jsx)(w.Shoveler,{wraps:!1,children:(0,d.jsx)(d.Fragment,{children:r.map((e,t)=>(0,d.jsx)(ij.c,{data:e,index:t+1},e.id))})}),!!n&&!!a&&(0,d.jsx)(iM,{text:n,href:(0,ea.Lr)(a,(0,eK.z)("cta",{prefix:s}))})]})}):null},VideoPlaylistWidget:e=>{let{placementArgs:{lsconst:t,heading:i,subheading:n,videos:a,generatedPrefix:r}}=e;return(0,d.jsx)(i6.Z,{videoSectionTitle:i,videoSectionSubTitle:n,videos:a,refTagPrefixOverride:r,listId:t,videoSectionTitleLinkType:i7.o.PLAYLIST})}},nt=e=>{let{slotName:t}=e,i=(0,p.wL)("component_Slot"),[n]=(0,x.i)();try{let a=(0,y.kp)(),r=a.transformedPlacements[t],s=a.isDebug;if(!r){if(Object.keys(a?.transformedPlacements).length>0&&s&&i.debug({context:t,code:T.SM.SLOT_NAME_UNAVAILABLE,message:`${t} is not on CMS Context`}),s)return(0,d.jsx)(L,{slotName:t});return null}if(!(r.componentName in ne))return s&&r.componentName!==T.h4&&i.error({context:r.componentName,code:T.SM.UNREGISTERED_COMPONENT_NAME,message:`${r.componentName} is not a registered component`}),null;let o=r.transformedArguments?.errors;if(o&&o.length>0){if(n(i,g.NextMetrics.EDITORIAL_ERROR,1),o.map(e=>{((0,b.X)(e)||s)&&i.error({code:e.code,creativeId:r.symphonyMetadata?.creativeId,placementId:r.symphonyMetadata?.placementId,componentName:r.componentName,context:e.context})}),(0,b.J)(o))return null}else n(i,g.NextMetrics.EDITORIAL_ERROR,0);let l=`${u.NG.ContentSymphony}_${e.slotName}`;return(0,d.jsx)(h.wW,{componentId:l,children:(0,d.jsx)(ni,{...e,slotData:r,isDebug:!!s})})}catch(e){return i.error(`Exception rendering Symphony slot with name ${t}`,{message:e.message,stack:e.stack}),null}},ni=e=>{let{slotData:t,slotName:i,isDebug:n,refMarker:a,displayType:r}=e,{value:s}=(0,f.Lz)(),o=ne[t.componentName];return(0,d.jsxs)(d.Fragment,{children:[!!n&&(0,d.jsx)(L,{slotName:i,slotData:t}),(0,d.jsx)(o,{placementArgs:t.transformedArguments||t.arguments,refMarker:a??{prefix:s},displayType:r})]})};var nn=e=>(0,d.jsx)(m.Z,{name:e.slotName,parent:"Slot",children:(0,d.jsx)(nt,{...e})})},88959:function(e,t,i){"use strict";var n,a,r,s,o,l,d,c;i.d(t,{Et:function(){return n},FO:function(){return r},LQ:function(){return s},SM:function(){return a},h4:function(){return p},zc:function(){return m}}),(o=n||(n={})).TITLE="title",o.NAME="name",o.VIDEO="video",o.IMAGE="image",o.LIST="list",o.GALLERY="gallery",(l=a||(a={})).SLOT_NAME_UNAVAILABLE="SlotNameUnavailable",l.UNREGISTERED_COMPONENT_NAME="UnregisteredComponentName",l.CONST_TYPE_UNAVAILABLE="ConstTypeUnavailable",l.IMAGE_UNAVAILABLE="ImageUnavailable",l.CAPTION_UNAVAILABLE="CaptionUnavailable",l.LINK_UNAVAILABLE="LinkUnavailable",l.NO_DESCRIPTION="NoDescription",l.NO_TITLE="NoTitle",l.INVALID_IMAGE_SIZE="InvalidImageSize",l.VIDEO_NOT_FOUND="VideoIdNotFound",l.UNEXPECTED_ERROR="UnexpectedError",l.GRAPHQL_ERROR="GraphQLError",l.MISSING_REQUIRED_FIELDS="MissingRequiredFields",l.INVALID_JSON="InvalidJson",l.TITLE_NOT_FOUND="TitleIdNotFound",l.NAME_NOT_FOUND="NameIdNotFound",(d=r||(r={})).MAIN="main",d.SIDE="side",d.FULL="full";let g={tt:"title",rm:"image",nm:"name",vi:"video",rg:"gallery",ls:"list"};function m(e){return g[e.substring(0,2)]}(c=s||(s={})).PLAY_CIRCLE_OUTLINE="play-circle-outline",c.DASHBOARD="dashboard",c.LIST="list",c.COLLECTIONS="collections";let p="ZergnetWidget"},95746:function(e,t,i){"use strict";i.d(t,{J:function(){return s},X:function(){return r}});var n=i(88959);let a=[n.SM.NO_TITLE,n.SM.VIDEO_NOT_FOUND,n.SM.UNEXPECTED_ERROR,n.SM.MISSING_REQUIRED_FIELDS],r=e=>!!a.includes(e.code),s=e=>!!e&&0!==e.length&&!!e.find(r)},14481:function(e,t,i){"use strict";i.d(t,{E5:function(){return y},HL:function(){return f},Kz:function(){return T},PY:function(){return I},Q0:function(){return d},ax:function(){return u},hc:function(){return s},iZ:function(){return m},p$:function(){return c},pU:function(){return v},qM:function(){return w},v_:function(){return b},zF:function(){return x}});let n="[0-9]{7,19}",a=`[a-z]{2}${n}`,r=`ch${n}`,s=`co${n}`,o=`in${n}`,l=`li${n}`,d=`ls${n}`,c=`nm${n}`,g=`rg${n}`,m=`rm${n}`,p=`rw${n}`,u=`tt${n}`,h=`ev${n}`,f="ur[0-9]{7,}",x=`vi${n}`;new RegExp(n);let T=new RegExp(a);new RegExp(r),new RegExp(s),new RegExp(o),new RegExp(l);let b=new RegExp(d);new RegExp(c),RegExp("[\\w-]{11,22}");let y=new RegExp(g),I=new RegExp(m);new RegExp(p);let v=new RegExp(u);new RegExp(h),new RegExp(f);let w=new RegExp(x);RegExp(`.*/title/${u}/`)},17708:function(e,t,i){"use strict";i.d(t,{Z:function(){return d}});var n=i(53665),a=i(25436),r=i(5651),s=i(82338),o=i(63370),l=i(49996);let d=e=>{let{videoName:t,contentTypeId:i,originalTitleText:d,titleText:c,releaseYear:g,canHaveEpisodes:m,shouldRemoveTrailerTitleForTitlePages:p=!0}=e,u=(0,n.Z)(),{pageType:h}=(0,l.y)(),f=i===r.sd.Trailer,x=(0,o.K)({originalTitleText:d,titleText:c}),T=t,b=h===a.PageType.NAME,y=h===a.PageType.TITLE;if(b&&f||f&&y&&!p){let e=(0,s.y)(g,m);T=`${x} (${e})`}else h===a.PageType.TITLE&&(T=f?"":u.formatMessage({id:"common_video_watch_text",defaultMessage:"Watch {videoTitle}"},{videoTitle:t}));return T}},89105:function(e,t,i){"use strict";i.d(t,{OV:function(){return g}});var n,a,r=i(66898),s=i(14865),o=i(2784),l=i(56044),d=i(8531),c=i(58306);(n=a||(a={})).NotDelayed="NOT_DELAYED",n.DelayCompleted="DELAYED",n.Fallback="DELAYED_FALLBACK";let g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"UNDECLARED_DELAYED_FEATURE",t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],[i,n]=(0,o.useState)(!0),a=(0,o.useRef)([]),g=(0,o.useCallback)(i=>{t&&((0,d.XK)(`${e}_${i}`),(0,r.insertCSAWidgetLoad)(`${e}_${i}`,Date.now())),a.current.forEach(e=>e()),n(!1)},[e]);return(0,o.useEffect)(()=>{if((0,s.getIsBrowser)()){let e=(0,c.Y)(l.x.PRIMARY_ADS_LOADED_EVENT_NAME,()=>g("DELAYED"));e&&a.current.push(e);let t=(0,c.Y)(l.x.NO_PRIMARY_ADS_TO_LOAD_EVENT_NAME,()=>g("NOT_DELAYED"));t&&a.current.push(t)}},[g]),(0,o.useEffect)(()=>{let e=setTimeout(()=>g("DELAYED_FALLBACK"),9e3);return()=>clearTimeout(e)},[g]),i}},58306:function(e,t,i){"use strict";i.d(t,{Y:function(){return n}}),i(2784),i(56044),i(64461),i(37706);let n=(e,t)=>window.mediaOrchestrator?.subscribe(e,t).remove},47774:function(e,t,i){"use strict";function n(e,t){let i=e.split(" ");return i.length<t?e:`${i.slice(0,t).join(" ")}...`}function a(e){if(e)return isNaN(Number(e))?void 0:Number(e)}function r(e){return e.charAt(0).toUpperCase()+e.slice(1)}i.d(t,{Cc:function(){return s},fm:function(){return r},mc:function(){return a},z$:function(){return n}});let s=e=>e.replace(/\s+/g,"-").toLowerCase()},55220:function(e,t,i){"use strict";i.d(t,{Z:function(){return f}});var n=i(52322),a=i(88169),r=i(72779),s=i.n(r);i(2784);var o=i(19596),l=i(69380),d=i(22073),c=i(17708),g=i(66724),m=i(11438);let p=e=>`videos-slate-card-title-${e+1}`,u=e=>`videos-slate-overlay-${e+1}`,h=e=>{let{video:t,index:i,onClick:a,description:r,className:o,listId:h,onFocus:f,reactionData:T,shouldRemoveTrailerTitleForTitlePages:b=!0,videoTitle:y,videoSubtitle:I,...v}=e,{videoSingleLinkBuilder:w}=(0,g.WOb)(),E={url:t.thumbnail.url,maxHeight:t.thumbnail.height,maxWidth:t.thumbnail.width,caption:t.name.value},C=(0,c.Z)({videoName:t.name.value,contentTypeId:t.contentType?.id,originalTitleText:t.primaryTitle?.originalTitleText?.text,titleText:t.primaryTitle?.titleText?.text,releaseYear:t.primaryTitle?.releaseYear,canHaveEpisodes:t.primaryTitle?.titleType?.canHaveEpisodes,shouldRemoveTrailerTitleForTitlePages:b}),_=t.contentType?.displayName?.value,S=[_,t.runtime?.value?(0,d.L)(t.runtime?.value):""].filter(e=>!!e).join(" "),k=`${_?`${_}`:""}${t.name.value}`,L=h?{listId:h}:void 0,j=w({viconst:t.id,refSuffix:{t:m.Cd.EMPTY,n:i+1},query:L}),P=w({viconst:t.id,refSuffix:{t:m.Cd.TEXT,n:i+1},query:L}),M={"data-testid":u(i),iconName:"play-circle-outline",text:S,gradientType:"linear",...v.slateProps?.overlayProps},N={ariaLabel:k,"data-testid":p(i),href:P,onClick:a,title:y||C,subtitle2:I||r,lineClamp:2,className:"VideoSlate__title",...v.titleProps},R=(0,n.jsx)(l.Q,{associatedConstId:t.id,initialAggregateData:T?.aggregate,initialUserData:T?.user,entityType:"video"}),A={...v,className:s()("videos-slate-card",o),dynamicWidth:!0,slateProps:{ariaLabel:k,href:j,onClick:a,imageProps:{imageModel:E},overlayProps:M},titleProps:N,children:R};return(0,n.jsx)(x,{...A,onFocus:f})};var f=e=>(0,n.jsx)(m.xm,{value:m.Cd.VIDEO,children:(0,n.jsx)(h,{...e})});let x=(0,o.default)(a.SlateCard).withConfig({componentId:"sc-73491412-0"})([".VideoSlate__title div:first-of-type{height:unset;}"])},5651:function(e,t,i){"use strict";var n,a,r,s;i.d(t,{Je:function(){return l},LU:function(){return d},XW:function(){return o},mB:function(){return n},sd:function(){return a}});let o="W7zSm81+mmIsg7F+fyHRKhF3ggLkTqtGMhvI92kbqf/ysE99",l="imdbnext-vp-jw-",d="imdbnext-vp-container";(r=n||(n={})).playerReadyMessage="VIDEO_PLAYER--READY",r.playerPlaybackStartedMessage="VIDEO_PLAYER--PLAYBACK_STARTED",r.playerPlaybackStoppedMessage="VIDEO_PLAYER--PLAYBACK_STOPPED",r.playerPlaybackCompletedMessage="VIDEO_PLAYER--PLAYBACK_COMPLETED",r.signalPlayMessage="VIDEO_PLAYER--PLAY",r.signalPauseMessage="VIDEO_PLAYER--PAUSE",r.signalStopMessage="VIDEO_PLAYER--STOP",(s=a||(a={})).Trailer="amzn1.imdb.video.contenttype.trailer",s.Clip="amzn1.imdb.video.contenttype.clip"},37706:function(e,t,i){"use strict";i(14865),i(22431),i(64461),i(56044)},35061:function(e,t){"use strict";t.Z=e=>({id:e.id,name:{value:e.name.value},thumbnail:{url:e.thumbnail.url,height:e.thumbnail.height,width:e.thumbnail.width},primaryTitle:{titleText:{text:e.primaryTitle?.titleText?.text},originalTitleText:{text:e.primaryTitle?.originalTitleText?.text},titleType:{canHaveEpisodes:e.primaryTitle?.titleType?.canHaveEpisodes},releaseYear:{endYear:e.primaryTitle?.releaseYear?.endYear||void 0,year:e.primaryTitle?.releaseYear?.year||void 0}},contentType:{id:e.contentType?.id,displayName:{value:e.contentType?.displayName.value}},runtime:{value:e.runtime?.value||void 0}})},46107:function(e){e.exports={hide:"IMDbBannerImage_hide__zrGMm","hide-at-s":"IMDbBannerImage_hide-at-s__1w8DT","show-at-s":"IMDbBannerImage_show-at-s__2YIUT","hide-at-md":"IMDbBannerImage_hide-at-md__O4JNI","show-at-md":"IMDbBannerImage_show-at-md__hlSKq","hide-at-l":"IMDbBannerImage_hide-at-l__JUoOf","show-at-l":"IMDbBannerImage_show-at-l__ibYsy","hide-at-xl":"IMDbBannerImage_hide-at-xl__Lt_az","show-at-xl":"IMDbBannerImage_show-at-xl__s1bg4"}}}]);