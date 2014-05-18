$(document).ready(function() {
	var $body = $.cookie('body');
	var $mind = $.cookie('mind');
	var $heart = $.cookie('heart');
	var $spirit = $.cookie('spirit');
	var $god = $.cookie('god');

	if ($body === null) {
		$body = 0;
	}
	if ($mind === null) {
		$mind = 0;
	}
	if ($heart === null) {
		$heart = 0;
	}
	if ($spirit === null) {
		$spirit = 0;
	}
	if ($god === null) {
		$god = 0;
	}

	$body = Math.round($body);
	$mind = Math.round($mind);
	$heart = Math.round($heart);
	$spirit = Math.round($spirit);
	$god = Math.round($god);
	
	var $overall = ($body + $mind + $heart + $spirit + $god) / 5.0;
	$overall = Math.round($overall);

	$("#body").text($body);
	$("#mind").text($mind);
	$("#heart").text($heart);
	$("#spirit").text($spirit);
	$("#god").text($god);

	$("#overall").text($overall);
}
);