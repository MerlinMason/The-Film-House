<?php

    // stop wordpress from loading it's own version of jQuery
    function wpstarter_custom_js() {
        wp_deregister_script('jquery');
    }
    if (!is_admin()) add_action('wpstarter_enqueue_scripts', 'wpstarter_custom_js', 11);


    // Remove the admin bar from the front end
    add_filter( 'show_admin_bar', '__return_false' );


    // Add custom menus
    register_nav_menus( array(
        'primary' => __( 'Primary Navigation', 'wpfme' ),
        'touch-menu' => __( 'Mobile Navigation', 'wpfme' ),
    ) );


    // Create custom sizes
    // This is then pulled through to your theme useing the_post_thumbnail('custombig');
    if ( function_exists( 'add_image_size' ) ) {
        add_image_size('customsmall', 300, 200, true); //narrow column
        add_image_size('custombig', 400, 500, true); //wide column
    }


    // Remove the version number of WP
    // Warning - this info is also available in the readme.html file in your root directory - delete this file!
    remove_action('wp_head', 'wp_generator');


    // Obscure login screen error messages
    function wpfme_login_obscure(){ return '<strong>Sorry</strong>: Think you have gone wrong somwhere!';}
    add_filter( 'login_errors', 'wpfme_login_obscure' );


    // Disable the theme / plugin text editor in Admin
    define('DISALLOW_FILE_EDIT', true);

?>
