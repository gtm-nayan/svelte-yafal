import{S as V,i as X,s as Y,F as me,L as Q,M as U,a as d,d as c,b as u,N as se,O as K,f as z,g as B,G as ge,H as pe,I as he,q as h,o as v,K as A,w,x as b,y as E,B as I,P as ce,e as C,k as T,c as F,m as R,J as p,Q as ve,R as de,T as $e,U as ye,V as Se,W as we,t as j,h as G,j as Ee,n as ue,p as _e,l as re,X as Ie,Y as be}from"../chunks/vendor-b4c4b353.js";function ze(f){let e,n,t=`${f[6]}em`,a;const s=f[8].default,l=me(s,f,f[7],null);return{c(){e=Q("svg"),l&&l.c(),this.h()},l(o){e=U(o,"svg",{class:!0,style:!0,viewBox:!0});var r=d(e);l&&l.l(r),r.forEach(c),this.h()},h(){u(e,"class",n=se(f[3])+" svelte-1lgkl44"),u(e,"style",f[4]),u(e,"viewBox","0 0 512 512"),K(e,"spin",f[0]),K(e,"pulse",f[1]),K(e,"beat",f[2]),z(e,"float",f[5],!1),z(e,"font-size",t,!1)},m(o,r){B(o,e,r),l&&l.m(e,null),a=!0},p(o,[r]){l&&l.p&&(!a||r&128)&&ge(l,s,o,o[7],a?he(s,o[7],r,null):pe(o[7]),null),(!a||r&8&&n!==(n=se(o[3])+" svelte-1lgkl44"))&&u(e,"class",n),(!a||r&16)&&u(e,"style",o[4]),r&9&&K(e,"spin",o[0]),r&10&&K(e,"pulse",o[1]),r&12&&K(e,"beat",o[2]),r&32&&z(e,"float",o[5],!1),r&64&&t!==(t=`${o[6]}em`)&&z(e,"font-size",t,!1)},i(o){a||(h(l,o),a=!0)},o(o){v(l,o),a=!1},d(o){o&&c(e),l&&l.d(o)}}}function Ce(f,e,n){let{$$slots:t={},$$scope:a}=e,{spin:s=!1}=e,{pulse:l=!1}=e,{beat:o=!1}=e,{class:r=""}=e,{style:i=""}=e,{pull:m=null}=e,{size:$=1}=e;return f.$$set=g=>{"spin"in g&&n(0,s=g.spin),"pulse"in g&&n(1,l=g.pulse),"beat"in g&&n(2,o=g.beat),"class"in g&&n(3,r=g.class),"style"in g&&n(4,i=g.style),"pull"in g&&n(5,m=g.pull),"size"in g&&n(6,$=g.size),"$$scope"in g&&n(7,a=g.$$scope)},[s,l,o,r,i,m,$,a,t]}class H extends V{constructor(e){super();X(this,e,Ce,ze,Y,{spin:0,pulse:1,beat:2,class:3,style:4,pull:5,size:6})}}function Fe(f){let e,n,t,a,s,l,o,r;return{c(){e=Q("path"),s=Q("path"),this.h()},l(i){e=U(i,"path",{d:!0,fill:!0,"fill-opacity":!0}),d(e).forEach(c),s=U(i,"path",{d:!0,fill:!0,"fill-opacity":!0}),d(s).forEach(c),this.h()},h(){u(e,"d",n=f[12][4][0]),u(e,"fill",t=f[8]||f[6]||"currentColor"),u(e,"fill-opacity",a=f[9]?f[10]:f[11]),u(s,"d",l=f[12][4][1]),u(s,"fill",o=f[7]||f[6]||"currentColor"),u(s,"fill-opacity",r=f[9]?f[11]:f[10])},m(i,m){B(i,e,m),B(i,s,m)},p(i,m){m&4096&&n!==(n=i[12][4][0])&&u(e,"d",n),m&320&&t!==(t=i[8]||i[6]||"currentColor")&&u(e,"fill",t),m&3584&&a!==(a=i[9]?i[10]:i[11])&&u(e,"fill-opacity",a),m&4096&&l!==(l=i[12][4][1])&&u(s,"d",l),m&192&&o!==(o=i[7]||i[6]||"currentColor")&&u(s,"fill",o),m&3584&&r!==(r=i[9]?i[11]:i[10])&&u(s,"fill-opacity",r)},d(i){i&&c(e),i&&c(s)}}}function Be(f){let e,n,t;return{c(){e=Q("path"),this.h()},l(a){e=U(a,"path",{d:!0,fill:!0}),d(e).forEach(c),this.h()},h(){u(e,"d",n=f[12][4]),u(e,"fill",t=f[6]||f[7]||"currentColor")},m(a,s){B(a,e,s)},p(a,s){s&4096&&n!==(n=a[12][4])&&u(e,"d",n),s&192&&t!==(t=a[6]||a[7]||"currentColor")&&u(e,"fill",t)},d(a){a&&c(e)}}}function Oe(f){let e;function n(s,l){return typeof s[12][4]=="string"?Be:Fe}let t=n(f),a=t(f);return{c(){e=Q("g"),a.c(),this.h()},l(s){e=U(s,"g",{class:!0});var l=d(e);a.l(l),l.forEach(c),this.h()},h(){u(e,"class","svelte-wrbhy1"),z(e,"--w",f[12][0],!1),z(e,"--h",f[12][1],!1),z(e,"--x",f[4],!1),z(e,"--y",f[5],!1),z(e,"--sx",f[3]*(f[0]?-1:1),!1),z(e,"--sy",f[3]*(f[1]?-1:1),!1),z(e,"--r",f[2],!1)},m(s,l){B(s,e,l),a.m(e,null)},p(s,[l]){t===(t=n(s))&&a?a.p(s,l):(a.d(1),a=t(s),a&&(a.c(),a.m(e,null))),l&4096&&z(e,"--w",s[12][0],!1),l&4096&&z(e,"--h",s[12][1],!1),l&16&&z(e,"--x",s[4],!1),l&32&&z(e,"--y",s[5],!1),l&9&&z(e,"--sx",s[3]*(s[0]?-1:1),!1),l&10&&z(e,"--sy",s[3]*(s[1]?-1:1),!1),l&4&&z(e,"--r",s[2],!1)},i:A,o:A,d(s){s&&c(e),a.d()}}}function Le(f,e,n){let{flipX:t=!1}=e,{flipY:a=!1}=e,{rotate:s=0}=e,{scale:l=1}=e,{translateX:o=0}=e,{translateY:r=0}=e,{color:i=""}=e,{primaryColor:m=""}=e,{secondaryColor:$=""}=e,{swapOpacity:g=!1}=e,{primaryOpacity:y=.75}=e,{secondaryOpacity:S=.25}=e,{icon:O}=e,J;return f.$$set=_=>{"flipX"in _&&n(0,t=_.flipX),"flipY"in _&&n(1,a=_.flipY),"rotate"in _&&n(2,s=_.rotate),"scale"in _&&n(3,l=_.scale),"translateX"in _&&n(4,o=_.translateX),"translateY"in _&&n(5,r=_.translateY),"color"in _&&n(6,i=_.color),"primaryColor"in _&&n(7,m=_.primaryColor),"secondaryColor"in _&&n(8,$=_.secondaryColor),"swapOpacity"in _&&n(9,g=_.swapOpacity),"primaryOpacity"in _&&n(10,y=_.primaryOpacity),"secondaryOpacity"in _&&n(11,S=_.secondaryOpacity),"icon"in _&&n(13,O=_.icon)},f.$$.update=()=>{f.$$.dirty&8192&&n(12,J=O.icon)},[t,a,s,l,o,r,i,m,$,g,y,S,J,O]}class N extends V{constructor(e){super();X(this,e,Le,Oe,Y,{flipX:0,flipY:1,rotate:2,scale:3,translateX:4,translateY:5,color:6,primaryColor:7,secondaryColor:8,swapOpacity:9,primaryOpacity:10,secondaryOpacity:11,icon:13})}}function Te(f){let e,n;return e=new N({props:{icon:ce,color:"var(--blue-3)"}}),{c(){w(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},p:A,i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function Re(f){let e,n;return e=new H({props:{size:3,$$slots:{default:[Te]},$$scope:{ctx:f}}}),{c(){w(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},p(t,[a]){const s={};a&1&&(s.$$scope={dirty:a,ctx:t}),e.$set(s)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}class Ae extends V{constructor(e){super();X(this,e,null,Re,Y,{})}}var ke=`<!-- __START_VISIBLE__ -->
<script lang="ts">
	import { FaSvg, Icon } from 'svelte-yafal';
	import { faFlag } from '@fortawesome/free-solid-svg-icons';
<\/script>

<FaSvg size={3}><Icon icon={faFlag} color="var(--blue-3)"/></FaSvg>
<!-- __END_VISIBLE__ -->
`;function Ne(f){let e,n;return e=new N({props:{icon:ve}}),{c(){w(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},p:A,i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function Ve(f){let e,n;return e=new N({props:{icon:de}}),{c(){w(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},p:A,i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function Xe(f){let e,n;return e=new N({props:{icon:$e}}),{c(){w(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},p:A,i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function Ye(f){let e,n,t,a,s,l,o;return n=new H({props:{size:3,beat:!0,$$slots:{default:[Ne]},$$scope:{ctx:f}}}),a=new H({props:{size:3,spin:!0,$$slots:{default:[Ve]},$$scope:{ctx:f}}}),l=new H({props:{size:3,pulse:!0,$$slots:{default:[Xe]},$$scope:{ctx:f}}}),{c(){e=C("span"),w(n.$$.fragment),t=T(),w(a.$$.fragment),s=T(),w(l.$$.fragment)},l(r){e=F(r,"SPAN",{});var i=d(e);b(n.$$.fragment,i),t=R(i),b(a.$$.fragment,i),s=R(i),b(l.$$.fragment,i),i.forEach(c)},m(r,i){B(r,e,i),E(n,e,null),p(e,t),E(a,e,null),p(e,s),E(l,e,null),o=!0},p(r,[i]){const m={};i&1&&(m.$$scope={dirty:i,ctx:r}),n.$set(m);const $={};i&1&&($.$$scope={dirty:i,ctx:r}),a.$set($);const g={};i&1&&(g.$$scope={dirty:i,ctx:r}),l.$set(g)},i(r){o||(h(n.$$.fragment,r),h(a.$$.fragment,r),h(l.$$.fragment,r),o=!0)},o(r){v(n.$$.fragment,r),v(a.$$.fragment,r),v(l.$$.fragment,r),o=!1},d(r){r&&c(e),I(n),I(a),I(l)}}}class De extends V{constructor(e){super();X(this,e,null,Ye,Y,{})}}var Pe=`<script lang="ts">
	import { faCog, faHeart, faSpinner } from '@fortawesome/free-solid-svg-icons';
	import { FaSvg, Icon } from 'svelte-yafal';
<\/script>

<span>
	<!-- __START_VISIBLE__ -->
	<FaSvg size={3} beat><Icon icon={faHeart} /></FaSvg>
	<FaSvg size={3} spin><Icon icon={faCog} /></FaSvg>
	<FaSvg size={3} pulse><Icon icon={faSpinner} /></FaSvg>
	<!-- __END_VISIBLE__ -->
</span>
`;function He(f){let e,n;return e=new N({props:{icon:ce,flipX:!0,scale:.8}}),{c(){w(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},p:A,i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function Me(f){let e,n;return e=new N({props:{icon:ye,flipY:!0,rotate:30,scale:.6}}),{c(){w(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},p:A,i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function qe(f){let e,n,t,a,s;return n=new H({props:{size:3,$$slots:{default:[He]},$$scope:{ctx:f}}}),a=new H({props:{size:3,$$slots:{default:[Me]},$$scope:{ctx:f}}}),{c(){e=C("span"),w(n.$$.fragment),t=T(),w(a.$$.fragment),this.h()},l(l){e=F(l,"SPAN",{class:!0});var o=d(e);b(n.$$.fragment,o),t=R(o),b(a.$$.fragment,o),o.forEach(c),this.h()},h(){u(e,"class","svelte-e0by7f")},m(l,o){B(l,e,o),E(n,e,null),p(e,t),E(a,e,null),s=!0},p(l,[o]){const r={};o&1&&(r.$$scope={dirty:o,ctx:l}),n.$set(r);const i={};o&1&&(i.$$scope={dirty:o,ctx:l}),a.$set(i)},i(l){s||(h(n.$$.fragment,l),h(a.$$.fragment,l),s=!0)},o(l){v(n.$$.fragment,l),v(a.$$.fragment,l),s=!1},d(l){l&&c(e),I(n),I(a)}}}class je extends V{constructor(e){super();X(this,e,null,qe,Y,{})}}var Ge=`<script lang="ts">
	import { faFlag, faRedo } from '@fortawesome/free-solid-svg-icons';
	import { FaSvg, Icon } from 'svelte-yafal';
<\/script>

<span>
	<!-- __START_VISIBLE__ -->
	<FaSvg size={3}>
		<Icon icon={faFlag} flipX scale={0.8} />
	</FaSvg>

	<FaSvg size={3}>
		<Icon icon={faRedo} flipY rotate={30} scale={0.6} />
	</FaSvg>
	<!-- __END_VISIBLE__ -->
</span>

<style>
	span > :global(svg) {
		background-color: var(--blue-3);
		border-radius: var(--radius-1);
	}
</style>
`;function Je(f){let e,n,t,a,s,l,o;return e=new N({props:{icon:Se}}),t=new N({props:{icon:we,color:"white",scale:.25,translateX:-150,translateY:10}}),{c(){w(e.$$.fragment),n=T(),w(t.$$.fragment),a=T(),s=Q("text"),l=j("27"),this.h()},l(r){b(e.$$.fragment,r),n=R(r),b(t.$$.fragment,r),a=R(r),s=U(r,"text",{x:!0,y:!0,class:!0});var i=d(s);l=G(i,"27"),i.forEach(c),this.h()},h(){u(s,"x","150"),u(s,"y","450"),u(s,"class","svelte-1kcedda")},m(r,i){E(e,r,i),B(r,n,i),E(t,r,i),B(r,a,i),B(r,s,i),p(s,l),o=!0},p:A,i(r){o||(h(e.$$.fragment,r),h(t.$$.fragment,r),o=!0)},o(r){v(e.$$.fragment,r),v(t.$$.fragment,r),o=!1},d(r){I(e,r),r&&c(n),I(t,r),r&&c(a),r&&c(s)}}}function Ke(f){let e,n,t;return n=new H({props:{size:3,$$slots:{default:[Je]},$$scope:{ctx:f}}}),{c(){e=C("span"),w(n.$$.fragment)},l(a){e=F(a,"SPAN",{});var s=d(e);b(n.$$.fragment,s),s.forEach(c)},m(a,s){B(a,e,s),E(n,e,null),t=!0},p(a,[s]){const l={};s&1&&(l.$$scope={dirty:s,ctx:a}),n.$set(l)},i(a){t||(h(n.$$.fragment,a),t=!0)},o(a){v(n.$$.fragment,a),t=!1},d(a){a&&c(e),I(n)}}}class Qe extends V{constructor(e){super();X(this,e,null,Ke,Y,{})}}var Ue=`<script lang="ts">
	import { faCalendar, faSun } from '@fortawesome/free-solid-svg-icons';
	import { FaSvg, Icon } from 'svelte-yafal';
<\/script>

<span>
	<!-- __START_VISIBLE__ -->
	<FaSvg size={3}>
		<Icon icon={faCalendar} />
		<Icon icon={faSun} color="white" scale={0.25} translateX={-150} translateY={10} />
		<text x="150" y="450">27</text>
	</FaSvg>
	<!-- __END_VISIBLE__ -->
</span>

<style>
	text {
		font-size: 250px;
		fill: white;
	}
</style>
`;const fe=[{name:"Basics",component:Ae,source:ke},{name:"Animations",component:De,source:Pe},{name:"Transformations",component:je,source:Ge},{name:"Layering",component:Qe,source:Ue}],We=/<!-- __START_VISIBLE__ -->\n?([\s\S]*?)<!-- __END_VISIBLE__ -->\n?/g;function Ze(f){let e,n,t=f[1](f[0])+"",a;return{c(){e=C("pre"),n=C("code"),a=j(t),this.h()},l(s){e=F(s,"PRE",{class:!0});var l=d(e);n=F(l,"CODE",{});var o=d(n);a=G(o,t),o.forEach(c),l.forEach(c),this.h()},h(){u(e,"class","svelte-732qg2")},m(s,l){B(s,e,l),p(e,n),p(n,a)},p(s,[l]){l&1&&t!==(t=s[1](s[0])+"")&&Ee(a,t)},i:A,o:A,d(s){s&&c(e)}}}function xe(f){const e=f.match(/^[ \t]*(?=\S)/gm);if(!e)return f;const n=e.reduce((a,s)=>Math.min(a,s.length),1/0),t=new RegExp(`^[ \\t]{${n}}`,"gm");return f.replace(t,"")}function et(f,e,n){let{source:t}=e;function a(s){let l="";for(const o of s.matchAll(We))l+=xe(o[1].trimEnd().replace(/^[\n\r]*/,""));return l||s}return f.$$set=s=>{"source"in s&&n(0,t=s.source)},[t,a]}class tt extends V{constructor(e){super();X(this,e,et,Ze,Y,{source:0})}}function oe(f,e,n){const t=f.slice();return t[0]=e[n].name,t[1]=e[n].component,t[2]=e[n].source,t}function ie(f){let e,n,t=f[0]+"",a,s,l,o,r,i,m;var $=f[1];function g(y){return{}}return $&&(l=new $(g())),r=new tt({props:{source:f[2]}}),{c(){e=C("section"),n=C("h2"),a=j(t),s=T(),l&&w(l.$$.fragment),o=T(),w(r.$$.fragment),i=T(),this.h()},l(y){e=F(y,"SECTION",{class:!0});var S=d(e);n=F(S,"H2",{});var O=d(n);a=G(O,t),O.forEach(c),s=R(S),l&&b(l.$$.fragment,S),o=R(S),b(r.$$.fragment,S),i=R(S),S.forEach(c),this.h()},h(){u(e,"class","svelte-1w7gqwj")},m(y,S){B(y,e,S),p(e,n),p(n,a),p(e,s),l&&E(l,e,null),p(e,o),E(r,e,null),p(e,i),m=!0},p(y,S){if($!==($=y[1])){if(l){ue();const O=l;v(O.$$.fragment,1,0,()=>{I(O,1)}),_e()}$?(l=new $(g()),w(l.$$.fragment),h(l.$$.fragment,1),E(l,e,o)):l=null}},i(y){m||(l&&h(l.$$.fragment,y),h(r.$$.fragment,y),m=!0)},o(y){l&&v(l.$$.fragment,y),v(r.$$.fragment,y),m=!1},d(y){y&&c(e),l&&I(l),I(r)}}}function nt(f){let e,n,t=fe,a=[];for(let l=0;l<t.length;l+=1)a[l]=ie(oe(f,t,l));const s=l=>v(a[l],1,1,()=>{a[l]=null});return{c(){for(let l=0;l<a.length;l+=1)a[l].c();e=re()},l(l){for(let o=0;o<a.length;o+=1)a[o].l(l);e=re()},m(l,o){for(let r=0;r<a.length;r+=1)a[r].m(l,o);B(l,e,o),n=!0},p(l,[o]){if(o&0){t=fe;let r;for(r=0;r<t.length;r+=1){const i=oe(l,t,r);a[r]?(a[r].p(i,o),h(a[r],1)):(a[r]=ie(i),a[r].c(),h(a[r],1),a[r].m(e.parentNode,e))}for(ue(),r=t.length;r<a.length;r+=1)s(r);_e()}},i(l){if(!n){for(let o=0;o<t.length;o+=1)h(a[o]);n=!0}},o(l){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)v(a[o]);n=!1},d(l){Ie(a,l),l&&c(e)}}}class at extends V{constructor(e){super();X(this,e,null,nt,Y,{})}}function lt(f){let e,n;return e=new N({props:{icon:be}}),{c(){w(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},p:A,i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){I(e,t)}}}function st(f){let e,n,t,a,s,l,o,r,i,m,$,g,y,S,O,J,_,D,Z,M,W;return D=new H({props:{$$slots:{default:[lt]},$$scope:{ctx:f}}}),M=new at({}),{c(){e=C("main"),n=C("section"),t=C("div"),a=C("h1"),s=j("svelte-yafal"),l=T(),o=C("p"),r=j("Minimal yet meaningful abstractions for fontawesome icons in Svelte."),i=T(),m=C("pre"),$=C("code"),g=j("npm i svelte-yafal -D"),y=T(),S=C("a"),O=j("REPL"),J=T(),_=C("div"),w(D.$$.fragment),Z=T(),w(M.$$.fragment),this.h()},l(L){e=F(L,"MAIN",{class:!0});var k=d(e);n=F(k,"SECTION",{class:!0});var q=d(n);t=F(q,"DIV",{class:!0});var P=d(t);a=F(P,"H1",{class:!0});var x=d(a);s=G(x,"svelte-yafal"),x.forEach(c),l=R(P),o=F(P,"P",{});var ee=d(o);r=G(ee,"Minimal yet meaningful abstractions for fontawesome icons in Svelte."),ee.forEach(c),i=R(P),m=F(P,"PRE",{class:!0});var te=d(m);$=F(te,"CODE",{});var ne=d($);g=G(ne,"npm i svelte-yafal -D"),ne.forEach(c),te.forEach(c),y=R(P),S=F(P,"A",{href:!0,class:!0});var ae=d(S);O=G(ae,"REPL"),ae.forEach(c),P.forEach(c),J=R(q),_=F(q,"DIV",{class:!0});var le=d(_);b(D.$$.fragment,le),le.forEach(c),q.forEach(c),Z=R(k),b(M.$$.fragment,k),k.forEach(c),this.h()},h(){u(a,"class","svelte-8bdlzc"),u(m,"class","svelte-8bdlzc"),u(S,"href","https://svelte.dev/repl/cc3a670ad52d4633ab682f3dd433143d?version=3"),u(S,"class","svelte-8bdlzc"),u(t,"class","hero svelte-8bdlzc"),u(_,"class","waffle svelte-8bdlzc"),u(n,"class","svelte-8bdlzc"),u(e,"class","svelte-8bdlzc")},m(L,k){B(L,e,k),p(e,n),p(n,t),p(t,a),p(a,s),p(t,l),p(t,o),p(o,r),p(t,i),p(t,m),p(m,$),p($,g),p(t,y),p(t,S),p(S,O),p(n,J),p(n,_),E(D,_,null),p(e,Z),E(M,e,null),W=!0},p(L,[k]){const q={};k&1&&(q.$$scope={dirty:k,ctx:L}),D.$set(q)},i(L){W||(h(D.$$.fragment,L),h(M.$$.fragment,L),W=!0)},o(L){v(D.$$.fragment,L),v(M.$$.fragment,L),W=!1},d(L){L&&c(e),I(D),I(M)}}}class ft extends V{constructor(e){super();X(this,e,null,st,Y,{})}}export{ft as default};
