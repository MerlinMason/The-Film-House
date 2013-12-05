<?php get_header(); ?>

    <div class="container">
        <div class="row">
            <div class="col-sm-3">Cat</div>
            <div class="col-sm-3">Cat</div>
            <div class="col-sm-3">Cat</div>
            <div class="col-sm-3">Cat</div>
        </div>
    </div>

    <?php
        $args = array( 'numberposts' => 10, 'category' => '3' );
        $lastposts = get_posts( $args );
        foreach($lastposts as $post) : setup_postdata($post);
    ?>

        <i class="play-video" data-video="<?php the_field('vimeo_id'); ?>"></i>
        <h2><?php the_field('desc_short'); ?></h2>

    <?php endforeach; ?>
    <?php wp_reset_query(); ?>

<?php get_footer(); ?>
