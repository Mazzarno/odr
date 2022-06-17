<template>
  <div>
    <section class="header">
      <SVGUHD />
      <SVGHD />
      <SVGTABLET />
      <SVGMOBILE />
    </section>
    <!-- FIN HEADER -->
    <section class="section">
      <vs-row justify="center" align="center">
        <vs-col lg="12" w="12" sm="12" justify="center" align="center">
          <h1 class="title-content mb-5 mt-5">
            5 raisons de choisir les PC ASUS OLED
          </h1>
          <vs-row class="" justify="center" align="center"
            ><vs-col
              lg="2"
              w="6"
              sm="6"
              xs="12"
              justify="center"
              align="center"
            >
              <nuxt-link :to="{ path: '/', hash: '#couleurs' }">
                <vs-card type="2" class="ma-5"
                  ><template #title>
                    <h1>
                      Espace de couleurs 100% DCI-P3, le meilleur de sa
                      catégorie
                    </h1> </template
                  ><template #img>
                    <img
                      height="100%"
                      class="img_card"
                      src="https://www.asus.com/websites/global/productcustomizedTab/8332/v9/features/images/large/2x/s2_1.webp"
                    />
                  </template>
                  <template #text>
                    <p class="text-content2">
                      Dalles aux couleurs vives pour gagner en précision sur vos
                      projets de création et de colorisation ainsi que pour
                      profiter de vos divertissements.
                    </p>
                  </template>
                </vs-card>
              </nuxt-link>
            </vs-col>
            <vs-col lg="2" w="6" sm="6" xs="12"
              ><nuxt-link :to="{ path: '/', hash: '#bleu' }"
                ><vs-card type="2" class="ma-5"
                  ><template #title>
                    <h1>70% de lumière bleue en moins</h1></template
                  ><template #img>
                    <img
                      class="img_card"
                      src="https://www.asus.com/websites/global/productcustomizedTab/8332/v9/features/images/large/2x/s2_2.webp"
                      alt=""
                    />
                  </template>
                  <template #text>
                    <p class="text-content2">
                      Avec leurs faibles niveaux d'émission de lumière bleue,
                      les dalles OLED protègent vos yeux et améliorent la
                      qualité de votre sommeil.
                    </p>
                  </template>
                </vs-card>
              </nuxt-link></vs-col
            >
            <vs-col lg="2" w="6" sm="6" xs="12">
              <nuxt-link :to="{ path: '/', hash: '#lumos' }">
                <vs-card type="2" class="ma-5"
                  ><template #title>
                    <h1>
                      Des images plus nettes quel que soit le niveau de
                      luminosité de l'écran
                    </h1> </template
                  ><template #img>
                    <img
                      class="img_card"
                      height="100%"
                      src="https://www.asus.com/websites/global/productcustomizedTab/8332/v9/features/images/large/2x/s2_3.webp"
                      alt=""
                    />
                  </template>
                  <template #text>
                    <p class="text-content2">
                      Des couleurs riches même à faible niveau de luminosité :
                      toujours plus superbes !
                    </p></template
                  >
                </vs-card>
              </nuxt-link>
            </vs-col>
            <vs-col lg="2" w="6" sm="6" xs="12"
              ><nuxt-link :to="{ path: '/', hash: '#contraste' }"
                ><vs-card type="2" class="ma-5"
                  ><template #title>
                    <h1>
                      DisplayHDR™ <br />
                      500/600 True Black
                    </h1> </template
                  ><template #img>
                    <img
                      class="img_card"
                      src="https://www.asus.com/websites/global/productcustomizedTab/8332/v9/features/images/large/2x/s2_4.webp"
                      alt=""
                    />
                  </template>
                  <template #text>
                    <p class="text-content2">
                      Les noirs profonds vous permettent de repérer des détails
                      jusque là cachés dans les scènes sombres de vos films
                      préférés.
                    </p>
                  </template>
                </vs-card></nuxt-link
              >
            </vs-col>
            <vs-col lg="2" w="6" sm="6" xs="12"
              ><nuxt-link :to="{ path: '/', hash: '#ms' }"
                ><vs-card type="2" class="ma-5"
                  ><template #title>
                    <h1>Temps de réponse ultra-rapide de 0,2 ms</h1></template
                  ><template #img>
                    <img
                      class="img_card"
                      src="https://www.asus.com/websites/global/productcustomizedTab/8332/v9/features/images/large/2x/s2_5.webp"
                      alt=""
                    />
                  </template>
                  <template #text>
                    <p class="text-content2">
                      Des jeux et films aux scènes d'action sans flou cinétique
                      ; des textes que vous pouvez faire défiler en toute
                      fluidité.
                    </p>
                  </template>
                </vs-card></nuxt-link
              >
            </vs-col></vs-row
          >
          <vs-row justify="center" align="center">
            <vs-col w="6" sm="10">
              <p class="text-content2 mt-14">
                Les PC portables ASUS avec dalle OLED sont dotés de la meilleure
                gamme de couleurs de leur catégorie. Ils reproduisent chaque
                couleur avec une fidélité épatante pour un rendu plus vrai que
                nature et des images d'une qualité professionnelle. Ces
                ordinateurs conviennent particulièrement aux créateurs ou tout
                utilisateur souhaitant profiter de couleurs exceptionnelles sur
                son écran. Les dalles OLED sont composées de diodes
                électroluminescentes organiques qui réduisent naturellement les
                émissions de lumière bleue jusqu'à 70 % comparées aux dalles LCD
                classiques. Ces dalles protègent l'utilisateur contre le risque
                de dégradation de sa vue.
              </p>
            </vs-col>
          </vs-row>
        </vs-col>
      </vs-row>
    </section>
    <section class="section_fonctionnement mt-14">
      <vs-row class="mt-14" justify="center" align="center">
        <vs-col lg="10" w="12" sm="12" xs="12" justify="center" align="center">
          <h1 class="mb-14">Comment ça fonctionne ?</h1>
          <vs-row>
            <vs-col lg="3" w="6" sm="6" xs="12">
              <nuxt-link :to="{ path: '/', hash: '#couleurs' }">
                <vs-card class="ma-2">
                  <template #title>
                    <span class="mdi mdi-36px mdi-cart-outline"></span>
                    <h2 class="my-2">Acheter un PC ASUS OLED</h2>
                  </template>
                  <template #text>
                    <p class="mb-5">
                      Cette offre de remboursement s’applique pour l’achat d’un
                      PC de la sélection ASUS OLED présente sur la page
                      suivante. Avec cette offre exclusive vous pourrez combiner
                      le remboursement de votre ancien pc en plus des réductions
                      liés soldes.
                    </p>
                  </template>
                </vs-card>
              </nuxt-link>
            </vs-col>
            <vs-col w="3" sm="6" xs="12">
              <vs-card type="1" class="ma-2" color="">
                <template #title>
                  <span class="mdi mdi-36px mdi-file-sign"></span>
                  <h2 class="my-2">Enregistrez-vous</h2>
                </template>
                <template #text>
                  <p class="mb-5">
                    Enregistrez-vous en 5 minutes sur le site
                    asuspromotions.com/oled dans les 15 jours suivant votre
                    achat. Nous vous inviterons à nous donner les détails de
                    l’achat de votre nouvel ordinateur ainsi que certaines
                    informations quant à l’ancien ordinateur que vous souhaitez
                    faire reprendre.
                  </p>
                </template>
              </vs-card></vs-col
            >
            <vs-col w="3" sm="6" xs="12">
              <vs-card class="ma-2">
                <template #title>
                  <span class="mdi mdi-36px mdi-cube-send"></span>
                  <h2 class="my-2">Renvoyez-nous votre ancien ordinateur</h2>
                </template>
                <template #text>
                  <p class="mb-5">
                    Dans les 15 jours qui suivent votre enregistrement et après
                    approbation de notre part il faut impérativement renvoyer
                    votre ancien ordinateur. Vous trouverez l’ensemble des
                    informations sur la page asuspromotions.com/oled
                  </p>
                </template>
              </vs-card></vs-col
            >
            <vs-col w="3" sm="6" xs="12">
              <vs-card class="ma-2">
                <template #title>
                  <span class="mdi mdi-36px mdi-wallet-outline"></span>
                  <h2 class="my-2">Faites-vous rembourser</h2>
                </template>
                <template #text>
                  <p class="mb-5">
                    Cette offre de remboursement s’applique pour l’achat d’un PC
                    de la sélection ASUS OLED présente sur la page suivante.
                    Avec cette offre exclusive vous pourrez combiner le
                    remboursement de votre ancien pc en plus des réductions liés
                    soldes.
                  </p>
                </template>
              </vs-card></vs-col
            >
          </vs-row>
        </vs-col></vs-row
      >
    </section>
    <!-- FIN BLOC EXPLIQUATION -->
    <section class="section mt-14">
      <vs-row justify="center" align="center">
        <vs-col w="6" sm="10" xs="10" justify="center" align="center">
          <h1 class="mb-14 mt-14">
            Découvrez le processeur de votre PC ou de votre MAC pour connaître
            le montant de votre remboursement
          </h1>
          <v-autocomplete
            dark
            :items="processors"
            item-color="dark"
            item-text="name"
            label="Processeur"
            v-model="selectedProcessor"
            hide-data
            hide-selected
            item-value="API"
            prepend-icon="mdi-chevron-right"
            return-object
            no-data-text="Pas de données pour votre processeur"
          ></v-autocomplete>
          <div v-show="selectedProcessor">
            <h2 class="gradient-text">
              Vous avez sélectionnée un processeur :
              {{ selectedProcessor.name }}, vous pouvez donc percevoir entre
              <span>{{ selectedProcessor.priceB }} €</span>
              et
              <span>{{ selectedProcessor.priceA }} €</span>
              en fonction de l'état du matériel*.
            </h2>
          </div>
          <div v-show="selectedProcessor">
            <p>
              * L’ordinateur ne doit pas être âgé de plus de 7 ans (date de
              production) et doit répondre aux critères de qualité attendus.
            </p>
          </div>
        </vs-col>
      </vs-row>
      <vs-row class="mt-14 table_data" justify="center" align="center"
        ><vs-col class="mt-14" w="6" sm="10" xs="none">
          <div class="center table_data">
            <vs-table striped vs-theme="dark">
              <template #thead>
                <vs-tr class="center">
                  <vs-th> Processeur </vs-th>
                  <vs-th> Prix Maximum </vs-th>
                  <vs-th> Prix Minimum </vs-th>
                </vs-tr>
              </template>
              <template #tbody>
                <vs-tr
                  :key="i"
                  v-for="(processors, i) in $vs.getPage(processors, page, max)"
                  :data="processors"
                  class="center"
                >
                  <vs-td>
                    {{ processors.name }}
                  </vs-td>
                  <vs-td>
                    {{ processors.priceA }}
                  </vs-td>
                  <vs-td>
                    {{ processors.priceB }}
                  </vs-td>
                </vs-tr>
              </template>
              <template #footer>
                <vs-pagination
                  v-model="page"
                  :length="$vs.getLength(processors, max)"
                />
              </template>
            </vs-table>
          </div> </vs-col
      ></vs-row>
    </section>

    <section id="couleurs" class="section">
      <vs-row class="mb-14 mt-14" justify="center" align="center">
        <vs-row class="mb-14" justify="center" align="center"
          ><vs-col w="6" sm="10" xs="10">
            <h1 class="gradient-text">Haut en couleurs</h1>
            <h1 class="title-content mb-4">Affichage professionnel</h1>
            <p class="text-content2">
              Les PC portables ASUS avec dalle OLED sont capables d'afficher un
              niveau de détail et de réalisme tout bonnement exceptionnel
              notamment grâce à l'espace de couleurs 100 % DCI-P3. Cela signifie
              que les couleurs reproduites à l'écran sont plus riches et vives
              pour vos projets artistiques mais aussi pour mettre en valeur tout
              type de contenu.
            </p></vs-col
          ></vs-row
        >
        <vs-col lg="8" w="8" sm="6" xs="10" justify="center" align="center">
          <img class="img_twenty" src="~/assets/img/OLED_couleur.jpg"
        /></vs-col>
      </vs-row>
    </section>

    <section id="bleu" class="section">
      <vs-row justify="center" align="center">
        <vs-col w="10" justify="center" align="center">
          <vs-row justify="center" align="center">
            <vs-col w="6" sm="10" xs="12" justify="center" align="center">
              <vs-row justify="center" align="center">
                <h1 class="gradient-text">Eye Care</h1>
                <h1 align="start" class="title-content">
                  Se protéger les yeux, un geste encore plus important pour les
                  enfants
                </h1>
                <p align="start" class="text-content2">
                  Les yeux des enfants ne sont pas encore entièrement
                  développés, leur cristallin et leur cornée sont plus
                  transparents. La lumière bleue nocive pénètre dans l'œil plus
                  facilement ce qui peut causer un vieillissement prématuré de
                  la rétine. La recherche4 a montré que 60 % de la lumière bleue
                  émise par un écran passe à travers la rétine d'un enfant de 5
                  ans, alors que ce chiffre n'atteint que les 20 % pour un
                  adulte de 60 ans. Nos dalles ASUS OLED au niveau d'émission de
                  lumière bleue réduit, vous aident à mieux protéger les yeux de
                  vos enfants.
                </p></vs-row
              > </vs-col
            ><vs-col w="6" sm="10" xs="12">
              <img
                class="img_twenty"
                src="https://www.asus.com/websites/global/productcustomizedTab/8332/v9/features/images/large/1x/s6.jpg"
                alt=""
            /></vs-col>
          </vs-row>
        </vs-col>
      </vs-row>
    </section>
    <section id="lumos" class="mt-14">
      <vs-row justify="center" align="center"
        ><vs-col w="6" sm="10" xs="10">
          <h1 class="gradient-text2 mt-14">Luminosité perçue</h1>
          <h1 class="title-content my-5">
            L'OLED bénéficie d'une bien meilleure luminosité perçue
          </h1>
          <p class="text-content2 mb-10">
            Les PC portables ASUS OLED sont capables d'afficher continuellement
            une bonne reproduction des couleurs quel que soit le niveau de
            luminosité défini, afin que vous puissiez ajuster ce dernier comme
            bon vous semble sans vous inquiéter des répercussions sur le
            dynamisme des couleurs. Par exemple dans un salon avec une intensité
            lumineuse généralement évaluée à 100 lux, vous pourrez définir la
            luminosité de votre dalle OLED à seulement 177 nits et profiter des
            mêmes images nettes que celles proposées sur une dalle LCD avec une
            luminosité réglée à 400 nits ! Plus le niveau de luminosité d'une
            dalle OLED est faible, moins vous subirez les effets nocifs des
            émissions de lumière bleue.
          </p>

          <vs-row> </vs-row> </vs-col
      ></vs-row>
      <vs-row justify="center" align="center">
        <vs-col w="8" justify="center" align="center"> </vs-col>
      </vs-row>
    </section>
    <section class="mt-14">
      <vs-row justify="center" align="center">
        <vs-col lg="6" w="6" sm="6" xs="10">
          <div class="mx">
            <img
              @click="popupVid1 = true"
              src="https://www.asus.com/websites/global/productcustomizedTab/8332/v9/features/images/large/2x/oled_video.jpg"
              class="up img_oled responsive"
              alt="Vivobook 13 Slate OLED"
            />
            <div class="img__oled-play" @click="popupVid1 = true"></div>
          </div>
        </vs-col>
      </vs-row>

      <vs-dialog width="60%" v-model="popupVid1" not-padding blur>
        <div class="video-responsive">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/zgZlXb1c794"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe></div
      ></vs-dialog>
    </section>
    <!-- FIN VIDEO -->
    <section id="contraste mt-14" class="section">
      <vs-row class="mt-14" justify="center" align="center"
        ><vs-col w="6" sm="10" xs="10">
          <h1 class="gradient-text3 mt-14 mb-3">Contraste</h1>
          <h1 class="title-content">True black : voir l'imperceptible</h1>
          <p class="text-content2 my-5">
            Les PC portables ASUS OLED reproduisent les noirs à la perfection.
            Un pixel OLED consiste en trois sous-pixels, chacun générant sa
            propre luminosité : une dalle OLED Full HD (1920x1080) intègre 2 073
            600 pixels, ce qui signifie qu'elle possède 6 220 800 sous-pixels
            auto-éclairés. À l'inverse les dalles LCD Full HD ne possèdent
            qu'une dizaine de LED rétroéclairées. Lorsqu'il affiche du noir sur
            une dalle OLED, le pixel est simplement éteint pour produire la
            nuance la plus foncée possible. Vous profitez ainsi d'images claires
            et nettes mêmes dans les zones les plus sombres de votre image. Vous
            serez surpris de voir tous les nouveaux détails que vous pourrez
            découvrir dans vos films préférés !
          </p>
          <p class="mb-2">Jusqu'à</p>
        </vs-col></vs-row
      >
      <vs-row justify="center" align="center">
        <vs-col w="8">
          <vs-row>
            <vs-col w="4" sm="10" xs="12"
              ><h1 class="gradient-text3 text-content">1 000 000:1</h1>
              <p>rapport de contraste</p></vs-col
            >
            <vs-col w="4" sm="10" xs="12">
              <h1 class="gradient-text3 title-content">600nits</h1>
              <p>de luminosité maximale5</p>
            </vs-col>
            <vs-col w="4" sm="10" xs="12"
              ><h1 class="gradient-text3 title-content">0,0005nits</h1>
              <p>true black</p></vs-col
            ></vs-row
          >
        </vs-col>
      </vs-row>
      <vs-row class="mt-14" justify="center" align="center">
        <vs-col lg="8" w="8" sm="6" xs="10" justify="center" align="center">
          <img class="img_twenty" src="~/assets/img/OLED_Black.jpg"
        /></vs-col>
      </vs-row>
    </section>
    <section id="ms" class="section mt-14">
      <vs-row class="mt-14" justify="center" align="center">
        <vs-col w="6" sm="10" xs="10">
          <h1 class="gradient-text">Temps de réponse</h1>
          <h1 class="title-content my-5">
            Le temps de réponse le plus rapide jamais observé sur un PC portable
          </h1>
          <p class="content-text2 mb-5">
            Pour un écran, le temps de réponse correspond au temps nécessaire
            pour remplacer une couleur par une autre : plus il est rapide, mieux
            le mouvement est reproduit. Le diagramme ci-dessous montre une
            transition de couleur du violet au bleu. Sur un ASUS OLED, cette
            transition ne prend que 0,2 milliseconde, alors que sur un LCD, elle
            peut atteindre 10 ms sinon plus. Cela fait une grande différence,
            car les couleurs OLED sont correctes pendant la majeure partie de
            l'affichage d'une image, alors que les images LCD peuvent être
            floues au cours du processus de transition.
          </p>
          <p class="content-text2 mb-5">
            Les dalles ASUS OLED profitent d'un temps de réponse de 0,2 ms, le
            plus rapide jamais observé sur un PC portable ! Ce temps de réponse
            et par ailleurs 50 fois 6 plus rapide que celui des PC portables à
            dalle LCD. En effet la plupart des dalles LCD présentent un temps de
            réponse entre 10 et 25 ms. Nos dalles OLED fluidifient les scènes
            animées, réduisent la latence sur vos jeux et améliorent le niveau
            de détails lorsque vous faites par exemple défiler du texte.
          </p>
        </vs-col>
      </vs-row>
      <vs-row justify="center" align="center"
        ><vs-col w="6">
          <vs-row>
            <vs-col w="6" xs="12"
              ><h1 class="gradient-text">0,2ms</h1>
              <p>Temps de réponse ultrarapide</p></vs-col
            ><vs-col w="6" xs="12"
              ><h1 class="gradient-text">50X</h1>
              <p>Temps de réponse plus rapide</p></vs-col
            >
          </vs-row>
        </vs-col>
      </vs-row>
      <vs-row class="mt-10" justify="center" align="center">
        <vs-col w="10"
          ><vs-row justify="center" align="center">
            <vs-col w="6" sm="12" xs="12"
              ><h1>LCD</h1>
              <h1>temps de réponse de 10 ms</h1>
              <video
                autoplay
                width="100%"
                height="100%"
                muted="muted"
                loop="loop"
                playsinline="playsinline"
                src="https://www.asus.com/websites/global/productcustomizedTab/8332/v9/features/images/video/large/s9/video-s9-0.mp4"
              >
                <source
                  type="video/mp4"
                  src="https://www.asus.com/websites/global/productcustomizedTab/8332/v9/features/images/video/large/s9/video-s9-0.mp4"
                />
                <source
                  type="video/ogg"
                  src="https://www.asus.com/websites/global/productcustomizedTab/8332/v9/features/images/video/large/s9/video-s9-0.ogg"
                />
                <source
                  type="video/webm"
                  src="https://www.asus.com/websites/global/productcustomizedTab/8332/v9/features/images/video/large/s9/video-s9-0.webm"
                /></video></vs-col
            ><vs-col w="6" sm="12" xs="12"
              ><h1>OLED</h1>
              <h1>Temps de réponse ultra rapide de 0,2 ms</h1>
              <video
                autoplay
                width="100%"
                height="100%"
                muted="muted"
                loop="loop"
                playsinline="playsinline"
                src="https://www.asus.com/websites/global/productcustomizedTab/8332/v9/features/images/video/large/s9/video-s9-1.mp4"
              >
                <source
                  type="video/mp4"
                  src="https://www.asus.com/websites/global/productcustomizedTab/8332/v9/features/images/video/large/s9/video-s9-1.mp4"
                />
                <source
                  type="video/ogg"
                  src="https://www.asus.com/websites/global/productcustomizedTab/8332/v9/features/images/video/large/s9/video-s9-1.ogg"
                />
                <source
                  type="video/webm"
                  src="https://www.asus.com/websites/global/productcustomizedTab/8332/v9/features/images/video/large/s9/video-s9-1.webm"
                />
              </video>
            </vs-col>
          </vs-row>
        </vs-col>
      </vs-row>
    </section>

    <v-row class="mb-14 mt-14" justify="center" align="center">
      <v-col w="10" justify="center" align="center">
        <vs-button gradient size="xl" @click="CTA1 = true">
          <h3>ACHETER PC ÉLIGIBLE</h3>
        </vs-button>
      </v-col></v-row
    >
    <vs-dialog blur width="550px" not-center v-model="CTA1" vs-theme="dark">
      <template #header>
        <h4 class="mt-2 mb-2">OÙ ACHETER DES PC ASUS OLED ÉLIGIBLE</h4>
      </template>
      <div class="con-content">
        <vs-row class="mb-2 mt-2">
          <vs-col w="3" xs="6"
            ><img
              class="up ma-5"
              src="~/assets/img/ASUS_grey.png"
              alt=""
              srcset=""
          /></vs-col>
          <vs-col w="3" xs="6">
            <a
              target="_blank"
              href="https://www.amazon.fr/s?k=asus+oled&i=computers&rh=n%3A429879031%2Cp_89%3AASUS%2Cp_n_feature_browse-bin%3A27969065031&dc&__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&qid=1655373492&rnid=27969061031&ref=sr_nr_p_n_feature_browse-bin_3"
            >
              <img
                class="up ma-5"
                src="~/assets/img/amazon.png"
                alt=""
                srcset=""
            /></a>
          </vs-col>
          <vs-col w="3" xs="6">
            <a
              target="_blank"
              href="https://www.auchan.fr/recherche?text=asus+oled"
            >
              <img
                class="up ma-5"
                src="~/assets/img/auchan.png"
                alt=""
                srcset="" /></a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              target="_blank"
              href="https://www.boulanger.com/resultats?tr=asus+oled"
            >
              <img
                class="up ma-5"
                src="~/assets/img/boulanger.png"
                alt=""
                srcset="" /></a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              target="_blank"
              href="https://www.carrefour.fr/s?filters%5BFacet_vendeurs%5D%5B0%5D=Carrefour&q=asus%20oled&noRedirect=1"
            >
              <img
                class="up ma-5"
                src="~/assets/img/carrefour.png"
                alt=""
                srcset="" /></a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              target="_blank"
              href="https://www.cdiscount.com/search/10/oled+asus.html?TechnicalForm.SiteMapNodeId=0&TechnicalForm.DepartmentId=10&TechnicalForm.ProductId=&hdnPageType=Search&TechnicalForm.ContentTypeId=16&TechnicalForm.SellerId=&TechnicalForm.PageType=SEARCH_AJAX&TechnicalForm.LazyLoading.ProductSheets=False&TechnicalForm.BrandLicenseId=0&NavigationForm.CurrentSelectedNavigationPath=categorycodepath%2F0K%7C0K0C%7C0K0C01&NavigationForm.FirstNavigationLinkCount=3&FacetForm.SelectedFacets.Index=0&FacetForm.SelectedFacets.Index=1&FacetForm.SelectedFacets%5B1%5D=Prix%2F500%20%C3%A0%201000%E2%82%AC&FacetForm.SelectedFacets%5B1%5D=Prix%2F1000%E2%82%AC%20et%20%2B&FacetForm.SelectedFacets.Index=2&FacetForm.SelectedFacets%5B2%5D=Marque%2Fasus&FacetForm.SelectedFacets.Index=3&FacetForm.SelectedFacets.Index=4&FacetForm.SelectedFacets.Index=5&FacetForm.SelectedFacets.Index=13&FacetForm.SelectedFacets.Index=6&FacetForm.SelectedFacets.Index=7&FacetForm.SelectedFacets.Index=8&FacetForm.SelectedFacets.Index=9&FacetForm.SelectedFacets%5B9%5D=Neuf%20ou%20occasion%2Fneuf&FacetForm.SelectedFacets.Index=10&FacetForm.SelectedFacets.Index=11&FacetForm.SelectedFacets.Index=12&FacetForm.SelectedFacets.Index=14&FacetForm.SelectedFacets.Index=15&FacetForm.SelectedFacets.Index=16&FacetForm.SelectedFacets.Index=17&FacetForm.SelectedFacets.Index=18&SortForm.SelectedSort=PERTINENCE&ProductListTechnicalForm.Keyword=oled%2Basus&ProductListTechnicalForm.TemplateName=InLine&&_his_"
              ><img
                class="up ma-5"
                src="~/assets/img/cdiscount.png"
                alt=""
                srcset=""
              />
            </a>
          </vs-col>
          <vs-col w="3" xs="6">
            <a
              target="_blank"
              href="https://www.fnac.com/SearchResult/ResultList.aspx?SDM=list&Search=oled&SFilt=1!206%2c49343!23&sft=1"
            >
              <img
                class="up ma-5"
                src="~/assets/img/darty.png"
                alt=""
                srcset=""
              />
            </a>
          </vs-col>
          <vs-col w="3" xs="6">
            <a
              target="_blank"
              href="https://www.amazon.fr/s?k=asus+oled&i=computers&rh=n%3A429879031%2Cp_89%3AASUS%2Cp_n_feature_browse-bin%3A27969065031&dc&__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&qid=1655373492&rnid=27969061031&ref=sr_nr_p_n_feature_browse-bin_3"
            >
              <img
                class="up ma-5"
                src="~/assets/img/eleclerc.png"
                alt=""
                srcset=""
              />
            </a>
          </vs-col>
          <vs-col w="3" xs="6">
            <a target="_blank" href="https://www.electrodepot.fr/">
              <img
                class="up ma-5"
                src="~/assets/img/electro-depot.png"
                alt=""
                srcset=""
              /> </a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              target="_blank"
              href="https://www.fnac.com/SearchResult/ResultList.aspx?SDM=list&Search=oled&SFilt=1!206%2c49343!23&sft=1"
            ></a>
            <img class="up ma-5" src="~/assets/img/fnac.png" alt="" srcset=""
          /></vs-col>
          <vs-col w="3" xs="6">
            <a
              target="_blank"
              href="https://www.ldlc.com/recherche/oled/+fb-C000000806+fcat-4265+fdi-1+foms-1+fps-1.html"
            >
              <img
                class="up ma-5 id"
                src="~/assets/img/LDLC.jpg"
                alt=""
                srcset=""
              /> </a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              target="_blank"
              href="https://www.rueducommerce.fr/r/asus-oled/g-rue-du-commerce-25476,neuf-676918.html"
              ><img
                class="up ma-5"
                src="~/assets/img/rue-du-commerce.png"
                alt=""
                srcset=""
              />
            </a>
          </vs-col>
          <vs-col w="3" xs="6">
            <a target="_blank" href="https://www.magasins-u.com/">
              <img
                class="up ma-5"
                src="~/assets/img/systeme-u.png"
                alt=""
                srcset=""
              />
            </a>
          </vs-col>
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
  </div>
