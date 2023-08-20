"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[78351],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>k});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var d=a.createContext({}),p=function(t){var e=a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=p(r),k=n,c=u["".concat(d,".").concat(k)]||u[k]||s[k]||l;return r?a.createElement(c,o(o({ref:e},m),{},{components:r})):a.createElement(c,o({ref:e},m))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},57694:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={id:"extra_arbs",title:"Extra Arbs",slug:"property-test-extra-arbs.html",sidebar_label:"Extra Arbs"},o=void 0,i={unversionedId:"proptest/extra_arbs",id:"proptest/extra_arbs",title:"Extra Arbs",description:"If you are looking for a collection of Arbs for general purpose data generation,",source:"@site/docs/proptest/extra_arbs.md",sourceDirName:"proptest",slug:"/proptest/property-test-extra-arbs.html",permalink:"/docs/next/proptest/property-test-extra-arbs.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/proptest/extra_arbs.md",tags:[],version:"current",frontMatter:{id:"extra_arbs",title:"Extra Arbs",slug:"property-test-extra-arbs.html",sidebar_label:"Extra Arbs"},sidebar:"proptest",previous:{title:"Kotlinx DateTime",permalink:"/docs/next/proptest/kotlinx-datetime-gens.html"},next:{title:"Reflective Arbs",permalink:"/docs/next/proptest/reflective-arbs.html"}},d={},p=[],m={toc:p};function s(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"If you are looking for a collection of Arbs for general purpose data generation,\nthen Kotest has such a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kotest/kotest-property-arbs"},"collection"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To use, add ",(0,n.kt)("inlineCode",{parentName:"p"},"io.kotest.extensions:kotest-property-arbs:version")," to your build.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://search.maven.org/search?q=g:io.kotest.extensions"},(0,n.kt)("img",{src:"https://img.shields.io/maven-central/v/io.kotest.extensions/kotest-property-arbs?label=latest%20release"}))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arb"),(0,n.kt)("th",{parentName:"tr",align:null},"Details"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.firstName()"),(0,n.kt)("td",{parentName:"tr",align:null},"Produces random english or hispanic first names")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.lastName()"),(0,n.kt)("td",{parentName:"tr",align:null},"Produces random last names based on US census data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.name()"),(0,n.kt)("td",{parentName:"tr",align:null},"Produces random first and last names")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.stockExchanges()"),(0,n.kt)("td",{parentName:"tr",align:null},"Produces random stock exchanges, eg ",(0,n.kt)("inlineCode",{parentName:"td"},"New York Stock Exchange / NYSE / US"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.domain()"),(0,n.kt)("td",{parentName:"tr",align:null},"Produces random domain names, eg ",(0,n.kt)("inlineCode",{parentName:"td"},"www.wibble.co.uk"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.country()"),(0,n.kt)("td",{parentName:"tr",align:null},"Produces random country objects, eg ",(0,n.kt)("inlineCode",{parentName:"td"},"Botswana / BW / Africa"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.continent()"),(0,n.kt)("td",{parentName:"tr",align:null},"Produces random continents from the list of seven")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.zipcode()"),(0,n.kt)("td",{parentName:"tr",align:null},"Random zipcodes from 01000 to 99999, without validating they are exant")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.harryPotterCharacter()"),(0,n.kt)("td",{parentName:"tr",align:null},"Produces random first and last names from the Harry Potter series")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.color()"),(0,n.kt)("td",{parentName:"tr",align:null},"Produces random named colours, eg, midnight blue")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.brand()"),(0,n.kt)("td",{parentName:"tr",align:null},"Produces random brand names, eg Betty Crocker")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.products()"),(0,n.kt)("td",{parentName:"tr",align:null},"Produces random google product categories, eg ",(0,n.kt)("inlineCode",{parentName:"td"},"Furniture > Office Furniture > Desks"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.vineyards()"),(0,n.kt)("td",{parentName:"tr",align:null},"Produces random vineyard names, eg ",(0,n.kt)("inlineCode",{parentName:"td"},"Ch\xe2teau Montus Prestige"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.wineRegions()"),(0,n.kt)("td",{parentName:"tr",align:null},"Produces a random wine region, eg ",(0,n.kt)("inlineCode",{parentName:"td"},"Chassagne-Montrachet"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.wines()"),(0,n.kt)("td",{parentName:"tr",align:null},"Combines several wine details producers to return full wine objects")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.wineReviews()"),(0,n.kt)("td",{parentName:"tr",align:null},"Combines wine producer and adds in random review scores and usernames")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.iceCreamFlavors()"),(0,n.kt)("td",{parentName:"tr",align:null},"Random ice cream flavors such as ",(0,n.kt)("inlineCode",{parentName:"td"},"Pistachio")," or ",(0,n.kt)("inlineCode",{parentName:"td"},"Grape Escape"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.iceCreams()"),(0,n.kt)("td",{parentName:"tr",align:null},"Random ice cream servings with one or more flavors, cone type and size")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.tubeStation()"),(0,n.kt)("td",{parentName:"tr",align:null},"Produces randomly selected London underground tube stations")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.tubeJourney()"),(0,n.kt)("td",{parentName:"tr",align:null},"Generates random journeys from a randomly selected start and end underground station")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.airport()"),(0,n.kt)("td",{parentName:"tr",align:null},"Random real world airport with IATA code")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.airline()"),(0,n.kt)("td",{parentName:"tr",align:null},"Random real world airline")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.airJourney()"),(0,n.kt)("td",{parentName:"tr",align:null},"Random airtrips between two airports with an airline and times")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.cluedoSuspects()"),(0,n.kt)("td",{parentName:"tr",align:null},"Clue/Cluedo suspects, eg ",(0,n.kt)("inlineCode",{parentName:"td"},"Professor Plum"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.cluedoWeapons()"),(0,n.kt)("td",{parentName:"tr",align:null},"Clue/Cluedo weapons, eg ",(0,n.kt)("inlineCode",{parentName:"td"},"Lead piping"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.cluedoLocations()"),(0,n.kt)("td",{parentName:"tr",align:null},"Clue/Cluedo locations, eg ",(0,n.kt)("inlineCode",{parentName:"td"},"Ballroom"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.cluedoAccusation()"),(0,n.kt)("td",{parentName:"tr",align:null},"Clue/Cluedo accusations, eg, ",(0,n.kt)("inlineCode",{parentName:"td"},"Mrs White / Billiards Room / Rope"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.monopolyProperty()"),(0,n.kt)("td",{parentName:"tr",align:null},"Random (US version) monopoly property with rent, price and color")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.chessPiece()"),(0,n.kt)("td",{parentName:"tr",align:null},"Chess piece with points")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.chessSquare()"),(0,n.kt)("td",{parentName:"tr",align:null},"Chesss square with file A-H and rank 1-8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.chessMove()"),(0,n.kt)("td",{parentName:"tr",align:null},"Chess move from square to square with captured piece if any. No validation is performed to check the move is legal.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.transactions()"),(0,n.kt)("td",{parentName:"tr",align:null},"Transactions with a card number, card type, amount and transaction type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arb.cars()"),(0,n.kt)("td",{parentName:"tr",align:null},"Random car manufacturers")))))}s.isMDXComponent=!0}}]);