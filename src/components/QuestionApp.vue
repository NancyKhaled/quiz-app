<template>
  <div class="container mt-4 mb-5">
    <table class="table">
      <thead>
        <tr v-if="loading" class="que">
          Loading...
        </tr>
        <tr v-else class="que">
          {{
            questions
          }}
        </tr>
      </thead>
      <tbody>
        <tr>
          <table class="table">
            <tbody>
              <tr>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Default radio
                  </label>
                </div>
              </tr>
            </tbody>
          </table>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-dark previos" disabled>&#8630; previos</button>
    <button class="btn btn-dark next">next &#8631;</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "quiz-app",
  data() {
    return {
      questions: [],
      loading: false,
    };
  },
  mounted() {
    this.loading = true;
    axios
      .get(
        "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple"
      )
      .then((response) => (this.questions = response.data.results[0].question))
      .catch((error) => console.log(error))
      .finally(() => (this.loading = false));
  },
};
</script>

<style lang="scss" scoped>
.previos,
.next {
  text-transform: capitalize;
  margin: 10px;
}
.table {
  border: thin solid #333;
  border-radius: 3px;
  border-collapse: initial;
  .que {
    display: inline-block;
    width: 100%;
    padding: 10px;
  }
}
</style>
