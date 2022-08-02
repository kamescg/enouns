"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[623],{37623:function(e,t,r){r.d(t,{Qr:function(){return I},cI:function(){return xe}});var s=r(52983),a=e=>"checkbox"===e.type,i=e=>e instanceof Date,n=e=>null==e;const o=e=>"object"===typeof e;var u=e=>!n(e)&&!Array.isArray(e)&&o(e)&&!i(e),l=e=>u(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,c=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),d=e=>Array.isArray(e)?e.filter(Boolean):[],f=e=>void 0===e,m=(e,t,r)=>{if(!t||!u(e))return r;const s=d(t.split(/[,[\].]+?/)).reduce(((e,t)=>n(e)?e:e[t]),e);return f(s)||s===e?f(e[t])?r:e[t]:s};const y="blur",h="focusout",g="change",v="onBlur",b="onChange",p="onSubmit",_="onTouched",V="all",A="max",w="min",F="maxLength",S="minLength",k="pattern",x="required",D="validate",C=s.createContext(null),E=()=>s.useContext(C);var O=(e,t,r,s=!0)=>{const a={};for(const i in e)Object.defineProperty(a,i,{get:()=>{const a=i;return t[a]!==V&&(t[a]=!s||V),r&&(r[a]=!0),e[a]}});return a},j=e=>u(e)&&!Object.keys(e).length,T=(e,t,r)=>{const{name:s,...a}=e;return j(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find((e=>t[e]===(!r||V)))},U=e=>Array.isArray(e)?e:[e],N=(e,t,r)=>r&&t?e===t:!e||!t||e===t||U(e).some((e=>e&&(e.startsWith(t)||t.startsWith(e))));function B(e){const t=s.useRef(e);t.current=e,s.useEffect((()=>{const r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>(e=>{e&&e.unsubscribe()})(r)}),[e.disabled])}var L=e=>"string"===typeof e,M=(e,t,r,s)=>{const a=Array.isArray(e);return L(e)?(s&&t.watch.add(e),m(r,e)):a?e.map((e=>(s&&t.watch.add(e),m(r,e)))):(s&&(t.watchAll=!0),r)},R=e=>"function"===typeof e,q=e=>{for(const t in e)if(R(e[t]))return!0;return!1};function W(e){const t=E(),{name:r,control:a=t.control,shouldUnregister:i}=e,n=c(a._names.array,r),o=function(e){const t=E(),{control:r=t.control,name:a,defaultValue:i,disabled:n,exact:o}=e||{},l=s.useRef(a);l.current=a;const c=s.useCallback((e=>{if(N(l.current,e.name,o)){const t=M(l.current,r._names,e.values||r._formValues);m(f(l.current)||u(t)&&!q(t)?{...t}:Array.isArray(t)?[...t]:f(t)?i:t)}}),[r,o,i]);B({disabled:n,subject:r._subjects.watch,callback:c});const[d,m]=s.useState(f(i)?r._getWatch(a):i);return s.useEffect((()=>{r._removeUnmounted()})),d}({control:a,name:r,defaultValue:m(a._formValues,r,m(a._defaultValues,r,e.defaultValue)),exact:!0}),d=function(e){const t=E(),{control:r=t.control,disabled:a,name:i,exact:n}=e||{},[o,u]=s.useState(r._formState),l=s.useRef({isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),c=s.useRef(i),d=s.useRef(!0);return c.current=i,B({disabled:a,callback:s.useCallback((e=>d.current&&N(c.current,e.name,n)&&T(e,l.current)&&u({...r._formState,...e})),[r,n]),subject:r._subjects.state}),s.useEffect((()=>(d.current=!0,()=>{d.current=!1})),[]),O(o,r._proxyFormState,l.current,!1)}({control:a,name:r}),h=s.useRef(a.register(r,{...e.rules,value:o}));return s.useEffect((()=>{const e=(e,t)=>{const r=m(a._fields,e);r&&(r._f.mount=t)};return e(r,!0),()=>{const t=a._options.shouldUnregister||i;(n?t&&!a._stateFlags.action:t)?a.unregister(r):e(r,!1)}}),[r,a,n,i]),{field:{name:r,value:o,onChange:s.useCallback((e=>{h.current.onChange({target:{value:l(e),name:r},type:g})}),[r]),onBlur:s.useCallback((()=>{h.current.onBlur({target:{value:m(a._formValues,r),name:r},type:y})}),[r,a]),ref:s.useCallback((e=>{const t=m(a._fields,r);e&&t&&e.focus&&(t._f.ref={focus:()=>e.focus(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})}),[r,a._fields])},formState:d,fieldState:Object.defineProperties({},{invalid:{get:()=>!!m(d.errors,r)},isDirty:{get:()=>!!m(d.dirtyFields,r)},isTouched:{get:()=>!!m(d.touchedFields,r)},error:{get:()=>m(d.errors,r)}})}}const I=e=>e.render(W(e));var $=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{},H=e=>/^\w*$/.test(e),P=e=>d(e.replace(/["|']|\]/g,"").split(/\.|\[/));function Q(e,t,r){let s=-1;const a=H(t)?[t]:P(t),i=a.length,n=i-1;for(;++s<i;){const t=a[s];let i=r;if(s!==n){const r=e[t];i=u(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=i,e=e[t]}return e}const z=(e,t,r)=>{for(const s of r||Object.keys(e)){const r=m(e,s);if(r){const{_f:e,...s}=r;if(e&&t(e.name)){if(e.ref.focus&&f(e.ref.focus()))break;if(e.refs){e.refs[0].focus();break}}else u(s)&&z(s,t)}}};var G=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))));var J="undefined"!==typeof window&&"undefined"!==typeof window.HTMLElement&&"undefined"!==typeof document;function K(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(J&&(e instanceof Blob||e instanceof FileList)||!r&&!u(e))return e;t=r?[]:{};for(const r in e){if(R(e[r])){t=e;break}t[r]=K(e[r])}}return t}function X(e,t){const r=H(t)?[t]:P(t),s=1==r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=f(e)?s++:e[t[s++]];return e}(e,r),a=r[r.length-1];let i;s&&delete s[a];for(let n=0;n<r.slice(0,-1).length;n++){let t,s=-1;const a=r.slice(0,-(n+1)),o=a.length-1;for(n>0&&(i=e);++s<a.length;){const r=a[s];t=t?t[r]:e[r],o===s&&(u(t)&&j(t)||Array.isArray(t)&&!t.filter((e=>!f(e))).length)&&(i?delete i[r]:delete e[r]),i=t}}return e}function Y(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var Z=e=>n(e)||!o(e);function ee(e,t){if(Z(e)||Z(t))return e===t;if(i(e)&&i(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(i(r)&&i(e)||u(r)&&u(e)||Array.isArray(r)&&Array.isArray(e)?!ee(r,e):r!==e)return!1}}return!0}var te=e=>({isOnSubmit:!e||e===p,isOnBlur:e===v,isOnChange:e===b,isOnAll:e===V,isOnTouch:e===_}),re=e=>"boolean"===typeof e,se=e=>"file"===e.type,ae=e=>{const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},ie=e=>"select-multiple"===e.type,ne=e=>"radio"===e.type,oe=e=>ae(e)&&e.isConnected;function ue(e,t={}){const r=Array.isArray(e);if(u(e)||r)for(const s in e)Array.isArray(e[s])||u(e[s])&&!q(e[s])?(t[s]=Array.isArray(e[s])?[]:{},ue(e[s],t[s])):n(e[s])||(t[s]=!0);return t}function le(e,t,r){const s=Array.isArray(e);if(u(e)||s)for(const a in e)Array.isArray(e[a])||u(e[a])&&!q(e[a])?f(t)||Z(r[a])?r[a]=Array.isArray(e[a])?ue(e[a],[]):{...ue(e[a])}:le(e[a],n(t)?{}:t[a],r[a]):r[a]=!ee(e[a],t[a]);return r}var ce=(e,t)=>le(e,t,ue(t));const de={value:!1,isValid:!1},fe={value:!0,isValid:!0};var me=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!f(e[0].attributes.value)?f(e[0].value)||""===e[0].value?fe:{value:e[0].value,isValid:!0}:fe:de}return de},ye=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>f(e)?e:t?""===e||n(e)?NaN:+e:r&&L(e)?new Date(e):s?s(e):e;const he={isValid:!1,value:null};var ge=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),he):he;function ve(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return se(t)?t.files:ne(t)?ge(e.refs).value:ie(t)?[...t.selectedOptions].map((({value:e})=>e)):a(t)?me(e.refs).value:ye(f(t.value)?e.ref.value:t.value,e)}var be=e=>e instanceof RegExp,pe=e=>f(e)?void 0:be(e)?e.source:u(e)?be(e.value)?e.value.source:e.value:e;function _e(e,t,r){const s=m(e,r);if(s||H(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),i=m(t,s),n=m(e,s);if(i&&!Array.isArray(i)&&r!==s)return{name:r};if(n&&n.type)return{name:s,error:n};a.pop()}return{name:r}}var Ve=e=>L(e)||s.isValidElement(e);function Ae(e,t,r="validate"){if(Ve(e)||Array.isArray(e)&&e.every(Ve)||re(e)&&!e)return{type:r,message:Ve(e)?e:"",ref:t}}var we=e=>u(e)&&!be(e)?e:{value:e,message:""},Fe=async(e,t,r,s)=>{const{ref:i,refs:o,required:l,maxLength:c,minLength:d,min:f,max:m,pattern:y,validate:h,name:g,valueAsNumber:v,mount:b,disabled:p}=e._f;if(!b||p)return{};const _=o?o[0]:i,V=e=>{s&&_.reportValidity&&(_.setCustomValidity(re(e)?"":e||" "),_.reportValidity())},C={},E=ne(i),O=a(i),T=E||O,U=(v||se(i))&&!i.value||""===t||Array.isArray(t)&&!t.length,N=$.bind(null,g,r,C),B=(e,t,r,s=F,a=S)=>{const n=e?t:r;C[g]={type:e?s:a,message:n,ref:i,...N(e?s:a,n)}};if(l&&(!T&&(U||n(t))||re(t)&&!t||O&&!me(o).isValid||E&&!ge(o).isValid)){const{value:e,message:t}=Ve(l)?{value:!!l,message:l}:we(l);if(e&&(C[g]={type:x,message:t,ref:_,...N(x,t)},!r))return V(t),C}if(!U&&(!n(f)||!n(m))){let e,s;const a=we(m),o=we(f);if(n(t)||isNaN(t)){const r=i.valueAsDate||new Date(t);L(a.value)&&(e=r>new Date(a.value)),L(o.value)&&(s=r<new Date(o.value))}else{const r=i.valueAsNumber||+t;n(a.value)||(e=r>a.value),n(o.value)||(s=r<o.value)}if((e||s)&&(B(!!e,a.message,o.message,A,w),!r))return V(C[g].message),C}if((c||d)&&!U&&L(t)){const e=we(c),s=we(d),a=!n(e.value)&&t.length>e.value,i=!n(s.value)&&t.length<s.value;if((a||i)&&(B(a,e.message,s.message),!r))return V(C[g].message),C}if(y&&!U&&L(t)){const{value:e,message:s}=we(y);if(be(e)&&!t.match(e)&&(C[g]={type:k,message:s,ref:i,...N(k,s)},!r))return V(s),C}if(h)if(R(h)){const e=Ae(await h(t),_);if(e&&(C[g]={...e,...N(D,e.message)},!r))return V(e.message),C}else if(u(h)){let e={};for(const s in h){if(!j(e)&&!r)break;const a=Ae(await h[s](t),_,s);a&&(e={...a,...N(s,a.message)},V(a.message),r&&(C[g]=e))}if(!j(e)&&(C[g]={ref:_,...e},!r))return C}return V(!0),C};const Se={mode:p,reValidateMode:b,shouldFocusError:!0};function ke(e={}){let t,r={...Se,...e},s={isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}},o={},u=K(r.defaultValues)||{},g=r.shouldUnregister?{}:K(u),v={action:!1,mount:!1,watch:!1},b={mount:new Set,unMount:new Set,array:new Set,watch:new Set},p=0,_={};const A={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},w={watch:Y(),array:Y(),state:Y()},F=te(r.mode),S=te(r.reValidateMode),k=r.criteriaMode===V,x=async e=>{let t=!1;return A.isValid&&(t=r.resolver?j((await O()).errors):await T(o,!0),e||t===s.isValid||(s.isValid=t,w.state.next({isValid:t}))),t},D=(e,t,r,s)=>{const a=m(o,e);if(a){const i=m(g,e,f(r)?m(u,e):r);f(i)||s&&s.defaultChecked||t?Q(g,e,t?i:ve(a._f)):q(e,i),v.mount&&x()}},C=(e,t,r,a,i)=>{let n=!1;const o={name:e},l=m(s.touchedFields,e);if(A.isDirty){const e=s.isDirty;s.isDirty=o.isDirty=N(),n=e!==o.isDirty}if(A.dirtyFields&&(!r||a)){const r=m(s.dirtyFields,e);ee(m(u,e),t)?X(s.dirtyFields,e):Q(s.dirtyFields,e,!0),o.dirtyFields=s.dirtyFields,n=n||r!==m(s.dirtyFields,e)}return r&&!l&&(Q(s.touchedFields,e,r),o.touchedFields=s.touchedFields,n=n||A.touchedFields&&l!==r),n&&i&&w.state.next(o),n?o:{}},E=async(r,a,i,n)=>{const o=m(s.errors,r),u=A.isValid&&s.isValid!==a;var l;if(e.delayError&&i?(l=()=>((e,t)=>{Q(s.errors,e,t),w.state.next({errors:s.errors})})(r,i),t=e=>{clearTimeout(p),p=window.setTimeout(l,e)},t(e.delayError)):(clearTimeout(p),t=null,i?Q(s.errors,r,i):X(s.errors,r)),(i?!ee(o,i):o)||!j(n)||u){const e={...n,...u?{isValid:a}:{},errors:s.errors,name:r};s={...s,...e},w.state.next(e)}_[r]--,A.isValidating&&!Object.values(_).some((e=>e))&&(w.state.next({isValidating:!1}),_={})},O=async e=>r.resolver?await r.resolver({...g},r.context,((e,t,r,s)=>{const a={};for(const i of e){const e=m(t,i);e&&Q(a,i,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}})(e||b.mount,o,r.criteriaMode,r.shouldUseNativeValidation)):{},T=async(e,t,a={valid:!0})=>{for(const i in e){const n=e[i];if(n){const{_f:e,...i}=n;if(e){const i=await Fe(n,m(g,e.name),k,r.shouldUseNativeValidation);if(i[e.name]&&(a.valid=!1,t))break;t||(i[e.name]?Q(s.errors,e.name,i[e.name]):X(s.errors,e.name))}i&&await T(i,t,a)}}return a.valid},N=(e,t)=>(e&&t&&Q(g,e,t),!ee(P(),u)),B=(e,t,r)=>{const s={...v.mount?g:f(t)?u:L(e)?{[e]:t}:t};return M(e,b,s,r)},q=(e,t,r={})=>{const s=m(o,e);let i=t;if(s){const r=s._f;r&&(!r.disabled&&Q(g,e,ye(t,r)),i=J&&ae(r.ref)&&n(t)?"":t,ie(r.ref)?[...r.ref.options].forEach((e=>e.selected=i.includes(e.value))):r.refs?a(r.ref)?r.refs.length>1?r.refs.forEach((e=>!e.disabled&&(e.checked=Array.isArray(i)?!!i.find((t=>t===e.value)):i===e.value))):r.refs[0]&&(r.refs[0].checked=!!i):r.refs.forEach((e=>e.checked=e.value===i)):se(r.ref)?r.ref.value="":(r.ref.value=i,r.ref.type||w.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&C(e,i,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&H(e)},W=(e,t,r)=>{for(const s in t){const a=t[s],n=`${e}.${s}`,u=m(o,n);!b.array.has(e)&&Z(a)&&(!u||u._f)||i(a)?q(n,a,r):W(n,a,r)}},I=(e,t,r={})=>{const a=m(o,e),i=b.array.has(e),l=K(t);Q(g,e,l),i?(w.array.next({name:e,values:g}),(A.isDirty||A.dirtyFields)&&r.shouldDirty&&(s.dirtyFields=ce(u,g),w.state.next({name:e,dirtyFields:s.dirtyFields,isDirty:N(e,l)}))):!a||a._f||n(l)?q(e,l,r):W(e,l,r),G(e,b)&&w.state.next({}),w.watch.next({name:e})},$=async e=>{const a=e.target;let i=a.name;const n=m(o,i);if(n){let c,d;const f=a.type?ve(n._f):l(e),v=e.type===y||e.type===h,p=!((u=n._f).mount&&(u.required||u.min||u.max||u.maxLength||u.minLength||u.pattern||u.validate))&&!r.resolver&&!m(s.errors,i)&&!n._f.deps||((e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e))(v,m(s.touchedFields,i),s.isSubmitted,S,F),V=G(i,b,v);Q(g,i,f),v?(n._f.onBlur&&n._f.onBlur(e),t&&t(0)):n._f.onChange&&n._f.onChange(e);const A=C(i,f,v,!1),D=!j(A)||V;if(!v&&w.watch.next({name:i,type:e.type}),p)return D&&w.state.next({name:i,...V?{}:A});if(!v&&V&&w.state.next({}),_[i]=(_[i],1),w.state.next({isValidating:!0}),r.resolver){const{errors:e}=await O([i]),t=_e(s.errors,o,i),r=_e(e,o,t.name||i);c=r.error,i=r.name,d=j(e)}else c=(await Fe(n,m(g,i),k,r.shouldUseNativeValidation))[i],d=await x(!0);n._f.deps&&H(n._f.deps),E(i,d,c,A)}var u},H=async(e,t={})=>{let a,i;const n=U(e);if(w.state.next({isValidating:!0}),r.resolver){const t=await(async e=>{const{errors:t}=await O();if(e)for(const r of e){const e=m(t,r);e?Q(s.errors,r,e):X(s.errors,r)}else s.errors=t;return t})(f(e)?e:n);a=j(t),i=e?!n.some((e=>m(t,e))):a}else e?(i=(await Promise.all(n.map((async e=>{const t=m(o,e);return await T(t&&t._f?{[e]:t}:t)})))).every(Boolean),(i||s.isValid)&&x()):i=a=await T(o);return w.state.next({...!L(e)||A.isValid&&a!==s.isValid?{}:{name:e},...r.resolver?{isValid:a}:{},errors:s.errors,isValidating:!1}),t.shouldFocus&&!i&&z(o,(e=>m(s.errors,e)),e?n:b.mount),i},P=e=>{const t={...u,...v.mount?g:{}};return f(e)?t:L(e)?m(t,e):e.map((e=>m(t,e)))},ue=(e,t)=>({invalid:!!m((t||s).errors,e),isDirty:!!m((t||s).dirtyFields,e),isTouched:!!m((t||s).touchedFields,e),error:m((t||s).errors,e)}),le=(e,t={})=>{for(const a of e?U(e):b.mount)b.mount.delete(a),b.array.delete(a),m(o,a)&&(t.keepValue||(X(o,a),X(g,a)),!t.keepError&&X(s.errors,a),!t.keepDirty&&X(s.dirtyFields,a),!t.keepTouched&&X(s.touchedFields,a),!r.shouldUnregister&&!t.keepDefaultValue&&X(u,a));w.watch.next({}),w.state.next({...s,...t.keepDirty?{isDirty:N()}:{}}),!t.keepIsValid&&x()},de=(e,t={})=>{let s=m(o,e);const i=re(t.disabled);return Q(o,e,{_f:{...s&&s._f?s._f:{ref:{name:e}},name:e,mount:!0,...t}}),b.mount.add(e),s?i&&Q(g,e,t.disabled?void 0:m(g,e,ve(s._f))):D(e,!0,t.value),{...i?{disabled:t.disabled}:{},...r.shouldUseNativeValidation?{required:!!t.required,min:pe(t.min),max:pe(t.max),minLength:pe(t.minLength),maxLength:pe(t.maxLength),pattern:pe(t.pattern)}:{},name:e,onChange:$,onBlur:$,ref:i=>{if(i){de(e,t),s=m(o,e);const r=f(i.value)&&i.querySelectorAll&&i.querySelectorAll("input,select,textarea")[0]||i,n=(e=>ne(e)||a(e))(r),l=s._f.refs||[];if(n?l.find((e=>e===r)):r===s._f.ref)return;Q(o,e,{_f:{...s._f,...n?{refs:[...l.filter(oe),r,...Array.isArray(m(u,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),D(e,!1,void 0,r)}else s=m(o,e,{}),s._f&&(s._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&(!c(b.array,e)||!v.action)&&b.unMount.add(e)}}};return{control:{register:de,unregister:le,getFieldState:ue,_executeSchema:O,_getWatch:B,_getDirty:N,_updateValid:x,_removeUnmounted:()=>{for(const e of b.unMount){const t=m(o,e);t&&(t._f.refs?t._f.refs.every((e=>!oe(e))):!oe(t._f.ref))&&le(e)}b.unMount=new Set},_updateFieldArray:(e,t=[],r,a,i=!0,n=!0)=>{if(a&&r){if(v.action=!0,n&&Array.isArray(m(o,e))){const t=r(m(o,e),a.argA,a.argB);i&&Q(o,e,t)}if(A.errors&&n&&Array.isArray(m(s.errors,e))){const t=r(m(s.errors,e),a.argA,a.argB);i&&Q(s.errors,e,t),((e,t)=>{!d(m(e,t)).length&&X(e,t)})(s.errors,e)}if(A.touchedFields&&n&&Array.isArray(m(s.touchedFields,e))){const t=r(m(s.touchedFields,e),a.argA,a.argB);i&&Q(s.touchedFields,e,t)}A.dirtyFields&&(s.dirtyFields=ce(u,g)),w.state.next({isDirty:N(e,t),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else Q(g,e,t)},_getFieldArray:t=>d(m(v.mount?g:u,t,e.shouldUnregister?m(u,t,[]):[])),_subjects:w,_proxyFormState:A,get _fields(){return o},get _formValues(){return g},get _stateFlags(){return v},set _stateFlags(e){v=e},get _defaultValues(){return u},get _names(){return b},set _names(e){b=e},get _formState(){return s},set _formState(e){s=e},get _options(){return r},set _options(e){r={...r,...e}}},trigger:H,register:de,handleSubmit:(e,t)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let i=!0,n=K(g);w.state.next({isSubmitting:!0});try{if(r.resolver){const{errors:e,values:t}=await O();s.errors=e,n=t}else await T(o);j(s.errors)?(w.state.next({errors:{},isSubmitting:!0}),await e(n,a)):(t&&await t({...s.errors},a),r.shouldFocusError&&z(o,(e=>m(s.errors,e)),b.mount))}catch(u){throw i=!1,u}finally{s.isSubmitted=!0,w.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:j(s.errors)&&i,submitCount:s.submitCount+1,errors:s.errors})}},watch:(e,t)=>R(e)?w.watch.subscribe({next:r=>e(B(void 0,t),r)}):B(e,t,!0),setValue:I,getValues:P,reset:(t,r={})=>{const a=t||u,i=K(a),n=t&&!j(t)?i:u;if(r.keepDefaultValues||(u=a),!r.keepValues){if(r.keepDirtyValues)for(const e of b.mount)m(s.dirtyFields,e)?Q(n,e,m(g,e)):I(e,m(n,e));else{if(J&&f(t))for(const e of b.mount){const t=m(o,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;try{ae(e)&&e.closest("form").reset();break}catch(l){}}}o={}}g=e.shouldUnregister?r.keepDefaultValues?K(u):{}:i,w.array.next({values:n}),w.watch.next({values:n})}b={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},v.mount=!A.isValid||!!r.keepIsValid,v.watch=!!e.shouldUnregister,w.state.next({submitCount:r.keepSubmitCount?s.submitCount:0,isDirty:r.keepDirty||r.keepDirtyValues?s.isDirty:!(!r.keepDefaultValues||ee(t,u)),isSubmitted:!!r.keepIsSubmitted&&s.isSubmitted,dirtyFields:r.keepDirty||r.keepDirtyValues?s.dirtyFields:r.keepDefaultValues&&t?ce(u,t):{},touchedFields:r.keepTouched?s.touchedFields:{},errors:r.keepErrors?s.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},resetField:(e,t={})=>{m(o,e)&&(f(t.defaultValue)?I(e,m(u,e)):(I(e,t.defaultValue),Q(u,e,t.defaultValue)),t.keepTouched||X(s.touchedFields,e),t.keepDirty||(X(s.dirtyFields,e),s.isDirty=t.defaultValue?N(e,m(u,e)):N()),t.keepError||(X(s.errors,e),A.isValid&&x()),w.state.next({...s}))},clearErrors:e=>{e?U(e).forEach((e=>X(s.errors,e))):s.errors={},w.state.next({errors:s.errors})},unregister:le,setError:(e,t,r)=>{const a=(m(o,e,{_f:{}})._f||{}).ref;Q(s.errors,e,{...t,ref:a}),w.state.next({name:e,errors:s.errors,isValid:!1}),r&&r.shouldFocus&&a&&a.focus&&a.focus()},setFocus:(e,t={})=>{const r=m(o,e)._f,s=r.refs?r.refs[0]:r.ref;t.shouldSelect?s.select():s.focus()},getFieldState:ue}}function xe(e={}){const t=s.useRef(),[r,a]=s.useState({isDirty:!1,isValidating:!1,dirtyFields:{},isSubmitted:!1,submitCount:0,touchedFields:{},isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,errors:{}});t.current?t.current.control._options=e:t.current={...ke(e),formState:r};const i=t.current.control,n=s.useCallback((e=>{T(e,i._proxyFormState,!0)&&(i._formState={...i._formState,...e},a({...i._formState}))}),[i]);return B({subject:i._subjects.state,callback:n}),s.useEffect((()=>{i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()})),t.current.formState=O(r,i._proxyFormState),t.current}}}]);