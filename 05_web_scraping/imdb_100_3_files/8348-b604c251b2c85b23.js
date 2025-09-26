"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8348],{85018:function(t,e,i){i.d(e,{F4:function(){return o},sq:function(){return a},uN:function(){return l}});var n=i(30382),r=i.n(n);let a=r()`
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
`,o=r()`
    fragment TitleCardTrailer on Title {
        latestTrailer {
            id
        }
    }
`,l=r()`
    fragment PersonalizedTitleCardUserRating on Title {
        userRating @include(if: $includeUserRating) {
            value
        }
    }
`},88758:function(t,e,i){i.d(e,{E:function(){return a},k:function(){return o}});var n=i(30382),r=i.n(n);let a=r()`
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
`},36543:function(t,e,i){i.d(e,{$z:function(){return s},Dl:function(){return o},Zz:function(){return u},_A:function(){return c},f1:function(){return d},qp:function(){return f},vO:function(){return l}});var n=i(30382),r=i.n(n),a=i(85018);let o=r()`
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
        principalCreditsV2(filter: { mode: "NARROWED" }, useEntitlement: false)
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
`,l=r()`
    fragment TitleMeterRanking on Title {
        meterRanking {
            currentRank
            rankChange {
                changeDirection
                difference
            }
        }
    }
`,s=r()`
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
    ${a.sq}
`,u=r()`
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
        productionStatus(useEntitlement: false) {
            currentProductionStage {
                id
                text
            }
        }
    }
    ${s}
`,c=r()`
    fragment TitleListItemMetascore on Title {
        metacritic {
            metascore {
                score
            }
        }
    }
`,d=r()`
    fragment TitleTotalEpisodes on Title {
        episodes {
            episodes(first: 0) {
                total
            }
        }
    }
`,f=r()`
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
`},11602:function(t,e,i){i.d(e,{Vc:function(){return o},qb:function(){return a},vW:function(){return l}});var n=i(30382),r=i.n(n);let a=r()`
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
`,l=r()`
    fragment TrackPreferences on TrackNotificationPreferences {
        isTracking
        notificationPreferences {
            interested
            type {
                text
                typeId
            }
        }
    }
