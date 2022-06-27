<template>
  <div>
    <section class="header-uhd">
      <img class="SVGUHD" src="~/assets/img/header_uhd.jpg" />
      <vs-button
        class="btn-achat-uhd up axeptio_link"
        size="xl"
        gradient
        active
        circle
        id="axeptio_link"
        onclick="dataLayer.push({'event': 'btn-acheter', 'location':'HEADER', 'device':'UHD'});"
        @click="CTA4 = true"
      >
        <h3>ACHETER UN PC ASUS OLED ÉLIGIBLE</h3>
      </vs-button>
    </section>
    <section class="header-hd">
      <img class="SVGHD" src="~/assets/img/header_hd.jpg" />
      <vs-button
        class="btn-achat-hd up axeptio_link"
        size="xl"
        gradient
        active
        circle
        id="axeptio_link"
        onclick="dataLayer.push({'event': 'btn-acheter', 'location':'HEADER', 'device':'HD'});"
        @click="CTA5 = true"
      >
        <h3>ACHETER UN PC ASUS OLED ÉLIGIBLE</h3>
      </vs-button>
    </section>
    <section class="header-desktop">
      <img class="SVGDESKTOP" src="~/assets/img/header_desktop.jpg" />
      <vs-button
        class="btn-achat-desktop up axeptio_link"
        size="large"
        gradient
        active
        circle
        id="axeptio_link"
        onclick="dataLayer.push({'event': 'btn-acheter', 'location':'HEADER', 'device':'DESKTOP'});"
        @click="CTA6 = true"
      >
        <h3>ACHETER UN PC ÉLIGIBLE</h3>
      </vs-button>
    </section>
    <section class="header-tablet">
      <img class="SVGTABLET" src="~/assets/img/header_tablet.jpg" />
      <vs-button
        class="btn-achat-tablet up axeptio_link"
        size="large"
        gradient
        circle
        active
        id="axeptio_link"
        onclick="dataLayer.push({'event': 'btn-acheter', 'location':'HEADER', 'device':'TABLET'});"
        @click="CTA7 = true"
      >
        <h3>ACHETER UN PC ÉLIGIBLE</h3>
      </vs-button>
    </section>
    <section class="header-mobile">
      <img class="SVGMOBILE" src="~/assets/img/header_mobile.jpg" />
      <vs-button
        class="btn-achat-mobile up axeptio_link"
        size="large"
        gradient
        active
        circle
        id="axeptio_link"
        onclick="dataLayer.push({'event': 'btn-acheter', 'location':'HEADER', 'device':'MOBILE'});"
        @click="CTA8 = true"
      >
        <h4>ACHETER UN PC ÉLIGIBLE</h4>
      </vs-button>
    </section>

    <section id="conditions" class="section_fonctionnement mt-5">
      <vs-row justify="center" align="center">
        <vs-col lg="10" w="12" sm="12" xs="12" justify="center" align="center">
          <h1 class="title-content mb-14">Comment se faire rembourser ?</h1>
          <vs-row>
            <vs-col lg="3" w="6" sm="6" xs="12">
              <vs-card class="ma-2" @click="CTA1 = true">
                <template #title>
                  <span class="mdi mdi-36px mdi-cart-outline"></span>
                  <h2 class="my-2">Acheter un PC ASUS OLED</h2>
                </template>
                <template #text>
                  <p class="mb-5">
                    Achetez un PC OLED Asus éligible auprès d’un revendeur
                    participant (Amazon, Auchan, Boulanger, Carrefour,
                    Cdiscount, Electro Dépôt, Asus eshop, Fnac-darty, groupe
                    LDLC, Leclerc, Rue du commerce, Système U et Cost Co) en
                    France métropolitaine entre le 22 juin et le 16 juillet
                    2022.
                    <!--      Cette offre de remboursement s’applique pour l’achat d’un PC
              de la sélection ASUS OLED présente sur la page suivante.
                    Avec cette offre exclusive vous pourrez combiner le
                    remboursement de votre ancien pc en plus des réductions liés
                    soldes. -->
                  </p>
                </template>
              </vs-card>
            </vs-col>
            <vs-col w="3" sm="6" xs="12">
              <a
                id="axeptio_link"
                class="axeptio_link"
                onclick="dataLayer.push({'event': 'btn-opia', 'location':'card-top', 'device':'all'});"
                href="https://asuspromotions.com/oled/fr-FR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <vs-card type="1" class="ma-2" color="">
                  <template #title>
                    <span class="mdi mdi-36px mdi-file-sign"></span>
                    <h2 class="my-2">Enregistrez-vous</h2>
                  </template>
                  <template #text>
                    <p class="mb-5">
                      Enregistrez-vous sur le site asuspromotions.com/oled/fr-FR
                      dans les 15 jours suivant votre achat. Nous vous
                      inviterons à nous donner les détails de l’achat de votre
                      nouvel ordinateur ainsi que certaines informations quant à
                      l’ancien ordinateur que vous souhaitez faire reprendre.
                      <!--       Enregistrez-vous en 5 minutes sur le site
                    asuspromotions.com/oled dans les 15 jours suivant votre
                    achat. Nous vous inviterons à nous donner les détails de
                    l’achat de votre nouvel ordinateur ainsi que certaines
                    informations quant à l’ancien ordinateur que vous souhaitez
                    faire reprendre.-->
                    </p>
                  </template>
                </vs-card>
              </a></vs-col
            >
            <vs-col w="3" sm="6" xs="12">
              <vs-card class="ma-2">
                <template #title>
                  <span class="mdi mdi-36px mdi-cube-send"></span>
                  <h2 class="my-2">Renvoyez-nous votre ancien ordinateur</h2>
                </template>
                <template #text>
                  <p class="mb-5">
                    Renvoyez-nous votre ancien ordinateur dans les 15 jours qui
                    suivent l’approbation de votre enregistrement, à réception
                    de l’email de confirmation précisant les instructions de
                    renvoi.
                    <!--  Dans les 15 jours qui suivent votre enregistrement et après
                    approbation de notre part il faut impérativement renvoyer
                    votre ancien ordinateur. Vous trouverez l’ensemble des
                    informations sur la page asuspromotions.com/oled-->
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
                    Dès réception de votre ancien PC, nous vérifions sous 10
                    jours qu’il correspond bien aux critères d’éligibilité à la
                    promotion. Vous recevrez ensuite directement sur votre
                    compte bancaire le montant de votre remboursement + 15€ de
                    contribution forfaitaire aux frais de renvoi, dans les 30
                    jours suivant la validation de bonne reprise de votre ancien
                    PC.
                    <!-- Cette offre de remboursement s’applique pour l’achat d’un PC
                    de la sélection ASUS OLED présente sur la page suivante.
                    Avec cette offre exclusive vous pourrez combiner le
                    remboursement de votre ancien pc en plus des réductions liés
                    soldes. -->
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
          <h1 class="mb-5 mt-14 title-content">
            Vous souhaitez connaître le montant de votre remboursement
          </h1>
          <h2 class="mb-5">
            Entrez le modèle de votre processeur ou de votre MAC
          </h2>
          <p class="text-content2">
            <a @click="explicationCTA = true">
              Cliquez ici pour connaître le modèle de votre processeur ou de
              votre MAC
            </a>
          </p>
          <v-autocomplete
            dark
            :items="processors"
            item-color="dark"
            item-text="name"
            label="Processeur/Mac"
            v-model="selectedProcessor"
            hide-data
            hide-selected
            item-value="API"
            prepend-icon="mdi-chevron-right"
            return-object
            no-data-text="Pas de données pour votre processeur ou de votre MAC"
          ></v-autocomplete>
          <vs-button
            id="axeptio_link"
            class="axeptio_link mt-5"
            onclick="dataLayer.push({'event': 'btn-autocomplete', 'location':'autocomplete', 'device':'all'});"
            @click="sheet = true"
            :disabled="!selectedProcessor"
            gradient
            size="xl"
          >
            <h3>RECHERCHE</h3>
          </vs-button>

          <v-bottom-sheet dark inset v-model="sheet">
            <v-card>
              <v-list>
                <v-list-item-content>
                  <v-list-item-title>
                    <h2
                      class="my-3 title-content"
                      justify="center"
                      align="center"
                    >
                      Vous avez sélectionné :
                    </h2></v-list-item-title
                  >
                  <v-list-item-subtitle>
                    <h3 class="text-content">
                      {{ selectedProcessor.name }}
                    </h3></v-list-item-subtitle
                  >
                  <v-list-item-subtitle
                    ><h3 class="gradient-text text-content ma-3">
                      Vous pouvez donc percevoir entre
                      <span class="underlined">{{
                        selectedProcessor.priceB
                      }}</span>
                      € et
                      <span class="underlined">
                        {{ this.selectedProcessor.priceA }}</span
                      >
                      € en fonction de l'état du matériel.
                    </h3></v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list>
              <vs-row justify="center" align="center">
                <vs-col w="6">
                  <v-btn class="mb-5" color="primary" @click="sheet = false"
                    >Compris !</v-btn
                  >
                </vs-col>
              </vs-row></v-card
            >
          </v-bottom-sheet>
          <!--          <div v-show="selectedProcessor">
            <h2 align="start" class="gradient-text text-content">
              Vous avez sélectionnée un processeur :
              {{ selectedProcessor.name }}, vous pouvez donc percevoir entre
              <span>{{ selectedProcessor.priceB }} €</span>
              et
              <span>{{ selectedProcessor.priceA }} €</span>
              en fonction de l'état du matériel*.
            </h2>
          </div>
          <div v-show="selectedProcessor">
            <p align="start">
              * L’ordinateur ne doit pas être âgé de plus de 7 ans (date de
              production) et doit répondre aux critères de qualité attendus.
            </p>
          </div>-->
        </vs-col>
      </vs-row>
      <!--
     <vs-row class="mt-14 table_data" justify="center" align="center"
        ><vs-col class="mt-14" w="6" sm="10" xs="none">
          <div class="center table_data">
            <vs-table striped vs-theme="dark">
              <template #header>
                <vs-input
                  v-model="search"
                  border
                  placeholder="Rechercher votre processeur/MAC"
                />
              </template>
              <template #thead>
                <vs-tr class="center">
                  <vs-th
                    sort
                    @click="
                      processors = $vs.sortData($event, processors, 'name')
                    "
                  >
                    Processeur
                  </vs-th>
                  <vs-th
                    sort
                    @click="
                      processors = $vs.sortData($event, processors, 'priceA')
                    "
                  >
                    Prix Maximum
                  </vs-th>
                  <vs-th
                    sort
                    @click="
                      processors = $vs.sortData($event, processors, 'priceB')
                    "
                  >
                    Prix Minimum
                  </vs-th>
                </vs-tr>
              </template>
              <template #tbody>
                <vs-tr
                  :key="i"
                  v-for="(processors, i) in $vs.getPage(
                    $vs.getSearch(processors, search),
                    page,
                    max
                  )"
                  :data="processors"
                  class="center"
                >
                  <vs-td align="start">
                    {{ processors.name }}
                  </vs-td>
                  <vs-td align="start">
                    {{ processors.priceA }}
                  </vs-td>
                  <vs-td align="start">
                    {{ processors.priceB }}
                  </vs-td>
                </vs-tr>
              </template>
              <template #footer>
                <vs-pagination
                  v-model="page"
                  :length="
                    $vs.getLength($vs.getSearch(processors, search), max)
                  "
                />
              </template>
            </vs-table>
          </div> </vs-col
      ></vs-row> -->
    </section>

    <section>
      <v-row class="mb-14 mt-5" justify="center" align="center">
        <v-col w="6" sm="8" xs="10" justify="center" align="center">
          <vs-row>
            <vs-col w="6" sm="10" xs="12">
              <a
                id="axeptio_link"
                class="axeptio_link"
                onclick="dataLayer.push({'event': 'btn-pdf', 'location':'btn-top', 'device':'all'});"
                href="https://www.asus.fr/event/trade-oled/remboursement_asus_oled.pdf"
                download
              >
                <vs-button class="ma-3" gradient size="xl">
                  <h5>DÉCOUVREZ LES MODALITÉS DE L'OFFRE</h5>
                </vs-button></a
              ></vs-col
            >
            <vs-col w="6" sm="10" xs="12">
              <vs-button
                id="axeptio_link ma-3"
                class="axeptio_link"
                onclick="dataLayer.push({'event': 'btn-acheter', 'location':'autocomplete', 'device':'UHD'});"
                gradient
                size="xl"
                @click="CTA2 = true"
              >
                <h3>ACHETER UN PC OLED ÉLIGIBLE</h3>
              </vs-button></vs-col
            >
          </vs-row>
        </v-col></v-row
      >
    </section>

    <section class="section mt-14">
      <vs-row justify="center" align="center">
        <vs-col lg="12" w="12" sm="12" justify="center" align="center">
          <h1 class="title-content mt-5">DÉCOUVREZ L'OLED ASUS</h1>
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
                <v-card class="up ma-5"
                  ><v-img
                    class="flex justify-center align-center"
                    height="500"
                    :src="require('@/assets/img/s2_1.webp')"
                  >
                    <v-row class="flex justify-center align-center">
                      <v-card-title>
                        <h3>
                          Espace de couleurs 100% DCI-P3, le meilleur de sa
                          catégorie
                        </h3>
                      </v-card-title>
                      <v-card-text
                        ><p class="text-content2">
                          Dalles aux couleurs vives pour gagner en précision sur
                          vos projets de création et de colorisation ainsi que
                          pour profiter de vos divertissements.
                        </p></v-card-text
                      ></v-row
                    >
                  </v-img></v-card
                >
              </nuxt-link>
            </vs-col>
            <vs-col lg="2" w="6" sm="6" xs="12"
              ><nuxt-link :to="{ path: '/', hash: '#bleu' }">
                <v-card class="up ma-5"
                  ><v-img
                    height="500"
                    class="flex justify-center align-center"
                    :src="require('@/assets/img/s2_2.webp')"
                  >
                    <v-row class="flex justify-center align-center">
                      <v-card-title>
                        <h3>70% de lumière bleue en moins</h3>
                      </v-card-title>
                      <v-card-text
                        ><p class="text-content2">
                          Avec leurs faibles niveaux d'émission de lumière
                          bleue, les dalles OLED protègent vos yeux et
                          améliorent la qualité de votre sommeil.
                        </p></v-card-text
                      ></v-row
                    >
                  </v-img></v-card
                >
              </nuxt-link></vs-col
            >
            <vs-col lg="2" w="6" sm="6" xs="12">
              <nuxt-link :to="{ path: '/', hash: '#lumos' }">
                <v-card class="up ma-5"
                  ><v-img
                    height="500"
                    class="flex justify-center align-center"
                    :src="require('@/assets/img/s2_3.webp')"
                  >
                    <v-row class="flex justify-center align-center">
                      <v-card-title>
                        <h3>
                          Des images plus nettes quel que soit le niveau de
                          luminosité de l'écran
                        </h3>
                      </v-card-title>
                      <v-card-text
                        ><p class="text-content2">
                          Des couleurs riches même à faible niveau de luminosité
                          : toujours plus superbes !
                        </p></v-card-text
                      ></v-row
                    >
                  </v-img></v-card
                >
              </nuxt-link>
            </vs-col>
            <vs-col lg="2" w="6" sm="6" xs="12"
              ><nuxt-link :to="{ path: '/', hash: '#black' }">
                <v-card class="up ma-5"
                  ><v-img
                    height="500"
                    class="flex justify-center align-center"
                    :src="require('@/assets/img/s2_4.webp')"
                  >
                    <v-row class="flex justify-center align-center">
                      <v-card-title>
                        <h3>
                          DisplayHDR™ <br />
                          500/600 True Black
                        </h3>
                      </v-card-title>
                      <v-card-text
                        ><p class="text-content2">
                          Les noirs profonds vous permettent de repérer des
                          détails jusque là cachés dans les scènes sombres de
                          vos films préférés.
                        </p></v-card-text
                      ></v-row
                    >
                  </v-img></v-card
                >
              </nuxt-link>
            </vs-col>
            <vs-col lg="2" w="6" sm="6" xs="12"
              ><nuxt-link :to="{ path: '/', hash: '#ms' }">
                <v-card class="up ma-5"
                  ><v-img
                    height="500"
                    class="flex justify-center align-center"
                    :src="require('@/assets/img/s2_5.webp')"
                  >
                    <v-row class="flex justify-center align-center">
                      <v-card-title>
                        <h3>Temps de réponse ultra-rapide de 0,2 ms</h3>
                      </v-card-title>
                      <v-card-text
                        ><p class="text-content2">
                          Des jeux et films aux scènes d'action sans flou
                          cinétique ; des textes que vous pouvez faire défiler
                          en toute fluidité.
                        </p></v-card-text
                      ></v-row
                    >
                  </v-img></v-card
                >
              </nuxt-link>
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
    <section id="couleurs" class="section">
      <vs-row class="mb-14 mt-14" justify="center" align="center">
        <vs-row class="mb-14 mt-14" justify="center" align="center"
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
          <img
            class="img_twenty"
            :src="require('@/assets/img/OLED_couleur.jpg')"
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
                :src="require('@/assets/img/s6.jpg')"
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
        <vs-col lg="6" w="6" sm="12" xs="12">
          <h1 class="title-content mb-10 mt-5">
            5 raisons de choisir les PC ASUS OLED
          </h1>
          <div class="mx">
            <v-img
              id="axeptio_link"
              onclick="dataLayer.push({'event': 'video', 'location':'video', 'device':'all'});"
              @click="popupVid1 = true"
              :src="require('@/assets/img/oled_video.jpg')"
              class="up img_oled responsive axeptio_link"
              alt="5 raisons de choisir l'OLED ASUS"
            >
            </v-img>
            <img />
          </div>
        </vs-col>
      </vs-row>

      <vs-dialog width="60%" v-model="popupVid1" not-padding blur>
        <div class="video-responsive">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/z9ZG58oDVx4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe></div
      ></vs-dialog>
    </section>
    <!-- FIN VIDEO -->
    <section class="section">
      <vs-row justify="center" align="center"
        ><vs-col w="6" sm="10" xs="10">
          <h1 id="black" class="gradient-text3 mb-3">Contraste</h1>
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
          <img class="img_twenty" :src="require('@/assets/img/OLED_Black.jpg')"
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
        <vs-col w="8" lg="8" md="10" xs="12"
          ><vs-row justify="center" align="center">
            <vs-col w="6" sm="12" xs="12"
              ><h1>LCD</h1>
              <h1 class="mb-5">temps de réponse de 10 ms</h1>
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
              <h1 class="mb-5">Temps de réponse ultra rapide de 0,2 ms</h1>
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

    <section>
      <v-row class="mb-14 mt-5" justify="center" align="center">
        <v-col w="6" sm="8" xs="10" justify="center" align="center">
          <vs-row>
            <vs-col w="6" sm="10" xs="12">
              <a
                href="https://asuspromotions.com/oled/fr-FR"
                target="_blank"
                rel="noopener noreferrer"
                id="axeptio_link"
                class="axeptio_link"
                onclick="dataLayer.push({'event': 'btn-opia', 'location':'btn-bottom', 'device':'all'});"
              >
                <vs-button class="ma-3" gradient size="xl">
                  <h5>DÉCOUVREZ L'OFFRE DE REMBOURSEMENT</h5>
                </vs-button></a
              ></vs-col
            >
            <vs-col w="6" sm="10" xs="12">
              <vs-button
                class="ma-3 axeptio_link"
                gradient
                size="xl"
                @click="CTA3 = true"
                id="axeptio_link"
                onclick="dataLayer.push({'event': 'btn-acheter', 'location':'BOTTOM', 'device':'UHD'});"
              >
                <h3>ACHETER UN PC OLED ÉLIGIBLE</h3>
              </vs-button></vs-col
            >
          </vs-row>
        </v-col></v-row
      >
    </section>

    <vs-dialog blur width="550px" center v-model="explicationCTA">
      <template #header>
        <h2 class="mt-2">Comment identifier mon processeur/mon MAC</h2>
      </template>
      <div class="con-content ma-5">
        <vs-row class="">
          <h3>Pour Windows</h3>
          <p align="start" class="text-content2">
            Dans la barre de recherche Windows
            <i class="mdi mdi-microsoft-windows"></i> taper "Panneau de
            configuration" et choisissez Système qui affichera les informations
            sur le processeur avec le nom, le numéro et la vitesse du
            processeur.
          </p>
        </vs-row>
        <vs-row class="mt-5">
          <h3>Pour MAC</h3>
          <p align="start" class="text-content2">
            Dans le menu Apple <i class="mdi mdi-apple"></i> dans le coin
            supérieur gauche de votre écran choisissez "À propos de ce Mac". La
            fenêtre qui s’affiche vous présente les caractéristiques de votre
            Mac, notamment le nom du modèle dans l'onglet "Aperçu".
          </p></vs-row
        >
      </div>
      <template #footer>
        <div class="con-footer">
          <vs-button size="xl" @click="explicationCTA = false" transparent>
            Compris !
          </vs-button>
        </div>
      </template>
    </vs-dialog>
    <vs-dialog blur width="550px" center v-model="CTA1">
      <template #header>
        <p class="my-2 text-content">OÙ ACHETER UN PC ASUS OLED ÉLIGIBLE</p>
      </template>
      <div class="con-content">
        <vs-row class="mb-2 mt-2">
          <vs-col w="3" xs="6">
            <a
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              onclick="dataLayer.push({'event': 'asus', 'location':'card-achat', 'device':'all'});"
              href="https://www.asus.com/fr/Laptops/For-Home/All-series/filter?Category=OLED-display&Spec=126640"
              ><img
                class="up ma-5"
                src="~/assets/img/ASUS.png"
                alt=""
                srcset=""
              /> </a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              onclick="dataLayer.push({'event': 'amazon', 'location':'card-achat', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'auchan', 'location':'card-achat', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'boulanger', 'location':'card-achat', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              href="https://www.boulanger.com/opeco/odr622mico"
            >
              <img
                class="up ma-5"
                src="~/assets/img/boulanger.png"
                alt=""
                srcset="" /></a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              onclick="dataLayer.push({'event': 'carrefour', 'location':'card-achat', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'cdiscount', 'location':'card-achat', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'leclerc', 'location':'card-achat', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              href="https://www.e.leclerc/recherche?q=asus%20oled"
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
            <a
              onclick="dataLayer.push({'event': 'fnac', 'location':'card-achat', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              href="https://www.fnac.com/SearchResult/ResultList.aspx?PageIndex=2&SDM=list&Search=asus+oled&sft=1"
            >
              <img
                class="up ma-5"
                src="~/assets/img/fnac.png"
                alt=""
                srcset="" /></a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              onclick="dataLayer.push({'event': 'ldlc', 'location':'card-achat', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'rueducommerce', 'location':'card-achat', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
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
        </vs-row>
      </div>
    </vs-dialog>
    <vs-dialog blur width="550px" center v-model="CTA2">
      <template #header>
        <p class="my-2 text-content">OÙ ACHETER UN PC ASUS OLED ÉLIGIBLE</p>
      </template>
      <div class="con-content">
        <vs-row class="mb-2 mt-2">
          <vs-col w="3" xs="6">
            <a
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              onclick="dataLayer.push({'event': 'asus', 'location':'btn-top', 'device':'all'});"
              href="https://www.asus.com/fr/Laptops/For-Home/All-series/filter?Category=OLED-display&Spec=126640"
              ><img
                class="up ma-5"
                src="~/assets/img/ASUS.png"
                alt=""
                srcset=""
              /> </a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              onclick="dataLayer.push({'event': 'amazon', 'location':'btn-top', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'auchan', 'location':'btn-top', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'boulanger', 'location':'btn-top', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              href="https://www.boulanger.com/opeco/odr622mico"
            >
              <img
                class="up ma-5"
                src="~/assets/img/boulanger.png"
                alt=""
                srcset="" /></a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              onclick="dataLayer.push({'event': 'carrefour', 'location':'btn-top', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'cdiscount', 'location':'btn-top', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'leclerc', 'location':'btn-top', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              href="https://www.e.leclerc/recherche?q=asus%20oled"
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
            <a
              onclick="dataLayer.push({'event': 'fnac', 'location':'btn-top', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              href="https://www.fnac.com/SearchResult/ResultList.aspx?PageIndex=2&SDM=list&Search=asus+oled&sft=1"
            >
              <img
                class="up ma-5"
                src="~/assets/img/fnac.png"
                alt=""
                srcset="" /></a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              onclick="dataLayer.push({'event': 'ldlc', 'location':'btn-top', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'rueducommerce', 'location':'btn-top', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
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
        </vs-row>
      </div>
    </vs-dialog>
    <vs-dialog blur width="550px" center v-model="CTA3">
      <template #header>
        <p class="my-2 text-content">OÙ ACHETER UN PC ASUS OLED ÉLIGIBLE</p>
      </template>
      <div class="con-content">
        <vs-row class="mb-2 mt-2">
          <vs-col w="3" xs="6">
            <a
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              onclick="dataLayer.push({'event': 'asus', 'location':'btn-bottom', 'device':'all'});"
              href="https://www.asus.com/fr/Laptops/For-Home/All-series/filter?Category=OLED-display&Spec=126640"
              ><img
                class="up ma-5"
                src="~/assets/img/ASUS.png"
                alt=""
                srcset=""
              /> </a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              onclick="dataLayer.push({'event': 'amazon', 'location':'btn-bottom', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'auchan', 'location':'btn-bottom', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'boulanger', 'location':'btn-bottom', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              href="https://www.boulanger.com/opeco/odr622mico"
            >
              <img
                class="up ma-5"
                src="~/assets/img/boulanger.png"
                alt=""
                srcset="" /></a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              onclick="dataLayer.push({'event': 'carrefour', 'location':'btn-bottom', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'cdiscount', 'location':'btn-bottom', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'leclerc', 'location':'btn-bottom', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              href="https://www.e.leclerc/recherche?q=asus%20oled"
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
            <a
              onclick="dataLayer.push({'event': 'fnac', 'location':'btn-bottom', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              href="https://www.fnac.com/SearchResult/ResultList.aspx?PageIndex=2&SDM=list&Search=asus+oled&sft=1"
            >
              <img
                class="up ma-5"
                src="~/assets/img/fnac.png"
                alt=""
                srcset="" /></a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              onclick="dataLayer.push({'event': 'ldlc', 'location':'btn-bottom', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'rueducommerce', 'location':'btn-bottom', 'device':'all'});"
              id="axeptio_link"
              class="axeptio_link"
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
        </vs-row>
      </div>
    </vs-dialog>
    <vs-dialog blur width="550px" center v-model="CTA4">
      <template #header>
        <p class="my-2 text-content">OÙ ACHETER UN PC ASUS OLED ÉLIGIBLE</p>
      </template>
      <div class="con-content">
        <vs-row class="mb-2 mt-2">
          <vs-col w="3" xs="6">
            <a
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              onclick="dataLayer.push({'event': 'asus', 'location':'HEADER', 'device':'UHD'});"
              href="https://www.asus.com/fr/Laptops/For-Home/All-series/filter?Category=OLED-display&Spec=126640"
              ><img
                class="up ma-5"
                src="~/assets/img/ASUS.png"
                alt=""
                srcset=""
              /> </a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              onclick="dataLayer.push({'event': 'amazon', 'location':'HEADER', 'device':'UHD'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'auchan', 'location':'HEADER', 'device':'UHD'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'boulanger', 'location':'HEADER', 'device':'UHD'});"
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              href="https://www.boulanger.com/opeco/odr622mico"
            >
              <img
                class="up ma-5"
                src="~/assets/img/boulanger.png"
                alt=""
                srcset="" /></a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              onclick="dataLayer.push({'event': 'carrefour', 'location':'HEADER', 'device':'UHD'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'cdiscount', 'location':'HEADER', 'device':'UHD'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'leclerc', 'location':'HEADER', 'device':'UHD'});"
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              href="https://www.e.leclerc/recherche?q=asus%20oled"
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
            <a
              onclick="dataLayer.push({'event': 'fnac', 'location':'HEADER', 'device':'UHD'});"
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              href="https://www.fnac.com/SearchResult/ResultList.aspx?PageIndex=2&SDM=list&Search=asus+oled&sft=1"
            >
              <img
                class="up ma-5"
                src="~/assets/img/fnac.png"
                alt=""
                srcset="" /></a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              onclick="dataLayer.push({'event': 'ldlc', 'location':'HEADER', 'device':'UHD'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'rueducommerce', 'location':'HEADER', 'device':'UHD'});"
              id="axeptio_link"
              class="axeptio_link"
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
        </vs-row>
      </div>
    </vs-dialog>
    <vs-dialog blur width="550px" center v-model="CTA5">
      <template #header>
        <p class="my-2 text-content">OÙ ACHETER UN PC ASUS OLED ÉLIGIBLE</p>
      </template>
      <div class="con-content">
        <vs-row class="mb-2 mt-2">
          <vs-col w="3" xs="6">
            <a
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              onclick="dataLayer.push({'event': 'asus', 'location':'HEADER', 'device':'HD'});"
              href="https://www.asus.com/fr/Laptops/For-Home/All-series/filter?Category=OLED-display&Spec=126640"
              ><img
                class="up ma-5"
                src="~/assets/img/ASUS.png"
                alt=""
                srcset=""
              /> </a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              onclick="dataLayer.push({'event': 'amazon', 'location':'HEADER', 'device':'HD'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'auchan', 'location':'HEADER', 'device':'HD'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'boulanger', 'location':'HEADER', 'device':'HD'});"
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              href="https://www.boulanger.com/opeco/odr622mico"
            >
              <img
                class="up ma-5"
                src="~/assets/img/boulanger.png"
                alt=""
                srcset="" /></a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              onclick="dataLayer.push({'event': 'carrefour', 'location':'HEADER', 'device':'HD'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'cdiscount', 'location':'HEADER', 'device':'HD'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'leclerc', 'location':'HEADER', 'device':'HD'});"
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              href="https://www.e.leclerc/recherche?q=asus%20oled"
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
            <a
              onclick="dataLayer.push({'event': 'fnac', 'location':'HEADER', 'device':'HD'});"
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              href="https://www.fnac.com/SearchResult/ResultList.aspx?PageIndex=2&SDM=list&Search=asus+oled&sft=1"
            >
              <img
                class="up ma-5"
                src="~/assets/img/fnac.png"
                alt=""
                srcset="" /></a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              onclick="dataLayer.push({'event': 'ldlc', 'location':'HEADER', 'device':'HD'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'rueducommerce', 'location':'HEADER', 'device':'HD'});"
              id="axeptio_link"
              class="axeptio_link"
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
        </vs-row>
      </div>
    </vs-dialog>
    <vs-dialog blur width="550px" center v-model="CTA6">
      <template #header>
        <p class="my-2 text-content">OÙ ACHETER UN PC ASUS OLED ÉLIGIBLE</p>
      </template>
      <div class="con-content">
        <vs-row class="mb-2 mt-2">
          <vs-col w="3" xs="6">
            <a
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              onclick="dataLayer.push({'event': 'asus', 'location':'HEADER', 'device':'DESKTOP'});"
              href="https://www.asus.com/fr/Laptops/For-Home/All-series/filter?Category=OLED-display&Spec=126640"
              ><img
                class="up ma-5"
                src="~/assets/img/ASUS.png"
                alt=""
                srcset=""
              /> </a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              onclick="dataLayer.push({'event': 'amazon', 'location':'HEADER', 'device':'DESKTOP'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'auchan', 'location':'HEADER', 'device':'DESKTOP'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'boulanger', 'location':'HEADER', 'device':'DESKTOP'});"
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              href="https://www.boulanger.com/opeco/odr622mico"
            >
              <img
                class="up ma-5"
                src="~/assets/img/boulanger.png"
                alt=""
                srcset="" /></a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              onclick="dataLayer.push({'event': 'carrefour', 'location':'HEADER', 'device':'DESKTOP'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'cdiscount', 'location':'HEADER', 'device':'DESKTOP'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'leclerc', 'location':'HEADER', 'device':'DESKTOP'});"
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              href="https://www.e.leclerc/recherche?q=asus%20oled"
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
            <a
              onclick="dataLayer.push({'event': 'fnac', 'location':'HEADER', 'device':'DESKTOP'});"
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              href="https://www.fnac.com/SearchResult/ResultList.aspx?PageIndex=2&SDM=list&Search=asus+oled&sft=1"
            >
              <img
                class="up ma-5"
                src="~/assets/img/fnac.png"
                alt=""
                srcset="" /></a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              onclick="dataLayer.push({'event': 'ldlc', 'location':'HEADER', 'device':'DESKTOP'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'rueducommerce', 'location':'HEADER', 'device':'DESKTOP'});"
              id="axeptio_link"
              class="axeptio_link"
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
        </vs-row>
      </div>
    </vs-dialog>
    <vs-dialog blur width="550px" center v-model="CTA7">
      <template #header>
        <p class="my-2 text-content">OÙ ACHETER UN PC ASUS OLED ÉLIGIBLE</p>
      </template>
      <div class="con-content">
        <vs-row class="mb-2 mt-2">
          <vs-col w="3" xs="6">
            <a
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              onclick="dataLayer.push({'event': 'asus', 'location':'HEADER', 'device':'TABLET'});"
              href="https://www.asus.com/fr/Laptops/For-Home/All-series/filter?Category=OLED-display&Spec=126640"
              ><img
                class="up ma-5"
                src="~/assets/img/ASUS.png"
                alt=""
                srcset=""
              /> </a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              onclick="dataLayer.push({'event': 'amazon', 'location':'HEADER', 'device':'TABLET'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'auchan', 'location':'HEADER', 'device':'TABLET'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'boulanger', 'location':'HEADER', 'device':'TABLET'});"
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              href="https://www.boulanger.com/opeco/odr622mico"
            >
              <img
                class="up ma-5"
                src="~/assets/img/boulanger.png"
                alt=""
                srcset="" /></a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              onclick="dataLayer.push({'event': 'carrefour', 'location':'HEADER', 'device':'TABLET'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'cdiscount', 'location':'HEADER', 'device':'TABLET'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'leclerc', 'location':'HEADER', 'device':'TABLET'});"
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              href="https://www.e.leclerc/recherche?q=asus%20oled"
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
            <a
              onclick="dataLayer.push({'event': 'fnac', 'location':'HEADER', 'device':'TABLET'});"
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              href="https://www.fnac.com/SearchResult/ResultList.aspx?PageIndex=2&SDM=list&Search=asus+oled&sft=1"
            >
              <img
                class="up ma-5"
                src="~/assets/img/fnac.png"
                alt=""
                srcset="" /></a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              onclick="dataLayer.push({'event': 'ldlc', 'location':'HEADER', 'device':'TABLET'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'rueducommerce', 'location':'HEADER', 'device':'TABLET'});"
              id="axeptio_link"
              class="axeptio_link"
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
        </vs-row>
      </div>
    </vs-dialog>
    <vs-dialog blur width="550px" center v-model="CTA8">
      <template #header>
        <p class="my-2 text-content">OÙ ACHETER UN PC ASUS OLED ÉLIGIBLE</p>
      </template>
      <div class="con-content">
        <vs-row class="mb-2 mt-2">
          <vs-col w="3" xs="6">
            <a
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              onclick="dataLayer.push({'event': 'asus', 'location':'HEADER', 'device':'MOBILE'});"
              href="https://www.asus.com/fr/Laptops/For-Home/All-series/filter?Category=OLED-display&Spec=126640"
              ><img
                class="up ma-5"
                src="~/assets/img/ASUS.png"
                alt=""
                srcset=""
              /> </a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              onclick="dataLayer.push({'event': 'amazon', 'location':'HEADER', 'device':'MOBILE'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'auchan', 'location':'HEADER', 'device':'MOBILE'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'boulanger', 'location':'HEADER', 'device':'MOBILE'});"
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              href="https://www.boulanger.com/opeco/odr622mico"
            >
              <img
                class="up ma-5"
                src="~/assets/img/boulanger.png"
                alt=""
                srcset="" /></a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              onclick="dataLayer.push({'event': 'carrefour', 'location':'HEADER', 'device':'MOBILE'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'cdiscount', 'location':'HEADER', 'device':'MOBILE'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'leclerc', 'location':'HEADER', 'device':'MOBILE'});"
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              href="https://www.e.leclerc/recherche?q=asus%20oled"
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
            <a
              onclick="dataLayer.push({'event': 'fnac', 'location':'HEADER', 'device':'MOBILE'});"
              id="axeptio_link"
              class="axeptio_link"
              target="_blank"
              href="https://www.fnac.com/SearchResult/ResultList.aspx?PageIndex=2&SDM=list&Search=asus+oled&sft=1"
            >
              <img
                class="up ma-5"
                src="~/assets/img/fnac.png"
                alt=""
                srcset="" /></a
          ></vs-col>
          <vs-col w="3" xs="6">
            <a
              onclick="dataLayer.push({'event': 'ldlc', 'location':'HEADER', 'device':'MOBILE'});"
              id="axeptio_link"
              class="axeptio_link"
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
              onclick="dataLayer.push({'event': 'rueducommerce', 'location':'HEADER', 'device':'MOBILE'});"
              id="axeptio_link"
              class="axeptio_link"
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
        </vs-row>
      </div>
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
      sheet: false,
      hasSaved: false,
      isEditing: null,
      search: '',
      CTA1: false,
      CTA2: false,
      CTA3: false,
      CTA4: false,
      CTA5: false,
      CTA6: false,
      CTA7: false,
      CTA8: false,
      page: 1,
      max: 3,
      conditions: false,
      explicationCTA: false,
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
          priceB: '525',
        },
        {
          id: '42',
          name: 'Apple MacBook 12" Early 2016',
          priceA: '434',
          priceB: '434',
        },
        {
          id: '43',
          name: 'Apple MacBook 12" Early 2015',
          priceA: '349',
          priceB: '349',
        },
        {
          id: '44',
          name: 'Apple MacBook Pro 14" 2021',
          priceA: '1000',
          priceB: '1000',
        },
        {
          id: '45',
          name: 'Apple MacBook Air (M1 2020)',
          priceA: '650',
          priceB: '650',
        },
        {
          id: '46',
          name: 'Apple MacBook Pro 13" (M1 2020)',
          priceA: '800',
          priceB: '800',
        },
        {
          id: '47',
          name: 'Apple MacBook Pro 13" 2020 (2 Thunderbolt 3) ',
          priceA: '850',
          priceB: '850',
        },
        {
          id: '48',
          name: 'Apple MacBook Pro 13" 2020 (4 Thunderbolt 3)',
          priceA: '900',
          priceB: '900',
        },
        {
          id: '49',
          name: 'MacBook Pro 16" 2019',
          priceA: '900',
          priceB: '900',
        },
        {
          id: '50',
          name: 'MacBook Pro 13" 2019 (2 Thunderbolt 3)',
          priceA: '700',
          priceB: '700',
        },
        {
          id: '51',
          name: 'MacBook Pro 13" 2019 (4 Thunderbolt 3)',
          priceA: '750',
          priceB: '750',
        },
        {
          id: '52',
          name: 'MacBook Pro 15" 2019 ',
          priceA: '750',
          priceB: '750',
        },
        {
          id: '50',
          name: 'MacBook Pro 15" 2018',
          priceA: '678',
          priceB: '678',
        },
        {
          id: '50',
          name: 'MacBook Pro 13" 2018 (4 Thunderbolt 3)',
          priceA: '606',
          priceB: '606',
        },
        {
          id: '51',
          name: 'Apple MacBook Pro 13" Mid 2017',
          priceA: '556',
          priceB: '556',
        },
        {
          id: '52',
          name: 'Apple MacBook Pro 13" Late 2016',
          priceA: '400',
          priceB: '400',
        },
        {
          id: '50',
          name: 'Apple MacBook Pro 13" 2017',
          priceA: '638',
          priceB: '638',
        },
        {
          id: '51',
          name: 'Apple MacBook Pro 13" Touch Bar Late 2016',
          priceA: '500',
          priceB: '500',
        },
        {
          id: '52',
          name: 'Apple MacBook Pro 13" Early 2015',
          priceA: '400',
          priceB: '400',
        },
        {
          id: '50',
          name: 'Apple MacBook Pro 15"  2017',
          priceA: '800',
          priceB: '800',
        },
        {
          id: '51',
          name: 'Apple MacBook Pro 15" 2016',
          priceA: '600',
          priceB: '600',
        },
        {
          id: '52',
          name: 'Apple MacBook Pro 15" Mid 2015 (DG)',
          priceA: '550',
          priceB: '550',
        },
        {
          id: '50',
          name: 'Apple MacBook Pro 15" Mid 2015 (IG)',
          priceA: '500',
          priceB: '500',
        },
        {
          id: '51',
          name: 'Apple MacBook Air Retina 13" 2020',
          priceA: '642',
          priceB: '642',
        },
        {
          id: '52',
          name: 'Apple MacBook Air Retina 13" 2019',
          priceA: '570',
          priceB: '570',
        },
        {
          id: '50',
          name: 'Apple MacBook Air Retina 13" 2018',
          priceA: '498',
          priceB: '498',
        },
        {
          id: '51',
          name: 'Apple MacBook Air 11" Early 2015',
          priceA: '290',
          priceB: '290',
        },
        {
          id: '52',
          name: 'Apple MacBook Air 13" 2017',
          priceA: '369',
          priceB: '369',
        },
        {
          id: '50',
          name: 'Apple MacBook Air 13" Early 2015',
          priceA: '311',
          priceB: '311',
        },
        {
          id: '51',
          name: 'Apple iMac M1 24 inches - 2 or 4 ports - 2021',
          priceA: '800',
          priceB: '800',
        },
        {
          id: '52',
          name: 'Apple iMac Retina  5K - 27 inches - 2020',
          priceA: '800',
          priceB: '800',
        },
        {
          id: '50',
          name: 'Apple iMac Retina 5K - 27 inches - 2019',
          priceA: '700',
          priceB: '700',
        },
        {
          id: '51',
          name: 'Apple iMac Retina 4K - 21,5 inches - 2019',
          priceA: '640',
          priceB: '640',
        },
        {
          id: '52',
          name: 'Apple Mini M1 - 2020',
          priceA: '450',
          priceB: '450',
        },
        {
          id: '50',
          name: 'Apple Mac Mini - 2018',
          priceA: '220',
          priceB: '220',
        },
        {
          id: '51',
          name: 'Apple iMac  Pro 27 inches - 2017',
          priceA: '451',
          priceB: '451',
        },
        {
          id: '52',
          name: 'Apple iMac Retina 5K - 27 inches - 2017',
          priceA: '600',
          priceB: '600',
        },
        {
          id: '52',
          name: 'Apple iMac Retina 4K - 21,5 inches - 2017',
          priceA: '500',
          priceB: '500',
        },
        {
          id: '52',
          name: 'Apple iMac 21,5 inches - 2017',
          priceA: '360',
          priceB: '360',
        },
        {
          id: '52',
          name: 'Apple iMac 21,5 inches - 2015',
          priceA: '340',
          priceB: '340',
        },
        {
          id: '52',
          name: 'Apple iMac Retina 4K, 21,5 inches - 2015',
          priceA: '400',
          priceB: '400',
        },
        {
          id: '52',
          name: 'Apple iMac Retina 5K, 27 inches - 2015',
          priceA: '500',
          priceB: '500',
        },
      ],
    }
  },
}
</script>
