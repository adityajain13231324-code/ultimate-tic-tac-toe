/* Your own TURN relay (Metered, free tier), for online play between different networks (mobile data, strict Wi-Fi).
   These are appended to the built-in servers in net.js. The values are visible to every visitor, which is normal for
   browser WebRTC, so keep this a free-tier account. To change or remove them, edit this list (an empty list uses only the built-in servers).
   Where to get new ones: Metered dashboard -> TURN Server -> Credentials. */
window.UTTT_ICE_SERVERS = [
  { urls: 'stun:stun.relay.metered.ca:80' },
  { urls: 'turn:global.relay.metered.ca:80', username: '612531e5b42d61b85581deeb', credential: 'VvQ78DKovIzQWOny' },
  { urls: 'turn:global.relay.metered.ca:80?transport=tcp', username: '612531e5b42d61b85581deeb', credential: 'VvQ78DKovIzQWOny' },
  { urls: 'turn:global.relay.metered.ca:443', username: '612531e5b42d61b85581deeb', credential: 'VvQ78DKovIzQWOny' },
  { urls: 'turns:global.relay.metered.ca:443?transport=tcp', username: '612531e5b42d61b85581deeb', credential: 'VvQ78DKovIzQWOny' },
];
