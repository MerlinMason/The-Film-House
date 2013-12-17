<div class="flexslider">
    <?php if(get_field('slides')) { ?>
        <ul class="slides">
            <?php while(has_sub_field('slides')) { ?>
                <?php if(get_sub_field('slide')) {
                    // check there's actually an image uploaded to the instance
                ?>
                    <li>
                        <img src="<?php the_sub_field('slide'); ?>" alt="<?php the_title(); ?>">
                    </li>
                <?php } ?>
            <?php } ?>
        </ul>
    <?php } ?>
</div>
