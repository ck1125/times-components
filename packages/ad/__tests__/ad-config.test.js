import React from "react";
import AdConfig from "../ad-config";


describe("AdConfig", () => {
    const adConfig =  {
        id: "123",
        title: "title",
        label: "label",
        commercialtags: "commtag",
        contentType: "art"
      }

      it("init function sets the page level config", () => {
        window.nuk = {
          ads: {
            editionDate: "2018-01-28",
            editionId: "ef4456ea-efe3-11e7-ad6b-d6f772a113e5"
          },
          user: {
            isLoggedIn: true,
            isMeteredExpired: false
          }
        };

        document.cookie =
          "utag_main=v_id:015d647f7c96001850021819e00c05079001b07100c48$_sn:296$_ss:0$_st:1517142909493$_pn:2;exp-session$ses_id:1517141094606;exp-session$_prevpage:article:ex-cabinet ministers ride brexit gravy train::current edition::article;exp-1517144698707";
        document.cookie =
          "acs_tnl=tid%3D7e8221f5-bd07-4e41-aac1-0976385d0ecb%26eid%3DAAAA002920174%26e%3D1%26a%3DTmVoYSBTcml2YXN0YXZh%26u%3D1910c402-2cf6-40dd-bb1e-4ee24e1e7f6b%26t%3D1513095931%26h%3D39b9e97b7885a332482fdeafb472855d; ";

        const pageConfig = AdConfig.getPageLevelConfig(adConfig);

        const pageConfigExpected = {
          edition_id: "2018-01-28",
          e_uuid: "ef4456ea-efe3-11e7-ad6b-d6f772a113e5",
          search: "null",
          share_token: "null",
          shared: "0",
          cont: "art",
          aid: "123",
          kw: ["title", "label", "commtag"],
          pw: "1",
          teaser: false,
          log: "1",
          subscriber: "1",
          kuid: undefined,
          ksg: undefined,
          ppid: "AAAA002920174",
          eid: "AAAA002920174",
          om_v_id: "015d647f7c96001850021819e00c05079001b07100c48",
          cips: "null",
          refresh: "false"
        };
        expect(pageConfig).toEqual(pageConfigExpected);
      });
  });