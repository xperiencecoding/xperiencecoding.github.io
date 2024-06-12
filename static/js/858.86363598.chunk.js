"use strict";(self.webpackChunkxperience=self.webpackChunkxperience||[]).push([[858],{676:function(t,e,n){n.d(e,{Or:function(){return o},w6:function(){return c}});var i=n(2982),a=n(5671),r=n(3144),o=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,a.Z)(this,t),this.inactive=void 0,this.active=void 0,this.inactive=e,this.active=n,this.active.transition={}}return(0,r.Z)(t,[{key:"spring",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return this.active.transition.stiffness=t,this.active.transition.type="spring",this.active.transition.damping=n,this.active.transition.mass=i,this.active.transition.delay=e,this}},{key:"delay_children",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5;return this.active.transition.delayChildren=t,this}},{key:"stagger",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.05,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.active.transition.staggerChildren=t,this.active.transition.staggerDirection=e?-1:1,this}},{key:"when",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.active.transition.when=t?"afterChildren":"beforeChildren",this}},{key:"loop",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mirror",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Infinity",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return this.active.transition.repeatType=t,this.active.transition.repeat=e,this.active.transition.repeatDelay=n,this}},{key:"add",value:function(t,e,n){return this.inactive[t]=e,this.active[t]=n,this}},{key:"default",value:function(){return this.spring(100),this.delay_children(),this}},{key:"build",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t&&e?this.inactive.transition=this.active.transition:t||(delete this.inactive.transition,delete this.active.transition);var n={inactive:this.inactive,active:this.active};return n}}],[{key:"getSpring",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:120,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return{type:"spring",stiffness:t,delay:e,damping:n,mass:i}}},{key:"opacity",value:function(e){return new t({opacity:0},{opacity:1})}},{key:"point",value:function(e){return new t({x:e[0]+"px",y:e[1]+"px",opacity:0},{x:0,y:0,opacity:1})}},{key:"flipX",value:function(){return new t({transform:"rotateX(180deg)"},{transform:"rotateX(0deg)"})}},{key:"flipY",value:function(){return new t({transform:"rotateY(180deg)"},{transform:"rotateY(0deg)"})}},{key:"bounceY",value:function(e){return new t({y:e+"px",opacity:0},{y:"0px",opacity:1})}},{key:"bounceX",value:function(e){return new t({x:e+"px",opacity:0},{x:"0px",opacity:1})}},{key:"scale",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0,1],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,1];return new t({transform:"scale(".concat(e[0],", ").concat(n[0],")"),opacity:0},{transform:"scale(".concat(e[1],", ").concat(n[1],")"),opacity:1})}}]),t}();function c(t,e,n){return(0,i.Z)(Array(Math.floor((e-t)/n)+1)).map((function(e,i){return t+i*n}))}},6022:function(t,e,n){n(2791),n(5470),n(5931);var i=n(7349),a=n(6871),r=n(7078),o=n(184);e.Z=function(t){var e=(0,a.s0)(),n=(0,r.F)();return(0,o.jsxs)(i.E.div,{tabIndex:0,className:"apex-brand expletus bold row-sc",whileHover:t.cannotClick?{}:{boxShadow:"0 0 1rem white"},onClick:t.cannotClick?function(){}:function(){n.setLoadState(-1),setTimeout((function(){return e("/")}),500)},children:[(0,o.jsx)("div",{className:"font-300",children:"XP"}),(0,o.jsxs)("div",{className:"captions col-ss font-100",children:[(0,o.jsx)("div",{children:"Education +"}),(0,o.jsx)("div",{children:"Consulting"})]})]})}},9858:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var i=n(2791),a=(n(5470),n(1856)),r=n(7078),o=n(885),c=n(7349),s=n(6022),l=n(1787),u=n(6871),v=n(184),d=[["Education","/coding"],["Consulting","/consulting"],["Projects","/projects"],["Team","/team"],["Form","/form"]];var h=function(t){var e=(0,l.E)(),n=(0,r.F)(),a=(0,u.s0)(),h=(0,u.TH)(),f=(0,i.useState)(!1),p=(0,o.Z)(f,2),m=p[0],y=p[1];return(0,v.jsxs)(c.E.div,{className:"apex-navigation w-100 row-bc",onMouseEnter:function(){return y(!0)},onMouseLeave:function(){return y(!1)},animate:0==e.scrollY||m?{top:"0%"}:{top:"-5rem"},initial:{top:"-5rem"},exit:{top:"-5rem"},children:[(0,v.jsx)("div",{children:(0,v.jsx)(s.Z,{})}),(0,v.jsx)("div",{className:"buttons oxanium bold row-cc",children:d.map((function(t,e){return(0,v.jsx)(c.E.div,{tabIndex:0,className:"h3",whileHover:{boxShadow:"0 0 1rem white"},onClick:function(){h.pathname!==t[1]&&(n.setLoadState(-3),setTimeout((function(){n.setFullscreen(!1),a(t[1])}),500))},children:t[0]},e)}))})]})};var f=function(t){return(0,v.jsxs)("div",{className:"bold oxanium w-100 text-centered apex-footer",children:["Copyright 2022 ",(0,v.jsx)("a",{href:"https://wikilabs.dev",target:"_blank",children:"wikiLabs"}),". Some rights reserved."]})},p=(n(5931),n(676));var m=function(t){var e=(0,i.useState)([0,0]),n=(0,o.Z)(e,2),a=n[0],r=n[1];return(0,i.useEffect)((function(){r([Math.random(),Math.random()])}),[]),(0,v.jsx)(c.E.div,{className:"particle",style:{left:"".concat(120*a[0]-10,"%"),top:"".concat(200*a[1],"%"),width:"".concat((24-12*a[1]).toFixed(0),"px")},animate:{top:"".concat(100*(a[1]-1),"%"),opacity:0},transition:{top:{from:"".concat(200*a[1],"%"),duration:20*Math.random()+20,repeatType:"loop",repeat:1/0},opacity:{from:.3,duration:2*Math.random()+2,repeat:1/0,repeatType:"mirror"}}})};var y=function(t){var e,n;return(0,v.jsxs)("div",{className:"particle-wrapper w-100 h-100",children:[(0,p.w6)(0,null!==(e=t.particleCount)&&void 0!==e?e:100,1).map((function(t,e){return(0,v.jsx)(m,{},e)})),(0,v.jsx)("div",{className:null!==(n=t.className)&&void 0!==n?n:" bump",children:t.children})]})};var g=function(t){var e=(0,r.F)();return(0,i.useEffect)((function(){e.setPersistentBg("black")}),[]),(0,v.jsxs)("div",{className:"apex-layout col-sc w-100",style:{backgroundColor:e.persistentBg},children:[(0,v.jsx)(a.M,{children:!e.fullscreen&&(0,v.jsx)(h,{})}),(0,v.jsx)(y,{children:t.children}),(0,v.jsx)(f,{})]})}},5470:function(){},5931:function(){}}]);
//# sourceMappingURL=858.86363598.chunk.js.map