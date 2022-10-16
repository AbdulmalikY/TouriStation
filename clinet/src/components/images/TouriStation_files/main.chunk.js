(this["webpackJsonpclinet"] = this["webpackJsonpclinet"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Styles/Card.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Styles/Card.css ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "  /* General CSS on all cards */\n  .general-card{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    margin-top: 20px;\n    padding: 20px 0 0;\n    box-sizing: border-box;\n  }\n  \n  /* Card CSS  */\n  .cards {\n    /* display: grid; */\n    /* grid-template-areas:\"img name name status\"\n    \"img type3 type2 type1\"\n    \"img desc desc desc\"; */\n    display: flex;\n    flex-direction: row;\n    position: relative;\n    min-width: 670px;\n    max-width: 670px;\n    max-height: 160px;\n    min-height: 160px;\n    border-radius: 25px;\n    background-color: #d8e3e7;\n    box-shadow: 0 2px 5px rgb(179, 178, 178);\n    margin: 20px;\n    padding-bottom: 0px;\n    /* to hide any text that go byound the card boundry */\n    overflow: hidden;\n    text-overflow: \"...\";\n    -webkit-line-clamp: 2;\n  }\n\n  /* Card Image CSS */\n  .cards img {\n    position: relative;\n    margin-right: 0px;\n    border: 5px solid #51c4d3;\n    min-height: 160px;\n    max-height: 160px;\n    width: 170px;\n    border-top-left-radius: 25px;\n    border-bottom-left-radius: 25px;\n    padding-right: none;\n  }\n\n  /* To set the name/stars in row with status/heart */\n.flexRow{\n  display: flex;\n  flex-direction: row;\n}\n  /* To set the name and stars in colume */\n  .flexname{\n    display: flex;\n    flex-direction: column;\n    border-right: #51c4d3 solid 5px;\n    justify-content: flex-start;\n  }\n\n  /* The name CSS */\n  .name {\n    color: black;\n    position: relative;\n    margin-right: 0px;\n    margin-bottom: 5px;\n    margin-top: 10px;\n    padding-left: 10px;\n    font-size: 18px;\n    max-width: 270px;\n    min-width: 270px;\n    min-height: 20px;\n    max-height: 80px;\n    overflow-wrap: break-word;\n  }\n  \n  /* To set padding for the stars  */\n  .ratingPadd{\n    padding-left: 60px;\n  }\n\n  /* CSS for the stars*/\n  .rating{\n    background-color: green;\n    width: 10px;\n  }\n\n  /* To set caloume between the name section, fav section with the types/desc section */\n.flexCal{\n  display: flex;\n  flex-direction: column;\n}\n\n  /* To set the status section in row (status and fav) */\n  .flexfav{\n    display: flex;\n    flex-direction: row;\n    width: 60px;\n  }\n\n  /* status CSS */\n  .status {\n    color: #2d3436;\n    position: relative;\n    margin-right: 40px;\n    margin-left: 40px ;\n    font-size: 20px;\n    margin-bottom: 0px;\n    max-height: 20px;\n    margin-top: 25px;\n    \n  }\n\n  /* Favorite CSS */\n  .favorite{\n    margin-left: 10px ;\n    margin-top: 16px;\n    font-size: 40px;\n    padding: 0px;\n    border: none;\n    color:gray;\n  }\n\n  \n  \n  /* To set in colume between the types and desc */\n.flexTypes{\n  display: flex;\n  flex-direction: column;\n  grid-gap: 5px;\n  gap: 5px;\n}\n\n  /* Types CSS */\n  .Type3{\n    font-size: 16px;\n    margin-bottom: 0px;\n    padding-left: 150px;\n    width:500px;\n    border-top: #51c4d3 solid 5px;\n    padding-top: 5px;\n  }\n  \n  /* Desc CSS */\n  .info {\n    margin-bottom: 5px;\n    font-size: 14px;\n    min-width:500px;\n    max-width:500px;\n    align-content: stretch;\n    align-items: flex-start;\n    padding-left: 10px;\n    word-break:break-all;\n    overflow: hidden;\n    text-overflow: \"...\";\n    /* white-space:nowrap; */\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n  }\n\n\n\n   /* For tablet users */\n@media screen and (min-width: 701px) and (max-width: 1050px) {\n  .general-card{\n    margin: 0px;\n  }\n  \n  .cards {\n      min-width: 480px;\n      max-width: 480px;\n  }\n\n  .cards img {\n    width: 200px;\n    padding-right: 80px;\n  }\n  .name{\n    max-width: 200px;\n    min-width: 200px;\n    font-size: 14px;\n  }\n  .ratingPadd{\n    padding-left: 25px;\n    font-size: 10px!important; \n  }\n  .star{\n    font-size: 10px !important; \n  }\n  .flexfav{\n    width: 35px;\n  }\n  .status{\n    font-size: 14px;\n    margin-right: 0px;\n    margin-left: 5px;\n  }\n  .favorite{\n    font-size: 30px;\n  }\n  .flexTypes{\n    grid-gap: 3px;\n    gap: 3px;\n  }\n  .Type3{\n    width: 315px;\n    font-size: 14px;\n    padding-left: 45px;\n    white-space: pre-wrap;\n  }\n  .info{\n    font-size: 14px;\n    width: 300px;\n  }\n}\n\n /* For mobile users  */\n@media screen and (max-width: 700px) {\n  .general-card{\n    margin: 0px;\n    margin-left: -10px;\n  }\n  .cards {\n    min-width: 240px;\n    max-width: 240px;\n    min-height: 130px;\n    max-height: 130px;\n}\n\n.cards img {\n  width: 100px;\n  min-height: 130px;\n  max-height: 130px;\n  padding-right: 7px;\n}\n.name{\n  max-width: 100px;\n  min-width: 100px;\n  font-size: 12px;\n}\n.ratingPadd{\n  padding-left: 7px;\n  font-size: 10px;\n}\n.flexfav{\n  width: 17px;\n  flex-direction: column;\n}\n.status{\n  font-size: 12px;\n  margin-right: 0px;\n  margin-left: 2px;\n  margin-top: 10px;\n}\n.favorite{\n  font-size: 20px;\n}\n.flexTypes{\n  grid-gap: 2px;\n  gap: 2px;\n}\n.Type3{\nwidth: 150px;\n  font-size: 10px;\n  padding-left: 0px;\n  white-space: pre-wrap;\n}\n.info{\n  font-size: 12px;\n  width: 150px;\n  padding-top: 0px;\n  padding-left: 5px;\n  white-space:nowrap;\n}\n}", "",{"version":3,"sources":["webpack://src/Styles/Card.css"],"names":[],"mappings":"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","sourcesContent":["  /* General CSS on all cards */\n  .general-card{\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    margin-top: 20px;\n    padding: 20px 0 0;\n    box-sizing: border-box;\n  }\n  \n  /* Card CSS  */\n  .cards {\n    /* display: grid; */\n    /* grid-template-areas:\"img name name status\"\n    \"img type3 type2 type1\"\n    \"img desc desc desc\"; */\n    display: flex;\n    flex-direction: row;\n    position: relative;\n    min-width: 670px;\n    max-width: 670px;\n    max-height: 160px;\n    min-height: 160px;\n    border-radius: 25px;\n    background-color: #d8e3e7;\n    box-shadow: 0 2px 5px rgb(179, 178, 178);\n    margin: 20px;\n    padding-bottom: 0px;\n    /* to hide any text that go byound the card boundry */\n    overflow: hidden;\n    text-overflow: \"...\";\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n  }\n\n  /* Card Image CSS */\n  .cards img {\n    position: relative;\n    margin-right: 0px;\n    border: 5px solid #51c4d3;\n    min-height: 160px;\n    max-height: 160px;\n    width: 170px;\n    border-top-left-radius: 25px;\n    border-bottom-left-radius: 25px;\n    padding-right: none;\n  }\n\n  /* To set the name/stars in row with status/heart */\n.flexRow{\n  display: flex;\n  flex-direction: row;\n}\n  /* To set the name and stars in colume */\n  .flexname{\n    display: flex;\n    flex-direction: column;\n    border-right: #51c4d3 solid 5px;\n    justify-content: flex-start;\n  }\n\n  /* The name CSS */\n  .name {\n    color: black;\n    position: relative;\n    margin-right: 0px;\n    margin-bottom: 5px;\n    margin-top: 10px;\n    padding-left: 10px;\n    font-size: 18px;\n    max-width: 270px;\n    min-width: 270px;\n    min-height: 20px;\n    max-height: 80px;\n    overflow-wrap: break-word;\n  }\n  \n  /* To set padding for the stars  */\n  .ratingPadd{\n    padding-left: 60px;\n  }\n\n  /* CSS for the stars*/\n  .rating{\n    background-color: green;\n    width: 10px;\n  }\n\n  /* To set caloume between the name section, fav section with the types/desc section */\n.flexCal{\n  display: flex;\n  flex-direction: column;\n}\n\n  /* To set the status section in row (status and fav) */\n  .flexfav{\n    display: flex;\n    flex-direction: row;\n    width: 60px;\n  }\n\n  /* status CSS */\n  .status {\n    color: #2d3436;\n    position: relative;\n    margin-right: 40px;\n    margin-left: 40px ;\n    font-size: 20px;\n    margin-bottom: 0px;\n    max-height: 20px;\n    margin-top: 25px;\n    \n  }\n\n  /* Favorite CSS */\n  .favorite{\n    margin-left: 10px ;\n    margin-top: 16px;\n    font-size: 40px;\n    padding: 0px;\n    border: none;\n    color:gray;\n  }\n\n  \n  \n  /* To set in colume between the types and desc */\n.flexTypes{\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n  /* Types CSS */\n  .Type3{\n    font-size: 16px;\n    margin-bottom: 0px;\n    padding-left: 150px;\n    width:500px;\n    border-top: #51c4d3 solid 5px;\n    padding-top: 5px;\n  }\n  \n  /* Desc CSS */\n  .info {\n    margin-bottom: 5px;\n    font-size: 14px;\n    min-width:500px;\n    max-width:500px;\n    align-content: stretch;\n    align-items: flex-start;\n    padding-left: 10px;\n    word-break:break-all;\n    overflow: hidden;\n    text-overflow: \"...\";\n    /* white-space:nowrap; */\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n  }\n\n\n\n   /* For tablet users */\n@media screen and (min-width: 701px) and (max-width: 1050px) {\n  .general-card{\n    margin: 0px;\n  }\n  \n  .cards {\n      min-width: 480px;\n      max-width: 480px;\n  }\n\n  .cards img {\n    width: 200px;\n    padding-right: 80px;\n  }\n  .name{\n    max-width: 200px;\n    min-width: 200px;\n    font-size: 14px;\n  }\n  .ratingPadd{\n    padding-left: 25px;\n    font-size: 10px!important; \n  }\n  .star{\n    font-size: 10px !important; \n  }\n  .flexfav{\n    width: 35px;\n  }\n  .status{\n    font-size: 14px;\n    margin-right: 0px;\n    margin-left: 5px;\n  }\n  .favorite{\n    font-size: 30px;\n  }\n  .flexTypes{\n    gap: 3px;\n  }\n  .Type3{\n    width: 315px;\n    font-size: 14px;\n    padding-left: 45px;\n    white-space: pre-wrap;\n  }\n  .info{\n    font-size: 14px;\n    width: 300px;\n  }\n}\n\n /* For mobile users  */\n@media screen and (max-width: 700px) {\n  .general-card{\n    margin: 0px;\n    margin-left: -10px;\n  }\n  .cards {\n    min-width: 240px;\n    max-width: 240px;\n    min-height: 130px;\n    max-height: 130px;\n}\n\n.cards img {\n  width: 100px;\n  min-height: 130px;\n  max-height: 130px;\n  padding-right: 7px;\n}\n.name{\n  max-width: 100px;\n  min-width: 100px;\n  font-size: 12px;\n}\n.ratingPadd{\n  padding-left: 7px;\n  font-size: 10px;\n}\n.flexfav{\n  width: 17px;\n  flex-direction: column;\n}\n.status{\n  font-size: 12px;\n  margin-right: 0px;\n  margin-left: 2px;\n  margin-top: 10px;\n}\n.favorite{\n  font-size: 20px;\n}\n.flexTypes{\n  gap: 2px;\n}\n.Type3{\nwidth: 150px;\n  font-size: 10px;\n  padding-left: 0px;\n  white-space: pre-wrap;\n}\n.info{\n  font-size: 12px;\n  width: 150px;\n  padding-top: 0px;\n  padding-left: 5px;\n  white-space:nowrap;\n}\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Styles/Home.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Styles/Home.css ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "p {\n    font-family: 'Ubuntu', sans-serif;\n    color: #8f8f8f;\n  }\n  \n  body {\n    font-family: \"Montserrat\";\n  }\n  \n  h1, h2, h3, h4, h5, h6 {\n    font-family: \"Montserrat-Bold\";\n  }\n  \n  h2 {\n    font-size: 3rem;\n    line-height: 1.5;\n  }\n  \n  h3 {\n    font-size: 1.5rem;\n  }\n  \n  /*Heading*/\n  .big-heading {\n    font-family: \"Montserrat-Black\";\n    font-size: 3.5rem;\n    line-height: 1.5;\n  }\n  \n  .container-fluid {\n    padding: 3% 15% 7%;\n  }\n  \n  #title {\n    background-color: #58D68D;\n    color: white;\n  }\n  \n  /*navbar*/\n  .navbar {\n    padding: 0 0 4.5rem;\n  }\n  \n  .navbar-brand {\n    font-family: \"Ubuntu\";\n    font-size: 2rem;\n    font-weight: bold;\n  }\n  \n  .nav-item {\n    padding: 0 18px;\n  }\n  \n  .nav-link {\n    font-size: 1.2rem;\n    font-family: \"Montserrat-light\";\n  }\n  \n  /*Downlowd buttons*/\n  .downlowd-button {\n    margin: 5% 3% 5% 0;\n  }\n  \n  /*Title image*/\n  .titleImage {\n    width: 10%;\n\n    transform: rotate(25deg);\n    position: absolute;\n    /* right: 30%; */\n    /* left: 20px; */\n    /* aspectRatio: 2.5; */\n  }\n\n.sectionimg{\n  /* transform-origin: 0 0; */\n  transition: all 1s ease;\n  width: 420px;\n}\n  .sectionimg:hover{\n    transform: scale(1.1, 1.1);\n  }\n  \n  /*features*/\n  .features {\n    padding: 7% 5%;\n    background-color: #fff;\n    position: relative;\n  }\n  .Mainsection{\n    padding: 7% 4%;\n    background-color: #d8e3e7;\n    position: relative;\n    justify-content: center; \n  }\n  \n  .feature-box {\n    text-align: center;\n    padding: 5%;\n  }\n  \n  .section-box {\n    margin: 1.93% ;\n    position: relative;\n    text-align: center;\n    color: white;\n  }\n  .icon {\n    color: #ef8172;\n    margin-bottom: 1rem;\n  }\n  \n  .icon:hover {\n    color: #ff4c68;\n  }\n  \n  /*Testmoniles*/\n  #testimonials {\n    text-align: center;\n    background-color: #ef8172;\n    color: #fff;\n    background-color: #126e82;\n  }\n  \n  .testimonials-img {\n    width: 10%;\n    margin: 20px;\n  }\n  \n  #press {\n    background-color: #126e82;\n    text-align: center;\n  }\n  \n  .press-logo {\n    width: 8%;\n    margin: 20px 20px 50px;\n  }\n  \n  .carousel-item {\n    padding: 7% 15%;\n  }\n  \n  /*pricing*/\n  #pricing {\n    padding: 100px;\n    text-align: center;\n    background-color: #51c4d3;\n  }\n\n  #ThingsToDo {\n    padding: 100px;\n    background-color: #d8e3e7;\n  }\n\n  #Upcoming {\n    padding: 100px;\n    background-color: #d8e3e7;\n  }\n  \n  \n  .pricing-column {\n    padding: 3% 2%;\n  }\n  \n  #cta {\n    background-color: #ff4c68;\n    text-align: center;\n    padding: 7% 15%;\n    color: white;\n  }\n  \n  .cta-heading {\n    font-family: \"Montserrat-Black\";\n    font-size: 3.5rem;\n    line-height: 1.5;\n    font-weight: bold;\n  }\n  \n  /*footer*/\n  #footer {\n    padding: 5% 15%;\n    text-align: center; \n    background-color: #132c33;\n  }\n  \n  .social-icon {\n    margin: 4px 10px;\n  }\n  \n  @media (max-width: 1128px)  {\n    #title {\n      text-align: center;\n    }\n    .Mainsection{\n      padding: 40px;\n      padding-left: 0;\n    }\n    /* .sectionimg{\n      width: 360px;\n    } */\n\n\n  }\n\n/* New */\n\n  \n/* @media screen and (max-width: 800){ \n.Mainsection{\n  padding: 40px;\n}\n\n\n} */\n\n.SectionImg{\n  position: relative;\n  text-align: center;\n  color: white;\n}\n.centeredText {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 1.5875rem;\nfont-family: NotoKufiArabic, Arial, sans-serif;\nline-height: 1.6875rem;\nletter-spacing: 0;\n}\n\n.TouriIcons\n{\n  width: 150px;\n  height: 180px;\n}\n\n\n.saudiflag{\n  margin-bottom: 4%;\n}\n.HomeCard{\n  margin: 2%;\n}\n\n/* .navbarSections{\n  color: white !important\n} */\n\n", "",{"version":3,"sources":["webpack://src/Styles/Home.css"],"names":[],"mappings":"AAAA;IACI,iCAAiC;IACjC,cAAc;EAChB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,8BAA8B;EAChC;;EAEA;IACE,eAAe;IACf,gBAAgB;EAClB;;EAEA;IACE,iBAAiB;EACnB;;EAEA,UAAU;EACV;IACE,+BAA+B;IAC/B,iBAAiB;IACjB,gBAAgB;EAClB;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,yBAAyB;IACzB,YAAY;EACd;;EAEA,SAAS;EACT;IACE,mBAAmB;EACrB;;EAEA;IACE,qBAAqB;IACrB,eAAe;IACf,iBAAiB;EACnB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;IACjB,+BAA+B;EACjC;;EAEA,mBAAmB;EACnB;IACE,kBAAkB;EACpB;;EAEA,cAAc;EACd;IACE,UAAU;;IAEV,wBAAwB;IACxB,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,sBAAsB;EACxB;;AAEF;EACE,2BAA2B;EAC3B,uBAAuB;EACvB,YAAY;AACd;EACE;IACE,0BAA0B;EAC5B;;EAEA,WAAW;EACX;IACE,cAAc;IACd,sBAAsB;IACtB,kBAAkB;EACpB;EACA;IACE,cAAc;IACd,yBAAyB;IACzB,kBAAkB;IAClB,uBAAuB;EACzB;;EAEA;IACE,kBAAkB;IAClB,WAAW;EACb;;EAEA;IACE,cAAc;IACd,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;EACd;EACA;IACE,cAAc;IACd,mBAAmB;EACrB;;EAEA;IACE,cAAc;EAChB;;EAEA,cAAc;EACd;IACE,kBAAkB;IAClB,yBAAyB;IACzB,WAAW;IACX,yBAAyB;EAC3B;;EAEA;IACE,UAAU;IACV,YAAY;EACd;;EAEA;IACE,yBAAyB;IACzB,kBAAkB;EACpB;;EAEA;IACE,SAAS;IACT,sBAAsB;EACxB;;EAEA;IACE,eAAe;EACjB;;EAEA,UAAU;EACV;IACE,cAAc;IACd,kBAAkB;IAClB,yBAAyB;EAC3B;;EAEA;IACE,cAAc;IACd,yBAAyB;EAC3B;;EAEA;IACE,cAAc;IACd,yBAAyB;EAC3B;;;EAGA;IACE,cAAc;EAChB;;EAEA;IACE,yBAAyB;IACzB,kBAAkB;IAClB,eAAe;IACf,YAAY;EACd;;EAEA;IACE,+BAA+B;IAC/B,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA,SAAS;EACT;IACE,eAAe;IACf,kBAAkB;IAClB,yBAAyB;EAC3B;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE;MACE,kBAAkB;IACpB;IACA;MACE,aAAa;MACb,eAAe;IACjB;IACA;;OAEG;;;EAGL;;AAEF,QAAQ;;;AAGR;;;;;;GAMG;;AAEH;EACE,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,oBAAoB;AACtB,8CAA8C;AAC9C,sBAAsB;AACtB,iBAAiB;AACjB;;AAEA;;EAEE,YAAY;EACZ,aAAa;AACf;;;AAGA;EACE,iBAAiB;AACnB;AACA;EACE,UAAU;AACZ;;AAEA;;GAEG","sourcesContent":["p {\n    font-family: 'Ubuntu', sans-serif;\n    color: #8f8f8f;\n  }\n  \n  body {\n    font-family: \"Montserrat\";\n  }\n  \n  h1, h2, h3, h4, h5, h6 {\n    font-family: \"Montserrat-Bold\";\n  }\n  \n  h2 {\n    font-size: 3rem;\n    line-height: 1.5;\n  }\n  \n  h3 {\n    font-size: 1.5rem;\n  }\n  \n  /*Heading*/\n  .big-heading {\n    font-family: \"Montserrat-Black\";\n    font-size: 3.5rem;\n    line-height: 1.5;\n  }\n  \n  .container-fluid {\n    padding: 3% 15% 7%;\n  }\n  \n  #title {\n    background-color: #58D68D;\n    color: white;\n  }\n  \n  /*navbar*/\n  .navbar {\n    padding: 0 0 4.5rem;\n  }\n  \n  .navbar-brand {\n    font-family: \"Ubuntu\";\n    font-size: 2rem;\n    font-weight: bold;\n  }\n  \n  .nav-item {\n    padding: 0 18px;\n  }\n  \n  .nav-link {\n    font-size: 1.2rem;\n    font-family: \"Montserrat-light\";\n  }\n  \n  /*Downlowd buttons*/\n  .downlowd-button {\n    margin: 5% 3% 5% 0;\n  }\n  \n  /*Title image*/\n  .titleImage {\n    width: 10%;\n\n    transform: rotate(25deg);\n    position: absolute;\n    /* right: 30%; */\n    /* left: 20px; */\n    /* aspectRatio: 2.5; */\n  }\n\n.sectionimg{\n  /* transform-origin: 0 0; */\n  transition: all 1s ease;\n  width: 420px;\n}\n  .sectionimg:hover{\n    transform: scale(1.1, 1.1);\n  }\n  \n  /*features*/\n  .features {\n    padding: 7% 5%;\n    background-color: #fff;\n    position: relative;\n  }\n  .Mainsection{\n    padding: 7% 4%;\n    background-color: #d8e3e7;\n    position: relative;\n    justify-content: center; \n  }\n  \n  .feature-box {\n    text-align: center;\n    padding: 5%;\n  }\n  \n  .section-box {\n    margin: 1.93% ;\n    position: relative;\n    text-align: center;\n    color: white;\n  }\n  .icon {\n    color: #ef8172;\n    margin-bottom: 1rem;\n  }\n  \n  .icon:hover {\n    color: #ff4c68;\n  }\n  \n  /*Testmoniles*/\n  #testimonials {\n    text-align: center;\n    background-color: #ef8172;\n    color: #fff;\n    background-color: #126e82;\n  }\n  \n  .testimonials-img {\n    width: 10%;\n    margin: 20px;\n  }\n  \n  #press {\n    background-color: #126e82;\n    text-align: center;\n  }\n  \n  .press-logo {\n    width: 8%;\n    margin: 20px 20px 50px;\n  }\n  \n  .carousel-item {\n    padding: 7% 15%;\n  }\n  \n  /*pricing*/\n  #pricing {\n    padding: 100px;\n    text-align: center;\n    background-color: #51c4d3;\n  }\n\n  #ThingsToDo {\n    padding: 100px;\n    background-color: #d8e3e7;\n  }\n\n  #Upcoming {\n    padding: 100px;\n    background-color: #d8e3e7;\n  }\n  \n  \n  .pricing-column {\n    padding: 3% 2%;\n  }\n  \n  #cta {\n    background-color: #ff4c68;\n    text-align: center;\n    padding: 7% 15%;\n    color: white;\n  }\n  \n  .cta-heading {\n    font-family: \"Montserrat-Black\";\n    font-size: 3.5rem;\n    line-height: 1.5;\n    font-weight: bold;\n  }\n  \n  /*footer*/\n  #footer {\n    padding: 5% 15%;\n    text-align: center; \n    background-color: #132c33;\n  }\n  \n  .social-icon {\n    margin: 4px 10px;\n  }\n  \n  @media (max-width: 1128px)  {\n    #title {\n      text-align: center;\n    }\n    .Mainsection{\n      padding: 40px;\n      padding-left: 0;\n    }\n    /* .sectionimg{\n      width: 360px;\n    } */\n\n\n  }\n\n/* New */\n\n  \n/* @media screen and (max-width: 800){ \n.Mainsection{\n  padding: 40px;\n}\n\n\n} */\n\n.SectionImg{\n  position: relative;\n  text-align: center;\n  color: white;\n}\n.centeredText {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 1.5875rem;\nfont-family: NotoKufiArabic, Arial, sans-serif;\nline-height: 1.6875rem;\nletter-spacing: 0;\n}\n\n.TouriIcons\n{\n  width: 150px;\n  height: 180px;\n}\n\n\n.saudiflag{\n  margin-bottom: 4%;\n}\n.HomeCard{\n  margin: 2%;\n}\n\n/* .navbarSections{\n  color: white !important\n} */\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Styles/Places.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Styles/Places.css ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* To flex the cards with filters */\n.flexthem{\n    display: flex;\n    flex-direction: row;\n}\n\n/* CSS for the title of the filters box */\n.FilterTitle{\n    padding-left: 55px;\n    padding-top: 10px;\n    font-weight: bold;\n    \n}\n\n/* CSS for Filters (box) */\n.Filters{\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    margin-right: 60px;\n    margin-top: 60px;\n    grid-gap: 15px;\n    gap: 15px;\n    align-items:stretch;\n    background-color: #d8e3e7;\n    border: 10px solid #51c4d3;\n    max-width:200px;\n    min-width: 200px;\n    max-height: 400px;\n}\n\n/* CSS for the first checkbox */\n.Checkbox1{\n    background-color: seagreen;\n    margin-left: 103px;\n}\n\n/* CSS for the second checkbox */\n.Checkbox2{\n    margin-left: 116px;\n}\n\n/* CSS for the third checkbox */\n.Checkbox3{\n    margin-left: 75px;\n}\n\n/* CSS for the noPlaceFound functionallity */\n.noPlaceFound{\n    \n}\n\n/* CSS for the all check boxes labels */\n.Label1{\n    padding-left: 10px;\n}\n\n/* CSS for the all Label(title) of radioboxes */\n.Label2{\n    padding-left: 30px;\n    font-size: 18px;\n    font-weight: bold;\n}\n\n/* CSS for the all Labels of radioboxes */\n.Label3{\n    padding-left: 5px;\n}\n\n/* CSS for the radio box */\n.RadioBox{\n    margin-left: 15px;\n    margin-top: none;\n}\n\n/* CSS for the Gym checkbox at accomdations */\n.GymAcc{\n    margin-left: 113px;\n}\n\n/* CSS for the Wifi checkbox at accomdations */\n.WifiAcc{\n    margin-left: 117px;\n}\n\n/* CSS for the Breakfast checkbox at accomdations */\n.Breakf{\n    margin-left: 80px;\n}\n\n/* CSS for the children game center at malls */\n.GameMalls{\n    margin-left: 96px\n}\n\n/* CSS for the Wifi at malls */\n.WifiMalls{\n    margin-left: 116px\n}\n\n/* CSS for the Cinema at malls */\n.CinemaMalls{\n    margin-left: 90px;\n}\n\n/* CSS for the free type at tourisitcs */\n.FreeTour{\n    margin-left: 108px;\n}\n\n/* CSS for the Disabilities friendly type at tourisitcs */\n.DisabilityTour{\n    margin-left: 10px;\n}\n\n/* CSS for the Tour guide type at tourisitcs */\n.TourGuideTour{\n    margin-left: 61px;\n}\n\n/* CSS for the Gym type at extra page */\n.GymExtra{\n    margin-left: 112px;\n}\n\n/* CSS for the Rental car center type at extra page */\n.CarRentalExtra{\n    margin-left: 20px;\n}\n\n /* For tablet users */\n@media screen and (min-width: 701px) and (max-width: 1050px) {\n\n    .Filters{\n        margin-right: 5px;\n        grid-gap: 10px;\n        gap: 10px;\n        max-width: 180px;\n        min-width: 180px;\n        min-height: 350px;\n        max-height: 350px;\n    }\n    .FilterTitle{\n        padding-left: 45px;\n        padding-top: 5px;\n    }\n    .Checkbox1{\n        margin-left: 63px;\n    }\n    .Checkbox2{\n        margin-left: 76px;\n    }\n    .Checkbox3{\n        margin-left: 35px;\n    }\n    .Label1{\n        padding-left: 5px;\n    }\n    .Label2{\n        padding-left: 25px;\n    }\n    .Label3{\n        padding-left: 2px;\n    }\n    .RadioBox{\n        margin-left: 7px;\n    }\n    .GymAcc{\n        margin-left: 83px;\n    }\n    .WifiAcc{\n        margin-left: 87px;\n    }\n    .Breakf{\n        margin-left: 50px;\n    }\n    .GameMalls{\n        margin-left: 76px\n    } \n    .WifiMalls{\n        margin-left: 96px\n    }\n    .CinemaMalls{\n        margin-left: 70px;\n    }\n    .FreeTour{\n        margin-left: 108px;\n    }\n    .DisabilityTour{\n        margin-left: 10px;\n    }\n    .TourGuideTour{\n        margin-left: 61px;\n    }\n    .GymExtra{\n        margin-left: 107px;\n    }\n    .CarRentalExtra{\n        margin-left: 15px;\n    }\n}\n\n /* For mobile users  */\n@media screen and (max-width: 700px) {\n    .Filters{\n        margin-right: 2px;\n        grid-gap: 2px;\n        gap: 2px;\n        max-width: 110px;\n        min-width: 110px;\n        min-height: 300px;\n        max-height: 300px;\n        border: 5px solid #51c4d3;\n    }\n    .FilterTitle{\n        padding-left: 20px;\n        padding-top: 2px;\n        font-size: 16px;\n    }\n    .Checkbox1{\n        margin-left: 35px;\n    }\n    .Checkbox2{\n        margin-left: 45px;\n    }\n    .Checkbox3{\n        margin-left: 15px;\n    }\n    .Label1{\n        padding-left: 5px;\n        font-size: 12px;\n    }\n    .Label2{\n        padding-left:3px;\n        font-size: 14px;\n    }\n    .Label3{\n        padding-left: 2px;\n        font-size: 10px;\n    }\n    .RadioBox{\n        margin-left: 35px;\n        margin-top: 10px;\n    }\n    .GymAcc{\n        margin-left: 49px;\n    }\n    .WifiAcc{\n        margin-left: 52px;\n    }\n    .Breakf{\n        margin-left: 25px;\n    }\n    .GameMalls{\n        margin-left: 30px\n    } \n    .WifiMalls{\n        margin-left: 45px\n    }\n    .CinemaMalls{\n        margin-left: 25px;\n    }\n    .FreeTour{\n        margin-left: 49px;\n    }\n    .DisabilityTour{\n        margin-left: 29px;\n    }\n    .TourGuideTour{\n        margin-left: 13px;\n    }\n    .GymExtra{\n        margin-left: 13px;\n    }\n    .CarRentalExtra{\n        margin-left: 35px;\n    }\n}", "",{"version":3,"sources":["webpack://src/Styles/Places.css"],"names":[],"mappings":"AAAA,mCAAmC;AACnC;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA,yCAAyC;AACzC;IACI,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;;AAErB;;AAEA,0BAA0B;AAC1B;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,cAAS;IAAT,SAAS;IACT,mBAAmB;IACnB,yBAAyB;IACzB,0BAA0B;IAC1B,eAAe;IACf,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA,+BAA+B;AAC/B;IACI,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA,gCAAgC;AAChC;IACI,kBAAkB;AACtB;;AAEA,+BAA+B;AAC/B;IACI,iBAAiB;AACrB;;AAEA,4CAA4C;AAC5C;;AAEA;;AAEA,uCAAuC;AACvC;IACI,kBAAkB;AACtB;;AAEA,+CAA+C;AAC/C;IACI,kBAAkB;IAClB,eAAe;IACf,iBAAiB;AACrB;;AAEA,yCAAyC;AACzC;IACI,iBAAiB;AACrB;;AAEA,0BAA0B;AAC1B;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA,6CAA6C;AAC7C;IACI,kBAAkB;AACtB;;AAEA,8CAA8C;AAC9C;IACI,kBAAkB;AACtB;;AAEA,mDAAmD;AACnD;IACI,iBAAiB;AACrB;;AAEA,8CAA8C;AAC9C;IACI;AACJ;;AAEA,8BAA8B;AAC9B;IACI;AACJ;;AAEA,gCAAgC;AAChC;IACI,iBAAiB;AACrB;;AAEA,wCAAwC;AACxC;IACI,kBAAkB;AACtB;;AAEA,yDAAyD;AACzD;IACI,iBAAiB;AACrB;;AAEA,8CAA8C;AAC9C;IACI,iBAAiB;AACrB;;AAEA,uCAAuC;AACvC;IACI,kBAAkB;AACtB;;AAEA,qDAAqD;AACrD;IACI,iBAAiB;AACrB;;CAEC,qBAAqB;AACtB;;IAEI;QACI,iBAAiB;QACjB,cAAS;QAAT,SAAS;QACT,gBAAgB;QAChB,gBAAgB;QAChB,iBAAiB;QACjB,iBAAiB;IACrB;IACA;QACI,kBAAkB;QAClB,gBAAgB;IACpB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI;IACJ;IACA;QACI;IACJ;IACA;QACI,iBAAiB;IACrB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,iBAAiB;IACrB;AACJ;;CAEC,sBAAsB;AACvB;IACI;QACI,iBAAiB;QACjB,aAAQ;QAAR,QAAQ;QACR,gBAAgB;QAChB,gBAAgB;QAChB,iBAAiB;QACjB,iBAAiB;QACjB,yBAAyB;IAC7B;IACA;QACI,kBAAkB;QAClB,gBAAgB;QAChB,eAAe;IACnB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;QACjB,eAAe;IACnB;IACA;QACI,gBAAgB;QAChB,eAAe;IACnB;IACA;QACI,iBAAiB;QACjB,eAAe;IACnB;IACA;QACI,iBAAiB;QACjB,gBAAgB;IACpB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI;IACJ;IACA;QACI;IACJ;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;AACJ","sourcesContent":["/* To flex the cards with filters */\n.flexthem{\n    display: flex;\n    flex-direction: row;\n}\n\n/* CSS for the title of the filters box */\n.FilterTitle{\n    padding-left: 55px;\n    padding-top: 10px;\n    font-weight: bold;\n    \n}\n\n/* CSS for Filters (box) */\n.Filters{\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    margin-right: 60px;\n    margin-top: 60px;\n    gap: 15px;\n    align-items:stretch;\n    background-color: #d8e3e7;\n    border: 10px solid #51c4d3;\n    max-width:200px;\n    min-width: 200px;\n    max-height: 400px;\n}\n\n/* CSS for the first checkbox */\n.Checkbox1{\n    background-color: seagreen;\n    margin-left: 103px;\n}\n\n/* CSS for the second checkbox */\n.Checkbox2{\n    margin-left: 116px;\n}\n\n/* CSS for the third checkbox */\n.Checkbox3{\n    margin-left: 75px;\n}\n\n/* CSS for the noPlaceFound functionallity */\n.noPlaceFound{\n    \n}\n\n/* CSS for the all check boxes labels */\n.Label1{\n    padding-left: 10px;\n}\n\n/* CSS for the all Label(title) of radioboxes */\n.Label2{\n    padding-left: 30px;\n    font-size: 18px;\n    font-weight: bold;\n}\n\n/* CSS for the all Labels of radioboxes */\n.Label3{\n    padding-left: 5px;\n}\n\n/* CSS for the radio box */\n.RadioBox{\n    margin-left: 15px;\n    margin-top: none;\n}\n\n/* CSS for the Gym checkbox at accomdations */\n.GymAcc{\n    margin-left: 113px;\n}\n\n/* CSS for the Wifi checkbox at accomdations */\n.WifiAcc{\n    margin-left: 117px;\n}\n\n/* CSS for the Breakfast checkbox at accomdations */\n.Breakf{\n    margin-left: 80px;\n}\n\n/* CSS for the children game center at malls */\n.GameMalls{\n    margin-left: 96px\n}\n\n/* CSS for the Wifi at malls */\n.WifiMalls{\n    margin-left: 116px\n}\n\n/* CSS for the Cinema at malls */\n.CinemaMalls{\n    margin-left: 90px;\n}\n\n/* CSS for the free type at tourisitcs */\n.FreeTour{\n    margin-left: 108px;\n}\n\n/* CSS for the Disabilities friendly type at tourisitcs */\n.DisabilityTour{\n    margin-left: 10px;\n}\n\n/* CSS for the Tour guide type at tourisitcs */\n.TourGuideTour{\n    margin-left: 61px;\n}\n\n/* CSS for the Gym type at extra page */\n.GymExtra{\n    margin-left: 112px;\n}\n\n/* CSS for the Rental car center type at extra page */\n.CarRentalExtra{\n    margin-left: 20px;\n}\n\n /* For tablet users */\n@media screen and (min-width: 701px) and (max-width: 1050px) {\n\n    .Filters{\n        margin-right: 5px;\n        gap: 10px;\n        max-width: 180px;\n        min-width: 180px;\n        min-height: 350px;\n        max-height: 350px;\n    }\n    .FilterTitle{\n        padding-left: 45px;\n        padding-top: 5px;\n    }\n    .Checkbox1{\n        margin-left: 63px;\n    }\n    .Checkbox2{\n        margin-left: 76px;\n    }\n    .Checkbox3{\n        margin-left: 35px;\n    }\n    .Label1{\n        padding-left: 5px;\n    }\n    .Label2{\n        padding-left: 25px;\n    }\n    .Label3{\n        padding-left: 2px;\n    }\n    .RadioBox{\n        margin-left: 7px;\n    }\n    .GymAcc{\n        margin-left: 83px;\n    }\n    .WifiAcc{\n        margin-left: 87px;\n    }\n    .Breakf{\n        margin-left: 50px;\n    }\n    .GameMalls{\n        margin-left: 76px\n    } \n    .WifiMalls{\n        margin-left: 96px\n    }\n    .CinemaMalls{\n        margin-left: 70px;\n    }\n    .FreeTour{\n        margin-left: 108px;\n    }\n    .DisabilityTour{\n        margin-left: 10px;\n    }\n    .TourGuideTour{\n        margin-left: 61px;\n    }\n    .GymExtra{\n        margin-left: 107px;\n    }\n    .CarRentalExtra{\n        margin-left: 15px;\n    }\n}\n\n /* For mobile users  */\n@media screen and (max-width: 700px) {\n    .Filters{\n        margin-right: 2px;\n        gap: 2px;\n        max-width: 110px;\n        min-width: 110px;\n        min-height: 300px;\n        max-height: 300px;\n        border: 5px solid #51c4d3;\n    }\n    .FilterTitle{\n        padding-left: 20px;\n        padding-top: 2px;\n        font-size: 16px;\n    }\n    .Checkbox1{\n        margin-left: 35px;\n    }\n    .Checkbox2{\n        margin-left: 45px;\n    }\n    .Checkbox3{\n        margin-left: 15px;\n    }\n    .Label1{\n        padding-left: 5px;\n        font-size: 12px;\n    }\n    .Label2{\n        padding-left:3px;\n        font-size: 14px;\n    }\n    .Label3{\n        padding-left: 2px;\n        font-size: 10px;\n    }\n    .RadioBox{\n        margin-left: 35px;\n        margin-top: 10px;\n    }\n    .GymAcc{\n        margin-left: 49px;\n    }\n    .WifiAcc{\n        margin-left: 52px;\n    }\n    .Breakf{\n        margin-left: 25px;\n    }\n    .GameMalls{\n        margin-left: 30px\n    } \n    .WifiMalls{\n        margin-left: 45px\n    }\n    .CinemaMalls{\n        margin-left: 25px;\n    }\n    .FreeTour{\n        margin-left: 49px;\n    }\n    .DisabilityTour{\n        margin-left: 29px;\n    }\n    .TourGuideTour{\n        margin-left: 13px;\n    }\n    .GymExtra{\n        margin-left: 13px;\n    }\n    .CarRentalExtra{\n        margin-left: 35px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Styles/styles.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/Styles/styles.css ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_Card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./Card.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Styles/Card.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_Home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./Home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Styles/Home.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_Places_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./Places.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Styles/Places.css");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_Card_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_Home_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_4_1_node_modules_postcss_loader_src_index_js_postcss_Places_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body  {\n    /* font-family: sans-serif;\n    margin: 0 auto;\n    padding: 25px;\n    max-width: 400px;\n    min-width: 400px; */\n    background-color: #effffb ;\n    /* text-align: center; */\n  }\n\n\n.or-container {\n  align-items: center;\n  color: #ccc;\n  display: flex;\n  margin: 25px 0\n}\n\n.line-separator {\n  background-color: #ccc;\n  flex-grow: 5;\n  height: 1px\n}\n\n.or-label {\n  flex-grow: 1;\n  margin: 0 15px;\n  text-align: center\n}\n\n\n.redirectlink {\n  display: flex;\n  justify-content: center;\n  margin: 20px 0;\n}\n\n.googlebutton{\n  width: 800px;\n  margin: 0 auto;\n\n}\n\n.Imageprofile{\n   margin-top: 20px;\n   border-radius: 20%;\n   width: 75px ;\n   height: 75px;\n   border: 3px;\n}\n\n.Imageprofilenav{\n  margin-left: 10px;\n  border-radius: 50%;\n    width: 50px ;\n    height: 50px;\n  border: 3px;\n}\n\n.profileName{\n  margin: 1% 1%;\n}\n\n.UserEmail{\n}\n\n.UserName{\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 20px;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n\n}\n.profile{\n  background-color: #D8E3E7;\n}\n.UserInfoBlock{\n  background-color: #126E82;\n  margin-left: 0px !important;\n  padding-bottom: 15px;\n  border-radius: 20px;\n  margin-bottom: 20px;\n  position: relative;\n  top: 15px;\n  color: white;\n}\n\n.editicon{\n  position: relative;\n  top: 20px;\nright: 19px;\n  cursor: pointer;\n}\n.editicon :hover{\n  color: #132C33\n}\n\n.PrfoileInfo{\n  margin-top: 10px;\nmargin-left: 20px;\nwidth: 230px;\nheight: 0%;\n}\n\n.ProfileFav{\n  margin-top: 10px;\n\n  margin-left: 120px;\n  border: 1px solid;\n}\n\n.coverimage{\n  display: block;\n \nwidth: 86.7vw;\nheight: 30vw;\n  object-fit: conver;\n}\n\n.profileCard{\n  margin: 20px 20px;\n}\n\n.reviewimg{\n  top: 7px;\n  right: 2px;\n  border-width:  0;\n  grid-area: img;\n  position: relative;\n  margin-right:  5px ;\n  border: 5px solid #fff;\n  height: 170px;\n  width: 170px;\n  border-radius: 25px;\n  width: 75px;\n  height: 75px;\n\n}\n\n.reviewStar{\n  position: relative;\n  left: 80px;\n  bottom: 25px;\n\n}\n\n\n.ReviewPlace{\n\n}\n\n.ReviewCard{\n  margin: 0;\n}\n.ReviewHeader{\n  margin: 0;\n  padding: 0 20px;\n  height: 90px;\n}\n\n.CardBody{\n  margin: 0;\n  /* height: 136px; */\n  width: 500px;\n}\n\n@media screen and (max-width:600px) {\n  .profileName{\n       margin: 18px 10px;\n      right: 85px;\n  }\n  .ReviewCard{\n    margin: 0;\n    border-radius: 10px;\n\n  }\n  .CardBody{\n    overflow: auto;\n    width: initial;\n  }\n  \n  .PrfoileInfo{\n    margin: 40px 0 ;\n    width: 340px;\n    margin-left: 35px;\n  }\n\n  .profileCard{\n    width: 330px;\n    margin: 20px 2px;\n  }\n  .ProfileFav{\n    margin: 0;\n    margin-left: 35px;\n    \n  }\n  .Imageprofile{\n    width: 75px;\n    height: 75px;\n    margin-top: 20px;\n  }\n  .reviewimg{\n    width: 75px;\n    height: 75px;\n  }\n  .profileName{\n    left: 94px;\n    bottom: 66px;\n    margin: 0;\n    margin-left: 10px;\n    right: 0;\n\n  }\n  .container{\n    padding: 0;\n  }\n  .editicon{\n    width: 32px;\n    height: 32px;\n    top: -89px; \n    right: 10px;   \n  }\n  .UserName{\n    margin-top: 0 ;\n    margin-bottom: 2px;\n  }\n  .UserInfoBlock{\n    height: 110px;\n  }\n  .UserEmail{\n    font-size: 14px;\n  }\n}\n\n@media screen and (min-width:500px) and (max-width: 1100px) {\n  .profileName{\n       margin: 2% ;\n      right: 85px;\n  }\n  .ReviewCard{\n    margin: 0;\n    border-radius: 10px;\n  }\n  .CardBody{\n    overflow: auto;\n    width: initial;\n  }\n  \n}\n\n\n", "",{"version":3,"sources":["webpack://src/Styles/styles.css"],"names":[],"mappings":"AAMA;IACI;;;;uBAImB;IACnB,0BAA0B;IAC1B,wBAAwB;EAC1B;;;AAGF;EACE,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb;AACF;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ;AACF;;AAEA;EACE,YAAY;EACZ,cAAc;EACd;AACF;;;AAGA;EACE,aAAa;EACb,uBAAuB;EACvB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,cAAc;;AAEhB;;AAEA;GACG,gBAAgB;GAChB,kBAAkB;GAClB,YAAY;GACZ,YAAY;GACZ,WAAW;AACd;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;IAChB,YAAY;IACZ,YAAY;EACd,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;AACA;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;EACf,wEAAwE;;AAE1E;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;EACzB,2BAA2B;EAC3B,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,SAAS;EACT,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,SAAS;AACX,WAAW;EACT,eAAe;AACjB;AACA;EACE;AACF;;AAEA;EACE,gBAAgB;AAClB,iBAAiB;AACjB,YAAY;AACZ,UAAU;AACV;;AAEA;EACE,gBAAgB;;EAEhB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,cAAc;;AAEhB,aAAa;AACb,YAAY;EACV,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,QAAQ;EACR,UAAU;EACV,gBAAgB;EAChB,cAAc;EACd,kBAAkB;EAClB,mBAAmB;EACnB,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,YAAY;;AAEd;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;;AAEd;;;AAGA;;AAEA;;AAEA;EACE,SAAS;AACX;AACA;EACE,SAAS;EACT,eAAe;EACf,YAAY;AACd;;AAEA;EACE,SAAS;EACT,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE;OACK,iBAAiB;MAClB,WAAW;EACf;EACA;IACE,SAAS;IACT,mBAAmB;;EAErB;EACA;IACE,cAAc;IACd,cAAc;EAChB;;EAEA;IACE,eAAe;IACf,YAAY;IACZ,iBAAiB;EACnB;;EAEA;IACE,YAAY;IACZ,gBAAgB;EAClB;EACA;IACE,SAAS;IACT,iBAAiB;;EAEnB;EACA;IACE,WAAW;IACX,YAAY;IACZ,gBAAgB;EAClB;EACA;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,UAAU;IACV,YAAY;IACZ,SAAS;IACT,iBAAiB;IACjB,QAAQ;;EAEV;EACA;IACE,UAAU;EACZ;EACA;IACE,WAAW;IACX,YAAY;IACZ,UAAU;IACV,WAAW;EACb;EACA;IACE,cAAc;IACd,kBAAkB;EACpB;EACA;IACE,aAAa;EACf;EACA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;OACK,WAAW;MACZ,WAAW;EACf;EACA;IACE,SAAS;IACT,mBAAmB;EACrB;EACA;IACE,cAAc;IACd,cAAc;EAChB;;AAEF","sourcesContent":["@import \"./Card.css\";\n@import \"./Home.css\";\n@import \"./Places.css\";\n\n\n\nbody  {\n    /* font-family: sans-serif;\n    margin: 0 auto;\n    padding: 25px;\n    max-width: 400px;\n    min-width: 400px; */\n    background-color: #effffb ;\n    /* text-align: center; */\n  }\n\n\n.or-container {\n  align-items: center;\n  color: #ccc;\n  display: flex;\n  margin: 25px 0\n}\n\n.line-separator {\n  background-color: #ccc;\n  flex-grow: 5;\n  height: 1px\n}\n\n.or-label {\n  flex-grow: 1;\n  margin: 0 15px;\n  text-align: center\n}\n\n\n.redirectlink {\n  display: flex;\n  justify-content: center;\n  margin: 20px 0;\n}\n\n.googlebutton{\n  width: 800px;\n  margin: 0 auto;\n\n}\n\n.Imageprofile{\n   margin-top: 20px;\n   border-radius: 20%;\n   width: 75px ;\n   height: 75px;\n   border: 3px;\n}\n\n.Imageprofilenav{\n  margin-left: 10px;\n  border-radius: 50%;\n    width: 50px ;\n    height: 50px;\n  border: 3px;\n}\n\n.profileName{\n  margin: 1% 1%;\n}\n\n.UserEmail{\n}\n\n.UserName{\n  margin-top: 20px;\n  margin-bottom: 10px;\n  font-size: 20px;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n\n}\n.profile{\n  background-color: #D8E3E7;\n}\n.UserInfoBlock{\n  background-color: #126E82;\n  margin-left: 0px !important;\n  padding-bottom: 15px;\n  border-radius: 20px;\n  margin-bottom: 20px;\n  position: relative;\n  top: 15px;\n  color: white;\n}\n\n.editicon{\n  position: relative;\n  top: 20px;\nright: 19px;\n  cursor: pointer;\n}\n.editicon :hover{\n  color: #132C33\n}\n\n.PrfoileInfo{\n  margin-top: 10px;\nmargin-left: 20px;\nwidth: 230px;\nheight: 0%;\n}\n\n.ProfileFav{\n  margin-top: 10px;\n\n  margin-left: 120px;\n  border: 1px solid;\n}\n\n.coverimage{\n  display: block;\n \nwidth: 86.7vw;\nheight: 30vw;\n  object-fit: conver;\n}\n\n.profileCard{\n  margin: 20px 20px;\n}\n\n.reviewimg{\n  top: 7px;\n  right: 2px;\n  border-width:  0;\n  grid-area: img;\n  position: relative;\n  margin-right:  5px ;\n  border: 5px solid #fff;\n  height: 170px;\n  width: 170px;\n  border-radius: 25px;\n  width: 75px;\n  height: 75px;\n\n}\n\n.reviewStar{\n  position: relative;\n  left: 80px;\n  bottom: 25px;\n\n}\n\n\n.ReviewPlace{\n\n}\n\n.ReviewCard{\n  margin: 0;\n}\n.ReviewHeader{\n  margin: 0;\n  padding: 0 20px;\n  height: 90px;\n}\n\n.CardBody{\n  margin: 0;\n  /* height: 136px; */\n  width: 500px;\n}\n\n@media screen and (max-width:600px) {\n  .profileName{\n       margin: 18px 10px;\n      right: 85px;\n  }\n  .ReviewCard{\n    margin: 0;\n    border-radius: 10px;\n\n  }\n  .CardBody{\n    overflow: auto;\n    width: initial;\n  }\n  \n  .PrfoileInfo{\n    margin: 40px 0 ;\n    width: 340px;\n    margin-left: 35px;\n  }\n\n  .profileCard{\n    width: 330px;\n    margin: 20px 2px;\n  }\n  .ProfileFav{\n    margin: 0;\n    margin-left: 35px;\n    \n  }\n  .Imageprofile{\n    width: 75px;\n    height: 75px;\n    margin-top: 20px;\n  }\n  .reviewimg{\n    width: 75px;\n    height: 75px;\n  }\n  .profileName{\n    left: 94px;\n    bottom: 66px;\n    margin: 0;\n    margin-left: 10px;\n    right: 0;\n\n  }\n  .container{\n    padding: 0;\n  }\n  .editicon{\n    width: 32px;\n    height: 32px;\n    top: -89px; \n    right: 10px;   \n  }\n  .UserName{\n    margin-top: 0 ;\n    margin-bottom: 2px;\n  }\n  .UserInfoBlock{\n    height: 110px;\n  }\n  .UserEmail{\n    font-size: 14px;\n  }\n}\n\n@media screen and (min-width:500px) and (max-width: 1100px) {\n  .profileName{\n       margin: 2% ;\n      right: 85px;\n  }\n  .ReviewCard{\n    margin: 0;\n    border-radius: 10px;\n  }\n  .CardBody{\n    overflow: auto;\n    width: initial;\n  }\n  \n}\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/Styles/styles.css":
/*!*******************************!*\
  !*** ./src/Styles/styles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Styles/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Styles/styles.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/Styles/styles.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/App.jsx":
/*!********************************!*\
  !*** ./src/components/App.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_google_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-button */ "./node_modules/react-google-button/es/index.js");
/* harmony import */ var react_google_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Styles_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Styles/styles.css */ "./src/Styles/styles.css");
/* harmony import */ var _Styles_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Styles_styles_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-alert */ "./node_modules/react-alert/dist/esm/react-alert.js");
/* harmony import */ var _routes_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/navbar.component */ "./src/components/routes/navbar.component.js");
/* harmony import */ var _routes_Login_User_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/Login-User.component */ "./src/components/routes/Login-User.component.js");
/* harmony import */ var _routes_Register_User_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/Register-User.component */ "./src/components/routes/Register-User.component.js");
/* harmony import */ var _routes_Login_Admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/Login-Admin.component */ "./src/components/routes/Login-Admin.component.js");
/* harmony import */ var _routes_Register_Admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes/Register-Admin.component */ "./src/components/routes/Register-Admin.component.js");
/* harmony import */ var _routes_Sections_Resturants_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes/Sections/Resturants.component */ "./src/components/routes/Sections/Resturants.component.js");
/* harmony import */ var _routes_Sections_Accommodations_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routes/Sections/Accommodations.component */ "./src/components/routes/Sections/Accommodations.component.js");
/* harmony import */ var _routes_Sections_Malls_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routes/Sections/Malls.component */ "./src/components/routes/Sections/Malls.component.js");
/* harmony import */ var _routes_Sections_Touristic_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routes/Sections/Touristic .component */ "./src/components/routes/Sections/Touristic .component.js");
/* harmony import */ var _routes_Sections_ExtraServcis_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./routes/Sections/ExtraServcis.component */ "./src/components/routes/Sections/ExtraServcis.component.js");
/* harmony import */ var _routes_Home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./routes/Home.component */ "./src/components/routes/Home.component.js");
/* harmony import */ var _routes_Search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./routes/Search.component */ "./src/components/routes/Search.component.js");
/* harmony import */ var _routes_Profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./routes/Profile.component */ "./src/components/routes/Profile.component.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/Mohammed/Desktop/TouriStation/clinet/src/components/App.jsx";






 //Import reuired Routers









 // import Resturants from "./routes/Sections/Events.component";







