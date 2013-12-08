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
                <?php include('_follow.php'); ?>
            </div>
        </div>
        <button class="close-modal">&times;</button>
    </div>
</div>

<div class="modal video">
    <button class="close-modal">&times;</button>
</div>

<div class="modal touch">
    <nav class="touch-menu">
        <?php wp_nav_menu( array('container_class' => 'menu-header', 'theme_location' => 'touch-menu')); ?>
    </nav>
    <h3>About</h3>
    <p><?php the_field('about_popup_text', 'options'); ?></p>
    <h3>Contact</h3>
    <p><?php the_field('contact_popup_text', 'options'); ?></p>
    <h3>Follow</h3>
    <?php include('_follow.php'); ?>
    <button class="close-modal">&times;</button>
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
        echo '<script src ="' . $theme . '/js/bower/echojs/dist/echo.js"></script>';
		echo '<script src ="' . $theme . '/js/plugins/jquery.spin.js"></script>';
		echo '<script src ="' . $theme . '/js/plugins/superslides.js"></script>';
        echo '<script src ="' . $theme . '/js/plugins/isotope.js"></script>';
		echo '<script src ="' . $theme . '/js/project.js"></script>';

	}
?>
<?php wp_footer(); ?>


</body>
</html>
