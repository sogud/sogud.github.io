(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{400:function(t,e,n){var i=n(6),r=n(2),o=n(38),s=n(10),a=n(37),u=n(72),c=n(231),l=/MSIE .\./.test(a),f=r.Function,h=function(t){return function(e,n){var i=c(arguments.length,1)>2,r=s(e)?e:f(e),a=i?u(arguments,2):void 0;return t(i?function(){o(r,this,a)}:r,n)}};i({global:!0,bind:!0,forced:l},{setTimeout:h(r.setTimeout),setInterval:h(r.setInterval)})},401:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return u})),n.d(e,"e",(function(){return c})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f}));n(33),n(71),n(106),n(232);var i=/#.*$/,r=/\.(md|html)$/,o=/\/$/,s=/^(https?:|mailto:|tel:)/;function a(t){return s.test(t)}function u(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function l(t){if(a(t))return t;var e=t.match(i),n=e?e[0]:"",s=function(t){return decodeURI(t).replace(i,"").replace(r,"")}(t);return o.test(s)?t:s+".html"+n}function f(t,e,n){if(!t)return n;for(var i,r=e;(r=r.$parent)&&!i;)i=r.$refs[t];return i&&i.$el&&(i=i.$el),i||n}},402:function(t,e,n){},403:function(t,e,n){},404:function(t,e,n){},407:function(t,e,n){"use strict";var i=n(6),r=n(54).findIndex,o=n(145),s=!0;"findIndex"in[]&&Array(1).findIndex((function(){s=!1})),i({target:"Array",proto:!0,forced:s},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},408:function(t,e,n){"use strict";n(402)},409:function(t,e,n){t.exports=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(i,r,o){var s=r.prototype;o.utc=function(t){var e={date:t,utc:!0,args:arguments};return new r(e)},s.utc=function(e){var n=o(this.toDate(),{locale:this.$L,utc:!0});return e?n.add(this.utcOffset(),t):n},s.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var a=s.parse;s.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),a.call(this,t)};var u=s.init;s.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else u.call(this)};var c=s.utcOffset;s.utcOffset=function(i,r){var o=this.$utils().u;if(o(i))return this.$u?0:o(this.$offset)?c.call(this):this.$offset;if("string"==typeof i&&null===(i=function(t){void 0===t&&(t="");var i=t.match(e);if(!i)return null;var r=(""+i[0]).match(n)||["-",0,0],o=r[0],s=60*+r[1]+ +r[2];return 0===s?0:"+"===o?s:-s}(i)))return this;var s=Math.abs(i)<=16?60*i:i,a=this;if(r)return a.$offset=s,a.$u=0===i,a;if(0!==i){var u=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(a=this.local().add(s+u,t)).$offset=s,a.$x.$localOffset=u}else a=this.utc();return a};var l=s.format;s.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return l.call(this,e)},s.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||(new Date).getTimezoneOffset());return this.$d.valueOf()-6e4*t},s.isUTC=function(){return!!this.$u},s.toISOString=function(){return this.toDate().toISOString()},s.toString=function(){return this.toDate().toUTCString()};var f=s.toDate;s.toDate=function(t){return"s"===t&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():f.call(this)};var h=s.diff;s.diff=function(t,e,n){if(t&&this.$u===t.$u)return h.call(this,t,e,n);var i=this.local(),r=o(t).local();return h.call(i,r,e,n)}}}()},410:function(t,e,n){"use strict";n(403)},411:function(t,e,n){"use strict";n(404)},412:function(t,e,n){"use strict";var i=n(12),r=n(2),o=n(5),s=n(109),a=n(19),u=n(15),c=n(147),l=n(34),f=n(107),h=n(234),p=n(7),d=n(52).f,v=n(39).f,g=n(16).f,m=n(413),$=n(245).trim,_=r.Number,b=_.prototype,y=r.TypeError,x=o("".slice),S=o("".charCodeAt),I=function(t){var e=h(t,"number");return"bigint"==typeof e?e:k(e)},k=function(t){var e,n,i,r,o,s,a,u,c=h(t,"number");if(f(c))throw y("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=$(c),43===(e=S(c,0))||45===e){if(88===(n=S(c,2))||120===n)return NaN}else if(48===e){switch(S(c,1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+c}for(s=(o=x(c,2)).length,a=0;a<s;a++)if((u=S(o,a))<48||u>r)return NaN;return parseInt(o,i)}return+c};if(s("Number",!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var T,C=function(t){var e=arguments.length<1?0:_(I(t)),n=this;return l(b,n)&&p((function(){m(n)}))?c(Object(e),n,C):e},O=i?d(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),E=0;O.length>E;E++)u(_,T=O[E])&&!u(C,T)&&g(C,T,v(_,T));C.prototype=b,b.constructor=C,a(r,"Number",C)}},413:function(t,e,n){var i=n(5);t.exports=i(1..valueOf)},414:function(t,e,n){var i=n(243),r=n(236),o=n(415),s=n(419);t.exports=function(t,e){if(null==t)return{};var n=i(s(t),(function(t){return[t]}));return e=r(e),o(t,n,(function(t,n){return e(t,n[0])}))}},415:function(t,e,n){var i=n(152),r=n(416),o=n(144);t.exports=function(t,e,n){for(var s=-1,a=e.length,u={};++s<a;){var c=e[s],l=i(t,c);n(l,c)&&r(u,o(c,t),l)}return u}},416:function(t,e,n){var i=n(417),r=n(144),o=n(150),s=n(104),a=n(77);t.exports=function(t,e,n,u){if(!s(t))return t;for(var c=-1,l=(e=r(e,t)).length,f=l-1,h=t;null!=h&&++c<l;){var p=a(e[c]),d=n;if("__proto__"===p||"constructor"===p||"prototype"===p)return t;if(c!=f){var v=h[p];void 0===(d=u?u(v,p,h):void 0)&&(d=s(v)?v:o(e[c+1])?[]:{})}i(h,p,d),h=h[p]}return t}},417:function(t,e,n){var i=n(418),r=n(149),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var s=t[e];o.call(t,e)&&r(s,n)&&(void 0!==n||e in t)||i(t,e,n)}},418:function(t,e,n){var i=n(244);t.exports=function(t,e,n){"__proto__"==e&&i?i(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},419:function(t,e,n){var i=n(237),r=n(420),o=n(422);t.exports=function(t){return i(t,o,r)}},420:function(t,e,n){var i=n(148),r=n(421),o=n(238),s=n(239),a=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)i(e,o(t)),t=r(t);return e}:s;t.exports=a},421:function(t,e,n){var i=n(242)(Object.getPrototypeOf,Object);t.exports=i},422:function(t,e,n){var i=n(240),r=n(423),o=n(151);t.exports=function(t){return o(t)?i(t,!0):r(t)}},423:function(t,e,n){var i=n(104),r=n(241),o=n(424),s=Object.prototype.hasOwnProperty;t.exports=function(t){if(!i(t))return o(t);var e=r(t),n=[];for(var a in t)("constructor"!=a||!e&&s.call(t,a))&&n.push(a);return n}},424:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},429:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return h}));n(9),n(22),n(23);var i={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;n.e(2).then(n.t.bind(null,533,7)).then((function(e){t.comp=e.default}))},methods:{clickCallback:function(t){var e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},r=(n(410),n(11)),o=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comp?n(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,s=(n(411),Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?n("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?n("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),a=(n(412),n(110)),u=n.n(a),c=n(414),l=n.n(c),f={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return l()(this.$props,u.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},h=Object(r.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},430:function(t,e,n){"use strict";var i=n(401),r={props:["stick","tag"],data:function(){return{needFloat:!1,stickBottom:0}},watch:{stick:function(){this.unStick(),this.stickHandle()}},mounted:function(){this.stickHandle()},beforeDestroy:function(){this.unStick()},methods:{stickHandle:function(){var t=this;if(this.stick){var e=Object(i.b)(this.stick,this);e&&(this._stickerScroll=function(){var n=t.$el.getBoundingClientRect(),i=document.body.scrollTop+document.documentElement.scrollTop;t.needFloat=document.body.offsetHeight-i-n.height<e.offsetHeight,t.stickBottom=e.offsetHeight},this._stickerScroll(),window.addEventListener("scroll",this._stickerScroll))}},unStick:function(){this.needFloat=!1,this.stickBottom=0,window.removeEventListener("scroll",this._stickerScroll)}}},o=(n(408),n(11)),s=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)(this.tag||"div",{tag:"component",staticClass:"sticker",class:this.needFloat?["stick-float"]:void 0,style:this.needFloat?{bottom:this.stickBottom+"px"}:void 0},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},440:function(t,e,n){},441:function(t,e,n){},442:function(t,e,n){},443:function(t,e,n){},473:function(t,e,n){"use strict";n(440)},474:function(t,e,n){"use strict";n(441)},475:function(t,e,n){"use strict";n(442)},476:function(t,e,n){"use strict";n(443)},535:function(t,e,n){"use strict";n.r(e);var i;n(9),n(22),n(23),n(400),n(407);function r(t){return t&&t.getBoundingClientRect?t.getBoundingClientRect().top+document.body.scrollTop+document.documentElement.scrollTop:0}var o={components:{Sticker:n(430).a},data:function(){return{activeIndex:0}},computed:{visible:function(){return this.$frontmatter&&!1!==this.$frontmatter.toc&&!!(this.$page&&this.$page.headers&&this.$page.headers.length)}},watch:{activeIndex:function(){var t=(this.$refs.chairTocItem||[])[this.activeIndex];if(t){var e=t.getBoundingClientRect(),n=this.$el.getBoundingClientRect(),i=e.top-n.top;i<20?this.$el.scrollTop=this.$el.scrollTop+i-20:i+e.height>n.height&&(this.$el.scrollTop+=e.top-(n.height-e.height))}},$route:function(){}},mounted:function(){var t=this,e=function(){t.$emit("visible-change",t.visible)};e(),this.$watch("visible",e),setTimeout((function(){return t.triggerEvt()}),1e3),this._onScroll=function(){return t.onScroll()},this._onHashChange=function(){var e=decodeURIComponent(location.hash.substring(1)),n=(t.$page.headers||[]).findIndex((function(t){return t.slug===e}));n>=0&&(t.activeIndex=n);var i=e&&document.getElementById(e);i&&window.scrollTo(0,r(i)-20)},window.addEventListener("scroll",this._onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this._onScroll),window.removeEventListener("hashchange",this._onHashChange)},methods:{onScroll:function(){var t=this;void 0===i&&(i=r(this.$el));for(var e=document.body.scrollTop+document.documentElement.scrollTop,n=this.$page.headers||[],o=0,s=function(e){t.activeIndex=e};o<n.length;o++){if(!(r(document.getElementById(n[o].slug))-50<e)){o||s(o);break}s(o)}},triggerEvt:function(){this._onScroll(),this._onHashChange()}}},s=(n(473),n(11)),a=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("Sticker",t._b({staticClass:"vuepress-toc"},"Sticker",t.$attrs,!1),t._l(t.$page.headers,(function(e,i){return n("div",{key:i,ref:"chairTocItem",refInFor:!0,staticClass:"vuepress-toc-item",class:["vuepress-toc-h"+e.level,{active:t.activeIndex===i}]},[n("a",{attrs:{href:"#"+e.slug,title:e.title}},[t._v(t._s(e.title))])])})),0):t._e()}),[],!1,null,null,null).exports,u=(n(75),n(153)),c=n.n(u),l=n(409),f=n.n(l),h=n(68),p={name:"PostTag",props:{tag:{type:String,required:!0}}},d=(n(474),Object(s.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"post-tag"},[e("router-link",{attrs:{to:"/tag/"+this.tag}},[e("span",[this._v(this._s(this.tag))])])],1)}),[],!1,null,"11530296",null).exports);c.a.extend(f.a);var v={name:"PostMeta",components:{NavigationIcon:h.c,ClockIcon:h.a,PostTag:d},props:{tags:{type:[Array,String]},author:{type:String},date:{type:String},location:{type:String}},computed:{resolvedDate:function(){return c.a.utc(this.date).format(this.$themeConfig.dateFormat||"ddd MMM DD YYYY")},resolvedTags:function(){return!this.tags||Array.isArray(this.tags)?this.tags:[this.tags]}}},g=(n(475),{components:{Toc:a,PostMeta:Object(s.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-meta"},[t.author?n("div",{staticClass:"post-meta-author",attrs:{itemprop:"publisher author",itemtype:"http://schema.org/Person",itemscope:""}},[n("NavigationIcon"),t._v(" "),n("span",{attrs:{itemprop:"name"}},[t._v(t._s(t.author))]),t._v(" "),t.location?n("span",{attrs:{itemprop:"address"}},[t._v("   in "+t._s(t.location))]):t._e()],1):t._e(),t._v(" "),t.date?n("div",{staticClass:"post-meta-date"},[n("ClockIcon"),t._v(" "),n("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:t.date}},[t._v("\n      "+t._s(t.resolvedDate)+"\n    ")])],1):t._e(),t._v(" "),t.tags?n("ul",{staticClass:"post-meta-tags",attrs:{itemprop:"keywords"}},t._l(t.resolvedTags,(function(t){return n("PostTag",{key:t,attrs:{tag:t}})})),1):t._e()])}),[],!1,null,null,null).exports,Comment:n(429).a,Newsletter:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,537))}}}),m=(n(476),Object(s.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"vuepress-theme-blog__post-layout"}},[n("article",{staticClass:"vuepress-blog-theme-content",attrs:{itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[n("header",[n("h1",{staticClass:"post-title",attrs:{itemprop:"name headline"}},[t._v("\n        "+t._s(t.$frontmatter.title)+"\n      ")]),t._v(" "),n("PostMeta",{attrs:{tags:t.$frontmatter.tags,author:t.$frontmatter.author,date:t.$frontmatter.date,location:t.$frontmatter.location}})],1),t._v(" "),n("Content",{attrs:{itemprop:"articleBody"}}),t._v(" "),n("footer",[t.$service.email.enabled?n("Newsletter"):t._e(),t._v(" "),n("hr"),t._v(" "),n("Comment")],1)],1),t._v(" "),n("Toc")],1)}),[],!1,null,null,null));e.default=m.exports}}]);