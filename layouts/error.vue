<template>
  <div>
    <div class="video-respoonsive">
      <video
        class="bg-video video-start"
        autoplay
        muted
        playsinline
        src="~/assets/video/start.mp4"
      ></video>
      <video
        class="bg-video video-loop"
        loop
        autoplay
        muted
        playsinline
        src="~/assets/video/loop.mp4"
      ></video>
    </div>

    <vs-row class="fluide" justify="center" align="center">
      <vs-col justify="center" align="center">
        <h1>Vous vous êtes perdu...</h1>
        <vs-button size="xl" to="/" gradient>Retour à L'accueil</vs-button>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
export default {
  layout: 'default',
  props: ['error'],
}
</script>
