<div class="target">
    <div class="flexslider">
        <?php if(get_field('slides')) { ?>
            <ul class="slides">
                <?php while(has_sub_field('slides')) { ?>
                    <li>
                        <img src="<?php the_sub_field('slide'); ?>" alt="<?php the_title(); ?>">
                    </li>
                <?php } ?>
            </ul>
        <?php } ?>
    </div>
</div>
