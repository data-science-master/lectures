"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9378],{46982:function(e,t,i){var n=i(52322),r=i(30382),a=i.n(r);i(2784);var s=i(53665),o=i(19596),l=i(45103),d=i(91842),u=i(31885),c=i(86958),f=i(66724),p=i(11438),g=i(47708),m=i(30952),h=i(3322),x=i(96459);let I=a()`
    fragment ListPreviewCard on List {
        id
        lastModifiedDate
        createdDate
        name {
            originalText
        }
        listType {
            id
        }
        primaryImage {
            image {
                url
                height
                width
                caption {
                    plainText
                }
            }
        }
        items(first: 0) {
            total
        }
    }
`,_=e=>{let t,{listData:i,id:r,useLastModifiedDate:a,className:o,index:l}=e,d=(0,s.Z)(),I=(0,c.B)().context,{listMainLinkBuilder:_,pollSingleLinkBuilder:v,userRatingsLinkBuilder:j}=(0,f.WO)();if(!i)return null;if(T(i)){let e=a?i.lastModifiedDate:i.createdDate,r=a?m.QH:m.Ks,s=m.wK[i.listType?.id||u.lZo.Lists];t={linkText:i.name?.originalText,linkHref:b(i)?j({urconst:I.sidecar?.account.userId??"",refSuffix:{t:p.Cd.EMPTY,n:l}}):_({lsconst:i.id,refSuffix:{t:p.Cd.EMPTY,n:l}}),defaultCaptionString:m.vk,subtext:(0,n.jsx)(x.l,{displayDate:e,displayDateStringId:r,itemCount:i.items?.total,itemType:s})}}else t={linkText:i.question?.originalText?.plainText||void 0,linkHref:v({pconst:i.id,refSuffix:{t:p.Cd.EMPTY,n:l}}),defaultCaptionString:m.qq};if(!t)return null;let w=i?.primaryImage?.image,L=w?.caption?.plainText||d.formatMessage(t.defaultCaptionString);return(0,n.jsx)(h.Ok,{borderType:"line",className:o,"data-testid":`ListPreviewCard-${r}`,children:(0,n.jsx)(h.dy,{href:t.linkHref,"data-testid":"preview-list-card-link",children:(0,n.jsxs)(h.CC,{children:[(0,n.jsxs)(h.lU,{subtext:!!t.subtext,children:[(0,n.jsx)(h.Gv,{className:"listName",children:t.linkText}),t.subtext]}),(0,n.jsx)(y,{children:(0,n.jsx)(C,{className:"poster",size:"xs",imageModel:w&&w.url&&w.height&&w.width?{url:w.url,maxHeight:w.height,maxWidth:w.width,caption:L}:void 0,imageType:T(i)?(0,g.i)(i?.listType?.id):"none"})})]})})})},b=e=>"RATINGS"===e.id,T=e=>void 0!==e.listType,y=o.default.div.withConfig({componentId:"sc-a5655564-0"})(["padding:",";"],d.spacing.xxs),C=(0,o.default)(l.PosterImage).withConfig({componentId:"sc-a5655564-1"})(["height:100%;"]);_.fragments={listPreviewCard:I},t.ZP=_},96568:function(e,t,i){i.d(t,{F0:function(){return l}}),i(52322);var n=i(30382),r=i.n(n);i(2784);var a=i(19596),s=i(45103),o=i(91842);i(66724),i(30952),i(3322);let l=r()`
    fragment PollPreviewCard on Poll {
        id
        question {
            originalText {
                plainText
            }
        }
        primaryImage {
            image {
                url
                height
                width
                caption {
                    plainText
                }
            }
        }
    }
