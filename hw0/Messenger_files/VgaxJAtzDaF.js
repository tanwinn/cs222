if (self.CavalryLogger) { CavalryLogger.start_js(["TdCLa"]); }

__d("CloseButton.react",["cx","fbt","CloseButtonIcon","Image.react","React","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){"use strict";__p&&__p();var a=this.props,c=a.size||"medium",d=a.appearance||"normal",e=c==="small";c=c==="huge";var f=d==="dark";d=d==="inverted";var g=a.ajaxify||null,i=a.rel||null;c="uiCloseButton"+(e?" uiCloseButtonSmall":"")+(c?" uiCloseButtonHuge":"")+(e&&f?" uiCloseButtonSmallDark":"")+(e&&d?" uiCloseButtonSmallInverted":"")+(!e&&f?" uiCloseButtonDark":"")+(!e&&d?" uiCloseButtonInverted":"");f=h._("Close");e=Object.assign({},this.props);delete e.size;delete e.appearance;delete e.ajaxify;delete e.tooltip;delete e.ariaLabel;return b("React").createElement("a",babelHelpers["extends"]({},e,{ajaxify:g,href:"#",role:"button",title:a.ariaLabel||f,"aria-label":a.ariaLabel||f,"data-hover":a.tooltip&&"tooltip","data-skipchecker":null,"data-tooltip-alignh":a.tooltip&&"center","data-tooltip-content":a.tooltip,className:b("joinClasses")(this.props.className,c),rel:i}),b("React").createElement(b("Image.react"),{className:"uiCloseButtonHighContrast",src:b("CloseButtonIcon").icon}))};function a(){"use strict";i.apply(this,arguments)}e.exports=a}),null);
__d("XUITextInput.react",["cx","AbstractTextInput.react","React","XUIError.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").Component;d=b("React").PropTypes;f=babelHelpers.inherits(a,c);h=f&&f.prototype;function a(a){"use strict";h.constructor.call(this,a),this.$1=function(event){this.props.onFocus&&this.props.onFocus(event),this.setState({focused:!0})}.bind(this),this.$2=function(event){this.props.onBlur&&this.props.onBlur(event),this.setState({focused:!1})}.bind(this),this.state={focused:!1}}a.prototype.render=function(){"use strict";var a="_55r1"+(this.props.height==="tall"?" _55r2":"")+(this.props.disabled?" _53a0":"")+(this.state.focused?" _1488":"");return b("React").createElement(b("XUIError.react"),this.props,b("React").createElement(b("AbstractTextInput.react"),babelHelpers["extends"]({},this.props,{onFocus:this.$1,onBlur:this.$2,ref:"textInput",className:b("joinClasses")(this.props.className,a)})))};a.prototype.focusInput=function(){"use strict";this.refs.textInput&&this.refs.textInput.focusInput()};a.prototype.blurInput=function(){"use strict";this.refs.textInput&&this.refs.textInput.blurInput()};a.prototype.selectInput=function(){"use strict";this.refs.textInput&&this.refs.textInput.selectInput()};a.prototype.getValue=function(){"use strict";return this.refs.textInput&&this.refs.textInput.getValue()};a.prototype.getTextFieldDOM=function(){"use strict";return this.refs.textInput?this.refs.textInput.getTextFieldDOM():null};a.defaultProps={height:"short"};a.propTypes=babelHelpers["extends"]({},b("AbstractTextInput.react").propTypes,b("XUIError.react").propTypes,{height:d.oneOf(["short","tall"])});e.exports=a}),null);
__d("MessengerForwardChatFlowSharedAttachmentsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:MessengerForwardChatFlowSharedAttachmentsLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:MessengerForwardChatFlowSharedAttachmentsLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:MessengerForwardChatFlowSharedAttachmentsLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAttachmentID=function(a){this.$1.attachment_id=a;return this};a.prototype.setAttachmentType=function(a){this.$1.attachment_type=a;return this};a.prototype.setIsFromViewer=function(a){this.$1.is_from_viewer=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={attachment_id:!0,attachment_type:!0,is_from_viewer:!0,vc:!0};e.exports=a}),null);
__d("MessengerShareIconSVGM4React.bs",["React"],(function(a,b,c,d,e,f){"use strict";a=b("React").createElement("svg",{height:"22px",width:"22px",viewBox:"0 0 36 36"},b("React").createElement("g",{id:"share",fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1"},b("React").createElement("polygon",{id:"Fill-7",points:"0 36 36 36 36 0 0 0"}),b("React").createElement("path",{id:"Fill-8",d:"M22.001,11.0081937 L19,11.0081937 L19,23.007676 C19,23.5599911 18.5525,24.0073413 18,24.0073413 C17.448,24.0073413 17,23.5599911 17,23.007676 L17,11.0081937 L13.998,11.0081937 C13.199,11.0081937 12.7225,10.1169921 13.166,9.45171483 L17.1675,3.44572576 C17.5635,2.85142475 18.436,2.85142475 18.832,3.44572576 L22.8335,9.45171483 C23.2765,10.1169921 22.8,11.0081937 22.001,11.0081937 M24,31 L12,31 C9.791,31 8,29.2105991 8,27.0028383 L8,18.0103492 C8,15.8030883 9.791,14.0131875 12,14.0131875 L14,14.0131875 C14.5525,14.0131875 15,14.4610376 15,15.0128528 C15,15.5646681 14.5525,16.0120183 14,16.0120183 L12,16.0120183 C10.8955,16.0120183 10,16.9067187 10,18.0103492 L10,27.0028383 C10,28.1064688 10.8955,29.0011693 12,29.0011693 L24,29.0011693 C25.1045,29.0011693 26,28.1064688 26,27.0028383 L26,18.0103492 C26,16.9067187 25.1045,16.0120183 24,16.0120183 L22,16.0120183 C21.448,16.0120183 21,15.5646681 21,15.0128528 C21,14.4610376 21.448,14.0131875 22,14.0131875 L24,14.0131875 C26.2095,14.0131875 28,15.8030883 28,18.0103492 L28,27.0028383 C28,29.2105991 26.2095,31 24,31",fill:"#000000"})));f.icon=a}),null);
__d("MessengerPhotoForwardButton.react",["cx","fbt","Link.react","MessengerDialogs.bs","MessengerForwardAttachmentDialogReact.bs","MessengerForwardChatFlowSharedAttachmentsTypedLogger","MessengerShareIconSVGM4React.bs","React","TooltipData","gkx"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("MessengerForwardAttachmentDialogReact.bs").jsComponent;c=b("React").PropTypes;d=babelHelpers.inherits(a,b("React").PureComponent);i=d&&d.prototype;function a(){var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.$1=function(){var a=h._("Forward in separate messages");this.props.attachmentIDs[0]&&this.props.attachmentTypes[0]&&new(b("MessengerForwardChatFlowSharedAttachmentsTypedLogger"))().setAttachmentID(this.props.attachmentIDs[0]).setIsFromViewer(this.props.isFromViewer).setAttachmentType(this.props.attachmentTypes[0]).log();b("MessengerDialogs.bs").showDialog(function(){return b("React").createElement(j,{attachmentID:this.props.attachmentIDs[0],onClose:this.$2,shown:!0,title:a})}.bind(this))}.bind(this),c}a.prototype.render=function(){var a=h._("Forward"),c=this.props.isFromViewer?"left":"right";c=Object.assign({"data-tooltip-alignh":c},b("TooltipData").propsFor(a,c));if(b("gkx")("686397"))return b("React").createElement(b("Link.react"),babelHelpers["extends"]({},this.props,c,{"aria-label":a,onClick:this.$1,ref:"forwardButton",role:"button",className:"_2t5t _6-5i"}),b("MessengerShareIconSVGM4React.bs").icon);else return b("React").createElement(b("Link.react"),babelHelpers["extends"]({},this.props,c,{"aria-label":a,onClick:this.$1,ref:"forwardButton",role:"button",className:"_2t5t"}))};a.prototype.$2=function(){b("MessengerDialogs.bs").removeDialog()};a.propTypes={attachmentIDs:c.arrayOf(c.string).isRequired,isFromViewer:c.bool.isRequired};e.exports=a}),null);
__d("MessengerUserControlsButtonReact.bs",["ix","fbt","LinkReact.bs","ImageReact.bs","MercuryIDs","ReasonReact.bs","AsyncRequest","MessengerDialogs.bs","MessengerMenuReact.bs","MercuryThreadActions","MessengerParticipants.bs","MessengerMuteDialogReact.bs","MessengerPopoverMenuReact.bs","MercuryServerPayloadPreprocessor"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=h._("Mute Notifications"),j=h._("Unmute Notifications"),k=h._("Turn Off Messages"),l=h._("Turn On Messages"),m=g("464335"),n=g("464334"),o=b("ReasonReact.bs").statelessComponent("MessengerUserControlsButton");function a(a,c,d){new(b("AsyncRequest"))(a.getURI(c)).setMethod("POST").setData(c).setHandler(d).send();return 0}function c(a,c,d,e,f,g,h){__p&&__p();var p=function(a){var c=b("MercuryIDs").getParticipantIDFromUserID(e);c=b("MessengerParticipants.bs").getNow(c);if(c==null)return 0;else{c=Object.assign({},c);b("MercuryServerPayloadPreprocessor").getForFBID(g).handleUpdate(Object.assign({},{participants:[Object.assign(c,{is_messenger_blocked:a})]}));return 0}},q=function(){if(d){b("MercuryThreadActions").getForFBID(g).unblockOnMessengerDotCom(f);return p(!1)}else{b("MercuryThreadActions").getForFBID(g).blockOnMessengerDotCom(f);return p(!0)}},r=function(a){b("MercuryThreadActions").getForFBID(g).updateMuteSetting(f,a);return 0},s=function(){if(c){b("MercuryThreadActions").getForFBID(g).unmute(f);return 0}else return b("MessengerDialogs.bs").showDialog(function(){return b("ReasonReact.bs").element(void 0,void 0,b("MessengerMuteDialogReact.bs").make(r,[]))})};return[o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7],function(){var e=c?j:i;e=b("ReasonReact.bs").element(void 0,void 0,b("MessengerMenuReact.bs").MenuItem[0](void 0,e,s,void 0,[]));var f=d?l:k;f=b("ReasonReact.bs").element(void 0,void 0,b("MessengerMenuReact.bs").MenuItem[0](void 0,f,q,void 0,[]));e=b("ReasonReact.bs").element(void 0,void 0,b("MessengerMenuReact.bs").Menu[0]([e,f]));f=d?n:m;return b("ReasonReact.bs").element(void 0,void 0,b("MessengerPopoverMenuReact.bs").make(a,void 0,void 0,e,void 0,void 0,[b("ReasonReact.bs").element(void 0,void 0,b("LinkReact.bs").make(void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,[b("ReasonReact.bs").element(void 0,void 0,b("ImageReact.bs").make(void 0,void 0,void 0,void 0,f,32,void 0,40,void 0,[]))]))]))},o[9],o[10],o[11],o[12]]}f.mute=i;f.unmute=j;f.block=k;f.unblock=l;f.unblocked_button_image_path=m;f.blocked_button_image_path=n;f.component=o;f.sendSubscriptionAction=a;f.make=c}),null);
__d("BootloadableMessengerUserControlsButtonReact.bs",["MessengerUserControlsButtonReact.bs"],(function(a,b,c,d,e,f){"use strict";a=[b("MessengerUserControlsButtonReact.bs").mute,b("MessengerUserControlsButtonReact.bs").unmute,b("MessengerUserControlsButtonReact.bs").block,b("MessengerUserControlsButtonReact.bs").unblock,b("MessengerUserControlsButtonReact.bs").unblocked_button_image_path,b("MessengerUserControlsButtonReact.bs").blocked_button_image_path,b("MessengerUserControlsButtonReact.bs").component,b("MessengerUserControlsButtonReact.bs").sendSubscriptionAction,b("MessengerUserControlsButtonReact.bs").make];f.bootloadable=a}),null);
__d("P2PAmountUtils",[],(function(a,b,c,d,e,f){var g=1e4;a={isAmountOverLegalLimit:function(a){return parseFloat(this.sanitizeAmount(a))>=g},isAmountZero:function(a){return parseFloat(this.sanitizeAmount(a))===0},isValidSendAmount:function(a){return!this.isAmountOverLegalLimit(a)&&!this.isAmountZero(a)},sanitizeAmount:function(a){return a.replace(/[^0-9\.]+/g,"")}};e.exports=a}),null);