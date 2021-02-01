<template>
  <h1>Events For Good</h1>
  <div class="events">
    <!-- Imported Component -->
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
// Import components from
import EventCard from "@/components/EventCard.vue"
import EventService from '@/services/EventService.js'

export default {
  name: "Eventlist",
  components: {
    EventCard // Register is as a child component
  },
  data() {
    return {
      events: null
    }
  }, 
  async created () {
    try {
    let response = await EventService.getEvents()
    this.events = response.data      
    } catch (error) {
      console.log(error)      
    };   
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
