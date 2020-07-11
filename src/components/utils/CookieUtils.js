export function handleAllowCookies() {
  setCookie("consent", true, 365);
}

export function handleRejectCookies() {
  setCookie("consent", false, 365);
}

// Get cookie value
export function getCookie(cname) {
  // eslint-disable-next-line
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    // eslint-disable-next-line eqeqeq
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    // eslint-disable-next-line eqeqeq
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function activateCookies() {
  window["ga-disable-UA-171683260-1"] = false;
}

export function deactivateCookies() {
  window["ga-disable-UA-171683260-1"] = true;
}

export function googleAnalytics() {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    // eslint-disable-next-line
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "UA-171683260-1");
}

// Create cookie that lives 365 days
export function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
}
