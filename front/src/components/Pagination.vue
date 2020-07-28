<template>
  <div>
    pagination
  </div>
</template>

<script>
export default {
  props: {
    pageParams: {
      type: Object,
      require: false,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="stylus" module="pagination">
  
</style>