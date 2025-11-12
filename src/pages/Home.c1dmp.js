// Legacy Wix adapter
// -------------------
// This file remains so historical Wix branches that expect a module-based
// Home page continue to compile. The static site now lives in /index.html
// and the /home directory, so we simply redirect visitors to the new entry.
export default function LegacyHome() {
  if (typeof window !== 'undefined') {
    window.location.replace('/home/');
  }
  return null;
}
