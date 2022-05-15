/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1970/01/01/autohotkey/index.html",
    "revision": "4b699da75cb85cee5784df972f54afe3"
  },
  {
    "url": "1970/01/01/layout/index.html",
    "revision": "5d14d7426a1c55b99c16ef714bc9335a"
  },
  {
    "url": "1970/01/01/mac下配置ngxin/index.html",
    "revision": "675e8af3a8ff3a7a11d4e657c957e4ac"
  },
  {
    "url": "1970/01/01/mini-react/index.html",
    "revision": "ebb3bea9d0e0dec2d2a7e901c6c1d5da"
  },
  {
    "url": "1970/01/01/mooc/index.html",
    "revision": "ff3f9d869471cc6404f70f5791554d0b"
  },
  {
    "url": "1970/01/01/npm与yarn/index.html",
    "revision": "c8fc46c8d1f06762cea1744beebab32c"
  },
  {
    "url": "1970/01/01/protype/index.html",
    "revision": "008b215e2f6d59e5b4a6f0961d875249"
  },
  {
    "url": "1970/01/01/react-hooks/index.html",
    "revision": "341c8eff37e4db38b890676a51836e76"
  },
  {
    "url": "1970/01/01/vuepress主题配置/index.html",
    "revision": "23e01eb618db88828b66fc8204f14991"
  },
  {
    "url": "1970/01/01/常见面试题/index.html",
    "revision": "6b21eb29a7cc9113643bb471e8e05868"
  },
  {
    "url": "1970/01/01/解决使用git-ssh每次都要输入密码/index.html",
    "revision": "489f2283acb68abcdf0845a5750dce20"
  },
  {
    "url": "2017/01/13/javascript实现队列/index.html",
    "revision": "920fa17428659d21d7cc77aa4a904e9e"
  },
  {
    "url": "2018/01/13/axios基础配置/index.html",
    "revision": "0a086f46728a1c9c3df3d5181b21d208"
  },
  {
    "url": "2018/01/13/javascript实现图/index.html",
    "revision": "8de747c38ef3e74e18a78b4a17784b7e"
  },
  {
    "url": "2018/01/13/javascript实现字典散列表/index.html",
    "revision": "aaced7397faa361e20880b212d7d8761"
  },
  {
    "url": "2018/01/13/javascript实现排序算法/index.html",
    "revision": "844144cf984bd31adf6dd3ed4288fc44"
  },
  {
    "url": "2018/01/13/javascript实现栈/index.html",
    "revision": "7946794a1e4cf1cbf2dd45577f2793ca"
  },
  {
    "url": "2018/01/13/javascript实现简单二叉查找树/index.html",
    "revision": "551f93d74123114040e873b1c9554aed"
  },
  {
    "url": "2018/01/13/javascript实现链表/index.html",
    "revision": "15129c547585a577c40ac9e483c74eca"
  },
  {
    "url": "2018/01/13/javascript实现集合/index.html",
    "revision": "87fb277916b299673ebc6b6830647d6c"
  },
  {
    "url": "2018/01/13/sequelize的配置/index.html",
    "revision": "e2ede30687145e8ef4a235081ac1d4a7"
  },
  {
    "url": "2018/01/13/terminal下的一些配置/index.html",
    "revision": "b14c42f55c60137873d31f0ab3aa0e11"
  },
  {
    "url": "2019/03/13/leetcode/index.html",
    "revision": "17f0371abe9453d5297f79779645559b"
  },
  {
    "url": "404.html",
    "revision": "9f46125acd4afa02ca1e0e97fb164add"
  },
  {
    "url": "assets/css/0.styles.07207228.css",
    "revision": "a6aeebe02ae0b28ccfd97d0342a3de8c"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/iconfont.a5d11a0b.svg",
    "revision": "a5d11a0b839107259b8740e4657868f2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6c07ca04.js",
    "revision": "064c703c098574f7452741ba4119c875"
  },
  {
    "url": "assets/js/11.ded4fa08.js",
    "revision": "8df9ac82b36ea21e333fe7998745f8d6"
  },
  {
    "url": "assets/js/12.1566e8e9.js",
    "revision": "986a708f9375202b7c784873f4ff312d"
  },
  {
    "url": "assets/js/13.8ebadafa.js",
    "revision": "06e25fdb94af760268369bc6879e1054"
  },
  {
    "url": "assets/js/14.2eae6fcb.js",
    "revision": "cddb2e396801450e52bf4750bac9461f"
  },
  {
    "url": "assets/js/15.c3b09a13.js",
    "revision": "35bf745b67affef2f703dc8c92b89dc7"
  },
  {
    "url": "assets/js/16.82983314.js",
    "revision": "a8330076b36c9337fd0846bf2aa65347"
  },
  {
    "url": "assets/js/17.e4d9cc9a.js",
    "revision": "66fdf3c7addbd3376401faa55a8f9459"
  },
  {
    "url": "assets/js/18.59d74889.js",
    "revision": "9fcab79fa0fbb3bffe70d313eded890a"
  },
  {
    "url": "assets/js/19.a44f1b3b.js",
    "revision": "5902279c812d89d3a524a5cb53c73636"
  },
  {
    "url": "assets/js/20.59422492.js",
    "revision": "ceab06c352f1464e92a81789a0371bff"
  },
  {
    "url": "assets/js/21.3975ae56.js",
    "revision": "743b28323bfaf14030f27ddc83b655b6"
  },
  {
    "url": "assets/js/22.fa8d8bd5.js",
    "revision": "2f2bc7b56bf4740a8de98c9d2a0c3e3e"
  },
  {
    "url": "assets/js/23.779af9e6.js",
    "revision": "8ef6f2f19ce127d437b9734ce5b8b55b"
  },
  {
    "url": "assets/js/24.f87843ba.js",
    "revision": "fba73139ea1502d401d61b35b8ce208b"
  },
  {
    "url": "assets/js/25.f7a5d2f5.js",
    "revision": "7f6029fef718bb3c53a2c21953220eca"
  },
  {
    "url": "assets/js/26.3b6b0728.js",
    "revision": "be821c384570d7d18fddf75714df3c6b"
  },
  {
    "url": "assets/js/27.78ee38f2.js",
    "revision": "688185183097761b8c70e77c107aa61e"
  },
  {
    "url": "assets/js/28.cadc989a.js",
    "revision": "43baa30666bb88f39a0ab9f130466e58"
  },
  {
    "url": "assets/js/29.d4a4f211.js",
    "revision": "4dd47dafe7d81a60bf9ec14c154f3647"
  },
  {
    "url": "assets/js/3.b14bc519.js",
    "revision": "dd31d3b6bfc1627eb1430ac1fc13bdf2"
  },
  {
    "url": "assets/js/30.53680683.js",
    "revision": "bd5ea4f94ce529b7bb284525d22e10fe"
  },
  {
    "url": "assets/js/31.2da0dfc8.js",
    "revision": "b8b6ab5aaa373a4ee57fabab322b5532"
  },
  {
    "url": "assets/js/32.52a3bbdb.js",
    "revision": "91c75256a5462b36e4a9baff182d9fac"
  },
  {
    "url": "assets/js/33.a7e071b3.js",
    "revision": "9f426c1f435b68b49851762a255dabe5"
  },
  {
    "url": "assets/js/34.d2dfc4ee.js",
    "revision": "258d0ba7737c592114ce55f8c79ff3b9"
  },
  {
    "url": "assets/js/35.08756908.js",
    "revision": "5eb1ce9b2cdce629da50b20075d93333"
  },
  {
    "url": "assets/js/36.f340a051.js",
    "revision": "3d0c204646e7fa450de0f05df29bb18b"
  },
  {
    "url": "assets/js/37.167fee8d.js",
    "revision": "c21ebcb961660e355d3fe71dab6ea9a8"
  },
  {
    "url": "assets/js/38.54b353a3.js",
    "revision": "bd031fd591315634e8569599bde21ce4"
  },
  {
    "url": "assets/js/39.be2bf926.js",
    "revision": "308b0c4c522896b4eb8ead21f4500f14"
  },
  {
    "url": "assets/js/4.04f9b0a3.js",
    "revision": "55560c731cdedc9b11a42a3484a75327"
  },
  {
    "url": "assets/js/40.813518ee.js",
    "revision": "cf5fa89681bcc353b72e474b96873f43"
  },
  {
    "url": "assets/js/41.7c06cc03.js",
    "revision": "ece87816a5c62ccb17b9ca4c5e6651d9"
  },
  {
    "url": "assets/js/42.d860adcc.js",
    "revision": "109a8340de57a13f3c062bc2d079bd00"
  },
  {
    "url": "assets/js/43.39f8f3b7.js",
    "revision": "c4c4003edffb063d8d7db97492ebebf4"
  },
  {
    "url": "assets/js/5.569dcaa8.js",
    "revision": "2b37b716d0e55ecd807d13d24abd7871"
  },
  {
    "url": "assets/js/6.571a211f.js",
    "revision": "e60cb5a970872475753cbc6cfad50da0"
  },
  {
    "url": "assets/js/7.86d3a8a9.js",
    "revision": "85cecc52a5d34c93563536442f64c7e0"
  },
  {
    "url": "assets/js/8.3f185511.js",
    "revision": "c403f6ab4f1a4c1b4fcfe04894ca0400"
  },
  {
    "url": "assets/js/9.f70bb51d.js",
    "revision": "09509fa76d7e07d07dedccd3212f6364"
  },
  {
    "url": "assets/js/app.d901bced.js",
    "revision": "b3dddc78351509951548dd1673a43f35"
  },
  {
    "url": "assets/js/vuejs-paginate.cac334c8.js",
    "revision": "4ce1ece0cc00f9a605522e685ad87508"
  },
  {
    "url": "bg.png",
    "revision": "05f2112302be13fd1ff0ef5cde26b554"
  },
  {
    "url": "list/index.html",
    "revision": "1faff0b33e2f69b8d84c58e034facc41"
  },
  {
    "url": "list/page/2/index.html",
    "revision": "f376d20b7fcf2a3525578a7a0976c239"
  },
  {
    "url": "tag/Axios/index.html",
    "revision": "0802428b322ec9a40733209672cd38bd"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "a6f4631dc47542fad39887c249b8d1a7"
  },
  {
    "url": "tag/git/index.html",
    "revision": "c9830654539273b46b1a71af02f6c60f"
  },
  {
    "url": "tag/index.html",
    "revision": "3c6bb7ca2be23bb03f5327fbf9aa6bf0"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "63e6ffc7cd096b3217342badc902f56e"
  },
  {
    "url": "tag/js/index.html",
    "revision": "3a7ee38bf82a79fb90b89ba7e5aba1d9"
  },
  {
    "url": "tag/Koa/index.html",
    "revision": "f8f94afd6388bbaeb0398c6587721567"
  },
  {
    "url": "tag/LeetCode/index.html",
    "revision": "d33efec6068e7bfe5ebf3af3c99a467b"
  },
  {
    "url": "tag/Mac/index.html",
    "revision": "555218f3a4924e24a11d68bc9d9edebb"
  },
  {
    "url": "tag/MacOS/index.html",
    "revision": "44d0324d50b32d3ab176715241d06ed7"
  },
  {
    "url": "tag/markdown/index.html",
    "revision": "4b7deef967b6a124f9bee229e945ac47"
  },
  {
    "url": "tag/ngxin/index.html",
    "revision": "43421d5ee399b81041cb7c97b56f241f"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "d1875fe270fbc01160f169f6f8b6e56b"
  },
  {
    "url": "tag/react/index.html",
    "revision": "ea3e2ef05e7cd263396739c3c8c2e10f"
  },
  {
    "url": "tag/Sequelize/index.html",
    "revision": "a62f173566f29d59b9b5b0b7f87a76c0"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "1fae1851bbbcf304ed648d593aa501dd"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e31dc69f0dfbcf958e4284a040a46b2a"
  },
  {
    "url": "tag/Windows/index.html",
    "revision": "89f55d20673e708c6374784839b0205a"
  },
  {
    "url": "tag/yarn/index.html",
    "revision": "e240a7e2eb35c2167b94f359e76e7749"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "bee878e16696ec3d7c88a09630ee354a"
  },
  {
    "url": "tag/面试题/index.html",
    "revision": "fea0b6eeb596b96a8b760fd4a81ecd15"
  },
  {
    "url": "timeline/index.html",
    "revision": "648f70819f881cc4ba085104c2a02f0f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
