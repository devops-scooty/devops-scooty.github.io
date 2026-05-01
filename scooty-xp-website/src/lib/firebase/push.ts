import { getMessaging, getToken } from "firebase/messaging";

export const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    const messaging = getMessaging();
    const token = await getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
    });
    console.log("FCM Token:", token); 
    // POST /api/push/register with token
    // await saveTokenToBackend(token); 
  }
};
