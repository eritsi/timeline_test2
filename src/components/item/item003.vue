<template>
    <v-hover>
        <v-timeline-item icon="mdi-RacingHelmet" color='#208ea3'
                     slot-scope="{ hover  }"
                     :class="`${hover? 'class1': 'class2'}`">
            <v-row class="pt-1">
                <v-col cols="3">
                    <strong class='contents-title'>2004/04</strong>
                </v-col>
                <v-col>
                    <h2 class='contents-title'>ルノー・アジアパシフィックへ入社</h2>
                    <div class="text-caption">
                        <div class='contents-text'>
                            麹町のエンジニアオフィス(フランス人4名のみ)に配属され、サスペンションエンジニアとしてキャリアスタート。<br>
                            4月~7月、フランスはLe MansでCATIA V4の研修を受ける。<br>
                        </div>
                    </div>
                </v-col>
                <!-- 画像がないのでしばらく割愛
                <v-col>
                    <v-img src="./../../images/bg003.png" max-width='300' max-height='200' contain> </v-img>
                </v-col>
                -->
            </v-row>
        </v-timeline-item>
    </v-hover>
</template>

<script>
    export default {}
</script>

<style>
  @import "./../../css/mycss.css";
</style>
