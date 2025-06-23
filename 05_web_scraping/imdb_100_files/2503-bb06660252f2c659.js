"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2503],{35223:function(e,t,r){r.d(t,{TY:function(){return a},gA:function(){return n},z7:function(){return i}});let i={ADD_TO_LIST:"btp_atl",TRAILER:"btp_trlr",RETRY:"btp_ta",RATING_ROW:"btp_rt",RATING_DISPLAY:"btp_rt_ds",RATE_TRIGGER:"btp_rt_tg",METADATA_LIST:"btp_ml",GENRE_LIST:"btp_gl",PRODUCTION_STATUS:"btp_ps",SET_PREFERRED_SERVICES:"btp_sps"},a={ratingButtonRatedAriaLabel:{id:"common_ariaLabels_ratingButtonRated",defaultMessage:"Your rating: {rating}"},ratingButtonUnratedAriaLabel:{id:"common_ariaLabels_ratingButtonUnrated",defaultMessage:"Rate {titleName}"},ratingPromptRateLabel:{id:"common_ratingPrompt_rate",defaultMessage:"Rate"},closePrompt:{id:"common_ariaLabel_closePrompt",defaultMessage:"Close Prompt"},addToList:{id:"common_add_to_list_buttonText",defaultMessage:"Add to list"},trailer:{id:"common_buttons_trailer",defaultMessage:"Trailer"}},n="released"},12503:function(e,t,r){r.d(t,{Pz:function(){return ek},qo:function(){return eE},tN:function(){return eO}});var i=r(52322),a=r(30382),n=r.n(a),o=r(2784),s=r(53665),d=r(19596),l=r(45103),c=r(91842),p=r(45274),u=r(42712),g=r(41174),f=r(49666),m=r(25436),h=r(86958);let b=()=>{let{context:e}=(0,h.B)();return x(e)},x=e=>{let{pageType:t}=e;return t===m.PageType.TITLE};var T=r(4363),y=r(85846),v=r(95441),_=r(83163),I=r(48687),w=r(94475),C=r(10105),P=r(35223),S=r(4649),R=r(94471),E=r(75824),j=r(22073),O=r(82338),k=r(66724),A=r(11438),M=r(63370),L=r(6935),B=r(92847);let N=e=>{let{originalTitleText:t,titleText:r,id:a,primaryImage:n,titleType:s,titleGenres:d,ratingsSummary:p,canRate:u}=e.titleData,{palette:{baseColor:g}}=(0,o.useContext)(l.ThemeContext),m=(0,f.ik)(),{titleMainLinkBuilder:h}=(0,k.WO)(),{rating:b}=(0,l.useRatingsContext)(a),x=(0,R.P)(b,"user"),T=(0,R.P)(p?.aggregateRating,"imdb"),y=(0,M.K)({originalTitleText:t,titleText:r}),v=(0,E.N)(P.TY.ratingButtonRatedAriaLabel,{rating:x||""}),_=(0,E.N)(P.TY.ratingButtonUnratedAriaLabel,{titleName:y}),I=(0,E.N)(P.TY.ratingPromptRateLabel),w=h({tconst:a,refSuffix:A.Cd.TEXT}),C=h({tconst:a,refSuffix:A.Cd.POSTER}),S=function(e){let t=[],{releaseYear:r,runtime:i,certificate:a}=e,n=(0,O.y)(r,e.titleType?.canHaveEpisodes);return n&&t.push(n),i?.seconds&&t.push((0,j.L)(i.seconds,j.A.HOURS_MINUTES_EXPLICIT)),a?.rating&&t.push(a.rating),t}(e.titleData);return(0,i.jsxs)($,{className:g,children:[(0,i.jsx)(D,{children:(0,i.jsx)(l.Poster,{imageProps:{imageModel:(0,L.Gs)(n,y),imageType:s?.id,size:"xs"},dynamicWidth:!0,ariaLabel:y,href:C})}),(0,i.jsxs)(W,{children:[(0,i.jsx)(G,{href:w,titleTextClass:"prompt-title-text",typographyType:(y?.length??0)>65?`${(0,c.setTypographyType)("subtitle")}`:"",children:y}),S.length>0&&(0,i.jsx)(l.InlineList,{showDividers:!0,inline:!0,noWrap:!0,"data-testid":P.z7.METADATA_LIST,children:S.map(e=>(0,i.jsx)(l.InlineListItem,{children:e},e))}),!!d&&d.genres.length>0&&(0,i.jsx)(l.InlineList,{showDividers:!0,inline:!0,noWrap:!0,"data-testid":P.z7.GENRE_LIST,children:d.genres.map(e=>(0,i.jsx)(l.InlineListItem,{children:e.genre.text},`${e.genre.text}`))}),!!(T||u?.isRatable)&&(0,i.jsxs)(U,{"data-testid":P.z7.RATING_ROW,children:[!!T&&(0,i.jsx)(l.RatingStar,{className:P.z7.RATING_DISPLAY,formattedRating:T,maxRating:10}),!!u?.isRatable&&!!y&&!m&&(0,i.jsx)(B.T,{title:{id:a,titleText:y,canRate:u.isRatable},ratingTriggerComponent:e=>{let{onUserRatingClick:t}=e;return(0,i.jsx)(z,{ariaLabelRated:v,ariaLabelUnrated:_,formattedRating:x,className:T?void 0:"standalone-star",onClick:t,rateLabel:I})}})]})]})]})},D=d.default.div.withConfig({componentId:"sc-1951fb9e-0"})(["width:4.5rem;"]),$=d.default.div.withConfig({componentId:"sc-1951fb9e-1"})(["display:flex;"," margin-bottom:",";margin-top:",";max-width:100%;padding-left:",";padding-right:",";","{padding-left:0;padding-right:0;margin-top:0;}&.base{","}&.baseAlt{","}"],(0,c.setTypographyType)("bodySmall"),c.spacing.s,c.spacing.xxs,c.spacing.s,c.spacing.s,c.mediaQueries.breakpoints.above.m,(0,c.setPropertyToColorVar)("color","ipt-on-base-textSecondary-color"),(0,c.setPropertyToColorVar)("color","ipt-on-baseAlt-textSecondary-color")),W=d.default.div.withConfig({componentId:"sc-1951fb9e-2"})(["display:flex;flex-direction:column;padding-left:",";overflow:hidden;"],c.spacing.s),G=(0,d.default)(l.Title).withConfig({componentId:"sc-1951fb9e-3"})(["margin-bottom:",";padding:0;"," .prompt-title-text{max-height:7.4rem;}"],c.spacing.xxs,e=>(0,d.css)(["",""],e.typographyType)),U=d.default.div.withConfig({componentId:"sc-1951fb9e-4"})([""," .standalone-star{padding:0;min-width:0;}"],(0,c.setTypographyType)("body")),z=(0,d.default)(l.RateButton).withConfig({componentId:"sc-1951fb9e-5"})(["height:fit-content;"]);var F=r(15323);let Z=e=>{let{labelTitle:t,listContent:r,"data-testid":a}=e;return(0,i.jsxs)(H,{"data-testid":a,children:[(0,i.jsx)(K,{children:t}),(0,i.jsx)(X,{children:r?.filter(e=>"object"==typeof e&&null!==e&&"text"in e).map((e,t)=>{let r=e.text,a=t>0?` • ${r}`:r;return i.jsx(o.Fragment,{children:a},r)})})]})},Y=e=>{let{data:t}=e,r=(0,s.Z)(),a=t?.productionBudget?.budget.amount,n=t?.lifetimeGross?.total.amount,o=t?.openingWeekendGross?.gross.total.amount,d=t?.worldwideGross?.total.amount,l=(0,F.AO)(t?.productionBudget),c=(0,F.yK)(t?.lifetimeGross),p=(0,F.UJ)(t?.openingWeekendGross),u=(0,F.pM)(t?.worldwideGross);return a||n||o||d?(0,i.jsx)(V,{"data-testid":"title-boxoffice-section",children:(0,i.jsxs)(Q,{children:[!!a&&!!l&&(0,i.jsx)(Z,{labelTitle:r.formatMessage(l.label),listContent:l.props.listContent,"data-testid":l.props["data-testid"]}),!!n&&!!c&&(0,i.jsx)(Z,{labelTitle:r.formatMessage(c.label),listContent:c.props.listContent,"data-testid":c.props["data-testid"]}),!!o&&!!p&&(0,i.jsx)(Z,{labelTitle:r.formatMessage(p.label),listContent:p.props.listContent,"data-testid":p.props["data-testid"]}),!!d&&!!u&&(0,i.jsx)(Z,{labelTitle:r.formatMessage(u.label),listContent:u.props.listContent,"data-testid":u.props["data-testid"]})]})}):null},V=d.default.div.withConfig({componentId:"sc-4204a581-0"})(["margin:0 "," "," ",";","{margin:0 0 "," 0;}"],c.spacing.s,c.spacing.m,c.spacing.s,c.mediaQueries.breakpoints.above.m,c.spacing.m),Q=d.default.div.withConfig({componentId:"sc-4204a581-1"})(["display:flex;flex-direction:column;","{flex-flow:row wrap;}"],c.mediaQueries.breakpoints.above.m),H=d.default.div.withConfig({componentId:"sc-4204a581-2"})(["display:grid;margin-bottom:",";","{width:50%;}"],c.spacing.s,c.mediaQueries.breakpoints.above.m),K=d.default.div.withConfig({componentId:"sc-4204a581-3"})([""," font-weight:bold;"],(0,l.setTypographyType)("bodySmall")),X=d.default.div.withConfig({componentId:"sc-4204a581-4"})(["",""],(0,l.setTypographyType)("bodySmall"));var q=r(95248),J=r(11602);let ee=n()`
    fragment BaseTitlePrompt__Track on Title {
        id
        trackNotificationPreferences @include(if: $isProPage) {
            ...TrackPreferences
        }
    }
    ${J.vW}