`;a.styled.div.withConfig({componentId:"sc-4b085143-0"})(["padding:",";"],o.spacing.xxs),(0,a.styled)(s.PosterImage).withConfig({componentId:"sc-4b085143-1"})(["height:100%;"])},3322:function(e,t,i){i.d(t,{CC:function(){return u},Gv:function(){return c},Ok:function(){return l},dy:function(){return d},lU:function(){return o}});var n=i(19596),r=i(45103),a=i(91842),s=i(95441);let o=n.default.div.withConfig({componentId:"sc-7739a3e5-0"})(["display:flex;overflow:hidden;flex-direction:column;justify-content:",";padding:"," ",";"],e=>e.subtext?"space-between":"center",a.spacing.s,a.spacing.m),l=(0,n.default)(r.ListCard).withConfig({componentId:"sc-7739a3e5-1"})(["margin-bottom:",";padding:0;",";"],a.spacing.xs,(0,a.setPropertyToShapeVar)("border-radius","ipt-mediaRadius")),d=n.default.a.withConfig({componentId:"sc-7739a3e5-2"})(["text-decoration:none;color:inherit;&:hover .poster{opacity:0.8;}&:hover .listName{text-decoration:underline;}"]),u=n.default.div.withConfig({componentId:"sc-7739a3e5-3"})(["display:flex;justify-content:space-between;height:calc(6rem + ",");","{height:calc(5.75rem + 2px);}","{height:calc(5.75rem + 2px);}"],a.spacing.xxs,a.mediaQueries.breakpoints.only.s,a.mediaQueries.breakpoints.above.xl),c=n.default.div.withConfig({componentId:"sc-7739a3e5-4"})(["",";",";word-wrap:break-word;"],(0,a.setTypographyType)("bodySmall"),(0,s.S)(2))},96459:function(e,t,i){i.d(t,{l:function(){return u}});var n=i(52322);i(2784);var r=i(53665),a=i(19596),s=i(91842),o=i(20608),l=i(27513),d=i(30952);let u=e=>{let{displayDateStringId:t,displayDate:i,itemCount:a,itemType:s,fallbackMessage:u}=e,p=(0,r.Z)();if(!a&&!i&&!u)return null;let g=!!a,m=d.Pm[s];return(0,n.jsxs)(c,{children:[!i&&!a&&!!u&&p.formatMessage(u),!!i&&(0,n.jsx)("span",{children:(0,n.jsx)(o.q,{...t,values:{duration:function(e,t){let i=new Date;return i<new Date(t)?(0,l.dR)(e,i.toISOString(),t):(0,l.dR)(e,t)}(p,i)}})}),!!i&&!!g&&(0,n.jsx)(f,{children:"\xa0•\xa0"}),!!g&&(0,n.jsx)("span",{children:(0,n.jsx)(o.q,{...m,values:{count:a}})})]})},c=a.default.div.withConfig({componentId:"sc-acbe4156-0"})(["display:flex;flex-direction:column;","{flex-direction:row;}","{flex-direction:row;}"," ",""],s.mediaQueries.breakpoints.only.s,s.mediaQueries.breakpoints.above.xl,(0,s.setTypographyType)("copyright"),(0,s.setPropertyToColorVar)("color","ipt-on-base-textSecondary-color")),f=a.default.span.withConfig({componentId:"sc-acbe4156-1"})(["display:none;","{display:initial;}","{display:initial;}"],s.mediaQueries.breakpoints.only.s,s.mediaQueries.breakpoints.above.xl)},30952:function(e,t,i){var n,r;i.d(t,{JP:function(){return s},Ks:function(){return u},Pm:function(){return f},QH:function(){return d},Vy:function(){return c},oe:function(){return a},qq:function(){return o},vk:function(){return l},wK:function(){return n}});let a="RATINGS",s={id:"user_your_ratings",defaultMessage:"Your Ratings"},o={id:"pollPreviewCard_caption_default",defaultMessage:"View the full poll"},l={id:"listPreviewCard_caption_default",defaultMessage:"View the full list"},d={id:"listPreviewCard_last_modified",defaultMessage:"updated {duration} ago"},u={id:"listPreviewCard_created",defaultMessage:"created {duration} ago"},c={id:"export_expires_in",defaultMessage:"Expires in {duration}"};(r=n||(n={})).GALLERIES="GALLERIES",r.IMAGES="IMAGES",r.LISTS="LISTS",r.PEOPLE="PEOPLE",r.THEATRES="THEATRES",r.TITLES="TITLES",r.VIDEOS="VIDEOS";let f={GALLERIES:{id:"listPreviewCard_type_gallery",defaultMessage:"{count, plural, one {1 gallery} other {{count} galleries}}"},IMAGES:{id:"listPreviewCard_type_image",defaultMessage:"{count, plural, one {1 image} other {{count} images}}"},LISTS:{id:"listPreviewCard_type_list",defaultMessage:"{count, plural, one {1 list} other {{count} lists}}"},PEOPLE:{id:"listPreviewCard_type_person",defaultMessage:"{count, plural, one {1 person} other {{count} people}}"},THEATRES:{id:"listPreviewCard_type_theater",defaultMessage:"{count, plural, one {1 theater} other {{count} theaters}}"},TITLES:{id:"listPreviewCard_type_title",defaultMessage:"{count, plural, one {1 title} other {{count} titles}}"},VIDEOS:{id:"listPreviewCard_type_video",defaultMessage:"{count, plural, one {1 video} other {{count} videos}}"}}},25749:function(e,t,i){i.d(t,{w:function(){return l}});var n=i(52322);i(2784);var r=i(19596),a=i(45103),s=i(91842),o=i(46982);let l=e=>{let t,{id:i,listData:r,title:s,subTitle:o,titleButtonHref:l,buttonConfig:g,useLastModifiedDate:m}=e,h=Math.ceil(r.length/2),x=r.filter((e,t)=>t<h),I=r.filter((e,t)=>t>=h);g&&(t=(0,n.jsx)("span",{children:(0,n.jsx)(c,{"data-testid":`SidebarList-button-${i}`,preIcon:g.preIcon,ariaLabel:g.label,href:g.href,onColor:"textPrimary",onSelect:g.onClick,onKeyDown:g.onKeyDown,children:g.label})}));let _=l?(0,n.jsx)(a.Title,{href:l,description:o,"data-testid":`SidebarList-title-${i}`,children:s}):(0,n.jsx)(a.Title,{description:o,"data-testid":`SidebarList-title-${i}`,children:s});return(0,n.jsxs)("div",{"data-testid":`SidebarList-${i}`,children:[(0,n.jsxs)(u,{children:[!!s&&_,t]}),(0,n.jsxs)(f,{children:[(0,n.jsx)(p,{"data-testid":`firstListCardGroup-${i}`,children:x.map((e,t)=>(0,n.jsx)(d,{listData:e.node,id:i,useLastModifiedDate:m,index:t+1},`sidebar-list-item-${t}`))}),(0,n.jsx)(p,{"data-testid":`secondListCardGroup-${i}`,children:I.map((e,t)=>(0,n.jsx)(d,{listData:e.node,id:i,useLastModifiedDate:m,index:t+1+h},`sidebar-list-item-${t+h}`))})]})]})},d=(0,r.default)(o.ZP).withConfig({componentId:"sc-b63bff1-0"})([""]),u=r.default.div.withConfig({componentId:"sc-b63bff1-1"})(["display:flex;justify-content:space-between;flex-direction:column;","{flex-direction:row;}","{flex-direction:column;}"],s.mediaQueries.breakpoints.above.s,s.mediaQueries.breakpoints.above.l),c=(0,r.default)(a.TextButton).withConfig({componentId:"sc-b63bff1-2"})(["justify-content:flex-start;margin:-"," "," "," ",";","{margin-top:-",";}","{margin-top:-",";}"],s.spacing.s,(0,s.getSpacingVar)("ipt-pageMargin"),s.spacing.xs,(0,s.getSpacingVar)("ipt-pageMargin"),s.mediaQueries.breakpoints.above.s,s.spacing.xxs,s.mediaQueries.breakpoints.above.l,s.spacing.s),f=r.default.div.withConfig({componentId:"sc-b63bff1-3"})(["","{display:flex;}"],s.mediaQueries.breakpoints.only.m),p=r.default.div.withConfig({componentId:"sc-b63bff1-4"})(["flex:1;min-width:0;margin-bottom:",";","{&:first-of-type{",";margin-right:",";}&:last-of-type{margin-left:",";",";}","{margin-left:0;margin-right:0;}}"],s.spacing.xs,s.mediaQueries.breakpoints.only.m,(0,s.setPropertyToSpacingVar)("margin-left","ipt-pageMargin"),s.spacing.xs,s.spacing.xs,(0,s.setPropertyToSpacingVar)("margin-right","ipt-pageMargin"),d)},69378:function(e,t,i){i.d(t,{z:function(){return w}});var n=i(52322),r=i(66898);i(2784);var a=i(19596),s=i(45103),o=i(80380),l=i(29914),d=i(82453),u=i(54588),c=i(49666),f=i(7771),p=i(91023),g=i(91842),m=i(47521),h=i(55129),x=i(22431),I=i(20608),_=i(29267),b=i(52866);let T=e=>{let{mainColumn:t,sidebar:i,onlyShowInline40OnDesktop:r,hideDefaultSidebarHeading:a}=e,o=(0,c.ik)();return(0,n.jsx)(s.PageContentContainer,{children:(0,n.jsx)(y,{baseColor:"base",children:(0,n.jsxs)(s.PageGrid,{gutterBias:i?"left":"center",children:[(0,n.jsx)(s.PageGrid.Item,{span:i?2:3,children:(0,n.jsx)(C,{children:t})}),!!i&&(0,n.jsx)(s.PageGrid.Item,{span:1,children:(0,n.jsxs)(_._,{"data-test-id":b.z.RIGHT_RAIL_CONTENT_BLOCK,children:[!o&&(0,n.jsx)(n.Fragment,{children:r?(0,n.jsx)(h.QW,{onlyShowAtLargePlusBreakpoints:!0,name:x.A.INLINE40,nasConfig:{classNames:[x.A.INLINE40_SIDEBAR]}}):(0,n.jsx)(h.En,{name:x.A.INLINE40,nasConfig:{classNames:[x.A.INLINE40_SIDEBAR]}})}),(0,n.jsxs)(v,{className:b.z.RIGHT_RAIL_MORE_TO_EXPLORE,children:[!a&&(0,n.jsx)(s.SectionTitle,{"data-testid":"btf-wrapper-sb-head",children:(0,n.jsx)(I.q,{id:"common_more_to_explore",defaultMessage:"More to explore"})}),(0,n.jsx)(j,{children:i})]})]})})]})})})},y=(0,a.default)(s.PageBackground).withConfig({componentId:"sc-9a62bc2-0"})(["min-height:50vh;overflow-x:clip;position:relative;"]),C=a.default.div.withConfig({componentId:"sc-9a62bc2-1"})(["position:relative;"]),v=a.default.div.withConfig({componentId:"sc-9a62bc2-2"})(["height:100%;margin:0 0 var(--ipc-pageSection-bottomMargin);padding:"," 0;"],g.spacing.l),j=a.default.div.withConfig({componentId:"sc-9a62bc2-3"})([""," height:100%;padding-top:",";position:relative;.sidebar-intersection{margin-bottom:-3rem;}"],m.n,g.spacing.xs),w=e=>{let{aboveTheFold:t,belowTheFold:{mainColumn:i,sidebar:a},bottomGroup:s,useLightATFBackground:g,onlyShowInline40OnDesktop:m,hideDefaultSidebarHeading:h}=e,x=(0,c.ik)();return(0,n.jsxs)(d.ZP,{children:[!x&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{}),(0,n.jsx)(l.Z,{})]}),(0,n.jsxs)(L,{baseColor:"base",children:[(0,n.jsx)(u.Z,{parent:"TwoColumnPageLayout",name:"ATFWrapper",errorMessageType:"inline",children:(0,n.jsx)(p.Ql,{useLightATFBackground:g,children:t})}),(0,f.YN)(),(0,n.jsx)(r.CSAPageATFScript,{}),(0,n.jsx)(u.Z,{parent:"TwoColumnPageLayout",name:"BTFWrapper",errorMessageType:"inline",children:(0,n.jsx)(T,{mainColumn:(0,n.jsx)(u.Z,{parent:"TwoColumnPageLayout",name:"BTFWrapper.mainColumn",errorMessageType:"inline",children:i}),sidebar:a?(0,n.jsx)(u.Z,{parent:"TwoColumnPageLayout",name:"BTFWrapper.sidebar",errorMessageType:"inline",children:a}):void 0,onlyShowInline40OnDesktop:m,hideDefaultSidebarHeading:h})})]}),s]})},L=(0,a.default)(s.PageBackground).withConfig({componentId:"sc-abcc9be3-0"})(["position:relative;"])},91023:function(e,t,i){i.d(t,{Ql:function(){return T},M8:function(){return _}});var n=i(52322),r=i(72779),a=i.n(r);i(2784);var s=i(19596),o=i(45103),l=i(91842),d=i(86857),u=i(55129),c=i(22431),f=i(85843),p=i(21768),g=i(49666),m=i(57324),h=i(361);let x=(0,s.default)(h.Z).withConfig({componentId:"sc-cfbc1d3-0"})(["min-height:auto;margin:0 auto;background:rgba(var(--ipt-accent3-rgb),0.5);color:var(--ipt-on-accent3-color);height:100%;"]),I={theme:f.e.DARK},_="atf-background-theme-light",b="atf-background-theme-dark",T=e=>{let{children:t,useLightATFBackground:i}=e,r=(0,g.ik)();return(0,n.jsxs)(y,{baseColor:"baseAlt","data-testid":"atf-wrapper-bg",className:a()({[b]:!i,[_]:i}),children:[!r&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.z,{}),(0,n.jsx)(o.PageBackground,{baseColor:"baseAlt",className:p.R,children:(0,n.jsx)(o.PageContentContainer,{children:(0,n.jsx)(u.ZP,{name:c.A.INLINE20,nasConfig:I})})})]}),(0,n.jsxs)(C,{children:[(0,n.jsx)(x,{slotName:m.B.TOP_1}),(0,n.jsx)(x,{slotName:m.B.TOP_2}),(0,n.jsx)(x,{slotName:m.B.TOP_3})]}),(0,n.jsx)(o.SetPalette,{palette:i?"light":"dark",children:t})]})},y=(0,s.default)(o.PageBackground).withConfig({componentId:"sc-b89529f5-0"})(["&.","{","}&.","{","}"],b,(0,l.setPropertyToColorVar)("background","ipt-baseAlt-shade1-bg"),_,(0,l.setPropertyToColorVar)("background","ipt-base-shade2-bg")),C=(0,s.default)(o.PageContentContainer).withConfig({componentId:"sc-b89529f5-1"})(["position:relative;"])},52866:function(e,t,i){i.d(t,{z:function(){return n}});let n={INLINE_40_SMALL:"inline40-small",INLINE_40_LARGE:"inline40-large",INLINE_50_SMALL:"inline50-small",INLINE_50_LARGE:"inline50-large",INLINE_60_SMALL:"inline60-small",INLINE_60_LARGE:"inline60-large",INLINE_80_SMALL:"inline80-small",INLINE_80_LARGE:"inline80-large",PRIMARY_COLUMN_GROUP:"primary-column",RIGHT_RAIL_MORE_TO_EXPLORE:"right-rail-more-to-explore",RIGHT_RAIL_CONTENT_BLOCK:"right-rail-content-block"}},361:function(e,t,i){var n=i(52322);i(2784);var r=i(46163),a=i(88854),s=i(23665),o=i(73013);t.Z=e=>{let{className:t,...i}=e,l=(0,o.S)(),{isDebug:d}=(0,a.kp)();return l[i.slotName]||d?(0,n.jsx)(r.PageSection,{className:t,baseColor:"none",topPadding:"none",bottomPadding:"none",children:(0,n.jsx)(s.Z,{...i})}):null}},80592:function(e,t,i){i.d(t,{Z:function(){return l}});var n=i(52322);i(2784);var r=i(19596),a=i(91842),s=i(88959),o=i(361);function l(e){return(0,n.jsx)(d,{displayType:s.FO.SIDE,...e})}let d=(0,r.default)(o.Z).withConfig({componentId:"sc-17ea8dd1-0"})([""," "," margin-top:0;margin-bottom:0;"],(0,a.setPropertyToSpacingVar)("margin-left","ipt-pageMargin"),(0,a.setPropertyToSpacingVar)("margin-right","ipt-pageMargin"))},57324:function(e,t,i){i.d(t,{B:function(){return n}});let n={BOTTOM_1:"bottom-1",BOTTOM_2:"bottom-2",CENTER_2:"center-2",CENTER_3:"center-3",CENTER_7:"center-7",CENTER_8:"center-8",CENTER_19:"center-19",CENTER_20:"center-20",PRO_RIGHT_1:"pro-right-1",RIGHT_3:"right-3",RIGHT_5:"right-5",RIGHT_7:"right-7",TOP_1:"top-1",TOP_2:"top-2",TOP_3:"top-3"}},15597:function(e,t,i){var n=i(52322),r=i(14865);i(2784);var a=i(31885),s=i(49996),o=i(55634),l=i(38129),d=i(11438),u=i(93184),c=i(58656),f=i(82951);let p=e=>{let{pageConst:t}=(0,s.y)();return(0,n.jsx)(f.i,{id:"editorial",titleString:u.jX,subtitleString:u.Ug,showCreateListLink:!1,useLastModifiedDate:!0,queryOptions:{query:c.nm,variables:{itemId:t,topListType:a.Qrb.Editorial,first:u.in},context:{serverSideCacheable:!0,personalized:!1},pause:(0,r.getIsNode)()},queryTransform:e=>e.topListsForItem.edges,...e})};t.Z=e=>(0,n.jsx)(d.xm,{value:d.Cd.EDITORIAL_LIST,children:(0,n.jsx)(l.Lz,{componentId:o.NG.EditorialLists,children:(0,n.jsx)(p,{...e})})})},21836:function(e,t,i){var n=i(52322),r=i(14865);i(2784);var a=i(31885),s=i(49996),o=i(55634),l=i(38129),d=i(66724),u=i(11438),c=i(93184),f=i(58656),p=i(82951);let g=e=>{let{pageConst:t=""}=(0,s.y)(),{listsRelatedLinkBuilder:i}=(0,d.WO)();return(0,n.jsx)(p.i,{id:"user",titleString:c.Y3,titleHref:i({const:t,refSuffix:u.Cd.SEE_MORE}),subtitleString:c.T4,showCreateListLink:!0,useLastModifiedDate:!1,queryOptions:{query:f.nm,variables:{itemId:t,topListType:a.Qrb.All,first:c.in},context:{serverSideCacheable:!0,personalized:!1},pause:(0,r.getIsNode)()},queryTransform:e=>e.topListsForItem.edges,...e})};t.Z=e=>(0,n.jsx)(u.xm,{value:u.Cd.USER_LISTS,children:(0,n.jsx)(l.Lz,{componentId:o.NG.UserLists,children:(0,n.jsx)(g,{...e})})})},96033:function(e,t,i){i.d(t,{Z:function(){return _}});var n=i(52322),r=i(14865);i(2784);var a=i(19596),s=i(45103),o=i(25749),l=i(10105),d=i(75824),u=i(41174),c=i(49996),f=i(55634),p=i(38129),g=i(66724),m=i(11438);let h={PARENT:"SidebarPolls",LOADER:"user-polls__loader"},x=e=>{let{query:t,csaOnLoadHandler:i,csmOnLoadHandler:a,cel_widget_id:s,className:x}=e,{pageConst:_,pageType:b}=(0,c.y)(),{pollLinkBuilder:T}=(0,g.WO)(),[y]=(0,u.E8)({query:t,variables:{itemId:_,pollCount:6},context:{serverSideCacheable:!0,personalized:!1},pause:r.isNode}),C=(0,d.N)({id:"feature_userPolls_title",defaultMessage:"User polls"}),v=(0,d.N)({id:"feature_userPolls_subTitle",defaultMessage:"Related polls from IMDb users"});if((0,p.LQ)(y,a,i),y.fetching)return(0,n.jsx)(l.ZP,{height:650,"data-testid":h.LOADER});let j=y.data?.[b]?.featuredPolls?.edges;return!j||j.length<=0||y.error?null:(0,n.jsx)(p.Lz,{componentId:f.NG.UserPolls,children:(0,n.jsx)(I,{"data-testid":h.PARENT,baseColor:"none",topPadding:"none",bottomPadding:"none",cel_widget_id:s,className:x,children:(0,n.jsx)(o.w,{id:"polls",listData:j,title:C,titleButtonHref:T({refSuffix:m.Cd.SEE_MORE}),subTitle:v})})})},I=(0,a.default)(s.PageSection).withConfig({componentId:"sc-aa337c03-0"})([""]);var _=e=>(0,n.jsx)(m.xm,{value:m.Cd.USER_POLLS,children:(0,n.jsx)(x,{...e})})},68160:function(e,t,i){i.d(t,{G:function(){return s}});var n=i(30382),r=i.n(n),a=i(96568);let s=r()`
    query TitleUserPolls($itemId: ID!, $pollCount: Int!) {
        title(id: $itemId) {
            featuredPolls(first: $pollCount) {
                edges {
                    node {
                        ...PollPreviewCard
                    }
                }
            }
        }
    }

    ${a.F0}
