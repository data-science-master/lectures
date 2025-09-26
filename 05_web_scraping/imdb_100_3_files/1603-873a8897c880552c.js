"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1603],{94475:function(e,t,a){a.d(t,{G:function(){return d}});var i=a(52322),o=a(72779),r=a.n(o),s=a(2784),n=a(19596),l=a(88169),c=a(86704);let d=e=>{let{palette:{baseColor:t}}=(0,s.useContext)(l.ThemeContext),{title:a,message:o,className:n,action:c,displayType:d}=e;return(0,i.jsx)(g,{className:r()(n,t),baseColor:"none",children:(0,i.jsxs)("div",{className:"inner",children:[(0,i.jsx)("div",{className:"title",role:"alert",children:a}),!!e.message&&(0,i.jsx)("div",{className:"message",role:"alert",children:o}),!!c&&(0,i.jsx)("compact"===d?p:u,{children:c})]})})},p=n.default.div.withConfig({componentId:"sc-46b1addd-0"})(["margin-top:",";"],c.spacing.s),u=n.default.div.withConfig({componentId:"sc-46b1addd-1"})(["margin-top:",";"],c.spacing.l),g=(0,n.default)(l.PageSection).withConfig({componentId:"sc-46b1addd-2"})([".inner{max-width:480px;margin:0 auto;text-align:center;}.message{margin-top:",";}&.base{.title{",";}.message{",";}}&.baseColor{.title{",";}.message{",";}}"],c.spacing.m,(0,c.setPropertyToColorVar)("color","ipt-on-base-textPrimary-color"),(0,c.setPropertyToColorVar)("color","ipt-on-base-textSecondary-color"),(0,c.setPropertyToColorVar)("color","ipt-on-baseAlt-textPrimary-color"),(0,c.setPropertyToColorVar)("color","ipt-on-baseAlt-textSecondary-color"))},64072:function(e,t,a){a.d(t,{w:function(){return r}});var i=a(30382),o=a.n(i);let r=o()`
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
`},97149:function(e,t,a){a.d(t,{X:function(){return r}});var i=a(30382),o=a.n(i);let r=o()`
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
`},14342:function(e,t,a){a.d(t,{_q:function(){return x},ZP:function(){return L}});var i=a(52322),o=a(27722),r=a(72779),s=a.n(r),n=a(2784),l=a(9162),c=a(19596),d=a(11438),p=a(14438);let u={CREDIT_CHANGE:d.Cd.FILMOGRAPHY,"CONTACT_CHANGE|CONTACT__RELATIONSHIP_TYPE|REPRESENTATION":d.Cd.REPRESENTATION,EMPLOYMENT_CHANGE:d.Cd.EMPLOYMENT,"CONTACT_CHANGE|CONTACT__RELATIONSHIP_TYPE|CLIENT":d.Cd.CLIENTS,NEWS_ADDITION:d.Cd.NEWS},g={TRACK:"Track",TRACKING:"Tracking",IS_LOADING:"Loading"};var m=a(17503),T=a(11602);let f=()=>{let[e,t]=(0,m.Z)(T.Vc),a=async e=>t(e);return{success:e.data?.untrackConst?.success,error:e.error,fetching:e.fetching,updateUntrackingForConst:a}},C=()=>{let[e,t]=(0,m.Z)(T.qb),a=async e=>t(e);return{success:e.data?.trackConst?.success,error:e.error,fetching:e.fetching,updateTrackingForConst:a}},I=e=>{let[t,a]=(0,n.useState)(e),[i,o]=(0,n.useState)(!1),{updateTrackingForConst:r}=C(),{updateUntrackingForConst:s}=f(),l=async e=>{if(!1===e.isTracking&&!1!==t.isTracking){o(!0);let e=await s({input:{id:t.id}}),i={...t,isTracking:!1};e.data?.untrackConst?.success&&a(i),o(!1)}else if(!0===e.isTracking&&!1===t.isTracking){o(!0);let e=t.notificationPreferences?.map(e=>({...e,interested:!0})),i=await r({input:{id:t.id,notificationTypeStates:e?.map(e=>{let{interested:t,type:a}=e;return{typeId:a.typeId,interested:t}})}});i.data?.trackConst?.success&&a({...t,isTracking:!0,notificationPreferences:e}),o(!1)}else if(!0===e.isTracking&&e.notificationPreferences!==t.notificationPreferences){o(!0);let i={...t,isTracking:!0,notificationPreferences:t.notificationPreferences?.map(t=>{let a=t;return e.notificationPreferences?.map(e=>{e.type.typeId===t.type.typeId&&e.interested!==t.interested&&(a=e)}),a})},s=await r({input:{id:t.id,notificationTypeStates:i.notificationPreferences?.map(e=>({typeId:e.type.typeId,interested:e.interested}))}});s.data?.trackConst?.success&&a(i),o(!1)}},c=g.IS_LOADING,d=t.isTracking?g.TRACKING:g.TRACK;return{state:t,updateTracking:l,isFetching:i,ariaLabel:i?c:d}},h={TRACK:"Track",TRACKING:"Tracking",STOP_TRACKING:"Stop tracking"},b={track:"track",trackButton:"track-on",trackMenu:"track-menu-open"},x="protrackbutton--tracking--post-icon",E=e=>{let t,{id:a,data:r,buttonProps:c,buttonType:g="button",displayTrackOptionsMenu:m=!0,className:T}=e,f=(0,p.EO)(),{state:{isTracking:C,notificationPreferences:E},updateTracking:L,isFetching:_}=I({id:a,isTracking:r?.isTracking||!1,notificationPreferences:r?.notificationPreferences||[]}),[N,A]=(0,n.useState)(!1),S={className:s()(c?.className,m?void 0:T),onColor:void 0};switch(g){case"secondaryButton":t=o.SecondaryButton,S.onColor="accent2";break;case"textButton":t=o.TextButton,S.onColor="accent2";break;default:t=o.Button}let M={},v=m?P:n.Fragment;m&&(M.className=T);let R=()=>f({pageAction:`${b.trackButton}-${a}`,refMarkerSuffix:d.Cd.EMPTY}),O=()=>f({pageAction:b.trackMenu,refMarkerSuffix:d.Cd.EMPTY}),$=()=>f({pageAction:`${b.track}-${d.Cd.OFF}-${a}`,refMarkerSuffix:d.Cd.MENU}),V=(e,t)=>{let a=u[e],i=t?d.Cd.OFF:d.Cd.ON;f({pageAction:`${a}-${i}`,refMarkerSuffix:d.Cd.MENU})};return(0,i.jsxs)(v,{...M,children:[!!_&&(0,i.jsx)(t,{...c,...S,children:(0,i.jsx)(o.Loader,{})}),!_&&(0,i.jsx)(t,{onSelect:()=>{C?(O(),m?A(!N):L({isTracking:!1})):(R(),L({isTracking:!0}))},preIcon:C?"notifications-add-check":"notifications-add",postIcon:C&&m?"arrow":void 0,postIconClassName:C&&m?x:void 0,...c,...S,children:C?h.TRACKING:h.TRACK}),!!C&&!!m&&(0,i.jsx)(o.SetPalette,{palette:"light",children:(0,i.jsx)(y,{isVisible:N,mode:"absolute",expandFrom:"top-right",children:(0,i.jsx)(l.Y,{onEscapeKey:()=>A(!1),onClickOutside:()=>A(!1),children:(0,i.jsxs)(o.MenuList,{children:[E?.map(e=>{let{type:t,interested:a}=e;return i.jsx(k,{onClick:()=>{V(t.typeId,a),L({isTracking:!0,notificationPreferences:[{interested:!a,type:t}]})},preIconName:a?"checkbox-checked":"checkbox-unchecked",preIconProps:{name:a?"checkbox-checked":"checkbox-unchecked",spanClassName:"checkbox-icon"},children:t.text},t.text)}),(0,i.jsx)(o.MenuListDivider,{}),(0,i.jsx)(o.MenuListItem,{onClick:()=>{$(),A(!1),L({isTracking:!1})},children:h.STOP_TRACKING})]})})})})]})};var L=e=>(0,i.jsx)(d.xm,{value:d.Cd.TRACK,children:(0,i.jsx)(E,{...e})});let P=c.default.div.withConfig({componentId:"sc-57523aca-0"})(["position:relative;"]),k=(0,c.default)(o.MenuListItem).withConfig({componentId:"sc-57523aca-1"})([".checkbox-icon{","}"],(0,o.setPropertyToColorVar)("color","ipt-on-base-accent2-color")),y=(0,c.default)(o.Menu).withConfig({componentId:"sc-57523aca-2"})(["right:0;top:100%;"])},96557:function(e,t,a){a.d(t,{Z:function(){return U}});var i=a(52322),o=a(14973),r=a(30382),s=a.n(r),n=a(2784),l=a(53665),c=a(19596),d=a(88169),p=a(86704),u=a(31885),g=a(20608),m=a(84314),T=a(49666),f=a(49996),C=a(4363),I=a(66724),h=a(11438),b=a(37179),x=a(6935),E=a(14438),L=a(1833),P=a(94475),k=a(67353),y=a(22619),_=a(25436),N=a(75824),A=a(75808);let S=s()`
    fragment AddConstToListMenuItem on List {
        id
        name {
            originalText
        }
    }