`,et=e=>{let{data:t}=e;return t?(0,i.jsx)(er,{id:t.id,data:t.trackNotificationPreferences,displayTrackOptionsMenu:!1,buttonProps:{width:"full-width"},buttonType:"secondaryButton"}):null},er=(0,d.default)(q.ZP).withConfig({componentId:"sc-e967ba0e-0"})(["width:100%;"]),ei=n()`
    fragment BaseTitlePrompt__Trailer on Title {
        id
        latestTrailer @skip(if: $isProPage) {
            id
        }
    }
`,ea=e=>{let{data:t}=e,r=(0,s.Z)(),{videoSingleLinkBuilder:a}=(0,k.WO)(),n=t?.latestTrailer?.id,o=n?a({viconst:n,refSuffix:A.Cd.TRAILER}):void 0;return o?(0,i.jsx)(l.SecondaryButton,{width:"full-width",preIcon:"play-arrow",href:o,"data-testid":P.z7.TRAILER,children:r.formatMessage(P.TY.trailer)}):null};var en=r(2870);let eo=e=>{let{titleId:t}=e;return t?(0,i.jsx)(en.f,{titleId:t}):null};var es=r(73078),ed=r(28160),el=r(85591),ec=r(82453),ep=r(14911),eu=r(4958);let eg=e=>{let{titleId:t,category:r,watchOptions:a,refMarker:n}=e,o=r.toUpperCase().replace("IMDB","IMDb"),s=(0,ec.Ok)().adSlotsInfo,d=(0,ep.Z)();return(0,i.jsxs)(eb,{children:[(0,i.jsx)(ex,{children:o}),(0,i.jsx)(l.List,{children:!!t&&a.map(e=>{let a=d({titleId:t,watchOption:e,refMarker:n,adSlotsInfo:s}),o="shw"===e.provider.refTagFragment?e.title.value:e.provider.name.value,l=e.provider?.logos?.icon;return(0,i.jsx)(eT,{...a,children:(0,i.jsxs)(ey,{children:[!!l?.url&&!!l?.width&&!!l?.height&&(0,i.jsx)(ev,{imageModel:{caption:o,url:l.url,maxWidth:l.width,maxHeight:l.height},size:50}),(0,i.jsxs)(e_,{children:[(0,i.jsx)(eI,{children:o}),(0,i.jsx)(ew,{children:e.description?.value})]})]})},`${r}-${e.link}`)})})]})},ef=e=>{let{titleId:t,watchOptionsCategories:r,isLoading:a,refMarker:n,preferredProviderIds:o=[]}=e,d=(0,s.Z)(),{organizedWatchOptions:c}=(0,eu.y)({watchOptionsCategories:r||[],preferredProviderIds:o});return a?(0,i.jsx)(eh,{"data-testid":"loader-container",children:(0,i.jsx)(l.Loader,{})}):r&&0!==r.length?(0,i.jsx)(i.Fragment,{children:c.map(e=>(0,i.jsx)(eg,{titleId:t,category:e.categoryName.value,watchOptions:e.watchOptions,refMarker:n},e.categoryName.value))}):(0,i.jsx)(eC,{title:d.formatMessage({id:"error_emptyStates_watchOptions_title",defaultMessage:"Watch Options are currently unavailable"}),message:d.formatMessage({id:"error_common_refreshOrTryAgain",defaultMessage:"Please refresh the page or try again later."})})},em=n()`
    fragment WatchOptionCategories on CategorizedWatchOptions {
        categoryName {
            value
            language
        }
        watchOptions {
            title {
                value
                language
            }
            link(platform: WEB)
            shortTitle {
                value
                language
            }
            description {
                value
                language
            }
            provider {
                id
                name {
                    value
                    language
                }
                logos {
                    icon {
                        url
                        height
                        width
                    }
                }
                refTagFragment
            }
        }
    }