`},82951:function(e,t,i){i.d(t,{i:function(){return w}});var n=i(52322),r=i(67353),a=i(45455),s=i.n(a),o=i(2784),l=i(53665),d=i(19596),u=i(45103),c=i(91842);let f=e=>{let t,{testId:i,cards:r,title:a,subTitle:l,titleHref:d,buttonConfig:c}=e;if(s()(r))return null;let f=Math.ceil(r.length/2),x=r.filter((e,t)=>t<f),I=r.filter((e,t)=>t>=f);c&&(t=(0,n.jsx)("span",{children:(0,n.jsx)(g,{preIcon:c.preIcon,ariaLabel:c.label,href:c.href,onSelect:c.onSelect,onColor:"textPrimary",children:c.label})}));let _=a&&(0,n.jsx)(u.Title,{description:l,href:d,children:a});return(0,n.jsxs)("div",{"data-testid":i,children:[!!(_||t)&&(0,n.jsxs)(p,{children:[_,t]}),(0,n.jsxs)(m,{children:[(0,n.jsx)(h,{"data-testid":`${i}-first-group`,children:x.map((e,t)=>(0,n.jsx)(o.Fragment,{children:e},`${i}-first-group-${t}`))}),(0,n.jsx)(h,{"data-testid":`${i}-second-group`,children:I.map((e,t)=>(0,n.jsx)(o.Fragment,{children:e},`${i}-second-group-${t}`))})]})]})},p=d.default.div.withConfig({componentId:"sc-2272b704-0"})(["display:flex;justify-content:space-between;flex-direction:column;","{flex-direction:row;}","{flex-direction:column;}"],c.mediaQueries.breakpoints.above.s,c.mediaQueries.breakpoints.above.l),g=(0,d.default)(u.TextButton).withConfig({componentId:"sc-2272b704-1"})(["justify-content:flex-start;margin:-"," "," "," ",";","{margin-top:-",";}","{margin-top:-",";}"],c.spacing.s,(0,c.getSpacingVar)("ipt-pageMargin"),c.spacing.xs,(0,c.getSpacingVar)("ipt-pageMargin"),c.mediaQueries.breakpoints.above.s,c.spacing.xxs,c.mediaQueries.breakpoints.above.l,c.spacing.s),m=d.default.div.withConfig({componentId:"sc-2272b704-2"})(["","{display:flex;}"],c.mediaQueries.breakpoints.only.m),h=d.default.div.withConfig({componentId:"sc-2272b704-3"})(["flex:1;min-width:0;margin-bottom:",";","{&:first-of-type{",";margin-right:",";}&:last-of-type{margin-left:",";",";}> div{margin-left:0;margin-right:0;}}"],c.spacing.xs,c.mediaQueries.breakpoints.only.m,(0,c.setPropertyToSpacingVar)("margin-left","ipt-pageMargin"),c.spacing.xs,c.spacing.xs,(0,c.setPropertyToSpacingVar)("margin-right","ipt-pageMargin"));var x=i(25749),I=i(10105),_=i(84314),b=i(4363),T=i(38129),y=i(66724),C=i(11438),v=i(30634),j=i(93184);let w=e=>{let t,{id:i,titleString:a,titleHref:o,subtitleString:d,showCreateListLink:u,useLastModifiedDate:c,queryTransform:p,queryToCardTransform:g,queryOptions:m,csmOnLoadHandler:h,csaOnLoadHandler:w,cel_widget_id:P,className:E}=e,S=(0,l.Z)(),M=(0,_.n)(),{listCreateLinkBuilder:N}=(0,y.WO)(),[R]=(0,b.E)(m);if((0,T.LQ)(R,h,w),R.error)return null;if(R.fetching)return(0,n.jsx)(I.lI,{height:j.fY,"test-id":`feature-${i}-lists__loader`});if(!R?.data)return null;if(u){let e=e=>{M||(e.preventDefault(),(0,v.rf)())};t={preIcon:"add",label:S.formatMessage(j.wm),href:N({refSuffix:C.Cd.EMPTY})},g?t.onSelect=t=>e(t):t={...t,onClick:t=>e(t),onKeyDown:t=>{(0,r.isEnterOrSpaceKey)(t)&&e(t)}}}if(g){let e=g(R.data);return s()(e)?null:(0,n.jsx)(L,{baseColor:"none",topPadding:"none",bottomPadding:"none",cel_widget_id:P,"data-testid":P,className:E,children:(0,n.jsx)(f,{testId:`SidebarList-${i}`,cards:e,title:a&&S.formatMessage(a),subTitle:d&&S.formatMessage(d),titleHref:o,buttonConfig:t})})}let k=p(R.data);return!k||s()(k)?null:(0,n.jsx)(L,{baseColor:"none",topPadding:"none",bottomPadding:"none",cel_widget_id:P,"data-testid":P,className:E,children:(0,n.jsx)(x.w,{id:i,listData:k,title:a&&S.formatMessage(a),subTitle:d&&S.formatMessage(d),titleButtonHref:o,buttonConfig:t,useLastModifiedDate:c})})},L=(0,d.default)(u.PageSection).withConfig({componentId:"sc-73c61717-0"})([""])},93184:function(e,t,i){i.d(t,{$B:function(){return T},KG:function(){return h},Qq:function(){return p},T4:function(){return l},Ug:function(){return u},Y3:function(){return o},YU:function(){return c},cj:function(){return b},dx:function(){return I},fY:function(){return a},in:function(){return r},jX:function(){return d},kg:function(){return n},n7:function(){return g},se:function(){return f},tu:function(){return x},uw:function(){return _},vc:function(){return m},wm:function(){return s}});let n=2,r=6,a=650,s={id:"feature_userLists_create",defaultMessage:"Create new list"},o={id:"feature_userLists_title",defaultMessage:"User lists"},l={id:"feature_userLists_subTitle",defaultMessage:"Related lists created by IMDb users"},d={id:"feature_editorialLists_title",defaultMessage:"Editorial lists"},u={id:"feature_editorialLists_subTitle",defaultMessage:"Related lists created by IMDb editors"},c={id:"feature_yourLists_title",defaultMessage:"Your lists"},f={id:"feature_yourExports_title",defaultMessage:"Your exports"},p={id:"user_your_watchlist",defaultMessage:"Your Watchlist"},g={id:"feature_yourPredefinedLists_watchlistDesc",defaultMessage:"Track the titles you want to watch"},m={id:"user_your_watch_history",defaultMessage:"Your Watch History"},h={id:"feature_yourPredefinedLists_watchHistoryDesc",defaultMessage:"Titles you have watched"},x={id:"user_your_ratings",defaultMessage:"Your Ratings"},I={id:"feature_yourPredefinedLists_ratingsDesc",defaultMessage:"Titles you have rated"},_={id:"user_your_checkins",defaultMessage:"Your Check-Ins"},b={id:"feature_yourPredefinedLists_checkinsDesc",defaultMessage:"Titles you are watching or have watched"},T={id:"common_last_modified",defaultMessage:"updated {duration} ago"}},58656:function(e,t,i){i.d(t,{L8:function(){return l},O_:function(){return o},nm:function(){return s}});var n=i(30382),r=i.n(n),a=i(46982);let s=r()`
    query ListCollectionConnection(
        $itemId: String!
        $first: Int!
        $topListType: TopListType!
    ) {
        topListsForItem(
            itemId: $itemId
            first: $first
            topListType: $topListType
        ) {
            edges {
                node {
                    ...ListPreviewCard
                }
            }
        }
    }

    ${a.ZP.fragments.listPreviewCard}
