/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

importScripts('workbox-sw.dev.v2.0.0.js');

const workboxSW = new WorkboxSW();
workboxSW.precache([
  {
    "url": "sw.js",
    "revision": "3465c617cdd8c779e52288ff52a5d6fd"
  },
  {
    "url": "workbox-sw.dev.v2.0.0.js",
    "revision": "60768167d94f2fe394e865121f93e44d"
  }
]);

workboxSW.router.registerRoute('https://fonts.googleapis.com/(.*)',
workboxSW.strategies.cacheFirst({
  cacheName: 'googleapis',
  cacheExpiration: {
    maxEntries: 20
  },
  cacheableResponse: {statuses: [0, 200]}
})
);

workboxSW.router.registerRoute(/\.(?:png|gif|jpg)$/,
workboxSW.strategies.cacheFirst({
  cacheName: 'images-cache',
  cacheExpiration: {
    maxEntries: 50
  }
})
);

var articleHandler = workboxSW.strategies.networkFirst({
    cacheName: 'articles-cache',
    cacheExpiration: {
      maxEntries: 50
    }
  });
  
  workboxSW.router.registerRoute('/pages/article*.html', args => {
    return articleHandler.handle(args);
  }); 