(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(4),c=a.n(r),l=a(1),s=function(){return n.a.createElement("div",{className:"list-books-title"},n.a.createElement("h1",null,"MyReads"))},i=function(e){var t=e.books,a=e.updateBookShelf,o=t.filter(function(e){return"currentlyReading"===e.shelf}),r=t.filter(function(e){return"wantToRead"===e.shelf}),c=t.filter(function(e){return"read"===e.shelf});return n.a.createElement("div",null,n.a.createElement(u,{title:"Currently Reading",books:o,changeBookShelf:a}),n.a.createElement(u,{title:"Want To Read",books:r,changeBookShelf:a}),n.a.createElement(u,{title:"Read",books:c,changeBookShelf:a}))},u=function(e){var t=e.books,a=e.title,o=e.changeBookShelf;return n.a.createElement("div",{className:"bookshelf"},n.a.createElement("h2",{className:"bookshelf-title"},a),n.a.createElement("div",{className:"bookshelf-books"},t.map(function(e){return n.a.createElement("ol",{className:"books-grid"},n.a.createElement("li",{key:e.id},n.a.createElement("div",{className:"book"},n.a.createElement("div",{className:"book-top"},n.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(e.url,")")}}),n.a.createElement("div",{className:"book-shelf-changer"},n.a.createElement("select",{defaultValue:e.shelf,onChange:function(t){return o(e,t.target.value)}},n.a.createElement("option",{value:"move",disabled:!0},"Move to..."),n.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),n.a.createElement("option",{value:"wantToRead"},"Want to Read"),n.a.createElement("option",{value:"read"},"Read"),n.a.createElement("option",{value:"none"},"None")))),n.a.createElement("div",{className:"book-title"},e.title),n.a.createElement("div",{className:"book-authors"},e.author))))})))},m=(a(2),"https://reactnd-books-api.udacity.com"),d=localStorage.token;d||(d=localStorage.token=Math.random().toString(36).substr(-8));var h={Accept:"application/json",Authorization:d},f=(a(10),void 0),k=function(){Object(o.useEffect)(function(){fetch("".concat(m,"/books"),{headers:h}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(e){return console.log()})},[]);var e=Object(o.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(o.useState)([{id:1,url:"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",title:"To Kill a Mockingbird",author:"Harper Lee",shelf:"currentlyReading"},{id:2,url:"http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",title:"1776",author:"David McCullough",shelf:"wantToRead"},{id:3,url:"http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api",title:"The Adventures of Tom Sawyer",author:"MarkTwain",shelf:"read"}]),u=Object(l.a)(c,2),d=u[0],k=u[1];return n.a.createElement("div",{className:"app"},a?n.a.createElement("div",{className:"search-books"},n.a.createElement("div",{className:"search-books-bar"},n.a.createElement("button",{className:"close-search",onClick:function(){return r(!1)}},"Close"),n.a.createElement("div",{className:"search-books-input-wrapper"},n.a.createElement("input",{type:"text",placeholder:"Search by title or author"}))),n.a.createElement("div",{className:"search-books-results"},n.a.createElement("ol",{className:"books-grid"}))):n.a.createElement("div",{className:"list-books"},n.a.createElement(s,null),n.a.createElement("div",{className:"list-books-content"},n.a.createElement(i,{books:d,updateBookShelf:function(e,t){var a=d.map(function(a){return a.id==e.id?(e.shelf=t,e):a});k(a)}})),n.a.createElement("div",{className:"open-search"},n.a.createElement("button",{onClick:function(){return f.setState({showSearchPage:!0})}},"Add a book"))))};a(12);c.a.render(n.a.createElement(k,null),document.getElementById("root"))},5:function(e,t,a){e.exports=a(14)}},[[5,2,1]]]);
//# sourceMappingURL=main.57804146.chunk.js.map