function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(_routes_navbar_component__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/",
      exact: true,
      component: _routes_Home_component__WEBPACK_IMPORTED_MODULE_17__["default"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/profile",
      exact: true,
      component: _routes_Profile_component__WEBPACK_IMPORTED_MODULE_19__["default"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/login",
        exact: true,
        component: _routes_Login_User_component__WEBPACK_IMPORTED_MODULE_8__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/register",
        exact: true,
        component: _routes_Register_User_component__WEBPACK_IMPORTED_MODULE_9__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/Admin/LoginControl",
        exact: true,
        component: _routes_Login_Admin_component__WEBPACK_IMPORTED_MODULE_10__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/Admin/RegisterControl",
        exact: true,
        component: _routes_Register_Admin_component__WEBPACK_IMPORTED_MODULE_11__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/Search/:place",
        exact: true,
        component: _routes_Search_component__WEBPACK_IMPORTED_MODULE_18__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/resturants",
        exact: true,
        component: _routes_Sections_Resturants_component__WEBPACK_IMPORTED_MODULE_12__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 6
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/accommodations",
        exact: true,
        component: _routes_Sections_Accommodations_component__WEBPACK_IMPORTED_MODULE_13__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/malls",
        exact: true,
        component: _routes_Sections_Malls_component__WEBPACK_IMPORTED_MODULE_14__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/touristic",
        exact: true,
        component: _routes_Sections_Touristic_component__WEBPACK_IMPORTED_MODULE_15__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_20__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/extraservices",
        exact: true,
        component: _routes_Sections_ExtraServcis_component__WEBPACK_IMPORTED_MODULE_16__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Avatar.jsx":
/*!***********************************!*\
  !*** ./src/components/Avatar.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/Mohammed/Desktop/TouriStation/clinet/src/components/Avatar.jsx";



function Avatar(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
    src: `http://localhost:3000/${props.img}`,
    alt: "avatar_img"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, this);
}

_c = Avatar;
/* harmony default export */ __webpack_exports__["default"] = (Avatar);

var _c;

__webpack_require__.$Refresh$.register(_c, "Avatar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Card.jsx":
/*!*********************************!*\
  !*** ./src/components/Card.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Avatar */ "./src/components/Avatar.jsx");
/* harmony import */ var _Detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Detail */ "./src/components/Detail.jsx");
/* harmony import */ var _Star_rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Star-rating */ "./src/components/Star-rating.jsx");
/* harmony import */ var _Favorite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Favorite */ "./src/components/Favorite.jsx");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/Mohammed/Desktop/TouriStation/clinet/src/components/Card.jsx";








