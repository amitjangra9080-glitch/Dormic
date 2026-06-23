// Firebase Cloud Messaging Service Worker
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCDwXIwC-r4rSWvxH2xAmbaQdzaUTev6P8",
  authDomain: "hostel-lost-found.firebaseapp.com",
  projectId: "hostel-lost-found",
  storageBucket: "hostel-lost-found.firebasestorage.app",
  messagingSenderId: "283586453029",
  appId: "1:283586453029:web:a09be8f2680ba94dbbe9cc"
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
