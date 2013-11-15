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
                            <article class="slide-info">
                                <img src="http://placehold.it/200x100" class="preserve">
                                <h2>Sub-title</h2>
                                <div class="row mb-2x">
                                    <div class="col-sm-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, modi, sequi laudantium non illum vitae placeat voluptatem iste perspiciatis molestias cum hic. Enim, necessitatibus libero autem laboriosam iste illum repellendus!</div>
                                    <div class="col-sm-3">Aspernatur, in accusantium doloribus cumque neque aliquid id saepe reiciendis. Possimus, rem saepe ipsum vel error tempore doloremque! Culpa impedit iste provident earum sequi mollitia incidunt necessitatibus amet totam ratione.</div>
                                    <div class="col-sm-3">Ipsum, totam neque modi praesentium aspernatur eligendi doloribus non et accusantium mollitia qui provident vel numquam iste consequuntur dolore omnis inventore excepturi repellat perferendis. Perspiciatis quaerat fugit repellendus qui eveniet.</div>
                                </div>
                            </article>
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
