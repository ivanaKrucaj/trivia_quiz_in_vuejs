<template>
  <div id="app">
    <Header />
    <Counter 
      :numCorrect="numCorrect" 
      :numTotal="numTotal" 
    />
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <QuestionBox
            v-if="questions.length"
            :currentQuestion="questions[index]"
            :next="next"
            :increment="increment"
          />
        </b-col>
      </b-row>
    </b-container>

    <Result v-if='showResult' :numCorrect='numCorrect'/>

  </div>
</template>

<script>
import Header from "./components/Header.vue";
import QuestionBox from "./components/QuestionBox.vue";
import Counter from "./components/Counter";
import Result from './components/Result'

export default {
  name: "App",
  components: {
    Header,
    QuestionBox,
    Counter,
    Result
  },
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0,
      showResult: false
    };
  },
  methods: {
    next() {
      this.index++;
      if(this.index === 25){
        this.showResult = true
      } else {
        this.showResult = false
      }
    },

    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++;
      }
      this.numTotal++;
    },
  },
  mounted: function() {
    fetch(
      "https://opentdb.com/api.php?amount=25&category=9&difficulty=medium&type=multiple",
      {
        method: "get",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        this.questions = jsonData.results;
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}


</style>
