let mainHeader = `
<div class="container clearfix et_menu_container">
				<div class="logo_container">
					<span class="logo_helper"></span>
					<a href="/">
						<img src="/wp-content/uploads/MRail/logo.png" alt="MRail Group" id="logo"
							data-height-percentage="85" />
					</a>
				</div>
				<div id="et-top-navigation" data-height="80" data-fixed-height="40">
					<nav id="top-menu-nav">
						<ul id="top-menu" class="nav">
							<li id="menu-item-533"
								class="menu-item menu-item-type-post_type menu-item-object-page menu-item-533"><a
									href="/who-we-are">Who we are</a></li>
							<li id="menu-item-1086"
								class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1086">
								<a href="#">Services</a>
								<ul class="sub-menu">
									<li id="menu-item-532"
										class="menu-item menu-item-type-post_type menu-item-object-page menu-item-532">
										<a href="/project-programme-management">Project &#038; Programme
											Management</a></li>
									<li id="menu-item-531"
										class="menu-item menu-item-type-post_type menu-item-object-page menu-item-531">
										<a href="/railways">Railways</a></li>
									<li id="menu-item-530"
										class="menu-item menu-item-type-post_type menu-item-object-page menu-item-530">
										<a href="/highways-roads">Highways &#038; Roads</a></li>
									<li id="menu-item-529"
										class="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-459 menu-item-529">
										<a href="/airports" aria-current="page">Airports</a></li>
									<li id="menu-item-528"
										class="menu-item menu-item-type-post_type menu-item-object-page menu-item-528">
										<a href="/transportation-advisory-services">Transportation Advisory
											Services</a></li>
									<li id="menu-item-527"
										class="menu-item menu-item-type-post_type menu-item-object-page menu-item-527">
										<a href="/property-development">Property Development</a></li>
									<li id="menu-item-526"
										class="menu-item menu-item-type-post_type menu-item-object-page menu-item-526">
										<a href="/expert-deployment-services">Expert Deployment Services</a></li>
								</ul>
							</li>
							<li id="menu-item-678"
								class="menu-item menu-item-type-post_type menu-item-object-page menu-item-678"><a
									href="/projects">Projects</a></li>
							<li id="menu-item-524"
								class="menu-item menu-item-type-post_type menu-item-object-page menu-item-524"><a
									href="/contact-us">Contact us</a></li>
						</ul>
					</nav>




					<div id="et_mobile_nav_menu">
						<div class="mobile_nav closed">
							<span class="select_page">Select Page</span>
							<span class="mobile_menu_bar mobile_menu_bar_toggle"></span>
						</div>
					</div>
				</div> <!-- #et-top-navigation -->
			</div> <!-- .container -->
			<div class="et_search_outer">
				<div class="container et_search_form_container">
					<form role="search" method="get" class="et-search-form" action="https://ewlinternational.co.uk/">
						<input type="search" class="et-search-field" placeholder="Search &hellip;" value="" name="s"
							title="Search for:" />
					</form>
					<span class="et_close_search_field"></span>
				</div>
			</div>
            `;

            document.getElementById("main-header").innerHTML = mainHeader;

			console.log(window.location.href);
			
			$('a').each(function(){
				console.log($(this).prop('href'));
				hrefName = window.location.href.toString();
				if(hrefName.indexOf( ".html" )>-1){
					hrefName = hrefName.substring( 0, hrefName.indexOf( ".html" ) );
				};
				
				if ($(this).prop('href') == hrefName) {
					$(this).addClass('current-menu-item'); 
					$(this).parents('li').addClass('current-menu-item');
				};
			});
