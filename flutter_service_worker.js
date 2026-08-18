'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "1808677350abeb7f8cbb283862959c13",
"assets/AssetManifest.bin.json": "ba8d20873d567551c2c2f667008971b4",
"assets/AssetManifest.json": "196b3ef41a67bed07fd244a1a64c615f",
"assets/assets/clients/adora.png": "4c435a3740e28554e451e7787a89eb4c",
"assets/assets/clients/amria.png": "e512a94fb6ce4fb4207606cd4f084be3",
"assets/assets/clients/aqary.png": "ac83c37d01f682b2b7e6639455067b2e",
"assets/assets/clients/arabia.png": "ad5ef209b829454053aef83fe612b7d4",
"assets/assets/clients/barek.png": "f77b42d793be49c0017968c4ece1cfed",
"assets/assets/clients/beit.png": "b08699c09d6e5e6fc9ae8cec80402684",
"assets/assets/clients/biomay.png": "2637adcffc94f5528449abb82aa13624",
"assets/assets/clients/cornado.png": "fc73e403b2e75e5612ee67b11097e5b6",
"assets/assets/clients/diet.png": "565bacfef22ad7991361910f89881df1",
"assets/assets/clients/dokkan.png": "e9eb1118fd9c33cd40fc1f1ed30ec9a4",
"assets/assets/clients/dubi.png": "5d9a738a6e0fdc31821755af512256cb",
"assets/assets/clients/edraak.png": "5fe7136e55e0b858939b1ff20a25dcd2",
"assets/assets/clients/elhusseny.png": "0a619f1d0fc59112b860eeb1aca0709f",
"assets/assets/clients/eval.png": "6ae966a7b2b71b57a108ff9fb67685db",
"assets/assets/clients/ever.png": "ed1d82beaded1eda6d18efd092b6b42b",
"assets/assets/clients/exccessor.png": "d0748c3ff36a772e587ac5935e3e0129",
"assets/assets/clients/ezzeyfind.png": "27369d412d7a12c574c63951e50608c6",
"assets/assets/clients/ganet.png": "24cad273e3c7b404ca7da9c9fdd30a87",
"assets/assets/clients/gannagallery.png": "95793963439261de0a095e273c9f3634",
"assets/assets/clients/giftle.png": "090c4250ec4a0b56cc2420b74ce58811",
"assets/assets/clients/goldenedge.png": "8e6c1fbdac9cf0fdf4625a985befca66",
"assets/assets/clients/imkan.png": "d4db4ed82b4c72bd589a96c8e28bca13",
"assets/assets/clients/mogam3.png": "ece50e6d1139120ad59face87eda9c71",
"assets/assets/clients/Oveo.png": "5bd76fe6dfa8055aad357cc7154f0d29",
"assets/assets/clients/pick-Up.png": "f2c8430d6709e32a0f98affcab4fecb0",
"assets/assets/clients/prudStyle.png": "bc29efbdc47863f09c593435361bcdf1",
"assets/assets/clients/sharshaby.png": "5b9ecdd01d6256589b9da2ccafeef857",
"assets/assets/clients/shekh.png": "6e96f2e7384d3afdba396954a1ca21ea",
"assets/assets/clients/silverpure.png": "892ab6369085a9cf0464767cdc9ad33f",
"assets/assets/clients/swaad.png": "6f7e959cf28ef637ccf7a2fe54aca34d",
"assets/assets/clients/sweet.png": "c98602b5be5be053f806f3f7f9d22752",
"assets/assets/clients/tpm.png": "c1f8889375b8b6f75318ccc8811322ad",
"assets/assets/svg/adora.webp": "afeee2f9c9407c2de2c347db43cdf37f",
"assets/assets/svg/amria.webp": "815b9a82b5d17c0b7a5cb64de78b8a5b",
"assets/assets/svg/appLogo.webp": "202f52ada4113cada5c6e1eebed2eb86",
"assets/assets/svg/aqary.webp": "611ba79a65563f2d1104727cca3660be",
"assets/assets/svg/arabia.webp": "9524d4f28a0994472e995daf974e5117",
"assets/assets/svg/barek.webp": "99a62209ae8aee507cb9713442297654",
"assets/assets/svg/beit.webp": "798d08f097c85b4cf49917d87f311c4d",
"assets/assets/svg/biomay.webp": "908d8363300f04278b1028916449a89e",
"assets/assets/svg/Bride.webp": "e84c2117b6c371334b3f2f5018a6329a",
"assets/assets/svg/cornado.webp": "0e86a2728c032b3a4fe3b5ce16cd6745",
"assets/assets/svg/diet.webp": "78ca3e6279671910d8e6025bf4bb545b",
"assets/assets/svg/dokkan.webp": "65169aad070c3a1670388a67f9966cee",
"assets/assets/svg/dubi.webp": "89d400aadcf770795758e1b650ec1c03",
"assets/assets/svg/edraak.webp": "02a3cfb357b8c90be53f14bf2f8e914b",
"assets/assets/svg/elagelly.webp": "b748faa72468a4e2b2ae9d189d8005ff",
"assets/assets/svg/elhusseny.webp": "ee3f16ec4ce18cd9e1ffc7aa6c2e3183",
"assets/assets/svg/email.svg": "14f1d9a46872590242c1fd9d3113c3dc",
"assets/assets/svg/eval.webp": "427193d2f2ea45c5ea74af46f910d208",
"assets/assets/svg/ever.webp": "7e903fbfcdf13e3a9e014cf5f6fbffe1",
"assets/assets/svg/exccessor.webp": "a63600f03ac466d35db90fb4a1ca8e85",
"assets/assets/svg/ezzeyfind.webp": "b0e2feaf9dbc9dd594bf83b6235f2010",
"assets/assets/svg/fine.webp": "607ff8593d653a604bcb32a664f75908",
"assets/assets/svg/ganet.webp": "282d87647a1e5823c34dde0522e822ce",
"assets/assets/svg/gannagallery.webp": "129c2cc29cfc759c125e04b015911581",
"assets/assets/svg/giftle.webp": "d2f560b45b499570592a64d0d32001f7",
"assets/assets/svg/github.svg": "d1baddb890c4751b001ae93bf9c5ce7a",
"assets/assets/svg/goldenedge.webp": "d9a54ce85103038932005c4cbcdbd837",
"assets/assets/svg/imkan.webp": "c78822d95e986a3ac1c0a920690d894f",
"assets/assets/svg/linkedIn.svg": "b031a1bad55a5f7c3bdb7e343f9bf159",
"assets/assets/svg/mogam3.webp": "9a1a57175ff95c08ebc3bad503b0b1de",
"assets/assets/svg/myImagemobileHover.png": "66f43802108e055df0543426800a9dae",
"assets/assets/svg/nobtha.webp": "735ee14d516bb80b1c40995fc5584584",
"assets/assets/svg/Oveo.webp": "f0ffb04a24ec6ac74906aa0d1f17f15f",
"assets/assets/svg/pick-Up.webp": "c4b0a80ed26d61e3cf2e8419d43f9dac",
"assets/assets/svg/prudStyle.webp": "05ee28bf39b7211f324359c44e0243a3",
"assets/assets/svg/sharshaby.webp": "26bb2b3c355699d662b0b1a7b3fa6d81",
"assets/assets/svg/shekh.webp": "1a8c32e5b393f6cd14d4aaddbb98e8f5",
"assets/assets/svg/silverpure.webp": "06af99a36b17dfda26aafa8a77c32b1e",
"assets/assets/svg/swaad.webp": "c9190861d41e249f16e9c999217e1873",
"assets/assets/svg/sweet.webp": "e08978daf9b943cec764b8e3480015e6",
"assets/assets/svg/tpm.webp": "b44883c2a7799eaa39e62110f75f8f46",
"assets/assets/svg/tsaly.webp": "1954663dffc32a945bfa1aadddac22fd",
"assets/assets/svg/whatsapp.webp": "65446f977343072569936c7b039cf154",
"assets/FontManifest.json": "59f84c52c2aa8d0981f214455827673e",
"assets/fonts/MaterialIcons-Regular.otf": "c778622508e88cd77151638f53eaf1a7",
"assets/fonts/sfmono.otf": "f28892de5e5d3e75a4247d62be1e6cf0",
"assets/NOTICES": "ffbcf3aaa6648a270008a2a8ff01d774",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "b9a6cc92fa539740a06835de1d4df9b7",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "b9a6cc92fa539740a06835de1d4df9b7",
"icons/Icon-512.png": "b9a6cc92fa539740a06835de1d4df9b7",
"icons/Icon-maskable-192.png": "b9a6cc92fa539740a06835de1d4df9b7",
"icons/Icon-maskable-512.png": "acaf3e0061eaa974344ffc91aba532fb",
"index.html": "d6732e79a6220aa2aff13b66d319f038",
"/": "d6732e79a6220aa2aff13b66d319f038",
"main.dart.js": "b3618578d834b8d2478d6e6bdfcd6495",
"manifest.json": "ca1bf2117554abdd890703565f7fec7f",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
