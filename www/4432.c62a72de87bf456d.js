"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4432],{4432:(E,y,h)=>{h.r(y),h.d(y,{ion_radio:()=>l,ion_radio_group:()=>v});var b=h(5861),i=h(9816),m=h(6406),_=h(2509),p=h(9397),w=h(1178),u=h(2854);const l=class{constructor(e){(0,i.r)(this,e),this.ionStyle=(0,i.d)(this,"ionStyle",7),this.ionFocus=(0,i.d)(this,"ionFocus",7),this.ionBlur=(0,i.d)(this,"ionBlur",7),this.inputId="ion-rb-"+k++,this.radioGroup=null,this.inheritedAttributes={},this.hasLoggedDeprecationWarning=!1,this.updateState=()=>{this.radioGroup&&(this.checked=this.radioGroup.value===this.value)},this.onClick=()=>{this.checked=this.nativeInput.checked},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.checked=!1,this.buttonTabindex=-1,this.color=void 0,this.name=this.inputId,this.disabled=!1,this.value=void 0,this.labelPlacement="start",this.legacy=void 0,this.justify="space-between"}valueChanged(){this.updateState()}setFocus(e){var o=this;return(0,b.Z)(function*(){e.stopPropagation(),e.preventDefault(),o.el.focus()})()}setButtonTabindex(e){var o=this;return(0,b.Z)(function*(){o.buttonTabindex=e})()}connectedCallback(){this.legacyFormController=(0,_.c)(this.el),void 0===this.value&&(this.value=this.inputId);const e=this.radioGroup=this.el.closest("ion-radio-group");e&&(this.updateState(),(0,p.a)(e,"ionValueChange",this.updateState))}disconnectedCallback(){const e=this.radioGroup;e&&((0,p.b)(e,"ionValueChange",this.updateState),this.radioGroup=null)}componentWillLoad(){this.emitStyle(),this.legacyFormController.hasLegacyControl()||(this.inheritedAttributes=Object.assign({},(0,p.i)(this.el)))}styleChanged(){this.emitStyle()}emitStyle(){const e={"interactive-disabled":this.disabled};this.legacyFormController.hasLegacyControl()&&(e["radio-checked"]=this.checked),this.ionStyle.emit(e)}get hasLabel(){return""!==this.el.textContent}renderRadioControl(){return(0,i.h)("div",{class:"radio-icon",part:"container"},(0,i.h)("div",{class:"radio-inner",part:"mark"}),(0,i.h)("div",{class:"radio-ripple"}))}render(){const{legacyFormController:e}=this;return e.hasLegacyControl()?this.renderLegacyRadio():this.renderRadio()}renderRadio(){const{checked:e,disabled:o,inputId:t,color:r,el:d,justify:c,labelPlacement:s,inheritedAttributes:f,hasLabel:C}=this,j=(0,m.b)(this),x=(0,u.h)("ion-item",d);return(0,i.h)(i.H,{onClick:this.onClick,class:(0,u.c)(r,{[j]:!0,"in-item":x,"radio-checked":e,"radio-disabled":o,[`radio-justify-${c}`]:!0,[`radio-label-placement-${s}`]:!0,"ion-activatable":!x,"ion-focusable":!x})},(0,i.h)("label",{class:"radio-wrapper"},(0,i.h)("input",Object.assign({type:"radio",checked:e,disabled:o,id:t,ref:D=>this.nativeInput=D},f)),(0,i.h)("div",{class:{"label-text-wrapper":!0,"label-text-wrapper-hidden":!C}},(0,i.h)("slot",null)),(0,i.h)("div",{class:"native-wrapper"},this.renderRadioControl())))}renderLegacyRadio(){this.hasLoggedDeprecationWarning||((0,w.p)('ion-radio now requires providing a label with either the default slot or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the component or the "aria-label" attribute.\n\nExample: <ion-radio>Option Label</ion-radio>\nExample with aria-label: <ion-radio aria-label="Option Label"></ion-radio>\n\nDevelopers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.',this.el),this.legacy&&(0,w.p)('ion-radio is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.\n\nDevelopers can dismiss this warning by removing their usage of the "legacy" property and using the new radio syntax.',this.el),this.hasLoggedDeprecationWarning=!0);const{inputId:e,disabled:o,checked:t,color:r,el:d,buttonTabindex:c}=this,s=(0,m.b)(this),{label:f,labelId:C,labelText:j}=(0,p.e)(d,e);return(0,i.h)(i.H,{"aria-checked":`${t}`,"aria-hidden":o?"true":null,"aria-labelledby":f?C:null,role:"radio",tabindex:c,onFocus:this.onFocus,onBlur:this.onBlur,onClick:this.onClick,class:(0,u.c)(r,{[s]:!0,"in-item":(0,u.h)("ion-item",d),interactive:!0,"radio-checked":t,"radio-disabled":o,"legacy-radio":!0})},this.renderRadioControl(),(0,i.h)("label",{htmlFor:e},j),(0,i.h)("input",{type:"radio",checked:t,disabled:o,tabindex:"-1",id:e,ref:x=>this.nativeInput=x}))}get el(){return(0,i.f)(this)}static get watchers(){return{value:["valueChanged"],checked:["styleChanged"],color:["styleChanged"],disabled:["styleChanged"]}}};let k=0;l.style={ios:':host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;min-height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(:not(.legacy-radio)){cursor:pointer}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host(.legacy-radio) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}@supports (inset-inline-start: 0){:host(.legacy-radio) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-radio) label{left:0}:host-context([dir=rtl]):host(.legacy-radio) label,:host-context([dir=rtl]).legacy-radio label{left:unset;right:unset;right:0}}:host(.legacy-radio) label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item:not(.legacy-radio)){width:100%}:host(.in-item[slot=start]:not(.legacy-radio)),:host(.in-item[slot=end]:not(.legacy-radio)){width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:0;margin-bottom:0}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:0;margin-bottom:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host{--color-checked:var(--ion-color-primary, #3880ff)}:host(.legacy-radio){width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{-webkit-margin-start:0;margin-inline-start:0}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:"";opacity:0.2}@supports (inset-inline-start: 0){:host(.ion-focused) .radio-icon::after{inset-inline-start:-9px}}@supports not (inset-inline-start: 0){:host(.ion-focused) .radio-icon::after{left:-9px}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-9px}}:host(.in-item.legacy-radio){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:11px;margin-inline-end:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}:host(.in-item.legacy-radio[slot=start]){-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px;margin-top:8px;margin-bottom:8px}.native-wrapper .radio-icon{width:15px;height:24px}',md:':host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;min-height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(:not(.legacy-radio)){cursor:pointer}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host(.legacy-radio) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}@supports (inset-inline-start: 0){:host(.legacy-radio) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-radio) label{left:0}:host-context([dir=rtl]):host(.legacy-radio) label,:host-context([dir=rtl]).legacy-radio label{left:unset;right:unset;right:0}}:host(.legacy-radio) label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item:not(.legacy-radio)){width:100%}:host(.in-item[slot=start]:not(.legacy-radio)),:host(.in-item[slot=end]:not(.legacy-radio)){width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:0;margin-bottom:0}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:0;margin-inline-end:0;margin-top:0;margin-bottom:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:0;margin-bottom:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host{--color:var(--ion-color-step-400, #999999);--color-checked:var(--ion-color-primary, #3880ff);--border-width:2px;--border-style:solid;--border-radius:50%}:host(.legacy-radio){width:20px;height:20px}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:var(--inner-border-radius);width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused.legacy-radio) .radio-icon::after{top:-12px}@supports (inset-inline-start: 0){:host(.ion-focused.legacy-radio) .radio-icon::after{inset-inline-start:-12px}}@supports not (inset-inline-start: 0){:host(.ion-focused.legacy-radio) .radio-icon::after{left:-12px}:host-context([dir=rtl]):host(.ion-focused.legacy-radio) .radio-icon::after,:host-context([dir=rtl]).ion-focused.legacy-radio .radio-icon::after{left:unset;right:unset;right:-12px}}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:"";opacity:0.2}:host(.in-item.legacy-radio){margin-left:0;margin-right:0;margin-top:9px;margin-bottom:9px;display:block;position:static}:host(.in-item.legacy-radio[slot=start]){-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px;margin-top:11px;margin-bottom:10px}.native-wrapper .radio-icon{width:20px;height:20px}'};const v=class{constructor(e){(0,i.r)(this,e),this.ionChange=(0,i.d)(this,"ionChange",7),this.ionValueChange=(0,i.d)(this,"ionValueChange",7),this.inputId="ion-rg-"+g++,this.labelId=`${this.inputId}-lbl`,this.setRadioTabindex=o=>{const t=this.getRadios(),r=t.find(s=>!s.disabled),d=t.find(s=>s.value===o&&!s.disabled);if(!r&&!d)return;const c=d||r;for(const s of t)s.setButtonTabindex(s===c?0:-1)},this.onClick=o=>{o.preventDefault();const t=o.target&&o.target.closest("ion-radio");if(t){const d=t.value;d!==this.value?(this.value=d,this.emitValueChange(o)):this.allowEmptySelection&&(this.value=void 0,this.emitValueChange(o))}},this.allowEmptySelection=!1,this.name=this.inputId,this.value=void 0}valueChanged(e){this.setRadioTabindex(e),this.ionValueChange.emit({value:e})}componentDidLoad(){this.setRadioTabindex(this.value)}connectedCallback(){var e=this;return(0,b.Z)(function*(){const o=e.el.querySelector("ion-list-header")||e.el.querySelector("ion-item-divider");if(o){const t=e.label=o.querySelector("ion-label");t&&(e.labelId=t.id=e.name+"-lbl")}})()}getRadios(){return Array.from(this.el.querySelectorAll("ion-radio"))}emitValueChange(e){const{value:o}=this;this.ionChange.emit({value:o,event:e})}onKeydown(e){const o=!!this.el.closest("ion-select-popover");if(e.target&&!this.el.contains(e.target))return;const t=this.getRadios().filter(r=>!r.disabled);if(e.target&&t.includes(e.target)){const r=t.findIndex(s=>s===e.target),d=t[r];let c;if(["ArrowDown","ArrowRight"].includes(e.key)&&(c=r===t.length-1?t[0]:t[r+1]),["ArrowUp","ArrowLeft"].includes(e.key)&&(c=0===r?t[t.length-1]:t[r-1]),c&&t.includes(c)&&(c.setFocus(e),o||(this.value=c.value,this.emitValueChange(e))),[" "].includes(e.key)){const s=this.value;this.value=this.allowEmptySelection&&void 0!==this.value?void 0:d.value,(s!==this.value||this.allowEmptySelection)&&this.emitValueChange(e),e.preventDefault()}}}render(){const{label:e,labelId:o,el:t,name:r,value:d}=this,c=(0,m.b)(this);return(0,p.d)(!0,t,r,d,!1),(0,i.h)(i.H,{role:"radiogroup","aria-labelledby":e?o:null,onClick:this.onClick,class:c})}get el(){return(0,i.f)(this)}static get watchers(){return{value:["valueChanged"]}}};let g=0},2854:(E,y,h)=>{h.d(y,{c:()=>m,g:()=>p,h:()=>i,o:()=>u});var b=h(5861);const i=(n,a)=>null!==a.closest(n),m=(n,a)=>"string"==typeof n&&n.length>0?Object.assign({"ion-color":!0,[`ion-color-${n}`]:!0},a):a,p=n=>{const a={};return(n=>void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(l=>null!=l).map(l=>l.trim()).filter(l=>""!==l):[])(n).forEach(l=>a[l]=!0),a},w=/^[a-z][a-z0-9+\-.]*:/,u=function(){var n=(0,b.Z)(function*(a,l,k,v){if(null!=a&&"#"!==a[0]&&!w.test(a)){const g=document.querySelector("ion-router");if(g)return null!=l&&l.preventDefault(),g.push(a,k,v)}return!1});return function(l,k,v,g){return n.apply(this,arguments)}}()}}]);