</template>
<style>
</style>
<script>
// import  from '../components/'
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],
  computed: {},
  methods: {},
  data() {
    return {
      CTA1: false,
      page: 1,
      max: 11,
      conditions: false,
      selectedProcessor: '',
      popupVid1: false,
      processors: [
        {
          id: '1',
          name: 'Intel(R) Core(TM) i9-12XXX',
          priceA: '1000',
          priceB: '700',
        },
        {
          id: '2',
          name: 'Intel(R) Core(TM) i9-11XXX',
          priceA: '550',
          priceB: '385',
        },
        {
          id: '3',
          name: 'Intel(R) Core(TM) i9-10XXX ',
          priceA: '400',
          priceB: '280',
        },
        {
          id: '4',
          name: 'Intel(R) Core(TM) i9-9XXX',
          priceA: '325',
          priceB: '228',
        },
        {
          id: '5',
          name: 'Intel(R) Core(TM) i9-8XXX',
          priceA: '325',
          priceB: '228',
        },
        {
          id: '6',
          name: 'Intel(R) Core(TM) i7-12XXX',
          priceA: '700',
          priceB: '490',
        },
        {
          id: '7',
          name: 'Intel(R) Core(TM) i7-11XXX',
          priceA: '500',
          priceB: '400',
        },
        {
          id: '8',
          name: 'Intel(R) Core(TM) i7-10XXX',
          priceA: '370',
          priceB: '303',
        },
        {
          id: '9',
          name: 'Intel(R) Core(TM) i7-9XXX',
          priceA: '290',
          priceB: '243',
        },
        {
          id: '10',
          name: 'Intel(R) Core(TM) i7-8XXX',
          priceA: '290',
          priceB: '243',
        },
        {
          id: '11',
          name: 'Intel(R) Core(TM) i7-7XXX',
          priceA: '208',
          priceB: '181',
        },
        {
          id: '12',
          name: 'Intel(R) Core(TM) i7-6XXX',
          priceA: '208',
          priceB: '181',
        },
        {
          id: '13',
          name: 'Intel(R) Core(TM) i7-5XXX',
          priceA: '180',
          priceB: '160',
        },
        {
          id: '14',
          name: 'Intel(R) Core(TM) i7-4XXX',
          priceA: '180',
          priceB: '160',
        },
        {
          id: '15',
          name: 'Intel(R) Core(TM) i5-12XXX',
          priceA: '450',
          priceB: '363',
        },
        {
          id: '16',
          name: 'Intel(R) Core(TM) i5-11XXX',
          priceA: '400',
          priceB: '325',
        },
        {
          id: '17',
          name: 'Intel(R) Core(TM) i5-10XXX',
          priceA: '320',
          priceB: '265',
        },
        {
          id: '18',
          name: 'Intel(R) Core(TM) i5-9XXX',
          priceA: '270',
          priceB: '228',
        },
        {
          id: '19',
          name: 'Intel(R) Core(TM) i5-8XXX',
          priceA: '270',
          priceB: '228',
        },
        {
          id: '20',
          name: 'Intel(R) Core(TM) i5-7XXX',
          priceA: '172',
          priceB: '159',
        },
        {
          id: '21',
          name: 'Intel(R) Core(TM) i5-6XXX',
          priceA: '172',
          priceB: '159',
        },
        {
          id: '22',
          name: 'Intel(R) Core(TM) i5-5XXX',
          priceA: '160',
          priceB: '145',
        },
        {
          id: '23',
          name: 'Intel(R) Core(TM) i5-4XXX',
          priceA: '160',
          priceB: '145',
        },
        {
          id: '24',
          name: 'Intel(R) Core(TM) i3-12XXX',
          priceA: '380',
          priceB: '310',
        },
        {
          id: '25',
          name: 'Intel(R) Core(TM) i3-11XXX',
          priceA: '320',
          priceB: '265',
        },
        {
          id: '26',
          name: 'Intel(R) Core(TM) i3-10XXX',
          priceA: '270',
          priceB: '228',
        },
        {
          id: '27',
          name: 'Intel(R) Core(TM) i3-9XXX',
          priceA: '220',
          priceB: '190',
        },
        {
          id: '28',
          name: 'Intel(R) Core(TM) i3-8XXX',
          priceA: '220',
          priceB: '190',
        },
        {
          id: '29',
          name: 'Intel(R) Core(TM) i3-8XXX',
          priceA: '220',
          priceB: '190',
        },
        {
          id: '30',
          name: 'Intel(R) Core(TM) i3-7XXX',
          priceA: '180',
          priceB: '160',
        },
        {
          id: '31',
          name: 'Intel(R) Core(TM) i3-6XXX',
          priceA: '180',
          priceB: '160',
        },
        {
          id: '32',
          name: 'Intel(R) Core(TM) i3-5XXX',
          priceA: '150',
          priceB: '138',
        },
        {
          id: '33',
          name: 'Intel(R) Core(TM) i3-4XXX',
          priceA: '150',
          priceB: '138',
        },
        { id: '34', name: 'Intel Pentium', priceA: '100', priceB: '70' },
        { id: '35', name: 'Intel Celeron', priceA: '100', priceB: '70' },
        { id: '36', name: 'AMD Ryzen 7', priceA: '250', priceB: '175' },
        { id: '37', name: 'AMD Ryzen 5', priceA: '190', priceB: '133' },
        { id: '38', name: 'AMD Ryzen 3', priceA: '150', priceB: '105' },
        { id: '39', name: 'AMD SERIES A', priceA: '100', priceB: '70' },
        { id: '40', name: 'AMD SERIES FX', priceA: '125', priceB: '88' },
        {
          id: '41',
          name: 'Apple MacBook 12" 2017',
          priceA: '525',
          priceB: '?',
        },
        {
          id: '42',
          name: 'Apple MacBook 12" Early 2016',
          priceA: '434',
          priceB: '?',
        },
        {
          id: '43',
          name: 'Apple MacBook 12" Early 2015',
          priceA: '349',
          priceB: '?',
        },
        {
          id: '44',
          name: 'Apple MacBook Pro 14" 2021',
          priceA: '1000',
          priceB: '?',
        },
        {
          id: '45',
          name: 'Apple MacBook Air (M1 2020)',
          priceA: '650',
          priceB: '?',
        },
        {
          id: '46',
          name: 'Apple MacBook Pro 13" (M1 2020)',
          priceA: '800',
          priceB: '?',
        },
        {
          id: '47',
          name: 'Apple MacBook Pro 13" 2020 (2 Thunderbolt 3) ',
          priceA: '850',
          priceB: '?',
        },
        {
          id: '48',
          name: 'Apple MacBook Pro 13" 2020 (4 Thunderbolt 3)',
          priceA: '900',
          priceB: '?',
        },
        { id: '49', name: 'MacBook Pro 16" 2019', priceA: '900', priceB: '?' },
        {
          id: '50',
          name: 'MacBook Pro 13" 2019 (2 Thunderbolt 3)',
          priceA: '700',
          priceB: '?',
        },
        {
          id: '51',
          name: 'MacBook Pro 13" 2019 (4 Thunderbolt 3)',
          priceA: '750',
          priceB: '?',
        },
        { id: '52', name: 'MacBook Pro 15" 2019 ', priceA: '750', priceB: '?' },
        { id: '50', name: 'MacBook Pro 15" 2018', priceA: '678', priceB: '?' },
        {
          id: '50',
          name: 'MacBook Pro 13" 2018 (4 Thunderbolt 3)',
          priceA: '606',
          priceB: '?',
        },
        {
          id: '51',
          name: 'Apple MacBook Pro 13" Mid 2017',
          priceA: '556',
          priceB: '?',
        },
        {
          id: '52',
          name: 'Apple MacBook Pro 13" Late 2016',
          priceA: '400',
          priceB: '?',
        },
        {
          id: '50',
          name: 'Apple MacBook Pro 13" 2017',
          priceA: '638',
          priceB: '?',
        },
        {
          id: '51',
          name: 'Apple MacBook Pro 13" Touch Bar Late 2016',
          priceA: '500',
          priceB: '?',
        },
        {
          id: '52',
          name: 'Apple MacBook Pro 13" Early 2015',
          priceA: '400',
          priceB: '?',
        },
        {
          id: '50',
          name: 'Apple MacBook Pro 15"  2017',
          priceA: '800',
          priceB: '?',
        },
        {
          id: '51',
          name: 'Apple MacBook Pro 15" 2016',
          priceA: '600',
          priceB: '?',
        },
        {
          id: '52',
          name: 'Apple MacBook Pro 15" Mid 2015 (DG)',
          priceA: '550',
          priceB: '?',
        },
        {
          id: '50',
          name: 'Apple MacBook Pro 15" Mid 2015 (IG)',
          priceA: '500',
          priceB: '?',
        },
        {
          id: '51',
          name: 'Apple MacBook Air Retina 13" 2020',
          priceA: '642',
          priceB: '?',
        },
        {
          id: '52',
          name: 'Apple MacBook Air Retina 13" 2019',
          priceA: '570',
          priceB: '?',
        },
        {
          id: '50',
          name: 'Apple MacBook Air Retina 13" 2018',
          priceA: '498',
          priceB: '?',
        },
        {
          id: '51',
          name: 'Apple MacBook Air 11" Early 2015',
          priceA: '290',
          priceB: '?',
        },
        {
          id: '52',
          name: 'Apple MacBook Air 13" 2017',
          priceA: '369',
          priceB: '?',
        },
        {
          id: '50',
          name: 'Apple MacBook Air 13" Early 2015',
          priceA: '311',
          priceB: '?',
        },
        {
          id: '51',
          name: 'Apple iMac M1 24 inches - 2 or 4 ports - 2021',
          priceA: '800',
          priceB: '?',
        },
        {
          id: '52',
          name: 'Apple iMac Retina  5K - 27 inches - 2020',
          priceA: '800',
          priceB: '?',
        },
        {
          id: '50',
          name: 'Apple iMac Retina 5K - 27 inches - 2019',
          priceA: '700',
          priceB: '?',
        },
        {
          id: '51',
          name: 'Apple iMac Retina 4K - 21,5 inches - 2019',
          priceA: '640',
          priceB: '?',
        },
        { id: '52', name: 'Apple Mini M1 - 2020', priceA: '450', priceB: '?' },
        { id: '50', name: 'Apple Mac Mini - 2018', priceA: '220', priceB: '?' },
        {
          id: '51',
          name: 'Apple iMac  Pro 27 inches - 2017',
          priceA: '451',
          priceB: '?',
        },
        {
          id: '52',
          name: 'Apple iMac Retina 5K - 27 inches - 2017',
          priceA: '600',
          priceB: '?',
        },
        {
          id: '52',
          name: 'Apple iMac Retina 4K - 21,5 inches - 2017',
          priceA: '500',
          priceB: '?',
        },
        {
          id: '52',
          name: 'Apple iMac 21,5 inches - 2017',
          priceA: '360',
          priceB: '?',
        },
        {
          id: '52',
          name: 'Apple iMac 21,5 inches - 2015',
          priceA: '340',
          priceB: '?',
        },
        {
          id: '52',
          name: 'Apple iMac Retina 4K, 21,5 inches - 2015',
          priceA: '400',
          priceB: '?',
        },
        {
          id: '52',
          name: 'Apple iMac Retina 5K, 27 inches - 2015',
          priceA: '500',
          priceB: '?',
        },
      ],
    }
  },
  components: {},
  created() {},
}
</script>
