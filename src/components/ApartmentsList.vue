<template>
  <div>
    <v-list flat>
      <v-subheader>APPARTEMENTS</v-subheader>
      <v-list-item-group color="primary">
        <ApartmentsListItem
          v-for="apartment in apartments"
          :key="apartment._id"
          :apartment="apartment"
        />
      </v-list-item-group>
    </v-list>
    <div style="padding: 2em" v-if="apartments.length === 0">
      <v-alert type="info" elevation="2">
        No apartments bookmarked for now...
      </v-alert>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { ApartmentSimple } from "@/types/apartment";
import ApartmentsListItem from "./ApartmentsListItem.vue";
import ConfirmationDialog from "./dialogs/ConfirmationDialog.vue";

@Component({
  components: { ApartmentsListItem, ConfirmationDialog },
})
export default class ApartmentsList extends Vue {
  @Prop({ required: true })
  private apartments!: ApartmentSimple[];
}
</script>