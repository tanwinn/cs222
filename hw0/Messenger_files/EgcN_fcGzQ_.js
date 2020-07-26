if (self.CavalryLogger) { CavalryLogger.start_js(["YbST0"]); }

__d("HovercardLink",["URI"],(function(a,b,c,d,e,f){__p&&__p();var g={getBaseURI:function(){return new(b("URI"))("/ajax/hovercard/hovercard.php")},constructEndpoint:function(a,b){return g.constructEndpointWithGroupAndLocation(a,b,null)},constructEndpointWithLocation:function(a,b){return g.constructEndpointWithGroupAndLocation(a,null,b)},constructEndpointWithGroupAndLocation:function(a,b,c,d){return g.constructEndpointWithGroupLocationAndExtraParams(a,b,c,d)},constructEndpointWithGroupLocationAndExtraParams:function(a,c,d,e,f){__p&&__p();f===void 0&&(f=null);var h=new(b("URI"))(g.getBaseURI()).setQueryData({id:a.id}),i={};if(f!==null)for(var j in f)i[j]=f[j];(a.weakreference||e)&&c&&(i.group_id=c);d&&(i.hc_location=d);c&&(i.directed_target_id=c);h.addQueryData({extragetparams:JSON.stringify(i)});return h}};e.exports=g}),null);
__d("FacepileRoundedProfile.react",["cx","HovercardLink","Image.react","Link.react","React","Tooltip.react","URI","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){__p&&__p();var a=this.props,c=a.borderColor,d=a.getCustomActivationLink,e=a.getCustomHovercardLink,f=a.hoverBehavior,g=a.imageSize,h=a.isClickable;a=a.profile;var i=this.props.style,j=a.glyph_size,k=a.image_src,l=a.entity_id;i=babelHelpers["extends"]({},i,{borderColor:c,height:g+"px",width:g+"px"});c={};j&&j<g&&(c.margin=(g-j)/2+"px");var m="_4mnq";a.className&&(m=b("joinClasses")(m,a.className));m=b("React").createElement("div",{className:m,style:i},b("React").createElement(b("Image.react"),{className:"_1h_6",height:j||g,src:k,style:c,width:j||g}));f==="name"&&a.name&&(m=b("React").createElement(b("Tooltip.react"),{className:"_4mns",tooltip:a.name},m));i=f==="hovercard";if(l&&(h||i)){k={};i&&(k["data-hovercard"]=e(l));h&&(k.href=d(l));m=b("React").createElement(b("Link.react"),k,m)}return m};function a(){h.apply(this,arguments)}a.defaultProps={getCustomActivationLink:function(a){return new(b("URI"))("/"+a)},getCustomHovercardLink:function(a){return b("HovercardLink").constructEndpoint({id:a})},hoverBehavior:"none",imageSize:32,isClickable:!1};e.exports=a}),null);
__d("FacepileRoundedCount.react",["cx","fbt","ix","FacepileRoundedProfile.react","Image.react","React","Tooltip.react"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;c=b("React").PropTypes;var k=.3438;j=babelHelpers.inherits(a,b("React").Component);j&&j.prototype;a.prototype.render=function(){__p&&__p();var a=this.props,c=a.backgroundColor,d=a.borderColor,e=a.color,f=a.count,g=a.profiles,j=a.size,l=a.style,m=a.use,n=a.shouldHideCountToolTip;a=a.image;var o=g.length;f=f||o;c={backgroundColor:c,borderColor:d,color:e,borderRadius:j,fontSize:j*k+"px",height:j,minWidth:j};e=b("React").createElement("span",{className:"_4mnq _34n6",style:c},b("React").createElement("span",{className:"_40vg"},"+"+f));if(m==="image"){var p=null;switch(j){case 16:p=i("409177");break;case 20:p=i("409178");break;case 28:p=i("409179");break;case 32:p=i("409180");break;case 48:p=i("409181");break}p&&(e=b("React").createElement("div",{className:"_4mnq",style:c},b("React").createElement(b("Image.react"),{className:"_1h_6",src:a?a:p})))}else if(m==="face"&&o>0){c={left:"50%",marginLeft:"-"+j/2+"px"};e=b("React").createElement("div",{className:"_ric",style:{borderColor:d}},b("React").createElement(b("FacepileRoundedProfile.react"),{borderColor:d,imageSize:j,profile:g[0],style:c}),e)}a=f-o;p=g.map(function(a){return a.name}).filter(Boolean);m=o>0?p.join("\n")+"\n":"";if(a>0){d=h._({"*":"and {count} others.","_1":"and {count} other."},[h._param("count",a),h._plural(a)]);m+=d.toString()}j=b("React").createElement("div",{style:{whiteSpace:"pre-wrap"}},m);return b("React").createElement(b("Tooltip.react"),{className:"_4mns",style:l,tooltip:n?null:j},e)};function a(){j.apply(this,arguments)}a.defaultProps={size:32,use:"count",image:null};a.propTypes={backgroundColor:c.string,borderColor:c.string,color:c.string,className:c.string,count:c.number,use:c.oneOf(["count","face","image"]),image:c.any,profiles:c.arrayOf(c.shape({className:c.string,entity_id:c.string,glyph_size:c.number,image_src:c.any.isRequired,name:c.string})).isRequired,size:c.number,style:c.object,shouldHideCountToolTip:c.bool};e.exports=a}),null);
__d("FacepileRounded.react",["cx","FacepileRoundedCount.react","FacepileRoundedProfile.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i=.3125;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){__p&&__p();var a=this.props,c=a.borderColor,d=a.direction,e=a.getCustomActivationLink,f=a.getCustomHovercardLink,g=a.hoverBehavior,h=a.imageSize,j=a.isClickable,k=a.message,l=a.numProfilesToDisplay,m=a.overflowBackgroundColor,n=a.overflowTextColor,o=a.profiles,p=a.remainingProfilesCount,q=a.remainingProfilesCountStyle,r=a.remainingProfilesCountImage,s=a.spacing;a=a.shouldHideCountToolTip;var t=d==="descending";d=o.length;var u=null,v=this.props.className;v=b("joinClasses")("_4mnv"+(t?" _4wh8":""),v);k&&(u=b("React").createElement("div",{className:"_4mnt"},k));k=o;var w=null;l&&l<d&&(k=o.slice(0,l),w=o.slice(l,d));var x={getCustomActivationLink:e,getCustomHovercardLink:f,hoverBehavior:g,imageSize:h,isClickable:j},y=(s!=null?s:-(h*i))+"px";l=k.map(function(a,d){var e={zIndex:t?o.length-d:d};d>0&&(e.marginLeft=y);return b("React").createElement(b("FacepileRoundedProfile.react"),babelHelpers["extends"]({borderColor:c,key:d,profile:a,style:e},x))});e=null;w&&(e=b("React").createElement(b("FacepileRoundedCount.react"),{backgroundColor:m,borderColor:c,color:n,count:p,profiles:w,size:h,shouldHideCountToolTip:a,style:{marginLeft:y,zIndex:t?0:d},use:q,image:r}));return b("React").createElement("div",{className:v},b("React").createElement("div",{className:"_4mnw"},l,e),u)};function a(){h.apply(this,arguments)}a.defaultProps={direction:"ascending",hoverBehavior:"none",imageSize:32,isClickable:!1,isOverlapDisabled:!1,remainingProfilesCountStyle:"count"};e.exports=a}),null);
__d("SUIMessengerRTCThemeConstants",["cssVar"],(function(a,b,c,d,e,f,g){"use strict";a={DARK_MAPPING:{buttonDefault:"#4a4a4a",buttonHover:"#373948",buttonActive:"#4a4a4a",buttonDisabled:"#4a4a4a",buttonBorder:"#828282",buttonBorderDisabled:"#828282",buttonText:"#ffffff",buttonTextDisabled:"#828282",buttonPrimaryDefault:"#008FFF",buttonPrimaryHover:"#0077EC",buttonPrimaryActive:"#0060C5",buttonPrimaryDisabled:"#479EBA",buttonPrimaryBorder:"#008FFF",buttonPrimaryText:"#FFFFFF",buttonPrimaryTextDisabled:"#F5F7F9",dropdownShadowMedium:"0 4px 8px 0 rgba(0,0,0,0.15)",glyphPrimary:"#D9E0E7",glyphSecondary:"#A0A6B7",rowBackgroundDefault:"#FFFFFF",rowBackgroundHover:"#0084ff",rowBackgroundActive:"#0084ff",rowBackgroundDisabled:"#373948",highlightedBackgroundColor:"#EBEDF0",rowBorder:"#FFFFFF",rowTextDefault:"#000000",rowTextHover:"#000000",rowTextActive:"#000000",rowTextSelected:"#F9FAFB",rowTextDisabled:"#6E7285",textPrimary:"#CFD6E0",textSecondary:"#A0A6B7",textDisabled:"#6E7285",textInteractive:"#008FFF",textInverted:"#FFFFFF",textLabel:"#A0A6B7",textHighlightBackground:"#FFD34C",textDark:"#272834",washAccent:"#008FFF",washBorder:"#15151D",washEmpty:"#FFFFFF",washPrimary:"#20212C",washSecondary:"#272834",washTertiary:"#2F303E",washDark:"#15151D"},LIGHT_MAPPING:{buttonDefault:"#FFFFFF",buttonHover:"#EAEFF2",buttonActive:"#D9E0E7",buttonDisabled:"#F5F7F9",buttonBorder:"#828282",buttonBorderDisabled:"#D9E0E7",buttonText:"#272834",buttonTextDisabled:"#A0A6B7",buttonPrimaryDefault:"#008FFF",buttonPrimaryHover:"#0077EC",buttonPrimaryActive:"#0060C5",buttonPrimaryDisabled:"#6FC7FF",buttonPrimaryBorder:"#008FFF",buttonPrimaryText:"#FFFFFF",buttonPrimaryTextDisabled:"#F5F7F9",dropdownShadowMedium:"0 4px 8px 0 rgba(0,0,0,0.15)",glyphPrimary:"#272834",glyphSecondary:"#6E7285",rowBackgroundDefault:"#FFFFFF",rowBackgroundHover:"#0084ff",rowBackgroundActive:"#0084ff",rowBackgroundDisabled:"#373948",highlightedBackgroundColor:"#EBEDF0",rowBorder:"#FFFFFF",rowTextDefault:"#000000",rowTextHover:"#000000",rowTextActive:"#000000",rowTextSelected:"#F9FAFB",rowTextDisabled:"#6E7285",textPrimary:"#272834",textSecondary:"#6E7285",textDisabled:"#C1C8D6",textInteractive:"#008FFF",textInverted:"#FFFFFF",textLabel:"#272834",textHighlightBackground:"#FFD34C",textDark:"#272834",washAccent:"#008FFF",washBorder:"#D9E0E7",washEmpty:"#FFFFFF",washPrimary:"#F9FAFB",washSecondary:"#F5F7F9",washTertiary:"#F1F4F6",washDark:"#272834"}};e.exports=a}),null);
__d("messengerRTCCreateSUITheme",["ix","cssVar","Image.react","React","SUIBusinessThemeComponents","SUITheme","SUITypeStyle","asset"],(function(a,b,c,d,e,f,g,h){"use strict";var i=function(a){return new(b("SUITypeStyle"))(babelHelpers["extends"]({},a,{letterSpacing:void 0,MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased"}))};function a(a,c){var d=i({color:a.textPrimary,fontFamily:"Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif",fontSize:"12px",fontWeight:"bold"}),e=b("React").createElement(b("Image.react"),{src:g("376185")}),f=b("React").createElement(b("Image.react"),{src:g("382797")});f=babelHelpers["extends"]({},b("SUIBusinessThemeComponents"),{SUIButton:{height:{normal:32,"short":28,tall:36},padding:{normal:{button:"12px",icon:"6px",onlyIcon:"8px"},"short":{button:"12px",icon:"6px",onlyIcon:"8px"},tall:{button:"12px",icon:"6px",onlyIcon:"8px"}},typeStyle:d,use:{confirm:{active:{background:a.buttonPrimaryActive,borderColor:a.buttonPrimaryActive,color:a.buttonPrimaryText},disabled:{background:a.buttonPrimaryDisabled,borderColor:a.buttonPrimaryDisabled,color:a.buttonPrimaryTextDisabled},hover:{background:a.buttonPrimaryHover,borderColor:a.buttonPrimaryHover,color:a.buttonPrimaryText},normal:{background:a.buttonPrimaryDefault,borderColor:a.buttonPrimaryDefault,color:a.buttonPrimaryText}},"default":{active:{background:a.buttonActive,borderColor:a.buttonBorder,color:a.buttonText},disabled:{background:a.buttonDisabled,borderColor:a.buttonBorderDisabled,color:a.buttonTextDisabled},hover:{background:a.buttonHover,borderColor:a.buttonBorder,color:a.buttonText},normal:{background:a.buttonDefault,borderColor:a.buttonBorder,color:a.buttonText}},special:{active:{background:a.buttonActive,borderColor:a.buttonBorder,color:a.buttonText},disabled:{background:a.buttonDisabled,borderColor:a.buttonBorderDisabled,color:a.buttonTextDisabled},hover:{background:a.buttonHover,borderColor:a.buttonBorder,color:a.buttonText},normal:{background:a.buttonDefault,borderColor:a.buttonBorder,color:a.buttonText}},flat:{active:{background:"transparent",borderColor:"transparent",color:a.buttonText},disabled:{background:"transparent",borderColor:"transparent",color:a.buttonTextDisabled},hover:{background:"transparent",borderColor:"transparent",color:a.buttonText},normal:{background:"transparent",borderColor:"transparent",color:a.buttonText}},flatWhite:{active:{background:"transparent",borderColor:"transparent",color:a.buttonText},disabled:{background:"transparent",borderColor:"transparent",color:a.buttonTextDisabled},hover:{background:"transparent",borderColor:"transparent",color:a.buttonText},normal:{background:"transparent",borderColor:"transparent",color:a.buttonText}}}},SUISelector:{backgroundColor:a.washEmpty,borderColor:a.buttonBorder,boxShadow:a.dropdownShadowMedium},SUISelectorButton:{use:{"default":{chevron:f}},padding:"8px",paddingLeft:"8px",paddingRight:"4px"},SUISelectorOption:{activeBackgroundColor:a.rowBackgroundActive,activeColor:a.rowTextActive,color:a.rowTextDefault,descriptionColor:a.textSecondary,descriptionSelectedColor:a.rowTextDefault,disabledBackgroundColor:a.rowBackgroundDisabled,disabledColor:a.rowTextDisabled,highlightedBackgroundColor:a.highlightedBackgroundColor,highlightedColor:a.rowTextDefault,padding:{bottom:"8px",left:"32px",right:"20px",top:"8px"},paddingWhenNoValue:{bottom:"8px",left:"16px",right:"20px",top:"8px"},selectedBackgroundColor:a.rowBackgroundHover,selectedColor:a.rowTextSelected,selectedIcon:e,selectedTypeStyle:d,selectedIconMarginRight:"8px",selectedIconMarginLeft:"-4px",typeStyle:d}});return new(b("SUITheme"))({id:c,components:f})}e.exports=a}),null);
__d("SUIMessengerRTCLightTheme",["SUIMessengerRTCThemeConstants","messengerRTCCreateSUITheme"],(function(a,b,c,d,e,f){"use strict";a=b("SUIMessengerRTCThemeConstants").LIGHT_MAPPING;e.exports=b("messengerRTCCreateSUITheme")(a,"messenger-rtc-light")}),null);
__d("flatMapArray",[],(function(a,b,c,d,e,f){__p&&__p();var g=Array.prototype.push;function a(a,b){var c=[];for(var d=0;d<a.length;d++){var e=b.call(a,a[d],d);if(Array.isArray(e))g.apply(c,e);else if(e!=null)throw new TypeError('flatMapArray: Callback must return an array or null, received "'+e.toString()+'" instead')}return c}e.exports=a}),null);
__d("RTCSettingsMediaDeviceSelector.react",["fbt","React","SUIMessengerRTCLightTheme","SUISelector.react","SUISelectorOption.react","SUITheme","SUIThemeContainer.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h="---";a=function(a){var c=a.devices,d=a.disabled===!0?null:a.value||(c.length>0?c[0].deviceId:null);return b("React").createElement(b("SUIThemeContainer.react"),{theme:a.theme?a.theme:b("SUIMessengerRTCLightTheme")},b("React").createElement(b("SUISelector.react"),{buttonBorderedSides:a.buttonBorderedSides,buttonRoundedCorners:a.buttonRoundedCorners,disabled:c.length===0||a.disabled,onChange:a.onChange,placeholder:g._("Select a device"),value:d,width:a.width},j(c,a.disabled,a.selectorType)))};var i={videoinput:"Camera",audioinput:"Microphone",audiooutput:"Audio Output"};function j(a,c,d){__p&&__p();if(c===!0&&d!=null)return b("React").createElement(b("SUISelectorOption.react"),{value:null},g._({"Camera":"Camera disabled","Microphone":"Microphone disabled","Audio Output":"Audio Output disabled"},[g._enum(i[d],{Camera:"Camera",Microphone:"Microphone","Audio Output":"Audio Output"})]));if(a.length===0){c=d!=null?g._({"camera":"No camera found","microphone":"No microphone found","audio output":"No audio output found"},[g._enum(i[d].toLowerCase(),{camera:"camera",microphone:"microphone","audio output":"audio output"})]):h;return b("React").createElement(b("SUISelectorOption.react"),{value:null},c)}var e=0;return a.map(function(a){var c=a.label?a.label:g._({"Camera":"Camera{number}","Microphone":"Microphone{number}","Audio Output":"Audio Output{number}"},[g._enum(i[a.kind],{Camera:"Camera",Microphone:"Microphone","Audio Output":"Audio Output"}),g._param("number",++e)]);return b("React").createElement(b("SUISelectorOption.react"),{key:a.deviceId,value:a.deviceId},c)})}e.exports=a}),null);
__d("FBRTCGroupCallFluidGridView.react",["cx","React","immutable"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").PureComponent);h=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=h.constructor).call.apply(a,[this].concat(d)),this.state={landscape:!0},this.$1=function(){this.setState({landscape:window.innerHeight<=window.innerWidth})}.bind(this),b}a.prototype.componentDidMount=function(){this.$1(),window.addEventListener("resize",this.$1)};a.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.$1)};a.prototype.render=function(){return b("React").createElement("div",{className:"_2rid"+(this.state.landscape?"":" column")+(this.props.hidden?" hide":"")},b("React").createElement(i,{landscape:this.state.landscape,remoteUsers:this.props.remoteUsers,renderUser:this.props.renderUser}))};var i=function a(c){var d=c.remoteUsers,e=c.landscape,f=c.renderUser;return d.size===1?f(d.first()):j(d).map(function(c,d){return b("React").createElement("div",{className:"_2rip"+(e?" column":"")+(c.size===3?" big":""),key:d},b("React").createElement(a,{landscape:!e,remoteUsers:c,renderUser:f}))})};function j(a){if(a.size===2)return a.map(function(a){return b("immutable").List([a])});else if(a.size<7||a.size%2===0)return b("immutable").Range(0,a.size,2).map(function(b){return a.slice(b,b+2)}).toList();else return b("immutable").Range(0,a.size-3,2).map(function(b){return a.slice(b,b+2)}).toList().push(a.takeLast(3))}e.exports=a}),null);