function Cards(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    className: "cards",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Avatar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      img: props.img
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      className: "flexCal",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "flexRow",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "flexname",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h2", {
            className: "name",
            children: props.placeName
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "ratingPadd",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Star_rating__WEBPACK_IMPORTED_MODULE_3__["default"], {
              value: props.stars,
              className: "star"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "flexfav",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h3", {
            className: "status",
            children: props.status
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Favorite__WEBPACK_IMPORTED_MODULE_4__["default"], {
            placeId: props.theCardId,
            placeName: props.placeName,
            className: "favorite"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "flexTypes",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h4", {
          className: "Type3",
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {
            children: props.partition
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 34
          }, this), " | ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {
            children: props.music
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 67
          }, this), " | ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("span", {
            children: props.wifi
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 96
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Detail__WEBPACK_IMPORTED_MODULE_2__["default"], {
          detailInfo: props.descreption
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

_c = Cards;
/* harmony default export */ __webpack_exports__["default"] = (Cards);

var _c;

__webpack_require__.$Refresh$.register(_c, "Cards");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Detail.jsx":
/*!***********************************!*\
  !*** ./src/components/Detail.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/Mohammed/Desktop/TouriStation/clinet/src/components/Detail.jsx";



function Detail(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
    className: "info",
    children: props.detailInfo
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, this);
}

_c = Detail;
/* harmony default export */ __webpack_exports__["default"] = (Detail);

var _c;

__webpack_require__.$Refresh$.register(_c, "Detail");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Favorite.jsx":
/*!*************************************!*\
  !*** ./src/components/Favorite.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Favorite; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/Mohammed/Desktop/TouriStation/clinet/src/components/Favorite.jsx";



const gray = 'gray';
const red = 'red';
class Favorite extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      color: gray
    };
    this.changeColor = this.changeColor.bind(this);
  }

  checkloginstatus() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("http://localhost:3000/IsLoged", {
      withCredentials: true
    }).then(res => {
      if (res.data === false) {
        alert("You must login to like your favorite palces");
      }

      return res.data.match;
    });
  }

  isLiked() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`http://localhost:3000/favorites/Isfavorite/${this.props.placeId}`, {
      withCredentials: true
    }).then(result => {
      // console.log(result);
      if (result.data == true) {
        this.setState({
          color: red
        });
      }
    });
  }

  componentDidMount() {
    this.isLiked();
  }

  changeColor(e) {
    this.checkloginstatus();
    e.preventDefault(); // console.log(this.props.placeName);

    let user;

    if (this.props.placeName == undefined) {
      user = {
        Event: this.props.eventId // this.props.eventId

      };
    } else {
      user = {
        Place: this.props.placeId //this.props.placeId

      };
    }

    if (this.state.color == gray) {
      this.setState({
        color: red
      }); // console.log(user);

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:3000/favorites/add', user, {
        withCredentials: true
      }).then(result => {
        console.log(result.data);
      }).catch(err => {
        // alert(err.response.data.message)
        console.log(err);
      });
    } else {
      this.setState({
        color: gray
      });
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete('http://localhost:3000/favorites/6037a6e2610adf081759ad82').then(res => {
        console.log(res);
      }).catch(err => {
        // alert(err.response.data.message)
        console.log(err);
      });
    } // this.setState({ color: newColor })


    console.log(this.props.placeId);
    console.log(this.props.placeName); // make post request axios 
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
      className: "favorite fa fa-heart",
      onClick: this.changeColor,
      style: {
        color: this.state.color
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, this);
  }

}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Review-Card.jsx":
/*!****************************************!*\
  !*** ./src/components/Review-Card.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Avatar */ "./src/components/Avatar.jsx");
