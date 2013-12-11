<?php get_header(); ?>

<div class="library">
    <div class="container">

        <article class="post showreel">
            <div class="post-contents">
                <img src="<?php the_field('showreel_thumbnail', 'options'); ?>">
                <i class="play-video" data-video="<?php the_field('showreel_id', 'options'); ?>"></i>
            </div>
            <h2><?php the_field('showreel_title', 'options'); ?></h2>
        </article>

        <section class="row">
            <?php
                $args = array( 'numberposts' => 99, 'child_of' => '6' );
                $lastposts = get_posts( $args );
                foreach($lastposts as $post) : setup_postdata($post);
            ?>

                <article class="col-sm-6 post">
                    <div class="post-contents">
                        <img src="<?php the_field('thumb'); ?>">
                        <i class="play-video" data-video="<?php the_field('vimeo_id'); ?>"></i>
                    </div>
                    <h2><?php the_title(); ?> - <?php the_field('desc_short'); ?></h2>
                </article>

            <?php endforeach; ?>
            <?php wp_reset_query(); ?>
        </section>
    </div>

    <a href="<?php echo home_url('/'); ?>" class="back-home">Back to the homepage</a>
</div>

<?php get_footer(); ?>