`;ef.fragments={watchOptionsCategories:em};let eh=d.default.div.withConfig({componentId:"sc-bb2338a7-0"})(["align-items:flex-start;display:flex;height:100%;margin:3rem 0;justify-content:center;"]),eb=d.default.div.withConfig({componentId:"sc-bb2338a7-1"})(["",""],(0,c.setTypographyType)("body")),ex=d.default.div.withConfig({componentId:"sc-bb2338a7-2"})([""," "," text-transform:none;font-size:13px;margin:0;padding:13px 0 7px 15px;","{padding:13px 0 7px;}"],(0,c.setTypographyType)("overline"),(0,c.setPropertyToColorVar)("color","ipt-on-baseAlt-accent1-color"),c.mediaQueries.breakpoints.above.m),eT=(0,d.default)(l.ListItem).withConfig({componentId:"sc-bb2338a7-3"})(["&:first-of-type{border-top:1px solid rgba(",",0.1);}border-bottom:1px solid rgba(",",0.1);height:4rem;","{padding:0;}"],(0,c.getColorVarValue)("ipt-base-rgb"),(0,c.getColorVarValue)("ipt-base-rgb"),c.mediaQueries.breakpoints.above.m),ey=d.default.div.withConfig({componentId:"sc-bb2338a7-4"})(["display:flex;"]),ev=(0,d.default)(l.PhotoImage).withConfig({componentId:"sc-bb2338a7-5"})(["min-width:","px;margin-top:auto;margin-bottom:auto;margin-right:0.5rem;border-radius:0.25rem;"],50),e_=d.default.div.withConfig({componentId:"sc-bb2338a7-6"})(["margin-top:auto;margin-bottom:auto;"]),eI=d.default.div.withConfig({componentId:"sc-bb2338a7-7"})(["",""],(0,c.setTypographyType)("subtitle")),ew=d.default.div.withConfig({componentId:"sc-bb2338a7-8"})([""," "," ","{max-width:260px;}"],(0,c.setPropertyToColorVar)("color","ipt-on-baseAlt-textHint-color"),(0,c.setTypographyType)("bodySmall"),c.mediaQueries.breakpoints.above.m),eC=(0,d.default)(w.G).withConfig({componentId:"sc-bb2338a7-9"})([""," background:initial;"],(0,c.setTypographyType)("body")),eP=n()`
    fragment BaseTitlePrompt__WatchOptions on Title {
        id
        watchOptionsByCategory(location: $location) @skip(if: $isProPage) {
            categorizedWatchOptionsList {
                ...WatchOptionCategories
            }
        }
    }
    ${em}
