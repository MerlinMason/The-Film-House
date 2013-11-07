<?php
	get_header();

		while ( have_posts() ) : the_post(); ?>

            <div class="slides">
                <ul class="slides-container">
                    <li>
                        <img src="http://flickholdr.com/1000/800" alt="">
                        <div class="container">
                            Slide one
                        </div>
                    </li>
                    <li>
                        <img src="http://flickholdr.com/1000/800/space" alt="">
                        <div class="container">
                            Slide two
                        </div>
                    </li>
                    <li>
                        <img src="http://flickholdr.com/1000/800/tech" alt="">
                        <div class="container">
                            Slide three
                        </div>
                    </li>
                </ul>
                <nav class="slides-pagination">
                    <a href="#" class="next">Next</a>
                    <a href="#" class="prev">Previous</a>
                </nav>
            </div>

		<?php endwhile;

	get_footer();

?>
