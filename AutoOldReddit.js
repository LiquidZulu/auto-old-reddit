/*

----------------- Written by u/LiquidZulu -----------------

Email liquidzulu@liquidzulu.xyz for help or suggestions.

Website: http://www.liquidzulu.xyz/
GitHub: https://github.com/LiquidZulu
Twitter: https://twitter.com/LiquidZulu (@LiquidZulu)
Discord: http://discord.liquidzulu.xyz/
SoundCloud: https://soundcloud.com/liquidzulu
YouTube: https://www.youtube.com/channel/UCTf0py7ryuSldOsDm4abSsg?view_as=subscriber

*/

var url = window.location.href; //Gets *://www.reddit.com/*

var parts = url.split('.'); //Splits by '.' to isolate subdomain

var len = parts[0].length;

window.location.replace(parts[0].substring(0, len-3) + 'old.' + parts[1] + '.' + parts[2]);