`,eS=e=>{let{data:t}=e,{value:r}=(0,A.Lz)(),a=t?.user?.preferredStreamingProviders?(0,el.H)({preferredStreamingProviders:t.user.preferredStreamingProviders}):[],n=(0,ed.L)({preferredServiceIds:a});if(!t)return null;let o=t.watchOptionsByCategory?.categorizedWatchOptionsList,s=o&&o.length>0;return(0,i.jsxs)(i.Fragment,{children:[!!n&&(0,i.jsx)(eR,{refSuffix:[A.Cd.BUTTON],"data-testid":P.z7.SET_PREFERRED_SERVICES,preferredServicesIds:a}),!!s&&(0,i.jsx)(ef,{titleId:t.id,watchOptionsCategories:o,preferredProviderIds:a,refMarker:{prefix:r}})]})},eR=(0,d.default)(es.Z).withConfig({componentId:"sc-c420ba0c-0"})(["margin:"," 0;"],c.spacing.xxs),eE=n()`
    fragment BaseTitlePromptShared on Title {
        id
        plot {
            plotText {
                plainText
            }
        }
        productionStatus {
            currentProductionStage {
                id
                text
            }
        }
        ...BaseTitlePrompt__Track
        ...BaseTitlePrompt__Trailer
        ...BaseTitlePrompt__WatchOptions
    }
    ${ei}
    ${eP}
    ${ee}
