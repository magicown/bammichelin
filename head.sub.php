<?php
// 이 파일은 새로운 파일 생성시 반드시 포함되어야 함
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

// 테마 head.sub.php 파일
if(!defined('G5_IS_ADMIN') && defined('G5_THEME_PATH') && is_file(G5_THEME_PATH.'/head.sub.php')) {
    require_once(G5_THEME_PATH.'/head.sub.php');
    return;
}

$begin_time = get_microtime();

if (!isset($g5['title'])) {
    $g5['title'] = $config['cf_title'];
    $g5_head_title = $g5['title'];
}
else {
    $g5_head_title = $g5['title']; // 상태바에 표시될 제목
    $g5_head_title .= " | ".$config['cf_title'];
}

// 현재 접속자
// 게시판 제목에 ' 포함되면 오류 발생
$g5['lo_location'] = addslashes($g5['title']);
if (!$g5['lo_location'])
    $g5['lo_location'] = addslashes(clean_xss_tags($_SERVER['REQUEST_URI']));
$g5['lo_url'] = addslashes(clean_xss_tags($_SERVER['REQUEST_URI']));
if (strstr($g5['lo_url'], '/'.G5_ADMIN_DIR.'/') || $is_admin == 'super') $g5['lo_url'] = '';

/*
// 만료된 페이지로 사용하시는 경우
header("Cache-Control: no-cache"); // HTTP/1.1
header("Expires: 0"); // rfc2616 - Section 14.21
header("Pragma: no-cache"); // HTTP/1.0
*/
?>
    <!DOCTYPE html>
    <html lang="en">
    <head>

        <style>
            /* Loading Spinner */
            .spinner{margin:0;width:70px;height:18px;margin:-35px 0 0 -9px;position:absolute;top:50%;left:50%;text-align:center}.spinner > div{width:18px;height:18px;background-color:#333;border-radius:100%;display:inline-block;-webkit-animation:bouncedelay 1.4s infinite ease-in-out;animation:bouncedelay 1.4s infinite ease-in-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}.spinner .bounce1{-webkit-animation-delay:-.32s;animation-delay:-.32s}.spinner .bounce2{-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes bouncedelay{0%,80%,100%{-webkit-transform:scale(0.0)}40%{-webkit-transform:scale(1.0)}}@keyframes bouncedelay{0%,80%,100%{transform:scale(0.0);-webkit-transform:scale(0.0)}40%{transform:scale(1.0);-webkit-transform:scale(1.0)}}
        </style>


        <meta charset="UTF-8">
        <!--[if IE]><meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'><![endif]-->
        <title> <?php echo $g5_head_title; ?> </title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

        <!-- Favicons -->

        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../../assets/images/icons/apple-touch-icon-144-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../../assets/images/icons/apple-touch-icon-114-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../../assets/images/icons/apple-touch-icon-72-precomposed.png">
        <link rel="apple-touch-icon-precomposed" href="../../assets/images/icons/apple-touch-icon-57-precomposed.png">
        <link rel="shortcut icon" href="../../assets/images/icons/favicon.png">



        <link rel="stylesheet" type="text/css" href="../../assets/bootstrap/css/bootstrap.css">


        <!-- HELPERS -->

        <link rel="stylesheet" type="text/css" href="../../assets/helpers/animate.css">
        <link rel="stylesheet" type="text/css" href="../../assets/helpers/backgrounds.css">
        <link rel="stylesheet" type="text/css" href="../../assets/helpers/boilerplate.css">
        <link rel="stylesheet" type="text/css" href="../../assets/helpers/border-radius.css">
        <link rel="stylesheet" type="text/css" href="../../assets/helpers/grid.css">
        <link rel="stylesheet" type="text/css" href="../../assets/helpers/page-transitions.css">
        <link rel="stylesheet" type="text/css" href="../../assets/helpers/spacing.css">
        <link rel="stylesheet" type="text/css" href="../../assets/helpers/typography.css">
        <link rel="stylesheet" type="text/css" href="../../assets/helpers/utils.css">
        <link rel="stylesheet" type="text/css" href="../../assets/helpers/colors.css">

        <!-- ELEMENTS -->

        <link rel="stylesheet" type="text/css" href="../../assets/elements/badges.css">
        <link rel="stylesheet" type="text/css" href="../../assets/elements/buttons.css">
        <link rel="stylesheet" type="text/css" href="../../assets/elements/content-box.css">
        <link rel="stylesheet" type="text/css" href="../../assets/elements/dashboard-box.css">
        <link rel="stylesheet" type="text/css" href="../../assets/elements/forms.css">
        <link rel="stylesheet" type="text/css" href="../../assets/elements/images.css">
        <link rel="stylesheet" type="text/css" href="../../assets/elements/info-box.css">
        <link rel="stylesheet" type="text/css" href="../../assets/elements/invoice.css">
        <link rel="stylesheet" type="text/css" href="../../assets/elements/loading-indicators.css">
        <link rel="stylesheet" type="text/css" href="../../assets/elements/menus.css">
        <link rel="stylesheet" type="text/css" href="../../assets/elements/panel-box.css">
        <link rel="stylesheet" type="text/css" href="../../assets/elements/response-messages.css">
        <link rel="stylesheet" type="text/css" href="../../assets/elements/responsive-tables.css">
        <link rel="stylesheet" type="text/css" href="../../assets/elements/ribbon.css">
        <link rel="stylesheet" type="text/css" href="../../assets/elements/social-box.css">
        <link rel="stylesheet" type="text/css" href="../../assets/elements/tables.css">
        <link rel="stylesheet" type="text/css" href="../../assets/elements/tile-box.css">
        <link rel="stylesheet" type="text/css" href="../../assets/elements/timeline.css">



        <!-- ICONS -->

        <link rel="stylesheet" type="text/css" href="../../assets/icons/fontawesome/fontawesome.css">
        <link rel="stylesheet" type="text/css" href="../../assets/icons/linecons/linecons.css">
        <link rel="stylesheet" type="text/css" href="../../assets/icons/spinnericon/spinnericon.css">


        <!-- WIDGETS -->

        <link rel="stylesheet" type="text/css" href="../../assets/widgets/accordion-ui/accordion.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/calendar/calendar.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/carousel/carousel.css">

        <link rel="stylesheet" type="text/css" href="../../assets/widgets/charts/justgage/justgage.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/charts/morris/morris.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/charts/piegage/piegage.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/charts/xcharts/xcharts.css">

        <link rel="stylesheet" type="text/css" href="../../assets/widgets/chosen/chosen.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/colorpicker/colorpicker.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/datatable/datatable.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/datepicker/datepicker.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/datepicker-ui/datepicker.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/daterangepicker/daterangepicker.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/dialog/dialog.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/dropdown/dropdown.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/dropzone/dropzone.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/file-input/fileinput.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/input-switch/inputswitch.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/input-switch/inputswitch-alt.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/ionrangeslider/ionrangeslider.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/jcrop/jcrop.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/jgrowl-notifications/jgrowl.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/loading-bar/loadingbar.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/maps/vector-maps/vectormaps.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/markdown/markdown.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/modal/modal.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/multi-select/multiselect.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/multi-upload/fileupload.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/nestable/nestable.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/noty-notifications/noty.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/popover/popover.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/pretty-photo/prettyphoto.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/progressbar/progressbar.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/range-slider/rangeslider.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/slidebars/slidebars.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/slider-ui/slider.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/summernote-wysiwyg/summernote-wysiwyg.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/tabs-ui/tabs.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/theme-switcher/themeswitcher.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/timepicker/timepicker.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/tocify/tocify.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/tooltip/tooltip.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/touchspin/touchspin.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/uniform/uniform.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/wizard/wizard.css">
        <link rel="stylesheet" type="text/css" href="../../assets/widgets/xeditable/xeditable.css">

        <!-- SNIPPETS -->

        <link rel="stylesheet" type="text/css" href="../../assets/snippets/chat.css">
        <link rel="stylesheet" type="text/css" href="../../assets/snippets/files-box.css">
        <link rel="stylesheet" type="text/css" href="../../assets/snippets/login-box.css">
        <link rel="stylesheet" type="text/css" href="../../assets/snippets/notification-box.css">
        <link rel="stylesheet" type="text/css" href="../../assets/snippets/progress-box.css">
        <link rel="stylesheet" type="text/css" href="../../assets/snippets/todo.css">
        <link rel="stylesheet" type="text/css" href="../../assets/snippets/user-profile.css">
        <link rel="stylesheet" type="text/css" href="../../assets/snippets/mobile-navigation.css">

        <!-- APPLICATIONS -->

        <link rel="stylesheet" type="text/css" href="../../assets/applications/mailbox.css">

        <!-- Admin theme -->

        <link rel="stylesheet" type="text/css" href="../../assets/themes/admin/layout.css">
        <link rel="stylesheet" type="text/css" href="../../assets/themes/admin/color-schemes/default.css">

        <!-- Components theme -->

        <link rel="stylesheet" type="text/css" href="../../assets/themes/components/default.css">
        <link rel="stylesheet" type="text/css" href="../../assets/themes/components/border-radius.css">

        <!-- Admin responsive -->

        <link rel="stylesheet" type="text/css" href="../../assets/helpers/responsive-elements.css">
        <link rel="stylesheet" type="text/css" href="../../assets/helpers/admin-responsive.css">

        <!-- JS Core -->

        <script type="text/javascript" src="../../assets/js-core/jquery-core.js"></script>
        <script type="text/javascript" src="../../assets/js-core/jquery-ui-core.js"></script>
        <script type="text/javascript" src="../../assets/js-core/jquery-ui-widget.js"></script>
        <script type="text/javascript" src="../../assets/js-core/jquery-ui-mouse.js"></script>
        <script type="text/javascript" src="../../assets/js-core/jquery-ui-position.js"></script>
        <!--<script type="text/javascript" src="../../assets/js-core/transition.js"></script>-->
        <script type="text/javascript" src="../../assets/js-core/modernizr.js"></script>
        <script type="text/javascript" src="../../assets/js-core/jquery-cookie.js"></script>

        <!-- 그누보드 원본 css, js 시작 -->
        <?php
        if (defined('G5_IS_ADMIN')) {
            if(!defined('_THEME_PREVIEW_'))
                echo '<link rel="stylesheet" href="'.G5_ADMIN_URL.'/css/admin.css?ver='.G5_CSS_VER.'">'.PHP_EOL;
        } else {
            echo '<link rel="stylesheet" href="'.G5_CSS_URL.'/'.(G5_IS_MOBILE?'mobile':'default').'.css?ver='.G5_CSS_VER.'">'.PHP_EOL;
        }
        ?>
        <!--[if lte IE 8]>
        <script src="<?php echo G5_JS_URL ?>/html5.js"></script>
        <![endif]-->
        <script>
            // 자바스크립트에서 사용하는 전역변수 선언
            var g5_url       = "<?php echo G5_URL ?>";
            var g5_bbs_url   = "<?php echo G5_BBS_URL ?>";
            var g5_is_member = "<?php echo isset($is_member)?$is_member:''; ?>";
            var g5_is_admin  = "<?php echo isset($is_admin)?$is_admin:''; ?>";
            var g5_is_mobile = "<?php echo G5_IS_MOBILE ?>";
            var g5_bo_table  = "<?php echo isset($bo_table)?$bo_table:''; ?>";
            var g5_sca       = "<?php echo isset($sca)?$sca:''; ?>";
            var g5_editor    = "<?php echo ($config['cf_editor'] && $board['bo_use_dhtml_editor'])?$config['cf_editor']:''; ?>";
            var g5_cookie_domain = "<?php echo G5_COOKIE_DOMAIN ?>";
            <?php if(defined('G5_IS_ADMIN')) { ?>
            var g5_admin_url = "<?php echo G5_ADMIN_URL; ?>";
            <?php } ?>
        </script>
        <script src="<?php echo G5_JS_URL ?>/jquery-1.8.3.min.js"></script>
        <script src="<?php echo G5_JS_URL ?>/jquery.menu.js?ver=<?php echo G5_JS_VER; ?>"></script>
        <script src="<?php echo G5_JS_URL ?>/common.js?ver=<?php echo G5_JS_VER; ?>"></script>
        <script src="<?php echo G5_JS_URL ?>/wrest.js?ver=<?php echo G5_JS_VER; ?>"></script>
        <script src="<?php echo G5_JS_URL ?>/placeholders.min.js"></script>
        <link rel="stylesheet" href="<?php echo G5_JS_URL ?>/font-awesome/css/font-awesome.min.css">
        <?php
        if(G5_IS_MOBILE) {
            echo '<script src="'.G5_JS_URL.'/modernizr.custom.70111.js"></script>'.PHP_EOL; // overflow scroll 감지
        }
        if(!defined('G5_IS_ADMIN'))
            echo $config['cf_add_script'];
        ?>
        <!-- 그누보드 원본 css, js 끝 -->



        <script type="text/javascript">
            $(window).load(function(){
                setTimeout(function() {
                    $('#loading').fadeOut( 400, "linear" );
                }, 300);
            });
        </script>
    </head>


<body>
    
    
<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">

<title><?php echo $g5_head_title; ?></title>

<body<?php echo isset($g5['body_script']) ? $g5['body_script'] : ''; ?>>
<?php
if ($is_member) { // 회원이라면 로그인 중이라는 메세지를 출력해준다.
    $sr_admin_msg = '';
    if ($is_admin == 'super') $sr_admin_msg = "최고관리자 ";
    else if ($is_admin == 'group') $sr_admin_msg = "그룹관리자 ";
    else if ($is_admin == 'board') $sr_admin_msg = "게시판관리자 ";

    echo '<div id="hd_login_msg">'.$sr_admin_msg.get_text($member['mb_nick']).'님 로그인 중 ';
    echo '<a href="'.G5_BBS_URL.'/logout.php">로그아웃</a></div>';
}
?>