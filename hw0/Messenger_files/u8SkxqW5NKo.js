if (self.CavalryLogger) { CavalryLogger.start_js(["qWoZd"]); }

__d("MessengerDragAndDrop.react",["Bootloader","JSResource","MercuryShareAttachmentRenderLocations","MessengerEnvironment","Placeholder.react","React","lazyLoadComponent","emptyFunction","ifRequired","setImmediate"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=960;c=b("React").PropTypes;var i=b("lazyLoadComponent")(b("JSResource")("MercurySharePreview.react").__setRef("MessengerDragAndDrop.react"));d=babelHelpers.inherits(a,b("React").Component);g=d&&d.prototype;function a(){__p&&__p();var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.$2=function(a){this.$5(function(b){b.removeSharePreview(a)})}.bind(this),this.$3=function(a,b){this.$5(function(c){c.loadedShareData(a,b)})}.bind(this),this.$4=function(a){this.$5(function(b){b.loadingShareData(a)})}.bind(this),b}a.prototype.componentDidMount=function(){b("MessengerEnvironment").messengerui?b("Bootloader").loadModules(["MessengerActions"],b("emptyFunction"),"MessengerDragAndDrop.react"):b("Bootloader").loadModules(["FantaMessageActions"],b("emptyFunction"),"MessengerDragAndDrop.react")};a.prototype.shouldComponentUpdate=function(a){var b=this.props;return b.threadID!==a.threadID||!!(!b.sharePreview&&a.sharePreview)||!!(b.sharePreview&&a.sharePreview&&!b.sharePreview.equals(a.sharePreview))};a.prototype.render=function(){var a=this.props,c=a.sharePreview;a=a.threadID;c=c||{};var d=c.share;c=c.uri;return d||c?b("React").createElement("div",{className:"fbNubFlyoutAttachments"},b("React").createElement("div",{className:"chatAttachmentShelf"},b("React").createElement(b("Placeholder.react"),{fallback:b("React").createElement("div",null)},b("React").createElement(i,{onClose:this.$2,onLoaded:this.$3,onLoading:this.$4,threadID:a,imageSize:{width:h,height:h},location:b("MercuryShareAttachmentRenderLocations").CHAT_PREVIEW,share:d,uri:c})))):null};a.prototype.$5=function(a){b("setImmediate")(function(){typeof this.props.onResize==="function"&&this.props.onResize()}.bind(this)),b("MessengerEnvironment").messengerui?b("ifRequired")("MessengerActions",function(b){a(b)},function(){b("Bootloader").loadModules(["MessengerActions"],function(b){a(b)},"MessengerDragAndDrop.react")}):b("ifRequired")("FantaMessageActions",function(b){a(b)},function(){b("Bootloader").loadModules(["FantaMessageActions"],function(b){a(b)},"MessengerDragAndDrop.react")})};a.propTypes={threadID:c.string.isRequired};e.exports=a}),null);