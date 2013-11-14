<div class="modal about text-center">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <?php the_field('about_popup_text', 'options'); ?>
            </div>
        </div>
        <button class="close-modal">&times;</button>
    </div>
</div>

<div class="modal contact text-center">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <p>
                    <?php the_field('contact_popup_text', 'options'); ?>
                </p>
            </div>
        </div>
        <button class="close-modal">&times;</button>
    </div>
</div>

<div class="modal follow text-center">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">

                <p>email form to be added here</p>

                <p>Or follow us on:</p>
                <ul class="social">
                    <li>
                        <a href="<?php the_field('facebook_link', 'options'); ?>" target="_blank">
                            <span class="text-hidden">Facebook</span>
                            <i class="fa fa-3x fa-facebook-square"></i>
                        </a>
                    </li>
                    <li>
                        <a href="<?php the_field('twitter_link', 'options'); ?>" target="_blank">
                            <span class="text-hidden">Twitter</span>
                            <i class="fa fa-3x fa-twitter-square"></i>
                        </a>
                    </li>
                    <li>
                        <a href="<?php the_field('vimeo_link', 'options'); ?>" target="_blank">
                            <span class="text-hidden">Vimeo</span>
                            <i class="fa fa-3x fa-vimeo-square"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <button class="close-modal">&times;</button>
    </div>
</div>

<div class="spinner"></div>

<?php
	$production = false;
	$theme = get_template_directory_uri();

	// if we're in production mode, include minified concatenated script
	// if not then pull them in unminified individually for easier debugging
	if ($production) {

		echo '<script src ="' . $theme . '/js/production.js"></script>';

	} else {

		echo '<script src ="' . $theme . '/js/bower/jquery/jquery.js"></script>';
		echo '<script src ="' . $theme . '/js/bower/modernizr/modernizr.js"></script>';
        echo '<script src ="' . $theme . '/js/bower/spinjs/spin.js"></script>';
        echo '<script src ="' . $theme . '/js/bower/jquery.animate-enhanced/scripts/src/jquery.animate-enhanced.js"></script>';
		echo '<script src ="' . $theme . '/js/plugins/jquery.spin.js"></script>';
		echo '<script src ="' . $theme . '/js/plugins/superslides.js"></script>';
		echo '<script src ="' . $theme . '/js/project.js"></script>';

	}
?>
<?php wp_footer(); ?>


</body>
</html>
