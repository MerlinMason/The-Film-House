<?php get_header(); ?>

    <div class="slides">
        <nav class="slides-pagination">
            <div class="row">
                <div class="col-sm-2">
                    <a href="#1" class="current">
                        <span class="title" data-title="0"></span>
                    </a>
                </div>
                <div class="col-sm-2">
                    <a href="#2">
                        <span class="title" data-title="1"></span>
                    </a>
                </div>
                <div class="col-sm-2">
                    <a href="#3">
                        <span class="title" data-title="2"></span>
                    </a>
                </div>
                <div class="col-sm-2">
                    <a href="#1">
                        <span class="title" data-title="3"></span>
                    </a>
                </div>
                <div class="col-sm-2">
                    <a href="#2">
                        <span class="title" data-title="4"></span>
                    </a>
                </div>
            </div>
        </nav>
        <nav class="slides-pagination secondary">
            <div class="row">
                <div class="col-sm-2 col-sm-offset-2">
                    <a href="#1">
                        <span class="title" data-title="5"></span>
                    </a>
                </div>
                <div class="col-sm-2">
                    <a href="#2">
                        <span class="title" data-title="6"></span>
                    </a>
                </div>
                <div class="col-sm-2">
                    <a href="#3">
                        <span class="title" data-title="7"></span>
                    </a>
                </div>
                <div class="col-sm-2">
                    <a href="#1">
                        <span class="title" data-title="8"></span>
                    </a>
                </div>
                <div class="col-sm-2">
                    <a href="#2">
                        <span class="title" data-title="9"></span>
                    </a>
                </div>
            </div>
        </nav>
        <nav class="slides-navigation">
            <a href="#" class="next">
                <i class="icon-right-open-big"></i>
            </a>
            <a href="#" class="prev">
                <i class="icon-left-open-big"></i>
            </a>
        </nav>

        <ul class="slides-container">

            <?php
                $args = array( 'numberposts' => 10, 'category' => '4' );
                $lastposts = get_posts( $args );
                foreach($lastposts as $post) : setup_postdata($post);
            ?>

                <li data-title="<?php the_title(); ?>">
                    <img src="<?php the_field('bg_main'); ?>" alt="<?php the_title(); ?>">
                    <img class="img-swap left" src="<?php bloginfo('template_url'); ?>/img/blank.gif" alt="<?php the_title(); ?>" data-echo="<?php the_field('bg_left'); ?>">
                    <img class="img-swap right" src="<?php bloginfo('template_url'); ?>/img/blank.gif" alt="<?php the_title(); ?>" data-echo="<?php the_field('bg_right'); ?>">
                    <div class="container">
                        <div class="play-icon-container">
                            <img src="<?php the_field('logo'); ?>" class="preserve touch-logo">
                            <i class="play-video" data-video="<?php the_field('vimeo_id'); ?>"></i>
                            <a href="#" class="touch-info">Info</a>
                        </div>
                        <article class="slide-info">
                            <div class="logo-container">
                                <img src="<?php the_field('logo'); ?>" class="preserve logo">
                            </div>
                            <h2 class="mb-1x"><?php the_field('desc_short'); ?></h2>
                            <div class="row mb-2x">
                                <div class="col-sm-3">
                                    <h3 class="mb-05x">About</h3>
                                    <?php the_field('about'); ?>
                                </div>
                                <div class="col-sm-3">
                                    <h3 class="mb-05x">Credits</h3>
                                    <?php the_field('credits'); ?>
                                </div>
                                <div class="col-sm-3">
                                    <h3 class="mb-05x">Links</h3>
                                    <?php the_field('links'); ?>
                                </div>
                                <button class="close-touch-info">&times;</button>
                            </div>
                        </article>
                    </div>
                </li>

            <?php endforeach; ?>
            <?php wp_reset_query(); ?>

        </ul>
    </div>

<?php get_footer(); ?>
