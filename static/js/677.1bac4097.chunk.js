"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[677],{4377:function(e,t,s){s.d(t,{Jh:function(){return u},_r:function(){return h},t2:function(){return _},z5:function(){return l},zi:function(){return d}});var n=s(4569),r=s.n(n),i=s(2007),a=s.n(i),c="https://api.themoviedb.org/3/",o="1d6ccb96bef0945cd43d51d678e594b7",l=function(){try{var e=r().get("".concat(c,"/trending/movie/week?api_key=").concat(o));if(e.results==={})throw new Error("error");return e}catch(t){throw t}},d=function(e){return r()("".concat(c,"search/movie"),{params:{api_key:o,query:e}})},_=function(e){try{var t=r().get("".concat(c,"/movie/").concat(e,"?api_key=").concat(o));if(t.results==={})throw new Error("error");return t}catch(s){throw s}},u=function(e){try{return r().get("".concat(c,"movie/").concat(e,"/credits?api_key=").concat(o))}catch(t){console.log(t)}},h=function(e){try{return r().get("".concat(c,"movie/").concat(e,"/reviews?api_key=").concat(o))}catch(t){console.log(t)}};d.propTypes=a().string.isRequired,_.propTypes=a().number.isRequired,u.propTypes=a().number.isRequired,h.propTypes=a().number.isRequired},5677:function(e,t,s){s.r(t),s.d(t,{default:function(){return W}});var n=s(885),r=s(2791),i=s(6871),a=s(4377),c=s(501),o="DetailsInfo_info__tK1yw",l="DetailsInfo_text__9ZF3A",d="DetailsInfo_textInfo__i4vmp",_="DetailsInfo_button__YSNcn",u="DetailsInfo_score__u-Y8P",h="DetailsInfo_title__jYKdw",m="DetailsInfo_date__MEGM6",f="DetailsInfo_description__PjZWI",p="DetailsInfo_image__SNjVN",x=s(184),v=function(e){var t,s=e.movie,n=(0,i.TH)(),r=[s.release_date],a=0;void 0!==r[0]&&(a=r[0].split("-")[0]);return(0,x.jsx)(x.Fragment,{children:0!==s.length&&(0,x.jsxs)("section",{children:[(0,x.jsx)(c.rU,{to:null!==(t=n.state)&&void 0!==t?t:"/movies",children:(0,x.jsx)("button",{className:_,children:"Go Back"})}),(0,x.jsxs)("div",{className:o,children:[s.poster_path&&(0,x.jsx)("img",{className:p,src:"https://image.tmdb.org/t/p/w500".concat(s.poster_path),alt:s.title}),(0,x.jsxs)("div",{className:l,children:[(0,x.jsxs)("h2",{className:h,children:[s.title," ",(0,x.jsxs)("span",{className:m,children:["(",a,")"]})]}),(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{className:f,children:"User Score: "})," ",(0,x.jsxs)("span",{className:u,children:[(10*s.vote_average).toFixed(0)," %"]})]}),(0,x.jsx)("p",{className:f,children:"Overview:"}),(0,x.jsx)("p",{className:d,children:s.overview}),(0,x.jsxs)("div",{children:[(0,x.jsx)("p",{className:f,children:"Genres: "}),(0,x.jsx)("ul",{children:s.genres&&s.genres.map((function(e){return(0,x.jsx)("li",{children:e.name},e.id)}))})]})]})]})]})})},j="Additional_title__o1dZ9",N="Additional_link__nJqCk",w="Additional_section__59YPs",g="Additional_item__HS-ND",y=function(){var e,t=null!==(e=(0,i.TH)().state)&&void 0!==e?e:"/movies";return(0,x.jsxs)("section",{className:w,children:[(0,x.jsx)("h2",{className:j,children:"Additional information"}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{className:g,children:(0,x.jsx)(c.OL,{to:"cast",state:t,className:N,children:"Cast"})}),(0,x.jsx)("li",{className:g,children:(0,x.jsx)(c.OL,{to:"reviews",state:t,className:N,children:"Reviews"})})]})]})},k="Cast_list__GlWio",I="Cast_title__0cH9s",b="Cast_character__tKDlA",C="Cast_text__P2vgu",D="Cast_profileInfo__CmyME",R="Cast_card__WlXfx",A=function(){var e=(0,r.useState)([]),t=(0,n.Z)(e,2),s=t[0],c=t[1],o=(0,i.UO)().movieId;return(0,r.useEffect)((function(){(0,a.Jh)(o).then((function(e){return c(e.data.cast)})).catch((function(e){return console.log(e)}))}),[o]),(0,x.jsx)(x.Fragment,{children:s!==[]&&(0,x.jsx)("ul",{className:k,children:s.map((function(e){return e.profile_path&&(0,x.jsxs)("li",{className:R,children:[e.profile_path&&(0,x.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:e.name}),(0,x.jsxs)("div",{className:D,children:[(0,x.jsx)("h3",{className:I,children:e.name}),(0,x.jsxs)("p",{className:b,children:["Character: ",(0,x.jsxs)("span",{className:C,children:[" ",e.character]})]})]})]},e.id)}))})})},E="Reviews_title__t265C",S="Reviews_text__EqLvx",q="Reviews_item__DJKij",O="Reviews_alert__COYRd",Z="Reviews_review__sHbuN",T=function(){var e=(0,r.useState)([]),t=(0,n.Z)(e,2),s=t[0],c=t[1],o=(0,i.UO)().movieId;return(0,r.useEffect)((function(){(0,a._r)(o).then((function(e){c(e.data.results)}))}),[o]),(0,x.jsx)("div",{className:Z,children:0===s.length?(0,x.jsx)("p",{className:O,children:'Sorry: "We don\'t have any reviews for this movie."'}):(0,x.jsx)("ul",{children:s.map((function(e){return(0,x.jsxs)("li",{className:q,children:[(0,x.jsxs)("h3",{className:E,children:["Author: ",e.author]}),(0,x.jsx)("p",{className:S,children:e.content})]},e.id)}))})})},W=function(){var e=(0,i.UO)().movieId,t=(0,r.useState)({}),s=(0,n.Z)(t,2),c=s[0],o=s[1];return(0,r.useEffect)((function(){(0,a.t2)(e).then((function(e){o(e.data)})).catch((function(e){return console.log(e)}))}),[e]),(0,x.jsxs)(x.Fragment,{children:[c&&(0,x.jsx)(v,{movie:c}),(0,x.jsx)(y,{}),(0,x.jsxs)(i.Z5,{children:[(0,x.jsx)(i.AW,{path:"cast",element:(0,x.jsx)(A,{})}),(0,x.jsx)(i.AW,{path:"reviews",element:(0,x.jsx)(T,{})})]})]})}}}]);
//# sourceMappingURL=677.1bac4097.chunk.js.map