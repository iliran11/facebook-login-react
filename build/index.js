!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.ReactSparklines=t(require("react")):e.ReactSparklines=t(e.React)}(this,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=12)}([function(t,n){t.exports=e},function(e,t,n){"use strict";e.exports=n(2)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(0),l=o(c),a=n(9),f=o(a),p=n(3),d=n(4),b=o(d),h=n(5),g=o(h),y=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.buttonClicked=n.buttonClicked.bind(n),n.showSpinner=n.showSpinner.bind(n),n.state={isWorking:!1,isConnected:!1},n.styles={},n}return s(t,e),u(t,[{key:"componentWillMount",value:function(){var e=this;this.setState({isWorking:!0}),(0,p.loadFbSdk)(this.props.appId,this.props.version).then(function(t){e.props.verbose&&console.info(t,window.FB)}).then(function(){return(0,p.getLoginStatus)()}).then(function(t){"connected"===t.status&&e.setState({isConnected:!0}),e.setState({isWorking:!1}),e.props.onWillMount(t)})}},{key:"getButtonText",value:function(){switch(this.state.isConnected){case!0:return this.props.logoutLabel;case!1:return this.props.loginLabel;default:return"this is default"}}},{key:"buttonClicked",value:function(){this.props.onClick(),this.state.isConnected?this.logout():this.login()}},{key:"showSpinner",value:function(){return this.state.isWorking?l.default.createElement(b.default,{style:this.styles.spinner}):l.default.createElement("div",{style:this.styles.fbIcon})}},{key:"login",value:function(){var e=this;this.setState({isWorking:!0}),(0,p.fbLogin)(this.props.loginOptions).then(function(t){e.props.verbose&&console.info("login response",t),"connected"===t.status?e.setState({isConnected:!0,isWorking:!1}):e.setState({isConnected:!1,isWorking:!1}),e.props.onLoginEvent(t)})}},{key:"logout",value:function(){var e=this;this.setState({isWorking:!0}),(0,p.fbLogout)().then(function(t){e.props.verbose&&console.info("logout response",t),e.setState({isWorking:!1,isConnected:!1}),e.props.onLogoutEvent(t)})}},{key:"render",value:function(){return this.styles&&(this.styles.loginBtn=Object.assign({},g.default.loginBtn,this.styles.loginBtn),this.styles.fbIcon=Object.assign({},g.default.fbIcon,this.styles.fbIcon),this.styles.spinner=Object.assign({},g.default.spinner,this.styles.spinner)),l.default.createElement("div",null,this.props.loginOptions.color,l.default.createElement("button",{onClick:this.buttonClicked,style:this.styles.loginBtn},this.showSpinner(),this.getButtonText()))}}]),t}(c.Component);t.default=y,y.propTypes={appId:f.default.string.isRequired,version:f.default.string,loginLabel:f.default.string,loginOptions:f.default.shape({authType:f.default.string,scope:f.default.string,returnScopes:f.default.bool,enableProfileSelector:f.default.bool,profileSelectorIds:f.default.string}),logoutLabel:f.default.string,verbose:f.default.bool,onWillMount:f.default.func,onLoginEvent:f.default.func,onLogoutEvent:f.default.func,onClick:f.default.func},y.defaultProps={loginLabel:"Log In To Facebook",version:"v2.9",loginOptions:{scope:"email"},logoutLabel:"Log out from Facebook",verbose:!1,onWillMount:function(){},onLoginEvent:function(){},onLogoutEvent:function(){},onClick:function(){},styles:{}}},function(e,t,n){"use strict";function o(e,t){return new Promise(function(n){window.fbAsyncInit=function(){FB.init({appId:e,xfbml:!0,version:t,cookie:!0}),FB.AppEvents.logPageView(),n("SDK Loaded!")},function(e,t,n){var o=e.getElementsByTagName(t)[0];if(!e.getElementById(n)){var i=e.createElement(t);i.id=n,i.src="//connect.facebook.net/en_US/sdk.js",o.parentNode.insertBefore(i,o)}}(document,"script","facebook-jssdk")})}function i(){return new Promise(function(e){window.FB.getLoginStatus(function(t){e(t)})})}function r(e){return new Promise(function(t){window.FB.login(function(e){return t(e)},e)})}function s(){return new Promise(function(e){window.FB.logout(function(t){return e(t)})})}Object.defineProperty(t,"__esModule",{value:!0}),t.loadFbSdk=o,t.getLoginStatus=i,t.fbLogin=r,t.fbLogout=s},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(0),c=function(e){return e&&e.__esModule?e:{default:e}}(u),l=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),r={boxSizing:"border-box",width:30,height:"90%",borderRadius:"50%",border:"5px solid #f3f3f3",borderTop:"5px solid #3498db",animation:"spin 2s linear infinite",position:"absolute",left:5};return n.styles=Object.assign({},r,e.style),n}return r(t,e),s(t,[{key:"render",value:function(){return c.default.createElement("div",{style:this.styles})}}]),t}(u.Component);t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(11),i=function(e){return e&&e.__esModule?e:{default:e}}(o),r={loginBtn:{position:"relative",padding:"0 15px 0px 46px",border:"none",lineHeight:"34px",fontSize:"16px",color:"#FFF",backgroundImage:"linear-gradient(#4C69BA, #3B55A0)"},fbIcon:{position:"absolute",top:0,left:0,width:34,height:"100%",background:"url("+i.default+") 6px 6px no-repeat"}};t.default=r},function(e,t,n){"use strict";function o(e){return function(){return e}}var i=function(){};i.thatReturns=o,i.thatReturnsFalse=o(!1),i.thatReturnsTrue=o(!0),i.thatReturnsNull=o(null),i.thatReturnsThis=function(){return this},i.thatReturnsArgument=function(e){return e},e.exports=i},function(e,t,n){"use strict";function o(e,t,n,o,r,s,u,c){if(i(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var a=[n,o,r,s,u,c],f=0;l=new Error(t.replace(/%s/g,function(){return a[f++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}var i=function(e){};e.exports=o},function(e,t,n){"use strict";var o=n(6),i=n(7),r=n(10);e.exports=function(){function e(e,t,n,o,s,u){u!==r&&i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t,n){e.exports=n(8)()},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZmYyZjIyZi04ZDdlLTQzNjEtYjM2Zi02NGFiYmI2Nzg3ZDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTREMzBERkE2NjFBMTFFNDk5OEZFQ0REMkU5OTk0QTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTREMzBERjk2NjFBMTFFNDk5OEZFQ0REMkU5OTk0QTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNGZlZTRmMS0wMGNjLTRlZTEtYTY5MS00MjJmOGUxY2VmYjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZmZmMmYyMmYtOGQ3ZS00MzYxLWIzNmYtNjRhYmJiNjc4N2Q1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+F7pueQAAAKpJREFUeNpi+P//PwM2jA0AxZWBeA4QP/2PCl5j6CfWYKCYJRB//o8boOhnxOU6RkZGZENZgNQNIFZmwA0YkTksDMQBOyyGvgfic0D8BZsGYg3WQeP/AGItoK9eIPkKRQETkQYLofHvIxuKDRBrMDr4RUgBuQYTBDhTBSjYSDDnGhBr08LFd2kVFPdoZfBdbFmVYJYG8hvQsu8FQubQLFWMGjxq8HAwGCDAAM8dwEI+7fo0AAAAAElFTkSuQmCC"},function(e,t,n){e.exports=n(1)}])});