`,M=e=>{let{value:t}=(0,h.Lz)(),{listMainLinkBuilder:a}=(0,I.WOb)(),{palette:{baseColor:o}}=(0,n.useContext)(d.ThemeContext),{constId:r,onError:s}=e,{pageType:l}=(0,f.y)(),c=(0,T.ik)()&&l===_.PageType.NAME,p=e.listData.id,u=e.listData.name?.originalText||"",g=(0,N.N)({id:"addConstToListMenuItem_goToList_ariaLabel",defaultMessage:"Go to list: {listTitle}"},{listTitle:u}),m=(0,N.N)({id:"user_your_checkins",defaultMessage:"Your Check-Ins"}),[C,b]=(0,n.useState)(e.isElementInList),{addConstToList:x,removeConstFromList:E}=(0,A.j8)({overrideRefTag:c?t+`_${p}`:t}),{addToWatchedTitles:L}=(0,y.V)(),{executeAddConstToList:P,addConstToListResult:S}=x,{executeRemoveConstFromList:M,removeConstFromListResult:v}=E,R=S?.error||v?.error,D=()=>{C?(M(p,r),b(!1)):(P(p,r),b(!0),"CHECK_INS"===e.listClass&&L(r))};return R?(s(R),null):(0,i.jsxs)(O,{children:[(0,i.jsxs)($,{onClick:D,onKeyDown:e=>{(0,k.isEnterOrSpaceKey)(e)&&D()},role:"button",tabIndex:0,"data-titleinlist":C,className:o,children:[!!C&&(0,i.jsx)(j,{name:"playlist-add-check",className:o}),!C&&(0,i.jsx)(V,{name:"add"}),"CHECK_INS"===e.listClass?m:u]}),(0,i.jsx)(w,{href:a({lsconst:p,refSuffix:h.Cd.EMPTY}),"aria-label":g,className:o,children:(0,i.jsx)(d.Icon,{name:"chevron-right"})})]})};M.fragments={addConstToListMenuItem:S};let v=`
    &:focus {
        ${(0,p.focusOnBaseAlt)()}
    }

    &:hover {
        background: rgba(
            ${(0,p.getColorVarValue)("ipt-on-baseAlt-rgb")},
            ${(0,p.getColorVarValue)("ipt-baseAlt-hover-opacity")}
        );
        background: rgba(
            ${(0,p.getColorVar)("ipt-on-baseAlt-rgb")},
            ${(0,p.getColorVar)("ipt-baseAlt-hover-opacity")}
        );
    }

    &:active {
        background: rgba(
            ${(0,p.getColorVarValue)("ipt-on-baseAlt-rgb")},
            ${(0,p.getColorVarValue)("ipt-baseAlt-pressed-opacity")}
        );
        background: rgba(
            ${(0,p.getColorVar)("ipt-on-baseAlt-rgb")},
            ${(0,p.getColorVar)("ipt-baseAlt-pressed-opacity")}
        );
    }