`,ej=n()`
    query Base_Title_Prompt(
        $id: ID!
        $location: WatchOptionsLocation
        $isProPage: Boolean!
        $includeUserPreferredServices: Boolean!
        $includeBoxOfficeData: Boolean!
    ) {
        title(id: $id) {
            ...BaseTitlePromptShared
        }
        boxOffice: title(id: $id) @include(if: $includeBoxOfficeData) {
            ...Title_BoxOffice
        }
        user @include(if: $includeUserPreferredServices) {
            ...UserPreferredServices
        }
    }
    ${eE}
    ${u.R}
    ${p.j}
`,eO=e=>{let{titleId:t,pause:r=!1,queryOverride:i}=e,a=(0,y.ic)(),n=(0,f.ik)(),o=b(),s=(0,g.nu)(),d=(0,I.hg)({weblabID:_.lh.IMDB_NEXT_USER_PREFERRED_SERVICES_INITIAL_1245110,treatments:{T1:!0}})&&o&&!n&&s,l=n&&s,[c,p]=(0,T.E)({query:ej,variables:{id:t,location:a,isProPage:n,includeUserPreferredServices:d,includeBoxOfficeData:l},context:{serverSideCacheable:!1,personalized:n||d},pause:r,...i});return[c,p]},ek=e=>{let{title:t,baseTitlePromptData:r,onClose:a,isOpen:n,queryOverride:o,contentOverride:d,actionOverride:c}=e,p=(0,s.Z)(),u=(0,f.ik)(),[g,m]=eO({titleId:t?.id||"",pause:!!r||!t||!n,queryOverride:o});if(!t||!t.titleText?.text)return null;let h=r?.title??g.data?.title,b=r?.user??g.data?.user,x=g.data?.boxOffice,T=g.fetching,y=g.error,v=h?.productionStatus?.currentProductionStage.id,_=h?.productionStatus?.currentProductionStage.text,I=v&&_&&v!==P.gA;return(0,i.jsx)(eB,{onCloseClicked:a,baseColor:u?"base":"baseAlt",isOpen:n,closePromptLabel:p.formatMessage(P.TY.closePrompt),children:(0,i.jsxs)(eA,{children:[(0,i.jsx)(N,{titleData:t}),!!T&&(0,i.jsx)(C.lI,{height:"feature"}),!T&&(0,i.jsxs)(i.Fragment,{children:[!!h?.plot?.plotText?.plainText&&(0,i.jsx)(eL,{children:h.plot.plotText.plainText}),!!I&&(0,i.jsx)(eN,{"data-testid":P.z7.PRODUCTION_STATUS,children:_}),!!d&&d(g?.data||{}),!!u&&!!x&&(0,i.jsx)(Y,{data:x}),(0,i.jsxs)(eM,{children:[!c&&!u&&!!h&&(0,i.jsx)(ea,{data:h}),!!u&&(0,i.jsx)(S.a,{title:t}),!u&&(0,i.jsx)(eo,{titleId:t.id}),!!u&&!!h&&(0,i.jsx)(et,{data:h}),!!c&&c(g?.data||{})]}),!u&&!!h&&(0,i.jsx)(eS,{data:{...h,user:b}})]}),!T&&!!y&&(0,i.jsx)(w.G,{title:p.formatMessage({id:"error_common_sorryTryAgain",defaultMessage:"Sorry, there was an error. Please try again."}),displayType:"compact",action:(0,i.jsx)(l.TextLink,{onClick:()=>m(),text:p.formatMessage({id:"common_buttons_retry",defaultMessage:"Try again"}),"data-testid":P.z7.RETRY})})]})})},eA=d.default.div.withConfig({componentId:"sc-97f4d1b0-0"})(["padding-bottom:",";"],c.spacing.l),eM=d.default.div.withConfig({componentId:"sc-97f4d1b0-1"})(["display:flex;margin-bottom:",";padding-left:",";padding-right:",";","{padding-left:0;padding-right:0;}& > :nth-child(1):not(:last-child){margin-right:",";}"],c.spacing.xs,c.spacing.s,c.spacing.s,c.mediaQueries.breakpoints.above.m,c.spacing.xs),eL=d.default.div.withConfig({componentId:"sc-97f4d1b0-2"})([""," margin-bottom:",";padding-left:",";padding-right:",";","{padding-left:0;padding-right:0;}"],(0,v.S)(4),c.spacing.s,c.spacing.s,c.spacing.s,c.mediaQueries.breakpoints.above.m),eB=(0,d.default)(l.Prompt).withConfig({componentId:"sc-97f4d1b0-3"})(["",""],(0,c.setTypographyType)("bodySmall")),eN=d.default.div.withConfig({componentId:"sc-97f4d1b0-4"})(["margin:",";","{margin-left:0;margin-right:0;}"],c.spacing.s,c.mediaQueries.breakpoints.above.m)},4649:function(e,t,r){r.d(t,{a:function(){return c}});var i=r(52322),a=r(2784),n=r(53665),o=r(45103),s=r(63370),d=r(96557),l=r(35223);let c=e=>{let{title:t}=e,r=(0,n.Z)(),c=(0,s.K)({originalTitleText:t?.originalTitleText,titleText:t?.titleText}),[p,u]=(0,a.useState)(!1);return t&&c?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.SecondaryButton,{width:"full-width",preIcon:"playlist-add-check","data-testid":l.z7.ADD_TO_LIST,onSelect:()=>u(!0),children:r.formatMessage(l.TY.addToList)}),(0,i.jsx)(d.Z,{constId:t.id,primaryImage:t.primaryImage,primaryText:c,imageType:"name",isOpen:p,onClose:()=>{u(!1)}})]}):null}},45274:function(e,t,r){r.d(t,{j:function(){return n}});var i=r(30382),a=r.n(i);let n=a()`
    fragment Title_BoxOffice on Title {
        id
        titleType {
            id
        }
        productionBudget {
            budget {
                amount
                currency
            }
        }
        lifetimeGross(boxOfficeArea: DOMESTIC) {
            total {
                amount
                currency
            }
        }
        openingWeekendGross(boxOfficeArea: DOMESTIC) {
            gross {
                total {
                    amount
                    currency
                }
            }
            weekendEndDate
        }
        worldwideGross: lifetimeGross(boxOfficeArea: WORLDWIDE) {
            total {
                amount
                currency
            }
        }
    }
