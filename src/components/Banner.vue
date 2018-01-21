<template>
  <div class="swiper">  
    <swiper :options="swiperOption">  
      <swiper-slide v-for="(item, index) in banners" :key="index"><img :src="item.titlepic"></swiper-slide>  
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>  
  </div>  
</template>
<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import config from '../config/config.json';

export default {
  data() {
    return {
      banners: '',
      swiperOption: {
        autoplay: true,
        speed: 500,
        loop: true,
        grabCursor: true,
        scrollbar: '.swiper-scrollbar',
        mousewheelControl: true,
        observeParents: true,
        debugger: true,
        centeredSlides: true,
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
  created() {
    this.$axios.get(`${config.apiDomain}/banners`).then((response) => {
      this.banners = response.data;
    }, (error) => {
      console.log(error);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .swiper {
    height: 500px;
    width: 100%;
  }
  .swiper-container .swiper-pagination-bullet {
    background: #ffffff !important;
    opacity: 1;
    width: 15px;
    height: 15px;
  }
  .swiper-container .swiper-pagination-bullet-active {
    background: #000000 !important;
    opacity: 0.8;
  }
  .swiper-button-prev, .swiper-container-rtl .swiper-button-next, .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    background: url('../assets/images/swiper.png');
  }
  .swiper-button-prev, .swiper-button-next{
    height: 80px;
    width: 40px;
  }
  .swiper-button-next {
    background-position:37px 233px; 
  }
</style>