`,R=`
    &:focus {
        ${(0,p.focusOnBase)()}
    }

    &:hover {
        background: rgba(
            ${(0,p.getColorVarValue)("ipt-on-base-rgb")},
            ${(0,p.getColorVarValue)("ipt-base-hover-opacity")}
        );
        background: rgba(
            ${(0,p.getColorVar)("ipt-on-base-rgb")},
            ${(0,p.getColorVar)("ipt-base-hover-opacity")}
        );
    }

    &:active {
        background: rgba(
            ${(0,p.getColorVarValue)("ipt-on-base-rgb")},
            ${(0,p.getColorVarValue)("ipt-base-pressed-opacity")}
        );
        background: rgba(
            ${(0,p.getColorVar)("ipt-on-base-rgb")},
            ${(0,p.getColorVar)("ipt-base-pressed-opacity")}
        );
    }
`,O=c.default.div.withConfig({componentId:"sc-ad2b51b3-0"})(["display:flex;align-items:center;width:100%;"]),$=c.default.div.withConfig({componentId:"sc-ad2b51b3-1"})(["flex-grow:1;cursor:pointer;padding:0.75rem 1rem 0.75rem 0.75rem;position:relative;text-overflow:ellipsis;overflow:hidden;word-break:break-all;white-space:nowrap;&::after{position:absolute;content:'';right:0;top:20%;height:60%;width:1px;}&.base::after{","}&.baseAlt::after{","}"],(0,p.setPropertyToColorVar)("background-color","ipt-base-border-color"),(0,p.setPropertyToColorVar)("background-color","ipt-baseAlt-border-color")),V=(0,c.default)(d.Icon).withConfig({componentId:"sc-ad2b51b3-2"})(["margin-right:0.5rem;"]),j=(0,c.default)(V).withConfig({componentId:"sc-ad2b51b3-3"})(["&.base{","}&.baseAlt{","}"],(0,p.setPropertyToColorVar)("color","ipt-on-base-accent4-color"),(0,p.setPropertyToColorVar)("color","ipt-on-baseAlt-accent4-color")),w=c.default.a.withConfig({componentId:"sc-ad2b51b3-4"})(["padding:0.75rem 1rem;flex-shrink:0;&.base{"," ","}&.baseAlt{"," ","}"],(0,p.setPropertyToColorVar)("color","ipt-on-base-textHint-color"),R,(0,p.setPropertyToColorVar)("color","ipt-on-baseAlt-textHint-color"),v),D={PROMPT_TITLE:{id:"common_add_to_list_buttonText",defaultMessage:"Add to list"},CREATE_LIST:{id:"addConstToListPrompt_label_createList",defaultMessage:"Create new list"},ERROR_TITLE:{id:"error_emptyStates_addConstToList_title",defaultMessage:"There was a problem. Please try again."},VIEW_WATCHLIST:{id:"common_label_viewWatchlist",defaultMessage:"View Watchlist"},SIGNED_OUT_ERROR_TITLE:{id:"error_signedOut_addConstToList_title",defaultMessage:"Sign in to create or view a list."},CLOSE_PROMPT_LABEL:{id:"common_ariaLabel_closePrompt",defaultMessage:"Close Prompt"},NO_LISTS_FOUND:{id:"addConstToListPrompt_no_lists_found",defaultMessage:"No lists found"}},W={LOADER:"actlp-loader",ERROR:"actlp-error",CREATE_LIST:"actlp-creat-list",VIEW_WATCHLIST:"actlp-watchlist",NO_LIST:"actlp-no-list"},H="addConstToListPrompt__panel",B=s()`
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
    ${M.fragments.addConstToListMenuItem}
