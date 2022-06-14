<template>
  <div>
    <!-- GRID D'ACHAT LAPTOP OLED-->
    <vs-row class="mt2" justify="center" align="center"
      ><vs-col w="10" md="12" xs="12" justify="center" align="center"
        ><h1 class="gradient-text">
          Découvrez la sélection OLED éligible
        </h1></vs-col
      >
    </vs-row>
    <vs-row justify="center" align="center">
      <vs-col w="10" md="10" xs="12" justify="center" align="center">
        <vs-row justify="center" align="center">
          <vs-col w="4" md="6" xs="12">
            <a @click="CTA1 = true">
              <div class="OLED_card">
                <img class="img_OLED_PC up" src="~/assets/img/OLED/UX325.png" />
                <p>Zenbook 13 OLED (UX325)</p>
                <vs-button
                  @click="CTA1 = true"
                  gradient
                  size="xl"
                  animation-type="vertical"
                >
                  Acheter
                  <template #animate>
                    <i class="mdi mdi-24px mdi-shopping"></i>
                  </template>
                </vs-button>
              </div>
            </a>
          </vs-col>
          <vs-col w="4" md="6" xs="12">
            <a @click="CTA2 = true">
              <div class="OLED_card">
                <img
                  class="img_OLED_PC up"
                  src="~/assets/img/OLED/UX363.png"
                  alt=""
                />
                <p>Zenbook Flip 13 OLED (UX363)</p>
                <vs-button
                  @click="CTA2 = true"
                  gradient
                  size="xl"
                  animation-type="vertical"
                >
                  Acheter
                  <template #animate>
                    <i class="mdi mdi-24px mdi-shopping"></i>
                  </template>
                </vs-button>
              </div>
            </a>
          </vs-col>
          <vs-col w="4" md="6" xs="12">
            <a @click="CTA3 = true">
              <div class="OLED_card">
                <img
                  class="img_OLED_PC up"
                  src="~/assets/img/OLED/S513.png"
                  alt=""
                  srcset=""
                />
                <p>Vivobook 13 OLED (S533)</p>
                <vs-button
                  @click="CTA3 = true"
                  gradient
                  size="xl"
                  animation-type="vertical"
                >
                  Acheter
                  <template #animate>
                    <i class="mdi mdi-24px mdi-shopping"></i>
                  </template>
                </vs-button>
              </div>
            </a>
          </vs-col>
        </vs-row>
      </vs-col>
    </vs-row>
    <vs-row class="mt" justify="center" align="center">
      <vs-col w="10" md="12" xs="12" justify="center" align="center">
        <vs-row>
          <vs-col w="4" md="6" xs="12">
            <a @click="CTA4 = true">
              <div class="OLED_card">
                <img
                  class="img_OLED_PC up"
                  src="~/assets/img/OLED/UX482.png"
                  alt=""
                  srcset=""
                />
                <p>Zenbook Pro Duo OLED (UX482)</p>
                <vs-button
                  @click="CTA4 = true"
                  gradient
                  size="xl"
                  animation-type="vertical"
                >
                  Acheter
                  <template #animate>
                    <i class="mdi mdi-24px mdi-shopping"></i>
                  </template>
                </vs-button>
              </div>
            </a>
          </vs-col>
          <vs-col w="4" md="6" xs="12">
            <a @click="CTA5 = true">
              <div class="OLED_card">
                <img
                  class="img_OLED_PC up"
                  src="~/assets/img/OLED/T3300.png"
                  alt=""
                  srcset=""
                />
                <p>Vivobook 13 Slate OLED (T3300)</p>
                <vs-button
                  @click="CTA5 = true"
                  gradient
                  size="xl"
                  animation-type="vertical"
                >
                  Acheter
                  <template #animate>
                    <i class="mdi mdi-24px mdi-shopping"></i>
                  </template>
                </vs-button>
              </div>
            </a>
          </vs-col>
          <vs-col w="4" md="6" xs="12">
            <a @click="CTA6 = true">
              <div class="OLED_card">
                <figure class="img_OLED_PC">
                  <figure
                    src="/websites/global/productcustomizedTab/8332/v9/features/images/large/2x/oled_video.jpg"
                  ></figure>
                </figure>
                <img
                  class="img_OLED_PC up"
                  src="~/assets/img/OLED/S3400.png"
                  alt=""
                  srcset=""
                />
                <p>Vivobook Pro 14 OLED (S3400)</p>
                <vs-button
                  @click="CTA6 = true"
                  gradient
                  size="xl"
                  animation-type="vertical"
                >
                  Acheter
                  <template #animate>
                    <i class="mdi mdi-24px mdi-shopping"></i>
                  </template>
                </vs-button>
              </div>
            </a>
          </vs-col>
        </vs-row>
      </vs-col>
    </vs-row>
    <!-- DIALOG CTA ACHAT -->
    <vs-dialog blur width="550px" not-center v-model="CTA1">
      <template #header>
        <h4 class="mt-2 mb-2">OÙ L'ACHETER</h4>
        <p>Zenbook 13 OLED (UX325)</p>
      </template>
      <div class="con-content">
        <vs-row class="mb-2 mt-2">
          <vs-col w="3" xs="6"
            ><img class="up" src="~/assets/img/ASUS.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3" xs="6"
            ><img class="up" src="~/assets/img/fnac.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3" xs="6"
            ><img class="up" src="~/assets/img/darty.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3" xs="6"
            ><img class="up" src="~/assets/img/LDLC.jpg" alt="" srcset=""
          /></vs-col>
        </vs-row>
      </div>
      <template #footer>
        <div class="con-footer">
          <vs-button size="xl" @click="CTA1 = false" transparent>
            Ok
          </vs-button>
        </div>
      </template>
    </vs-dialog>
    <vs-dialog blur width="550px" not-center v-model="CTA2">
      <template #header>
        <h4 class="mt-2 mb-2">OÙ L'ACHETER</h4>
        <p>Zenbook Flip 13 OLED (UX363)</p>
      </template>
      <div class="con-content">
        <vs-row class="mb-2 mt-2">
          <vs-col w="3" xs="6"
            ><img class="up" src="~/assets/img/ASUS.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3" xs="6"
            ><img class="up" src="~/assets/img/fnac.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3" xs="6"
            ><img class="up" src="~/assets/img/darty.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3" xs="6"
            ><img class="up" src="~/assets/img/LDLC.jpg" alt="" srcset=""
          /></vs-col>
        </vs-row>
      </div>
      <template #footer>
        <div class="con-footer">
          <vs-button size="xl" @click="CTA2 = false" transparent>
            Ok
          </vs-button>
        </div>
      </template>
    </vs-dialog>
    <vs-dialog blur width="550px" not-center v-model="CTA3">
      <template #header>
        <h4 class="mt-2 mb-2">OÙ L'ACHETER</h4>
        <p>Vivobook 13 OLED (S533)</p>
      </template>
      <div class="con-content">
        <vs-row class="mb-2 mt-2">
          <vs-col w="3" xs="6"
            ><img class="up" src="~/assets/img/ASUS.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3" xs="6"
            ><img class="up" src="~/assets/img/fnac.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3" xs="6"
            ><img class="up" src="~/assets/img/darty.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3" xs="6"
            ><img class="up" src="~/assets/img/LDLC.jpg" alt="" srcset=""
          /></vs-col>
        </vs-row>
      </div>
      <template #footer>
        <div class="con-footer">
          <vs-button size="xl" @click="CTA3 = false" transparent>
            Ok
          </vs-button>
        </div>
      </template>
    </vs-dialog>
    <vs-dialog blur width="550px" not-center v-model="CTA4">
      <template #header>
        <h4 class="mt-2 mb-2">OÙ L'ACHETER</h4>
        <p>Zenbook Pro Duo OLED (UX482)</p>
      </template>
      <div class="con-content">
        <vs-row class="mb-2 mt-2">
          <vs-col w="3" xs="6"
            ><img class="up" src="~/assets/img/ASUS.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3" xs="6"
            ><img class="up" src="~/assets/img/fnac.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3" xs="6"
            ><img class="up" src="~/assets/img/darty.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3" xs="6"
            ><img class="up" src="~/assets/img/LDLC.jpg" alt="" srcset=""
          /></vs-col>
        </vs-row>
      </div>
      <template #footer>
        <div class="con-footer">
          <vs-button size="xl" @click="CTA4 = false" transparent>
            Ok
          </vs-button>
        </div>
      </template>
    </vs-dialog>
    <vs-dialog blur width="550px" not-center v-model="CTA5">
      <template #header>
        <h4 class="mt-2 mb-2">OÙ L'ACHETER</h4>
        <p>Vivobook 13 Slate OLED (T3300)</p>
      </template>
      <div class="con-content">
        <vs-row class="mb-2 mt-2">
          <vs-col w="3" xs="6"
            ><img class="up" src="~/assets/img/ASUS.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3" xs="6"
            ><img class="up" src="~/assets/img/fnac.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3" xs="6"
            ><img class="up" src="~/assets/img/darty.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3" xs="6"
            ><img class="up" src="~/assets/img/LDLC.jpg" alt="" srcset=""
          /></vs-col>
        </vs-row>
      </div>
      <template #footer>
        <div class="con-footer">
          <vs-button size="xl" @click="CTA5 = false" transparent>
            Ok
          </vs-button>
        </div>
      </template>
    </vs-dialog>
    <vs-dialog blur width="550px" not-center v-model="CTA6">
      <template #header>
        <h4 class="mt-2 mb-2">OÙ L'ACHETER</h4>
        <p>Vivobook Pro 14 OLED (S3400)</p>
      </template>
      <div class="con-content">
        <vs-row class="mb-2 mt-2">
          <vs-col w="3" xs="6"
            ><img class="up" src="~/assets/img/ASUS.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3" xs="6"
            ><img class="up" src="~/assets/img/fnac.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3" xs="6"
            ><img class="up" src="~/assets/img/darty.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3" xs="6"
            ><img class="up" src="~/assets/img/LDLC.jpg" alt="" srcset=""
          /></vs-col>
        </vs-row>
      </div>
      <template #footer>
        <div class="con-footer">
          <vs-button size="xl" @click="CTA6 = false" transparent>
            Ok
          </vs-button>
        </div>
      </template>
    </vs-dialog>
    <!-- END DIALOG CTA ACHAT -->
    <vs-row class="mt-14 mb-14" justify="center" align="center">
      <vs-col w="8" justify="center" align="center">
        <VueCompareImage
          :style="{ maxWidth: '100%' }"
          leftImage="https://asus.com/websites/global/productcustomizedTab/8332/v9/features/images/large/2x/animation/s3/before.webp"
          rightImage="https://asus.com/websites/global/productcustomizedTab/8332/v9/features/images/large/2x/animation/s3/after.webp"
          rightLabel="ASUS OLED"
          leftLabel="LCD"
        />
      </vs-col>
    </vs-row>
    <vs-row class="mt-14 mb-14" justify="center" align="center">
      <vs-col w="8" justify="center" align="center">
        <VueCompareImage
          :style="{ maxWidth: '100%' }"
          leftImage="https://asus.com/websites/global/productcustomizedTab/8332/v9/features/images/large/2x/animation/s8/before.webp"
          rightImage="https://asus.com/websites/global/productcustomizedTab/8332/v9/features/images/large/2x/animation/s8/after.webp"
          rightLabel="ASUS OLED"
          leftLabel="LCD"
        />
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import aosMixin from '~/mixins/aos'
import VueCompareImage from 'vue-compare-image'
export default {
  components: { VueCompareImage },
  mixins: [aosMixin],
  data() {
    return {
      CTA1: false,
      CTA2: false,
      CTA3: false,
      CTA4: false,
      CTA5: false,
      CTA6: false,
    }
  },
}
</script>








    