`},15323:function(e,t,r){r.d(t,{AO:function(){return c},UJ:function(){return u},pM:function(){return g},yK:function(){return p}});var i=r(53665);let a={id:"title_main_boxoffice_estimated",defaultMessage:"{budget} (estimated)"},n={id:"title_main_boxoffice_budget",defaultMessage:"Budget"},o={id:"title_main_boxoffice_grossdomestic",defaultMessage:"Gross US & Canada"},s={id:"title_main_boxoffice_openingweekenddomestic",defaultMessage:"Opening weekend US & Canada"},d={id:"title_main_boxoffice_cumulativeworldwidegross",defaultMessage:"Gross worldwide"},l=(e,t)=>{let r=(0,i.Z)();if(e&&t)return r.formatNumber(e,{style:"currency",currency:t,minimumFractionDigits:0})},c=e=>{let t=(0,i.Z)(),r=l(e?.budget.amount,e?.budget.currency);if(r)return{label:n,props:{listContent:[{text:t.formatMessage(a,{budget:r})}],"data-testid":"title-boxoffice-budget"}}},p=e=>{let t=l(e?.total.amount,e?.total.currency)??"";if(e)return{label:o,props:{listContent:[{text:t}],"data-testid":"title-boxoffice-grossdomestic"}}},u=e=>{let t=(0,i.Z)(),r=l(e?.gross.total.amount,e?.gross.total.currency)??"";if(e)return{label:s,props:{listContent:[{text:r},{text:t.formatDate(e?.weekendEndDate,{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"})}],"data-testid":"title-boxoffice-openingweekenddomestic"}}},g=e=>{let t=l(e?.total.amount,e?.total.currency)??"";if(e)return{label:d,props:{listContent:[{text:t}],"data-testid":"title-boxoffice-cumulativeworldwidegross"}}}},73078:function(e,t,r){var i=r(52322);r(2784);var a=r(46163),n=r(91842),o=r(75824),s=r(41174),d=r(66724),l=r(31643);t.Z=e=>{let{refSuffix:t,"data-testid":r,preferredServicesIds:c,className:p}=e,u=(0,s.nu)(),{preferencesPreferredServicesLinkBuilder:g}=(0,d.WO)(),f=u&&(!c||c&&c.length>0),m=(0,o.N)(f?l.T.editPreferredServicesButtonText:l.T.setYourPreferredServicesButtonText);return(0,i.jsx)(a.TextButton,{href:g({refSuffix:t}),preIcon:f?n.ICONS.EDIT:n.ICONS.SETTINGS,"data-testid":r,ariaLabel:m,className:p,children:m})}},31643:function(e,t,r){r.d(t,{T:function(){return a},u:function(){return i}});let i="PREFERRED",a={editPreferredServicesButtonText:{id:"userPreferredServices_edit_preferred_services",defaultMessage:"Edit preferred services"},setYourPreferredServicesButtonText:{id:"userPreferredServices_set_your_preferred_services",defaultMessage:"Set your preferred services"}}},4958:function(e,t,r){r.d(t,{y:function(){return n}});var i=r(2784),a=r(31643);let n=e=>{let{watchOptionsCategories:t,preferredProviderIds:r}=e;return{organizedWatchOptions:(0,i.useMemo)(()=>{if(!t||0===t.length)return[];let e=Object.fromEntries(r.map((e,t)=>[e,t])),i=new Map;t.forEach(e=>{e.watchOptions.forEach(t=>{let n=r.includes(t.provider.id)?a.u:e.categoryName.value;i.has(n)||i.set(n,{categoryName:{value:n},watchOptions:[]}),i.get(n).watchOptions.push(t)})});let n=Array.from(i.values());return n.forEach(t=>{t.watchOptions.sort((t,r)=>(e[t.provider.id]??1/0)-(e[r.provider.id]??1/0))}),n.sort((e,t)=>e.categoryName.value===a.u?-1:t.categoryName.value===a.u?1:0)},[t,r])}}},28160:function(e,t,r){r.d(t,{L:function(){return o}});var i=r(41174),a=r(83163),n=r(48687);let o=e=>{let{preferredServiceIds:t}=e,r=(0,i.nu)();return(0,n.hg)({weblabID:a.lh.IMDB_NEXT_USER_PREFERRED_SERVICES_INITIAL_1245110,treatments:{T1:!0}})&&(!r||r&&0===t.length)}},42712:function(e,t,r){r.d(t,{R:function(){return n}});var i=r(30382),a=r.n(i);a()`
    fragment WatchProviders on WatchProviderConnection {
        pageInfo {
            hasNextPage
            endCursor
        }
        edges {
            node {
                id
                isPopular
                isSupported(platform: WEB)
                logos {
                    icon {
                        height
                        width
                        url
                    }
                }
                name {
                    value
                }
                description {
                    value
                }
            }
        }
    }
