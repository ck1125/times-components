/* global window, nuk */
import { isSubscriber } from "@times-components/utils/is-subscriber";
import { cookieHelper } from "@times-components/utils/cookie-helper";
import localStorage from "store";

const getSubscriber = () => {
  return isSubscriber() ? "1" : "0";
};

const isLoggedIn = () => {
  return nuk.user.isLoggedIn ? "1" : "0";
};

export const getPageLevelTargetingValues = adConfig => ({
  edition_id: window.nuk ? nuk.ads.editionDate : null,
  e_uuid: window.nuk ? nuk.ads.editionId : null,
  search: "null",
  share_token: "null",
  shared: "0",
  cont: adConfig.contentType,
  aid: adConfig.id,
  kw: `${adConfig.title} ${adConfig.label} ${adConfig.commercialtags}`.split(
    " "
  ),
  pw: "1",
  teaser: window.nuk ? !nuk.user.isLoggedIn || nuk.user.isMeteredExpired : "0",
  log: window.nuk ? AdManager.isLoggedIn() : "0",
  subscriber: window.nuk ? AdManager.getSubscriber() : "0",
  kuid: localStorage.get("kxkuid"),
  ksg: localStorage.get("kxsegs"),
  ppid: cookieHelper.getCpnId() || "null",
  eid: cookieHelper.getCpnId() || "null",
  om_v_id: cookieHelper.getVistorId() || "null",
  cips: cookieHelper.getCips() || "null",
  refresh: "false"
});
