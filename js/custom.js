jQuery(document).ready(function( $ ) {

	//-----------------------------------  // Ajax Magic //-----------------------------------//

	// Establish Variables
	var History = window.History,
	    State = History.getState(),
	    $log = $('#log'),
	    loading = false,
	    $loader = $('.icon-nav'),
      getContent, loadAjax, doSearch;

	// Push the requested page url and title to History if a user asks for a new page
	getContent = function(element, title){
		if (loading === false){
		  var path = element.attr('href');
		  History.pushState('ajax',title,path);
		}
    return false;
	};

	$('#main').on('click', '.next-prev a, .entry-title a, .excerpt-link, .archive-box a, .nav a', function(){
		getContent( $(this), $(this).data('title') );
    return false;
	});

	$('#archive-list a,#nav-list a,.featured-image').on('click', function(){
		getContent( $(this), $(this).text() );
    return false;
	});

	// Bind to state change

	// When the statechange happens, load the appropriate url via ajax
	History.Adapter.bind(window,'statechange',function() {
    	loadAjax();
	});

	// Load content with ajax using pushed history state
	loadAjax = function() {
    	loading = true;
		$loader.prepend('<i class="icon-spinner"></i>');

		State = History.getState();

		$(".icon-spinner").fadeIn();
		$(".posts").fadeTo(200,.3);

		var stateURL = encodeURI(State.url);

		$("#main").load(stateURL + ' #main', function(data) {
		    // This code will be run once the ajax page has loaded. Place your scripts here to be run after the AJAX page loads.

		    // Reset page elements now that content has loaded
		    $(".posts").fadeTo(200,1);
		    $(".icon-spinner").fadeOut();
		    $(".icon-spinner").remove();
		    $(".icon-nav a").removeClass("active");
		    $(".icon-folder-close").removeClass('icon-folder-open');
		    $("body").removeClass('body-header-open');
		    $(".header").removeClass('header-open');
		    $("#searchform,#nav-list,#archive-list,#widget-drawer").slideUp();

		    // Scroll to the top of the page
		    $("html, body").animate({
		      scrollTop: $(".header").offset().top
		    }, 500);

		    // Rerun Fitvid
		    $(".post").fitVids();

		    loadDisqus();
		    loadShares();
		    // Loading is complete. It's now safe to load again.
		    loading = false;
		});
	}

	// Icon Nav
	$(".icon-nav a.nav-toggle, .icon-nav a.archive-toggle").click(function(){
		$(this).toggleClass('active');
		$(".icon-nav a").not(this).removeClass();

	    return false;
	});

	// Search Toggle
	$("#searchform").hide();
	$(".search-toggle").click(function() {
		$("#archive-list,#nav-list,#widget-drawer").slideUp(300);
		$("#searchform").slideToggle(300);
    	$(".header").removeClass('header-open');
    	$(".search-form-input").val(WPLANG['type_your_search']);
		return false;
	});

	loadShares = function() {
		// debugger;
		// var d = document;
		// var s = "script";
		// var id = "twitter-wjs";
		// var js,fjs=d.getElementsByTagName(s)[0];
		// if(!d.getElementById(id)){
		// 	js=d.createElement(s);
		// 	js.id=id;
		// 	js.src="//platform.twitter.com/widgets.js";
		// 	fjs.parentNode.insertBefore(js,fjs);
		// };
		twttr.widgets.load();

		var hnAnchorElements = getElementsByClassName("hn-share-button", "a");
		for (j = hnAnchorElements.length - 1; j >= 0; j--)
			renderHN(hnAnchorElements[j]);
 
        gapi.plusone.go();
	};

	getElementsByClassName = function(match, tag) {
      var result = [],
        elements = document.getElementsByTagName(tag || '*'),
        i, elem;
      match = " " + match + " ";
      for (i = 0; i < elements.length; i++) {
        elem = elements[i];
        if ((" " + (elem.className || elem.getAttribute("class")) + " ").indexOf(match) > -1) {
          result.push(elem);
        }
      }
      return result;
    };

	renderHN = function(anchor) {
		var title = anchor.getAttribute("data-title") || document.title,
        url = anchor.getAttribute("data-url") || w.location.href,
        i = document.createElement("iframe");

       var base = "//hnbutton.appspot.com";

      i.src = base + "/button?title=" + encodeURIComponent(title) + "&url=" + encodeURIComponent(url);
      i.scrolling = "auto";
      i.frameBorder = "0";
      i.width = "75px";
      i.height = "20px";
      i.className = "hn-share-iframe";

      anchor.parentNode.insertBefore(i, anchor);
      anchor.parentNode.removeChild(anchor);
	};

	loadDisqus = function() {
		var disqus_shortname = 'invalidargblog'; // required: replace example with your forum shortname

		var s = document.createElement('script'); s.async = true;
		s.type = 'text/javascript';
		s.src = 'http://' + disqus_shortname + '.disqus.com/count.js';
		(document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);

		var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
		dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
	};

	doSearch = function(){
		var searchTerm = $('.search-form-input').val();

		if (searchTerm != WPLANG['type_your_search'] && loading === false){
		  var searchTerm = encodeURIComponent(searchTerm);
		  var searchPath = WPCONFIG['site_url'] + '?s=' + searchTerm;

		  History.pushState('ajax', 'Search results', searchPath);
		}
	};

	// Search via ajax on form submission
	$(".search-form").submit( function(e){
		e.preventDefault();
		doSearch();
	});

	// Also search upon input field blur.
	// This triggers search if iOS users tap "Done"
	// instead of "Go", which they may well do.
	$(".search-form-input").blur( function(e){
		doSearch();
	});

	//-----------------------------------  // Header Area Javascript //-----------------------------------//

	// Archive TToggle
	$("#archive-list").hide();
	$("#archive-toggle").click(function () {
		$("#archive-toggle").toggleClass("open-folder");
		$("#searchform,#nav-list,#widget-drawer").slideUp(300);
		$("#archive-list").slideToggle(300);
		return false;
	});

	// Widget Toggle
	$("#widget-drawer").hide();
	$(".drawer-toggle").click(function () {
		$("#searchform,#nav-list,#archive-list").slideUp(300);
		$("#widget-drawer").slideToggle(300);
		$(".icon-folder-close").removeClass('icon-folder-open');
		return false;
	});

	// Nav Toggle
	$("#nav-list").hide();
	$(".nav-toggle").click(function () {
		$("#searchform,#archive-list,#widget-drawer").slideUp(300);
		$("#nav-list").slideToggle(300);
		$(".icon-folder-close").removeClass('icon-folder-open');
		return false;
	});

	//FitVids
	$(".post").fitVids();

});