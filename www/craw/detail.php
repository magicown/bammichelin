<?php
set_time_limit(600);
ini_set("display_errors",1);

include "./common.php";
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
$s['mode5']="dd36bcb56395a5437dd580199b28c93f";

$snoopy->submit($url,$s);
$snoopy->setcookies();

$cnt = 0;
$num = 200010;
$bid = "g5_write_".$num;
$adal = 400010;
//for($i=$bid;$i<=101400;$i+=100){
	$sql = "SELECT * FROM {$bid} WHERE wr_content = ''  ";
	echo $sql."<br>";
	$res = sql_query($sql);
	while($row = sql_fetch_array($res)){
		$url = "http://www.adal7.com/bbs/board.php?bo_table={$adal}&wr_id={$row[wr_10]}";
		//echo $url."<br>";
		$snoopy->fetch($url);
		$content = $snoopy->results;
		//echo $content;
	
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
	
		$tmp1 = explode('<td class="mw_basic_view_content">', $content);
		$tmp2 = explode('<!-- 테러 태그 방지용 -->', $tmp1[1]);
		$ct =  sql_real_escape_string($tmp2[0]);
		
		$sql  = "UPDATE {$bid} SET ";
		$sql .= "wr_subject   = '".trim($subject[1][0])."', ";
		$sql .= "wr_hit   = '".trim(str_replace(",","",$date[3][1]))."', ";
		$sql .= "wr_datetime   = '".$date2." ".$date3."', ";
		$sql .= "wr_content   = '{$ct}' ";
		$sql .= " WHERE wr_10 = '{$row['wr_10']}' ";
		//echo $sql."<br>";
		sql_query($sql);
		sleep(1);
	
	}	
	//$adal += 10;
	//sleep(10);
//}

echo "완료";


?>