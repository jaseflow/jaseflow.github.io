(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{237:function(t,e,r){var content=r(259);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("1b65188e",content,!0,{sourceMap:!1})},238:function(t,e,r){var content=r(261);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("09dd00a6",content,!0,{sourceMap:!1})},246:function(t,e,r){"use strict";r.r(e);var o=r(0).a.extend({name:"WorkItem",props:{title:String,logoUrl:String,screenshotUrl:String,product:String,description:String,to:String,brand:String,logo:String,screenshot:String}}),n=(r(258),r(15)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"WorkItem"},[r("div",{staticClass:"work__hero",class:"brand-bg-"+t.brand},[r("div",{staticClass:"content work__hero-content"},[r("img",{staticClass:"WorkItem__logo",class:"WorkItem__logo--"+t.brand,attrs:{src:t.logo,alt:""}}),t._v(" "),r("img",{staticClass:"WorkItem__screenshot",attrs:{src:t.screenshot,alt:""}})])]),t._v(" "),r("div",{staticClass:"WorkItem__body"},[r("div",[r("h2",{staticClass:"flat"},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),r("h3",{staticClass:"font-light small-caps"},[t._v("\n        "+t._s(t.product)+"\n      ")]),t._v(" "),r("p",{staticClass:"margin-b-five"},[t._v("\n        "+t._s(t.description)+"\n      ")]),t._v(" "),r("cta-button",{attrs:{to:t.to,"full-width":"",type:"tertiary",text:"See case study"}},[t._v("\n        See case study\n      ")])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CtaButton:r(172).default})},258:function(t,e,r){"use strict";r(237)},259:function(t,e,r){(e=r(29)(!1)).push([t.i,"@media(max-width:767px){.work__hero{margin-left:-1rem;margin-right:-1rem;margin-bottom:1rem}}.work__hero{padding-bottom:56.25%}.work__hero,[class^=ratio]{position:relative}.work__hero-content{display:flex;align-items:center;padding:1rem 1rem 1rem 2rem;overflow:hidden}.WorkItem__screenshot{width:200px;position:absolute;right:-50px;top:2rem;max-width:none}.WorkItem__logo--expedia,.WorkItem__logo--wotif{width:150px}.WorkItem__logo--grow2,.WorkItem__logo--hipcharts,.WorkItem__logo--tripjunkie{width:180px}.WorkItem__logo--finx{width:100px}.WorkItem__logo--bb{width:80px}@media(min-width:768px){.work__item{display:grid;grid-template-columns:320px 1fr;grid-column-gap:2rem}.work__hero{height:480px}.work__hero img{display:block}}@media(min-width:1200px){.WorkItem{display:grid;grid-template-columns:320px 1fr}.WorkItem__body{padding-left:4rem;display:flex;align-items:center}.work__hero-content{flex-direction:column;padding-top:4rem;padding-left:2rem}.WorkItem__screenshot{right:auto;left:50%;width:400px;margin-left:-200px;top:200px}}",""]),t.exports=e},260:function(t,e,r){"use strict";r(238)},261:function(t,e,r){(e=r(29)(!1)).push([t.i,".work__intro{margin-bottom:3rem}",""]),t.exports=e},295:function(t,e,r){"use strict";r.r(e);r(31);var o=r(4),n={components:{WorkItem:r(246).default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("work").sortBy("createdAt","asc").fetch();case 3:return o=e.sent,e.abrupt("return",{work:o});case 5:case"end":return e.stop()}}),e)})))()}},l=(r(260),r(15)),component=Object(l.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container work"},[this._m(0),this._v(" "),this._l(this.work,(function(t){return e("work-item",{key:t.slug,staticClass:"margin-b-six",attrs:{title:t.title,product:t.product,description:t.description,to:t.path,logo:t.innerLogo,screenshot:t.heroScreenshot,brand:t.brand}})}))],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"work__intro"},[e("h1",{staticClass:"title flat"},[this._v("\n      Portfolio\n    ")]),this._v(" "),e("h2",{staticClass:"font-light"},[this._v("\n      Here are some of the projects I've  had the pleasure to work on.\n    ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{WorkItem:r(246).default})}}]);