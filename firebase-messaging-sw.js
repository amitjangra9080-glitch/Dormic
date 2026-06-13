// Firebase Cloud Messaging Service Worker
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBHDi6JIDOLLF_TBcdMV0lf7CIIb1QYxIA",
  authDomain: "hostel-lost-found.firebaseapp.com",
  projectId: "hostel-lost-found",
  storageBucket: "hostel-lost-found.firebasestorage.app",
  messagingSenderId: "907770215033",
  appId: "1:907770215033:web:0d20a35ee7ca9d0a3e3a25"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  const title = payload.notification?.title || 'Dormic';
  const options = {
    body: payload.notification?.body || '',
    icon: '/icon.png',
    badge: '/icon.png',
    tag: payload.data?.tag || 'dormic-notification'
  };
  self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({type:'window'}).then(clientList => {
      for(const client of clientList){
        if(client.url.includes('dormic') && 'focus' in client) return client.focus();
      }
      if(clients.openWindow) return clients.openWindow('/');
    })
  );
});
