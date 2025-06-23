"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9448],{85018:function(t,e,i){i.d(e,{F4:function(){return o},sq:function(){return r},uN:function(){return s}});var a=i(30382),n=i.n(a);let r=n()`
    fragment BaseTitleCard on Title {
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
        titleGenres {
            genres(limit: 3) {
                genre {
                    text
                }
            }
        }
    }
`,o=n()`
    fragment TitleCardTrailer on Title {
        latestTrailer {
            id
        }
    }
`,s=n()`
    fragment PersonalizedTitleCardUserRating on Title {
        userRating @include(if: $includeUserRating) {
            value
        }
    }
`},40981:function(t,e,i){i.d(e,{Nf:function(){return R},z7:function(){return c}});var a=i(52322),n=i(86704),r=i(72779),o=i.n(r);i(2784);var s=i(53665),l=i(19596),d=i(45103),u=i(91842),g=i(94471),m=i(92847);let c={CONTAINER:"ratingGroup--container",IMDB_RATING:"ratingGroup--imdb-rating",OTHER_USER_RATING:"ratingGroup--other-user-rating",PLACEHOLDER:"ratingGroup--placeholder",USER_RATING:"ratingGroup--user-rating"},f="hide-vote-count",p="standalone-star",R=t=>{let{canRate:e,className:i,hideMaxIMDbRating:n,hideVoteCountOnSmallBreakpoints:r,otherUserRating:l,titleId:u,ratingsSummary:R,rateButtonLabel:T,showPlaceholderStarIfApplicable:b,titleText:x,refOverride:I}=t,N=(0,s.Z)(),{rating:v}=(0,d.useRatingsContext)(u)||{},C=(0,g.P)(v,"user"),E=(0,g.P)(R?.aggregateRating,"imdb"),M=(0,g.P)(l,"user"),P=N.formatMessage({id:"common_ariaLabels_IMDbRating",defaultMessage:"IMDb rating: {rating}"},{rating:E||""}),L=N.formatMessage({id:"common_ariaLabels_other_user_rating",defaultMessage:"User rating: {value}"},{value:l}),w=N.formatMessage({id:"common_ariaLabels_ratingButtonRated",defaultMessage:"Your rating: {rating}"},{rating:C||""}),$=N.formatMessage({id:"common_ariaLabels_ratingButtonUnrated",defaultMessage:"Rate {titleName}"},{titleName:x}),S=N.formatMessage({id:"common_ratingPrompt_rate",defaultMessage:"Rate"}),y=R?.voteCount?N.formatNumber(R?.voteCount,{notation:"compact",compactDisplay:"short"}):void 0,U=b&&!E&&!(e&&x);return(0,a.jsxs)(_,{className:i,"data-testid":c.CONTAINER,children:[!!E&&(0,a.jsx)(d.RatingStar,{"data-testid":c.IMDB_RATING,ariaLabel:P,className:c.IMDB_RATING,formattedRating:E,maxRating:n?void 0:10,formattedVoteCount:y,voteCountClassName:r?f:""}),!!l&&(0,a.jsx)(d.RatingStar,{ariaLabel:L,className:c.OTHER_USER_RATING,"data-testid":c.OTHER_USER_RATING,formattedRating:M,type:"otherUser"}),!!e&&!!x&&(0,a.jsx)(m.T,{title:{id:u,titleText:x,canRate:e},refOverride:I,ratingTriggerComponent:t=>{let{onUserRatingClick:e}=t;return(0,a.jsx)(h,{ariaLabelRated:w,ariaLabelUnrated:$,formattedRating:C,className:o()(c.USER_RATING,{[p]:!E}),onClick:e,rateLabel:"string"==typeof T?T:S})}}),!!U&&(0,a.jsx)(d.RatingStar,{"data-testid":c.PLACEHOLDER,"aria-hidden":!0,className:o()(c.PLACEHOLDER,p),type:"placeholder"})]})},_=l.default.div.withConfig({componentId:"sc-98721807-0"})(["align-items:center;display:inline-flex;flex-flow:row wrap;flex-direction:row;gap:0 ",";.","{padding:0;min-width:0;}.","{","{display:none;}}"],n.spacing.xs,p,f,u.mediaQueries.breakpoints.below.m),h=(0,l.default)(d.RateButton).withConfig({componentId:"sc-98721807-1"})(["font-size:inherit;height:fit-content;padding:0;"])},92847:function(t,e,i){i.d(e,{T:function(){return T}});var a=i(52322),n=i(77725),r=i(2784),o=i(45103),s=i(89363),l=i(75824),d=i(82433),u=i(84314),g=i(11438),m=i(14438),c=i(37179),f=i(30634);let p={id:"common_ratingPrompt_header",defaultMessage:"Rate this"},R={id:"common_ratingPrompt_rate",defaultMessage:"Rate"},_={id:"common_ratingPrompt_removeRating",defaultMessage:"Remove rating"},h={id:"common_ratingPrompt_ariaLabelPrefix",defaultMessage:"Rating"},T=t=>{let{title:{id:e,titleText:i,canRate:T},ratingTriggerComponent:b,refOverride:x}=t,[I,N]=(0,r.useState)(!1),v=(0,u.n)(),{makeRefMarker:C}=(0,g.Lz)(),{rating:E,updateRating:M,deleteRating:P}=(0,o.useRatingsContext)(e)||{},L=C(x?[(0,g.Qk)({refStr:x,explanation:"Not all usages of RatingPrompt have been converted to link builders."}),g.Cd.RATING]:g.Cd.RATING),w=(0,m.EO)(),{updateTitleRating:$,deleteTitleRating:S,tempRateUpdateLogRef:y}=(0,d.vY)({titleId:e,refTag:L,currentRating:E}),U=(0,l.N)(p),A=(0,l.N)(R),D=(0,l.N)(_),O=(0,l.N)(h),k=(0,f.pl)();return(0,a.jsxs)(a.Fragment,{children:[b({onUserRatingClick:()=>{T&&(w({pageAction:c.QJ.USER_RATING_PROMPT_OPEN,hitType:n.Re.POP_UP,refMarkerString:L}),N(!0))}}),!!T&&(0,a.jsx)(o.RatingPrompt,{isOpen:I,tconst:e,title:i,headerLabel:U,rateLabel:A,ariaLabelPrefix:O,shouldUseNewRatingFlow:!0,secondaryButtonText:D,secondaryButtonType:s.uu.RemoveRating,onPrimaryButtonClicked:async(t,e)=>{if(!t){N(!1);return}v?(N(!1),M?.(t,L,()=>$(t,e))):(await y(t,e),k({rating:t,titleId:e,ref:L}))},onSecondaryButtonClicked:async(t,e)=>{N(!1),P?.(L,()=>S(e))},onCloseClicked:()=>{N(!1)}})]})}},2870:function(t,e,i){i.d(e,{f:function(){return d}});var a=i(52322);i(2784);var n=i(19596),r=i(45103),o=i(75824),s=i(11438),l=i(12563);let d=t=>{let{titleId:e,refOverride:i}=t,{makeRefMarker:n}=(0,s.Lz)(),{isInWatchlist:d,isPending:g,onClick:m,ariaLabel:c}=(0,l.X)(e,n(i||[s.Cd.WATCHLIST,s.Cd.BUTTON])),f=(0,o.N)({id:"common_buttons_watchlist",defaultMessage:"Watchlist"});return(0,a.jsxs)(r.SecondaryButton,{ariaLabel:c,onClick:m,width:"full-width",preIcon:g?void 0:d?"done":"add",disabled:g,children:[!!g&&(0,a.jsx)(u,{"data-testid":"watchlist-button-loader",type:"circle"}),!g&&f]})},u=(0,n.default)(r.Loader).withConfig({componentId:"sc-3b490131-0"})(["max-height:30px;max-width:30px;vertical-align:middle;"]);e.Z=d},72811:function(t,e,i){i.d(e,{Q:function(){return o}});var a=i(52322);i(2784);var n=i(45103),r=i(3557);let o=t=>{let{titleId:e,watchlistMetricsContext:i,onPoster:o,onImage:s=!0,size:l,className:d}=t;return(0,a.jsx)(r.Fo,{id:e,metricsContext:i,render:t=>o?(0,a.jsx)(n.Poster.WatchlistRibbon,{...t,className:d,size:l,"data-testid":`poster-watchlist-ribbon-${t.inWatchlist?"remove":"add"}`}):(0,a.jsx)(n.WatchlistRibbon,{...t,className:d,onImage:s,size:l,"data-testid":`watchlist-ribbon-${t.inWatchlist?"remove":"add"}`})})};e.Z=o},94471:function(t,e,i){i.d(e,{P:function(){return r}});var a=i(53665);let n={default:{maximumFractionDigits:1,minimumFractionDigits:1},imdb:{maximumFractionDigits:1,minimumFractionDigits:1},user:{maximumFractionDigits:0,minimumFractionDigits:0}},r=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",i=arguments.length>2?arguments[2]:void 0,r=(0,a.Z)();if(!t)return"";if(10===t)return"10";let o="user"===e?Math.trunc(t):Number(t.toFixed(1)),s=i??n[e];return r.formatNumber(o,s)}},22073:function(t,e,i){var a,n;function r(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";if(t<=0)return"hours_minutes_explicit"===e?"0min":"hours_minutes_explicit_short"===e?"0m":"iso_8601"===e?"PT0S":"0:00";let i=Math.floor(t/3600),a=Math.floor(t%3600/60),n=Math.floor(t%60);if("hours_minutes_explicit"===e||"hours_minutes_explicit_short"===e)return(t<60&&t>0&&(a=1),i>0&&a<=0)?`${i}h`:`${i>0?i+"h "+a:a}${"hours_minutes_explicit_short"===e?"m":"min"}`;if("iso_8601"!==e)return`${i>0?i+":"+o(a):a}:${o(n)}`;{let t=i?`${i}H`:"",e=a?`${a}M`:"",r=n?`${n}S`:"";return`PT${t}${e}${r}`}}function o(t){return t<=0||!Number.isInteger(t)?"00":t>9?`${t}`:`0${t}`}i.d(e,{A:function(){return a},L:function(){return r}}),(n=a||(a={})).DEFAULT="default",n.HOURS_MINUTES_EXPLICIT="hours_minutes_explicit",n.HOURS_MINUTES_EXPLICIT_SHORT="hours_minutes_explicit_short",n.ISO_8601="iso_8601"},82433:function(t,e,i){i.d(e,{vY:function(){return m}});var a=i(30382),n=i.n(a),r=i(22619),o=i(14438),s=i(83163),l=i(48687),d=i(17503);let u=n()`
    mutation UpdateTitleRating($rating: Int!, $titleId: ID!) {
        rateTitle(input: { rating: $rating, titleId: $titleId }) {
            rating {
                value
            }
        }
    }
