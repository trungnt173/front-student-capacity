"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[429],{5565:(ir,fn,Yn)=>{Error;const Oo=function(s,...e){if(Oo.translate){const n=Oo.translate(s,e);s=n[0],e=n[1]}let t=zl(s[0],s.raw[0]);for(let n=1;n<s.length;n++)t+=e[n-1]+zl(s[n],s.raw[n]);return t};function zl(s,e){return":"===e.charAt(0)?s.substring(function Ul(s,e){for(let t=1,n=1;t<s.length;t++,n++)if("\\"===e[n])n++;else if(":"===s[t])return t;throw new Error(`Unterminated $localize metadata block in "${e}".`)}(s,e)+1):s}(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)().$localize=Oo,Yn(8583)},8583:()=>{!function(d){const v=d.performance;function x(ue){v&&v.mark&&v.mark(ue)}function m(ue,j){v&&v.measure&&v.measure(ue,j)}x("Zone");const T=d.__Zone_symbol_prefix||"__zone_symbol__";function I(ue){return T+ue}const M=!0===d[I("forceDuplicateZoneCheck")];if(d.Zone){if(M||"function"!=typeof d.Zone.__symbol__)throw new Error("Zone already loaded.");return d.Zone}let H=(()=>{class ue{constructor(h,_){this._parent=h,this._name=_?_.name||"unnamed":"<root>",this._properties=_&&_.properties||{},this._zoneDelegate=new R(this,this._parent&&this._parent._zoneDelegate,_)}static assertZonePatched(){if(d.Promise!==$e.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let h=ue.current;for(;h.parent;)h=h.parent;return h}static get current(){return ae.zone}static get currentTask(){return tt}static __load_patch(h,_,G=!1){if($e.hasOwnProperty(h)){if(!G&&M)throw Error("Already loaded patch: "+h)}else if(!d["__Zone_disable_"+h]){const J="Zone:"+h;x(J),$e[h]=_(d,ue,et),m(J,J)}}get parent(){return this._parent}get name(){return this._name}get(h){const _=this.getZoneWith(h);if(_)return _._properties[h]}getZoneWith(h){let _=this;for(;_;){if(_._properties.hasOwnProperty(h))return _;_=_._parent}return null}fork(h){if(!h)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,h)}wrap(h,_){if("function"!=typeof h)throw new Error("Expecting function got: "+h);const G=this._zoneDelegate.intercept(this,h,_),J=this;return function(){return J.runGuarded(G,this,arguments,_)}}run(h,_,G,J){ae={parent:ae,zone:this};try{return this._zoneDelegate.invoke(this,h,_,G,J)}finally{ae=ae.parent}}runGuarded(h,_=null,G,J){ae={parent:ae,zone:this};try{try{return this._zoneDelegate.invoke(this,h,_,G,J)}catch(Ue){if(this._zoneDelegate.handleError(this,Ue))throw Ue}}finally{ae=ae.parent}}runTask(h,_,G){if(h.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(h.zone||Te).name+"; Execution: "+this.name+")");if(h.state===ie&&(h.type===Q||h.type===de))return;const J=h.state!=Ne;J&&h._transitionTo(Ne,oe),h.runCount++;const Ue=tt;tt=h,ae={parent:ae,zone:this};try{h.type==de&&h.data&&!h.data.isPeriodic&&(h.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,h,_,G)}catch(D){if(this._zoneDelegate.handleError(this,D))throw D}}finally{h.state!==ie&&h.state!==Le&&(h.type==Q||h.data&&h.data.isPeriodic?J&&h._transitionTo(oe,Ne):(h.runCount=0,this._updateTaskCount(h,-1),J&&h._transitionTo(ie,Ne,ie))),ae=ae.parent,tt=Ue}}scheduleTask(h){if(h.zone&&h.zone!==this){let G=this;for(;G;){if(G===h.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${h.zone.name}`);G=G.parent}}h._transitionTo(ee,ie);const _=[];h._zoneDelegates=_,h._zone=this;try{h=this._zoneDelegate.scheduleTask(this,h)}catch(G){throw h._transitionTo(Le,ee,ie),this._zoneDelegate.handleError(this,G),G}return h._zoneDelegates===_&&this._updateTaskCount(h,1),h.state==ee&&h._transitionTo(oe,ee),h}scheduleMicroTask(h,_,G,J){return this.scheduleTask(new U(Z,h,_,G,J,void 0))}scheduleMacroTask(h,_,G,J,Ue){return this.scheduleTask(new U(de,h,_,G,J,Ue))}scheduleEventTask(h,_,G,J,Ue){return this.scheduleTask(new U(Q,h,_,G,J,Ue))}cancelTask(h){if(h.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(h.zone||Te).name+"; Execution: "+this.name+")");h._transitionTo(N,oe,Ne);try{this._zoneDelegate.cancelTask(this,h)}catch(_){throw h._transitionTo(Le,N),this._zoneDelegate.handleError(this,_),_}return this._updateTaskCount(h,-1),h._transitionTo(ie,N),h.runCount=0,h}_updateTaskCount(h,_){const G=h._zoneDelegates;-1==_&&(h._zoneDelegates=null);for(let J=0;J<G.length;J++)G[J]._updateTaskCount(h.type,_)}}return ue.__symbol__=I,ue})();const z={name:"",onHasTask:(ue,j,h,_)=>ue.hasTask(h,_),onScheduleTask:(ue,j,h,_)=>ue.scheduleTask(h,_),onInvokeTask:(ue,j,h,_,G,J)=>ue.invokeTask(h,_,G,J),onCancelTask:(ue,j,h,_)=>ue.cancelTask(h,_)};class R{constructor(j,h,_){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=j,this._parentDelegate=h,this._forkZS=_&&(_&&_.onFork?_:h._forkZS),this._forkDlgt=_&&(_.onFork?h:h._forkDlgt),this._forkCurrZone=_&&(_.onFork?this.zone:h._forkCurrZone),this._interceptZS=_&&(_.onIntercept?_:h._interceptZS),this._interceptDlgt=_&&(_.onIntercept?h:h._interceptDlgt),this._interceptCurrZone=_&&(_.onIntercept?this.zone:h._interceptCurrZone),this._invokeZS=_&&(_.onInvoke?_:h._invokeZS),this._invokeDlgt=_&&(_.onInvoke?h:h._invokeDlgt),this._invokeCurrZone=_&&(_.onInvoke?this.zone:h._invokeCurrZone),this._handleErrorZS=_&&(_.onHandleError?_:h._handleErrorZS),this._handleErrorDlgt=_&&(_.onHandleError?h:h._handleErrorDlgt),this._handleErrorCurrZone=_&&(_.onHandleError?this.zone:h._handleErrorCurrZone),this._scheduleTaskZS=_&&(_.onScheduleTask?_:h._scheduleTaskZS),this._scheduleTaskDlgt=_&&(_.onScheduleTask?h:h._scheduleTaskDlgt),this._scheduleTaskCurrZone=_&&(_.onScheduleTask?this.zone:h._scheduleTaskCurrZone),this._invokeTaskZS=_&&(_.onInvokeTask?_:h._invokeTaskZS),this._invokeTaskDlgt=_&&(_.onInvokeTask?h:h._invokeTaskDlgt),this._invokeTaskCurrZone=_&&(_.onInvokeTask?this.zone:h._invokeTaskCurrZone),this._cancelTaskZS=_&&(_.onCancelTask?_:h._cancelTaskZS),this._cancelTaskDlgt=_&&(_.onCancelTask?h:h._cancelTaskDlgt),this._cancelTaskCurrZone=_&&(_.onCancelTask?this.zone:h._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const G=_&&_.onHasTask;(G||h&&h._hasTaskZS)&&(this._hasTaskZS=G?_:z,this._hasTaskDlgt=h,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=j,_.onScheduleTask||(this._scheduleTaskZS=z,this._scheduleTaskDlgt=h,this._scheduleTaskCurrZone=this.zone),_.onInvokeTask||(this._invokeTaskZS=z,this._invokeTaskDlgt=h,this._invokeTaskCurrZone=this.zone),_.onCancelTask||(this._cancelTaskZS=z,this._cancelTaskDlgt=h,this._cancelTaskCurrZone=this.zone))}fork(j,h){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,j,h):new H(j,h)}intercept(j,h,_){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,j,h,_):h}invoke(j,h,_,G,J){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,j,h,_,G,J):h.apply(_,G)}handleError(j,h){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,j,h)}scheduleTask(j,h){let _=h;if(this._scheduleTaskZS)this._hasTaskZS&&_._zoneDelegates.push(this._hasTaskDlgtOwner),_=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,j,h),_||(_=h);else if(h.scheduleFn)h.scheduleFn(h);else{if(h.type!=Z)throw new Error("Task is missing scheduleFn.");E(h)}return _}invokeTask(j,h,_,G){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,j,h,_,G):h.callback.apply(_,G)}cancelTask(j,h){let _;if(this._cancelTaskZS)_=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,j,h);else{if(!h.cancelFn)throw Error("Task is not cancelable");_=h.cancelFn(h)}return _}hasTask(j,h){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,j,h)}catch(_){this.handleError(j,_)}}_updateTaskCount(j,h){const _=this._taskCounts,G=_[j],J=_[j]=G+h;if(J<0)throw new Error("More tasks executed then were scheduled.");0!=G&&0!=J||this.hasTask(this.zone,{microTask:_.microTask>0,macroTask:_.macroTask>0,eventTask:_.eventTask>0,change:j})}}class U{constructor(j,h,_,G,J,Ue){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=j,this.source=h,this.data=G,this.scheduleFn=J,this.cancelFn=Ue,!_)throw new Error("callback is not defined");this.callback=_;const D=this;this.invoke=j===Q&&G&&G.useG?U.invokeTask:function(){return U.invokeTask.call(d,D,this,arguments)}}static invokeTask(j,h,_){j||(j=this),rt++;try{return j.runCount++,j.zone.runTask(j,h,_)}finally{1==rt&&ve(),rt--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(ie,ee)}_transitionTo(j,h,_){if(this._state!==h&&this._state!==_)throw new Error(`${this.type} '${this.source}': can not transition to '${j}', expecting state '${h}'${_?" or '"+_+"'":""}, was '${this._state}'.`);this._state=j,j==ie&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const me=I("setTimeout"),re=I("Promise"),he=I("then");let B,De=[],ce=!1;function E(ue){if(0===rt&&0===De.length)if(B||d[re]&&(B=d[re].resolve(0)),B){let j=B[he];j||(j=B.then),j.call(B,ve)}else d[me](ve,0);ue&&De.push(ue)}function ve(){if(!ce){for(ce=!0;De.length;){const ue=De;De=[];for(let j=0;j<ue.length;j++){const h=ue[j];try{h.zone.runTask(h,null,null)}catch(_){et.onUnhandledError(_)}}}et.microtaskDrainDone(),ce=!1}}const Te={name:"NO ZONE"},ie="notScheduled",ee="scheduling",oe="scheduled",Ne="running",N="canceling",Le="unknown",Z="microTask",de="macroTask",Q="eventTask",$e={},et={symbol:I,currentZoneFrame:()=>ae,onUnhandledError:Ce,microtaskDrainDone:Ce,scheduleMicroTask:E,showUncaughtError:()=>!H[I("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:Ce,patchMethod:()=>Ce,bindArguments:()=>[],patchThen:()=>Ce,patchMacroTask:()=>Ce,patchEventPrototype:()=>Ce,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>Ce,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>Ce,wrapWithCurrentZone:()=>Ce,filterProperties:()=>[],attachOriginToPatched:()=>Ce,_redefineProperty:()=>Ce,patchCallbacks:()=>Ce};let ae={parent:null,zone:new H(null,null)},tt=null,rt=0;function Ce(){}m("Zone","Zone"),d.Zone=H}(typeof window<"u"&&window||typeof self<"u"&&self||global);const fn=Object.getOwnPropertyDescriptor,Yn=Object.defineProperty,ke=Object.getPrototypeOf,Et=Object.create,ys=Array.prototype.slice,Nn="addEventListener",_s="removeEventListener",Qn=Zone.__symbol__(Nn),Pn=Zone.__symbol__(_s),X="true",Tt="false",qt=Zone.__symbol__("");function kn(d,v){return Zone.current.wrap(d,v)}function Jn(d,v,x,m,T){return Zone.current.scheduleMacroTask(d,v,x,m,T)}const fe=Zone.__symbol__,Xt=typeof window<"u",mn=Xt?window:void 0,Ve=Xt&&mn||"object"==typeof self&&self||global,Oe=[null];function st(d,v){for(let x=d.length-1;x>=0;x--)"function"==typeof d[x]&&(d[x]=kn(d[x],v+"_"+x));return d}function es(d){return!d||!1!==d.writable&&!("function"==typeof d.get&&typeof d.set>"u")}const or=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,le=!("nw"in Ve)&&typeof Ve.process<"u"&&"[object process]"==={}.toString.call(Ve.process),Ge=!le&&!or&&!(!Xt||!mn.HTMLElement),ar=typeof Ve.process<"u"&&"[object process]"==={}.toString.call(Ve.process)&&!or&&!(!Xt||!mn.HTMLElement),ts={},ur=function(d){if(!(d=d||Ve.event))return;let v=ts[d.type];v||(v=ts[d.type]=fe("ON_PROPERTY"+d.type));const x=this||d.target||Ve,m=x[v];let T;if(Ge&&x===mn&&"error"===d.type){const I=d;T=m&&m.call(this,I.message,I.filename,I.lineno,I.colno,I.error),!0===T&&d.preventDefault()}else T=m&&m.apply(this,arguments),null!=T&&!T&&d.preventDefault();return T};function Ln(d,v,x){let m=fn(d,v);if(!m&&x&&fn(x,v)&&(m={enumerable:!0,configurable:!0}),!m||!m.configurable)return;const T=fe("on"+v+"patched");if(d.hasOwnProperty(T)&&d[T])return;delete m.writable,delete m.value;const I=m.get,M=m.set,H=v.substr(2);let z=ts[H];z||(z=ts[H]=fe("ON_PROPERTY"+H)),m.set=function(R){let U=this;!U&&d===Ve&&(U=Ve),U&&(U[z]&&U.removeEventListener(H,ur),M&&M.apply(U,Oe),"function"==typeof R?(U[z]=R,U.addEventListener(H,ur,!1)):U[z]=null)},m.get=function(){let R=this;if(!R&&d===Ve&&(R=Ve),!R)return null;const U=R[z];if(U)return U;if(I){let me=I&&I.call(this);if(me)return m.set.call(this,me),"function"==typeof R.removeAttribute&&R.removeAttribute(v),me}return null},Yn(d,v,m),d[T]=!0}function oi(d,v,x){if(v)for(let m=0;m<v.length;m++)Ln(d,"on"+v[m],x);else{const m=[];for(const T in d)"on"==T.substr(0,2)&&m.push(T);for(let T=0;T<m.length;T++)Ln(d,m[T],x)}}const yt=fe("originalInstance");function Mn(d){const v=Ve[d];if(!v)return;Ve[fe(d)]=v,Ve[d]=function(){const T=st(arguments,d);switch(T.length){case 0:this[yt]=new v;break;case 1:this[yt]=new v(T[0]);break;case 2:this[yt]=new v(T[0],T[1]);break;case 3:this[yt]=new v(T[0],T[1],T[2]);break;case 4:this[yt]=new v(T[0],T[1],T[2],T[3]);break;default:throw new Error("Arg list too long.")}},Ct(Ve[d],v);const x=new v(function(){});let m;for(m in x)"XMLHttpRequest"===d&&"responseBlob"===m||function(T){"function"==typeof x[T]?Ve[d].prototype[T]=function(){return this[yt][T].apply(this[yt],arguments)}:Yn(Ve[d].prototype,T,{set:function(I){"function"==typeof I?(this[yt][T]=kn(I,d+"."+T),Ct(this[yt][T],I)):this[yt][T]=I},get:function(){return this[yt][T]}})}(m);for(m in v)"prototype"!==m&&v.hasOwnProperty(m)&&(Ve[d][m]=v[m])}function Mt(d,v,x){let m=d;for(;m&&!m.hasOwnProperty(v);)m=ke(m);!m&&d[v]&&(m=d);const T=fe(v);let I=null;if(m&&(!(I=m[T])||!m.hasOwnProperty(T))&&(I=m[T]=m[v],es(m&&fn(m,v)))){const H=x(I,T,v);m[v]=function(){return H(this,arguments)},Ct(m[v],I)}return I}function ai(d,v,x){let m=null;function T(I){const M=I.data;return M.args[M.cbIdx]=function(){I.invoke.apply(this,arguments)},m.apply(M.target,M.args),I}m=Mt(d,v,I=>function(M,H){const z=x(M,H);return z.cbIdx>=0&&"function"==typeof H[z.cbIdx]?Jn(z.name,H[z.cbIdx],z,T):I.apply(M,H)})}function Ct(d,v){d[fe("OriginalDelegate")]=v}let lr=!1,gn=!1;function ws(){if(lr)return gn;lr=!0;try{const d=mn.navigator.userAgent;(-1!==d.indexOf("MSIE ")||-1!==d.indexOf("Trident/")||-1!==d.indexOf("Edge/"))&&(gn=!0)}catch{}return gn}Zone.__load_patch("ZoneAwarePromise",(d,v,x)=>{const m=Object.getOwnPropertyDescriptor,T=Object.defineProperty,M=x.symbol,H=[],z=!0===d[M("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],R=M("Promise"),U=M("then");x.onUnhandledError=D=>{if(x.showUncaughtError()){const w=D&&D.rejection;w?console.error("Unhandled Promise rejection:",w instanceof Error?w.message:w,"; Zone:",D.zone.name,"; Task:",D.task&&D.task.source,"; Value:",w,w instanceof Error?w.stack:void 0):console.error(D)}},x.microtaskDrainDone=()=>{for(;H.length;){const D=H.shift();try{D.zone.runGuarded(()=>{throw D.throwOriginal?D.rejection:D})}catch(w){he(w)}}};const re=M("unhandledPromiseRejectionHandler");function he(D){x.onUnhandledError(D);try{const w=v[re];"function"==typeof w&&w.call(this,D)}catch{}}function De(D){return D&&D.then}function ce(D){return D}function B(D){return h.reject(D)}const E=M("state"),ve=M("value"),Te=M("finally"),ie=M("parentPromiseValue"),ee=M("parentPromiseState"),Ne=null,N=!0,Le=!1;function de(D,w){return b=>{try{ae(D,w,b)}catch(L){ae(D,!1,L)}}}const et=M("currentTaskTrace");function ae(D,w,b){const L=function(){let D=!1;return function(b){return function(){D||(D=!0,b.apply(null,arguments))}}}();if(D===b)throw new TypeError("Promise resolved with itself");if(D[E]===Ne){let se=null;try{("object"==typeof b||"function"==typeof b)&&(se=b&&b.then)}catch(te){return L(()=>{ae(D,!1,te)})(),D}if(w!==Le&&b instanceof h&&b.hasOwnProperty(E)&&b.hasOwnProperty(ve)&&b[E]!==Ne)rt(b),ae(D,b[E],b[ve]);else if(w!==Le&&"function"==typeof se)try{se.call(b,L(de(D,w)),L(de(D,!1)))}catch(te){L(()=>{ae(D,!1,te)})()}else{D[E]=w;const te=D[ve];if(D[ve]=b,D[Te]===Te&&w===N&&(D[E]=D[ee],D[ve]=D[ie]),w===Le&&b instanceof Error){const K=v.currentTask&&v.currentTask.data&&v.currentTask.data.__creationTrace__;K&&T(b,et,{configurable:!0,enumerable:!1,writable:!0,value:K})}for(let K=0;K<te.length;)Ce(D,te[K++],te[K++],te[K++],te[K++]);if(0==te.length&&w==Le){D[E]=0;let K=b;try{throw new Error("Uncaught (in promise): "+function I(D){return D&&D.toString===Object.prototype.toString?(D.constructor&&D.constructor.name||"")+": "+JSON.stringify(D):D?D.toString():Object.prototype.toString.call(D)}(b)+(b&&b.stack?"\n"+b.stack:""))}catch(V){K=V}z&&(K.throwOriginal=!0),K.rejection=b,K.promise=D,K.zone=v.current,K.task=v.currentTask,H.push(K),x.scheduleMicroTask()}}}return D}const tt=M("rejectionHandledHandler");function rt(D){if(0===D[E]){try{const w=v[tt];w&&"function"==typeof w&&w.call(this,{rejection:D[ve],promise:D})}catch{}D[E]=Le;for(let w=0;w<H.length;w++)D===H[w].promise&&H.splice(w,1)}}function Ce(D,w,b,L,se){rt(D);const te=D[E],K=te?"function"==typeof L?L:ce:"function"==typeof se?se:B;w.scheduleMicroTask("Promise.then",()=>{try{const V=D[ve],ne=!!b&&Te===b[Te];ne&&(b[ie]=V,b[ee]=te);const ye=w.run(K,void 0,ne&&K!==B&&K!==ce?[]:[V]);ae(b,!0,ye)}catch(V){ae(b,!1,V)}},b)}const j=function(){};class h{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(w){return ae(new this(null),N,w)}static reject(w){return ae(new this(null),Le,w)}static race(w){let b,L,se=new this((V,ne)=>{b=V,L=ne});function te(V){b(V)}function K(V){L(V)}for(let V of w)De(V)||(V=this.resolve(V)),V.then(te,K);return se}static all(w){return h.allWithCallback(w)}static allSettled(w){return(this&&this.prototype instanceof h?this:h).allWithCallback(w,{thenCallback:L=>({status:"fulfilled",value:L}),errorCallback:L=>({status:"rejected",reason:L})})}static allWithCallback(w,b){let L,se,te=new this((ye,Y)=>{L=ye,se=Y}),K=2,V=0;const ne=[];for(let ye of w){De(ye)||(ye=this.resolve(ye));const Y=V;try{ye.then(Be=>{ne[Y]=b?b.thenCallback(Be):Be,K--,0===K&&L(ne)},Be=>{b?(ne[Y]=b.errorCallback(Be),K--,0===K&&L(ne)):se(Be)})}catch(Be){se(Be)}K++,V++}return K-=2,0===K&&L(ne),te}constructor(w){const b=this;if(!(b instanceof h))throw new Error("Must be an instanceof Promise.");b[E]=Ne,b[ve]=[];try{w&&w(de(b,N),de(b,Le))}catch(L){ae(b,!1,L)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return h}then(w,b){let L=this.constructor[Symbol.species];(!L||"function"!=typeof L)&&(L=this.constructor||h);const se=new L(j),te=v.current;return this[E]==Ne?this[ve].push(te,se,w,b):Ce(this,te,se,w,b),se}catch(w){return this.then(null,w)}finally(w){let b=this.constructor[Symbol.species];(!b||"function"!=typeof b)&&(b=h);const L=new b(j);L[Te]=Te;const se=v.current;return this[E]==Ne?this[ve].push(se,L,w,w):Ce(this,se,L,w,w),L}}h.resolve=h.resolve,h.reject=h.reject,h.race=h.race,h.all=h.all;const _=d[R]=d.Promise;d.Promise=h;const G=M("thenPatched");function J(D){const w=D.prototype,b=m(w,"then");if(b&&(!1===b.writable||!b.configurable))return;const L=w.then;w[U]=L,D.prototype.then=function(se,te){return new h((V,ne)=>{L.call(this,V,ne)}).then(se,te)},D[G]=!0}return x.patchThen=J,_&&(J(_),Mt(d,"fetch",D=>function Ue(D){return function(w,b){let L=D.apply(w,b);if(L instanceof h)return L;let se=L.constructor;return se[G]||J(se),L}}(D))),Promise[v.__symbol__("uncaughtPromiseErrors")]=H,h}),Zone.__load_patch("toString",d=>{const v=Function.prototype.toString,x=fe("OriginalDelegate"),m=fe("Promise"),T=fe("Error"),I=function(){if("function"==typeof this){const R=this[x];if(R)return"function"==typeof R?v.call(R):Object.prototype.toString.call(R);if(this===Promise){const U=d[m];if(U)return v.call(U)}if(this===Error){const U=d[T];if(U)return v.call(U)}}return v.call(this)};I[x]=v,Function.prototype.toString=I;const M=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":M.call(this)}});let Yt=!1;if(typeof window<"u")try{const d=Object.defineProperty({},"passive",{get:function(){Yt=!0}});window.addEventListener("test",d,d),window.removeEventListener("test",d,d)}catch{Yt=!1}const ui={useG:!0},qe={},cr={},pr=new RegExp("^"+qt+"(\\w+)(true|false)$"),Ht=fe("propagationStopped");function xs(d,v){const x=(v?v(d):d)+Tt,m=(v?v(d):d)+X,T=qt+x,I=qt+m;qe[d]={},qe[d][Tt]=T,qe[d][X]=I}function li(d,v,x){const m=x&&x.add||Nn,T=x&&x.rm||_s,I=x&&x.listeners||"eventListeners",M=x&&x.rmAll||"removeAllListeners",H=fe(m),z="."+m+":",me=function(B,E,ve){if(B.isRemoved)return;const Te=B.callback;"object"==typeof Te&&Te.handleEvent&&(B.callback=ee=>Te.handleEvent(ee),B.originalDelegate=Te),B.invoke(B,E,[ve]);const ie=B.options;ie&&"object"==typeof ie&&ie.once&&E[T].call(E,ve.type,B.originalDelegate?B.originalDelegate:B.callback,ie)},re=function(B){if(!(B=B||d.event))return;const E=this||B.target||d,ve=E[qe[B.type][Tt]];if(ve)if(1===ve.length)me(ve[0],E,B);else{const Te=ve.slice();for(let ie=0;ie<Te.length&&(!B||!0!==B[Ht]);ie++)me(Te[ie],E,B)}},he=function(B){if(!(B=B||d.event))return;const E=this||B.target||d,ve=E[qe[B.type][X]];if(ve)if(1===ve.length)me(ve[0],E,B);else{const Te=ve.slice();for(let ie=0;ie<Te.length&&(!B||!0!==B[Ht]);ie++)me(Te[ie],E,B)}};function De(B,E){if(!B)return!1;let ve=!0;E&&void 0!==E.useG&&(ve=E.useG);const Te=E&&E.vh;let ie=!0;E&&void 0!==E.chkDup&&(ie=E.chkDup);let ee=!1;E&&void 0!==E.rt&&(ee=E.rt);let oe=B;for(;oe&&!oe.hasOwnProperty(m);)oe=ke(oe);if(!oe&&B[m]&&(oe=B),!oe||oe[H])return!1;const Ne=E&&E.eventNameToString,N={},Le=oe[H]=oe[m],Z=oe[fe(T)]=oe[T],de=oe[fe(I)]=oe[I],Q=oe[fe(M)]=oe[M];let $e;function et(w,b){return!Yt&&"object"==typeof w&&w?!!w.capture:Yt&&b?"boolean"==typeof w?{capture:w,passive:!0}:w?"object"==typeof w&&!1!==w.passive?Object.assign(Object.assign({},w),{passive:!0}):w:{passive:!0}:w}E&&E.prepend&&($e=oe[fe(E.prepend)]=oe[E.prepend]);const j=ve?function(w){if(!N.isExisting)return Le.call(N.target,N.eventName,N.capture?he:re,N.options)}:function(w){return Le.call(N.target,N.eventName,w.invoke,N.options)},h=ve?function(w){if(!w.isRemoved){const b=qe[w.eventName];let L;b&&(L=b[w.capture?X:Tt]);const se=L&&w.target[L];if(se)for(let te=0;te<se.length;te++)if(se[te]===w){se.splice(te,1),w.isRemoved=!0,0===se.length&&(w.allRemoved=!0,w.target[L]=null);break}}if(w.allRemoved)return Z.call(w.target,w.eventName,w.capture?he:re,w.options)}:function(w){return Z.call(w.target,w.eventName,w.invoke,w.options)},G=E&&E.diff?E.diff:function(w,b){const L=typeof b;return"function"===L&&w.callback===b||"object"===L&&w.originalDelegate===b},J=Zone[fe("UNPATCHED_EVENTS")],Ue=d[fe("PASSIVE_EVENTS")],D=function(w,b,L,se,te=!1,K=!1){return function(){const V=this||d;let ne=arguments[0];E&&E.transferEventName&&(ne=E.transferEventName(ne));let ye=arguments[1];if(!ye)return w.apply(this,arguments);if(le&&"uncaughtException"===ne)return w.apply(this,arguments);let Y=!1;if("function"!=typeof ye){if(!ye.handleEvent)return w.apply(this,arguments);Y=!0}if(Te&&!Te(w,ye,V,arguments))return;const Be=Yt&&!!Ue&&-1!==Ue.indexOf(ne),it=et(arguments[2],Be);if(J)for(let Qe=0;Qe<J.length;Qe++)if(ne===J[Qe])return Be?w.call(V,ne,ye,it):w.apply(this,arguments);const jt=!!it&&("boolean"==typeof it||it.capture),ns=!(!it||"object"!=typeof it)&&it.once,Rn=Zone.current;let Bn=qe[ne];Bn||(xs(ne,Ne),Bn=qe[ne]);const Fn=Bn[jt?X:Tt];let En,bt=V[Fn],be=!1;if(bt){if(be=!0,ie)for(let Qe=0;Qe<bt.length;Qe++)if(G(bt[Qe],ye))return}else bt=V[Fn]=[];const ss=V.constructor.name,Jt=cr[ss];Jt&&(En=Jt[ne]),En||(En=ss+b+(Ne?Ne(ne):ne)),N.options=it,ns&&(N.options.once=!1),N.target=V,N.capture=jt,N.eventName=ne,N.isExisting=be;const ot=ve?ui:void 0;ot&&(ot.taskData=N);const _t=Rn.scheduleEventTask(En,ye,ot,L,se);return N.target=null,ot&&(ot.taskData=null),ns&&(it.once=!0),!Yt&&"boolean"==typeof _t.options||(_t.options=it),_t.target=V,_t.capture=jt,_t.eventName=ne,Y&&(_t.originalDelegate=ye),K?bt.unshift(_t):bt.push(_t),te?V:void 0}};return oe[m]=D(Le,z,j,h,ee),$e&&(oe.prependListener=D($e,".prependListener:",function(w){return $e.call(N.target,N.eventName,w.invoke,N.options)},h,ee,!0)),oe[T]=function(){const w=this||d;let b=arguments[0];E&&E.transferEventName&&(b=E.transferEventName(b));const L=arguments[2],se=!!L&&("boolean"==typeof L||L.capture),te=arguments[1];if(!te)return Z.apply(this,arguments);if(Te&&!Te(Z,te,w,arguments))return;const K=qe[b];let V;K&&(V=K[se?X:Tt]);const ne=V&&w[V];if(ne)for(let ye=0;ye<ne.length;ye++){const Y=ne[ye];if(G(Y,te))return ne.splice(ye,1),Y.isRemoved=!0,0===ne.length&&(Y.allRemoved=!0,w[V]=null,"string"==typeof b)&&(w[qt+"ON_PROPERTY"+b]=null),Y.zone.cancelTask(Y),ee?w:void 0}return Z.apply(this,arguments)},oe[I]=function(){const w=this||d;let b=arguments[0];E&&E.transferEventName&&(b=E.transferEventName(b));const L=[],se=Ts(w,Ne?Ne(b):b);for(let te=0;te<se.length;te++){const K=se[te];L.push(K.originalDelegate?K.originalDelegate:K.callback)}return L},oe[M]=function(){const w=this||d;let b=arguments[0];if(b){E&&E.transferEventName&&(b=E.transferEventName(b));const L=qe[b];if(L){const K=w[L[Tt]],V=w[L[X]];if(K){const ne=K.slice();for(let ye=0;ye<ne.length;ye++){const Y=ne[ye];this[T].call(this,b,Y.originalDelegate?Y.originalDelegate:Y.callback,Y.options)}}if(V){const ne=V.slice();for(let ye=0;ye<ne.length;ye++){const Y=ne[ye];this[T].call(this,b,Y.originalDelegate?Y.originalDelegate:Y.callback,Y.options)}}}}else{const L=Object.keys(w);for(let se=0;se<L.length;se++){const K=pr.exec(L[se]);let V=K&&K[1];V&&"removeListener"!==V&&this[M].call(this,V)}this[M].call(this,"removeListener")}if(ee)return this},Ct(oe[m],Le),Ct(oe[T],Z),Q&&Ct(oe[M],Q),de&&Ct(oe[I],de),!0}let ce=[];for(let B=0;B<v.length;B++)ce[B]=De(v[B],x);return ce}function Ts(d,v){if(!v){const I=[];for(let M in d){const H=pr.exec(M);let z=H&&H[1];if(z&&(!v||z===v)){const R=d[M];if(R)for(let U=0;U<R.length;U++)I.push(R[U])}}return I}let x=qe[v];x||(xs(v),x=qe[v]);const m=d[x[Tt]],T=d[x[X]];return m?T?m.concat(T):m.slice():T?T.slice():[]}function hr(d,v){const x=d.Event;x&&x.prototype&&v.patchMethod(x.prototype,"stopImmediatePropagation",m=>function(T,I){T[Ht]=!0,m&&m.apply(T,I)})}function Cs(d,v,x,m,T){const I=Zone.__symbol__(m);if(v[I])return;const M=v[I]=v[m];v[m]=function(H,z,R){return z&&z.prototype&&T.forEach(function(U){const me=`${x}.${m}::`+U,re=z.prototype;if(re.hasOwnProperty(U)){const he=d.ObjectGetOwnPropertyDescriptor(re,U);he&&he.value?(he.value=d.wrapWithCurrentZone(he.value,me),d._redefineProperty(z.prototype,U,he)):re[U]&&(re[U]=d.wrapWithCurrentZone(re[U],me))}else re[U]&&(re[U]=d.wrapWithCurrentZone(re[U],me))}),M.call(v,H,z,R)},d.attachOriginToPatched(v[m],M)}const As=["absolutedeviceorientation","afterinput","afterprint","appinstalled","beforeinstallprompt","beforeprint","beforeunload","devicelight","devicemotion","deviceorientation","deviceorientationabsolute","deviceproximity","hashchange","languagechange","message","mozbeforepaint","offline","online","paint","pageshow","pagehide","popstate","rejectionhandled","storage","unhandledrejection","unload","userproximity","vrdisplayconnected","vrdisplaydisconnected","vrdisplaypresentchange"],pi=["encrypted","waitingforkey","msneedkey","mozinterruptbegin","mozinterruptend"],bs=["load"],Is=["blur","error","focus","load","resize","scroll","messageerror"],Ye=["bounce","finish","start"],Ke=["loadstart","progress","abort","error","load","progress","timeout","loadend","readystatechange"],Qt=["upgradeneeded","complete","abort","success","error","blocked","versionchange","close"],fi=["close","error","open","message"],He=["error","message"],Ut=["abort","animationcancel","animationend","animationiteration","auxclick","beforeinput","blur","cancel","canplay","canplaythrough","change","compositionstart","compositionupdate","compositionend","cuechange","click","close","contextmenu","curechange","dblclick","drag","dragend","dragenter","dragexit","dragleave","dragover","drop","durationchange","emptied","ended","error","focus","focusin","focusout","gotpointercapture","input","invalid","keydown","keypress","keyup","load","loadstart","loadeddata","loadedmetadata","lostpointercapture","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup","mousewheel","orientationchange","pause","play","playing","pointercancel","pointerdown","pointerenter","pointerleave","pointerlockchange","mozpointerlockchange","webkitpointerlockerchange","pointerlockerror","mozpointerlockerror","webkitpointerlockerror","pointermove","pointout","pointerover","pointerup","progress","ratechange","reset","resize","scroll","seeked","seeking","select","selectionchange","selectstart","show","sort","stalled","submit","suspend","timeupdate","volumechange","touchcancel","touchmove","touchstart","touchend","transitioncancel","transitionend","waiting","wheel"].concat(["webglcontextrestored","webglcontextlost","webglcontextcreationerror"],["autocomplete","autocompleteerror"],["toggle"],["afterscriptexecute","beforescriptexecute","DOMContentLoaded","freeze","fullscreenchange","mozfullscreenchange","webkitfullscreenchange","msfullscreenchange","fullscreenerror","mozfullscreenerror","webkitfullscreenerror","msfullscreenerror","readystatechange","visibilitychange","resume"],As,["beforecopy","beforecut","beforepaste","copy","cut","paste","dragstart","loadend","animationstart","search","transitionrun","transitionstart","webkitanimationend","webkitanimationiteration","webkitanimationstart","webkittransitionend"],["activate","afterupdate","ariarequest","beforeactivate","beforedeactivate","beforeeditfocus","beforeupdate","cellchange","controlselect","dataavailable","datasetchanged","datasetcomplete","errorupdate","filterchange","layoutcomplete","losecapture","move","moveend","movestart","propertychange","resizeend","resizestart","rowenter","rowexit","rowsdelete","rowsinserted","command","compassneedscalibration","deactivate","help","mscontentzoom","msmanipulationstatechanged","msgesturechange","msgesturedoubletap","msgestureend","msgesturehold","msgesturestart","msgesturetap","msgotpointercapture","msinertiastart","mslostpointercapture","mspointercancel","mspointerdown","mspointerenter","mspointerhover","mspointerleave","mspointermove","mspointerout","mspointerover","mspointerup","pointerout","mssitemodejumplistitemremoved","msthumbnailclick","stop","storagecommit"]);function vr(d,v,x){if(!x||0===x.length)return v;const m=x.filter(I=>I.target===d);if(!m||0===m.length)return v;const T=m[0].ignoreProperties;return v.filter(I=>-1===T.indexOf(I))}function Me(d,v,x,m){d&&oi(d,vr(d,v,x),m)}Zone.__load_patch("util",(d,v,x)=>{x.patchOnProperties=oi,x.patchMethod=Mt,x.bindArguments=st,x.patchMacroTask=ai;const m=v.__symbol__("BLACK_LISTED_EVENTS"),T=v.__symbol__("UNPATCHED_EVENTS");d[T]&&(d[m]=d[T]),d[m]&&(v[m]=v[T]=d[m]),x.patchEventPrototype=hr,x.patchEventTarget=li,x.isIEOrEdge=ws,x.ObjectDefineProperty=Yn,x.ObjectGetOwnPropertyDescriptor=fn,x.ObjectCreate=Et,x.ArraySlice=ys,x.patchClass=Mn,x.wrapWithCurrentZone=kn,x.filterProperties=vr,x.attachOriginToPatched=Ct,x._redefineProperty=Object.defineProperty,x.patchCallbacks=Cs,x.getGlobalObjects=()=>({globalSources:cr,zoneSymbolEventNames:qe,eventNames:Ut,isBrowser:Ge,isMix:ar,isNode:le,TRUE_STR:X,FALSE_STR:Tt,ZONE_SYMBOL_PREFIX:qt,ADD_EVENT_LISTENER_STR:Nn,REMOVE_EVENT_LISTENER_STR:_s})});const At=fe("zoneTask");function vn(d,v,x,m){let T=null,I=null;x+=m;const M={};function H(R){const U=R.data;return U.args[0]=function(){return R.invoke.apply(this,arguments)},U.handleId=T.apply(d,U.args),R}function z(R){return I.call(d,R.data.handleId)}T=Mt(d,v+=m,R=>function(U,me){if("function"==typeof me[0]){const re={isPeriodic:"Interval"===m,delay:"Timeout"===m||"Interval"===m?me[1]||0:void 0,args:me},he=me[0];me[0]=function(){try{return he.apply(this,arguments)}finally{re.isPeriodic||("number"==typeof re.handleId?delete M[re.handleId]:re.handleId&&(re.handleId[At]=null))}};const De=Jn(v,me[0],re,H,z);if(!De)return De;const ce=De.data.handleId;return"number"==typeof ce?M[ce]=De:ce&&(ce[At]=De),ce&&ce.ref&&ce.unref&&"function"==typeof ce.ref&&"function"==typeof ce.unref&&(De.ref=ce.ref.bind(ce),De.unref=ce.unref.bind(ce)),"number"==typeof ce||ce?ce:De}return R.apply(d,me)}),I=Mt(d,x,R=>function(U,me){const re=me[0];let he;"number"==typeof re?he=M[re]:(he=re&&re[At],he||(he=re)),he&&"string"==typeof he.type?"notScheduled"!==he.state&&(he.cancelFn&&he.data.isPeriodic||0===he.runCount)&&("number"==typeof re?delete M[re]:re&&(re[At]=null),he.zone.cancelTask(he)):R.apply(d,me)})}Zone.__load_patch("legacy",d=>{const v=d[Zone.__symbol__("legacyPatch")];v&&v()}),Zone.__load_patch("queueMicrotask",(d,v,x)=>{x.patchMethod(d,"queueMicrotask",m=>function(T,I){v.current.scheduleMicroTask("queueMicrotask",I[0])})}),Zone.__load_patch("timers",d=>{const v="set",x="clear";vn(d,v,x,"Timeout"),vn(d,v,x,"Interval"),vn(d,v,x,"Immediate")}),Zone.__load_patch("requestAnimationFrame",d=>{vn(d,"request","cancel","AnimationFrame"),vn(d,"mozRequest","mozCancel","AnimationFrame"),vn(d,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(d,v)=>{const x=["alert","prompt","confirm"];for(let m=0;m<x.length;m++)Mt(d,x[m],(I,M,H)=>function(z,R){return v.current.run(I,d,R,H)})}),Zone.__load_patch("EventTarget",(d,v,x)=>{(function Er(d,v){v.patchEventPrototype(d,v)})(d,x),function gi(d,v){if(Zone[v.symbol("patchEventTarget")])return;const{eventNames:x,zoneSymbolEventNames:m,TRUE_STR:T,FALSE_STR:I,ZONE_SYMBOL_PREFIX:M}=v.getGlobalObjects();for(let z=0;z<x.length;z++){const R=x[z],re=M+(R+I),he=M+(R+T);m[R]={},m[R][I]=re,m[R][T]=he}const H=d.EventTarget;H&&H.prototype&&v.patchEventTarget(d,[H&&H.prototype])}(d,x);const m=d.XMLHttpRequestEventTarget;m&&m.prototype&&x.patchEventTarget(d,[m.prototype])}),Zone.__load_patch("MutationObserver",(d,v,x)=>{Mn("MutationObserver"),Mn("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(d,v,x)=>{Mn("IntersectionObserver")}),Zone.__load_patch("FileReader",(d,v,x)=>{Mn("FileReader")}),Zone.__load_patch("on_property",(d,v,x)=>{!function Ds(d,v){if(le&&!ar||Zone[d.symbol("patchEvents")])return;const x=typeof WebSocket<"u",m=v.__Zone_ignore_on_properties;if(Ge){const M=window,H=function $o(){try{const d=mn.navigator.userAgent;if(-1!==d.indexOf("MSIE ")||-1!==d.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:M,ignoreProperties:["error"]}]:[];Me(M,Ut.concat(["messageerror"]),m&&m.concat(H),ke(M)),Me(Document.prototype,Ut,m),typeof M.SVGElement<"u"&&Me(M.SVGElement.prototype,Ut,m),Me(Element.prototype,Ut,m),Me(HTMLElement.prototype,Ut,m),Me(HTMLMediaElement.prototype,pi,m),Me(HTMLFrameSetElement.prototype,As.concat(Is),m),Me(HTMLBodyElement.prototype,As.concat(Is),m),Me(HTMLFrameElement.prototype,bs,m),Me(HTMLIFrameElement.prototype,bs,m);const z=M.HTMLMarqueeElement;z&&Me(z.prototype,Ye,m);const R=M.Worker;R&&Me(R.prototype,He,m)}const T=v.XMLHttpRequest;T&&Me(T.prototype,Ke,m);const I=v.XMLHttpRequestEventTarget;I&&Me(I&&I.prototype,Ke,m),typeof IDBIndex<"u"&&(Me(IDBIndex.prototype,Qt,m),Me(IDBRequest.prototype,Qt,m),Me(IDBOpenDBRequest.prototype,Qt,m),Me(IDBDatabase.prototype,Qt,m),Me(IDBTransaction.prototype,Qt,m),Me(IDBCursor.prototype,Qt,m)),x&&Me(WebSocket.prototype,fi,m)}(x,d)}),Zone.__load_patch("customElements",(d,v,x)=>{!function mi(d,v){const{isBrowser:x,isMix:m}=v.getGlobalObjects();(x||m)&&d.customElements&&"customElements"in d&&v.patchCallbacks(v,d.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(d,x)}),Zone.__load_patch("XHR",(d,v)=>{!function z(R){const U=R.XMLHttpRequest;if(!U)return;const me=U.prototype;let he=me[Qn],De=me[Pn];if(!he){const Z=R.XMLHttpRequestEventTarget;if(Z){const de=Z.prototype;he=de[Qn],De=de[Pn]}}const ce="readystatechange",B="scheduled";function E(Z){const de=Z.data,Q=de.target;Q[I]=!1,Q[H]=!1;const $e=Q[T];he||(he=Q[Qn],De=Q[Pn]),$e&&De.call(Q,ce,$e);const et=Q[T]=()=>{if(Q.readyState===Q.DONE)if(!de.aborted&&Q[I]&&Z.state===B){const tt=Q[v.__symbol__("loadfalse")];if(0!==Q.status&&tt&&tt.length>0){const rt=Z.invoke;Z.invoke=function(){const Ce=Q[v.__symbol__("loadfalse")];for(let ue=0;ue<Ce.length;ue++)Ce[ue]===Z&&Ce.splice(ue,1);!de.aborted&&Z.state===B&&rt.call(Z)},tt.push(Z)}else Z.invoke()}else!de.aborted&&!1===Q[I]&&(Q[H]=!0)};return he.call(Q,ce,et),Q[x]||(Q[x]=Z),N.apply(Q,de.args),Q[I]=!0,Z}function ve(){}function Te(Z){const de=Z.data;return de.aborted=!0,Le.apply(de.target,de.args)}const ie=Mt(me,"open",()=>function(Z,de){return Z[m]=0==de[2],Z[M]=de[1],ie.apply(Z,de)}),oe=fe("fetchTaskAborting"),Ne=fe("fetchTaskScheduling"),N=Mt(me,"send",()=>function(Z,de){if(!0===v.current[Ne]||Z[m])return N.apply(Z,de);{const Q={target:Z,url:Z[M],isPeriodic:!1,args:de,aborted:!1},$e=Jn("XMLHttpRequest.send",ve,Q,E,Te);Z&&!0===Z[H]&&!Q.aborted&&$e.state===B&&$e.invoke()}}),Le=Mt(me,"abort",()=>function(Z,de){const Q=function re(Z){return Z[x]}(Z);if(Q&&"string"==typeof Q.type){if(null==Q.cancelFn||Q.data&&Q.data.aborted)return;Q.zone.cancelTask(Q)}else if(!0===v.current[oe])return Le.apply(Z,de)})}(d);const x=fe("xhrTask"),m=fe("xhrSync"),T=fe("xhrListener"),I=fe("xhrScheduled"),M=fe("xhrURL"),H=fe("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",d=>{d.navigator&&d.navigator.geolocation&&function Ss(d,v){const x=d.constructor.name;for(let m=0;m<v.length;m++){const T=v[m],I=d[T];if(I){if(!es(fn(d,T)))continue;d[T]=(H=>{const z=function(){return H.apply(this,st(arguments,x+"."+T))};return Ct(z,H),z})(I)}}}(d.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(d,v)=>{function x(m){return function(T){Ts(d,m).forEach(M=>{const H=d.PromiseRejectionEvent;if(H){const z=new H(m,{promise:T.promise,reason:T.rejection});M.invoke(z)}})}}d.PromiseRejectionEvent&&(v[fe("unhandledPromiseRejectionHandler")]=x("unhandledrejection"),v[fe("rejectionHandledHandler")]=x("rejectionhandled"))})}},ir=>{ir(ir.s=5565)}]);