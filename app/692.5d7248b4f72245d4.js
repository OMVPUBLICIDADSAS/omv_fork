"use strict";(self.webpackChunkquote_cli_01=self.webpackChunkquote_cli_01||[]).push([[692],{1692:(_t,D,r)=>{r.r(D),r.d(D,{QuoteDocModule:()=>ft});var u=r(6895),x=r(2510),L=r(9671),e=r(4650),Y=r(2327),Z=r(5822),N=r(8779),G=r(8139),g=r(7009),k=r(4726),w=r(7392),B=r(2395),F=r(2993),m=r(2722),z=r(5698),f=r(1281),O=r(9521),A=r(3353),v=r(2687),U=r(445),y=r(8184),I=r(5589),H=r(4080),P=r(7579),R=(r(7340),r(3238));const Q=["tooltip"],M=new e.OlP("mat-tooltip-scroll-strategy"),q={provide:M,deps:[y.aV],useFactory:function X(s){return()=>s.scrollStrategies.reposition({scrollThrottle:20})}},$=new e.OlP("mat-tooltip-default-options",{providedIn:"root",factory:function J(){return{showDelay:0,hideDelay:0,touchendHideDelay:1500}}}),E="tooltip-panel",S=(0,A.i$)({passive:!0});let it=(()=>{class s{get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=(0,f.Ig)(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){this._disabled=(0,f.Ig)(t),this._disabled?this.hide(0):this._setupPointerEnterEventsIfNeeded()}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=(0,f.su)(t)}get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=(0,f.su)(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}get message(){return this._message}set message(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this._message,"tooltip"),this._message=null!=t?String(t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage(),this._ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>{this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")})}))}get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}constructor(t,i,o,n,a,d,c,b,T,_,h,C){this._overlay=t,this._elementRef=i,this._scrollDispatcher=o,this._viewContainerRef=n,this._ngZone=a,this._platform=d,this._ariaDescriber=c,this._focusMonitor=b,this._dir=_,this._defaultOptions=h,this._position="below",this._positionAtOrigin=!1,this._disabled=!1,this._viewInitialized=!1,this._pointerExitEventsInitialized=!1,this._viewportMargin=8,this._cssClassPrefix="mat",this._showDelay=this._defaultOptions.showDelay,this._hideDelay=this._defaultOptions.hideDelay,this.touchGestures="auto",this._message="",this._passiveListeners=[],this._destroyed=new P.x,this._scrollStrategy=T,this._document=C,h&&(h.position&&(this.position=h.position),h.positionAtOrigin&&(this.positionAtOrigin=h.positionAtOrigin),h.touchGestures&&(this.touchGestures=h.touchGestures)),_.change.pipe((0,m.R)(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe((0,m.R)(this._destroyed)).subscribe(t=>{t?"keyboard"===t&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){const t=this._elementRef.nativeElement;clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._passiveListeners.forEach(([i,o])=>{t.removeEventListener(i,o,S)}),this._passiveListeners.length=0,this._destroyed.next(),this._destroyed.complete(),this._ariaDescriber.removeDescription(t,this.message,"tooltip"),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible())return void this._tooltipInstance?._cancelPendingAnimations();const o=this._createOverlay(i);this._detach(),this._portal=this._portal||new H.C5(this._tooltipComponent,this._viewContainerRef);const n=this._tooltipInstance=o.attach(this._portal).instance;n._triggerElement=this._elementRef.nativeElement,n._mouseLeaveHideDelay=this._hideDelay,n.afterHidden().pipe((0,m.R)(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),n.show(t)}hide(t=this.hideDelay){const i=this._tooltipInstance;i&&(i.isVisible()?i.hide(t):(i._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){const n=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&n._origin instanceof e.SBq)return this._overlayRef;this._detach()}const i=this._scrollDispatcher.getAncestorScrollContainers(this._elementRef),o=this._overlay.position().flexibleConnectedTo(this.positionAtOrigin&&t||this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i);return o.positionChanges.pipe((0,m.R)(this._destroyed)).subscribe(n=>{this._updateCurrentPositionClass(n.connectionPair),this._tooltipInstance&&n.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=this._overlay.create({direction:this._dir,positionStrategy:o,panelClass:`${this._cssClassPrefix}-${E}`,scrollStrategy:this._scrollStrategy()}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe((0,m.R)(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe((0,m.R)(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe((0,m.R)(this._destroyed)).subscribe(n=>{this._isTooltipVisible()&&n.keyCode===O.hY&&!(0,O.Vb)(n)&&(n.preventDefault(),n.stopPropagation(),this._ngZone.run(()=>this.hide(0)))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){const i=t.getConfig().positionStrategy,o=this._getOrigin(),n=this._getOverlayPosition();i.withPositions([this._addOffset({...o.main,...n.main}),this._addOffset({...o.fallback,...n.fallback})])}_addOffset(t){return t}_getOrigin(){const t=!this._dir||"ltr"==this._dir.value,i=this.position;let o;"above"==i||"below"==i?o={originX:"center",originY:"above"==i?"top":"bottom"}:"before"==i||"left"==i&&t||"right"==i&&!t?o={originX:"start",originY:"center"}:("after"==i||"right"==i&&t||"left"==i&&!t)&&(o={originX:"end",originY:"center"});const{x:n,y:a}=this._invertPosition(o.originX,o.originY);return{main:o,fallback:{originX:n,originY:a}}}_getOverlayPosition(){const t=!this._dir||"ltr"==this._dir.value,i=this.position;let o;"above"==i?o={overlayX:"center",overlayY:"bottom"}:"below"==i?o={overlayX:"center",overlayY:"top"}:"before"==i||"left"==i&&t||"right"==i&&!t?o={overlayX:"end",overlayY:"center"}:("after"==i||"right"==i&&t||"left"==i&&!t)&&(o={overlayX:"start",overlayY:"center"});const{x:n,y:a}=this._invertPosition(o.overlayX,o.overlayY);return{main:o,fallback:{overlayX:n,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),this._ngZone.onMicrotaskEmpty.pipe((0,z.q)(1),(0,m.R)(this._destroyed)).subscribe(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t,this._tooltipInstance._markForCheck())}_invertPosition(t,i){return"above"===this.position||"below"===this.position?"top"===i?i="bottom":"bottom"===i&&(i="top"):"end"===t?t="start":"start"===t&&(t="end"),{x:t,y:i}}_updateCurrentPositionClass(t){const{overlayY:i,originX:o,originY:n}=t;let a;if(a="center"===i?this._dir&&"rtl"===this._dir.value?"end"===o?"left":"right":"start"===o?"left":"right":"bottom"===i&&"top"===n?"above":"below",a!==this._currentPosition){const d=this._overlayRef;if(d){const c=`${this._cssClassPrefix}-${E}-`;d.removePanelClass(c+this._currentPosition),d.addPanelClass(c+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._passiveListeners.length||(this._platformSupportsMouseEvents()?this._passiveListeners.push(["mouseenter",t=>{let i;this._setupPointerExitEventsIfNeeded(),void 0!==t.x&&void 0!==t.y&&(i=t),this.show(void 0,i)}]):"off"!==this.touchGestures&&(this._disableNativeGesturesIfNecessary(),this._passiveListeners.push(["touchstart",t=>{const i=t.targetTouches?.[0],o=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),clearTimeout(this._touchstartTimeout),this._touchstartTimeout=setTimeout(()=>this.show(void 0,o),500)}])),this._addListeners(this._passiveListeners))}_setupPointerExitEventsIfNeeded(){if(this._pointerExitEventsInitialized)return;this._pointerExitEventsInitialized=!0;const t=[];if(this._platformSupportsMouseEvents())t.push(["mouseleave",i=>{const o=i.relatedTarget;(!o||!this._overlayRef?.overlayElement.contains(o))&&this.hide()}],["wheel",i=>this._wheelListener(i)]);else if("off"!==this.touchGestures){this._disableNativeGesturesIfNecessary();const i=()=>{clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions.touchendHideDelay)};t.push(["touchend",i],["touchcancel",i])}this._addListeners(t),this._passiveListeners.push(...t)}_addListeners(t){t.forEach(([i,o])=>{this._elementRef.nativeElement.addEventListener(i,o,S)})}_platformSupportsMouseEvents(){return!this._platform.IOS&&!this._platform.ANDROID}_wheelListener(t){if(this._isTooltipVisible()){const i=this._document.elementFromPoint(t.clientX,t.clientY),o=this._elementRef.nativeElement;i!==o&&!o.contains(i)&&this.hide()}}_disableNativeGesturesIfNecessary(){const t=this.touchGestures;if("off"!==t){const i=this._elementRef.nativeElement,o=i.style;("on"===t||"INPUT"!==i.nodeName&&"TEXTAREA"!==i.nodeName)&&(o.userSelect=o.msUserSelect=o.webkitUserSelect=o.MozUserSelect="none"),("on"===t||!i.draggable)&&(o.webkitUserDrag="none"),o.touchAction="none",o.webkitTapHighlightColor="transparent"}}}return s.\u0275fac=function(t){e.$Z()},s.\u0275dir=e.lG2({type:s,inputs:{position:["matTooltipPosition","position"],positionAtOrigin:["matTooltipPositionAtOrigin","positionAtOrigin"],disabled:["matTooltipDisabled","disabled"],showDelay:["matTooltipShowDelay","showDelay"],hideDelay:["matTooltipHideDelay","hideDelay"],touchGestures:["matTooltipTouchGestures","touchGestures"],message:["matTooltip","message"],tooltipClass:["matTooltipClass","tooltipClass"]}}),s})(),ot=(()=>{class s extends it{constructor(t,i,o,n,a,d,c,b,T,_,h,C){super(t,i,o,n,a,d,c,b,T,_,h,C),this._tooltipComponent=nt,this._cssClassPrefix="mat-mdc",this._viewportMargin=8}_addOffset(t){const o=!this._dir||"ltr"==this._dir.value;return"top"===t.originY?t.offsetY=-8:"bottom"===t.originY?t.offsetY=8:"start"===t.originX?t.offsetX=o?-8:8:"end"===t.originX&&(t.offsetX=o?8:-8),t}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(y.aV),e.Y36(e.SBq),e.Y36(I.mF),e.Y36(e.s_b),e.Y36(e.R0b),e.Y36(A.t4),e.Y36(v.$s),e.Y36(v.tE),e.Y36(M),e.Y36(U.Is,8),e.Y36($,8),e.Y36(u.K0))},s.\u0275dir=e.lG2({type:s,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],exportAs:["matTooltip"],features:[e.qOj]}),s})(),st=(()=>{class s{constructor(t,i){this._changeDetectorRef=t,this._closeOnInteraction=!1,this._isVisible=!1,this._onHide=new P.x,this._animationsDisabled="NoopAnimations"===i}show(t){clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){clearTimeout(this._showTimeoutId),clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){const i=this._tooltip.nativeElement,o=this._showAnimation,n=this._hideAnimation;if(i.classList.remove(t?n:o),i.classList.add(t?o:n),this._isVisible=t,t&&!this._animationsDisabled&&"function"==typeof getComputedStyle){const a=getComputedStyle(i);("0s"===a.getPropertyValue("animation-duration")||"none"===a.getPropertyValue("animation-name"))&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(i.classList.add("_mat-animation-noopable"),this._finalizeAnimation(t))}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(e.sBO),e.Y36(e.QbO,8))},s.\u0275dir=e.lG2({type:s}),s})(),nt=(()=>{class s extends st{constructor(t,i,o){super(t,o),this._elementRef=i,this._isMultiline=!1,this._showAnimation="mat-mdc-tooltip-show",this._hideAnimation="mat-mdc-tooltip-hide"}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){const t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>24&&t.width>=200}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(e.sBO),e.Y36(e.SBq),e.Y36(e.QbO,8))},s.\u0275cmp=e.Xpm({type:s,selectors:[["mat-tooltip-component"]],viewQuery:function(t,i){if(1&t&&e.Gf(Q,7),2&t){let o;e.iGM(o=e.CRH())&&(i._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostVars:2,hostBindings:function(t,i){1&t&&e.NdJ("mouseleave",function(n){return i._handleMouseLeave(n)}),2&t&&e.Udp("zoom",i.isVisible()?1:null)},features:[e.qOj],decls:4,vars:4,consts:[[1,"mdc-tooltip","mdc-tooltip--shown","mat-mdc-tooltip",3,"ngClass","animationend"],["tooltip",""],[1,"mdc-tooltip__surface","mdc-tooltip__surface-animation"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0,1),e.NdJ("animationend",function(n){return i._handleAnimationEnd(n)}),e.TgZ(2,"div",2),e._uU(3),e.qZA()()),2&t&&(e.ekj("mdc-tooltip--multiline",i._isMultiline),e.Q6J("ngClass",i.tooltipClass),e.xp6(3),e.Oqu(i.message))},dependencies:[u.mk],styles:['.mdc-tooltip__surface{word-break:var(--mdc-tooltip-word-break, normal);overflow-wrap:anywhere}.mdc-tooltip{position:fixed;display:none;z-index:9}.mdc-tooltip-wrapper--rich{position:relative}.mdc-tooltip--shown,.mdc-tooltip--showing,.mdc-tooltip--hide{display:inline-flex}.mdc-tooltip--shown.mdc-tooltip--rich,.mdc-tooltip--showing.mdc-tooltip--rich,.mdc-tooltip--hide.mdc-tooltip--rich{display:inline-block;left:-320px;position:absolute}.mdc-tooltip__surface{line-height:16px;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center}.mdc-tooltip__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-tooltip__surface::before{border-color:CanvasText}}.mdc-tooltip--rich .mdc-tooltip__surface{align-items:flex-start;display:flex;flex-direction:column;min-height:24px;min-width:40px;max-width:320px;position:relative}.mdc-tooltip--multiline .mdc-tooltip__surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mdc-tooltip__surface,.mdc-tooltip--multiline .mdc-tooltip__surface[dir=rtl]{text-align:right}.mdc-tooltip__surface .mdc-tooltip__title{margin:0 8px}.mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(200px - (2 * 8px));margin:8px;text-align:left}[dir=rtl] .mdc-tooltip__surface .mdc-tooltip__content,.mdc-tooltip__surface .mdc-tooltip__content[dir=rtl]{text-align:right}.mdc-tooltip--rich .mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(320px - (2 * 8px));align-self:stretch}.mdc-tooltip__surface .mdc-tooltip__content-link{text-decoration:none}.mdc-tooltip--rich-actions,.mdc-tooltip__content,.mdc-tooltip__title{z-index:1}.mdc-tooltip__surface-animation{opacity:0;transform:scale(0.8);will-change:transform,opacity}.mdc-tooltip--shown .mdc-tooltip__surface-animation{transform:scale(1);opacity:1}.mdc-tooltip--hide .mdc-tooltip__surface-animation{transform:scale(1)}.mdc-tooltip__caret-surface-top,.mdc-tooltip__caret-surface-bottom{position:absolute;height:24px;width:24px;transform:rotate(35deg) skewY(20deg) scaleX(0.9396926208)}.mdc-tooltip__caret-surface-top .mdc-elevation-overlay,.mdc-tooltip__caret-surface-bottom .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-tooltip__caret-surface-bottom{outline:1px solid rgba(0,0,0,0);z-index:-1}@media screen and (forced-colors: active){.mdc-tooltip__caret-surface-bottom{outline-color:CanvasText}}.mdc-tooltip__surface{background-color:var(--mdc-plain-tooltip-container-color, #fff)}.mdc-tooltip__surface{border-radius:var(--mdc-plain-tooltip-container-shape, var(--mdc-shape-small, 4px))}.mdc-tooltip__caret-surface-top,.mdc-tooltip__caret-surface-bottom{border-radius:var(--mdc-plain-tooltip-container-shape, var(--mdc-shape-small, 4px))}.mdc-tooltip__surface{color:var(--mdc-plain-tooltip-supporting-text-color, #000)}.mdc-tooltip__surface{font-family:var(--mdc-plain-tooltip-supporting-text-font, inherit);font-size:var(--mdc-plain-tooltip-supporting-text-size, inherit);font-weight:var(--mdc-plain-tooltip-supporting-text-weight, inherit);letter-spacing:var(--mdc-plain-tooltip-supporting-text-tracking, inherit)}.mat-mdc-tooltip{position:relative;transform:scale(0)}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}'],encapsulation:2,changeDetection:0}),s})(),at=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({providers:[q],imports:[v.rt,u.ez,y.U8,R.BQ,R.BQ,I.ZD]}),s})();function rt(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div")(1,"div",14)(2,"div",15),e._uU(3),e.qZA(),e.TgZ(4,"mat-icon",16),e.NdJ("click",function(){const n=e.CHM(t).index,a=e.oxw();return e.KtG(a.deleteMPCOitem(n))}),e._uU(5,"delete"),e.qZA()()()}if(2&s){const t=l.$implicit;e.xp6(3),e.AsE(" ",t.key," - ",t.value," ")}}function lt(s,l){if(1&s){const t=e.EpF();e.TgZ(0,"div")(1,"app-cond-quote",17),e.NdJ("status",function(o){e.CHM(t);const n=e.oxw();return e.KtG(n.onStatus(o))}),e.qZA(),e._UZ(2,"hr"),e.qZA()}if(2&s){const t=l.$implicit;e.xp6(1),e.Q6J("condition",t)("edit",!0)}}const dt=[{path:"",component:(()=>{class s{constructor(t,i,o,n,a){this.dg=t,this.httpGen=i,this.httpq=o,this.sharedvar=n,this.snkBar=a,this.quote_cond_list=[],this.settings={controls:[{name:"name",label:"Nombre de la empresa:",type:"text",style:"w-full",validators:{required:!0}},{name:"site",label:"Vinculo a la p\xe1gina:",type:"text",style:"w-full",validators:{required:!0}},{name:"phone",label:"Tel\xe9fono:",type:"text",validators:{required:!0}},{name:"address",label:"Direcci\xf3n corta:",type:"text",validators:{required:!0}},{name:"consecutive",label:"Consecutivo:",type:"number",validators:{required:!0}},{name:"p_iva",label:"Porcentaje de iva:",type:"number",validators:{required:!0}},{name:"notifMails",label:"Correos para notificar (separados por punto y coma ;):",type:"textarea",totalRows:2,style:"w-full",validators:{}}]}}ngOnInit(){this.sharedvar.general.quote_condition.length>0&&(this.quote_cond_list=JSON.parse(this.sharedvar.general.quote_condition))}updateFromMARPICO(){this.httpq.updateFromMarpico().subscribe(t=>{console.log("Actualizado con exito"),this.snkBar.open("Actualizado con exito","Ok",{duration:6e3})})}addEditItemMPCO(){this.dg.aDefault({title:"C\xf3digo - T\xedtulo",value:{key:"CODIGO",value:"TITULO"},schema:{controls:[{name:"key",label:"C\xf3digo MARPICO:",type:"text",validators:{required:!0}},{name:"value",label:"T\xedtulo:",type:"text",style:"w-full",validators:{required:!0}}]},dgheigth:315,dgwidth:600}).subscribe(n=>{n&&(delete n._valid_,delete n._propName_,this.sharedvar.general.catagMARPICO.push(n),this.httpGen.updateGeneral(this.sharedvar.general).subscribe(a=>{}))})}deleteMPCOitem(t){var i=this;this.snkBar.open(`Eliminar ${this.sharedvar.general.catagMARPICO[t].key}-${this.sharedvar.general.catagMARPICO[t].value}`,"Continuar",{duration:3e3}).onAction().subscribe(function(){var o=(0,L.Z)(function*(n){i.sharedvar.general.catagMARPICO.splice(t,1),i.httpGen.updateGeneral(i.sharedvar.general).subscribe(a=>{})});return function(n){return o.apply(this,arguments)}}())}addCondition(){const t=this.newCondition("T\xedtulo");this.editAddCondition(t)}editAddCondition(t){const o=t.name||"";this.dg.aDefault({title:"Condiciones Comerciales",value:t,schema:{controls:[{name:"name",label:"T\xedtulo:",type:"text",style:{width:"150px"},validators:{required:!0}},{name:"detail",label:"Descripci\xf3n:",type:"textarea",style:"w-full",totalRows:6,validators:{}}]},dgheigth:600}).subscribe(a=>{if(a){const d=this.quote_cond_list.find(c=>c.name===o);d?(d.name=a.name,d.detail=a.detail):this.quote_cond_list.push({name:a.name,detail:a.detail}),this.sharedvar.general.quote_condition=JSON.stringify(this.quote_cond_list),this.httpGen.updateGeneral(this.sharedvar.general).subscribe(c=>{})}})}onStatus(t){switch(t.tag){case"edit":this.editAddCondition(t);break;case"delete":const i=this.quote_cond_list.findIndex(o=>o.name===t.name);i>=0&&(this.quote_cond_list.splice(i,1),this.sharedvar.general.quote_condition=JSON.stringify(this.quote_cond_list),this.httpGen.updateGeneral(this.sharedvar.general).subscribe(o=>{}))}}newCondition(t){return{name:t}}onGetData(t){t.name=t.name?.toUpperCase()||"",this.sharedvar.updatePropResult(this.sharedvar.general,t),!1!==t._valid_?this.httpGen.updateGeneral(this.sharedvar.general).subscribe(i=>{}):this.snkBar.open("Debe proporcionar la informaci\xf3n solicitada","Ok",{duration:3e3})}static#t=this.\u0275fac=function(i){return new(i||s)(e.Y36(Y.x),e.Y36(Z.g),e.Y36(N.v),e.Y36(G.m),e.Y36(g.ux))};static#e=this.\u0275cmp=e.Xpm({type:s,selectors:[["app-quote-doc"]],decls:25,vars:5,consts:[[1,"flex","flex-col","h-screen","bg-slate-100"],[3,"buttons"],[1,"overflow-auto","bg-white","p-2"],[3,"jsonFormData","values","result"],[1,"h-14","flex","justify-between","items-center","bg-white","border-y","border-gray-300","text-lg","text-red-900"],[1,"ml-2","grow"],[1,"block","border","my-2","mr-2","p-2","hover:border-sky-900","hover:text-sky-900",3,"click"],["matTooltip","Agrega t\xedtulo de categor\xeda de MARPICO"],["matTooltip","Atualiza la base de MARPICO"],[1,"mb-2"],[1,"mx-2","border","border-gray-300"],[4,"ngFor","ngForOf"],[1,"h-2"],[1,"ml-2"],[1,"flex"],[1,"grow"],["matTooltip","Elimina  t\xedtiulo de categor\xeda de MARPICO",3,"click"],[3,"condition","edit","status"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0),e._UZ(1,"app-nav-bar",1),e.TgZ(2,"div",2)(3,"app-dynamic-form",3),e.NdJ("result",function(a){return o.onGetData(a)}),e.qZA(),e.TgZ(4,"div",4)(5,"div",5),e._uU(6," Editar: Titulos MARPICO "),e.qZA(),e.TgZ(7,"span",6),e.NdJ("click",function(){return o.addEditItemMPCO()}),e.TgZ(8,"mat-icon",7),e._uU(9,"add"),e.qZA()(),e.TgZ(10,"span",6),e.NdJ("click",function(){return o.updateFromMARPICO()}),e.TgZ(11,"mat-icon",8),e._uU(12,"refresh"),e.qZA()()(),e._UZ(13,"div",9),e.TgZ(14,"div",10),e.YNc(15,rt,6,2,"div",11),e.qZA(),e._UZ(16,"div",12),e.TgZ(17,"div",4)(18,"div",13),e._uU(19," Editar: Condiciones comerciales "),e.qZA(),e.TgZ(20,"span",6),e.NdJ("click",function(){return o.addCondition()}),e.TgZ(21,"mat-icon"),e._uU(22,"add"),e.qZA()()(),e._UZ(23,"div",9),e.YNc(24,lt,3,2,"div",11),e.qZA()()),2&i&&(e.xp6(1),e.Q6J("buttons","100000"),e.xp6(2),e.Q6J("jsonFormData",o.settings)("values",o.sharedvar.general),e.xp6(12),e.Q6J("ngForOf",o.sharedvar.general.catagMARPICO),e.xp6(9),e.Q6J("ngForOf",o.quote_cond_list))},dependencies:[u.sg,k.w,w.Hw,B.r,F.y,ot]})}return s})()}];let ct=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275mod=e.oAB({type:s});static#i=this.\u0275inj=e.cJS({imports:[x.Bz.forChild(dt),x.Bz]})}return s})();var ht=r(4859),pt=r(9193),mt=r(2469),ut=r(2355);let ft=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275mod=e.oAB({type:s});static#i=this.\u0275inj=e.cJS({imports:[u.ez,ct,mt.R,w.Ps,ht.ot,g.ZX,pt.N,ut.z,g.ZX,at]})}return s})()}}]);