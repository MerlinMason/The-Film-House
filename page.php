<?php get_header(); ?>

<div class="library">
    <div class="container">
        <nav class="isotope-filters">
            <button data-filter="*" class="selected btn">Show All</button>
            <?php
                $categories=get_categories('child_of=5&orderby=slug');
                foreach($categories as $category) {
                    echo '<button class="btn" data-filter=".category-' . $category->slug . '" ' . '>' . $category->name . '</button>';
                }
            ?>
        </nav>

        <section class="isotope-content">
            <?php
                $args = array( 'numberposts' => 99, 'child_of' => '6' );
                $lastposts = get_posts( $args );
                foreach($lastposts as $post) : setup_postdata($post);
            ?>

                <article <?php post_class(); ?>>
                    <div class="img" style="background-image:url(<?php the_field('thumb'); ?>);"></div>
                    <i class="play-video" data-video="<?php the_field('vimeo_id'); ?>"></i>
                    <h2><?php the_title(); ?> - <?php the_field('desc_short'); ?></h2>
                </article>

            <?php endforeach; ?>
            <?php wp_reset_query(); ?>
        </section>
    </div>
</div>

<?php get_footer(); ?>
