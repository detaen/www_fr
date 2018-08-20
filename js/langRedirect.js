// LANG SWITCHER
(function(){
  //document.cookie = 'lang=null';
  // cookie lang
  const cookieLang = document.cookie.replace(/(?:(?:^|.*;\s*)lang\s*\=\s*([^;]*).*$)|^.*$/, "$1");

  // if not en and browser is en
  if (cookieLang !== 'fr' && window.location.href.indexOf('/en') < 0 && !navigator.language.includes('fr')) {
    window.location.replace("/en");
    document.cookie = "lang=en";
  }
})();
