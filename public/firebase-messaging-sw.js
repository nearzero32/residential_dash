importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyCC4LJuGZm5TVzVyJj_2oGkfB4nOwS-GBg",
    authDomain: "residential-8d38f.firebaseapp.com",
    projectId: "residential-8d38f",
    storageBucket: "residential-8d38f.appspot.com",
    messagingSenderId: "969992321728",
    appId: "1:969992321728:web:0873eaa6314075dd40cb25",
    measurementId: "G-YPLXNQ2VJ7",
  });

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: '/icon2.webp'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });