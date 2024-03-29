<!DOCTYPE html><html lang="en"><head><meta charSet="utf-8"/><meta http-equiv="X-UA-Compatible" content="IE=edge"/><title>Day.js · 2kB JavaScript date utility library</title><meta name="viewport" content="width=device-width"/><meta name="generator" content="Docusaurus"/><meta name="description" content="2kB JavaScript date utility library"/><meta name="docsearch:language" content="en"/><meta property="og:title" content="Day.js · 2kB JavaScript date utility library"/><meta property="og:type" content="website"/><meta property="og:url" content="https://day.js.org/"/><meta property="og:description" content="2kB JavaScript date utility library"/><meta name="twitter:card" content="summary"/><link rel="shortcut icon" href="/img/favicon.ico"/><link rel="stylesheet" href="https://cdn.jsdelivr.net/docsearch.js/1/docsearch.min.css"/><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/highlight.js@9.12.0/styles/default.min.css"/><script>
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

              ga('create', 'UA-157297013-1', 'auto');
              ga('send', 'pageview');
            </script><script src="/js/scrollSpy.js"></script><link rel="stylesheet" href="/css/main.css"/><script src="/js/codetabs.js"></script></head><body><div class="fixedHeaderContainer"><div class="headerWrapper wrapper"><header><a href="/en"><img class="logo" src="/img/logo.png" alt="Day.js"/><h2 class="headerTitleWithLogo">Day.js</h2></a><div class="navigationWrapper navigationSlider"><nav class="slidingNav"><ul class="nav-site nav-site-internal"><li class="navSearchWrapper reactNavSearchWrapper"><input type="text" id="search_input_react" placeholder="Search" title="Search"/></li><li class=""><a href="/docs/en/installation/installation" target="_self">Docs</a></li><li class=""><a href="https://github.com/iamkun/dayjs/" target="_self">GitHub</a></li><span><li><a id="languages-menu" href="#"><img class="languages-icon" src="/img/language.svg" alt="Languages icon"/>English</a><div id="languages-dropdown" class="hide"><ul id="languages-dropdown-items"><li><a href="/zh-CN">中文</a></li><li><a href="/ru">Русский</a></li><li><a href="https://crowdin.com/project/dayjs" target="_blank" rel="noreferrer noopener">Help Translate</a></li></ul></div></li><script>
        const languagesMenuItem = document.getElementById("languages-menu");
        const languagesDropDown = document.getElementById("languages-dropdown");
        languagesMenuItem.addEventListener("click", function(event) {
          event.preventDefault();

          if (languagesDropDown.className == "hide") {
            languagesDropDown.className = "visible";
          } else {
            languagesDropDown.className = "hide";
          }
        });
      </script></span></ul></nav></div></header></div></div><div class="navPusher"><div class="hero is-medium dayjs-home-banner"><div class="container wrapper"><h1 class="title is-1 banner-title">Day.js</h1><h2 class="subtitle has-text-weight-semibold banner-subtitle">Fast 2kB alternative to Moment.js with the same modern API</h2><div class="pluginWrapper buttonWrapper"><a class="button" href="/docs/en/installation/installation">Get Started</a></div></div></div><div class="dayjs-home-intro"><div class="container wrapper"><div class="columns is-multiline"><div class="column is-full"><h2 class="title is-2 intro-header">Why Day.js?</h2></div><div class="column is-half intro-column"><h3 class="title is-3 intro-title">2kB</h3><p class="content is-medium has-text-weight-semibold intro-content">Less JavaScript to download, parse and execute, leaving more time for your code.</p></div><div class="column is-half intro-column"><h3 class="title is-3 intro-title">Simple</h3><p class="content is-medium has-text-weight-semibold intro-content">Day.js is a minimalist JavaScript library that parses, validates, manipulates, and displays dates and times for modern browsers with a largely Moment.js-compatible API.</p><p>If you use Moment.js, you already know how to use Day.js.</p></div><div class="column is-half intro-column"><h3 class="title is-3 intro-title">Immutable</h3><p class="content is-medium has-text-weight-semibold intro-content">All API operations that change the Day.js object will return a new instance instead.</p><p>This helps prevent bugs and avoid long debugging sessions.</p></div><div class="column is-half intro-column"><h3 class="title is-3 intro-title">I18n</h3><p class="content is-medium has-text-weight-semibold intro-content">Day.js has great support for internationalization. But none of them will be included in your build unless you use them.</p></div></div></div><div class="index_sponsors"><div class="title">Special Sponsors</div><div class="list"><a href="https://toyokumo.co.jp" target="_blank"><img src="https://user-images.githubusercontent.com/17680888/197092231-2367b5eb-1e43-467e-a311-23f7cd97b086.png"/></a><a href="https://github.com/ken-swyfft" target="_blank"><img src="https://avatars.githubusercontent.com/u/65305317?s=52&amp;v=4"/></a><a href="https://github.com/alan-eu" target="_blank"><img src="https://avatars.githubusercontent.com/u/18175329?s=52&amp;v=4"/></a><a href="https://opencollective.com/sight-and-sound-ministries" target="_blank"><img src="https://user-images.githubusercontent.com/17680888/232316426-cb99b4cf-0ccb-4e73-a6ce-e16dba6aadf4.png"/></a><a href="https://www.exoflare.com/open-source/?utm_source=dayjs&amp;utm_campaign=open_source" target="_blank"><img src="https://user-images.githubusercontent.com/17680888/162761622-1407a849-0c41-4591-8aa9-f98114ec2092.png"/></a><a href="https://rxdb.info/?utm_source=day.js.org&amp;utm_medium=banner&amp;utm_campaign=day.js.org-sponsored" target="_blank"><img src="https://user-images.githubusercontent.com/17680888/200301812-9c9bd523-5dc4-4cab-b380-543fbcd3802c.svg"/></a><a href="https://chudovo.com/front-end-development/ " target="_blank"><img src="https://day.js.org/img/sponsors/chudovo.svg"/></a><a href="https://github.com/vendure-ecommerce" target="_blank"><img src="https://avatars.githubusercontent.com/u/39629390?s=52&amp;v=4"/></a><a href="https://opencollective.com/anonstories" target="_blank"><img src="https://images.opencollective.com/anonstories/7e826c0/avatar/256.png"/></a><a href="https://opencollective.com/datawrapper" target="_blank"><img src="https://images.opencollective.com/datawrapper/c13e229/logo.png"/></a></div></div><div class="hide">This requires theplugin to workdependentplugin</div></div><footer class="nav-footer" id="footer"><section class="sitemap"><a href="/" class="nav-home"><img src="/img/logo.png" alt="Day.js" width="48" height="48"/></a><div><h5>Community</h5><a class="github-button" href="https://github.com/iamkun/dayjs" target="_blank" data-count-href="/iamkun/dayjs/stargazers" data-show-count="true" data-count-aria-label="# stargazers on GitHub" aria-label="Star this project on GitHub">GitHub</a><a href="https://gitter.im/iamkun/dayjs" target="_blank" rel="noreferrer noopener">Gitter</a><a href="https://dayjs.gitee.io/zh-CN" target="_blank" rel="noreferrer noopener">🇨🇳 China Mirror 中国镜像站点</a><a href="/sitemap.xml" target="_blank">Sitemap</a></div></section><section class="copyright">Copyright © 2023 Day.js</section><script>
              console.log('%c Feel free to try sample codes here 😃', 'background: #222; color: #EE6A55');
            </script><script>
            var versionNode = document.querySelectorAll("header>a")[0];
            versionNode.insertAdjacentHTML('afterend', '<span class="github-star-btn"><a class="github-button" href="https://github.com/iamkun/dayjs" data-size="large" data-show-count="true">Star</a></span>');
          </script><script async="" src="https://buttons.github.io/buttons.js"></script><script>
            function loadScript(src) {
              return new Promise(function (resolve, reject) {
                  const s = document.createElement('script');
                  const src_ = (src.indexOf('http') === 0) ? src : 'https://cdn.jsdelivr.net/npm/dayjs/' + src;
                  s.src = src_;
                  s.onload = resolve;
                  s.onerror = reject;
                  document.head.appendChild(s);
              });
            }
            (async () => {
              window.process = window.process || {}
              window.process.env = { NODE_ENV: 'doc' } // fix devHelper plugin
              await loadScript('dayjs.min.js');
              const
                req = await fetch('https://api.github.com/repos/iamkun/dayjs/contents/src/plugin'),
                plugins = await req.json(),
                pluginNames = plugins.map(plugin => plugin.name);
              for(let i = 0; i < pluginNames.length; i++){
                const pluginName = pluginNames[i];
                if (pluginName !== 'badMutable') {
                  await loadScript('plugin/' + pluginName + '.js');
                  dayjs.extend(window['dayjs_plugin_' + pluginName]);
                }
              }
            })();
            (async () => {
              if (location.href.indexOf('gitee') > -1) return
              ga && ga('send', 'event', 'JUMPCN', 'check');
              const PREFER_GITHUB = 'PREFER_GITHUB'
              const gt = localStorage.getItem(PREFER_GITHUB)
              const now = Date.now()
              if (gt && 604800 * 1000 + gt > now) return // a week
              const userLanguage = ((navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage)) || '').toLowerCase()
              if (location.href.indexOf('zh-CN') < 0 && ['zh', 'zh-cn'].indexOf(userLanguage) < 0) return
              ga && ga('send', 'event', 'JUMPCN', 'show');
              await loadScript('https://cdn.jsdelivr.net/gh/azcpavel/ExConfirmBox/exConfirm.js');
              exConfirmPromise.make({
                title: "提示", message: "建议大陆用户访问部署在国内的站点，是否跳转？", bodyBorder: "1px solid #fb6052", titleBackground: "#fb6052", textColor: "#333", zIndex: 99999,top: "20%"
              }).then((sel) => {
                if (sel) {
                  ga && ga('send', 'event', 'JUMPCN', 'go');
                  window.open('https://dayjs.gitee.io/zh-CN', '_blank');
                } else {
                  localStorage.setItem(PREFER_GITHUB, now);
                }
              });
            })();
          </script><script>
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?64b00098619046db5efa89be31dc6618";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
          </script><script async="" src="https://www.googletagmanager.com/gtag/js?id=G-049VSBGZWL"></script><script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-049VSBGZWL');
        </script></footer></div><script type="text/javascript" src="https://cdn.jsdelivr.net/docsearch.js/1/docsearch.min.js"></script><script>
                document.addEventListener('keyup', function(e) {
                  if (e.target !== document.body) {
                    return;
                  }
                  // keyCode for '/' (slash)
                  if (e.keyCode === 191) {
                    const search = document.getElementById('search_input_react');
                    search && search.focus();
                  }
                });
              </script><script>
              var search = docsearch({
                
                apiKey: '015f468476ca8256cf1c8e8fb6d82cc3',
                indexName: 'dayjs',
                inputSelector: '#search_input_react',
                algoliaOptions: {"facetFilters":["language:en"]}
              });
            </script></body></html>