"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9031],{35223:function(e,t,r){r.d(t,{TY:function(){return a},gA:function(){return n},z7:function(){return i}});let i={ADD_TO_LIST:"btp_atl",TRAILER:"btp_trlr",RETRY:"btp_ta",RATING_ROW:"btp_rt",RATING_DISPLAY:"btp_rt_ds",RATE_TRIGGER:"btp_rt_tg",METADATA_LIST:"btp_ml",GENRE_LIST:"btp_gl",PRODUCTION_STATUS:"btp_ps",SET_PREFERRED_SERVICES:"btp_sps"},a={ratingButtonRatedAriaLabel:{id:"common_ariaLabels_ratingButtonRated",defaultMessage:"Your rating: {rating}"},ratingButtonUnratedAriaLabel:{id:"common_ariaLabels_ratingButtonUnrated",defaultMessage:"Rate {titleName}"},ratingPromptRateLabel:{id:"common_ratingPrompt_rate",defaultMessage:"Rate"},closePrompt:{id:"common_ariaLabel_closePrompt",defaultMessage:"Close Prompt"},addToList:{id:"common_add_to_list_buttonText",defaultMessage:"Add to list"},trailer:{id:"common_buttons_trailer",defaultMessage:"Trailer"}},n="released"},19031:function(e,t,r){r.d(t,{Pz:function(){return eR},qo:function(){return eC},tN:function(){return eS}});var i=r(52322),a=r(88169),n=r(86704),o=r(30382),s=r.n(o),d=r(2784),l=r(53665),c=r(19596),p=r(45274),u=r(42712),g=r(41174),f=r(49666),m=r(4363),h=r(85846),x=r(95441),T=r(83163),b=r(48687),y=r(94475),v=r(10105),_=r(35223),I=r(4649),w=r(94471),C=r(75824),P=r(22073),S=r(82338),R=r(66724),E=r(11438),j=r(63370),O=r(6935),k=r(92847);let A=e=>{let{originalTitleText:t,titleText:r,id:o,primaryImage:s,titleType:l,titleGenres:c,ratingsSummary:p,canRate:u}=e.titleData,{palette:{baseColor:g}}=(0,d.useContext)(a.ThemeContext),m=(0,f.ik)(),{titleMainLinkBuilder:h}=(0,R.WOb)(),{rating:x}=(0,a.useRatingsContext)(o),T=(0,w.P)(x,"user"),b=(0,w.P)(p?.aggregateRating,"imdb"),y=(0,j.K)({originalTitleText:t,titleText:r}),v=(0,C.N)(_.TY.ratingButtonRatedAriaLabel,{rating:T||""}),I=(0,C.N)(_.TY.ratingButtonUnratedAriaLabel,{titleName:y}),A=(0,C.N)(_.TY.ratingPromptRateLabel),W=h({tconst:o,refSuffix:E.Cd.TEXT}),G=h({tconst:o,refSuffix:E.Cd.POSTER}),U=function(e){let t=[],{releaseYear:r,runtime:i,certificate:a}=e,n=(0,S.y)(r,e.titleType?.canHaveEpisodes);return n&&t.push(n),i?.seconds&&t.push((0,P.L)(i.seconds,P.A.HOURS_MINUTES_EXPLICIT)),a?.rating&&t.push(a.rating),t}(e.titleData);return(0,i.jsxs)(L,{className:g,children:[(0,i.jsx)(M,{children:(0,i.jsx)(a.Poster,{imageProps:{imageModel:(0,O.Gs)(s,y),imageType:l?.id,size:"xs"},dynamicWidth:!0,ariaLabel:y,href:G})}),(0,i.jsxs)(B,{children:[(0,i.jsx)(N,{href:W,titleTextClass:"prompt-title-text",typographyType:(y?.length??0)>65?`${(0,n.setTypographyType)("subtitle")}`:"",children:y}),U.length>0&&(0,i.jsx)(a.InlineList,{showDividers:!0,inline:!0,noWrap:!0,"data-testid":_.z7.METADATA_LIST,children:U.map(e=>(0,i.jsx)(a.InlineListItem,{children:e},e))}),!!c&&c.genres.length>0&&(0,i.jsx)(a.InlineList,{showDividers:!0,inline:!0,noWrap:!0,"data-testid":_.z7.GENRE_LIST,children:c.genres.map(e=>(0,i.jsx)(a.InlineListItem,{children:e.genre.text},`${e.genre.text}`))}),!!(b||u?.isRatable)&&(0,i.jsxs)(D,{"data-testid":_.z7.RATING_ROW,children:[!!b&&(0,i.jsx)(a.RatingStar,{className:_.z7.RATING_DISPLAY,formattedRating:b,maxRating:10}),!!u?.isRatable&&!!y&&!m&&(0,i.jsx)(k.T,{title:{id:o,titleText:y,canRate:u.isRatable},ratingTriggerComponent:e=>{let{onUserRatingClick:t}=e;return(0,i.jsx)($,{ariaLabelRated:v,ariaLabelUnrated:I,formattedRating:T,className:b?void 0:"standalone-star",onClick:t,rateLabel:A})}})]})]})]})},M=c.default.div.withConfig({componentId:"sc-5b5e8697-0"})(["width:4.5rem;"]),L=c.default.div.withConfig({componentId:"sc-5b5e8697-1"})(["display:flex;"," margin-bottom:",";margin-top:",";max-width:100%;padding-left:",";padding-right:",";","{padding-left:0;padding-right:0;margin-top:0;}&.base{","}&.baseAlt{","}"],(0,n.setTypographyType)("bodySmall"),n.spacing.s,n.spacing.xxs,n.spacing.s,n.spacing.s,n.mediaQueries.breakpoints.above.m,(0,n.setPropertyToColorVar)("color","ipt-on-base-textSecondary-color"),(0,n.setPropertyToColorVar)("color","ipt-on-baseAlt-textSecondary-color")),B=c.default.div.withConfig({componentId:"sc-5b5e8697-2"})(["display:flex;flex-direction:column;padding-left:",";overflow:hidden;"],n.spacing.s),N=(0,c.default)(a.Title).withConfig({componentId:"sc-5b5e8697-3"})(["margin-bottom:",";padding:0;"," .prompt-title-text{max-height:7.4rem;}"],n.spacing.xxs,e=>(0,c.css)(["",""],e.typographyType)),D=c.default.div.withConfig({componentId:"sc-5b5e8697-4"})([""," .standalone-star{padding:0;min-width:0;}"],(0,n.setTypographyType)("body")),$=(0,c.default)(a.RateButton).withConfig({componentId:"sc-5b5e8697-5"})(["height:fit-content;"]);var W=r(15323);let G=e=>{let{labelTitle:t,listContent:r,"data-testid":a}=e;return(0,i.jsxs)(Z,{"data-testid":a,children:[(0,i.jsx)(Y,{children:t}),(0,i.jsx)(V,{children:r?.filter(e=>"object"==typeof e&&null!==e&&"text"in e).map((e,t)=>{let r=e.text,a=t>0?` • ${r}`:r;return i.jsx(d.Fragment,{children:a},r)})})]})},U=e=>{let{data:t}=e,r=(0,l.Z)(),a=t?.productionBudget?.budget.amount,n=t?.lifetimeGross?.total.amount,o=t?.openingWeekendGross?.gross.total.amount,s=t?.worldwideGross?.total.amount,d=(0,W.AO)(t?.productionBudget),c=(0,W.yK)(t?.lifetimeGross),p=(0,W.UJ)(t?.openingWeekendGross),u=(0,W.pM)(t?.worldwideGross);return a||n||o||s?(0,i.jsx)(z,{"data-testid":"title-boxoffice-section",children:(0,i.jsxs)(F,{children:[!!a&&!!d&&(0,i.jsx)(G,{labelTitle:r.formatMessage(d.label),listContent:d.props.listContent,"data-testid":d.props["data-testid"]}),!!n&&!!c&&(0,i.jsx)(G,{labelTitle:r.formatMessage(c.label),listContent:c.props.listContent,"data-testid":c.props["data-testid"]}),!!o&&!!p&&(0,i.jsx)(G,{labelTitle:r.formatMessage(p.label),listContent:p.props.listContent,"data-testid":p.props["data-testid"]}),!!s&&!!u&&(0,i.jsx)(G,{labelTitle:r.formatMessage(u.label),listContent:u.props.listContent,"data-testid":u.props["data-testid"]})]})}):null},z=c.default.div.withConfig({componentId:"sc-8e95b90d-0"})(["margin:0 "," "," ",";","{margin:0 0 "," 0;}"],n.spacing.s,n.spacing.m,n.spacing.s,n.mediaQueries.breakpoints.above.m,n.spacing.m),F=c.default.div.withConfig({componentId:"sc-8e95b90d-1"})(["display:flex;flex-direction:column;","{flex-flow:row wrap;}"],n.mediaQueries.breakpoints.above.m),Z=c.default.div.withConfig({componentId:"sc-8e95b90d-2"})(["display:grid;margin-bottom:",";","{width:50%;}"],n.spacing.s,n.mediaQueries.breakpoints.above.m),Y=c.default.div.withConfig({componentId:"sc-8e95b90d-3"})([""," font-weight:bold;"],(0,a.setTypographyType)("bodySmall")),V=c.default.div.withConfig({componentId:"sc-8e95b90d-4"})(["",""],(0,a.setTypographyType)("bodySmall"));var Q=r(14342),H=r(11602);let K=s()`
    fragment BaseTitlePrompt__Track on Title {
        id
        trackNotificationPreferences @include(if: $isProPage) {
            ...TrackPreferences
        }
    }
    ${H.vW}