/* harmony import */ var _Detail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Detail */ "./src/components/Detail.jsx");
/* harmony import */ var _Star_rating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Star-rating */ "./src/components/Star-rating.jsx");
/* harmony import */ var _Favorite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Favorite */ "./src/components/Favorite.jsx");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/Mohammed/Desktop/TouriStation/clinet/src/components/Review-Card.jsx";








function Reviewcard(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    className: "profileCard",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
      className: "ReviewCard",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Card"].Header, {
        as: "h5",
        className: "ReviewHeader",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("img", {
          className: "reviewimg",
          src: `http://localhost:3000/${props.SiteIcon}`,
          onClick: event => window.location = `/edit/${props.SiteID}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 15
        }, this), props.SiteName, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "reviewStar",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_Star_rating__WEBPACK_IMPORTED_MODULE_3__["default"], {
            value: props.Rate,
            size: 20
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Card"].Body, {
        className: "CardBody",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Card"].Title, {
          children: props.Author
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Card"].Text, {
          children: props.Comment
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 8
  }, this);
}

_c = Reviewcard;
/* harmony default export */ __webpack_exports__["default"] = (Reviewcard);

var _c;

__webpack_require__.$Refresh$.register(_c, "Reviewcard");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Star-rating.jsx":
/*!****************************************!*\
  !*** ./src/components/Star-rating.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_rating_stars_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rating-stars-component */ "./node_modules/react-rating-stars-component/dist/react-stars.js");
/* harmony import */ var react_rating_stars_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_rating_stars_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/Mohammed/Desktop/TouriStation/clinet/src/components/Star-rating.jsx";




function ReadStars(props) {
  // To check the screen width and make the star size fit for it 
  let size1;

  if (window.innerWidth >= 701 && window.innerWidth <= 1050) {
    size1 = 25;
  } else {
    if (window.innerWidth <= 700) {
      size1 = 15;
    } else {
      size1 = 30;
    }
  } // console.log(size1);


  return (
    /*#__PURE__*/
    // all these attributes are set by the author of the package
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_rating_stars_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
      value: props.value,
      count: 5,
      size: size1,
      edit: false,
      isHalf: true,
      activeColor: "#ffea00"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, this)
  );
}

_c = ReadStars;
/* harmony default export */ __webpack_exports__["default"] = (ReadStars);

var _c;

__webpack_require__.$Refresh$.register(_c, "ReadStars");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/images/366678.svg":
/*!******************************************!*\
  !*** ./src/components/images/366678.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/366678.d505ccac.svg");

/***/ }),

/***/ "./src/components/images/369746.svg":
/*!******************************************!*\
  !*** ./src/components/images/369746.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/369746.313adb51.svg");

/***/ }),

/***/ "./src/components/images/Accomdationimage.jpeg":
/*!*****************************************************!*\
  !*** ./src/components/images/Accomdationimage.jpeg ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Accomdationimage.517f989c.jpeg");

/***/ }),

/***/ "./src/components/images/Events.jpeg":
/*!*******************************************!*\
  !*** ./src/components/images/Events.jpeg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Events.bfb9e54d.jpeg");

/***/ }),

/***/ "./src/components/images/Extra.jpeg":
/*!******************************************!*\
  !*** ./src/components/images/Extra.jpeg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Extra.aa1994b1.jpeg");

/***/ }),

/***/ "./src/components/images/Hestoric.jpeg":
/*!*********************************************!*\
  !*** ./src/components/images/Hestoric.jpeg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,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");

/***/ }),

/***/ "./src/components/images/KingFaisle.jpeg":
/*!***********************************************!*\
  !*** ./src/components/images/KingFaisle.jpeg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,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");

/***/ }),

/***/ "./src/components/images/KingKhaled.jpeg":
/*!***********************************************!*\
  !*** ./src/components/images/KingKhaled.jpeg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,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");

/***/ }),

/***/ "./src/components/images/Malls.jpeg":
/*!******************************************!*\
  !*** ./src/components/images/Malls.jpeg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Malls.c5652416.jpeg");

/***/ }),

/***/ "./src/components/images/MohammedBinSalman.jpeg":
/*!******************************************************!*\
  !*** ./src/components/images/MohammedBinSalman.jpeg ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/MohammedBinSalman.0bf3c18b.jpeg");

/***/ }),

/***/ "./src/components/images/SaudiFlagIcon.png":
/*!*************************************************!*\
  !*** ./src/components/images/SaudiFlagIcon.png ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/SaudiFlagIcon.596bf0de.png");

/***/ }),

/***/ "./src/components/images/Vision.svg":
/*!******************************************!*\
  !*** ./src/components/images/Vision.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/Vision.de29262d.svg");

/***/ }),

/***/ "./src/components/images/noun_kaaba direction_3777436.svg":
/*!****************************************************************!*\
  !*** ./src/components/images/noun_kaaba direction_3777436.svg ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/noun_kaaba direction_3777436.7ea55d41.svg");

/***/ }),

/***/ "./src/components/images/noun_kingdom centre_2875325.svg":
/*!***************************************************************!*\
  !*** ./src/components/images/noun_kingdom centre_2875325.svg ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/noun_kingdom centre_2875325.00a9a0fd.svg");

/***/ }),

/***/ "./src/components/images/resturants&caffes.jpeg":
/*!******************************************************!*\
  !*** ./src/components/images/resturants&caffes.jpeg ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/resturants&caffes.9fb69a39.jpeg");

/***/ }),

/***/ "./src/components/routes/Home.component.js":
/*!*************************************************!*\
  !*** ./src/components/routes/Home.component.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegisterUsers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ "./src/components/App.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-alert */ "./node_modules/react-alert/dist/esm/react-alert.js");
/* harmony import */ var react_google_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-google-button */ "./node_modules/react-google-button/es/index.js");
/* harmony import */ var react_google_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_google_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_rating_stars_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-rating-stars-component */ "./node_modules/react-rating-stars-component/dist/react-stars.js");
/* harmony import */ var react_rating_stars_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_rating_stars_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Card */ "./src/components/Card.jsx");
/* harmony import */ var _Review_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Review-Card */ "./src/components/Review-Card.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _riyadhhome_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./riyadhhome.jpg */ "./src/components/routes/riyadhhome.jpg");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _images_noun_kingdom_centre_2875325_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../images/noun_kingdom centre_2875325.svg */ "./src/components/images/noun_kingdom centre_2875325.svg");
/* harmony import */ var _images_noun_kaaba_direction_3777436_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../images/noun_kaaba direction_3777436.svg */ "./src/components/images/noun_kaaba direction_3777436.svg");
/* harmony import */ var _images_SaudiFlagIcon_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../images/SaudiFlagIcon.png */ "./src/components/images/SaudiFlagIcon.png");
/* harmony import */ var _images_MohammedBinSalman_jpeg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../images/MohammedBinSalman.jpeg */ "./src/components/images/MohammedBinSalman.jpeg");
/* harmony import */ var _images_KingFaisle_jpeg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../images/KingFaisle.jpeg */ "./src/components/images/KingFaisle.jpeg");
/* harmony import */ var _images_KingKhaled_jpeg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../images/KingKhaled.jpeg */ "./src/components/images/KingKhaled.jpeg");
/* harmony import */ var _images_366678_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../images/366678.svg */ "./src/components/images/366678.svg");
/* harmony import */ var _images_369746_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../images/369746.svg */ "./src/components/images/369746.svg");
/* harmony import */ var _images_Vision_svg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../images/Vision.svg */ "./src/components/images/Vision.svg");
/* harmony import */ var _images_resturants_caffes_jpeg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../images/resturants&caffes.jpeg */ "./src/components/images/resturants&caffes.jpeg");
/* harmony import */ var _images_Events_jpeg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../images/Events.jpeg */ "./src/components/images/Events.jpeg");
/* harmony import */ var _images_Accomdationimage_jpeg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../images/Accomdationimage.jpeg */ "./src/components/images/Accomdationimage.jpeg");
/* harmony import */ var _images_Hestoric_jpeg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../images/Hestoric.jpeg */ "./src/components/images/Hestoric.jpeg");
/* harmony import */ var _images_Extra_jpeg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../images/Extra.jpeg */ "./src/components/images/Extra.jpeg");
/* harmony import */ var _images_Malls_jpeg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../images/Malls.jpeg */ "./src/components/images/Malls.jpeg");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _Star_rating__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../Star-rating */ "./src/components/Star-rating.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/Mohammed/Desktop/TouriStation/clinet/src/components/routes/Home.component.js";



































const HtmlToReactParser = __webpack_require__(/*! html-to-react */ "./node_modules/html-to-react/index.js").Parser; //Used dor cousal show cards


const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 4,
    slidesToSlide: 3 // optional, default to 1.

  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 3,
    slidesToSlide: 2 // optional, default to 1.

  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.

  }
}; //Things To do create card

function createEventCardThings(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
    class: "HomeCard",
    onClick: event => window.location = `/Events/${props._id}`,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
      class: "card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("img", {
        class: "img-fluid",
        alt: "100%x280",
        src: `http://localhost:3000/${props.icon}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 15
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
        class: "card-body",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("h4", {
          class: "card-title",
          children: props.Name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("p", {
          class: "card-text",
          children: props.Description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("p", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])(_Star_rating__WEBPACK_IMPORTED_MODULE_32__["default"], {
            value: 3,
            size: 25
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 18
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("p", {
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("span", {
            style: {
              "color": "green"
            },
            children: " Strat Date: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 19
          }, this), "August 12, 2020"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("p", {
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("span", {
            style: {
              "color": "red"
            },
            children: " End Date: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 19
          }, this), "April 29, 2021"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 15
        }, this), "            "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 71,
    columnNumber: 7
  }, this);
} //Updoming section cards


function createEventCardUpdoming(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
    class: "HomeCard",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
      class: "card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("img", {
        class: "img-fluid",
        alt: "100%x280",
        src: `http://localhost:3000/${props.icon}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 15
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
        class: "card-body",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("h4", {
          class: "card-title",
          children: props.Name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("p", {
          class: "card-text",
          children: props.Description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("p", {
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("span", {
            style: {
              "color": "#A9CCE3"
            },
            children: " Provided By: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 19
          }, this), "Entinrtnaiment company"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("p", {
          children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("span", {
            style: {
              "color": "green"
            },
            children: " Strating Date: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 19
          }, this), "August 12, 2020"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
          className: "form-group",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("input", {
            type: "Button",
            value: "Event Page",
            className: "btn btn-primary"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 7
  }, this);
} // function getvalues(e){
//   let  now = new Date();
//   for (let i = 0; i < e.length; i++) {
//     const element = e[i];
//     if (element.STime < now) {
//       console.log("element")
//     }
//   }
// }


const ReviewCards = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("p", {
  children: props.review.FavoritePlace
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 117,
  columnNumber: 3
}, undefined);

_c = ReviewCards;
class RegisterUsers extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  //constructor elemnts in login
  constructor(props) {
    super(props); //intialy no data enterd

    this.state = {
      image: _riyadhhome_jpg__WEBPACK_IMPORTED_MODULE_13__["default"],
      Events: [],
      Upcoming: [],
      weather: []
    };
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:3000/events').then(resp => {
      this.setState({
        Events: resp.data
      });
      console.log(resp);
    }).catch(err => console.log(err));
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://api.openweathermap.org/data/2.5/weather?q=riyadh&APPID=2a6d8bf9b2f6cc7c4df6763fcc95ae65&units=metric').then(res => {
      this.setState({
        weather: res.data.main.temp
      });
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("section", {
        Class: "features ",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
          class: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
            class: "feature-box col-lg-4 col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("img", {
              src: _images_noun_kingdom_centre_2875325_svg__WEBPACK_IMPORTED_MODULE_15__["default"],
              class: "TouriIcons"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("h3", {
              children: "Artistic Approach"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("p", {
              children: "Saudi Arabia plan to change the way cities are contructed."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
            class: "feature-box col-lg-4 col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("img", {
              src: _images_noun_kaaba_direction_3777436_svg__WEBPACK_IMPORTED_MODULE_16__["default"],
              class: "TouriIcons"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("h3", {
              children: "Musliems Stations"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("p", {
              children: "Makkah is the islamic center to all musilims around the world."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
            class: "feature-box col-lg-4 col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("img", {
              src: _images_SaudiFlagIcon_png__WEBPACK_IMPORTED_MODULE_17__["default"],
              class: "TouriIcons saudiflag"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("h3", {
              children: "Ancient Heritage."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("p", {
              children: "Heritage Culture has been passed through hundereds genrations."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 15
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("section", {
        class: "Mainsection",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
          class: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("a", {
            href: "www.google.com",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
              class: "SectionImg",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
                class: "col-lg-3 col-md-5 section-box",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("img", {
                  src: _images_resturants_caffes_jpeg__WEBPACK_IMPORTED_MODULE_24__["default"],
                  class: "sectionimg",
                  alt: "iphone-mockup"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
                class: "centeredText",
                children: "Resturants & Caffes"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 224,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("a", {
            href: "www.google.com",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
              class: "SectionImg",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
                class: "col-lg-3 col-md-5 section-box",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("img", {
                  src: _images_Events_jpeg__WEBPACK_IMPORTED_MODULE_25__["default"],
                  class: "sectionimg",
                  alt: "iphone-mockup"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 229,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
                class: "centeredText",
                children: "Events"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 232,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 228,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("a", {
            href: "www.google.com",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
              class: "SectionImg",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
                class: "col-lg-3 col-md-5 section-box",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("img", {
                  src: _images_Hestoric_jpeg__WEBPACK_IMPORTED_MODULE_27__["default"],
                  class: "sectionimg",
                  alt: "iphone-mockup"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 238,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 237,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
                class: "centeredText",
                children: "Touristic"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("a", {
            href: "www.google.com",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
              class: "SectionImg",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
                class: "col-lg-3 col-md-5 section-box",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("img", {
                  src: _images_Accomdationimage_jpeg__WEBPACK_IMPORTED_MODULE_26__["default"],
                  class: "sectionimg",
                  alt: "iphone-mockup"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 246,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
                class: "centeredText",
                children: "Accomdation"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 248,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 244,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("a", {
            href: "www.google.com",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
              class: "SectionImg",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
                class: "col-lg-3 col-md-4 section-box",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("img", {
                  src: _images_Malls_jpeg__WEBPACK_IMPORTED_MODULE_29__["default"],
                  class: "sectionimg",
                  alt: "iphone-mockup"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 254,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 253,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
                class: "centeredText",
                children: "Malls"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 256,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("a", {
            href: "www.google.com",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
              class: "SectionImg",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
                class: "col-lg-3 col-md-4 section-box",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("img", {
                  src: _images_Extra_jpeg__WEBPACK_IMPORTED_MODULE_28__["default"],
                  class: "sectionimg",
                  alt: "iphone-mockup"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 261,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
                class: "centeredText",
                children: "Extra Services"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 264,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("section", {
        id: "testimonials",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"], {
          id: "testmonials-carousel",
          "data-ride": "false",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"].Item, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("h2", {
              children: "The Middle East is the new Europe"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 276,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("img", {
              class: "testimonials-img",
              src: _images_MohammedBinSalman_jpeg__WEBPACK_IMPORTED_MODULE_18__["default"],
              alt: "Crown Prince Image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 23
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("em", {
              children: "Mohammed Bin Salmans"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 278,
              columnNumber: 23
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 275,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"].Item, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("h2", {
              children: ["If I wasent ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("span", {
                style: {
                  "font-weight": "bold"
                },
                children: "King"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 281,
                columnNumber: 29
              }, this), ", I will be a ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("span", {
                style: {
                  "font-weight": "bold"
                },
                children: "Teacher"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 281,
                columnNumber: 93
              }, this), " ."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 281,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("img", {
              class: "testimonials-img",
              src: _images_KingFaisle_jpeg__WEBPACK_IMPORTED_MODULE_19__["default"],
              alt: "Crown Prince Image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("em", {
              children: "King Fiseal "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 283,
              columnNumber: 23
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 280,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Carousel"].Item, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("h2", {
              children: "The Saudi people are blessed with the heritage of their ancient country."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 286,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("img", {
              class: "testimonials-img",
              src: _images_KingKhaled_jpeg__WEBPACK_IMPORTED_MODULE_20__["default"],
              alt: "dog-profile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 23
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("em", {
              children: "King Khalid"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 288,
              columnNumber: 23
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 285,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 15
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("section", {
        id: "press",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("img", {
          class: "press-logo",
          src: _images_Vision_svg__WEBPACK_IMPORTED_MODULE_23__["default"],
          alt: "SaudiVision Logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("img", {
          class: "press-logo",
          src: _images_369746_svg__WEBPACK_IMPORTED_MODULE_22__["default"],
          alt: "Saudi Sesaons logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("img", {
          class: "press-logo",
          src: _images_366678_svg__WEBPACK_IMPORTED_MODULE_21__["default"],
          alt: "Ministry of Touriesm logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("section", {
        id: "ThingsToDo",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("h2", {
          children: "Things To Do"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_30___default.a, {
          swipeable: true,
          draggable: false,
          showDots: true,
          responsive: responsive,
          ssr: true // means to render carousel on server-side.
          ,
          infinite: true,
          autoPlay: this.props.deviceType !== "mobile" ? true : false,
          autoPlaySpeed: 5000,
          keyBoardControl: true,
          customTransition: "all .5",
          transitionDuration: 500,
          containerClass: "carousel-container",
          removeArrowOnDeviceType: ["desktop", "tablet", "mobile"],
          deviceType: this.props.deviceType,
          dotListClass: "custom-dot-list-style",
          itemClass: "carousel-item-padding-40-px",
          children: this.state.Events.map(createEventCardThings)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 7
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 3
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("section", {
        id: "pricing",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("h2", {
          children: "A Trip Plan for Every Suite Touriests Needs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("p", {
          children: "Simple and affordable price plans for you and your Familiy."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
          class: "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
            class: "pricing-column col-lg-4 col-md-6",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
              class: "card",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
                class: "card-header",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("h3", {
                  children: "Riyadh Night"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 339,
                  columnNumber: 25
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 338,
                columnNumber: 23
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
                class: "card-body",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("h2", {
                  children: "$"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 342,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("p", {
                  children: "One Days in Riydah"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 343,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("p", {
                  children: "Include Saudian Nice Food"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 344,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("p", {
                  children: "Familiy Friendly"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 345,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("button", {
                  class: "btn btn-lg btn-block btn-outline-dark",
                  type: "button",
                  children: "View Trip"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 346,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 341,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 337,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 336,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
            class: "pricing-column col-lg-4 col-md-6",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
              class: "card",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
                class: "card-header",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("h3", {
                  children: "Edge Of the World"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 353,
                  columnNumber: 25
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 352,
                columnNumber: 23
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
                class: "card-body",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("h2", {
                  children: "$$"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 356,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("p", {
                  children: "Two Day In Riyadh"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 357,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("p", {
                  children: "Include Nice Food and Hestoric "
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 358,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("p", {
                  children: "Unlimited App Usage"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 359,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("button", {
                  class: "btn btn-lg btn-block btn-dark",
                  type: "button",
                  children: "View Trip"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 360,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 355,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 351,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 350,
            columnNumber: 19
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
            class: "pricing-column col-lg-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
              class: "card",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
                class: "card-header",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("h3", {
                  children: "Riyadh shopping"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 367,
                  columnNumber: 25
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 366,
                columnNumber: 23
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("div", {
                class: "card-body",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("h2", {
                  children: "$$$"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 371,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("p", {
                  children: "Best Riyadh Shoping malls"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 372,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("p", {
                  children: "weakly shoping event"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 373,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("p", {
                  children: "Eat at Riyadh fainest Resturants"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 374,
                  columnNumber: 25
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("button", {
                  class: "btn btn-lg btn-block btn-dark",
                  type: "button",
                  children: "View Trip"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 375,
                  columnNumber: 25
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 370,
                columnNumber: 23
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 365,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 364,
            columnNumber: 19
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 1
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("section", {
        id: "Upcoming",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("h2", {
          children: "Updoming Events "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 387,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_30___default.a, {
          swipeable: false,
          draggable: false,
          showDots: true,
          responsive: responsive,
          ssr: true // means to render carousel on server-side.
          ,
          infinite: true,
          keyBoardControl: true,
          customTransition: "all .5",
          transitionDuration: 500,
          containerClass: "carousel-container",
          removeArrowOnDeviceType: ["desktop", "tablet", "mobile"],
          deviceType: this.props.deviceType,
          dotListClass: "custom-dot-list-style",
          itemClass: "carousel-item-padding-40-px",
          children: this.state.Events.map(createEventCardUpdoming)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 388,
          columnNumber: 1
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 1
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("footer", {
        id: "footer",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("i", {
          class: "fab fa-instagram"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 425,
          columnNumber: 2
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("i", {
          class: "social-icon fab fa-twitter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 426,
          columnNumber: 4
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("i", {
          class: "social-icon fab fa-facebook"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("i", {
          class: "social-icon fas fa-envelope"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 428,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 429,
          columnNumber: 4
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_33__["jsxDEV"])("p", {
          children: "\xA9 Copyright 2021 TouriStation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 431,
          columnNumber: 4
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 423,
        columnNumber: 2
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 15
    }, this);
  }

}

var _c;

__webpack_require__.$Refresh$.register(_c, "ReviewCards");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/routes/Login-Admin.component.js":
/*!********************************************************!*\
  !*** ./src/components/routes/Login-Admin.component.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginAdmins; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/Mohammed/Desktop/TouriStation/clinet/src/components/routes/Login-Admin.component.js";



class LoginAdmins extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  //constructor elemnts in login
  constructor(props) {
    super(props); // To ensure This refers to this class

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      Email: '',
      Password: ''
    };
  }

  checkloginstatus() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("http://localhost:3000/IsLoged", {
      withCredentials: true
    }).then(res => {
      if (res.data === true) {
        window.location = '/';
      }
    });
  }

  componentDidMount() {
    this.checkloginstatus();
  } //For Email input change 


  onChangeEmail(e) {
    this.setState({
      Email: e.target.value
    });
  } //For password input change 


  onChangePassword(e) {
    this.setState({
      Password: e.target.value
    });
  } //for submit 


  onSubmit(e) {
    //It will prevnt default html submition 
    e.preventDefault();
    const admin = {
      Email: this.state.Email,
      Password: this.state.Password
    };
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('http://localhost:3000/admins/login', admin, {
      withCredentials: true
    }).then(result => {
      console.log(result.data);
      window.location = '/';
    }).catch(err => {
      alert(err.response.data.message);
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
        children: "LogIn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
        onSubmit: this.onSubmit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            children: "Email: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            type: "text",
            required: true,
            className: "form-control",
            value: this.state.Email,
            onChange: this.onChangeEmail
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("label", {
            children: "Password: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            type: "password",
            required: true,
            className: "form-control",
            value: this.state.Password,
            onChange: this.onChangePassword
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "form-group",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            type: "submit",
            value: "Login",
            className: "btn btn-primary"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }, this);
  }

}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/routes/Login-User.component.js":
/*!*******************************************************!*\
  !*** ./src/components/routes/Login-User.component.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginUsers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-button */ "./node_modules/react-google-button/es/index.js");
/* harmony import */ var react_google_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/Mohammed/Desktop/TouriStation/clinet/src/components/routes/Login-User.component.js";




class LoginUsers extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  //constructor elemnts in login
  constructor(props) {
    super(props); // To ensure This refers to this class

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeIsowner = this.onChangeIsowner.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      Email: '',
      Password: '',
      IsOwner: false
    };
  }

  checkloginstatus() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://localhost:3000/IsLoged", {
      withCredentials: true
    }).then(res => {
      if (res.data === true) {
        window.location = '/';
      }
    });
  }

  componentDidMount() {
    this.checkloginstatus();
  } //For Email input change 


  onChangeEmail(e) {
    this.setState({
      Email: e.target.value
    });
  } //For password input change 


  onChangePassword(e) {
    this.setState({
      Password: e.target.value
    });
  }

  onChangeIsowner(e) {
    this.setState({
      IsOwner: e.target.checked
    });
  } //for submit 


  onSubmit(e) {
    //It will prevnt default html submition 
    e.preventDefault();
    const user = {
      Email: this.state.Email,
      Password: this.state.Password
    };
    let types = this.state.IsOwner ? "owners" : "users";
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://localhost:3000/' + types + '/login', user, {
      withCredentials: true
    }).then(result => {
      console.log(result.data);
      window.location = '/';
    }).catch(err => {
      alert(err.response.data.message);
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      style: {
        "margin-top": "3%"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
        children: "LogIn"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
        onSubmit: this.onSubmit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            children: "Email: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            type: "text",
            required: true,
            className: "form-control",
            value: this.state.Email,
            onChange: this.onChangeEmail
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            children: "Password: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            type: "password",
            required: true,
            className: "form-control",
            value: this.state.Password,
            onChange: this.onChangePassword
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            type: "checkbox",
            style: {
              marginRight: '10px'
            },
            checked: this.state.IsOwner,
            onChange: this.onChangeIsowner
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
            children: "Is this an Owner Account?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "form-group",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
            type: "submit",
            value: this.state.IsOwner ? " Owner Sign in" : "Sign in",
            className: "btn btn-primary"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        class: "or-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          class: "line-separator"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          class: "or-label",
          children: "or"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 14
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          class: "line-separator"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_google_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onClick: event => window.location.href = "http://localhost:3000/auth/google",
        className: "googlebutton",
        label: "Sign In with Google",
        disabled: this.state.IsOwner
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        className: "redirectlink",
        children: ["Didn't create accoutn yet? ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
          href: "/register",
          children: "   Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 70
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }, this);
  }

}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/routes/Profile.component.js":
/*!****************************************************!*\
  !*** ./src/components/routes/Profile.component.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegisterUsers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ "./src/components/App.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-alert */ "./node_modules/react-alert/dist/esm/react-alert.js");
/* harmony import */ var react_google_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-google-button */ "./node_modules/react-google-button/es/index.js");
/* harmony import */ var react_google_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_google_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_rating_stars_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-rating-stars-component */ "./node_modules/react-rating-stars-component/dist/react-stars.js");
/* harmony import */ var react_rating_stars_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_rating_stars_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Card */ "./src/components/Card.jsx");
/* harmony import */ var _Review_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Review-Card */ "./src/components/Review-Card.jsx");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-moment */ "./node_modules/react-moment/dist/index.js");
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/Mohammed/Desktop/TouriStation/clinet/src/components/routes/Profile.component.js";















const ReviewCards = props => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("p", {
  children: props.review.FavoritePlace
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 21,
  columnNumber: 3
}, undefined);

_c = ReviewCards;

function createReviewCard(UserReviews) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_Review_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
    Author: UserReviews.Author,
    SiteName: UserReviews.Reviewsite,
    Rate: UserReviews.Rating,
    Comment: UserReviews.Comment,
    SiteID: UserReviews.ReviewPlace,
    SiteIcon: UserReviews.Icon
  }, UserReviews._id, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

function createFavCard(UserFav) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_Review_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
    Author: UserFav.Author,
    SiteName: UserFav.Reviewsite,
    SiteIcon: UserFav.Icon
  }, UserFav._id, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

function createCard(resturants) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
    name: resturants.name,
    stars: resturants.stars //userRate={resturants.userRate}
    ,
    favorite: resturants.favorite,
    types: resturants.types,
    img: resturants.imgURL,
    status: resturants.status,
    descreption: resturants.descreption,
    filters: resturants.filters
  }, resturants.id, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

class RegisterUsers extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  //constructor elemnts in login
  constructor(props) {
    super(props); //intialy no data enterd

    this.state = {
      UName: '',
      UIcon: '',
      UEmail: '',
      UID: '',
      UDate: '',
      uNumReview: 0,
      review: [],
      Faviorte: [],
      id: 1,
      name: "Macdolands",
      stars: 3.3,
      favorite: "Fulled heart",
      types: "Mohamed Abahussain",
      imgURL: "https://rinnoo.net/f/CMS/Listings/15_Mcdonalds-Restaurant-Logo_-_Qu80_RT1600x1024-_OS300x300-_RD300x300-.jpg",
      status: "Open!",
      descreption: "Macdolands is a fast food resturant that is famous with Big mac! Macdolands is a fast food resturant that is famous with Big mac! Macdolands is a fast food resturant that is famous with Big mac!",
      filters: "Music",
      review: [],
      type: ''
    };
  }

  checkloginstatus() {
    const date = new Date();
    let open = "8";
    let close = "5";
    var hours = date.getHours();

    if (open < hours && hours < close) {
      console.log("open");
    } else {
      console.log("closed");
    }

    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://localhost:3000/IsLoged", {
      withCredentials: true
    }).then(res => {
      if (res.data === false) {
        window.location = '/login';
      } else {
        this.setState({
          type: res.data.type
        });
      }
    });
  }

  componentDidMount() {
    this.checkloginstatus(); //Chick if User is loged and store type if true
    //Get User Commen

    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:3000/users/profile', {
      withCredentials: true
    }).then(resp => {
      console.log(resp);
      this.setState({
        UName: resp.data.User[0] + " " + resp.data.User[1],
        UIcon: "http://localhost:3000/" + resp.data.User[2],
        UEmail: resp.data.User[3],
        UID: resp.data.User[4],
        UDate: resp.data.User[5],
        review: resp.data.UserReviews,
        Faviorte: resp.data.UserFaviorte,
        uNumReview: resp.data.UserReviews.length
      });
    }).then(() => console.log(this.state.Faviorte));
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
      className: "profile",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
          className: "UserInfoBlock container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
            xs: 6,
            md: 4,
            lg: 2,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Image"], {
              className: "Imageprofile",
              src: this.state.UIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 5
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
            className: "profileName",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
              lg: 2,
              className: "UserName",
              children: [this.state.UName, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 5
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
              lg: 2,
              className: "UserEmail",
              children: [" ", this.state.UEmail]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 5
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaUserEdit"], {
            className: "fa-3x editicon",
            onClick: event => window.location = "/"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 1
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
            className: "card PrfoileInfo",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
              className: "card-header",
              children: "User Info"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
              className: "card-body",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("h5", {
                className: "card-title",
                children: "Joining Date:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("p", {
                className: "card-text",
                children: [" ", this.state.UDate.split('T')[0]]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 9
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
              className: "card-body",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("h5", {
                className: "card-title",
                children: "Number of Reviews:"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 13
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("p", {
                className: "card-text",
                children: [" ", this.state.uNumReview, " Reviews"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 13
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 9
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 5
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
            className: "ProfileFav",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Tabs"], {
              defaultActiveKey: "Reviews",
              id: "uncontrolled-tab-example",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Tab"], {
                eventKey: "Faviortes",
                title: "Faviortes",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 3
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 3
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Tab"], {
                eventKey: "Reviews",
                title: "Reviews",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
                  className: "profileCard",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
                    className: "ReviewCard",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Header, {
                      as: "h5",
                      className: "ReviewHeader",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("img", {
                        className: "reviewimg",
                        style: {
                          width: '75px',
                          height: '75px'
                        },
                        src: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 199,
                        columnNumber: 7
                      }, this), "Al-Baik", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
                        className: "reviewStar",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_rating_stars_component__WEBPACK_IMPORTED_MODULE_8___default.a, {
                          value: 4,
                          count: 5,
                          size: 25,
                          edit: false,
                          isHalf: true // activeColor={}

                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 206,
                          columnNumber: 7
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 205,
                        columnNumber: 13
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 198,
                      columnNumber: 3
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Body, {
                      className: "CardBody",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Title, {
                        children: "Mohammed Abahussain"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 219,
                        columnNumber: 5
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Text, {
                        children: "Overall, the food was vesssspaosaposkaksaposkaposkaposkaposkaposkapskaposkaposkaposkaposkapskaposkaposkaspokapskapskaspkaspokapsry delcious and the price are affordable but whiting time was over 10 min. I will cosider goinin again ."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 222,
                        columnNumber: 5
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 218,
                      columnNumber: 3
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 197,
                    columnNumber: 3
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 196,
                  columnNumber: 7
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])("div", {
                  children: this.state.review.map(createReviewCard)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 231,
                  columnNumber: 1
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 3
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 5
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 5
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 3
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 3
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 1
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 7
    }, this);
  }

}

var _c;

__webpack_require__.$Refresh$.register(_c, "ReviewCards");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/routes/Register-Admin.component.js":
/*!***********************************************************!*\
  !*** ./src/components/routes/Register-Admin.component.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegisterAdmins; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ "./src/components/App.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-alert */ "./node_modules/react-alert/dist/esm/react-alert.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/Mohammed/Desktop/TouriStation/clinet/src/components/routes/Register-Admin.component.js";






class RegisterAdmins extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  //constructor elemnts in login
  constructor(props) {
    super(props); // To ensure This refers to this class

    this.onChangeFName = this.onChangeFName.bind(this);
    this.onChangeLName = this.onChangeLName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.fileupload = this.fileupload.bind(this);
    this.onChangePassword1 = this.onChangePassword1.bind(this);
    this.onChangePassword2 = this.onChangePassword2.bind(this);
    this.onSubmit = this.onSubmit.bind(this); //intialy no data enterd

    this.state = {
      FName: '',
      LName: '',
      Email: '',
      icon: null,
      Password1: '',
      Password2: ''
    };
  }

  checkloginstatus() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://localhost:3000/adminreigster", {
      withCredentials: true
    }).then(res => {
      if (res.data === false) {
        window.location = '/register';
      }
    });
  }

  componentDidMount() {
    this.checkloginstatus();
  } //For First Name input change 


  onChangeFName(e) {
    this.setState({
      FName: e.target.value
    });
  } //For Last Email input change 


  onChangeLName(e) {
    this.setState({
      LName: e.target.value
    });
  } //For Email input change 


  onChangeEmail(e) {
    this.setState({
      Email: e.target.value
    });
  } // File change Handler input change 


  fileupload(e) {
    this.setState({
      icon: e.target.files[0]
    });
  } //For Password input change 


  onChangePassword1(e) {
    this.setState({
      Password1: e.target.value
    });
  } //For password match input change 


  onChangePassword2(e) {
    this.setState({
      Password2: e.target.value
    });
  } //for submit 


  async onSubmit(e) {
    //It will prevnt default html submition 
    e.preventDefault();
    const formData = new FormData();
    formData.append('FName', this.state.FName);
    formData.append('LName', this.state.LName);
    formData.append('Email', this.state.Email);
    formData.append('icon', this.state.icon);
    formData.append('Password1', this.state.Password1);
    formData.append('Password2', this.state.Password2);
    await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://localhost:3000/admins/register', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "type": "formData"
      },
      withCredentials: true
    }).then(res => {
      alert("We send a Confirmation email");
      window.location = '/';
    }).catch(err => {
      alert(err.response.data.message);
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h3", {
        children: "Create New Accout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("form", {
        onSubmit: this.onSubmit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "form-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
              children: "First Name: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
              type: "text",
              required: true,
              className: "form-control",
              value: this.state.FName,
              onChange: this.onChangeFName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
            className: "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
              children: "LName: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
              type: "text",
              required: true,
              className: "form-control",
              value: this.state.LName,
              onChange: this.onChangeLName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
            children: "Email: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
            type: "text",
            required: true,
            className: "form-control",
            value: this.state.Email,
            onChange: this.onChangeEmail
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
            children: "Password1: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
            type: "password",
            required: true,
            className: "form-control",
            value: this.state.Password1,
            onChange: this.onChangePassword1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
            children: "Password2: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
            type: "password",
            required: true,
            className: "form-control",
            value: this.state.Password2,
            onChange: this.onChangePassword2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "custom-file",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("label", {
            className: "custom-file-label",
            children: "Icon: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
            type: "file",
            className: "custom-file-input",
            onChange: this.fileupload
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "form-group",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
            type: "submit",
            value: "Create User",
            className: "btn btn-primary"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }, this);
  }

}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/routes/Register-User.component.js":
/*!**********************************************************!*\
  !*** ./src/components/routes/Register-User.component.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegisterUsers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ "./src/components/App.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-alert */ "./node_modules/react-alert/dist/esm/react-alert.js");
/* harmony import */ var react_google_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-google-button */ "./node_modules/react-google-button/es/index.js");
/* harmony import */ var react_google_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_google_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/Mohammed/Desktop/TouriStation/clinet/src/components/routes/Register-User.component.js";







class RegisterUsers extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  //constructor elemnts in login
  constructor(props) {
    super(props); // To ensure This refers to this class

    this.onChangeFName = this.onChangeFName.bind(this);
    this.onChangeLName = this.onChangeLName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.fileupload = this.fileupload.bind(this);
    this.onChangePassword1 = this.onChangePassword1.bind(this);
    this.onChangePassword2 = this.onChangePassword2.bind(this);
    this.onChangeOwnerDes = this.onChangeOwnerDes.bind(this);
    this.onChangeIsowner = this.onChangeIsowner.bind(this); // this.this.routechange = this.this.routechange.bind(this);

    this.onSubmit = this.onSubmit.bind(this); //intialy no data enterd

    this.state = {
      FName: '',
      LName: '',
      Email: '',
      icon: null,
      Password1: '',
      Password2: '',
      OwnerDes: '',
      IsOwner: false
    };
  }

  checkloginstatus() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://localhost:3000/IsLoged", {
      withCredentials: true
    }).then(res => {
      if (res.data === true) {
        window.location = '/';
      }
    });
  }

  componentDidMount() {
    this.checkloginstatus();
  } //For First Name input change 


  onChangeFName(e) {
    this.setState({
      FName: e.target.value
    });
  } //For Last Email input change 


  onChangeLName(e) {
    this.setState({
      LName: e.target.value
    });
  } //For Email input change 


  onChangeEmail(e) {
    this.setState({
      Email: e.target.value
    });
  } // File change Handler input change 


  fileupload(e) {
    this.setState({
      icon: e.target.files[0]
    });
  } //For Password input change 


  onChangePassword1(e) {
    this.setState({
      Password1: e.target.value
    });
  } //For password match input change 


  onChangePassword2(e) {
    this.setState({
      Password2: e.target.value
    });
  } //For password match input change 


  onChangeOwnerDes(e) {
    this.setState({
      OwnerDes: e.target.value
    });
  }

  onChangeIsowner(e) {
    this.setState({
      IsOwner: e.target.checked
    });
  } // routechange(){
  //     let googlepath=`http://localhost:3000/auth/google`;
  //     history.push(googlepath)
  // }
  //for submit 


  async onSubmit(e) {
    //It will prevnt default html submition 
    e.preventDefault();
    let types = this.state.IsOwner ? "owners" : "users";
    const formData = new FormData();
    formData.append('FName', this.state.FName);
    formData.append('LName', this.state.LName);
    formData.append('Email', this.state.Email);
    formData.append('icon', this.state.icon);
    formData.append('Password1', this.state.Password1);
    formData.append('Password2', this.state.Password2);
    formData.append('OwnerDes', this.state.OwnerDes);
    await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://localhost:3000/' + types + '/register', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "type": "formData"
      }
    }).then(res => {
      alert("We send a Confirmation email");
      window.location = '/';
    }).catch(err => {
      alert(err.response.data.message);
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      style: {
        "margin-top": "3%"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h3", {
        children: "Create New Accout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("form", {
        onSubmit: this.onSubmit,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "form-row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
              children: "First Name: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
              type: "text",
              required: true,
              className: "form-control",
              value: this.state.FName,
              onChange: this.onChangeFName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "form-group col-md-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
              children: "LName: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
              type: "text",
              required: true,
              className: "form-control",
              value: this.state.LName,
              onChange: this.onChangeLName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
            children: "Email: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
            type: "text",
            required: true,
            className: "form-control",
            value: this.state.Email,
            onChange: this.onChangeEmail
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
            children: "Password1: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
            type: "password",
            required: true,
            className: "form-control",
            value: this.state.Password1,
            onChange: this.onChangePassword1
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
            children: "Password2: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
            type: "password",
            required: true,
            className: "form-control",
            value: this.state.Password2,
            onChange: this.onChangePassword2
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "custom-file",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
            className: "custom-file-label",
            children: "Icon: "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
            type: "file",
            className: "custom-file-input",
            onChange: this.fileupload
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          style: {
            marginTop: '20px',
            marginBottom: '5px'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
            type: "checkbox",
            style: {
              marginRight: '10px'
            },
            checked: this.state.IsOwner,
            onChange: this.onChangeIsowner
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
            children: "Is this an Owner Account?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 9
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "form-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("label", {
            children: "Descripe Your Busines:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 9
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
            type: "text",
            className: "form-control",
            disabled: this.state.IsOwner == false,
            value: this.state.OwnerDes,
            onChange: this.onChangeOwnerDes
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "form-group",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("input", {
            type: "submit",
            value: this.state.IsOwner ? "Create Owner Account" : "Create User Account",
            className: "btn btn-primary"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        class: "or-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          class: "line-separator"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          class: "or-label",
          children: "or"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 14
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          class: "line-separator"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_google_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        onClick: event => window.location.href = "http://localhost:3000/auth/google",
        className: "googlebutton",
        label: "Sign Up with Google",
        disabled: this.state.IsOwner
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "redirectlink",
        children: ["Already have and account? ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("a", {
          href: "/login",
          children: "Sign in "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 68
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 12
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 5
    }, this);
  }

}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/routes/Search.component.js":
/*!***************************************************!*\
  !*** ./src/components/routes/Search.component.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ "./src/components/App.jsx");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card */ "./src/components/Card.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/Mohammed/Desktop/TouriStation/clinet/src/components/routes/Search.component.js";






function CreateCards(resturants) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    theCardId: resturants._id,
    placeName: resturants.Name,
    stars: resturants.Rating,
    PRating: resturants.PRating,
    img: resturants.icon // need uploads file
    ,
    status: Status(resturants.OpenTime, resturants.CloseTime),
    descreption: resturants.Description
  }, resturants._id, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
} // Check if the place is open or closed depending on the work hours


_c = CreateCards;

function Status(Open, Close) {
  const date = new Date();
  var hours = date.getHours();
  const red = 'red';
  const green = 'green';

  if (Open <= hours && hours < Close) {
    return "Open";
  } else {
    return "Close";
  }
}

_c2 = Status;
class Search extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  //constructor elemnts in login
  constructor(props) {
    super(props); //intialy no data enterd // the types are the filters for each place such as music wifi etc

    this.state = {
      resturants: [],
      searchvalue: this.props.location.search,
      Type1: false,
      Type2: false,
      Type3: false,
      Type4: false,
      Type5: false,
      filteredRestraunts: [],
      noPlaceFound: false
    };
    this.onChangePriceRatinglow = this.onChangePriceRatinglow.bind(this);
    this.onChangePriceRatinghigh = this.onChangePriceRatinghigh.bind(this);
  }

  componentDidMount() {
    console.log(this.props.match.params.place); //Get Resturants data, filteredRestraunts used for filtring and sorting the cards

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:3000/places/Search/' + this.props.match.params.place).then(resp => {
      console.log(resp);
      this.setState({
        resturants: resp.data,
        filteredRestraunts: resp.data
      }); // console.log(this.state.resturants)
      // console.log(this.state.filteredRestraunts)
    });
  } //========================================================//
  // Filters
  //========================================================//
  // Sort By


  onChangePriceRatinglow(e) {
    this.setState({
      Type4: e.target.checked
    });
    console.log(this.state.Type4);
    let copy;

    if (this.state.Type4 === true) {
      copy = this.state.filteredRestraunts.sort((a, b) => {
        return a.PRating.length - b.PRating.length;
      });
      this.setState({
        filteredRestraunts: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.resturants;
      this.setState({
        filteredRestraunts: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  }

  onChangePriceRatinghigh(e) {
    this.setState({
      Type5: e.target.checked
    });
    console.log(this.state.Type5);
    let copy;

    if (this.state.Type5 === true) {
      copy = this.state.filteredRestraunts.sort((a, b) => {
        return b.PRating.length - a.PRating.length;
      });
      this.setState({
        filteredRestraunts: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.resturants;
      this.setState({
        filteredRestraunts: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  } //========================================================//


  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "flexthem",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "Filters",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label2",
          children: "Sort by: Price"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label3",
          children: ["Lowest to heighest", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            type: "radio",
            className: "RadioBox",
            id: "Type4",
            onClick: this.onChangePriceRatinglow
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label3",
          children: ["heighest to Lowest", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            type: "radio",
            className: "RadioBox",
            id: "Type5",
            onClick: this.onChangePriceRatinghigh
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "general-card",
        children: this.state.filteredRestraunts.map(CreateCards)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
        className: "noPlaceFound",
        style: {
          display: this.state.noPlaceFound ? 'block' : 'none'
        },
        children: " No place found"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }, this);
  }

}

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "CreateCards");
__webpack_require__.$Refresh$.register(_c2, "Status");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/routes/Sections/Accommodations.component.js":
/*!********************************************************************!*\
  !*** ./src/components/routes/Sections/Accommodations.component.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accommodations; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../App */ "./src/components/App.jsx");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Card */ "./src/components/Card.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/Mohammed/Desktop/TouriStation/clinet/src/components/routes/Sections/Accommodations.component.js";






function CreateCards(accommodations) {
  //Handel the Gym, Wifi, Breakfast (to transfer it from bolean form into string)
  let ifGym;
  let ifWifi;
  let ifBreakfast;

  if (accommodations.Gym == true) {
    ifGym = "Gym";
  } else {
    ifGym = "No Gym";
  }

  if (accommodations.Wifi == true) {
    ifWifi = "Wifi";
  } else {
    ifWifi = "No Wifi";
  }

  if (accommodations.Breakfast == true) {
    ifBreakfast = "Breakfast";
  } else {
    ifBreakfast = "No Breakfast";
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    theCardId: accommodations._id,
    placeName: accommodations.Name,
    stars: accommodations.Rating,
    PRating: accommodations.PRating,
    music: ifGym,
    img: accommodations.icon,
    status: Status(accommodations.OpenTime, accommodations.CloseTime),
    descreption: accommodations.Description,
    wifi: ifWifi,
    partition: ifBreakfast
  }, accommodations._id, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, this);
} // Check if the place is open or closed depending on the work hours


_c = CreateCards;

function Status(Open, Close) {
  const date = new Date();
  var hours = date.getHours();
  const red = 'red';
  const green = 'green';

  if (Open <= hours && hours < Close) {
    return "Open";
  } else {
    return "Close";
  }
}

_c2 = Status;
class Accommodations extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  //constructor elemnts in login
  constructor(props) {
    super(props); //intialy no data enterd // the types are the filters for each place such as music wifi etc

    this.state = {
      accommodations: [],
      Type1: false,
      Type2: false,
      Type3: false,
      Type4: false,
      Type5: false,
      filteredAccommodations: [],
      noPlaceFound: false
    };
    this.onChangeGym = this.onChangeGym.bind(this);
    this.onChangeWifi = this.onChangeWifi.bind(this);
    this.onChangeBreakfast = this.onChangeBreakfast.bind(this);
    this.onChangePriceRatinglow = this.onChangePriceRatinglow.bind(this);
    this.onChangePriceRatinghigh = this.onChangePriceRatinghigh.bind(this);
  }

  componentDidMount() {
    //Get Resturants data, filteredRestraunts used for filtring and sorting the cards
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:3000/places/sections/accommodations').then(resp => {
      console.log(resp);
      this.setState({
        accommodations: resp.data,
        filteredAccommodations: resp.data
      }); // console.log(this.state.accommodations)
      // console.log(this.state.filteredAccommodations)
    });
  } //========================================================//
  // Filters


  onChangeGym(e) {
    this.setState({
      Type1: e.target.checked
    });
    console.log(this.state.Type1);
    let copy;

    if (this.state.Type1 === true) {
      copy = this.state.filteredAccommodations.filter(Type => {
        return Type.Gym === this.state.Type1;
      }); // console.log(copy);

      this.setState({
        filteredAccommodations: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.accommodations; // console.log(copy);

      this.setState({
        filteredAccommodations: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  }

  onChangeWifi(e) {
    this.setState({
      Type2: e.target.checked
    });
    console.log(this.state.Type2);
    let copy;

    if (this.state.Type2 === true) {
      copy = this.state.filteredAccommodations.filter(Type => {
        return Type.Wifi === this.state.Type2;
      });
      this.setState({
        filteredAccommodations: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.accommodations;
      this.setState({
        filteredAccommodations: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  }

  onChangeBreakfast(e) {
    this.setState({
      Type3: e.target.checked
    });
    console.log(this.state.Type3);
    let copy;

    if (this.state.Type3 === true) {
      copy = this.state.filteredAccommodations.filter(Type => {
        return Type.Breakfast === this.state.Type3;
      });
      this.setState({
        filteredAccommodations: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.accommodations;
      this.setState({
        filteredAccommodations: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  } //========================================================//
  // Sort By Price


  onChangePriceRatinglow(e) {
    this.setState({
      Type4: e.target.checked
    });
    console.log(this.state.Type4);
    let copy;

    if (this.state.Type4 === true) {
      copy = this.state.filteredAccommodations.sort((a, b) => {
        return a.PRating.length - b.PRating.length;
      });
      this.setState({
        filteredAccommodations: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.accommodations;
      this.setState({
        filteredAccommodations: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  }

  onChangePriceRatinghigh(e) {
    this.setState({
      Type5: e.target.checked
    });
    console.log(this.state.Type5);
    let copy;

    if (this.state.Type5 === true) {
      copy = this.state.filteredAccommodations.sort((a, b) => {
        return b.PRating.length - a.PRating.length;
      });
      this.setState({
        filteredAccommodations: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.accommodations;
      this.setState({
        filteredAccommodations: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  } //========================================================//


  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "flexthem",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "Filters",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h4", {
          className: "FilterTitle",
          children: "Filters"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label1",
          children: ["Gym", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            className: "GymAcc",
            type: "checkbox",
            id: "Type1",
            onChange: this.onChangeGym
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label1",
          children: ["Wifi", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            className: "WifiAcc",
            type: "checkbox",
            id: "Type2",
            onChange: this.onChangeWifi
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label1",
          children: ["Breakfast", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            className: "Breakf",
            type: "checkbox",
            id: "Type3",
            onChange: this.onChangeBreakfast
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label2",
          children: "Sort by: Price"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label3",
          children: ["Lowest to heighest", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            type: "radio",
            className: "RadioBox",
            id: "Type4",
            onClick: this.onChangePriceRatinglow
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label3",
          children: ["heighest to Lowest", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            type: "radio",
            className: "RadioBox",
            id: "Type5",
            onClick: this.onChangePriceRatinghigh
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "general-card",
        children: this.state.filteredAccommodations.map(CreateCards)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
        className: "noPlaceFound",
        style: {
          display: this.state.noPlaceFound ? 'block' : 'none'
        },
        children: " No place found"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }, this);
  }

}

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "CreateCards");
__webpack_require__.$Refresh$.register(_c2, "Status");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/routes/Sections/ExtraServcis.component.js":
/*!******************************************************************!*\
  !*** ./src/components/routes/Sections/ExtraServcis.component.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExtraServcis; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../App */ "./src/components/App.jsx");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Card */ "./src/components/Card.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/Mohammed/Desktop/TouriStation/clinet/src/components/routes/Sections/ExtraServcis.component.js";






function CreateCards(extraservices) {
  //Handel the Gym, Wifi, Breakfast (to transfer it from bolean form into string)
  let ifGym;
  let ifRentalCar;

  if (extraservices.Gym == true) {
    ifGym = "Gym";
  } else {
    ifGym = "Not Gym";
  }

  if (extraservices.CarRental == true) {
    ifRentalCar = "Rental Car Center";
  } else {
    ifRentalCar = "Not Rental Car Center ";
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    theCardId: extraservices._id,
    placeName: extraservices.Name,
    stars: extraservices.Rating,
    PRating: extraservices.PRating,
    music: ifGym,
    img: extraservices.icon,
    status: Status(extraservices.OpenTime, extraservices.CloseTime),
    descreption: extraservices.Description,
    partition: ifRentalCar
  }, extraservices._id, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, this);
} // Check if the place is open or closed depending on the work hours


_c = CreateCards;

function Status(Open, Close) {
  const date = new Date();
  var hours = date.getHours();
  const red = 'red';
  const green = 'green';

  if (Open <= hours && hours < Close) {
    return "Open";
  } else {
    return "Close";
  }
}

_c2 = Status;
class ExtraServcis extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  //constructor elemnts in login
  constructor(props) {
    super(props); //intialy no data enterd // the types are the filters for each place such as music wifi etc

    this.state = {
      extraservices: [],
      Type1: false,
      Type2: false,
      Type3: false,
      Type4: false,
      Type5: false,
      filteredExtraservices: [],
      noPlaceFound: false
    };
    this.onChangeGym = this.onChangeGym.bind(this);
    this.onChangeRentalCar = this.onChangeRentalCar.bind(this);
    this.onChangePriceRatinglow = this.onChangePriceRatinglow.bind(this);
    this.onChangePriceRatinghigh = this.onChangePriceRatinghigh.bind(this);
  }

  componentDidMount() {
    //Get Resturants data, filteredRestraunts used for filtring and sorting the cards
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:3000/places/sections/extraservices').then(resp => {
      console.log(resp);
      this.setState({
        extraservices: resp.data,
        filteredExtraservices: resp.data
      }); // console.log(this.state.touristic)
      // console.log(this.state.filteredTouristic)
    });
  } //========================================================//
  // Filters


  onChangeGym(e) {
    this.setState({
      Type1: e.target.checked
    });
    console.log(this.state.Type1);
    let copy;

    if (this.state.Type1 === true) {
      copy = this.state.filteredExtraservices.filter(Type => {
        return Type.Gym === this.state.Type1;
      }); // console.log(copy);

      this.setState({
        filteredExtraservices: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.extraservices; // console.log(copy);

      this.setState({
        filteredExtraservices: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  }

  onChangeRentalCar(e) {
    this.setState({
      Type2: e.target.checked
    });
    console.log(this.state.Type2);
    let copy;

    if (this.state.Type2 === true) {
      copy = this.state.filteredExtraservices.filter(Type => {
        return Type.CarRental === this.state.Type2;
      });
      this.setState({
        filteredExtraservices: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.extraservices;
      this.setState({
        filteredExtraservices: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  } //========================================================//
  // Sort By Price


  onChangePriceRatinglow(e) {
    this.setState({
      Type4: e.target.checked
    });
    console.log(this.state.Type4);
    let copy;

    if (this.state.Type4 === true) {
      copy = this.state.filteredExtraservices.sort((a, b) => {
        return a.PRating.length - b.PRating.length;
      });
      this.setState({
        filteredExtraservices: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.extraservices;
      this.setState({
        filteredExtraservices: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  }

  onChangePriceRatinghigh(e) {
    this.setState({
      Type5: e.target.checked
    });
    console.log(this.state.Type5);
    let copy;

    if (this.state.Type5 === true) {
      copy = this.state.filteredExtraservices.sort((a, b) => {
        return b.PRating.length - a.PRating.length;
      });
      this.setState({
        filteredExtraservices: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.extraservices;
      this.setState({
        filteredExtraservices: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  } //========================================================//


  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "flexthem",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "Filters",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h4", {
          className: "FilterTitle",
          children: "Filters"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label1",
          children: ["Gym", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            className: "GymExtra",
            type: "checkbox",
            id: "Type1",
            onChange: this.onChangeGym
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label1",
          children: ["Rental Car Center", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            className: "CarRentalExtra",
            type: "checkbox",
            id: "Type2",
            onChange: this.onChangeRentalCar
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label2",
          children: "Sort by: Price"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label3",
          children: ["Lowest to heighest", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            type: "radio",
            className: "RadioBox",
            id: "Type4",
            onClick: this.onChangePriceRatinglow
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label3",
          children: ["heighest to Lowest", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            type: "radio",
            className: "RadioBox",
            id: "Type5",
            onClick: this.onChangePriceRatinghigh
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "general-card",
        children: this.state.filteredExtraservices.map(CreateCards)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
        className: "noPlaceFound",
        style: {
          display: this.state.noPlaceFound ? 'block' : 'none'
        },
        children: " No place found"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }, this);
  }

}

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "CreateCards");
__webpack_require__.$Refresh$.register(_c2, "Status");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/routes/Sections/Malls.component.js":
/*!***********************************************************!*\
  !*** ./src/components/routes/Sections/Malls.component.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Malls; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../App */ "./src/components/App.jsx");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Card */ "./src/components/Card.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/Mohammed/Desktop/TouriStation/clinet/src/components/routes/Sections/Malls.component.js";






function CreateCards(malls) {
  //Handel the Gym, Wifi, Breakfast (to transfer it from bolean form into string)
  let ifChildgames;
  let ifWifi;
  let ifCinema;

  if (malls.games == true) {
    ifChildgames = "Games Center";
  } else {
    ifChildgames = "No Games Center";
  }

  if (malls.Wifi == true) {
    ifWifi = "Wifi";
  } else {
    ifWifi = "No Wifi";
  }

  if (malls.Cinema == true) {
    ifCinema = "Cinema";
  } else {
    ifCinema = "No Cinema";
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    theCardId: malls._id,
    placeName: malls.Name,
    stars: malls.Rating,
    PRating: malls.PRating,
    music: ifChildgames,
    img: malls.icon,
    status: Status(malls.OpenTime, malls.CloseTime),
    descreption: malls.Description,
    wifi: ifWifi,
    partition: ifCinema
  }, malls._id, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, this);
} // Check if the place is open or closed depending on the work hours


_c = CreateCards;

function Status(Open, Close) {
  const date = new Date();
  var hours = date.getHours();
  const red = 'red';
  const green = 'green';

  if (Open <= hours && hours < Close) {
    return "Open";
  } else {
    return "Close";
  }
}

_c2 = Status;
class Malls extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  //constructor elemnts in login
  constructor(props) {
    super(props); //intialy no data enterd // the types are the filters for each place such as music wifi etc

    this.state = {
      malls: [],
      Type1: false,
      Type2: false,
      Type3: false,
      Type4: false,
      Type5: false,
      filteredMalls: [],
      noPlaceFound: false
    };
    this.onChangeChildGames = this.onChangeChildGames.bind(this);
    this.onChangeWifi = this.onChangeWifi.bind(this);
    this.onChangeCinema = this.onChangeCinema.bind(this);
    this.onChangePriceRatinglow = this.onChangePriceRatinglow.bind(this);
    this.onChangePriceRatinghigh = this.onChangePriceRatinghigh.bind(this);
  }

  componentDidMount() {
    //Get Resturants data, filteredRestraunts used for filtring and sorting the cards
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:3000/places/sections/malls').then(resp => {
      console.log(resp);
      this.setState({
        malls: resp.data,
        filteredMalls: resp.data
      }); // console.log(this.state.malls)
      // console.log(this.state.filteredMalls)
    });
  } //========================================================//
  // Filters


  onChangeChildGames(e) {
    this.setState({
      Type1: e.target.checked
    });
    console.log(this.state.Type1);
    let copy;

    if (this.state.Type1 === true) {
      copy = this.state.filteredMalls.filter(Type => {
        return Type.games === this.state.Type1;
      }); // console.log(copy);

      this.setState({
        filteredMalls: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.malls; // console.log(copy);

      this.setState({
        filteredMalls: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  }

  onChangeWifi(e) {
    this.setState({
      Type2: e.target.checked
    });
    console.log(this.state.Type2);
    let copy;

    if (this.state.Type2 === true) {
      copy = this.state.filteredMalls.filter(Type => {
        return Type.Wifi === this.state.Type2;
      });
      this.setState({
        filteredMalls: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.malls;
      this.setState({
        filteredMalls: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  }

  onChangeCinema(e) {
    this.setState({
      Type3: e.target.checked
    });
    console.log(this.state.Type3);
    let copy;

    if (this.state.Type3 === true) {
      copy = this.state.filteredMalls.filter(Type => {
        return Type.Cinema === this.state.Type3;
      });
      this.setState({
        filteredMalls: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.malls;
      this.setState({
        filteredMalls: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  } //========================================================//
  // Sort By Price


  onChangePriceRatinglow(e) {
    this.setState({
      Type4: e.target.checked
    });
    console.log(this.state.Type4);
    let copy;

    if (this.state.Type4 === true) {
      copy = this.state.filteredMalls.sort((a, b) => {
        return a.PRating.length - b.PRating.length;
      });
      this.setState({
        filteredMalls: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.malls;
      this.setState({
        filteredMalls: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  }

  onChangePriceRatinghigh(e) {
    this.setState({
      Type5: e.target.checked
    });
    console.log(this.state.Type5);
    let copy;

    if (this.state.Type5 === true) {
      copy = this.state.filteredMalls.sort((a, b) => {
        return b.PRating.length - a.PRating.length;
      });
      this.setState({
        filteredMalls: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.malls;
      this.setState({
        filteredMalls: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  } //========================================================//


  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "flexthem",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "Filters",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h4", {
          className: "FilterTitle",
          children: "Filters"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label1",
          children: ["Games", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            className: "GameMalls",
            type: "checkbox",
            id: "Type1",
            onChange: this.onChangeChildGames
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label1",
          children: ["Wifi", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            className: "WifiMalls",
            type: "checkbox",
            id: "Type2",
            onChange: this.onChangeWifi
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label1",
          children: ["Cinema", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            className: "CinemaMalls",
            type: "checkbox",
            id: "Type3",
            onChange: this.onChangeCinema
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label2",
          children: "Sort by: Price"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label3",
          children: ["Lowest to heighest", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            type: "radio",
            className: "RadioBox",
            id: "Type4",
            onClick: this.onChangePriceRatinglow
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label3",
          children: ["heighest to Lowest", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            type: "radio",
            className: "RadioBox",
            id: "Type5",
            onClick: this.onChangePriceRatinghigh
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "general-card",
        children: this.state.filteredMalls.map(CreateCards)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
        className: "noPlaceFound",
        style: {
          display: this.state.noPlaceFound ? 'block' : 'none'
        },
        children: " No place found"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }, this);
  }

}

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "CreateCards");
__webpack_require__.$Refresh$.register(_c2, "Status");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/routes/Sections/Resturants.component.js":
/*!****************************************************************!*\
  !*** ./src/components/routes/Sections/Resturants.component.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Resturants; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../App */ "./src/components/App.jsx");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Card */ "./src/components/Card.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/Mohammed/Desktop/TouriStation/clinet/src/components/routes/Sections/Resturants.component.js";






function CreateCards(resturants) {
  //Handel the Music, Wifi, Partition (to transfer it from bolean form into string)
  let ifMusic;
  let ifWifi;
  let ifPartition;

  if (resturants.Music == true) {
    ifMusic = "Music";
  } else {
    ifMusic = "No Music";
  }

  if (resturants.Wifi == true) {
    ifWifi = "Wifi";
  } else {
    ifWifi = "No Wifi";
  }

  if (resturants.Partition == true) {
    ifPartition = "Partition";
  } else {
    ifPartition = "No Partition";
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    theCardId: resturants._id,
    placeName: resturants.Name,
    stars: resturants.Rating,
    PRating: resturants.PRating,
    music: ifMusic,
    img: resturants.icon // need uploads file
    ,
    status: Status(resturants.OpenTime, resturants.CloseTime),
    descreption: resturants.Description,
    wifi: ifWifi,
    partition: ifPartition
  }, resturants._id, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, this);
} // Check if the place is open or closed depending on the work hours


_c = CreateCards;

function Status(Open, Close) {
  const date = new Date();
  var hours = date.getHours();
  const red = 'red';
  const green = 'green';

  if (Open <= hours && hours < Close) {
    return "Open";
  } else {
    return "Close";
  }
}

_c2 = Status;
class Resturants extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  //constructor elemnts in login
  constructor(props) {
    super(props); //intialy no data enterd // the types are the filters for each place such as music wifi etc

    this.state = {
      resturants: [],
      Type1: false,
      Type2: false,
      Type3: false,
      Type4: false,
      Type5: false,
      filteredRestraunts: [],
      noPlaceFound: false
    };
    this.onChangeMusic = this.onChangeMusic.bind(this);
    this.onChangeWifi = this.onChangeWifi.bind(this);
    this.onChangePartition = this.onChangePartition.bind(this);
    this.onChangePriceRatinglow = this.onChangePriceRatinglow.bind(this);
    this.onChangePriceRatinghigh = this.onChangePriceRatinghigh.bind(this);
  }

  componentDidMount() {
    //Get Resturants data, filteredRestraunts used for filtring and sorting the cards
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:3000/places/sections/Resturant').then(resp => {
      console.log(resp);
      this.setState({
        resturants: resp.data,
        filteredRestraunts: resp.data
      }); // console.log(this.state.resturants)
      // console.log(this.state.filteredRestraunts)
    });
  } //========================================================//
  // Filters


  onChangeMusic(e) {
    this.setState({
      Type1: e.target.checked
    });
    console.log(this.state.Type1);
    let copy;

    if (this.state.Type1 === true) {
      copy = this.state.filteredRestraunts.filter(Type => {
        return Type.Music === this.state.Type1;
      }); // console.log(copy);

      this.setState({
        filteredRestraunts: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.resturants; // console.log(copy);

      this.setState({
        filteredRestraunts: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  }

  onChangeWifi(e) {
    this.setState({
      Type2: e.target.checked
    });
    console.log(this.state.Type2);
    let copy;

    if (this.state.Type2 === true) {
      copy = this.state.filteredRestraunts.filter(Type => {
        return Type.Wifi === this.state.Type2;
      });
      this.setState({
        filteredRestraunts: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.resturants;
      this.setState({
        filteredRestraunts: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  }

  onChangePartition(e) {
    this.setState({
      Type3: e.target.checked
    });
    console.log(this.state.Type3);
    let copy;

    if (this.state.Type3 === true) {
      copy = this.state.filteredRestraunts.filter(Type => {
        return Type.Partition === this.state.Type3;
      });
      this.setState({
        filteredRestraunts: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.resturants;
      this.setState({
        filteredRestraunts: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  } //========================================================//
  // Sort By


  onChangePriceRatinglow(e) {
    this.setState({
      Type4: e.target.checked
    });
    console.log(this.state.Type4);
    let copy;

    if (this.state.Type4 === true) {
      copy = this.state.filteredRestraunts.sort((a, b) => {
        return a.PRating.length - b.PRating.length;
      });
      this.setState({
        filteredRestraunts: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.resturants;
      this.setState({
        filteredRestraunts: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  }

  onChangePriceRatinghigh(e) {
    this.setState({
      Type5: e.target.checked
    });
    console.log(this.state.Type5);
    let copy;

    if (this.state.Type5 === true) {
      copy = this.state.filteredRestraunts.sort((a, b) => {
        return b.PRating.length - a.PRating.length;
      });
      this.setState({
        filteredRestraunts: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.resturants;
      this.setState({
        filteredRestraunts: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  } //========================================================//


  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "flexthem",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "Filters",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h4", {
          className: "FilterTitle",
          children: "Filters"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label1",
          children: ["Music", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            className: "Checkbox1",
            type: "checkbox",
            id: "Type1",
            onChange: this.onChangeMusic
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label1",
          children: ["Wifi", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            className: "Checkbox2",
            type: "checkbox",
            id: "Type2",
            onChange: this.onChangeWifi
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label1",
          children: ["Partiotion", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            className: "Checkbox3",
            type: "checkbox",
            id: "Type3",
            onChange: this.onChangePartition
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label2",
          children: "Sort by: Price"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label3",
          children: ["Lowest to heighest", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            type: "radio",
            className: "RadioBox",
            id: "Type4",
            onClick: this.onChangePriceRatinglow
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label3",
          children: ["heighest to Lowest", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            type: "radio",
            className: "RadioBox",
            id: "Type5",
            onClick: this.onChangePriceRatinghigh
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "general-card",
        children: this.state.filteredRestraunts.map(CreateCards)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
        className: "noPlaceFound",
        style: {
          display: this.state.noPlaceFound ? 'block' : 'none'
        },
        children: " No place found"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }, this);
  }

}

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "CreateCards");
__webpack_require__.$Refresh$.register(_c2, "Status");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/routes/Sections/Touristic .component.js":
/*!****************************************************************!*\
  !*** ./src/components/routes/Sections/Touristic .component.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Touristic; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../App */ "./src/components/App.jsx");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Card */ "./src/components/Card.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/Mohammed/Desktop/TouriStation/clinet/src/components/routes/Sections/Touristic .component.js";






function CreateCards(touristic) {
  //Handel the Gym, Wifi, Breakfast (to transfer it from bolean form into string)
  let ifFree;
  let ifFrindlyDisability;
  let ifTourGuide;

  if (touristic.Free == true) {
    ifFree = "Free";
  } else {
    ifFree = "Not Free";
  }

  if (touristic.disabilities == true) {
    ifFrindlyDisability = "Disability Friendly";
  } else {
    ifFrindlyDisability = "Disability Unfriendly";
  }

  if (touristic.Tourguide == true) {
    ifTourGuide = "Tour Guide available";
  } else {
    ifTourGuide = "Tour Guide unavailable";
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    theCardId: touristic._id,
    placeName: touristic.Name,
    stars: touristic.Rating,
    PRating: touristic.PRating,
    music: ifFree,
    img: touristic.icon,
    status: Status(touristic.OpenTime, touristic.CloseTime),
    descreption: touristic.Description,
    wifi: ifFrindlyDisability,
    partition: ifTourGuide
  }, touristic._id, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, this);
} // Check if the place is open or closed depending on the work hours


_c = CreateCards;

function Status(Open, Close) {
  const date = new Date();
  var hours = date.getHours();
  const red = 'red';
  const green = 'green';

  if (Open <= hours && hours < Close) {
    return "Open";
  } else {
    return "Close";
  }
}

_c2 = Status;
class Touristic extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  //constructor elemnts in login
  constructor(props) {
    super(props); //intialy no data enterd // the types are the filters for each place such as music wifi etc

    this.state = {
      touristic: [],
      Type1: false,
      Type2: false,
      Type3: false,
      Type4: false,
      Type5: false,
      filteredTouristic: [],
      noPlaceFound: false
    };
    this.onChangeFree = this.onChangeFree.bind(this);
    this.onChangeDisiablity = this.onChangeDisiablity.bind(this);
    this.onChangeTourGuide = this.onChangeTourGuide.bind(this);
    this.onChangePriceRatinglow = this.onChangePriceRatinglow.bind(this);
    this.onChangePriceRatinghigh = this.onChangePriceRatinghigh.bind(this);
  }

  componentDidMount() {
    //Get Resturants data, filteredRestraunts used for filtring and sorting the cards
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:3000/places/sections/touristic').then(resp => {
      console.log(resp);
      this.setState({
        touristic: resp.data,
        filteredTouristic: resp.data
      }); // console.log(this.state.touristic)
      // console.log(this.state.filteredTouristic)
    });
  } //========================================================//
  // Filters


  onChangeFree(e) {
    this.setState({
      Type1: e.target.checked
    });
    console.log(this.state.Type1);
    let copy;

    if (this.state.Type1 === true) {
      copy = this.state.filteredTouristic.filter(Type => {
        return Type.Free === this.state.Type1;
      }); // console.log(copy);

      this.setState({
        filteredTouristic: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.touristic; // console.log(copy);

      this.setState({
        filteredTouristic: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  }

  onChangeDisiablity(e) {
    this.setState({
      Type2: e.target.checked
    });
    console.log(this.state.Type2);
    let copy;

    if (this.state.Type2 === true) {
      copy = this.state.filteredTouristic.filter(Type => {
        return Type.disabilities === this.state.Type2;
      });
      this.setState({
        filteredTouristic: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.touristic;
      this.setState({
        filteredTouristic: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  }

  onChangeTourGuide(e) {
    this.setState({
      Type3: e.target.checked
    });
    console.log(this.state.Type3);
    let copy;

    if (this.state.Type3 === true) {
      copy = this.state.filteredTouristic.filter(Type => {
        return Type.Tourguide === this.state.Type3;
      });
      this.setState({
        filteredTouristic: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.touristic;
      this.setState({
        filteredTouristic: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  } //========================================================//
  // Sort By Price


  onChangePriceRatinglow(e) {
    this.setState({
      Type4: e.target.checked
    });
    console.log(this.state.Type4);
    let copy;

    if (this.state.Type4 === true) {
      copy = this.state.filteredTouristic.sort((a, b) => {
        return a.PRating.length - b.PRating.length;
      });
      this.setState({
        filteredTouristic: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.touristic;
      this.setState({
        filteredTouristic: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  }

  onChangePriceRatinghigh(e) {
    this.setState({
      Type5: e.target.checked
    });
    console.log(this.state.Type5);
    let copy;

    if (this.state.Type5 === true) {
      copy = this.state.filteredTouristic.sort((a, b) => {
        return b.PRating.length - a.PRating.length;
      });
      this.setState({
        filteredTouristic: copy
      });

      if (copy.length === 0) {
        this.setState({
          noPlaceFound: true
        });
      }
    } else {
      copy = this.state.touristic;
      this.setState({
        filteredTouristic: copy
      });
      this.setState({
        noPlaceFound: false
      });
    }
  } //========================================================//


  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "flexthem",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "Filters",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h4", {
          className: "FilterTitle",
          children: "Filters"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label1",
          children: ["Free", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            className: "FreeTour",
            type: "checkbox",
            id: "Type1",
            onChange: this.onChangeFree
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label1",
          children: ["Disiability Friendly", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            className: "DisabilityTour",
            type: "checkbox",
            id: "Type2",
            onChange: this.onChangeDisiablity
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label1",
          children: ["Tour Guide", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            className: "TourGuideTour",
            type: "checkbox",
            id: "Type3",
            onChange: this.onChangeTourGuide
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label2",
          children: "Sort by: Price"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label3",
          children: ["Lowest to heighest", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            type: "radio",
            className: "RadioBox",
            id: "Type4",
            onClick: this.onChangePriceRatinglow
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "Label3",
          children: ["heighest to Lowest", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            type: "radio",
            className: "RadioBox",
            id: "Type5",
            onClick: this.onChangePriceRatinghigh
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "general-card",
        children: this.state.filteredTouristic.map(CreateCards)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
        className: "noPlaceFound",
        style: {
          display: this.state.noPlaceFound ? 'block' : 'none'
        },
        children: " No place found"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 9
    }, this);
  }

}

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "CreateCards");
__webpack_require__.$Refresh$.register(_c2, "Status");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/routes/navbar.component.js":
/*!***************************************************!*\
  !*** ./src/components/routes/navbar.component.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TouriNavbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/Mohammed/Desktop/TouriStation/clinet/src/components/routes/navbar.component.js";





class TouriNavbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.onChangeSearch = this.onChangeSearch.bind(this); //intialy no data enterd

    this.state = {
      icon: '',
      search: ''
    };
  }

  componentDidMount() {
    //Chick if User is loged and store type if true
    //Get User Commen
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://localhost:3000/IsLoged", {
      withCredentials: true
    }).then(res => {
      if (res.data === true) {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:3000/users/profile', {
          withCredentials: true
        }).then(resp => {
          this.setState({
            user: true,
            icon: "http://localhost:3000/" + resp.data.User[2]
          });
        });
      }
    });
  }

  onChangeSearch(e) {
    this.setState({
      search: e.target.value
    });
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
      bg: "dark",
      expand: "lg",
      style: {
        "padding": "0 10px",
        "background-color": "#132c33 !important"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Brand, {
        href: "/",
        children: "TouriStation"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 3
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Toggle, {
        "aria-controls": "basic-navbar-nav"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 3
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Collapse, {
        id: "basic-navbar-nav",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
          className: "mr-auto",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
            href: "/events",
            className: "navbarSections",
            children: "Events"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
            href: "/resturants",
            className: "navbarSections",
            children: "Resturants & caffes"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
            href: "touristic",
            className: "navbarSections",
            children: "Touristic"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
            href: "accommodations",
            className: "navbarSections",
            children: "Accomdation"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
            href: "malls",
            className: "navbarSections",
            children: "Malls"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
            href: "extraservices",
            className: "navbarSections",
            children: "Extra services"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"], {
          inline: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
            type: "text",
            placeholder: "Search",
            className: "mr-sm-2",
            value: this.state.search,
            onChange: this.onChangeSearch
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            variant: "outline-info",
            onClick: () => window.location = "/Search/" + this.state.search,
            children: "Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"].Link, {
          href: "/register",
          style: {
            "display": this.state.user ? "none" : "block",
            "color": "white"
          },
          class: "text-white",
          children: "Register"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 5
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Image"], {
          className: "Imageprofilenav",
          src: this.state.icon,
          style: {
            "display": this.state.user ? "block" : "none"
          },
          onClick: () => window.location = "/profile"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 3
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 1
    }, this);
  }

}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/routes/riyadhhome.jpg":
/*!**********************************************!*\
  !*** ./src/components/routes/riyadhhome.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/riyadhhome.eb0d001a.jpg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ "./src/components/App.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/Mohammed/Desktop/TouriStation/clinet/src/index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 17
}, undefined), document.getElementById("root"));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Mohammed/Desktop/TouriStation/clinet/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/Mohammed/Desktop/TouriStation/clinet/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/Mohammed/Desktop/TouriStation/clinet/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/Mohammed/Desktop/TouriStation/clinet/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map