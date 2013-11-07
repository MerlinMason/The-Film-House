<?php
	get_header();

		while ( have_posts() ) : the_post(); ?>

            <div class="slides">
                <nav class="slides-pagination">
                    <div class="row">
                        <div class="col-sm-2">
                            <a href="#1" class="current">1</a>
                        </div>
                        <div class="col-sm-2">
                            <a href="#2">1</a>
                        </div>
                        <div class="col-sm-2">
                            <a href="#3">1</a>
                        </div>
                        <div class="col-sm-2">
                            <a href="#1">1</a>
                        </div>
                        <div class="col-sm-2">
                            <a href="#2">1</a>
                        </div>
                    </div>
                </nav>
                <nav class="slides-pagination secondary">
                    <div class="row">
                        <div class="col-sm-2 col-sm-offset-2">
                            <a href="#1">1</a>
                        </div>
                        <div class="col-sm-2">
                            <a href="#2">1</a>
                        </div>
                        <div class="col-sm-2">
                            <a href="#3">1</a>
                        </div>
                        <div class="col-sm-2">
                            <a href="#1">1</a>
                        </div>
                        <div class="col-sm-2">
                            <a href="#2">1</a>
                        </div>
                    </div>
                </nav>

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
