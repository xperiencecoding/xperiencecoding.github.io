"use strict";(self.webpackChunkxperience=self.webpackChunkxperience||[]).push([[733],{676:function(t,i,e){e.d(i,{Or:function(){return r},w6:function(){return c}});var n=e(2982),a=e(5671),o=e(3144),r=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,a.Z)(this,t),this.inactive=void 0,this.active=void 0,this.inactive=i,this.active=e,this.active.transition={}}return(0,o.Z)(t,[{key:"spring",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return this.active.transition.stiffness=t,this.active.transition.type="spring",this.active.transition.damping=e,this.active.transition.mass=n,this.active.transition.delay=i,this}},{key:"delay_children",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5;return this.active.transition.delayChildren=t,this}},{key:"stagger",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.05,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.active.transition.staggerChildren=t,this.active.transition.staggerDirection=i?-1:1,this}},{key:"when",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.active.transition.when=t?"afterChildren":"beforeChildren",this}},{key:"loop",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mirror",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Infinity",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return this.active.transition.repeatType=t,this.active.transition.repeat=i,this.active.transition.repeatDelay=e,this}},{key:"add",value:function(t,i,e){return this.inactive[t]=i,this.active[t]=e,this}},{key:"default",value:function(){return this.spring(100),this.delay_children(),this}},{key:"build",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t&&i?this.inactive.transition=this.active.transition:t||(delete this.inactive.transition,delete this.active.transition);var e={inactive:this.inactive,active:this.active};return e}}],[{key:"getSpring",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:120,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return{type:"spring",stiffness:t,delay:i,damping:e,mass:n}}},{key:"opacity",value:function(i){return new t({opacity:0},{opacity:1})}},{key:"point",value:function(i){return new t({x:i[0]+"px",y:i[1]+"px",opacity:0},{x:0,y:0,opacity:1})}},{key:"flipX",value:function(){return new t({transform:"rotateX(180deg)"},{transform:"rotateX(0deg)"})}},{key:"flipY",value:function(){return new t({transform:"rotateY(180deg)"},{transform:"rotateY(0deg)"})}},{key:"bounceY",value:function(i){return new t({y:i+"px",opacity:0},{y:"0px",opacity:1})}},{key:"bounceX",value:function(i){return new t({x:i+"px",opacity:0},{x:"0px",opacity:1})}},{key:"scale",value:function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0,1],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[0,1];return new t({transform:"scale(".concat(i[0],", ").concat(e[0],")"),opacity:0},{transform:"scale(".concat(i[1],", ").concat(e[1],")"),opacity:1})}}]),t}();function c(t,i,e){return(0,n.Z)(Array(Math.floor((i-t)/e)+1)).map((function(i,n){return t+n*e}))}},2733:function(t,i,e){e.r(i);var n=e(2791),a=(e(5470),e(5167),e(1856)),o=e(7349),r=e(676),c=e(7078),s=e(6871),l=e(7205),d=e(184);i.default=function(){var t=(0,c.F)(),i=(0,s.s0)();return(0,n.useEffect)((function(){t.setLoadState(-2)}),[t]),(0,d.jsx)("div",{className:"apex-coding w-100 h-100 col-cc",children:(0,d.jsx)(a.M,{children:-2===t.loadState&&(0,d.jsxs)(o.E.div,{className:"document col-st",variants:r.Or.bounceY(1200).spring(240,0,30).build(),initial:"inactive",animate:"active",exit:"inactive",children:[(0,d.jsxs)("div",{className:"h0 oxanium bold col-cc",style:{backgroundImage:'url("https://campussuite-storage.s3.amazonaws.com/prod/1059662/301794b6-30da-11e7-9e05-124f7febbf4a/1811609/d77e7936-9ff2-11e8-8fd6-120544974b42/optimizations/1")',backgroundSize:"cover",backgroundPosition:"center"},children:["Education",(0,d.jsx)(o.E.div,{className:"back",tabIndex:0,onClick:function(){t.setLoadState(-1),setTimeout((function(){i("/")}),500)},whileHover:{boxShadow:"0 0 1rem white"},children:"<"})]}),(0,d.jsx)("div",{className:"list row-bc w-100",style:{padding:"20px"},children:(0,d.jsxs)("ul",{className:"oxanium h3",style:{flex:1},children:[(0,d.jsx)("li",{children:"Weekdays from 1PM - 3PM at Libertyville High School"}),(0,d.jsx)("li",{children:"Coding Language Specialties: Python, JavaScript, and Java classes."}),(0,d.jsx)("li",{children:"Previously, we have done 3D printing, Micro Bits, and Battle Bots."}),(0,d.jsx)("li",{children:"We have had 75 students."})]})}),(0,d.jsx)("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",marginTop:"20px"},children:(0,d.jsx)(l.Z,{variant:"contained",onClick:function(){return e="/form?toggle=education",t.setLoadState(-2),void setTimeout((function(){i(e),t.setFullscreen(!1)}),500);var e},sx:{backgroundColor:"#424242",color:"#FFFFFF",border:"2px solid #424242",borderRadius:"5px",padding:"10px 20px","&:hover":{backgroundColor:"#616161",borderColor:"#616161",boxShadow:"0 0 10px rgba(255, 255, 255, 0.7)"}},children:"Sign up for notifications for upcoming camps!"})}),(0,d.jsx)(o.E.div,{tabIndex:0,onClick:function(){return window.open("mailto:adam.lueken@d128.org")},className:"click-to col-cc oxanium h6 bold w-100 text-centered",whileHover:{boxShadow:"0 0 1rem white"},children:"Click to contact Adam Lueken (adam.lueken@d128.org) for more information."})]})})})}},5470:function(){},5167:function(){}}]);
//# sourceMappingURL=733.158ad4bf.chunk.js.map