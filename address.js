let address = `
<div class="et_pb_row et_pb_row_address">
<div
												class="et_pb_column et_pb_column_1_4 et_pb_column_8  et_pb_css_mix_blend_mode_passthrough">


												<div
													class="et_pb_module et_pb_blurb address_blurb  et_pb_text_align_left  et_pb_blurb_position_top et_pb_bg_layout_light">


													<div class="et_pb_blurb_content">

														<div class="et_pb_blurb_container">
															<h4 class="et_pb_module_header"><span>UK</span></h4>
															<div class="et_pb_blurb_description">112 Morden
																Road<br />London<br /> SW19 3BP, United Kingdom
															</div>
														</div>
													</div> <!-- .et_pb_blurb_content -->
												</div> <!-- .et_pb_blurb -->
											</div> <!-- .et_pb_column -->
											<div
												class="et_pb_column et_pb_column_1_4 et_pb_column_8  et_pb_css_mix_blend_mode_passthrough">


												<div
													class="et_pb_module et_pb_blurb address_blurb  et_pb_text_align_left  et_pb_blurb_position_top et_pb_bg_layout_light">


													<div class="et_pb_blurb_content">

														<div class="et_pb_blurb_container">
															<h4 class="et_pb_module_header"><span>INDIA</span></h4>
															<div class="et_pb_blurb_description">
																<p>Plot 12A, Sector 21 D<br />Faridabad,
																	Haryana,<br />121001, India</p>
															</div>
														</div>
													</div> <!-- .et_pb_blurb_content -->
												</div> <!-- .et_pb_blurb -->
											</div> <!-- .et_pb_column -->
											<div
												class="et_pb_column et_pb_column_1_4 et_pb_column_9  et_pb_css_mix_blend_mode_passthrough">


												<div
													class="et_pb_module et_pb_blurb address_blurb  et_pb_text_align_left  et_pb_blurb_position_top et_pb_bg_layout_light">


													<div class="et_pb_blurb_content">

														<div class="et_pb_blurb_container">
															<h4 class="et_pb_module_header"><span>EU</span></h4>
															<div class="et_pb_blurb_description">
																<p>4/5 Handlowa Street<br />Rzeszow<br />35-103, Poland
																</p>
															</div>
														</div>
													</div> <!-- .et_pb_blurb_content -->
												</div> <!-- .et_pb_blurb -->
											</div> <!-- .et_pb_column -->
											<div
												class="et_pb_column et_pb_column_1_4 et_pb_column_10  et_pb_css_mix_blend_mode_passthrough et-last-child">


												<div
													class="et_pb_module et_pb_blurb address_blurb  et_pb_text_align_left  et_pb_blurb_position_top et_pb_bg_layout_light">


													<div class="et_pb_blurb_content">

														<div class="et_pb_blurb_container">
															<h4 class="et_pb_module_header"><span>Egypt</span></h4>
															<div class="et_pb_blurb_description">
																<p><br />TBC<br />
																</p>
															</div>
														</div>
													</div> <!-- .et_pb_blurb_content -->
												</div> <!-- .et_pb_blurb -->
											</div> <!-- .et_pb_column -->
											</div> <!-- .et_pb_row -->
										<div class="et_pb_row et_pb_row_contact">
											<div
												class="et_pb_column et_pb_column_4_4 et_pb_column_11  et_pb_css_mix_blend_mode_passthrough et-last-child">


												<div
													class="et_pb_module et_pb_text email_text  et_pb_text_align_left et_pb_bg_layout_light">


													<div class="et_pb_text_inner">
														<p style="text-align: center;"><span><a
															href="mailto:info@mrailgrouplimited.co.uk">info@mrailgrouplimited.co.uk</a></span>
														</p>
													</div>
												</div> <!-- .et_pb_text -->
											</div> <!-- .et_pb_column -->


										</div> <!-- .et_pb_row -->
										<div class="et_pb_row et_pb_row_privacy">
											<div
												class="et_pb_column et_pb_column_4_4 et_pb_column_12  et_pb_css_mix_blend_mode_passthrough et-last-child">


												<div
													class="et_pb_module et_pb_text privacy_text  et_pb_text_align_left et_pb_bg_layout_light">


													<div class="et_pb_text_inner">
														<p style="text-align: center;"><a
																href="/privacy-policy.html"><span
																	style="color: #32a8cc !important;">Privacy
																	Policy</span></a></p>
													</div>
												</div> <!-- .et_pb_text -->
											</div> <!-- .et_pb_column -->


										</div> <!-- .et_pb_row -->`;

document.getElementById("address-content").innerHTML = address;                    

var cssId = 'myCss';
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = '\\stylesheets\\addressStyling.css';
    link.media = 'all';
    head.appendChild(link);
}