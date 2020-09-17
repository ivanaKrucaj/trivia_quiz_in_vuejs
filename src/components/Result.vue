<template>
        <h4 class="result-text">{{ showResult()}}</h4>
</template>

<script>
export default {
    props: {
        numCorrect: Number
        },
    methods: {
    showResult() {
        console.log('test function')
        let resultText = ''
        if (this.numCorrect >= 20) {
            resultText = `${this.numCorrect}/25 Good job! You are a know-it-all!`
        } else if (this.numCorrect >= 10) {
            resultText = `${this.numCorrect}/25 Not bad! But you should know better!`
        } else {
            resultText = `${this.numCorrect}/25 There is still a lot left that you need to know.`
        }

        return resultText
    }
    }
}
</script>

<style scoped>

.result-text {
    padding: 50px 0 30px;
}
</style>