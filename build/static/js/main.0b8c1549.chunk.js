(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{114:function(e,t,a){},134:function(e,t,a){e.exports=a(266)},139:function(e,t,a){},257:function(e,t,a){},258:function(e,t,a){},259:function(e,t,a){},260:function(e,t,a){},266:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(24),c=a.n(r),l=a(271),o=a(55),m=a(36),s=(a(82),a(139),function(){return i.a.createElement("div",{style:{padding:".5rem"}},i.a.createElement(l.a.Group,{className:"ui segment"},i.a.createElement(l.a,null,i.a.createElement(l.a.Image,{src:"https://react.semantic-ui.com/images/wireframe/image.png"}),i.a.createElement(l.a.Content,null,i.a.createElement(l.a.Header,{as:"a"},"My Neighbor Totoro"),i.a.createElement(l.a.Meta,null,i.a.createElement("span",{className:"cinema"},"IFC Cinema")),i.a.createElement(l.a.Description,null,"Lorem ipsum dolor sit amet, \nconsectetur adipiscing elit, sed do eiusmod \ntempor incididunt ut labore et dolore magna aliqua. Ut \nenim ad minim veniam, quis nostrud exercitation ullamco \nlaboris nisi ut aliquip ex ea commodo consequat."),i.a.createElement(l.a.Extra,null,i.a.createElement("div",{className:"items"},i.a.createElement("div",{className:"tag-items"},i.a.createElement(o.a,{style:{margin:"5px"}},"Limited"),i.a.createElement(o.a,{style:{margin:"5px"}},"HTML"),i.a.createElement(o.a,{style:{margin:"5px"}},"Limited"),i.a.createElement(o.a,{style:{margin:"5px"}},"HTML"),i.a.createElement(o.a,{style:{margin:"5px"}},"Limited"),i.a.createElement(o.a,{style:{margin:"5px"}},"HTML")),i.a.createElement("div",{className:"button-items"},i.a.createElement("button",{className:"ui dracula button",style:{margin:"5px"}},i.a.createElement(m.a,{name:"window maximize outline"}),"Live Demo"),i.a.createElement("button",{className:"ui black button",style:{margin:"5px"}},i.a.createElement(m.a,{name:"code branch"}),"View Source"))))))))}),u=function(){return i.a.createElement("div",null,i.a.createElement(s,null),i.a.createElement(s,null))},d=(a(257),function(){return i.a.createElement("div",{id:"tabs"},i.a.createElement("div",{className:"tab"},i.a.createElement("span",{className:"hover hover-1"},"Projects")),i.a.createElement("div",{className:"tab"},i.a.createElement("span",{className:"hover hover-1"},"Contact")))}),p=(a(114),function(e){var t=e.text;return i.a.createElement("div",{className:"typewriter-body"},i.a.createElement("div",{className:"typewriter"},i.a.createElement("h1",null,"> ",t)))}),E=(a(258),function(e){var t=e.text;return i.a.createElement("div",{className:"title-description"},t)}),f=a(29),v=a(30),b=a(31),g=a(33),w=a(34),y=function(e){var t=Object.keys(e),a=Object.values(e);return i.a.createElement("a",{href:a[0],target:"_blank",rel:"noopener noreferrer",key:t[0]},t[0])},h=function(e){var t=e.reduce((function(e,t){return 0===e.length?'"'.concat(t,'"'):"".concat(e,', "').concat(t,'"')}),"");return"[".concat(t,"]")},N=function(e){var t=e.input,a=e.output;return i.a.createElement("div",{style:{margin:"15px"}},i.a.createElement("div",null,t),i.a.createElement("div",{style:{color:"#00f383"}},function(e){if("object"===typeof e){if(Array.isArray(e)){if("object"===typeof e[0]){for(var t=[],a=0;a<e.length;a++)t.push('"'),t.push(y(e[a])),t.push('"'),a!==e.length-1&&t.push(", ");return["["].concat(t,["]"])}return h(e)}return['"',y(e),'"']}return'"'.concat(e,'"')}(a)))},x=(a(259),function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(b.a)(this,Object(g.a)(t).call(this,e))).state={clientWidth:null,clientHeight:null},a.onWindowResize=function(){var e=a.windowRef.current,t=e.clientWidth,n=e.clientHeight;a.setState({clientWidth:t,clientHeight:n})},a.windowRef=i.a.createRef(),window.addEventListener("resize",a.onWindowResize),a}return Object(w.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.onWindowResize()}},{key:"render",value:function(){var e=this.props.data,t=e.location,a=e.contact,n=e.resume,r=e.interests,c=e.education,l=e.skills;return i.a.createElement("div",{className:"terminal-container",ref:this.windowRef},i.a.createElement("div",{className:"window-container"},i.a.createElement("div",{className:"window-controls"},i.a.createElement("button",{className:"window-controls-btn close-btn"}),i.a.createElement("button",{className:"window-controls-btn minimize-btn"}),i.a.createElement("button",{className:"window-controls-btn expand-btn"}),i.a.createElement("div",{className:"window-description"},"Terminal -- ",this.state.clientWidth,"x",this.state.clientHeight)),i.a.createElement("div",{className:"window-content"},i.a.createElement(N,{input:"> Adam.location",output:t}),i.a.createElement(N,{input:"> Adam.education",output:c}),i.a.createElement(N,{input:"> Adam.skills",output:l}),i.a.createElement(N,{input:"> Adam.resume",output:n}),i.a.createElement(N,{input:"> Adam.contacts",output:a}),i.a.createElement(N,{input:"> Adam.interests",output:r}),i.a.createElement("div",{className:"typewriter-body-span"},i.a.createElement("div",{className:"typewriter-span"},i.a.createElement("span",null,"> "))))))}}]),t}(i.a.Component)),k=(a(260),function(e){var t=e.iconName,a=e.title;return i.a.createElement("div",{className:"section-title"},i.a.createElement("h2",{className:"ui icon header"},function(e){switch(e){case"folder":return i.a.createElement("i",{className:"folder open outline dracula icon"});case"envelope":return i.a.createElement("i",{className:"envelope outline dracula icon"})}return i.a.createElement("i",{className:"question circle icon"})}(t),i.a.createElement("div",{className:"content dracula"},a)))}),j=a(272),A=function(){return i.a.createElement("div",{style:{textAlign:"center",marginBottom:"8em"}},i.a.createElement(j.a,{color:"google plus",style:{margin:"1em"}},i.a.createElement(m.a,{name:"envelope"})," Email"),i.a.createElement(j.a,{color:"linkedin",style:{margin:"1em"}},i.a.createElement(m.a,{name:"linkedin"})," LinkedIn"),i.a.createElement(j.a,{color:"black",style:{margin:"1em"}},i.a.createElement(m.a,{name:"github"})," GitHub"))},C=function(){return i.a.createElement("div",{className:"ui vertical footer",style:{textAlign:"center"}},"Made by Adam Nguyen \xa9 2019")},S=a(78),L=function(){var e=S.profile;S.projects;return i.a.createElement("div",{className:"ui container"},i.a.createElement(d,null),i.a.createElement(p,{text:e.name}),i.a.createElement(E,{text:e.intro}),i.a.createElement(x,{data:e.details}),i.a.createElement(k,{title:"Projects",iconName:"folder"}),i.a.createElement(u,null),i.a.createElement(k,{title:"Contact",iconName:"envelope"}),i.a.createElement(A,null),i.a.createElement(C,null))};a(265);c.a.render(i.a.createElement(L,null),document.querySelector("#root"))},78:function(e){e.exports=JSON.parse('{"profile":{"name":"Adam Nguyen","intro":"I am a software engineer from San Jose, CA. I enjoy creating modern, responsive, intuitive user experiences. Check out some of my projects below.","details":{"location":"San Jose, CA","contact":[{"adamdnguyen10@gmail.com":"mailto:adamdnguyen10@gmail.com"},{"LinkedIn":"https://www.linkedin.com/in/an10/"},{"GitHub":"https://github.com/swiftstrife"}],"resume":{"adam-nguyen.pdf":"adam-nguyen.pdf"},"interests":["football","bowling","billiards","snowboarding","web development","computer science"],"education":"B.S. Computer Science - California State University, Monterey Bay","skills":["Java","JavaScript","React","Redux","iOS Development","Objective-C","Swift","Git"]}},"projects":[{"id":1,"title":"My project"}]}')},82:function(e,t,a){}},[[134,1,2]]]);
//# sourceMappingURL=main.0b8c1549.chunk.js.map