`,o=r()`
    query YourListsSidebar($first: Int!) {
        lists(first: $first, filter: { classTypes: [LIST] }) {
            edges {
                node {
                    ...ListPreviewCard
                }
            }
        }
    }

    ${a.ZP.fragments.listPreviewCard}
`,l=r()`
    query YourPredefinedListsSidebar {
        checkins: predefinedList(classType: CHECK_INS) {
            ...ListPreviewCard
        }
        ratings: userRatings(first: 1, sort: { by: MOST_RECENT, order: DESC }) {
            total
            edges {
                node {
                    title {
                        userRating {
                            date
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
        watchHistory: userWatchedTitles(first: 1) {
            total
            edges {
                node {
                    watchedStatus {
                        firstWatched
                    }
                    title {
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
        watchlist: predefinedList(classType: WATCH_LIST) {
            ...ListPreviewCard
        }
    }

    ${a.ZP.fragments.listPreviewCard}
`},47521:function(e,t,i){i.d(t,{Z:function(){return ei},n:function(){return en}});var n,r,a=i(52322),s=i(2784),o=i(19596),l=i(52866),d=i(80592),u=i(57324),c=i(25436),f=i(55129),p=i(22431),g=i(86528),m=i(49666),h=i(49996),x=i(15597),I=i(21836),_=i(96033),b=i(30382),T=i.n(b),y=i(96568);let C=T()`
    query NameUserPolls($itemId: ID!, $pollCount: Int!) {
        name(id: $itemId) {
            featuredPolls(first: $pollCount) {
                edges {
                    node {
                        ...PollPreviewCard
                    }
                }
            }
        }
    }

    ${y.F0}
`;var v=i(68160),j=()=>{let{pageType:e}=(0,h.y)();return(0,a.jsxs)(a.Fragment,{children:[e===c.PageType.NAME&&(0,a.jsx)(_.Z,{query:C}),e===c.PageType.TITLE&&(0,a.jsx)(_.Z,{query:v.G})]})},w=i(53665),L=i(45103),P=i(47130),E=i(55634),S=i(38129),M=i(66724),N=i(11438),R=i(49624),k=i(83163),D=i(48687);let O=e=>{let{nameId:t,nameCreditsTotal:i,nameText:n}=e,r=(0,D.hg)({weblabID:k.lh.IMDB_NEXT_WATCHED_FEATURE_1045775,treatments:{T1:!0}}),s=(0,w.Z)(),{seenNameLinkBuilder:o,searchTitleLinkBuilder:l}=(0,M.WO)();if(!t||!n||!i)return null;let d=s.formatMessage({id:"feature_seen_title",defaultMessage:"How much have you seen?"}),u=s.formatMessage({id:"feature_rated_title",defaultMessage:"How much have you rated?"}),f=s.formatMessage({id:"common_go_to_your_list",defaultMessage:"Go to your list."}),p=s.formatMessage({id:"feature_seen_content",defaultMessage:`Keep track of how much of {nameTextStr}’s work you have seen.`},{nameTextStr:n}),g=s.formatMessage({id:"feature_rated_content",defaultMessage:`Keep track of how much of {nameTextStr}’s work you have rated.`},{nameTextStr:n}),m=`<a href="${o({nconst:t,refSuffix:N.Cd.SEE_MORE})}">${f}</a>`,h=`<a href="${l({query:{[R.Oo.Role]:t,[R.Oo.MyRatings]:R.EW.TitlesIRated},refSuffix:N.Cd.SEE_MORE})}">${f}</a>`;return(0,a.jsx)(P.AU,{value:{cti:c.CTIS.SEEN_CTI},children:(0,a.jsx)(S.wW,{componentId:E.NG.NameSeen,children:(0,a.jsx)(L.PageSection,{topPadding:"none",bottomPadding:"none",baseColor:"none","data-testid":"nm_ft_se",children:(0,a.jsxs)(L.ListCard,{borderType:"line",children:[(0,a.jsx)($,{children:r?u:d}),(0,a.jsx)(L.HTMLContent,{html:(r?g:p)+" "+(r?h:m)})]})})})})};var A=e=>(0,a.jsx)(N.xm,{value:N.Cd.SEEN,children:(0,a.jsx)(O,{...e})});let $=(0,o.default)(L.Title).withConfig({componentId:"sc-383892e1-0"})(["padding:0;"]);var G=i(14865),Z=i(72779),H=i.n(Z),B=i(91842),q=i(10105),Q=i(75824),Y=i(4363),F=i(14438),V=i(37179);let U=`nm-dev-${V.QJ.SEE_MORE}`;(n=r||(r={})).Section="projectsInDevelopment-section",n.FeatureHeader="projectsInDevelopment-title",n.CreditList="projectsInDevelopment-credit-list",n.CreditListItem="projectsInDevelopment-credit-list-item",n.CardLoader="projectsInDevelopment-card-loader",n.Button="projectsInDevelopment-button";let W=T()`
    query NameMainProjectsInDev($nconst: ID!, $after: ID, $first: Int) {
        name(id: $nconst) {
            projectsInDevelopment(first: $first, after: $after) {
                total
                edges {
                    node {
                        title {
                            id
                            titleText {
                                text
                            }
                        }
                    }
                }
                pageInfo {
                    endCursor
                }
            }
        }
    }
`,K=e=>{let{className:t,nconst:i}=e,{makeRefMarker:n}=(0,N.Lz)(),{titleMainLinkBuilder:r}=(0,M.WO)(),o=(0,F.EO)(),[l,d]=(0,s.useState)([]),[u,c]=(0,s.useState)({first:5,issueNewRequest:!0,endCursor:void 0}),[{data:f,fetching:p,error:g}]=(0,Y.E)({query:W,variables:{nconst:i,first:u.first,after:u.endCursor},context:{serverSideCacheable:!0,personalized:!1},pause:G.isNode||!u.issueNewRequest});(0,s.useEffect)(()=>{f&&u.issueNewRequest&&(d([...l,...f?.name?.projectsInDevelopment?.edges||[]]),c({...u,issueNewRequest:!1,endCursor:f?.name?.projectsInDevelopment?.pageInfo?.endCursor}))},[f]);let m=f?.name?.projectsInDevelopment?.total||0,h=m-l.length,x=h>0,I=(0,Q.N)({id:"name_main_rightrail_projectsInDevelopment_title",defaultMessage:"Projects In Development"}),_=(0,Q.N)({id:"name_main_rightrail_projectsInDevelopment_description",defaultMessage:"Get more at IMDbPro"}),b=(0,Q.N)({id:"common_pagination_remaining",defaultMessage:"{remaining} more"},{remaining:h});return!g&&m||p?(0,a.jsx)("div",{children:(0,a.jsxs)(L.PageSection,{"data-testid":"projectsInDevelopment-section",className:H()("projectsInDevelopment-section",t),topPadding:"none",bottomPadding:"none",sidePadding:"pageMargin",baseColor:"none",children:[(0,a.jsx)(L.Title,{description:_,"data-testid":"projectsInDevelopment-title",href:`https://pro.imdb.com/name/${i}?rf=cons_${n(N.Cd.DETAILS)}&ref_=cons_${n(N.Cd.DETAILS)}`,padding:"none",children:I}),(0,a.jsxs)(z,{borderType:"line",topPadding:"none",bottomPadding:"none",children:[(0,a.jsx)(L.MenuList,{className:"projectsInDevelopment-credit-list",children:!l.length&&p?(0,a.jsx)(q.ZP,{height:"feature","data-testid":"projectsInDevelopment-card-loader"}):l.map((e,t)=>{let i=e.node?.title?.id,n=e.node?.title?.titleText.text;if(i&&n)return(0,a.jsx)(X,{className:"projectsInDevelopment-credit-list-item",href:r({tconst:i,refSuffix:{t:N.Cd.EMPTY,n:t+1}}),children:n},`${i}_${t}`)})}),x&&(0,a.jsx)(J,{"data-testid":"projectsInDevelopment-button",isLoading:p,onClick:()=>{o({pageAction:U,refMarkerSuffix:N.Cd.NEXT}),c({...u,first:250,issueNewRequest:!0})},text:b})]})]})}):null},z=(0,o.default)(L.ListCard).withConfig({componentId:"sc-3eb09962-0"})(["padding:0;margin-left:0;margin-right:0;"]),X=(0,o.default)(L.MenuListItem).withConfig({componentId:"sc-3eb09962-1"})(["",";"],(0,B.setTypographyType)("bodySmall")),J=(0,o.default)(L.SeeMoreButton).withConfig({componentId:"sc-3eb09962-2"})(["display:block;border-top:1px solid ",";padding-bottom:",";padding-top:",";padding-left:",";"],(0,B.getColorVarValue)("ipt-base-border-color"),B.spacing.xs,B.spacing.xs,B.spacing.xs);var ee=e=>(0,a.jsx)(N.xm,{value:N.Cd.PROJECTS_IN_DEVELOPMENT,children:(0,a.jsx)(K,{...e})}),et=i(54518);let ei=e=>{let{nameSeenProps:t}=e,i=(0,m.ik)(),{pageType:n,pageConst:r}=(0,h.y)(),s=n===c.PageType.NAME,o=n===c.PageType.GALLERY,_=!!r;return(0,a.jsxs)(g.Z,{children:[(0,a.jsx)(d.Z,{slotName:u.B.RIGHT_3}),_&&(0,a.jsx)(x.Z,{}),!i&&(0,a.jsx)("span",{children:(0,a.jsx)(f.ZP,{name:p.A.INLINE60})}),(0,a.jsx)(d.Z,{slotName:u.B.RIGHT_5}),_&&(0,a.jsx)(I.Z,{}),_&&(0,a.jsx)(j,{}),(0,a.jsx)(et.U,{children:(0,a.jsxs)(er,{children:[(s||o)&&(0,a.jsxs)(a.Fragment,{children:[!i&&(0,a.jsx)(f.ZP,{"data-test-id":l.z.INLINE_80_LARGE,name:p.A.INLINE80}),(0,a.jsx)(d.Z,{slotName:u.B.PRO_RIGHT_1})]}),s&&(0,a.jsx)(A,{...t}),_&&s&&(0,a.jsx)(ee,{nconst:r}),(0,a.jsx)(d.Z,{slotName:u.B.RIGHT_7})]})})]})},en=(0,o.css)(["display:flex;flex-direction:column;gap:3rem;"]),er=o.default.div.withConfig({componentId:"sc-c6b62efa-0"})([""," height:100%;.non-name-page{gap:0;}"],en)},54518:function(e,t,i){i.d(t,{U:function(){return s}});var n=i(52322);i(2784);var r=i(19596),a=i(91842);let s=e=>(0,n.jsx)(o,{"data-testid":"sidebar-sticky-block",children:e.children}),o=r.default.div.withConfig({componentId:"sc-65270c44-0"})(["","{margin-bottom:23rem;position:-webkit-sticky;position:sticky;top:0;}"],a.mediaQueries.breakpoints.above.l)},27513:function(e,t,i){var n,r;i.d(t,{LU:function(){return u},dR:function(){return d}});let a="formatters_duration";(r=n||(n={})).SECOND="second",r.MINUTE="minute",r.HOUR="hour",r.DAY="day",r.WEEK="week",r.MONTH="month",r.YEAR="year";let s={second:()=>1e3,minute:()=>60*s.second(),hour:()=>60*s.minute(),day:()=>24*s.hour(),week:()=>7*s.day(),month:()=>4.35*s.week(),year:()=>12*s.month()},o=(e,t,i,n)=>{let r=s[i](),o=n&&s[n](),l=0;return((n?t<o&&t>=2*r:t>=2*r)?l=Math.floor(t/r):t<2*r&&t>=r&&(l=1),l)?e.formatMessage({id:`${a}_${i}`,defaultMessage:`{count, plural, one {1 ${i}} other {{count} ${i}s}}`},{count:l}):""},l=e=>e instanceof Date&&!isNaN(e.getTime()),d=(e,t,i)=>{let n=i?new Date(i):new Date;return u(e,new Date(t),n)},u=(e,t,i)=>{if(!l(i)||!l(t))return"";let n=i.getTime()-t.getTime();if(n>=s.year())return o(e,n,"year");if(n<s.year()&&n>=s.month())return o(e,n,"month","year");if(n<s.month()&&n>=s.week())return o(e,n,"week","month");if(n<s.week()&&n>=s.day())return o(e,n,"day","week");if(n<s.day()&&n>=s.hour())return o(e,n,"hour","day");if(n<s.hour()&&n>=s.minute())return o(e,n,"minute","hour");if(n<s.minute()&&n>=s.second())return o(e,n,"second","minute");else if(n<s.second())return e.formatMessage({id:`${a}_now`,defaultMessage:"now"});return""}},73013:function(e,t,i){i.d(t,{S:function(){return r}});var n=i(86958);let r=()=>n.B()?.context?.sidecar?.placementMap||{}}}]);