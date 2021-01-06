<template>
    <main v-if="$route.params.slug">
        <h1>Blog {{$route.params.slug}}</h1>
    </main>
    <main v-else>
        <div>
            <b-card
                title="Testing"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >
                <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>

                <b-button to="/blog/testing" variant="primary">Go somewhere</b-button>
            </b-card>
        </div>
    </main>
</template>