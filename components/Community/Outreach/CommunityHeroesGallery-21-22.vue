<template>
  <div class="mb-12">
    <h2 class="text-center mb-4">2021-2022 Community Heroes</h2>
    <div class="grid sm:grid-cols-12">
      <div class="sm:col-span-8 sm:col-start-3">
        <flickity ref="flickity" :options="flickityOptions">
          <div class="carousel-cell">
            <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/community/img/community-heroes/Oct 23- Aarin Wingfield & DeShaun Roman- LA County Fire- Inglewood.jpg"/>
            <div class="carousel-caption">
            <strong>October 23</strong> Aarin Wingfield, LA County Fire - Inglewood.	DeShaun Roman, LA County Fire - Inglewood.
            </div>
          </div>
          <div class="carousel-cell">
            <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/community/img/community-heroes/Oct 25- LaSandra Dixon & Natalie Gutierrez- PeacePlayersUS.jpg"/>
            <div class="carousel-caption">
            <strong>October 25</strong> LaSandra Dixon, PeacePlayersUS.		Natalie Gutierrez, PeacePlayersUS.
            </div>
          </div>
          <div class="carousel-cell">
            <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/community/img/community-heroes/Oct 27- Paul Busch & Liza Lieberman- Bridge to Home.jpg"/>
            <div class="carousel-caption"><strong>October 27</strong> Paul Busch, Bridge to Home.	Liza Lieberman, Bridge to Home.</div>
          </div>
          <div class="carousel-cell">
            <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/community/img/community-heroes/Nov 1- Deputy Fire Chief Tim Sell & Dr. Ying Ying Goh- Pasadena Fire Dept..jpg"/>
            <div class="carousel-caption"><strong>November 1</strong> Dr. Ying Ying Goh,	Pasadena FD.	Deputy Fire Chief Tim Sell,	Pasadena FD.</div>
          </div>
          <div class="carousel-cell">
            <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/community/img/community-heroes/Nov 7- Helen Houston & David Matthews- US Army.jpg"/>
            <div class="carousel-caption"><strong>November 7</strong> SFC David Mathews,	Army.	Helen Houston,	Army.</div>
          </div>
          <div class="carousel-cell">
            <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/community/img/community-heroes/Nov 9- Alonzo Jarmon & Gynell Harvey- US Coast Guard.jpg"/>
            <div class="carousel-caption"><strong>November 9</strong> Alonzo Jarmon,	US Coast Guard.	Gynell Harvey,	US Coast Guard.</div>
          </div>
          <div class="carousel-cell">
            <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/community/img/community-heroes/Nov 11- Daniel Coello & Subash KC- US Army.jpg"/>
            <div class="carousel-caption"><strong>November 11</strong> Daniel Coello,	Army.	Subash KC,	Army.</div>
          </div>
          <div class="carousel-cell">
            <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/community/img/community-heroes/Nov 14- Steve Allen & Mark Davis- Foothill Family.jpg"/>
            <div class="carousel-caption"><strong>November 14</strong> Steve Allen,	Foothill Family.	Mark Davis,	Foothill Family.</div>
          </div>
          <div class="carousel-cell">
            <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/community/img/community-heroes/Nov 16- Katrina Rosales & Aislin Camba- Cedars Sinai.jpg"/>
            <div class="carousel-caption"><strong>November 16</strong> Katrina Rosales,	Cedars.	Aislin Camba,	Cedars.</div>
          </div>
          <div class="carousel-cell">
            <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/community/img/community-heroes/Nov 21- Reggie Garcia & Greg Hayes- Jr Clippers.jpg"/>
            <div class="carousel-caption"><strong>November 21</strong> Reggie Garcia,	Jr Clippers. 	Greg Hayes,	Jr Clippers.</div>
          </div>
          <div class="carousel-cell">
            <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/community/img/community-heroes/Nov 23- Isiah Thompson & John Amago- Inter Tribal Sports.jpg"/>
            <div class="carousel-caption"><strong>November 23</strong> Isiah Thompson,	Rachel Partnership.	John Amago,	Rachel Partnership. </div>
          </div>
          <div class="carousel-cell">
            <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/community/img/community-heroes/Nov-26--Justin-Hogan-&-Andrea-Granados--Crittenton-Family-Service.jpg"/>
            <div class="carousel-caption"><strong>November 26</strong> Justin Hogan,	Crittenton Family Services.	Andrea Granados, 	Crittenton Family Services.</div>
          </div>
          <div class="carousel-cell">
            <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/community/img/community-heroes/Nov 28- Charise Henry & Leonardo Cablayan- Brotherhood Crusade.jpg"/>
            <div class="carousel-caption"><strong>November 28</strong> Charise Henry,	Brotherhood Crusade. 	Leonardo Cablayan,	Brotherhood Crusade. </div>
          </div>
          <div class="carousel-cell">
            <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/community/img/community-heroes/Dec 1- Rabbi Shakari & Danielle Berukhim- LA Star.jpg"/>
            <div class="carousel-caption"><strong>December 1</strong> Rabbi  Shakari,	LA STAR.	Danielle, 	LA STAR.</div>
          </div>
          <div class="carousel-cell">
            <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/community/img/community-heroes/Dec 8- Sean Murphy & Horace Hguyen- Jr Clippers.jpg"/>
            <div class="carousel-caption"><strong>December 8</strong> Sean Murphy	Jr., Clippers. 	Horace Nguyen,	Jr. Clippers. </div>
          </div>
          <div class="carousel-cell">
            <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/community/img/community-heroes/Dec 13- Mazeratti Byers & Marcus Wilson- Compton Fire Department.jpg"/>
            <div class="carousel-caption"><strong>December 13</strong> Mazeratti Byers,	Compton Fire Dept.	Marcus Wilson, 	Compton Fire Dept.</div>
          </div>   
          <div class="carousel-cell">
            <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/community/img/community-heroes/Dec 20- Victor Aguirre & Thomas Kitahata- LA Fire Department.jpg"/>
            <div class="carousel-caption"><strong>December 20</strong> Victor Aguirre,	LAFD.	Thomas Kitahata,	LAFD.</div>
          </div>
          <div class="carousel-cell">
            <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/community/img/community-heroes/Dec 26- Carlos Walaker & King Moore- IBEW & NECA.jpg"/>
            <div class="carousel-caption"><strong>December 26</strong> Carlos Walaker,	Union.	King Moore,	Union.</div>
          </div>
          <div class="carousel-cell">
            <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/community/img/community-heroes/Dec 27-Bryana Williams & Rich Bessmer- Jr Clippers.jpg"/>
            <div class="carousel-caption"><strong>December 27</strong> Bryana Williams & Rich Bessmer, Jr. Clippers.</div>
          </div>
          <div class="carousel-cell">
            <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/community/img/community-heroes/Jan 3rd- Valerie Llerenas & Carina Canela- MOSTe.jpg"/>
            <div class="carousel-caption"><strong>January 3</strong> Valerie Llerenas,	MOSTe.	Carina Canela,	MOSTe.</div>
          </div>
          <div class="carousel-cell">
            <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/community/img/community-heroes/Jan 8- Danielle Marrufo & Emelie Munguia- Rainbow Labs.jpg"/>
            <div class="carousel-caption"><strong>January 8</strong> Danielle Marrufo, 	Rainbow Labs.	Emelie Munguia,	Rainbow Labs.</div>
          </div>
          <div class="carousel-cell">
            <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/community/img/community-heroes/Jan 9- Emmy Martinez.jpg"/>
            <div class="carousel-caption"><strong>January 9</strong> Emmy Martinez,	LGBT Center.	Danielle Marrufo,	LGBT Center.</div>
          </div>
          <div class="carousel-cell">
            <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/community/img/community-heroes/Jan 11- Dr. Perry Crouch & Jerome Simmons- Watts Empowerment Center.jpg"/>
            <div class="carousel-caption"><strong>January 11</strong> Dr. Perry Crouch,	Watts Empowerment Center.	Jerome Simmons,	Watts Empowerment Center.</div>
          </div>
          <div class="carousel-cell">
            <img class="carousel-cell-image" data-flickity-lazyload="https://clippersweb.blob.core.windows.net/community/img/community-heroes/Jan 17- Oasis Church- Jennifer Perkins & Sam Lewis- ARC.jpg"/>
            <div class="carousel-caption"><strong>January 17</strong> Jennifer Perkins,	Anti Recidivism Coalition.	Sam Lewis,	Anti Recidivism Coalition.</div>
          </div>
        </flickity>
      </div>
    </div>
    
  </div>
  
</template>
<script>
import Flickity from 'vue-flickity'
export default {
  
  data() {
    return {
      flickityOptions: {
        lazyLoad: 1,
        wrapAround: true,
        pageDots: false 
      }
    }
  },
  
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  }
}
</script>
