(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(272)}])},5677:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{noSSR:function(){return s},default:function(){return o}});let n=i(8754),a=(i(7294),n._(i(8976)));function r(e){return{default:(null==e?void 0:e.default)||e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}function o(e,t){let i=a.default,n={loading:e=>{let{error:t,isLoading:i,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e}),n={...n,...t};let o=n.loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?i({...n,loader:()=>null!=o?o().then(r):Promise.resolve(r(()=>null))}):(delete n.webpack,delete n.modules,s(i,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return r}});let n=i(8754),a=n._(i(7294)),r=a.default.createContext(null)},8976:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return p}});let n=i(8754),a=n._(i(7294)),r=i(2254),s=[],o=[],d=!1;function c(e){let t=e(),i={loading:!0,loaded:null,error:null};return i.promise=t.then(e=>(i.loading=!1,i.loaded=e,e)).catch(e=>{throw i.loading=!1,i.error=e,e}),i}class l{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function h(e){return function(e,t){let i=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function s(){if(!n){let t=new l(e,i);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!d){let e=i.webpack?i.webpack():i.modules;e&&o.push(t=>{for(let i of e)if(t.includes(i))return s()})}function c(e,t){!function(){s();let e=a.default.useContext(r.LoadableContext);e&&Array.isArray(i.modules)&&i.modules.forEach(t=>{e(t)})}();let o=a.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return a.default.useImperativeHandle(t,()=>({retry:n.retry}),[]),a.default.useMemo(()=>{var t;return o.loading||o.error?a.default.createElement(i.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:n.retry}):o.loaded?a.default.createElement((t=o.loaded)&&t.default?t.default:t,e):null},[e,o])}return c.preload=()=>s(),c.displayName="LoadableComponent",a.default.forwardRef(c)}(c,e)}function u(e,t){let i=[];for(;e.length;){let n=e.pop();i.push(n(t))}return Promise.all(i).then(()=>{if(e.length)return u(e,t)})}h.preloadAll=()=>new Promise((e,t)=>{u(s).then(e,t)}),h.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let i=()=>(d=!0,t());u(o,e).then(i,i)})),window.__NEXT_PRELOADREADY=h.preloadReady;let p=h},272:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return c}});var n=i(5893);i(7294);var a=i(5152),r=i.n(a),s=e=>{let{children:t,id:i}=e;return(0,n.jsx)("div",{id:i,className:"generic-page",children:t})};let o=r()(()=>Promise.all([i.e(251),i.e(105),i.e(127)]).then(i.bind(i,5007)),{loadableGenerated:{webpack:()=>[5007]},ssr:!1}),d=r()(()=>i.e(904).then(i.bind(i,5904)),{loadableGenerated:{webpack:()=>[5904]},ssr:!1});function c(){return(0,n.jsxs)(d,{children:[(0,n.jsxs)("div",{className:"inner-anchors",children:[(0,n.jsx)("h2",{children:"PaperPrison RJA Tool"}),(0,n.jsxs)("div",{className:"sub-nav-wrapper",children:[(0,n.jsx)("a",{href:"?#tool",children:"The Tool"}),(0,n.jsx)("a",{href:"?#about-the-tool",children:"About the Tool"}),(0,n.jsx)("a",{href:"?#about-the-data",children:"About the Data"}),(0,n.jsx)("a",{href:"?#methodology",children:"Methodology"}),(0,n.jsx)("a",{href:"?#acknowledgements",children:"Acknowledgments"}),(0,n.jsx)("a",{href:"?#about-the-initiative",children:"About the Initiative"})]})]}),(0,n.jsx)(o,{}),(0,n.jsxs)(s,{id:"about-the-tool",children:[(0,n.jsx)("h2",{children:"About the Tool"}),(0,n.jsxs)("p",{children:["This tool provides a way to explore racial disparities in support of the California Racial Justice Act (CRJA) (California Penal Code (CPC) section 745). Enacted in 2020 and amended in 2022, the CRJA provides a mechanism for defendants (and the convicted) in a particular county to challenge a charge, conviction, or sentence if it is sought or obtained in a racially disparate manner. Throughout the CRJA, racial disparities also encompass ethnicity and national origin."," "]}),(0,n.jsx)("p",{children:"The CRJA specifically addresses four types of conduct. The first two forms focus on the particulars of the case at hand: first, the exhibition of bias or animus towards the defendant by the state, a witness, or juror, and, second, the use of discriminatory language about or exhibition of bias or animus towards the defendant in court (unless quoting another person). The third and fourth forms of conduct, which concern charging and sentencing, require “evidence that the prosecution more frequently sought or obtained” harsher charging, conviction, or sentencing outcomes against people who are of the same race as the defendant. This tool focuses on the latter two forms of conduct."}),(0,n.jsxs)("p",{children:["To make a “pattern of disparity” claim under the CRJA requires two showings. First, in relevant part, CPC section 745(a)(3) states that, in the charging or conviction context, the defendant must be “charged or convicted of a more serious offense than defendants of other races, ethnicities, or national origins who have engaged in similar conduct and are similarly situated.” Second, CPC section 745(a)(3) further provides that “the evidence [must] establish[] that the prosecution more frequently sought or obtained convictions for more serious offenses against people who share the defendant’s race, ethnicity, or national origin in the county where the convictions were sought or obtained.” Similarly, in the context of sentencing, CPC section 745(a)(4) states that a defendant must first show that “a longer or more severe sentence was imposed on the defendant than was imposed on other similarly situated individuals convicted of the same offense,” then show either that “longer or more severe sentences were more frequently imposed for that offense on people that share the defendant’s race, ethnicity, or national origin than on defendants of other races, ethnicities, or national origins in the county where the sentence was imposed” or that “longer or more severe sentences were more frequently imposed for the same offense on defendants in cases with victims of one race, ethnicity, or national origin than in cases with victims of other races, ethnicities, or national origins, in the county where the sentence was imposed.”"," "]}),(0,n.jsx)("p",{children:'CPC section 745(c)(1) provides that “[i]f a motion is filed in the trial court and the defendant makes a prima facie showing of a violation of subdivision (a), the trial court shall hold a hearing.” Furthermore, “evidence may be presented by either party [at the hearing], including, but not limited to, statistical evidence, aggregate data, expert testimony, and the sworn testimony of witnesses.” CPC section 745(d) states that data may be sought for good cause. According to CPC section 745(h)(1), “more frequently sought or obtained” or “more frequently imposed” means that "the totality of the evidence demonstrates a significant difference in seeking or obtaining convictions or in imposing sentences comparing individuals who have engaged in similar conduct and are similarly situated, and the prosecution cannot establish race-neutral reasons for the disparity. . . Statistical significance is a factor the court may consider, but is not necessary to establish a significant difference. ”'}),(0,n.jsx)("p",{children:"This tool is intended to help you access and analyze criminal justice data and identify potential racial disparities for counties across California and the state as a whole. Please reach out to us with any questions or potential errors you spot by emailing paperprisons@gmail.com. Your feedback will help us improve the tool. Thank you."})]}),(0,n.jsxs)(s,{id:"about-the-data",children:[(0,n.jsx)("h2",{children:"About the Data"}),(0,n.jsxs)("p",{children:["The source for data on this site is a comprehensive dataset of all arrests, charges, convictions, and sentences in California (Criminal Offender Record Information (CORI)), available to researchers through the California Department of Justice Automated Criminal History System (ACHS) through a data sharing agreement. The Paper Prison Initiative requested these data through public records act requests. Our records were downloaded between 9/23/2021 and 9/29/2021; the data we present therefore ranges from 2010 through most of 2021.",(0,n.jsx)("b",{children:"*"})," Among its known disadvantages are that it does not include information on legal representation, plea-bargaining, or the conditions of the arrest (such as whether or not a weapon was present) which might legitimately be taken into account by the prosecution in deciding to characterize a crime as a felony or misdemeanor. Two additional shortcomings of our database are that it does not include juvenile records or out-of-state records. Errors in underlying data are due to reporting errors and/or fundamental limitations to the Automated Criminal History System set up and maintained by CA DOJ."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"*"}),"2020 and 2021 rates per population are adjusted upward to account for apparent undercount in those years. The adjustment factor is to take the count of incidents and inflate it by a factor of mean_total#incidents(2015-2019)/total#incidents(2020 or 2021)."]})]}),(0,n.jsxs)(s,{id:"methodology",children:[(0,n.jsx)("h2",{children:"Methodology"}),(0,n.jsx)("p",{children:'On the "Paper Prison Initiative Tool" page, you can customize the data in various ways. This methodology section presents important information about the data provided throughout this website and how you can use them for your own analysis.'}),(0,n.jsx)("h3",{children:"Customization"}),(0,n.jsx)("p",{children:"You can customize the data provided by year, counties, event points, measurement, and offenses. Data you see will depend upon your customization for each category."}),(0,n.jsx)("p",{children:"The tool allows you to walk through the offenses’ different stages and observe how they play out throughout the event points."}),(0,n.jsx)("h3",{children:"Offense Data"}),(0,n.jsx)("p",{children:"By default, you will see data about all offenses at the selected event point(s). For this first release, offense data includes the top twenty criminal offenses (see list below). The criminal offense data is limited to the top twenty offenses because the number of all offenses is large, with very small sample sizes for many offenses, especially at the county-specific level. Each Penal Code subsection is treated as a distinct offense. Some common offenses are for probation violations (e.g., Penal Code section 1203.2), and their only corresponding event point is arrest. For any given incident, the offense charged at court and disposition may be different from the offense charged at arrest. So, the probability of a particular outcome conditional on the prior event point may reflect imprecision going from arrest to court event."}),(0,n.jsxs)("table",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"PC_code section"}),(0,n.jsx)("td",{children:"PC_offense"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"459"}),(0,n.jsx)("td",{children:"459 PC-BURGLARY"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"148(a)(1)"}),(0,n.jsx)("td",{children:"148(A)(1) PC-OBSTRUCT/ETC PUBLIC OFFICER/ETC"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"273.5(a)"}),(0,n.jsx)("td",{children:"273.5(A) PC-INFL CRPL INJ:SPOUSE/COHAB/DATE"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"243(e)(1)"}),(0,n.jsx)("td",{children:"243(E)(1) PC-BAT:SPOUSE/EX SP/DATE/ETC"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"647(f)"}),(0,n.jsx)("td",{children:"647(F) PC-DISORDERLY CONDUCT:UNDER INFL DRUG"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"3056"}),(0,n.jsx)("td",{children:"3056 PC-VIOLATION OF PAROLE:FELONY"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"484(a)"}),(0,n.jsx)("td",{children:"484(A) PC-THEFT"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"496(a)"}),(0,n.jsx)("td",{children:"496(A) PC-RECEIVE/ETC KNOWN STOLEN PROPERTY"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"1203.2"}),(0,n.jsx)("td",{children:"1203.2 PC-PROBATION VIOL:REARREST/REVOKE"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"245(a)(1)"}),(0,n.jsx)("td",{children:"245(A)(1) PC-ASSAULT W/DEADLY WEAPON:NOT F/ARM"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"853.7"}),(0,n.jsx)("td",{children:"853.7 PC-FAIL TO APPEAR AFTER WRITTEN PROMISE"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"242"}),(0,n.jsx)("td",{children:"242 PC-BATTERY"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"211"}),(0,n.jsx)("td",{children:"211 PC-ROBBERY"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"422"}),(0,n.jsx)("td",{children:"422 PC-THREATEN CRIME WITH INTENT TO TERRORIZE"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"3455"}),(0,n.jsx)("td",{children:"3455 PC-POST RELEASE COMMUNITY SUPV VIOLATION"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"487(a)"}),(0,n.jsx)("td",{children:"487(A) PC-GRAND THEFT:MONEY/LABOR/PROP"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"148.9(a)"}),(0,n.jsx)("td",{children:"148.9(A) PC-FALSE ID TO SPECIFIC PEACE OFICERS"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"273.6(a)"}),(0,n.jsx)("td",{children:"273.6(A) PC-VIO CRT ORD TO PREVNT DOMESTC VIOL"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"182(a)(1)"}),(0,n.jsx)("td",{children:"182(A)(1) PC-CONSPIRACY:COMMIT CRIME"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"1203.2(a)"}),(0,n.jsx)("td",{children:"1203.2(A) PC-PROBATION VIOL:REARREST/REVOKE"})]})]}),(0,n.jsx)("p",{children:"Wobblers account for just under a third of the penal-code dispositions in our criminal records data. Wobbler charging (misdemeanor vs. felony) is a discrete moment of discretion that could reveal racial disparities for similarly situated individuals. For example, you can use the tool to compare the rate at which wobblers are charged as a felony for minority (Black or Hispanic) defendants vs. Whites."}),(0,n.jsx)("h3",{children:"Racial Disparity Gaps"}),(0,n.jsx)("p",{children:"System-generated data, such as databases of criminal records that include racial identifiers, offer the potential to bring large amounts of quantitative evidence to bear on questions of racial disparities at various points in the criminal justice process. Racial disparities in arrest rates, charging, convictions, and sentencing can be quantified and organized by specific offense and for individuals with comparable criminal histories, county by county. Such comparisons might be thought to provide comparisons of similarly situated individuals engaged in similar conduct, and we leverage some carefully designed comparisons of this nature in our cases."}),(0,n.jsxs)("p",{children:["To quantify disparities across racial and ethnic groups, the tool provides calculations of the racial gap relative to White non-Hispanic individuals. The racial gap can be considered the relative chances that a person of the given race experiences a certain outcome or decision, relative to the chances of a non-Hispanic White adult, given underlying populations. For example, suppose that in a particular county, 2 Black adults experience felony convictions per 100 Black adults in the population, whereas only 1 per 100 White non-Hispanic adults experience the same felony conviction. Then the disparity gap for Black relative to White is 2/1 = 2."," "]}),(0,n.jsx)("h3",{children:"Event Points"}),(0,n.jsx)("p",{children:"The event points provide a different lens on the issue of disparity gap because the comparison of disparities at each step in the criminal justice process is conditional on the step that preceded it."}),(0,n.jsx)("p",{children:"For instance, the event point “Court” means that certain actions (i.e., a person was charged) took place at the court level."}),(0,n.jsx)("p",{children:"Because each step represents a event point where discretion is exercised, the steps reveal disparities in outcomes for individuals who arguably are more similarly situated, in the specific sense of having gotten to that stage in the process. You can select event points to view the rate at which each race experiences the indicated step in the process, conditional on reaching the step that precedes it, from arrest to court decision, conviction, and sentence. The conditional racial gap shows the relative chances that a person of the given race experiences a certain outcome or decision, relative to the chances of a non-Hispanic White adult, given that they have reached a specific event point. For example, suppose that in a particular county, of 100 Black adults charged with a specific offense in court, 50 are convicted, whereas 40 per 100 White non-Hispanic adults charged with the same offense are convicted. Then the disparity gap for Black relative to White is 50/40 = 1.25."}),(0,n.jsx)("h3",{children:"Measurements"}),(0,n.jsx)("p",{children:"You can select five different metrics to view data on this site: raw numbers, rate per population, rate per prior event point, disparity gap per population, and disparity gap per prior event point. Aspects of the data are described below."}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"Raw numbers"})," means the actual number of persons in that category."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"Rates and disparity gaps per population"})," are calculated using population data from the American Community Survey (ACS), which is a large national survey run by the U.S. Census. All of our population estimates for different ethnicities use the 5-year ACS sample for the combined period 2016-2020. ACS summary tables were accessed through the Census Bureau API interface (see ",(0,n.jsx)("a",{href:"https://www.census.gov/programs-surveys/acs/data/data-via-api.html",children:" https://www.census.gov/programs-surveys/acs/data/data-via-api.html"}),"), using the R package tidycensus (see ",(0,n.jsx)("a",{href:"https://walker-data.com/tidycensus/",children:"https://walker-data.com/tidycensus/"}),")."]}),(0,n.jsxs)("table",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Data Notes"}),(0,n.jsx)("td",{children:"Description"}),(0,n.jsx)("td",{children:"Notes"}),(0,n.jsx)("td",{children:"Dimension"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"PC_code"}),(0,n.jsx)("td",{children:"Penal Code section and subsection (top 20 PC offenses)"}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Offenses"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"PC_offense"}),(0,n.jsx)("td",{children:"Offense description in for this PC code in CORI data"}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Offenses"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"race"}),(0,n.jsx)("td",{children:"Race: Only AAPI, Black, Hispanic, and White (non-Hispanic)"}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Race"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"year"}),(0,n.jsx)("td",{children:"2010-2021: the span of records used here"}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Year"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"decision"}),(0,n.jsx)("td",{children:"The event point: arrest, court decision, conviction, felony conviction, prison sentence"}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"Event Points"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"previous_decision"}),(0,n.jsx)("td",{children:"The previous step, which is the number in the denominator of conditional rates"}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:"[new]"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"number"}),(0,n.jsx)("td",{children:"Number of decisions (at incident level)"}),(0,n.jsx)("td",{children:"Number of incidents with that decision"}),(0,n.jsx)("td",{children:"Raw numbers"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"rate_per_100_pop"}),(0,n.jsx)("td",{children:"Number of decisions / county population (race-specific)"}),(0,n.jsx)("td",{children:"Number of incidents per 100 population"}),(0,n.jsx)("td",{children:"Rate per population"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"disparity_gap_pop_w"}),(0,n.jsx)("td",{children:"Representation ratio relative to whites = rate_per_100_pop / rate_per_100_pop (white)"}),(0,n.jsx)("td",{children:"Ratio: 1.00 means parity with whites"}),(0,n.jsx)("td",{children:"Disparity gap per population"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"rate_cond_previous"}),(0,n.jsx)("td",{children:"Rate of this decision conditional on previous step = Number of this decision / number of previous step decision"}),(0,n.jsx)("td",{children:"Percent"}),(0,n.jsx)("td",{children:"Rate per prior event point"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"disparity_gap_cond_w"}),(0,n.jsx)("td",{children:"Relative risk of conditional decision, relative to whites = rate_cond_previous / rate_cond_previous (white)"}),(0,n.jsx)("td",{children:"Ratio: 1.00 means parity with whites"}),(0,n.jsx)("td",{children:"Disparity gap per prior event point"})]})]}),(0,n.jsx)("p",{children:"Definitions of key metrics:"}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"Rate per population measures"})," the rate at which a given event or decision occurs for a selected racial or ethnic group, relative to that group’s population in the county. Specifically, it is the number of criminal justice decisions of the requested type for the requested ethnic group during the requested year, per 100 individuals of that group in the county population. For example, for arrests on the charge of burglary (PC 459), if 350 Hispanic individuals had been arrested in county X on a charge of PC 459 during the year in question, and the Hispanic population of the county was 100,000, the rate per population would be 350/1000 = 0.35 per 100 population."," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"Rate per prior event point"})," measures the rate at which a given event or decision occurs for a selected racial or ethnic group, relative to the number of people in that group at risk of that event. Specifically, it is the number of criminal justice decisions of the requested type for the requested ethnic group during the requested year, divided by the number of individuals of that group who had reached the immediately prior step or event point in the criminal justice process and were thus “at risk” of this decision. For example, suppose 100 Hispanic individuals in a particular county and year were charged in court with burglary (PC 459), and 60 were convicted of burglary. Then the rate of conviction per prior event point (charge in court) would be 60/100 = 0.6 or 60%."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"Disparity gap per population"})," compares the rate per population of a given racial/ethnic group with that of non-Hispanic White individuals. The racial gap can be considered the relative chance that a person of the given race experiences a certain outcome or decision, relative to the chances of a non-Hispanic White adult, given underlying populations. For example, suppose that in a particular county in a particular year, 2 Black adults experienced felony convictions for burglary for every 100 Black adults in the population, whereas only 1 per 100 non-Hispanic White adults experienced a felony conviction for burglary. Then the disparity gap for Black relative to White is 2/1 = 2."," "]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"Disparity gap per prior event point"})," compares the rate per prior event point of a given racial/ethnic group with that of non-Hispanic White individuals. It shows the relative chances that a person of the given race experiences a certain outcome or decision, relative to the chances of a non-Hispanic White adult, given that they have reached a specific prior event point. For example, suppose that in a particular county in a particular year, of 100 Black adults charged with burglary in court, 50 are convicted, whereas 40 per 100 White non-Hispanic adults charged with the same offense are convicted. Then the disparity gap for Black relative to White is 50/40 = 1.25."]}),(0,n.jsx)("h3",{children:"Confidentiality Protections"}),(0,n.jsx)("p",{children:'Due to confidentiality concerns, our website does not display data for counties in which the population for a specific studied racial/ethnic group is 10 or fewer for the year being viewed. County data that are hidden when individual counties are selected will always be shown within statewide totals, as well as when multiple counties are selected and confidentiality is not at risk. Our charts and tables will show gaps and/or "N/A" when data are not available.'})]}),(0,n.jsxs)(s,{id:"acknowledgements",children:[(0,n.jsx)("h2",{children:"Acknowledgement"}),(0,n.jsxs)("p",{children:["The styling of this website was inspired by the"," ",(0,n.jsx)("a",{href:"https://californiadata.burnsinstitute.org/about",children:"California State of Disparities"})," website, a data project of the the"," ",(0,n.jsx)("a",{href:"https://californiadata.burnsinstitute.org/explore/counts#y=2018&c=1-58&o=1-60&d=1,7,15,17&a=5-24&g=f,m&e=a,b,l,n,w&m=dg",children:"Burns Institute"}),", whom we thank."]}),(0,n.jsx)("p",{children:"This tool is the creation of Colleen Chien, Bill Sundstrom, Yabo Du, and Nathan Hoffman. Contributors include Arthi Kundadka, Navid Shaghaghi, Yangxier Sui, and Lukas Pinkston and Paper Prisons web and tools team advisor Navid Shaghaghi."}),(0,n.jsxs)("p",{children:["For more information about the RJA, please see:",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["Proving Actionable Racial Disparity Under the California Racial Justice Act (exploring the disparities standard of the RJA and how to apply it)",(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4392014",children:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4392014"})]}),(0,n.jsxs)("li",{children:["Paper Prisons’ Testimony at California Penal Committee Hearing on CA Racial Justice Act",(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"https://paperprisons.org/news/2023/04/20/paper-prisons-testimony-at-california-penal-committee-hearing-on-ca-racial-justice-act/",children:"https://paperprisons.org/news/2023/04/20/paper-prisons-testimony-at-california-penal-committee-hearing-on-ca-racial-justice-act/"})]})]})]})]}),(0,n.jsxs)(s,{id:"about-the-initiative",children:[(0,n.jsx)("h2",{children:"About the Initiative"}),(0,n.jsx)("p",{children:"The Paper Prisons Initiative (paperprisons.org) is a multi-disciplinary research initiative focused on documenting and narrowing the “second chance gap” between eligibility for relief from the criminal justice system and its delivery due to hurdles in access to relevant information and data. The paper that describes the concept of the “second chance gap” is Colleen V. Chien, “America’s Paper Prisons: The Second Chance Gap,”119 Mich. L. Rev. 519 (2020)"})]})]})}},5152:function(e,t,i){e.exports=i(5677)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);