`,X=e=>{let{data:t}=e;return t?(0,i.jsx)(q,{id:t.id,data:t.trackNotificationPreferences,displayTrackOptionsMenu:!1,buttonProps:{width:"full-width"},buttonType:"secondaryButton"}):null},q=(0,c.default)(Q.ZP).withConfig({componentId:"sc-e967ba0e-0"})(["width:100%;"]),J=s()`
    fragment BaseTitlePrompt__Trailer on Title {
        id
        latestTrailer @skip(if: $isProPage) {
            id
        }
    }
`,ee=e=>{let{data:t}=e,r=(0,l.Z)(),{videoSingleLinkBuilder:n}=(0,R.WOb)(),o=t?.latestTrailer?.id,s=o?n({viconst:o,refSuffix:E.Cd.TRAILER}):void 0;return s?(0,i.jsx)(a.SecondaryButton,{width:"full-width",preIcon:"play-arrow",href:s,"data-testid":_.z7.TRAILER,children:r.formatMessage(_.TY.trailer)}):null};var et=r(2870);let er=e=>{let{titleId:t}=e;return t?(0,i.jsx)(et.f,{titleId:t}):null};var ei=r(73078),ea=r(28160),en=r(85591),eo=r(82453),es=r(9094),ed=r(4958);let el=e=>{let{titleId:t,category:r,watchOptions:n,refMarker:o}=e,s=r.toUpperCase().replace("IMDB","IMDb"),d=(0,eo.Ok)().adSlotsInfo,l=(0,es.Z)();return(0,i.jsxs)(eg,{children:[(0,i.jsx)(ef,{"data-testid":`${s}-title`,children:s}),(0,i.jsx)(a.List,{"data-testid":`${s}-list`,children:!!t&&n.map(e=>{let a=l({titleId:t,watchOption:e,refMarker:o,adSlotsInfo:d}),n="shw"===e.provider.refTagFragment?e.title.value:e.provider.name.value,s=e.provider?.logos?.icon;return(0,i.jsx)(em,{...a,children:(0,i.jsxs)(eh,{children:[!!s?.url&&!!s?.width&&!!s?.height&&(0,i.jsx)(ex,{imageModel:{caption:n,url:s.url,maxWidth:s.width,maxHeight:s.height},size:50}),(0,i.jsxs)(eT,{children:[(0,i.jsx)(eb,{children:n}),(0,i.jsx)(ey,{children:e.description?.value})]})]})},`${r}-${e.link}`)})})]})},ec=e=>{let{titleId:t,watchOptionsCategories:r,isLoading:n,refMarker:o,preferredProviderIds:s=[]}=e,d=(0,l.Z)(),{organizedWatchOptions:c}=(0,ed.y)({watchOptionsCategories:r||[],preferredProviderIds:s});return n?(0,i.jsx)(eu,{"data-testid":"loader-container",children:(0,i.jsx)(a.Loader,{})}):r&&0!==r.length?(0,i.jsx)(i.Fragment,{children:c.map(e=>(0,i.jsx)(el,{titleId:t,category:e.categoryName.value,watchOptions:e.watchOptions,refMarker:o},e.categoryName.value))}):(0,i.jsx)(ev,{title:d.formatMessage({id:"error_emptyStates_watchOptions_title",defaultMessage:"Watch Options are currently unavailable"}),message:d.formatMessage({id:"error_common_refreshOrTryAgain",defaultMessage:"Please refresh the page or try again later."})})},ep=s()`
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
`;ec.fragments={watchOptionsCategories:ep};let eu=c.default.div.withConfig({componentId:"sc-f7ff5283-0"})(["align-items:flex-start;display:flex;height:100%;margin:3rem 0;justify-content:center;"]),eg=c.default.div.withConfig({componentId:"sc-f7ff5283-1"})(["",""],(0,n.setTypographyType)("body")),ef=c.default.div.withConfig({componentId:"sc-f7ff5283-2"})([""," "," text-transform:none;font-size:13px;margin:0;padding:13px 0 7px 15px;","{padding:13px 0 7px;}"],(0,n.setTypographyType)("overline"),(0,n.setPropertyToColorVar)("color","ipt-on-baseAlt-accent1-color"),n.mediaQueries.breakpoints.above.m),em=(0,c.default)(a.ListItem).withConfig({componentId:"sc-f7ff5283-3"})(["&:first-of-type{border-top:1px solid rgba(",",0.1);}border-bottom:1px solid rgba(",",0.1);height:4rem;","{padding:0;}"],(0,n.getColorVarValue)("ipt-base-rgb"),(0,n.getColorVarValue)("ipt-base-rgb"),n.mediaQueries.breakpoints.above.m),eh=c.default.div.withConfig({componentId:"sc-f7ff5283-4"})(["display:flex;"]),ex=(0,c.default)(a.PhotoImage).withConfig({componentId:"sc-f7ff5283-5"})(["min-width:","px;margin-top:auto;margin-bottom:auto;margin-right:0.5rem;border-radius:0.25rem;"],50),eT=c.default.div.withConfig({componentId:"sc-f7ff5283-6"})(["margin-top:auto;margin-bottom:auto;"]),eb=c.default.div.withConfig({componentId:"sc-f7ff5283-7"})(["",""],(0,n.setTypographyType)("subtitle")),ey=c.default.div.withConfig({componentId:"sc-f7ff5283-8"})([""," "," ","{max-width:260px;}"],(0,n.setPropertyToColorVar)("color","ipt-on-baseAlt-textHint-color"),(0,n.setTypographyType)("bodySmall"),n.mediaQueries.breakpoints.above.m),ev=(0,c.default)(y.G).withConfig({componentId:"sc-f7ff5283-9"})([""," background:initial;"],(0,n.setTypographyType)("body")),e_=s()`
    fragment BaseTitlePrompt__WatchOptions on Title {
        id
        watchOptionsByCategory(location: $location) @skip(if: $isProPage) {
            categorizedWatchOptionsList {
                ...WatchOptionCategories
            }
        }
    }
    ${ep}