`},92847:function(t,e,i){i.d(e,{T:function(){return I}});var n=i(52322),r=i(77725),a=i(98644),o=i(44958),l=i(2784),s=i(75824),u=i(82433),c=i(84314),d=i(11438),f=i(14438),m=i(37179),g=i(30634);let T={id:"common_ratingPrompt_header",defaultMessage:"Rate this"},p={id:"common_ratingPrompt_rate",defaultMessage:"Rate"},x={id:"common_ratingPrompt_removeRating",defaultMessage:"Remove rating"},h={id:"common_ratingPrompt_ariaLabelPrefix",defaultMessage:"Rating"},I=t=>{let{title:{id:e,titleText:i,canRate:I,posterImage:_},ratingTriggerComponent:R,refOverride:y}=t,[C,k]=(0,l.useState)(!1),P=(0,c.n)(),{makeRefMarker:v}=(0,d.Lz)(),{rating:$,updateRating:E,deleteRating:S}=(0,a.nj)(e)||{},b=v(y?[(0,d.Qk)({refStr:y,explanation:"Not all usages of RatingPrompt have been converted to link builders."}),d.Cd.RATING]:d.Cd.RATING),N=(0,f.EO)(),{updateTitleRating:w,deleteTitleRating:M,tempRateUpdateLogRef:L}=(0,u.vY)({titleId:e,refTag:b,currentRating:$}),F=(0,s.N)(T),D=(0,s.N)(p),O=(0,s.N)(x),U=(0,s.N)(h),A=(0,g.pl)();return(0,n.jsxs)(n.Fragment,{children:[R({onUserRatingClick:()=>{I&&(N({pageAction:m.QJ.USER_RATING_PROMPT_OPEN,hitType:r.Re.POP_UP,refMarkerString:b}),k(!0))}}),!!I&&(0,n.jsx)(a.TB,{isOpen:C,tconst:e,title:i,posterImage:_,headerLabel:F,rateLabel:D,ariaLabelPrefix:U,shouldUseNewRatingFlow:!0,secondaryButtonText:O,secondaryButtonType:o.uu.RemoveRating,onPrimaryButtonClicked:async(t,e)=>{if(!t){k(!1);return}P?(k(!1),E?.(t,b,()=>w(t,e))):(await L(t,e),A({rating:t,titleId:e,ref:b}))},onSecondaryButtonClicked:async(t,e)=>{k(!1),S?.(b,()=>M(e))},onCloseClicked:()=>{k(!1)}})]})}},2870:function(t,e,i){i.d(e,{f:function(){return u}});var n=i(52322);i(2784);var r=i(19596),a=i(88169),o=i(75824),l=i(11438),s=i(12563);let u=t=>{let{titleId:e,refOverride:i}=t,{makeRefMarker:r}=(0,l.Lz)(),{isInWatchlist:u,isPending:d,onClick:f,ariaLabel:m}=(0,s.X)(e,r(i||[l.Cd.WATCHLIST,l.Cd.BUTTON])),g=(0,o.N)({id:"common_buttons_watchlist",defaultMessage:"Watchlist"});return(0,n.jsxs)(a.SecondaryButton,{ariaLabel:m,onClick:f,width:"full-width",preIcon:d?void 0:u?"done":"add",disabled:d,children:[!!d&&(0,n.jsx)(c,{"data-testid":"watchlist-button-loader",type:"circle"}),!d&&g]})},c=(0,r.default)(a.Loader).withConfig({componentId:"sc-eebd0785-0"})(["max-height:30px;max-width:30px;vertical-align:middle;"]);e.Z=u},94471:function(t,e,i){i.d(e,{P:function(){return a}});var n=i(53665);let r={default:{maximumFractionDigits:1,minimumFractionDigits:1},imdb:{maximumFractionDigits:1,minimumFractionDigits:1},user:{maximumFractionDigits:0,minimumFractionDigits:0}},a=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",i=arguments.length>2?arguments[2]:void 0,a=(0,n.Z)();if(!t)return"";if(10===t)return"10";let o="user"===e?Math.trunc(t):Number(t.toFixed(1)),l=i??r[e];return a.formatNumber(o,l)}},22073:function(t,e,i){var n,r;function a(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";if(t<=0)return"hours_minutes_explicit"===e?"0min":"hours_minutes_explicit_short"===e?"0m":"iso_8601"===e?"PT0S":"0:00";let i=Math.floor(t/3600),n=Math.floor(t%3600/60),r=Math.floor(t%60);if("hours_minutes_explicit"===e||"hours_minutes_explicit_short"===e)return(t<60&&t>0&&(n=1),i>0&&n<=0)?`${i}h`:`${i>0?i+"h "+n:n}${"hours_minutes_explicit_short"===e?"m":"min"}`;if("iso_8601"!==e)return`${i>0?i+":"+o(n):n}:${o(r)}`;{let t=i?`${i}H`:"",e=n?`${n}M`:"",a=r?`${r}S`:"";return`PT${t}${e}${a}`}}function o(t){return t<=0||!Number.isInteger(t)?"00":t>9?`${t}`:`0${t}`}i.d(e,{A:function(){return n},L:function(){return a}}),(r=n||(n={})).DEFAULT="default",r.HOURS_MINUTES_EXPLICIT="hours_minutes_explicit",r.HOURS_MINUTES_EXPLICIT_SHORT="hours_minutes_explicit_short",r.ISO_8601="iso_8601"},82433:function(t,e,i){i.d(e,{vY:function(){return c}});var n=i(30382),r=i.n(n),a=i(22619),o=i(14438),l=i(17503);let s=r()`
    mutation UpdateTitleRating($rating: Int!, $titleId: ID!) {
        rateTitle(input: { rating: $rating, titleId: $titleId }) {
            rating {
                value
            }
        }
    }
`,u=r()`
    mutation DeleteTitleRating($titleId: ID!) {
        deleteTitleRating(input: { titleId: $titleId }) {
            date
        }
    }
`,c=t=>{let[,e]=(0,l.Z)(s),[,i]=(0,l.Z)(u),n=(0,o.EO)(),{addToWatchedTitles:r}=(0,a.V)(),c=e=>{n({refMarkerString:t.refTag,pageAction:e,customPageMetadata:{id:t.titleId}})};return{updateTitleRating:(t,i)=>(c(`rating-add-${i}-${t}`),r(i),e({rating:t,titleId:i})),deleteTitleRating:t=>(c(`rating-del-${t}`),i({titleId:t})),tempRateUpdateLogRef:async(t,e)=>{c(`tmp-rating-add-${e}-${t}`)}}}},95441:function(t,e,i){i.d(e,{S:function(){return r}});var n=i(19596);let r=t=>(0,n.css)(["@supports (-webkit-line-clamp:","){display:-webkit-box;-webkit-line-clamp:",";-webkit-box-orient:vertical;overflow:hidden;}"],t,t)}}]);