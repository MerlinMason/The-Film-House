<?php get_header(); ?>

    <div class="slides">
        <nav class="slides-pagination primary"><a
            href="#1" class="current"><span class="title" data-title="0"></span></a><a
            href="#2"><span class="title" data-title="1"></span></a><a
            href="#3"><span class="title" data-title="2"></span></a><a
            href="#4"><span class="title" data-title="3"></span>
        </a></nav>

        <nav class="slides-pagination secondary"><a
            href="#5"><span class="title" data-title="4"></span></a><a
            href="#6"><span class="title" data-title="5"></span></a><a
            href="#7"><span class="title" data-title="6"></span></a><a
            href="#8"><span class="title" data-title="7"></span>
        </a></nav>

        <nav class="slides-navigation">
            <a href="#" class="next"></a>
            <a href="#" class="prev"></a>
        </nav>

        <ul class="slides-container">

            <?php
                $args = array('numberposts' => 8, 'category' => '4');
                $lastposts = get_posts( $args );
                foreach($lastposts as $post) : setup_postdata($post);
            ?>

                <li data-title="<?php the_title(); ?>" data-href="<?php echo(basename(get_permalink())); ?>">
                    <img src="<?php the_field('bg_main'); ?>" alt="<?php the_title(); ?>">

                    <?php if(get_field('bg_left')) { ?>
                        <img class="img-swap left" src="<?php bloginfo('template_url'); ?>/img/blank.gif" alt="<?php the_title(); ?>" data-echo="<?php the_field('bg_left'); ?>">
                    <?php } ?>

                    <?php if(get_field('bg_right')) { ?>
                        <img class="img-swap right" src="<?php bloginfo('template_url'); ?>/img/blank.gif" alt="<?php the_title(); ?>" data-echo="<?php the_field('bg_right'); ?>">
                    <?php } ?>

                    <div class="container">
                        <div class="play-icon-container">
                            <img src="<?php the_field('logo'); ?>" class="preserve touch-logo">

                            <?php if (in_category('video')) { ?>
                                <i class="play-media" data-video="<?php the_field('vimeo_id'); ?>"></i>
                            <?php } ?>

                            <?php if (in_category('photo')) { ?>
                                <i class="play-media" data-slideshow="<?php the_permalink(); ?>"></i>
                            <?php } ?>

                            <a href="#" class="touch-info caps">Info</a>
                        </div>
                        <article class="slide-info">
                            <div class="logo-container mb-05x">
                                <img src="<?php the_field('logo'); ?>" class="preserve logo">
                            </div>
                            <h2 class="mb-1x caps"><?php the_field('desc_short'); ?></h2>

                            <div class="tab-container">
                                <nav class="tab-nav mb-1x hide-touch">
                                    <button data-action="about" class="btn-simple selected">About</button>
                                    <button data-action="credits" class="btn-simple">Credits</button>
                                    <button data-action="links" class="btn-simple">Links</button>
                                </nav>

                                <div class="tab about">
                                    <h3 class="show-touch hidden mb-1x">About</h3>
                                    <?php the_field('about'); ?>
                                </div>
                                <div class="tab credits hidden">
                                    <h3 class="show-touch hidden mb-1x">Credits</h3>
                                    <?php the_field('credits'); ?>
                                </div>
                                <div class="tab links hidden">
                                    <h3 class="show-touch hidden mb-1x">Links</h3>
                                    <?php the_field('links'); ?>
                                </div>
                            </div>
                        </article>
                    </div>
                </li>

            <?php endforeach; ?>
            <?php wp_reset_query(); ?>

        </ul>
    </div>

<?php get_footer(); ?>
