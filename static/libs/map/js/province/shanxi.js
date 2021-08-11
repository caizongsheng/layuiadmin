/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('山西', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"adcode":140100,"name":"太原市","center":[112.549248,37.857014],"centroid":[112.322147,37.960573],"childrenNum":10,"level":"city","parent":{"adcode":140000},"subFeatureIndex":0,"acroutes":[100000,140000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@st{FxSziEkhhNE^nzAVtNT`bJr@lNb]`T^UfJdqTKCa[U}MQ[wqsAK`wqY¹]yeu¡S¯@WKVPewk©HWZL`|@esWXWv[Ju[VotiP]GNumnoMYU~ba_MoBDW­duQv¯HZ»a\\cbsGGviTD]AWeOMQkHyO@auqec[µMiSAUmQO]X[UcjwPxoP{cfQHqÔTXI|Np`QA]l]@Q_XiþGR\\cwlRvDXYNxC`c¶qC¬NmlOJHeiqlEdsmQxUZclJNlAJkGRjnSTBzVWH^|JavDjUveJ@~R]pndAprFFj\\R]nQ\\~h@ZrjLtUcXRS`v~p\\Pl]bNdInJfK|xj_r]Z`VxE`R"]],"encodeOffsets":[[[115781,38970]]]}},{"type":"Feature","properties":{"adcode":140200,"name":"大同市","center":[113.295259,40.09031],"centroid":[113.72499,39.904541],"childrenNum":10,"level":"city","parent":{"adcode":140000},"subFeatureIndex":1,"acroutes":[100000,140000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@RFZa¨V¤aDx_N[fY¤OºDCwJ[j[Q·eaZáRunKbLLl\\\\SXdA~TrW`B|bØZjQzLjQvx~KtFTfXGT~ViZndYr\\xT\\lUHD®t~LxPNzjf@fXpWPagiL@qAHÒL^s`^WġODVQqAgXFZpVOfaÑ^YCmXiKgDvQL»RyRcEPjHjjLlMrL`Up¢fTWZk¸~\\tI@UlA^²NHp`\\K`xJGÂl`jHlRyGqnei@`}@w®XnmZQ`|¾E`gDRqjmGunNLaxaRiovOiUQ[RyCe{©NYziHyee§YLmIaowuSYHevG_wy×uiqiOÁqo¹[GÏWÑBY^W~ctunyS£M¯]éYWą}EkñS]āi@QTn­D[aIM_fg@gCQMBu^[M[YWQsïkyPYRijM@£xglLrn_bJB`ÌFEX\\T~B|vjHnZJf^O\\`ifOtì@|HÐOPÊ¦Sh]jAxuzA¸­]oE{y]IVq¬d{qPeU]FqvE`qVGv}IaXmªyP]"]],"encodeOffsets":[[[116304,40385]]]}},{"type":"Feature","properties":{"adcode":140300,"name":"阳泉市","center":[113.583285,37.861188],"centroid":[113.505474,38.064652],"childrenNum":5,"level":"city","parent":{"adcode":140000},"subFeatureIndex":2,"acroutes":[100000,140000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@AWuDoVeE¡mScSaÛKI³GIcVeS]^_Mak@qaIS_sMBUmyF]gMlgjFTyw|Ets~@FRdwF\\rdTrCZgUYTqhIbKLe_¹N[kF{l_ntmDkC`e²EtJatCpPV^®CZixTF ~lBÚZRHjH~lDlqbYhoAYlBWmb¾yLLCniVAV~[LZVEOl{MRsEULf`oHGhO{roFwKyVI^kfDnV¦mlQfX~VdvVXCb"]],"encodeOffsets":[[[116281,39446]]]}},{"type":"Feature","properties":{"adcode":140400,"name":"长治市","center":[113.113556,36.191112],"centroid":[112.921277,36.478022],"childrenNum":12,"level":"city","parent":{"adcode":140000},"subFeatureIndex":3,"acroutes":[100000,140000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@nQHobcDkfvg|Wh¯lTOBwerkD¤EdyMQbeB_WGtdRS[LKsT}KcÇO[ZfCTPĊpxe~vRtg¶cxT¤UN£~I´PÔ_vo´Gf_¸vJQFps\\GnGpeZ}xBx~E|UlDu^AjCdPdQh^Cb]BM^d¢M¦URXfOTZ]`\\XqFQZr\\Y²c\\AjRM\\sHCRwZTW\\hJM\\kPv`E^`TM\\L\\hObBkD|NIlyXJP\\\\EPlen}RLnSZ£LShtvJp}OWVZfl^QNZkTW`]fgHibcAXzgzcB]ksOua[`Ee}DIhmBDyJgQkTwCHo}BgfHUVPnQ^cDghBi@BlmrJ}j][mGio«Xi|mJaMCLWS@h_PtEZcQ[SwXouAcX¥LokYbz}JIW[ÁkCDYpoc}`]OUsEmNkËeOElqS_A"]],"encodeOffsets":[[[114685,37568]]]}},{"type":"Feature","properties":{"adcode":140500,"name":"晋城市","center":[112.851274,35.497553],"centroid":[112.713186,35.610944],"childrenNum":6,"level":"city","parent":{"adcode":140000},"subFeatureIndex":4,"acroutes":[100000,140000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@AļsA[vINlT_âFpfAWHpWxJxWNTAfLezdTFaZXF]zUraI_T]Ph`HMph ]DnXNxzRfKR^M^rjMfJzMd[p@fOnfL|^L@r`CJJeOMXRlWNd\\\\WnAnXlxrRnQ \\jIObP~`pQXFfwA@jS~kRR^_Z_hlLeLAh]BvkC{V}FwwAY~ofHm[HotEIR·ue`³HupÓ`³O}JM¤£VwSµdshuQ}wfĉoSOV_m­kga_{SJgK¥RM¥jwUgH`pHvsHeuYµFÁtifSOIdiLc{iX{Qm}sKMq_[N¥dSAegr¥Fsz{~WUY`sS"]],"encodeOffsets":[[[114749,36127]]]}},{"type":"Feature","properties":{"adcode":140600,"name":"朔州市","center":[112.433387,39.331261],"centroid":[112.648197,39.619375],"childrenNum":6,"level":"city","parent":{"adcode":140000},"subFeatureIndex":5,"acroutes":[100000,140000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@»l«V¯IÕ@gTW][«yS[isoCoQseOy}mQ_HaMJ]Ymm\\iOZu|e~{]W@OSifEh[`DZZUIg`]EW©_Oh]d{`DN^xR¢WXcEgTedOAyPZOV¡tDJU]MJYhDA^fRaNUhP¢zCXghIXs¤EXHL|b\\\\K\\lfHr|TxgXD\\L\\vXPpTÌpf|VjBxcKee¢WZBfĖAdYxUFdÀPfxh@nbVO^©zWnJbu~UH_ruFErV^Ofrc|«Ur^J|zpF^·®yBwviBg^¥TÉOÏP{Gë@Psje[_]PIemYiG{u}A[SFWËEA_aI`qmkKwh@¤iNQjZOlztðXRZN\\]\\AvRND@hehN`bJC\\"]],"encodeOffsets":[[[115328,41203]]]}},{"type":"Feature","properties":{"adcode":140700,"name":"晋中市","center":[112.736465,37.696495],"centroid":[112.969398,37.329161],"childrenNum":11,"level":"city","parent":{"adcode":140000},"subFeatureIndex":6,"acroutes":[100000,140000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@t\\K²tJMbTdOjv\\JlQ@gTO~j^CLt¾bXdvonftCdgFUZ`MLN¸`JnbtpBlXhF~hjf^®lffFVbHPjplÂîOf`zRzWlViZiA§_GiYQÙkA}EwSYj­DU]oOsDbsI±F_fDClsnmk`E|lM\\`ºKfLagJSrVZYhqDcS[qExcEQ}@_QwF_U^Yqi`{weLmIcJaM^Oko[u}T_WQdsViKYqg@}R[m^[QEiqEBomc^oQ@}fIVuCibu{IG]XUAySmTQiHIlBMkkIESUmaIw±}cRGl]DOduDggGe}UDOa}B^]DeWYJ}c}UaOumgTkOoc¯SCcKUk³rw^WG]lyO\\ezeBmzE^UuKc_oIQcGKW@yjex[zNRt`sHVpARSYUPmt{¨yfIRT[`Lx[RpAI]R¾Aw^TBT`krFfPlÌnMtFPV_^d~opCZDÂlX\\J~IyZapl¦KdWvBpxWTR\\YdsFOg`@TKXDbNnIj{¬WjpnH^\\~iInqAkj@AhgdCR]OmVUGhe~ApGxDlShR ICznAJg~CFf\\_vbtP^ldAhyWydBjahGe^X_lS"]],"encodeOffsets":[[[116269,37627]]]}},{"type":"Feature","properties":{"adcode":140800,"name":"运城市","center":[111.003957,35.022778],"centroid":[111.070718,35.188073],"childrenNum":13,"level":"city","parent":{"adcode":140000},"subFeatureIndex":7,"acroutes":[100000,140000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@@^g@eXKJsg}QYoyeyw¹OSyï{H[Y@µRKw¥YYM@gauYGOqoPyI]Z£E¿[Nmve²G´cælw^@ÂpB¬G¢Czh~Rjr`¾`B|qX@º~V¬J~¨XPdUE\\WbH`vWp^QOptWFtjvDbQffFht\\Hltn\\WdBr^zBTXhAZ^xNBvRL¦NbK^TfOTVE^YBdmpVKVGpk~BVfBpiT_tZV}Xy|CUmuµKVEtSVqItzI\\VTP|¦XLfÃXGj`A¹ZIO`mYNQaG[aAk]I[Z§PoO¹OYZ£iÅ]snZZcvDnAXjUhlPMU]H}QuqY@ap`MXIcVkeRsO³I]¯MuØqmCH}{[Bqf{THTYX½_I\\bnkFgjyGUms"]],"encodeOffsets":[[[113232,36595]]]}},{"type":"Feature","properties":{"adcode":140900,"name":"忻州市","center":[112.733538,38.41769],"centroid":[112.414867,38.885126],"childrenNum":14,"level":"city","parent":{"adcode":140000},"subFeatureIndex":8,"acroutes":[100000,140000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@yJoU\\¯}Ãb_`»n}UwXiAWT±TcoEJYjKWaQZ[MTYKUgXgOgWqq@iWi]I¡GwN¿GwFw[sLU|DB}XAb\\VK_eRYtYBic[wLW³ýXcWu_QQ±Sk_exLGcaU^u[acmURkiuTgIoCdilG vªjzd¨JbcPjSFktÒRDar[ºE\\KHdiuDbL|c^J~ØrnZH~ihoH[Ä¥@iUQVeI]gCh_BaÅWDlWdkBC^jSHutHda[¼bY°GuvR®cCXpA`Nba}ZVNmpvnM^HjOpsUv\\\\IXuWtX@f{K_XYªGxlOfUXL°@¢Tvzfº^ZxrL_tBxrR\\~N\\VDbLrS´HLJÜTbdT¢nfFpUvCXBNzB|R~hNKJXXEf\\bU~PJfnIEd\\Dfi\\Zs~AOTx~Fpn®\\bIZrf\\QvYâfbR¸i\\I\\Dx¹C£PeZM\\w`C£b§UYbQEaU@mwge¿OEcwVcZĕBeYA¡XfLfwdiAUe{ËoSoWO[uK[WCwh{SGqke[[La[K{WG£FWtgJWhD¡ygOVMbeQB]gCIZ^NIVsCU¢YPOBzcPSfFhWd¡XwQM]_Cc|g^`PªFX_^JhYVY_Cg\\FeTjP@^X}|{fYv"]],"encodeOffsets":[[[114617,40563]]]}},{"type":"Feature","properties":{"adcode":141000,"name":"临汾市","center":[111.517973,36.08415],"centroid":[111.381988,36.228828],"childrenNum":17,"level":"city","parent":{"adcode":140000},"subFeatureIndex":9,"acroutes":[100000,140000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@Q[sGBQOVSIiWU`KGias]OtCdU]iJUf`XU]]BscCcZQgz_tpst[MX]D¡}fsI{cqQZcB½gqJ{Y}HhCgrNuMYlgBaWa\\kKGAZWPuMYTcHtVnzHhilEamJ[¾`ZWSG|Sre\\A|G~Drnv×°NJ^´tPfQldUJNW_boZ@vr~R^GVNkOVgWimBCduYYtmÆ^¤jZYºPpP¨O\\Y^JBl\\bHRbMnZP_JºYBi_HÄWKe¥WO{USJ[syrJTUFsU¶LnvDVEtq¦fhBcTM¦`\\NrtL~RnW||jKdcjJTPjeÂs¶EvZGfutoG_hGxV¦iN¦QhLI|Tb`h®l`nUeDYP\\ÈLdS~LtK\\QTscHXA`afNRcz£FCqlfxASPkg°{XuhelCadGpmR]Sx½BQJ^oBQw\\K_\\QSeJ§zs|OnZVQToBGU_tQsyMw\\if£uQoAD[§ADh@]ccPU¶glHZ¥LiUeByfb¬TJ[fCmWKc]AHr[JHimWVSW}QCU±a¡L]XUpVMl³DYUCaisF}YaVeWIRT{EQVyCm^"]],"encodeOffsets":[[[113061,37786]]]}},{"type":"Feature","properties":{"adcode":141100,"name":"吕梁市","center":[111.134335,37.524366],"centroid":[111.268548,37.684104],"childrenNum":13,"level":"city","parent":{"adcode":140000},"subFeatureIndex":10,"acroutes":[100000,140000]},"geometry":{"type":"MultiPolygon","coordinates":[["@@YdwVnRctkFjrGfIkPMn«Dµr_dwDMWZuCkQx[dQýHWj`@Rk^B^Ro_{MWJÓSGreRdO|wpOixVdW\\P^nRBVjT¶Nd\\ fvr@bzPlGNRPXfclkXCÆXAbg`DhJ^UfVR@jÃ¦G\\pg}jYGm×q}]I{daKCvcjG[L¹Fq\\CbÑQsEliTOad§Iyc©iukHcjDJpSh{qB}ia_bnKSgCUH³[_TyHeYeQ£a{QFoUS©AyQM@_sDVmguNMoNsfsQWJkr][f}±Thc²ih]IgMYUFYaOjeEW{WPpuqw@eWaA[iąYe¯Xo®SAq]OVyISsÉÙI}sGCavOSSyZ{FKWzefy[Án]zDRU|FSJQfXbU~ZtEbjDZV´CNkUVo^W¢K²bDV~RTXUnXGj\\IGq^BLdnXD\\eSIa«zefAjV¦KGYhkVµdO^d@Cg¨BC\\BRp¤v@zLXHRdpJd`Lv]VyFAnyf[fzP^kXHx]´qVlLDd°TpdPlhSnvbPVd~I~XZCf]^~APbC~VHfhhvCPc^CHkdQ~²JxnbVFT"]],"encodeOffsets":[[[115027,38358]]]}}],"UTF8Encoding":true});
}));