`;let n=a()`
    fragment UserPreferredServices on User {
        preferredStreamingProviders(first: 100) {
            streamingProviders {
                edges {
                    node {
                        id
                    }
                }
            }
        }
    }
`},85591:function(e,t,r){r.d(t,{H:function(){return i}});let i=e=>e?(e?.preferredStreamingProviders.streamingProviders.edges||[]).map(e=>e.node.id):[]},14911:function(e,t,r){r.d(t,{Z:function(){return h}});var i=r(14438),a=r(25291),n=r.n(a),o=r(22431),s=r(22873);let d=(e,t)=>{let r;if(!t||(window.ad_utils&&(r=window.ad_utils.responsiveAdAPI.getLastAdResponse()),null===r))return Promise.resolve();let i=l(e),a=l(r);if(!c(i,a))return Promise.resolve();let n=a.clickTrackers;return Array.isArray(n)?p(n):Promise.resolve()},l=(e,t)=>{let r=e&&e.slots?e.slots[o.A.PROMOTED_WATCH_BAR]:null;if((0,s.M2)(r)||!(r&&r.slotMarkup))return null;let i=r.slotMarkup;try{return JSON.parse(i)}catch(e){return t&&t("There was an error decoding PWB ad response",e),null}},c=(e,t)=>!!e&&!!t&&e.providerId===t.providerId,p=e=>{let t=[];return e.forEach(e=>{t.push(g(e).catch(t=>console.error("Error when trying to fire tracker : "+e,t)))}),Promise.all(t)};n()(function(e,t){return u(e,t)});let u=(e,t)=>{let r=l(e),i=l(t);if(!c(r,i))return Promise.resolve();let a=i.impressionTrackers;return Array.isArray(a)?p(a):Promise.resolve()},g=e=>new Promise((t,r)=>{let i=new Image;i.addEventListener("load",()=>t(i)),i.addEventListener("error",e=>r(e)),i.src=e}),f=/[^a-zA-Z0-9]/g,m=e=>{let{watchTitleId:t,refMarker:r,watchOption:i,logOffsiteRef:a,adSlotsInfo:n}=e;return()=>{let e=i.provider?.refTagFragment?.replace(f,"").substring(0,12);a({refMarkerString:r,pageAction:e?`watch-${t}-${e}`:`watch-${t}`}),i.promoted&&n&&d(n,i.promoted)}},h=()=>{let e=(0,i.z7)();return t=>{let{titleId:r,watchOption:a,refMarker:n,adSlotsInfo:o}=t,s=n?.prefix?`${n.prefix}_`:"",d=n?.suffix?`_${n.suffix}`:"",l=a.provider?.refTagFragment?`${s}${a.provider.refTagFragment}${d}`:"",c=a.provider?.refTagFragment?`${s}${a.provider.refTagFragment}`:"",p=a.link.startsWith("/"),u=-1!==a.link.indexOf("imdb.com"),g=!p&&!u;return{href:(0,i.jo)(a.link,c),onClick:m({watchTitleId:r,refMarker:l,watchOption:a,logOffsiteRef:e,adSlotsInfo:o}),postIcon:g?"launch":void 0,postIconName:g?"launch":void 0,target:"_blank"}}}}}]);