`,G={hasNextPage:!0,listItems:[],endCursor:null},K=e=>{let t,a;let{isOpen:r,onClose:s,primaryImage:c,primaryText:p,imageType:P}=e,k=c?.caption?.plainText||"",y=(0,m.n)(),_=(0,T.ik)(),N=(0,l.Z)(),{makeRefMarker:A}=(0,h.Lz)(),{listCreateLinkBuilder:S,listWatchlistLinkBuilder:v,registrationSignInLinkBuilder:R}=(0,I.WOb)(),{pageType:O,pageConst:$}=(0,f.y)(),V=e.constId||$,j=V?.startsWith("tt"),w=V?.startsWith("nm"),K=_?[u.JQJ.ProList]:[u.JQJ.CheckIns,u.JQJ.List],U=(0,E.EO)(),J="poster";j&&(t=u.lZo.Titles),w&&(t=u.lZo.People,J="avatar");let[Q,z]=(0,n.useState)(G),[X]=(0,C.E)({query:B,requestPolicy:"network-only",variables:{constId:V,count:100,after:Q.endCursor,listElementType:t,classTypes:K},context:{serverSideCacheable:!1,personalized:!0},pause:!r||!y||!V}),[ee,et]=(0,n.useState)(void 0),ea=X.fetching,ei=X.error||ee,eo=X.data?.lists?.total,er=O&&V?(0,i.jsx)(d.TextLink,{href:R({refSuffix:[h.Cd.LIST,h.Cd.MENU],query:{u:`/${O}/${V}/`}}),text:N.formatMessage(D.SIGNED_OUT_ERROR_TITLE)}):null,es=N.formatMessage(D.ERROR_TITLE);(0,n.useEffect)(()=>{r&&!ea&&X.data?.lists&&Q.hasNextPage&&z({listItems:X.data?.lists?.edges?Q.listItems.concat(X.data.lists.edges):Q.listItems,hasNextPage:X.data?.lists?.pageInfo?.hasNextPage,endCursor:X.data?.lists?.pageInfo?.endCursor})},[Q.hasNextPage,X.data]),(0,n.useEffect)(()=>{if(r){U({pageAction:b.QJ.ADD_TO_LIST_OPEN,hitType:o.HitType.POP_UP,refMarkerSuffix:h.Cd.EMPTY});return}z({...G})},[r]);let en=!ei&&r&&y&&eo!==Q.listItems.length;return(0,i.jsxs)(F,{"data-testid":"styled-list-prompt",isOpen:r,onCloseClicked:()=>{s(),U({pageAction:b.QJ.ADD_TO_LIST_CLOSE,hitType:o.HitType.POP_UP,refMarkerSuffix:h.Cd.EMPTY})},panelClassName:H,baseColor:_?"base":"baseAlt",header:(0,i.jsx)(Y,{type:J,subtitle:p,reverseTitleOrder:!0,title:N.formatMessage(D.PROMPT_TITLE),ariaLabel:k,imageModel:(0,x.K0)(c,k),imageType:P}),closePromptLabel:N.formatMessage(D.CLOSE_PROMPT_LABEL),children:[y?(0,i.jsxs)(d.MenuList,{children:[!!j&&!_&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.MenuListItem,{className:W.VIEW_WATCHLIST,href:v({refSuffix:h.Cd.WATCHLIST}),postIconName:"chevron-right",children:(0,i.jsx)(g.q,{...D.VIEW_WATCHLIST})}),(0,i.jsx)(d.MenuListDivider,{})]}),(0,i.jsx)(d.MenuListItem,{className:W.CREATE_LIST,href:_?(0,L.Ae)(`${L.Wr}/list/`,A(h.Cd.NEW),{}):S({refSuffix:h.Cd.NEW}),target:_?"_blank":void 0,postIconName:_?"launch":"chevron-right",children:(0,i.jsx)(g.q,{...D.CREATE_LIST})}),(0,i.jsx)(d.MenuListDivider,{}),!!ei&&(0,i.jsx)(Z,{className:W.ERROR,title:(a=ee,a?.graphQLErrors[0]?.extensions?.code==="FORBIDDEN")?er:es}),!en&&0===Q.listItems.length&&(0,i.jsx)(Z,{className:W.NO_LIST,title:(0,i.jsx)(g.q,{...D.NO_LISTS_FOUND})}),!ei&&!!V&&Q.listItems.map(e=>(0,i.jsx)(M,{listData:e.node,listClass:e.node?.listClass?.id,isElementInList:e.node.isElementInList||!1,constId:V,onError:et},e.node.id))]}):(0,i.jsx)(Z,{className:W.ERROR,title:er}),!!en&&(0,i.jsx)(q,{"data-testid":W.LOADER,children:(0,i.jsx)(d.Loader,{})})]})},F=(0,c.default)(d.Prompt).withConfig({componentId:"sc-c36b4240-0"})([".","{padding:0;",";min-height:18rem;}"],H,(0,p.setPropertyToShapeVar)("border-radius","ipt-cornerRadius")),Y=(0,c.default)(d.PromptHeader).withConfig({componentId:"sc-c36b4240-1"})([""," ",""],(0,p.setPropertyToShapeVar)("border-top-left-radius","ipt-cornerRadius"),(0,p.setPropertyToShapeVar)("border-top-right-radius","ipt-cornerRadius")),Z=(0,c.default)(P.G).withConfig({componentId:"sc-c36b4240-2"})([""," background:initial;min-height:7rem;padding:3rem;"],(0,p.setTypographyType)("body")),q=c.default.div.withConfig({componentId:"sc-c36b4240-3"})(["display:flex;min-height:7rem;justify-content:center;padding:3rem;"]);var U=e=>(0,i.jsx)(h.xm,{value:h.Cd.LIST,children:(0,i.jsx)(K,{...e})})},75808:function(e,t,a){a.d(t,{j8:function(){return b}});var i=a(30382),o=a.n(i),r=a(64072),s=a(88758),n=a(80032),l=a(36543),c=a(97149),d=a(25436),p=a(48687),u=a(86958),g=a(49666),m=a(11438),T=a(14438),f=a(83163),C=a(17503);let I="list-item-add",h="list-item-delete",b=e=>{let[t,a]=(0,C.Z)(x),[i,o]=(0,C.Z)(E),r=(0,u.B)().context,{makeRefMarker:s}=(0,m.Lz)(),n=(0,T.EO)(),l=(0,p.hg)({weblabID:f.lh.IMDB_WEB_PACE_CREDITS_1201882,treatments:{T1:!0}}),c=(0,g.ik)()&&r.pageType===d.PageType.NAME,b=!!r.sidecar?.localizationResponse.isOriginalTitlePreferenceSet;return{addConstToList:{executeAddConstToList:(t,i)=>{let o=e.overrideRefTag??s([m.Cd.ADD,m.Cd.ITEMS]);return n({refMarkerString:o,pageAction:e.overrideAddPageAction??(c?`${I}-${i}`:I),customPageMetadata:{id:i}}),a({listId:t,constId:i,includeListItemMetadata:!!e.includeListItemMetadata,refTagQueryParam:o,originalTitleText:b,isInPace:l})},addConstToListResult:t},removeConstFromList:{executeRemoveConstFromList:(t,a)=>(n({refMarkerString:e.overrideRefTag??s([m.Cd.DELETE,m.Cd.ITEMS]),pageAction:e.overrideRemovePageAction??(c?`${h}-${a}`:h),customPageMetadata:{id:a}}),o({listId:t,constId:a})),removeConstFromListResult:i}}},x=o()`
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

    ${n.rc}
    ${l.Zz}
    ${s.E}
    ${r.w}
    ${c.X}
`,E=o()`
    mutation RemoveConstFromList($listId: ID!, $constId: ID!) {
        removeElementFromList(
            input: { listId: $listId, itemElementId: $constId }
        ) {
            listId
        }
    }
`}}]);