`,g=n()`
    mutation DeleteTitleRating($titleId: ID!) {
        deleteTitleRating(input: { titleId: $titleId }) {
            date
        }
    }
`,m=t=>{let[,e]=(0,d.Z)(u),[,i]=(0,d.Z)(g),a=(0,o.EO)(),n=(0,l.hg)({weblabID:s.lh.IMDB_NEXT_WATCHED_FEATURE_1045775,treatments:{T1:!0}})??!1,{addToWatchedTitles:m}=(0,r.V)(),c=e=>{a({refMarkerString:t.refTag,pageAction:e,customPageMetadata:{id:t.titleId}})};return{updateTitleRating:(t,i)=>(c(`rating-add-${i}-${t}`),n&&m(i),e({rating:t,titleId:i})),deleteTitleRating:t=>(c(`rating-del-${t}`),i({titleId:t})),tempRateUpdateLogRef:async(t,e)=>{c(`tmp-rating-add-${e}-${t}`)}}}},95441:function(t,e,i){i.d(e,{S:function(){return n}});var a=i(19596);let n=t=>(0,a.css)(["@supports (-webkit-line-clamp:","){display:-webkit-box;-webkit-line-clamp:",";-webkit-box-orient:vertical;overflow:hidden;}"],t,t)}}]);