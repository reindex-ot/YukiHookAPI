import{_ as a,r as n,o as s,c as i,b as o,d,a as t,e}from"./app.7900f22c.js";const c={},u=t('<h1 id="looking-for-future" tabindex="-1"><a class="header-anchor" href="#looking-for-future" aria-hidden="true">#</a> Looking for Future</h1><blockquote><p>The future is bright and uncertain, let us look forward to the future development space of <code>YukiHookAPI</code>.</p></blockquote><h2 id="unresolved-issues" tabindex="-1"><a class="header-anchor" href="#unresolved-issues" aria-hidden="true">#</a> Unresolved Issues</h2><blockquote><p>Here are the unresolved issues with <code>YukiHookAPI</code>.</p></blockquote><h3 id="yukihookmoduleprefs" tabindex="-1"><a class="header-anchor" href="#yukihookmoduleprefs" aria-hidden="true">#</a> YukiHookModulePrefs</h3><p>Currently only supports LSPosed perfectly, other Xposed Framework need to downgrade the module target api.</p><p>TaiChi may not be supported at all, and TaiChi needs a lower target api to adapt on high-version systems.</p><p>Some Xposed Module developers currently choose the Hook target app self&#39;s SharedPreferences storage solution to solve the module settings sharing problem.</p><p>In the later period, the permissions of the Android system will become more and more strict, and <code>selinux</code> is a big problem currently facing, which needs to be discussed and studied.</p><h2 id="future-plans" tabindex="-1"><a class="header-anchor" href="#future-plans" aria-hidden="true">#</a> Future Plans</h2><blockquote><p>Features that <code>YukiHookAPI</code> may add later are included here.</p></blockquote><h3 id="lite-version-supported-for-standalone-use" tabindex="-1"><a class="header-anchor" href="#lite-version-supported-for-standalone-use" aria-hidden="true">#</a> Lite Version Supported for Standalone Use</h3><p>If you like the Reflection API of <code>YukiHookAPI</code>, but your project may not need related Hook functions.</p><p>Well here is some good news for you:</p>',14),l=e("The core Reflection API of "),h=o("code",null,"YukiHookAPI",-1),p=e(" has been decoupled into "),f={href:"https://github.com/fankes/YukiReflection",target:"_blank",rel:"noopener noreferrer"},m=e("YukiReflection"),k=e(" project, which can now be used in any Android project."),b=t('<div class="custom-container tip"><p class="custom-container-title">To be Discussed</p><p>At present, the API only supports binding to <strong>xposed_init</strong> through the automatic builder.</p><p>If you don&#39;t like the automatic builder, you must implement the module loading entry yourself.</p><p>In the future, the Lite version with only API functions will be launched according to the number of people required.</p><p>You can submit <strong>issues</strong> with us.</p></div><p>We have provided the Xposed native API listening interface, you can find or view the implementation method of the Demo <a href="../config/xposed-using#native-xposed-api-events">here</a>.</p><h3 id="support-for-more-hook-framework" tabindex="-1"><a class="header-anchor" href="#support-for-more-hook-framework" aria-hidden="true">#</a> Support for More Hook Framework</h3><p>As an API, currently only docking <code>XposedBridge</code> as a compatibility layer still has certain limitations.</p><p>Most <code>inline hook</code> do not have a <code>Java</code> compatibility layer, and the <code>Java</code> compatibility layer adaptation of <code>native hook</code> may be considered later.</p>',5);function y(_,g){const r=n("ExternalLinkIcon");return s(),i("div",null,[u,o("p",null,[l,h,p,o("a",f,[m,d(r)]),k]),b])}const I=a(c,[["render",y],["__file","future.html.vue"]]);export{I as default};
