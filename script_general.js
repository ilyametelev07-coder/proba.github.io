(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.')['map'](function (r) {
                        return r['trim']();
                    }), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer","this.Container_CF41DCC7_D80E_C8D0_41E1_E21E20B63523"],"id":"rootPlayer","gap":10,"data":{"displayTooltipInTouchScreens":true,"textToSpeechConfig":{"pitch":1,"stopBackgroundAudio":false,"volume":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"rate":1,"speechOnInfoWindow":false},"locales":{"ru":"locale/ru.txt"},"defaultLocale":"ru","name":"Player7028","history":{}},"downloadEnabled":true,"hash": "409b69cc213d0972958dd805c8e05f686b08c8f3caab4c92a7c95f089911b1ee", "definitions": [{"model":"this.res_CA6AC5C8_D83B_58D2_41D6_DA5CB0C47AF8","surfaceReticleMinRadius":15,"id":"model_CA6AD5C8_D83B_58D2_41E0_8CCD62657176","data":{"keepModel3DLoadedWithoutLocation":true,"label":"\u0413\u0438\u0434\u0440\u0430\u043d\u0442","panoramaToPanoramaModelTransitionEnabled":true,"showOnlyHotspotsLineSight":true,"showOnlyHotspotsLineSightInPanoramas":true},"backgroundColor":"#333333","sphericalHarmonicsMaxDegree":3,"environmentURL":"media/model_CA6AD5C8_D83B_58D2_41E0_8CCD62657176/bg_CA29565C_D83B_5BF2_41E2_C9F85722F109.jpg","castShadow":true,"surfaceReticleRadius":0.02,"environmentIntensity":0.5,"lights":["this.light_CA2F165C_D83B_5BF2_41DE_29899C8D52E3","this.light_CA2E365C_D83B_5BF2_41E2_B617DE0D38E7"],"class":"Model3D","camera":"this.cam_CA2FE65C_D83B_5BF2_41DF_151D06EFB07E","antialiasingLevel":0.3,"objects":[],"surfaceReticleMaxRadius":50,"surfaceSelectionCoef":2,"label":trans('model_CA6AD5C8_D83B_58D2_41E0_8CCD62657176.label'),"floorRadius":5,"thumbnailUrl":"media/model_CA6AD5C8_D83B_58D2_41E0_8CCD62657176_t.jpg"},{"class":"FadeInEffect","id":"effect_CEE50FAB_D809_C944_41D3_56B25B157D98","duration":500},{"class":"FadeOutEffect","id":"effect_CEE52FAB_D809_C944_41D5_9E0F3D98F433","duration":500},{"model":"this.res_C9B3A46E_D83B_5FAE_41E4_8185E526772F","surfaceReticleMinRadius":15,"id":"model_C9B4746D_D83B_5FD2_41E2_BAD9FE66852F","data":{"keepModel3DLoadedWithoutLocation":true,"label":"\u0413\u0438\u0434\u0440\u0430\u043d\u0442 \u0440\u0430\u0437\u0440\u0435\u0437","panoramaToPanoramaModelTransitionEnabled":true,"showOnlyHotspotsLineSight":true,"showOnlyHotspotsLineSightInPanoramas":true},"backgroundColor":"#333333","sphericalHarmonicsMaxDegree":3,"environmentURL":"media/model_C9B4746D_D83B_5FD2_41E2_BAD9FE66852F/bg_C997F4DE_D83B_58EE_41E1_55ED5434F2C9.jpg","castShadow":true,"surfaceReticleRadius":0.02,"environmentIntensity":0.5,"lights":["this.light_C98BD4D8_D83B_58F2_41B4_ACAF6A8E9A02","this.light_C98AF4D8_D83B_58F2_41BB_789EA967B2CD"],"class":"Model3D","camera":"this.cam_C98C14D6_D83B_58FE_41CA_8E3813E7C5ED","antialiasingLevel":0.3,"objects":["this.model_C9B4746D_D83B_5FD2_41E2_BAD9FE66852F_0","this.sprite_CB6A065A_D809_7BF3_41E3_C4AFE3B387D9"],"surfaceReticleMaxRadius":50,"surfaceSelectionCoef":2,"label":trans('model_C9B4746D_D83B_5FD2_41E2_BAD9FE66852F.label'),"floorRadius":5,"thumbnailUrl":"media/model_C9B4746D_D83B_5FD2_41E2_BAD9FE66852F_t.jpg"},{"progressBarBorderColor":"#000000","toolTipBorderColor":"#767676","toolTipTextShadowColor":"#000000","subtitlesTextShadowOpacity":1,"playbackBarBottom":5,"vrPointerSelectionTime":2000,"left":"6.92%","subtitlesFontColor":"#FFFFFF","toolTipShadowColor":"#333138","progressBarBorderRadius":2,"progressBarBackgroundColorRatios":[0],"vrThumbstickRotationStep":20,"toolTipPaddingTop":4,"data":{"name":"\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u043e\u0440\u0449\u0438\u043a"},"progressBarBorderSize":0,"playbackBarHeadShadowHorizontalLength":0,"playbackBarBorderColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"playbackBarProgressBorderColor":"#000000","progressBorderColor":"#000000","class":"ViewerArea","subtitlesBottom":10,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarBorderRadius":0,"progressBorderRadius":2,"playbackBarHeadShadowVerticalLength":0,"playbackBarHeight":10,"playbackBarHeadBorderRadius":0,"progressLeft":"33%","playbackBarHeadBorderColor":"#000000","playbackBarHeadShadowBlurRadius":3,"playbackBarHeadWidth":6,"toolTipFontSize":"1.11vmin","playbackBarProgressBorderSize":0,"toolTipPaddingBottom":4,"progressBarBackgroundColor":["#3399FF"],"toolTipPaddingRight":6,"minHeight":1,"playbackBarBorderSize":0,"playbackBarBackgroundOpacity":1,"playbackBarBackgroundColorDirection":"vertical","progressBackgroundColor":["#000000"],"minWidth":1,"subtitlesTop":0,"progressBackgroundColorRatios":[0],"id":"ViewerAreaLabeled_F2657C00_D80B_4F3A_41E2_6D508E48853B","playbackBarRight":0,"subtitlesTextShadowColor":"#000000","playbackBarHeadHeight":15,"playbackBarProgressBorderRadius":0,"playbackBarLeft":0,"toolTipPaddingLeft":6,"subtitlesBackgroundOpacity":0.2,"toolTipFontColor":"#606060","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"subtitlesFontSize":"3vmin","subtitlesBorderColor":"#FFFFFF","playbackBarProgressBackgroundColor":["#3399FF"],"propagateClick":false,"surfaceReticleColor":"#FFFFFF","playbackBarHeadShadow":true,"playbackBarHeadShadowOpacity":0.7,"subtitlesFontFamily":"Arial","firstTransitionDuration":0,"toolTipFontFamily":"Arial","top":"17.42%","bottom":"0%","surfaceReticleSelectionColor":"#FFFFFF","vrPointerColor":"#FFFFFF","progressBottom":10,"subtitlesTextShadowHorizontalLength":1,"progressRight":"33%","progressHeight":2,"subtitlesGap":0,"toolTipBackgroundColor":"#F6F6F6","progressBorderSize":0,"vrPointerSelectionColor":"#FF6600","playbackBarProgressBackgroundColorRatios":[0],"width":"48.905%","progressOpacity":0.7,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesBackgroundColor":"#000000","progressBarBackgroundColorDirection":"horizontal"},{"class":"FadeOutEffect","id":"effect_F00B4EB3_D81F_CB63_41E8_53E4CFA49CBE","duration":500},{"iconWidth":"100%","verticalAlign":"middle","layout":"horizontal","rollOverBackgroundColor":["#000000"],"rollOverIconURL":"skin/Button_F3D53960_D819_C91D_41B9_055C7103305B_rollover.png","id":"Button_F3D53960_D819_C91D_41B9_055C7103305B","data":{"name":"Button house info"},"pressedBackgroundOpacity":0,"fontFamily":"Cinzel Bold","paddingLeft":0,"right":"0.75%","paddingRight":0,"rollOverShadow":false,"fontSize":14,"backgroundColor":["#000000"],"fontColor":"#FFFFFF","backgroundOpacity":0,"rollOverBackgroundOpacity":0,"fontWeight":"bold","horizontalAlign":"center","pressedBackgroundColorRatios":[0],"class":"Button","pressedFontColor":"#000000","backgroundColorRatios":[0],"top":"0.13%","paddingTop":0,"iconURL":"skin/Button_F3D53960_D819_C91D_41B9_055C7103305B.png","width":68.05,"paddingBottom":0,"height":66,"iconHeight":"100%","borderColor":"#000000","rollOverFontColor":"#000000","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_F00B5EB3_D81F_CB63_41D1_5B9F93353C2F, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_F00B4EB3_D81F_CB63_41E8_53E4CFA49CBE, 'hideEffect', false)}.bind(this); if(this.isComponentVisible(this.Container_CF41DCC7_D80E_C8D0_41E1_E21E20B63523)){ invisibleFunc(this.Container_CF41DCC7_D80E_C8D0_41E1_E21E20B63523) } else { visibleFunc(this.Container_CF41DCC7_D80E_C8D0_41E1_E21E20B63523) }","rollOverBackgroundColorRatios":[0],"pressedBackgroundColor":["#DB9B4D"],"minWidth":1,"minHeight":1,"rollOverIconWidth":"100%"},{"id":"Label_CD89BDA6_D819_C94A_41E3_F85DA59B1047","data":{"name":"\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"},"right":"0%","fontWeight":"bold","fontFamily":"Impact","fontSize":"5vmin","propagateClick":false,"fontColor":"#000000","text":trans('Label_CD89BDA6_D819_C94A_41E3_F85DA59B1047.text'),"backgroundOpacity":0,"horizontalAlign":"center","class":"Label","top":"0%","width":"100%","height":"16.488%","minWidth":30,"minHeight":16},{"progressBarBorderColor":"#000000","toolTipBorderColor":"#767676","toolTipTextShadowColor":"#000000","subtitlesTextShadowOpacity":1,"playbackBarBottom":5,"vrPointerSelectionTime":2000,"left":0,"subtitlesFontColor":"#FFFFFF","toolTipShadowColor":"#333138","progressBarBorderRadius":2,"progressBarBackgroundColorRatios":[0],"vrThumbstickRotationStep":20,"toolTipPaddingTop":4,"data":{"name":"Main Viewer"},"right":"0%","progressBarBorderSize":0,"playbackBarHeadShadowHorizontalLength":0,"playbackBarBorderColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"playbackBarProgressBorderColor":"#000000","progressBorderColor":"#000000","class":"ViewerArea","subtitlesBottom":50,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarBorderRadius":0,"progressBorderRadius":2,"playbackBarHeadShadowVerticalLength":0,"playbackBarHeight":10,"playbackBarHeadBorderRadius":0,"progressLeft":"33%","playbackBarHeadBorderColor":"#000000","playbackBarHeadShadowBlurRadius":3,"playbackBarHeadWidth":6,"toolTipFontSize":"1.11vmin","playbackBarProgressBorderSize":0,"toolTipPaddingBottom":4,"progressBarBackgroundColor":["#3399FF"],"toolTipPaddingRight":6,"minHeight":50,"playbackBarBorderSize":0,"playbackBarBackgroundOpacity":1,"playbackBarBackgroundColorDirection":"vertical","progressBackgroundColor":["#000000"],"minWidth":100,"subtitlesTop":0,"progressBackgroundColorRatios":[0],"id":"MainViewer","playbackBarRight":0,"subtitlesTextShadowColor":"#000000","playbackBarHeadHeight":15,"playbackBarProgressBorderRadius":0,"playbackBarLeft":0,"toolTipPaddingLeft":6,"subtitlesBackgroundOpacity":0.2,"toolTipFontColor":"#606060","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"subtitlesFontSize":"3vmin","subtitlesBorderColor":"#FFFFFF","playbackBarProgressBackgroundColor":["#3399FF"],"propagateClick":false,"surfaceReticleColor":"#FFFFFF","playbackBarHeadShadow":true,"playbackBarHeadShadowOpacity":0.7,"subtitlesFontFamily":"Arial","firstTransitionDuration":0,"toolTipFontFamily":"Arial","top":"0%","bottom":"0%","surfaceReticleSelectionColor":"#FFFFFF","vrPointerColor":"#FFFFFF","progressBottom":10,"subtitlesTextShadowHorizontalLength":1,"progressRight":"33%","progressHeight":2,"subtitlesGap":0,"toolTipBackgroundColor":"#F6F6F6","progressBorderSize":0,"vrPointerSelectionColor":"#FF6600","playbackBarProgressBackgroundColorRatios":[0],"progressOpacity":0.7,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesBackgroundColor":"#000000","progressBarBackgroundColorDirection":"horizontal"},{"data":{"label":"\u0424\u043e\u0442\u043e \u043f\u043b\u044c\u0431\u043e\u043c \u0433\u043c 80(2)"},"class":"PhotoAlbum","playList":"this.album_FE2D19EE_D809_48F0_41E7_B7D3FDC8BEF0_AlbumPlayList","label":trans('album_FE2D19EE_D809_48F0_41E7_B7D3FDC8BEF0.label'),"id":"album_FE2D19EE_D809_48F0_41E7_B7D3FDC8BEF0","thumbnailUrl":"media/album_FE2D19EE_D809_48F0_41E7_B7D3FDC8BEF0_t.png"},{"class":"FadeInEffect","id":"effect_F00B5EB3_D81F_CB63_41D1_5B9F93353C2F","duration":500},{"html":trans('HTMLText_F2B130CB_D80B_78CE_41B6_ADA561BD20C7.html'),"id":"HTMLText_F2B130CB_D80B_78CE_41B6_ADA561BD20C7","paddingLeft":10,"data":{"name":"\u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043a\u0430"},"paddingRight":10,"right":"0.01%","borderSize":3,"propagateClick":false,"backgroundOpacity":0,"class":"HTMLText","scrollBarMargin":2,"paddingTop":10,"bottom":"0%","width":"38.742%","paddingBottom":10,"height":"84.216%","borderColor":"#000000","scrollBarColor":"#000000","minWidth":1,"minHeight":1},{"class":"PlayList","id":"mainPlayList","items":[{"media":"this.model_C9B4746D_D83B_5FD2_41E2_BAD9FE66852F","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","class":"Model3DPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerModel3DPlayer"},{"media":"this.model_CA6AD5C8_D83B_58D2_41E0_8CCD62657176","end":"this.trigger('tourEnded')","player":"this.MainViewerModel3DPlayer","class":"Model3DPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)"}]},{"class":"PlayList","id":"playList_1F7A4B7C_1102_BA2E_41B0_A82944C0F827","items":[{"class":"PhotoAlbumPlayListItem","media":"this.album_FE2D19EE_D809_48F0_41E7_B7D3FDC8BEF0","player":"this.ViewerAreaLabeled_F2657C00_D80B_4F3A_41E2_6D508E48853BPhotoAlbumPlayer"}]},{"class":"Model3DPlayer","id":"MainViewerModel3DPlayer","viewerArea":"this.MainViewer"},{"data":{"label":"\u0433\u043c 80(2)"},"duration":5000,"height":4000,"class":"Photo","label":trans('album_FE2D19EE_D809_48F0_41E7_B7D3FDC8BEF0_0.label'),"id":"album_FE2D19EE_D809_48F0_41E7_B7D3FDC8BEF0_0","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/album_FE2D19EE_D809_48F0_41E7_B7D3FDC8BEF0_0.webp"}]},"width":6000,"thumbnailUrl":"media/album_FE2D19EE_D809_48F0_41E7_B7D3FDC8BEF0_0_t.webp"},{"class":"PhotoAlbumPlayer","id":"ViewerAreaLabeled_F2657C00_D80B_4F3A_41E2_6D508E48853BPhotoAlbumPlayer","viewerArea":"this.ViewerAreaLabeled_F2657C00_D80B_4F3A_41E2_6D508E48853B"},{"borderRadius":15,"layout":"absolute","id":"Container_CF41DCC7_D80E_C8D0_41E1_E21E20B63523","gap":10,"left":"22.57%","data":{"name":"\u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440"},"right":"11.03%","backgroundColor":["#666666"],"borderSize":10,"scrollBarOpacity":0.14,"propagateClick":false,"backgroundOpacity":0.87,"overflow":"scroll","class":"Container","backgroundColorDirection":"horizontal","backgroundColorRatios":[0.00784313725490196],"top":"18.94%","bottom":"21%","children":["this.HTMLText_F2B130CB_D80B_78CE_41B6_ADA561BD20C7","this.ViewerAreaLabeled_F2657C00_D80B_4F3A_41E2_6D508E48853B","this.Label_CD89BDA6_D819_C94A_41E3_F85DA59B1047","this.Button_F3D53960_D819_C91D_41B9_055C7103305B"],"borderColor":"#0000FF","minHeight":20,"scrollBarColor":"#000000","minWidth":20},{"id":"res_CA6AC5C8_D83B_58D2_41D6_DA5CB0C47AF8","class":"Model3DResource","levels":[{"class":"Model3DResourceLevel","url":"media/model_CA6AD5C8_D83B_58D2_41E0_8CCD62657176/scene.glb"},{"class":"Model3DResourceLevel","url":"media/model_CA6AD5C8_D83B_58D2_41E0_8CCD62657176/scene_mobile.glb","tags":"mobile"}]},{"pitch":45,"yaw":-45,"class":"OrbitLight","castShadow":true,"intensity":0.5,"id":"light_CA2F165C_D83B_5BF2_41DE_29899C8D52E3","shadowTolerance":2},{"pitch":75,"yaw":135,"class":"OrbitLight","castShadow":true,"intensity":0.3,"id":"light_CA2E365C_D83B_5BF2_41E2_B617DE0D38E7","shadowTolerance":2},{"minDistance":2.72,"initialX":0.06,"initialY":3.48,"class":"OrbitModel3DCamera","autoNearFar":true,"maxX":7.56,"id":"cam_CA2FE65C_D83B_5BF2_41DF_151D06EFB07E","maxY":23.34,"maxZ":-6.04,"initialPitch":-30,"minY":-16.37,"minX":-7.43,"doubleClickAction":"none","initialDistance":10.87,"maxDistance":21.75,"minZ":-17.8,"initialZ":-11.92},{"id":"res_C9B3A46E_D83B_5FAE_41E4_8185E526772F","class":"Model3DResource","levels":[{"class":"Model3DResourceLevel","url":"media/model_C9B4746D_D83B_5FD2_41E2_BAD9FE66852F/scene.glb"},{"class":"Model3DResourceLevel","url":"media/model_C9B4746D_D83B_5FD2_41E2_BAD9FE66852F/scene_mobile.glb","tags":"mobile"}]},{"pitch":45,"yaw":-45,"class":"OrbitLight","castShadow":true,"intensity":0.5,"id":"light_C98BD4D8_D83B_58F2_41B4_ACAF6A8E9A02","shadowTolerance":2},{"pitch":75,"yaw":135,"class":"OrbitLight","castShadow":true,"intensity":0.3,"id":"light_C98AF4D8_D83B_58F2_41BB_789EA967B2CD","shadowTolerance":2},{"minDistance":2.71,"initialX":0.06,"initialY":3.48,"class":"OrbitModel3DCamera","autoNearFar":true,"maxX":7.56,"id":"cam_C98C14D6_D83B_58FE_41CA_8E3813E7C5ED","maxY":23.31,"maxZ":-2.71,"initialPitch":-30,"minY":-16.34,"minX":-7.43,"doubleClickAction":"none","initialDistance":10.86,"maxDistance":21.72,"minZ":-8.65,"initialZ":-5.68},{"objectId":"0","data":{"label":"Cylinder.092"},"useHandCursor":false,"class":"InnerModel3DObject","rollOverEnabled":false,"id":"model_C9B4746D_D83B_5FD2_41E2_BAD9FE66852F_0"},{"id":"sprite_CB6A065A_D809_7BF3_41E3_C4AFE3B387D9","data":{"label":"Info 01"},"translationX":-0.06,"translationY":0.1,"x":-1.1248312619410925,"translationZ":0.99,"y":5.112046481397053,"z":-0.2462410365977847,"transparentAreaActive":true,"class":"SpriteModel3DObject","parentId":"0","useHandCursor":false,"image":"this.AnimatedImageResource_1F709AF6_1102_BA3A_41AD_92BDABEBE0E8","width":40,"height":40,"translationLength":28,"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_CEE50FAB_D809_C944_41D3_56B25B157D98, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_CEE52FAB_D809_C944_41D5_9E0F3D98F433, 'hideEffect', false)}.bind(this); if(this.isComponentVisible(this.Container_CF41DCC7_D80E_C8D0_41E1_E21E20B63523)){ invisibleFunc(this.Container_CF41DCC7_D80E_C8D0_41E1_E21E20B63523) } else { visibleFunc(this.Container_CF41DCC7_D80E_C8D0_41E1_E21E20B63523) }"},{"class":"PhotoPlayList","id":"album_FE2D19EE_D809_48F0_41E7_B7D3FDC8BEF0_AlbumPlayList","items":[{"class":"PhotoPlayListItem","camera":{"class":"PhotoCamera","scaleMode":"fit_outside"},"media":"this.album_FE2D19EE_D809_48F0_41E7_B7D3FDC8BEF0_0"}]},{"frameDuration":41,"colCount":4,"levels":[{"height":480,"url":"media/res_CCB0C4C9_D819_D8DA_41C7_383ACBF33843_0.webp","class":"ImageResourceLevel","width":320}],"class":"AnimatedImageResource","finalFrame":"first","id":"AnimatedImageResource_1F709AF6_1102_BA3A_41AD_92BDABEBE0E8","rowCount":6,"frameCount":22}],"start":"this.init(); this.playList_1F7A4B7C_1102_BA2E_41B0_A82944C0F827.set('selectedIndex', 0)","layout":"absolute","backgroundColor":["#666666"],"propagateClick":false,"class":"Player","backgroundColorRatios":[0],"width":"100%","watermark":false,"scrollBarMargin":2,"defaultMenu":["fullscreen","mute","rotation"],"height":"100%","minHeight":0,"scrollBarColor":"#000000","minWidth":0,"scripts":{"getMediaHeight":TDV.Tour.Script.getMediaHeight,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"registerKey":TDV.Tour.Script.registerKey,"playAudioList":TDV.Tour.Script.playAudioList,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getComponentByName":TDV.Tour.Script.getComponentByName,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"createTween":TDV.Tour.Script.createTween,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"toggleVR":TDV.Tour.Script.toggleVR,"historyGoBack":TDV.Tour.Script.historyGoBack,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"clone":TDV.Tour.Script.clone,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getMediaByName":TDV.Tour.Script.getMediaByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"disableVR":TDV.Tour.Script.disableVR,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"initQuiz":TDV.Tour.Script.initQuiz,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"executeJS":TDV.Tour.Script.executeJS,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getPixels":TDV.Tour.Script.getPixels,"openLink":TDV.Tour.Script.openLink,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"shareSocial":TDV.Tour.Script.shareSocial,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"textToSpeech":TDV.Tour.Script.textToSpeech,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"init":TDV.Tour.Script.init,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"enableVR":TDV.Tour.Script.enableVR,"isPanorama":TDV.Tour.Script.isPanorama,"mixObject":TDV.Tour.Script.mixObject,"startMeasurement":TDV.Tour.Script.startMeasurement,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getOverlays":TDV.Tour.Script.getOverlays,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getKey":TDV.Tour.Script.getKey,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setValue":TDV.Tour.Script.setValue,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"showPopupImage":TDV.Tour.Script.showPopupImage,"initAnalytics":TDV.Tour.Script.initAnalytics,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"quizShowScore":TDV.Tour.Script.quizShowScore,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"unloadViewer":TDV.Tour.Script.unloadViewer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"downloadFile":TDV.Tour.Script.downloadFile,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"cloneBindings":TDV.Tour.Script.cloneBindings,"quizStart":TDV.Tour.Script.quizStart,"showWindowBase":TDV.Tour.Script.showWindowBase,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"historyGoForward":TDV.Tour.Script.historyGoForward,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"existsKey":TDV.Tour.Script.existsKey,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"isComponentVisible":TDV.Tour.Script.isComponentVisible,"translate":TDV.Tour.Script.translate,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"showWindow":TDV.Tour.Script.showWindow,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setLocale":TDV.Tour.Script.setLocale,"quizFinish":TDV.Tour.Script.quizFinish,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"unregisterKey":TDV.Tour.Script.unregisterKey}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.1.2, Tue Oct 6 2026