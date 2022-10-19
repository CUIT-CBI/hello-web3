<template>
  <div class="set">
    <input type="text" v-model="value">
    <button @click="transact">transact</button>
  </div>
</template>

<script>
import initContract from "../api/initContract"
import stateConf from "../api/statemachine.json"
export default {
  name: 'SetView',
  async created() {
    let {contractAddress, contractABI} = stateConf
    let {contractSigner} = await initContract(contractAddress, contractABI, window)
    this.contractSigner = contractSigner
  },
  data() {
    return {
      contractSigner: undefined,
      value: 0
    }
  },
  methods: {
    async transact() {
      let result = await this.contractSigner.set(this.value)
      .catch(err => {
        console.error(err)
        return 'failed'
      })
      console.log(result)
    }
  }
}
</script>

