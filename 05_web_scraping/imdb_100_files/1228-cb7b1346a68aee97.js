"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1228],{94475:function(e,t,a){a.d(t,{G:function(){return d}});var i=a(52322),r=a(72779),n=a.n(r),o=a(2784),s=a(19596),l=a(45103),c=a(91842);let d=e=>{let{palette:{baseColor:t}}=(0,o.useContext)(l.ThemeContext),{title:a,message:r,className:s,action:c,displayType:d}=e;return(0,i.jsx)(g,{className:n()(s,t),baseColor:"none",children:(0,i.jsxs)("div",{className:"inner",children:[(0,i.jsx)("div",{className:"title",role:"alert",children:a}),!!e.message&&(0,i.jsx)("div",{className:"message",role:"alert",children:r}),!!c&&(0,i.jsx)("compact"===d?u:p,{children:c})]})})},u=s.default.div.withConfig({componentId:"sc-aeb8d238-0"})(["margin-top:",";"],c.spacing.s),p=s.default.div.withConfig({componentId:"sc-aeb8d238-1"})(["margin-top:",";"],c.spacing.l),g=(0,s.default)(l.PageSection).withConfig({componentId:"sc-aeb8d238-2"})([".inner{max-width:480px;margin:0 auto;text-align:center;}.message{margin-top:",";}&.base{.title{",";}.message{",";}}&.baseColor{.title{",";}.message{",";}}"],c.spacing.m,(0,c.setPropertyToColorVar)("color","ipt-on-base-textPrimary-color"),(0,c.setPropertyToColorVar)("color","ipt-on-base-textSecondary-color"),(0,c.setPropertyToColorVar)("color","ipt-on-baseAlt-textPrimary-color"),(0,c.setPropertyToColorVar)("color","ipt-on-baseAlt-textSecondary-color"))},64072:function(e,t,a){a.d(t,{w:function(){return n}});var i=a(30382),r=a.n(i);let n=r()`
    fragment ImageListItemMetadata on Image {
        id
        url
        height
        width
        caption {
            plainText
        }
        names(limit: 4) {
            id
            nameText {
                text
            }
        }
        titles(limit: 1) {
            id
            titleText {
                text
            }
            originalTitleText {
                text
            }
            releaseYear {
                year
                endYear
            }
        }
    }
`},88758:function(e,t,a){a.d(t,{E:function(){return n},k:function(){return o}});var i=a(30382),r=a.n(i);let n=r()`
    fragment NameListItemMetadata on Name {
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
        bio {
            displayableArticle {
                body {
                    plaidHtml(
                        queryParams: $refTagQueryParam
                        showOriginalTitleText: $originalTitleText
                    )
                }
            }
        }
    }
`,o=r()`
    fragment NameMeterRanking on Name {
        meterRanking {
            currentRank
            rankChange {
                changeDirection
                difference
            }
        }
    }
