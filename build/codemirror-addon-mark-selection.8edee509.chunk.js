(self.webpackChunknode_example=self.webpackChunknode_example||[]).push([[5509],{64020:(b,C,y)=>{(function(l){l(y(4631))})(function(l){"use strict";l.defineOption("styleSelectedText",!1,function(e,t,n){var r=n&&n!=l.Init;t&&!r?(e.state.markedSelection=[],e.state.markedSelectionStyle=typeof t=="string"?t:"CodeMirror-selectedtext",p(e),e.on("cursorActivity",h),e.on("change",S)):!t&&r&&(e.off("cursorActivity",h),e.off("change",S),u(e),e.state.markedSelection=e.state.markedSelectionStyle=null)});function h(e){e.state.markedSelection&&e.operation(function(){_(e)})}function S(e){e.state.markedSelection&&e.state.markedSelection.length&&e.operation(function(){u(e)})}var f=8,d=l.Pos,i=l.cmpPos;function s(e,t,n,r){if(i(t,n)!=0)for(var a=e.state.markedSelection,o=e.state.markedSelectionStyle,c=t.line;;){var w=c==t.line?t:d(c,0),v=c+f,k=v>=n.line,x=k?n:d(v,0),g=e.markText(w,x,{className:o});if(r==null?a.push(g):a.splice(r++,0,g),k)break;c=v}}function u(e){for(var t=e.state.markedSelection,n=0;n<t.length;++n)t[n].clear();t.length=0}function p(e){u(e);for(var t=e.listSelections(),n=0;n<t.length;n++)s(e,t[n].from(),t[n].to())}function _(e){if(!e.somethingSelected())return u(e);if(e.listSelections().length>1)return p(e);var t=e.getCursor("start"),n=e.getCursor("end"),r=e.state.markedSelection;if(!r.length)return s(e,t,n);var a=r[0].find(),o=r[r.length-1].find();if(!a||!o||n.line-t.line<=f||i(t,o.to)>=0||i(n,a.from)<=0)return p(e);for(;i(t,a.from)>0;)r.shift().clear(),a=r[0].find();for(i(t,a.from)<0&&(a.to.line-t.line<f?(r.shift().clear(),s(e,t,a.to,0)):s(e,t,a.from,0));i(n,o.to)<0;)r.pop().clear(),o=r[r.length-1].find();i(n,o.to)>0&&(n.line-o.from.line<f?(r.pop().clear(),s(e,o.from,n)):s(e,o.to,n))}})}}]);