`,eI=e=>{let{data:t}=e,{value:r}=(0,E.Lz)(),a=t?.user?.preferredStreamingProviders?(0,en.H)({preferredStreamingProviders:t.user.preferredStreamingProviders}):[],n=(0,ea.L)({preferredServiceIds:a});if(!t)return null;let o=t.watchOptionsByCategory?.categorizedWatchOptionsList,s=o&&o.length>0;return(0,i.jsxs)(i.Fragment,{children:[!!n&&(0,i.jsx)(ew,{refSuffix:[E.Cd.BUTTON],"data-testid":_.z7.SET_PREFERRED_SERVICES,preferredServicesIds:a}),!!s&&(0,i.jsx)(ec,{titleId:t.id,watchOptionsCategories:o,preferredProviderIds:a,refMarker:{prefix:r}})]})},ew=(0,c.default)(ei.Z).withConfig({componentId:"sc-699ac8f9-0"})(["margin:"," 0;"],n.spacing.xxs),eC=s()`
    fragment BaseTitlePromptShared on Title {
        id
        plot {
            plotText {
                plainText
            }
        }
        productionStatus(useEntitlement: false) {
            currentProductionStage {
                id
                text
            }
        }
        ...BaseTitlePrompt__Track
        ...BaseTitlePrompt__Trailer
        ...BaseTitlePrompt__WatchOptions
    }
    ${J}
    ${e_}
    ${K}
