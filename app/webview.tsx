import React, { useEffect } from "react";
import { View, Alert } from "react-native";
import { WebView } from "react-native-webview";
import messaging from "@react-native-firebase/messaging";

export default function WebAppScreen() {
  useEffect(() => {
    // Request permission for notifications
    messaging()
      .requestPermission()
      .then(() => {
        messaging()
          .getToken()
          .then((token) => {
            console.log("🔥 FCM Token:", token);
          });

        // Handle foreground message
        messaging().onMessage(async (remoteMessage) => {
          Alert.alert(
            "📬 New Message!",
            remoteMessage.notification?.title || "You got one!"
          );
        });
      });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: "http://localhost:3000/login" }}
        style={{ flex: 1 }}
      />
    </View>
  );
}
