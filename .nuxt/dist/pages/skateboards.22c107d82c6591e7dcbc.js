webpackJsonp([0],{"32Tp":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("xKkw"),i=a("iHzk"),o=!1;var n=function(e){o||a("TbxV")},r=a("VU/8")(s.a,i.a,!1,n,"data-v-0cb3ec9e",null);r.options.__file="pages/skateboards.vue",t.default=r.exports},"4Aej":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"body[data-v-05b9596e]{font-family:Arial,Helvetica,sans-serif}.art-gallery[data-v-05b9596e]{padding:20px}.featured-image img[data-v-05b9596e]{max-height:500px;width:auto}.image-title[data-v-05b9596e]{clear:both}.keywords[data-v-05b9596e]{color:#bbb}.thumbnail[data-v-05b9596e]{width:100px;height:100px;padding:5px;border:1px solid #fff;-o-object-fit:cover;object-fit:cover;overflow:hidden}",""])},"5Tc0":function(e,t,a){e.exports=a.p+"img/macpeters_drWho.3c93ce0.jpg"},ADky:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"art-gallery",attrs:{options:e.images}},[e._l(e.images,function(t){return a("span",{key:t.id},[a("img",{staticClass:"thumbnail",attrs:{src:t.image},on:{click:function(a){e.choose(t)}}})])}),a("div",{staticClass:"featured-image"},[a("img",{attrs:{src:e.chosenImage.image,alt:e.chosenImage.title,title:e.chosenImage.title}}),a("h3",[e._v(e._s(e.chosenImage.title))]),a("h4",[e._v(e._s(e.chosenImage.description))]),a("div",{staticClass:"keywords"},[e._v("Keywords: "),a("span",[e._v(e._s(e.chosenImage.keywords))])])])],2)};s._withStripped=!0;var i={render:s,staticRenderFns:[]};t.a=i},AahH:function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"",""])},IcEX:function(e,t,a){"use strict";t.a={name:"imageList",props:["options"],components:{},data:function(e){return{images:null,imageArray:e,chosenImage:{image:null,title:"",description:"",keywords:null}}},methods:{choose:function(e){this.chosenImage=e}},beforeMount:function(){this.images=this.$parent.images,this.choose(this.images[0])},build:{assetsPublicPath:"/",assetsSubDirectory:"assets"}}},KCh5:function(e,t,a){var s=a("4Aej");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("0fc5bf5e",s,!1,{sourceMap:!1})},Pzvy:function(e,t,a){e.exports=a.p+"img/macpeters_brokenRobot.8c3520c.jpg"},TbxV:function(e,t,a){var s=a("AahH");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("675519bd",s,!1,{sourceMap:!1})},iHzk:function(e,t,a){"use strict";var s=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("Hand Painted Skateboard Decks")]),t("h2",[this._v("Custom Painted on Request")]),t("div",{staticClass:"page-description"},[this._v("\n    All of these decks are recycled - they had their day in the sun, and were ridden to near destruction.\n    I enjoy giving new life to something that might otherwise have wound up in a dump somewhere.\n    If you are in Toronto, and have a bunch of old decks lying around, let me know, and I'll take them off your hands - even snapped in half.\n  ")]),t("imageList")],1)};s._withStripped=!0;var i={render:s,staticRenderFns:[]};t.a=i},vu8p:function(e,t,a){"use strict";var s=a("IcEX"),i=a("ADky"),o=!1;var n=function(e){o||a("KCh5")},r=a("VU/8")(s.a,i.a,!1,n,"data-v-05b9596e",null);r.options.__file="components/imageList.vue",t.a=r.exports},xKkw:function(e,t,a){"use strict";var s=a("Pzvy"),i=a.n(s),o=a("5Tc0"),n=a.n(o),r=a("vu8p"),c="skateboards, skate art, skateboard art, painted decks, lowbrow, street art, recycled skateboards, sk8, skater, custom deck, psychedelic, visionary, ";t.a={name:"Skateboards",components:{imageList:r.a},data:function(){return{images:[{image:i.a,title:"Broken Robot",description:"With wires sparking, and cracked eyes, this poor robot needs some TLC",keywords:c+"robot, wires, tech, mech, bot, technology, broken robot, disassembled"},{image:n.a,title:"Dr Who: Exterminate",description:"Inspired by Dr Who: a tardis, a dalek, travel through time and space, and that question that can never be answered: Dr. Who?",keywords:c+"Dr Who, tardis, dalek, space travel, exterminate, time, space, time and relative dimension in space, doctor, time lords, companion, police box, blue box"}],chosenImage:null}},build:{assetsPublicPath:"/",assetsSubDirectory:"assets"}}}});