`,eP=s()`
    query Base_Title_Prompt(
        $id: ID!
        $location: WatchOptionsLocation
        $isProPage: Boolean!
        $includeUserPreferredServices: Boolean! = false
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
    ${eC}
    ${u.R}
    ${p.j}
`,eS=e=>{let{titleId:t,pause:r=!1,queryOverride:i}=e,a=(0,h.ic)(),n=(0,f.ik)(),o=(0,g.nu)(),s=(0,b.hg)({weblabID:T.lh.IMDB_NEXT_USER_PREFERRED_SERVICES_INITIAL_1245110,treatments:{T1:!0}})&&!n&&o,d=n&&o,[l,c]=(0,m.E)({query:eP,variables:{id:t,location:a,isProPage:n,includeUserPreferredServices:s,includeBoxOfficeData:d},context:{serverSideCacheable:!1,personalized:n||s},pause:r,...i});return[l,c]},eR=e=>{let{title:t,baseTitlePromptData:r,onClose:n,isOpen:o,queryOverride:s,contentOverride:d,actionOverride:c}=e,p=(0,l.Z)(),u=(0,f.ik)(),[g,m]=eS({titleId:t?.id||"",pause:!!r||!t||!o,queryOverride:s});if(!t||!t.titleText?.text)return null;let h=r?.title??g.data?.title,x=r?.user??g.data?.user,T=g.data?.boxOffice,b=g.fetching,w=g.error,C=h?.productionStatus?.currentProductionStage.id,P=h?.productionStatus?.currentProductionStage.text,S=C&&P&&C!==_.gA;return(0,i.jsx)(ek,{onCloseClicked:n,baseColor:u?"base":"baseAlt",isOpen:o,closePromptLabel:p.formatMessage(_.TY.closePrompt),children:(0,i.jsxs)(eE,{children:[(0,i.jsx)(A,{titleData:t}),!!b&&(0,i.jsx)(v.lI,{height:"feature"}),!b&&(0,i.jsxs)(i.Fragment,{children:[!!h?.plot?.plotText?.plainText&&(0,i.jsx)(eO,{children:h.plot.plotText.plainText}),!!S&&(0,i.jsx)(eA,{"data-testid":_.z7.PRODUCTION_STATUS,children:P}),!!d&&d(g?.data||{}),!!u&&!!T&&(0,i.jsx)(U,{data:T}),(0,i.jsxs)(ej,{children:[!c&&!u&&!!h&&(0,i.jsx)(ee,{data:h}),!!u&&(0,i.jsx)(I.a,{title:t}),!u&&(0,i.jsx)(er,{titleId:t.id}),!!u&&!!h&&(0,i.jsx)(X,{data:h}),!!c&&c(g?.data||{})]}),!u&&!!h&&(0,i.jsx)(eI,{data:{...h,user:x}})]}),!b&&!!w&&(0,i.jsx)(y.G,{title:p.formatMessage({id:"error_common_sorryTryAgain",defaultMessage:"Sorry, there was an error. Please try again."}),displayType:"compact",action:(0,i.jsx)(a.TextLink,{onClick:()=>m(),text:p.formatMessage({id:"common_buttons_retry",defaultMessage:"Try again"}),"data-testid":_.z7.RETRY})})]})})},eE=c.default.div.withConfig({componentId:"sc-717a9add-0"})(["padding-bottom:",";"],n.spacing.l),ej=c.default.div.withConfig({componentId:"sc-717a9add-1"})(["display:flex;margin-bottom:",";padding-left:",";padding-right:",";","{padding-left:0;padding-right:0;}& > :nth-child(1):not(:last-child){margin-right:",";}"],n.spacing.xs,n.spacing.s,n.spacing.s,n.mediaQueries.breakpoints.above.m,n.spacing.xs),eO=c.default.div.withConfig({componentId:"sc-717a9add-2"})([""," margin-bottom:",";padding-left:",";padding-right:",";","{padding-left:0;padding-right:0;}"],(0,x.S)(4),n.spacing.s,n.spacing.s,n.spacing.s,n.mediaQueries.breakpoints.above.m),ek=(0,c.default)(a.Prompt).withConfig({componentId:"sc-717a9add-3"})(["",""],(0,n.setTypographyType)("bodySmall")),eA=c.default.div.withConfig({componentId:"sc-717a9add-4"})(["margin:",";","{margin-left:0;margin-right:0;}"],n.spacing.s,n.mediaQueries.breakpoints.above.m)},4649:function(e,t,r){r.d(t,{a:function(){return c}});var i=r(52322),a=r(2784),n=r(53665),o=r(88169),s=r(63370),d=r(96557),l=r(35223);let c=e=>{let{title:t}=e,r=(0,n.Z)(),c=(0,s.K)({originalTitleText:t?.originalTitleText,titleText:t?.titleText}),[p,u]=(0,a.useState)(!1);return t&&c?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.SecondaryButton,{width:"full-width",preIcon:"playlist-add-check","data-testid":l.z7.ADD_TO_LIST,onSelect:()=>u(!0),children:r.formatMessage(l.TY.addToList)}),(0,i.jsx)(d.Z,{constId:t.id,primaryImage:t.primaryImage,primaryText:c,imageType:"name",isOpen:p,onClose:()=>{u(!1)}})]}):null}},45274:function(e,t,r){r.d(t,{j:function(){return n}});var i=r(30382),a=r.n(i);let n=a()`
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
`},15323:function(e,t,r){r.d(t,{AO:function(){return c},UJ:function(){return u},pM:function(){return g},yK:function(){return p}});var i=r(53665);let a={id:"title_main_boxoffice_estimated",defaultMessage:"{budget} (estimated)"},n={id:"title_main_boxoffice_budget",defaultMessage:"Budget"},o={id:"title_main_boxoffice_grossdomestic",defaultMessage:"Gross US & Canada"},s={id:"title_main_boxoffice_openingweekenddomestic",defaultMessage:"Opening weekend US & Canada"},d={id:"title_main_boxoffice_cumulativeworldwidegross",defaultMessage:"Gross worldwide"},l=(e,t)=>{let r=(0,i.Z)();if(e&&t)return r.formatNumber(e,{style:"currency",currency:t,minimumFractionDigits:0})},c=e=>{let t=(0,i.Z)(),r=l(e?.budget.amount,e?.budget.currency);if(r)return{label:n,props:{listContent:[{text:t.formatMessage(a,{budget:r})}],"data-testid":"title-boxoffice-budget"}}},p=e=>{let t=l(e?.total.amount,e?.total.currency)??"";if(e)return{label:o,props:{listContent:[{text:t}],"data-testid":"title-boxoffice-grossdomestic"}}},u=e=>{let t=(0,i.Z)(),r=l(e?.gross.total.amount,e?.gross.total.currency)??"";if(e)return{label:s,props:{listContent:[{text:r},{text:t.formatDate(e?.weekendEndDate,{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"})}],"data-testid":"title-boxoffice-openingweekenddomestic"}}},g=e=>{let t=l(e?.total.amount,e?.total.currency)??"";if(e)return{label:d,props:{listContent:[{text:t}],"data-testid":"title-boxoffice-cumulativeworldwidegross"}}}},73078:function(e,t,r){var i=r(52322);r(2784);var a=r(27722),n=r(86704),o=r(75824),s=r(41174),d=r(66724),l=r(31643);t.Z=e=>{let{refSuffix:t,"data-testid":r,preferredServicesIds:c,className:p}=e,u=(0,s.nu)(),{preferencesPreferredServicesLinkBuilder:g}=(0,d.WOb)(),f=u&&(!c||c&&c.length>0),m=(0,o.N)(f?l.T.editPreferredServicesButtonText:l.T.setYourPreferredServicesButtonText);return(0,i.jsx)(a.TextButton,{alignContent:"left",href:g({refSuffix:t}),preIcon:f?n.ICONS.EDIT:n.ICONS.SETTINGS,"data-testid":r,ariaLabel:m,className:p,children:m})}},31643:function(e,t,r){r.d(t,{T:function(){return a},u:function(){return i}});let i="PREFERRED",a={editPreferredServicesButtonText:{id:"userPreferredServices_edit_preferred_services",defaultMessage:"Edit preferred services"},setYourPreferredServicesButtonText:{id:"userPreferredServices_set_your_preferred_services",defaultMessage:"Set your preferred services"}}},4958:function(e,t,r){r.d(t,{y:function(){return n}});var i=r(2784),a=r(31643);let n=e=>{let{watchOptionsCategories:t,preferredProviderIds:r}=e;return{organizedWatchOptions:(0,i.useMemo)(()=>{if(!t||0===t.length)return[];let e=Object.fromEntries(r.map((e,t)=>[e,t])),i=new Map;t.forEach(e=>{e.watchOptions.forEach(t=>{let n=r.includes(t.provider.id)?a.u:e.categoryName.value;i.has(n)||i.set(n,{categoryName:{value:n},watchOptions:[]}),i.get(n).watchOptions.push(t)})});let n=Array.from(i.values());return n.forEach(t=>{t.watchOptions.sort((t,r)=>(e[t.provider.id]??1/0)-(e[r.provider.id]??1/0))}),n.sort((e,t)=>e.categoryName.value===a.u?-1:t.categoryName.value===a.u?1:0)},[t,r])}}},28160:function(e,t,r){r.d(t,{L:function(){return o}});var i=r(41174),a=r(83163),n=r(48687);let o=e=>{let{preferredServiceIds:t}=e,r=(0,i.nu)();return(0,n.hg)({weblabID:a.lh.IMDB_NEXT_USER_PREFERRED_SERVICES_INITIAL_1245110,treatments:{T1:!0}})&&(!r||r&&0===t.length)}},42712:function(e,t,r){r.d(t,{R:function(){return n}});var i=r(30382),a=r.n(i);a()`
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
`},85591:function(e,t,r){r.d(t,{H:function(){return i}});let i=e=>e?(e?.preferredStreamingProviders.streamingProviders.edges||[]).map(e=>e.node.id):[]},9094:function(e,t,r){r.d(t,{Z:function(){return h}});var i=r(14438),a=r(25291),n=r.n(a),o=r(22431),s=r(22873);let d=(e,t)=>{let r;if(!t||(window.ad_utils&&(r=window.ad_utils.responsiveAdAPI.getLastAdResponse()),null===r))return Promise.resolve();let i=l(e),a=l(r);if(!c(i,a))return Promise.resolve();let n=a.clickTrackers;return Array.isArray(n)?p(n):Promise.resolve()},l=(e,t)=>{let r=e&&e.slots?e.slots[o.A.PROMOTED_WATCH_BAR]:null;if((0,s.M2)(r)||!(r&&r.slotMarkup))return null;let i=r.slotMarkup;try{return JSON.parse(i)}catch(e){return t&&t("There was an error decoding PWB ad response",e),null}},c=(e,t)=>!!e&&!!t&&e.providerId===t.providerId,p=e=>{let t=[];return e.forEach(e=>{t.push(g(e).catch(t=>console.error("Error when trying to fire tracker : "+e,t)))}),Promise.all(t)};n()(function(e,t){return u(e,t)});let u=(e,t)=>{let r=l(e),i=l(t);if(!c(r,i))return Promise.resolve();let a=i.impressionTrackers;return Array.isArray(a)?p(a):Promise.resolve()},g=e=>new Promise((t,r)=>{let i=new Image;i.addEventListener("load",()=>t(i)),i.addEventListener("error",e=>r(e)),i.src=e}),f=/[^a-zA-Z0-9]/g,m=e=>{let{watchTitleId:t,refMarker:r,watchOption:i,logOffsiteRef:a,adSlotsInfo:n}=e;return()=>{let e=i.provider?.refTagFragment?.replace(f,"").substring(0,12);a({refMarkerString:r,pageAction:e?`watch-${t}-${e}`:`watch-${t}`}),i.promoted&&n&&d(n,i.promoted)}},h=()=>{let e=(0,i.z7)();return t=>{let{titleId:r,watchOption:a,refMarker:n,adSlotsInfo:o}=t,s=n?.prefix?`${n.prefix}_`:"",d=n?.suffix?`_${n.suffix}`:"",l=a.provider?.refTagFragment?`${s}${a.provider.refTagFragment}${d}`:"",c=a.provider?.refTagFragment?`${s}${a.provider.refTagFragment}`:"",p=a.link.startsWith("/"),u=-1!==a.link.indexOf("imdb.com"),g=!p&&!u;return{href:(0,i.jo)(a.link,c),onClick:m({watchTitleId:r,refMarker:l,watchOption:a,logOffsiteRef:e,adSlotsInfo:o}),postIcon:g?"launch":void 0,postIconName:g?"launch":void 0,target:"_blank"}}}}}]);