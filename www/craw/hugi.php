<?php
//ini_set("display_errors",1);

include "../common.php";
include "Snoopy.class.php";

echo '<meta charset="utf-8">';
$snoopy = new Snoopy;

$snoopy->agent = "(Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36)";
$snoopy->referer = "http://www.adal7.com";


$url= "http://www.adal7.com/bbs/login_check.php";
$s['mb_id']="magicown";
$s['mb_password']="jun1126";
$s['url']="board.php%3Fbo_table%3D200010%26wr_id%3D";
$s['mode4']="MTU0NTQ3MjYxMA==";
$s['mode5']="43e61277a8cf6614a77a08a116f6a515";



$snoopy->submit($url,$s);
$snoopy->setcookies();
//for($bid=200040;$bid<=200040;$bid+=10) {
$bo_num = 200040;
$bo_id = "g5_write_".$bo_num;
$bid = 400040;

for($i=100;$i>=1;$i--) {

    $url = "http://www.adal7.com/bbs/board.php?bo_table=" . $bid . "&page=".$i;
    //echo $url;
    $snoopy->fetch($url);
    $tmp = $snoopy->results;
//print_r($tmp);

    $tmp2 = explode("<!-- 목록 -->", $tmp);
//print_r($tmp2);
    $tmp3 = explode('<!-- 페이지 -->', $tmp2[1]);
//echo $tmp3[0];
    $list_num = $list_area = array();


    preg_match_all('/<a href="board\.php\?bo_table=' . $bid . '&wr_id=(.*?)&page=[0-9]{1,2}" title="(.*?)" >/', $tmp3[0], $detail);
    $list_num[] = $detail[1];//게시물번호
    //print_r($list_num);
    $list_subject[] = $detail[2];//제목
    //print_r($list_subject);

    preg_match_all('/<span class=\'member\'>(.*?)<\/span><\/a>/', $tmp3[0], $name);
    //print_r($name);

    preg_match_all('/\[(.*?)\]<\/a>/i', $tmp3[0], $title);
    //print_r($title);

    for ($a = 0; $a < count($title[1]); $a++) {
        $type = explode("-", $title[1][$a]);
        $wr_name[] = $type[0] . $type[1] . "실장";
        $city[] = $type[0];
        $shop[] = ($type[1] != '') ? $type[1] : '관리자';
    }

    //print_r($city);
    //print_r($shop);

echo count($list_num[0]);
//상세정보 불러오기
print_r( $list_num[0])."<br>";
    for($j=0;$j<count($list_num[0]);$j++) {
        $url = "http://www.adal7.com/bbs/board.php?bo_table=" . $bid . "&wr_id=" . $list_num[0][$j];
		echo $url."<br>";
        $snoopy->fetch($url);
        $content = $snoopy->results;


		$tmp1 = explode('<!-- 게시판 타이틀부분 -->', $content);
		$tmp2 = explode('<!-- 게시판 타이틀부분 end-->', $tmp1[1]);
		//echo $tmp2[0];
		preg_match_all('/-->[\s](.*?)[\s]<\/td>/i', $tmp2[0], $subject);
		//print_r($subject);
		#subject[1][0];
	
		preg_match_all('/<span class="(.*?)">(|[\s])(.*?)<\/span>/i', $tmp2[0], $date);
		//print_r($date);
		$date1 = trim($date[3][0]);
		$date2 = substr($date1,0,10);
		$date3 = substr($date1,-5);	
		
		
        $cont1 = explode('<div id="view_content" class="view_content_abam">', $content);
        $cont2 = explode('<!-- 테러 태그 방지용 -->', $cont1[1]);
        //echo $cont2[0];

        $su = sql_real_escape_string($subject[1][0]);
        $ct = sql_real_escape_string($cont2[0]);

        $sql  = "INSERT INTO {$bo_id} SET ";
        $sql .= "wr_id      = {$list_num[0][$j]}, ";
        $sql .= "wr_num     = -{$list_num[0][$j]}, ";
        $sql .= "wr_parent  = {$list_num[0][$j]}, ";
        $sql .= "ca_name    = '{$city[$j]}', ";
        $sql .= "wr_option  = 'html1', ";
        $sql .= "wr_subject   = '".trim($subject[1][0])."', ";
		$sql .= "wr_hit   = '".trim(str_replace(",","",$date[3][1]))."', ";
		$sql .= "wr_datetime   = '".$date2." ".$date3."', ";
        $sql .= "wr_content = '{$ct}', ";
        $sql .= "mb_id = 'admin', ";
        $sql .= "wr_password = '*78D02788CBC4FB05D363AC13FDABB60C106B1584', ";
        $sql .= "wr_name = '{$shop[$j]}', ";
        $sql .= "wr_1= '{$name[1][$j]}', ";
        $sql .= "wr_10 = '{$list_num[0][$j]}' ";
        
        //echo $sql."<br>";
        sql_query($sql);
        sleep(1);
    }
//echo $content;




}

?>