const IS_DEV = process.env.DAIMO_APP_VARIANT === "dev";

export default {
  owner: "daimo",
  name: IS_DEV ? "Daimo Dev" : "Daimo",
  slug: "daimo",
  version: "1.0.5",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["assets/*"],
  scheme: "daimo",
  notification: {
    iosDisplayInForeground: true,
  },
  ios: {
    supportsTablet: false,
    bundleIdentifier: IS_DEV ? "com.daimo.dev" : "com.daimo",
    buildNumber: "63",
    associatedDomains: ["applinks:daimo.xyz", "webcredentials:daimo.xyz"],
    config: {
      usesNonExemptEncryption: false,
    },
    infoPlist: {
      LSApplicationQueriesSchemes: ["whatsapp", "sgnl", "tg"],
    },
  },
  android: {
    googleServicesFile: IS_DEV
      ? "./google-services-dev.json"
      : "./google-services.json",
    intentFilters: [
      {
        action: "VIEW",
        autoVerify: true,
        data: [
          {
            scheme: "https",
            host: "daimo.xyz",
            pathPrefix: "/link",
          },
        ],
        category: ["BROWSABLE", "DEFAULT"],
      },
    ],
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    package: IS_DEV ? "com.daimo.dev" : "com.daimo",
    versionCode: 63,
  },
  extra: {
    eas: {
      projectId: "1eff7c6e-e88b-4e35-8b31-eab7e6814904",
    },
  },
  plugins: [
    [
      "expo-build-properties",
      {
        android: {
          compileSdkVersion: 34,
          targetSdkVersion: 34,
          minSdkVersion: 28,
          buildToolsVersion: "34.0.0",
          kotlinVersion: "1.8.0",
        },
        ios: {
          deploymentTarget: "15.0",
        },
      },
    ],
    [
      "expo-local-authentication",
      {
        faceIDPermission:
          "Allows Daimo to protect your account and authenticate you when you send payments.",
      },
    ],
    ["expo-notifications"],
    [
      "expo-barcode-scanner",
      {
        cameraPermission:
          "Allows Daimo to scan QR codes to pay other users or add new devices to your account.",
      },
    ],
  ],
};