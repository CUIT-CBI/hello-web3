<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';
import initContract from "../api/initContract"
import stateConf from "../api/statemachine.json"

let state = reactive({response: {_hex: ""}})
const storedData = computed(() => {
  let {_hex} = state.response
  return parseInt(_hex)
})
export default defineComponent({
  name: 'GetView',
  async created() {
    let {contractAddress, contractABI} = stateConf
    let {contract} = await initContract(contractAddress, contractABI, window)
    let {_hex} = await contract.get()
    state.response._hex = _hex
    console.log(state.response)
  },
  setup() {
    return {
      storedData,
      // state
    }
  }
});
</script>

<template>
  <div class="get">
    <!-- {{state}} -->
    <b>current state: </b><span>{{storedData}}</span>
  </div>
</template>