`},36543:function(e,t,a){a.d(t,{$z:function(){return l},Dl:function(){return o},Zz:function(){return c},_A:function(){return d},f1:function(){return u},qp:function(){return p},vO:function(){return s}});var i=a(30382),r=a.n(i),n=a(85018);let o=r()`
    fragment TitleTopCastAndCrew on Title {
        id
        principalCredits(
            filter: { categories: ["cast", "director", "creator"] }
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
        principalCreditsV2(filter: { mode: "NARROWED" })
            @include(if: $isInPace) {
            grouping {
                groupingId
                text
            }
            credits(limit: 4) {
                name {
                    id
                    nameText {
                        text
                    }
                }
            }
        }
    }
`,s=r()`
    fragment TitleMeterRanking on Title {
        meterRanking {
            currentRank
            rankChange {
                changeDirection
                difference
            }
        }
    }
`,l=r()`
    fragment TitleListItemMetadataEssentials on Title {
        ...BaseTitleCard
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
    ${n.sq}
`,c=r()`
    fragment TitleListItemMetadata on Title {
        ...TitleListItemMetadataEssentials
        latestTrailer {
            id
        }
        plot {
            plotText {
                plainText
            }
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
    }
    ${l}
`,d=r()`
    fragment TitleListItemMetascore on Title {
        metacritic {
            metascore {
                score
            }
        }
    }
`,u=r()`
    fragment TitleTotalEpisodes on Title {
        episodes {
            episodes(first: 0) {
                total
            }
        }
    }
`,p=r()`
    fragment TitleListFacetFields on TitleListItemSearchConnection {
        genres: facet(facetField: GENRES) {
            filterId
            text
            total
        }

        keywords: facet(facetField: KEYWORDS) {
            filterId
            text
            total
        }

        watchOptions: facet(facetField: WATCH_PROVIDERS) {
            filterId
            text
            total
        }

        titleTypes: facet(facetField: TITLE_TYPE) {
            filterId
            text
            total
        }
    }
`},97149:function(e,t,a){a.d(t,{X:function(){return n}});var i=a(30382),r=a.n(i);let n=r()`
    fragment VideoListItemMetadata on Video {
        id
        thumbnail {
            url
            width
            height
        }
        name {
            value
            language
        }
        description {
            value
            language
        }
        runtime {
            unit
            value
        }
        primaryTitle {
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
    }
`},95248:function(e,t,a){a.d(t,{_q:function(){return I},ZP:function(){return x}});var i=a(52322),r=a(72779),n=a.n(r),o=a(2784),s=a(7523),l=a(53665),c=a(19596),d=a(46163),u=a(11438),p=a(14438);let g={CREDIT_CHANGE:u.Cd.FILMOGRAPHY,"CONTACT_CHANGE|CONTACT__RELATIONSHIP_TYPE|REPRESENTATION":u.Cd.REPRESENTATION,EMPLOYMENT_CHANGE:u.Cd.EMPLOYMENT,"CONTACT_CHANGE|CONTACT__RELATIONSHIP_TYPE|CLIENT":u.Cd.CLIENTS,NEWS_ADDITION:u.Cd.NEWS};var m=a(47900);let f=e=>{let[t,a]=(0,o.useState)(e),[i,r]=(0,o.useState)(!1),{updateTrackingForConst:n}=(0,m.w)(),{updateUntrackingForConst:s}=(0,m.a)(),l=async e=>{if(!1===e.isTracking&&!1!==t.isTracking){r(!0);let e=await s({input:{id:t.id}}),i={...t,isTracking:!1};e.data?.untrackConst?.success&&a(i),r(!1)}else if(!0===e.isTracking&&!1===t.isTracking){r(!0);let e=t.notificationPreferences?.map(e=>({...e,interested:!0})),i=await n({input:{id:t.id,notificationTypeStates:e?.map(e=>{let{interested:t,type:a}=e;return{typeId:a.id,interested:t}})}});i.data?.trackConst?.success&&a({...t,isTracking:!0,notificationPreferences:e}),r(!1)}else if(!0===e.isTracking&&e.notificationPreferences!==t.notificationPreferences){r(!0);let i={...t,isTracking:!0,notificationPreferences:t.notificationPreferences?.map(t=>{let a=t;return e.notificationPreferences?.map(e=>{e.type.id===t.type.id&&e.interested!==t.interested&&(a=e)}),a})},o=await n({input:{id:t.id,notificationTypeStates:i.notificationPreferences?.map(e=>({typeId:e.type.id,interested:e.interested}))}});o.data?.trackConst?.success&&a(i),r(!1)}};return{state:t,updateTracking:l,isFetching:i}},T={TRACK:{id:"pro_name_page_shared_connections_track",defaultMessage:"Track"},TRACKING:{id:"pro_name_page_shared_connections_tracking",defaultMessage:"Tracking"},STOP_TRACKING:{id:"pro_name_page_shared_connections_stop_tracking",defaultMessage:"Stop tracking"}},C={track:"track",trackButton:"track-on",trackMenu:"track-menu-open"},I="protrackbutton--tracking--post-icon",h=e=>{let t,{id:a,data:r,buttonProps:c,buttonType:m="button",displayTrackOptionsMenu:h=!0,className:x}=e,L=(0,l.Z)(),k=(0,p.EO)(),{state:{isTracking:P,notificationPreferences:y},updateTracking:M,isFetching:N}=f({id:a,isTracking:r?.isTracking||!1,notificationPreferences:r?.notificationPreferences||[]}),[S,A]=(0,o.useState)(!1),v={className:n()(c?.className,h?void 0:x),onColor:void 0};switch(m){case"secondaryButton":t=d.SecondaryButton,v.onColor="accent2";break;case"textButton":t=d.TextButton,v.onColor="accent2";break;default:t=d.Button}let R={},$=h?E:o.Fragment;h&&(R.className=x);let O=()=>k({pageAction:`${C.trackButton}-${a}`,refMarkerSuffix:u.Cd.EMPTY}),w=()=>k({pageAction:C.trackMenu,refMarkerSuffix:u.Cd.EMPTY}),V=()=>k({pageAction:`${C.track}-${u.Cd.OFF}-${a}`,refMarkerSuffix:u.Cd.MENU}),j=(e,t)=>{let a=g[e],i=t?u.Cd.OFF:u.Cd.ON;k({pageAction:`${a}-${i}`,refMarkerSuffix:u.Cd.MENU})};return(0,i.jsxs)($,{...R,children:[!!N&&(0,i.jsx)(t,{...c,...v,children:(0,i.jsx)(d.Loader,{})}),!N&&(0,i.jsx)(t,{onSelect:()=>{P?(w(),h?A(!S):M({isTracking:!1})):(O(),M({isTracking:!0}))},preIcon:P?"notifications-add-check":"notifications-add",postIcon:P&&h?"arrow":void 0,postIconClassName:P&&h?I:void 0,...c,...v,children:P?L.formatMessage(T.TRACKING):L.formatMessage(T.TRACK)}),!!P&&!!h&&(0,i.jsx)(d.SetPalette,{palette:"light",children:(0,i.jsx)(_,{isVisible:S,mode:"absolute",expandFrom:"top-right",children:(0,i.jsx)(s.Y,{onEscapeKey:()=>A(!1),onClickOutside:()=>A(!1),children:(0,i.jsxs)(d.MenuList,{children:[y?.map(e=>{let{type:t,interested:a}=e;return i.jsx(b,{onClick:()=>{j(t.id,a),M({isTracking:!0,notificationPreferences:[{interested:!a,type:t}]})},preIconName:a?"checkbox-checked":"checkbox-unchecked",preIconProps:{name:a?"checkbox-checked":"checkbox-unchecked",spanClassName:"checkbox-icon"},children:t.text},t.text)}),(0,i.jsx)(d.MenuListDivider,{}),(0,i.jsx)(d.MenuListItem,{onClick:()=>{V(),A(!1),M({isTracking:!1})},children:L.formatMessage(T.STOP_TRACKING)})]})})})})]})};var x=e=>(0,i.jsx)(u.xm,{value:u.Cd.TRACK,children:(0,i.jsx)(h,{...e})});let E=c.default.div.withConfig({componentId:"sc-2c4a1a2a-0"})(["position:relative;"]),b=(0,c.default)(d.MenuListItem).withConfig({componentId:"sc-2c4a1a2a-1"})([".checkbox-icon{","}"],(0,d.setPropertyToColorVar)("color","ipt-on-base-accent1-color")),_=(0,c.default)(d.Menu).withConfig({componentId:"sc-2c4a1a2a-2"})(["right:0;top:100%;"])},11602:function(e,t,a){a.d(t,{Vc:function(){return o},qb:function(){return n},vW:function(){return s}});var i=a(30382),r=a.n(i);let n=r()`
    mutation TrackConst($input: SetTrackNotificationPreferencesInput!) {
        trackConst(input: $input) {
            constId
            message {
                language
                value
            }
            success
        }
    }
`,o=r()`
    mutation UntrackConst($input: UntrackConstInput!) {
        untrackConst(input: $input) {
            constId
            message {
                language
                value
            }
            success
        }
    }
`,s=r()`
    fragment TrackPreferences on TrackNotificationPreferences {
        isTracking
        notificationPreferences {
            interested
            type {
                id
                text
            }
        }
    }
`},47900:function(e,t,a){a.d(t,{a:function(){return n},w:function(){return o}});var i=a(17503),r=a(11602);let n=()=>{let[e,t]=(0,i.Z)(r.Vc),a=async e=>t(e);return{success:e.data?.untrackConst?.success,error:e.error,fetching:e.fetching,updateUntrackingForConst:a}},o=()=>{let[e,t]=(0,i.Z)(r.qb),a=async e=>t(e);return{success:e.data?.trackConst?.success,error:e.error,fetching:e.fetching,updateTrackingForConst:a}}},96557:function(e,t,a){a.d(t,{Z:function(){return z}});var i=a(52322),r=a(14973),n=a(30382),o=a.n(n),s=a(2784),l=a(53665),c=a(19596),d=a(45103),u=a(91842),p=a(31885),g=a(20608),m=a(84314),f=a(49666),T=a(49996),C=a(4363),I=a(66724),h=a(11438),x=a(37179),E=a(6935),b=a(14438),_=a(1833),L=a(94475),k=a(67353),P=a(22619),y=a(25436),M=a(75824),N=a(75808),S=a(83163),A=a(48687);let v=o()`
    fragment AddConstToListMenuItem on List {
        id
        name {
            originalText
        }
    }
`,R=e=>{let{value:t}=(0,h.Lz)(),{listMainLinkBuilder:a}=(0,I.WO)(),{palette:{baseColor:r}}=(0,s.useContext)(d.ThemeContext),{constId:n,onError:o}=e,{pageType:l}=(0,T.y)(),c=(0,f.ik)()&&l===y.PageType.NAME,u=e.listData.id,p=e.listData.name?.originalText||"",g=(0,M.N)({id:"addConstToListMenuItem_goToList_ariaLabel",defaultMessage:"Go to list: {listTitle}"},{listTitle:p}),m=(0,M.N)({id:"user_your_checkins",defaultMessage:"Your Check-Ins"}),[C,x]=(0,s.useState)(e.isElementInList),{addConstToList:E,removeConstFromList:b}=(0,N.j8)({overrideRefTag:c?t+`_${u}`:t}),_=(0,A.hg)({weblabID:S.lh.IMDB_NEXT_WATCHED_FEATURE_1045775,treatments:{T1:!0}}),{addToWatchedTitles:L}=(0,P.V)(),{executeAddConstToList:v,addConstToListResult:R}=E,{executeRemoveConstFromList:$,removeConstFromListResult:O}=b,W=R?.error||O?.error,H=()=>{C?($(u,n),x(!1)):(v(u,n),x(!0),_&&"CHECK_INS"===e.listClass&&L(n))};return W?(o(W),null):(0,i.jsxs)(w,{children:[(0,i.jsxs)(V,{onClick:H,onKeyDown:e=>{(0,k.isEnterOrSpaceKey)(e)&&H()},role:"button",tabIndex:0,"data-titleinlist":C,className:r,children:[!!C&&(0,i.jsx)(D,{name:"playlist-add-check",className:r}),!C&&(0,i.jsx)(j,{name:"add"}),"CHECK_INS"===e.listClass?m:p]}),(0,i.jsx)(F,{href:a({lsconst:u,refSuffix:h.Cd.EMPTY}),"aria-label":g,className:r,children:(0,i.jsx)(d.Icon,{name:"chevron-right"})})]})};R.fragments={addConstToListMenuItem:v};let $=`
    &:focus {
        ${(0,u.focusOnBaseAlt)()}
    }

    &:hover {
        background: rgba(
            ${(0,u.getColorVarValue)("ipt-on-baseAlt-rgb")},
            ${(0,u.getColorVarValue)("ipt-baseAlt-hover-opacity")}
        );
        background: rgba(
            ${(0,u.getColorVar)("ipt-on-baseAlt-rgb")},
            ${(0,u.getColorVar)("ipt-baseAlt-hover-opacity")}
        );
    }

    &:active {
        background: rgba(
            ${(0,u.getColorVarValue)("ipt-on-baseAlt-rgb")},
            ${(0,u.getColorVarValue)("ipt-baseAlt-pressed-opacity")}
        );
        background: rgba(
            ${(0,u.getColorVar)("ipt-on-baseAlt-rgb")},
            ${(0,u.getColorVar)("ipt-baseAlt-pressed-opacity")}
        );
    }
`,O=`    
    &:focus {
        ${(0,u.focusOnBase)()}
    }

    &:hover {
        background: rgba(
            ${(0,u.getColorVarValue)("ipt-on-base-rgb")},
            ${(0,u.getColorVarValue)("ipt-base-hover-opacity")}
        );
        background: rgba(
            ${(0,u.getColorVar)("ipt-on-base-rgb")},
            ${(0,u.getColorVar)("ipt-base-hover-opacity")}
        );
    }

    &:active {
        background: rgba(
            ${(0,u.getColorVarValue)("ipt-on-base-rgb")},
            ${(0,u.getColorVarValue)("ipt-base-pressed-opacity")}
        );
        background: rgba(
            ${(0,u.getColorVar)("ipt-on-base-rgb")},
            ${(0,u.getColorVar)("ipt-base-pressed-opacity")}
        );
    }
`,w=c.default.div.withConfig({componentId:"sc-dfa3a22-0"})(["display:flex;align-items:center;width:100%;"]),V=c.default.div.withConfig({componentId:"sc-dfa3a22-1"})(["flex-grow:1;cursor:pointer;padding:0.75rem 1rem 0.75rem 0.75rem;position:relative;text-overflow:ellipsis;overflow:hidden;word-break:break-all;white-space:nowrap;&::after{position:absolute;content:'';right:0;top:20%;height:60%;width:1px;}&.base::after{","}&.baseAlt::after{","}"],(0,u.setPropertyToColorVar)("background-color","ipt-base-border-color"),(0,u.setPropertyToColorVar)("background-color","ipt-baseAlt-border-color")),j=(0,c.default)(d.Icon).withConfig({componentId:"sc-dfa3a22-2"})(["margin-right:0.5rem;"]),D=(0,c.default)(j).withConfig({componentId:"sc-dfa3a22-3"})(["&.base{","}&.baseAlt{","}"],(0,u.setPropertyToColorVar)("color","ipt-on-base-accent4-color"),(0,u.setPropertyToColorVar)("color","ipt-on-baseAlt-accent4-color")),F=c.default.a.withConfig({componentId:"sc-dfa3a22-4"})(["padding:0.75rem 1rem;flex-shrink:0;&.base{"," ","}&.baseAlt{"," ","}"],(0,u.setPropertyToColorVar)("color","ipt-on-base-textHint-color"),O,(0,u.setPropertyToColorVar)("color","ipt-on-baseAlt-textHint-color"),$),W={PROMPT_TITLE:{id:"common_add_to_list_buttonText",defaultMessage:"Add to list"},CREATE_LIST:{id:"addConstToListPrompt_label_createList",defaultMessage:"Create new list"},ERROR_TITLE:{id:"error_emptyStates_addConstToList_title",defaultMessage:"There was a problem. Please try again."},VIEW_WATCHLIST:{id:"common_label_viewWatchlist",defaultMessage:"View Watchlist"},SIGNED_OUT_ERROR_TITLE:{id:"error_signedOut_addConstToList_title",defaultMessage:"Sign in to create or view a list."},CLOSE_PROMPT_LABEL:{id:"common_ariaLabel_closePrompt",defaultMessage:"Close Prompt"},NO_LISTS_FOUND:{id:"addConstToListPrompt_no_lists_found",defaultMessage:"No lists found"}},H={LOADER:"actlp-loader",ERROR:"actlp-error",CREATE_LIST:"actlp-creat-list",VIEW_WATCHLIST:"actlp-watchlist",NO_LIST:"actlp-no-list"},Y="addConstToListPrompt__panel",B=o()`
    query ACTLP_Prompt(
        $count: Int!
        $constId: ID!
        $after: ID
        $listElementType: ListTypeId
        $classTypes: [ListClassId!]
    ) {
        lists(
            first: $count
            filter: {
                listElementType: $listElementType
                classTypes: $classTypes
            }
            after: $after
        ) {
            total
            edges {
                node {
                    ...AddConstToListMenuItem
                    isElementInList(itemElementId: $constId)
                    listClass {
                        id
                    }
                }
            }
            pageInfo {
                hasNextPage
                endCursor
            }
        }
    }
    ${R.fragments.addConstToListMenuItem}
`,G={hasNextPage:!0,listItems:[],endCursor:null},K=e=>{let t,a;let{isOpen:n,onClose:o,primaryImage:c,primaryText:u,imageType:L}=e,k=c?.caption?.plainText||"",P=(0,m.n)(),y=(0,f.ik)(),M=(0,l.Z)(),{makeRefMarker:N}=(0,h.Lz)(),{listCreateLinkBuilder:S,listWatchlistLinkBuilder:A,registrationSignInLinkBuilder:v}=(0,I.WO)(),{pageType:$,pageConst:O}=(0,T.y)(),w=e.constId||O,V=w?.startsWith("tt"),j=w?.startsWith("nm"),D=y?[p.JQJ.ProList]:[p.JQJ.CheckIns,p.JQJ.List],F=(0,b.EO)(),K="poster";V&&(t=p.lZo.Titles),j&&(t=p.lZo.People,K="avatar");let[z,J]=(0,s.useState)(G),[X]=(0,C.E)({query:B,requestPolicy:"network-only",variables:{constId:w,count:100,after:z.endCursor,listElementType:t,classTypes:D},context:{serverSideCacheable:!1,personalized:!0},pause:!n||!P||!w}),[ee,et]=(0,s.useState)(void 0),ea=X.fetching,ei=X.error||ee,er=X.data?.lists?.total,en=$&&w?(0,i.jsx)(d.TextLink,{href:v({refSuffix:[h.Cd.LIST,h.Cd.MENU],query:{u:`/${$}/${w}/`}}),text:M.formatMessage(W.SIGNED_OUT_ERROR_TITLE)}):null,eo=M.formatMessage(W.ERROR_TITLE);(0,s.useEffect)(()=>{n&&!ea&&X.data?.lists&&z.hasNextPage&&J({listItems:X.data?.lists?.edges?z.listItems.concat(X.data.lists.edges):z.listItems,hasNextPage:X.data?.lists?.pageInfo?.hasNextPage,endCursor:X.data?.lists?.pageInfo?.endCursor})},[z.hasNextPage,X.data]),(0,s.useEffect)(()=>{if(n){F({pageAction:x.QJ.ADD_TO_LIST_OPEN,hitType:r.HitType.POP_UP,refMarkerSuffix:h.Cd.EMPTY});return}J({...G})},[n]);let es=!ei&&n&&P&&er!==z.listItems.length;return(0,i.jsxs)(q,{"data-testid":"styled-list-prompt",isOpen:n,onCloseClicked:()=>{o(),F({pageAction:x.QJ.ADD_TO_LIST_CLOSE,hitType:r.HitType.POP_UP,refMarkerSuffix:h.Cd.EMPTY})},panelClassName:Y,baseColor:y?"base":"baseAlt",header:(0,i.jsx)(U,{type:K,subtitle:u,reverseTitleOrder:!0,title:M.formatMessage(W.PROMPT_TITLE),ariaLabel:k,imageModel:(0,E.K0)(c,k),imageType:L}),closePromptLabel:M.formatMessage(W.CLOSE_PROMPT_LABEL),children:[P?(0,i.jsxs)(d.MenuList,{children:[!!V&&!y&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.MenuListItem,{className:H.VIEW_WATCHLIST,href:A({refSuffix:h.Cd.WATCHLIST}),postIconName:"chevron-right",children:(0,i.jsx)(g.q,{...W.VIEW_WATCHLIST})}),(0,i.jsx)(d.MenuListDivider,{})]}),(0,i.jsx)(d.MenuListItem,{className:H.CREATE_LIST,href:y?(0,_.Ae)(`${_.Wr}/list/new/people`,N(h.Cd.NEW),{}):S({refSuffix:h.Cd.NEW}),target:y?"_blank":void 0,postIconName:y?"launch":"chevron-right",children:(0,i.jsx)(g.q,{...W.CREATE_LIST})}),(0,i.jsx)(d.MenuListDivider,{}),!!ei&&(0,i.jsx)(Z,{className:H.ERROR,title:(a=ee,a?.graphQLErrors[0]?.extensions?.code==="FORBIDDEN")?en:eo}),!es&&0===z.listItems.length&&(0,i.jsx)(Z,{className:H.NO_LIST,title:(0,i.jsx)(g.q,{...W.NO_LISTS_FOUND})}),!ei&&!!w&&z.listItems.map(e=>(0,i.jsx)(R,{listData:e.node,listClass:e.node?.listClass?.id,isElementInList:e.node.isElementInList||!1,constId:w,onError:et},e.node.id))]}):(0,i.jsx)(Z,{className:H.ERROR,title:en}),!!es&&(0,i.jsx)(Q,{"data-testid":H.LOADER,children:(0,i.jsx)(d.Loader,{})})]})},q=(0,c.default)(d.Prompt).withConfig({componentId:"sc-38916b0e-0"})([".","{padding:0;",";min-height:18rem;}"],Y,(0,u.setPropertyToShapeVar)("border-radius","ipt-cornerRadius")),U=(0,c.default)(d.PromptHeader).withConfig({componentId:"sc-38916b0e-1"})([""," ",""],(0,u.setPropertyToShapeVar)("border-top-left-radius","ipt-cornerRadius"),(0,u.setPropertyToShapeVar)("border-top-right-radius","ipt-cornerRadius")),Z=(0,c.default)(L.G).withConfig({componentId:"sc-38916b0e-2"})([""," background:initial;min-height:7rem;padding:3rem;"],(0,u.setTypographyType)("body")),Q=c.default.div.withConfig({componentId:"sc-38916b0e-3"})(["display:flex;min-height:7rem;justify-content:center;padding:3rem;"]);var z=e=>(0,i.jsx)(h.xm,{value:h.Cd.LIST,children:(0,i.jsx)(K,{...e})})},75808:function(e,t,a){a.d(t,{j8:function(){return x}});var i=a(30382),r=a.n(i),n=a(64072),o=a(88758),s=a(80032),l=a(36543),c=a(97149),d=a(25436),u=a(48687),p=a(86958),g=a(49666),m=a(11438),f=a(14438),T=a(83163),C=a(17503);let I="list-item-add",h="list-item-delete",x=e=>{let[t,a]=(0,C.Z)(E),[i,r]=(0,C.Z)(b),n=(0,p.B)().context,{makeRefMarker:o}=(0,m.Lz)(),s=(0,f.EO)(),l=(0,u.hg)({weblabID:T.lh.IMDB_WEB_PACE_CREDITS_1201882,treatments:{T1:!0}}),c=(0,g.ik)()&&n.pageType===d.PageType.NAME,x=!!n.sidecar?.localizationResponse.isOriginalTitlePreferenceSet;return{addConstToList:{executeAddConstToList:(t,i)=>{let r=e.overrideRefTag??o([m.Cd.ADD,m.Cd.ITEMS]);return s({refMarkerString:r,pageAction:e.overrideAddPageAction??(c?`${I}-${i}`:I),customPageMetadata:{id:i}}),a({listId:t,constId:i,includeListItemMetadata:!!e.includeListItemMetadata,refTagQueryParam:r,originalTitleText:x,isInPace:l})},addConstToListResult:t},removeConstFromList:{executeRemoveConstFromList:(t,a)=>(s({refMarkerString:e.overrideRefTag??o([m.Cd.DELETE,m.Cd.ITEMS]),pageAction:e.overrideRemovePageAction??(c?`${h}-${a}`:h),customPageMetadata:{id:a}}),r({listId:t,constId:a})),removeConstFromListResult:i}}},E=r()`
    mutation AddConstToList(
        $listId: ID!
        $constId: ID!
        $includeListItemMetadata: Boolean!
        $refTagQueryParam: String
        $originalTitleText: Boolean
        $isInPace: Boolean! = false
    ) {
        addItemToList(
            input: { listId: $listId, item: { itemElementId: $constId } }
        ) {
            listId
            modifiedItem {
                ...EditListItemMetadata
                listItem @include(if: $includeListItemMetadata) {
                    ... on Title {
                        ...TitleListItemMetadata
                    }
                    ... on Name {
                        ...NameListItemMetadata
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
    }

    ${s.rc}
    ${l.Zz}
    ${o.E}
    ${n.w}
    ${c.X}
`,b=r()`
    mutation RemoveConstFromList($listId: ID!, $constId: ID!) {
        removeElementFromList(
            input: { listId: $listId, itemElementId: $constId }
        ) {
            listId
        }
    }
`}}]);