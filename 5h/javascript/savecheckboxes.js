$(document).ready(function() {
	$('input[type="checkbox"]').bind('click', function() {
		//User ID
		var $userId = $('input[name="userid"]').val();
		
		//Percentage
		var $allCheckboxes = $('input[type=checkbox]');
		var $numCheckboxes = $allCheckboxes.length;
		var $numCheckboxesChecked = $allCheckboxes.filter(':checked').length;
		var $percentChecked = ($numCheckboxesChecked * 100) / $numCheckboxes;
		
		//Type
		var $typeName = $('input[name="page"]').val();
		switch ($typeName) {
		case "body":
		case "mind":
		case "heart":
		case "spirit":
		case "god":
			break;
		default:
			$typeName = null;
			break;
		}

		if ($typeName !== null && $percentChecked !== null) {
			$.cookie($typeName, $percentChecked, { expires: 365, path: '/' });
		}
	});
});