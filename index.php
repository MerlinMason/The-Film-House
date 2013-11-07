<?php
	get_header();

		while ( have_posts() ) : the_post(); ?>

            <div class="slides">
                <ul class="slides-container">
                    <li>
                        <img src="http://flickholdr.com/1000/800" alt="">
                        <div class="container">
                        </div>
                    </li>
                    <li>
                        <img src="http://flickholdr.com/1000/800/space" alt="">
                        <div class="container">
                        </div>
                    </li>
                    <li>
                        <img src="http://flickholdr.com/1000/800/tech" alt="">
                        <div class="container">
                        </div>
                    </li>
                </ul>
            </div>

		<?php endwhile;

	get_footer();

?>
