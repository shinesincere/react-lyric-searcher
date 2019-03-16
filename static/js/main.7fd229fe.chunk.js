(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/spinner.9209e391.gif"},26:function(e,t,a){e.exports=a(54)},54:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),l=a.n(r),s=a(56),i=a(58),o=a(57),m=a(7),u=a(8),d=a(10),h=a(9),b=a(11),p=a(25),f=a(6),g=a.n(f),E=c.a.createContext(),k=function(e,t){switch(t.type){case"SEARCH_TRACKS":return Object(p.a)({},e,{heading:"Search Results",track_list:t.load});default:return e}},y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={heading:"Top 10 Tracks",track_list:[],dispatch:function(e){return a.setState(function(t){return k(t,e)})}},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat("https://api.musixmatch.com/ws/1.1","/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=").concat("261789868fd067f874b086c5a1bc1b9e")).then(function(t){e.setState({track_list:t.data.message.body.track_list})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return c.a.createElement(E.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),v=function(){return c.a.createElement("nav",{className:"navbar navbar-dark bg-dark mb-5"},c.a.createElement("span",{className:"navbar-brand mx-auto mb-0 h1"},"Lyric Searcher"))},_=a(55),w=a(23),N=a.n(w),S=function(){return c.a.createElement("img",{src:N.a,alt:"Loading...",style:{width:"200px",margin:"40px auto",display:"block"}})},x="https://api.musixmatch.com/ws/1.1",j="261789868fd067f874b086c5a1bc1b9e",O=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={track:{},lyrics:{}},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat(x,"/track.lyrics.get?track_id=").concat(this.props.match.params.id,"&apikey=").concat(j)).then(function(t){return e.setState({lyrics:t.data.message.body.lyrics}),g.a.get("".concat(x,"/track.get?track_id=").concat(e.props.match.params.id,"&apikey=").concat(j))}).then(function(t){e.setState({track:t.data.message.body.track})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state,t=e.track,a=e.lyrics;if(void 0===t||void 0===a||0===Object.keys(t).length||0===Object.keys(a).length)return c.a.createElement(S,null);var n=t.track_name,r=t.artist_name,l=t.album_id,s=t.primary_genres,i=t.explicit,o=t.first_release_date,m=s.music_genre_list[0].music_genre.music_genre_name;return c.a.createElement(c.a.Fragment,null,c.a.createElement(_.a,{to:"/",className:"btn btn-md btn-danger m-4 font-weight-bold"},"Go Back"),c.a.createElement("div",{className:"card m-4 font-weight-bold"},c.a.createElement("h5",{className:"card-header bg-success text-white"},n," by "," ",r),c.a.createElement("p",{className:"card-body"},a.lyrics_body)),c.a.createElement("ul",{className:"list-group m-4 font-weight-bold"},c.a.createElement("li",{className:"list-group-item"},"Album ID : ",l),c.a.createElement("li",{className:"list-group-item"},"Song Genre : ",m),c.a.createElement("li",{className:"list-group-item"},"Explicit Words : ",0===i?"No":"Yes"),c.a.createElement("li",{className:"list-group-item"},"Release Date : ",o)))}}]),t}(n.Component),C=function(e){var t=e.track,a=function(e){var a=e.a,n=e.b,r=e.c;return c.a.createElement(c.a.Fragment,null,c.a.createElement("strong",null,c.a.createElement("i",{className:a,style:{fontSize:12}})," ",n),": ",t[r],c.a.createElement("br",null))};return c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("div",{className:"card mb-4 shadow-sm"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",null,t.artist_name),c.a.createElement("p",{className:"card-text"},c.a.createElement(a,{a:"fas fa-play",b:"Track",c:"track_name"}),c.a.createElement(a,{a:"fas fa-compact-disc",b:"Album",c:"album_name"})),c.a.createElement(_.a,{to:"/lyrics/track/".concat(t.track_id),className:"btn btn-dark float-right"},c.a.createElement("i",{className:"fas fa-chevron-right"})," View Lyrics"))))},T=function(){return c.a.createElement(E.Consumer,null,function(e){var t=e.heading,a=e.track_list;return void 0===a||0===a.length?c.a.createElement(S,null):c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"text-center mb-4"},t),c.a.createElement("div",{className:"row mx-auto"},a.map(function(e,t){return c.a.createElement(C,{track:e.track,key:t})})))})},A="https://api.musixmatch.com/ws/1.1",R="261789868fd067f874b086c5a1bc1b9e",D=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={trackTitle:""},a.onChange=function(e){a.setState({trackTitle:e.target.value})},a.onSubmit=function(e,t){t.preventDefault(),g.a.get("".concat(A,"/track.search?q_track=").concat(a.state.trackTitle,"&page_size=10&page=1&s_track_rating=desc&apikey=").concat(R)).then(function(t){e({type:"SEARCH_TRACKS",load:t.data.message.body.track_list}),a.setState({trackTitle:""})}).catch(function(e){return console.log(e)})},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(E.Consumer,null,function(t){var a=t.dispatch;return c.a.createElement("div",{className:"card card-body m-3 p-4 text-center"},c.a.createElement("h1",null,c.a.createElement("i",{className:"fas fa-music"})," Search for a Song"),c.a.createElement("p",null,"Get the lyrics for any Song"),c.a.createElement("form",{onSubmit:e.onSubmit.bind(e,a)},c.a.createElement("input",{placeholder:"Song title...",onChange:e.onChange,value:e.state.trackTitle,name:"trackTitle",type:"text",className:"form-control font-weight-bold"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary btn-lg btn-block mt-3"},"Search Now")))})}}]),t}(n.Component),F=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(D,null),c.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(function(){return c.a.createElement(y,null,c.a.createElement(s.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(v,null),c.a.createElement(i.a,null,c.a.createElement(o.a,{exact:!0,path:"/",component:F}),c.a.createElement(o.a,{exact:!0,path:"/lyrics/track/:id",component:O})))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.7fd229fe.chunk.js.map