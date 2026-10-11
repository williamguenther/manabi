// Ergänzt android/app/build.gradle um eine feste Signatur und die Versionsnummer.
// Feste Signatur = Updates lassen sich über die alte Version installieren, ohne Fortschritt zu verlieren.
import { readFileSync, writeFileSync } from 'node:fs';
const file = 'android/app/build.gradle';
let g = readFileSync(file, 'utf8');
if (!g.includes('// manabu-signing')) {
  g += `
// manabu-signing
android {
    defaultConfig {
        versionCode = (System.getenv("VERSION_CODE") ?: "1").toInteger()
        versionName = System.getenv("VERSION_NAME") ?: "1.0"
    }
    signingConfigs {
        manabu {
            storeFile = rootProject.file("../signing/manabu.keystore")
            storePassword = System.getenv("KEYSTORE_PASSWORD") ?: "manabu-app"
            keyAlias = System.getenv("KEY_ALIAS") ?: "manabu"
            keyPassword = System.getenv("KEY_PASSWORD") ?: "manabu-app"
        }
    }
    buildTypes {
        release { signingConfig = signingConfigs.manabu }
        debug { signingConfig = signingConfigs.manabu }
    }
}
`;
  writeFileSync(file, g);
  console.log('Signatur in ' + file + ' eingetragen');
}
