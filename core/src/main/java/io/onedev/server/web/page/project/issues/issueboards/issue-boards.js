onedev.server.issueBoards = {
	onDomReady: function() {
		$("body").css("overflow-y", "hidden");
		var $head = $("#issue-boards>.head");
		var $body = $("#issue-boards>.body");
		var ps = new PerfectScrollbar($body[0]);
		$(window).resize(function() {
			$body.outerHeight($(window).height()-$body.offset().top);
			ps.update();
		});
	}, 
	onColumnDomReady: function(containerId) {
		var $body = $("#" + containerId + ">.content>.body");
		var ps = new PerfectScrollbar($body[0]);
		$(window).resize(function() {
			ps.update();
		});
	}
}