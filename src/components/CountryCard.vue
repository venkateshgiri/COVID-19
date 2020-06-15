<template>
   <v-container fluid>
       <v-row no-gutters justify="center" align="center" class="pt-5 pb-5">
         <v-col cols="6" md="2">
           <v-text-field
           class="search"
           v-model="search"
           label="Search by Country "
           hint="Country"
           outlined
           rounded
           single-line
           ></v-text-field>
         </v-col>
       </v-row>
       <v-row row no-gutters>
         <!-- {{ filteredCountries }} -->
         <v-col class="pa-5" cols="12" md="3"
          v-for="(country, index) in filteredCountries" :key="index">
            <v-card class="covid">
              <v-card-title class="country-name">
               <span class="pr-2">
                 <flag class="country-code" :iso="country.CountryCode" />
               </span>{{ country.Country }}
              </v-card-title>
              <v-list>
                <v-subheader class="day">Today:</v-subheader>
                <v-list-item>
                  <v-list-item-title> Death </v-list-item-title>
                  <v-list-item-subtitle>{{country.NewDeaths}}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title> Confirmed </v-list-item-title>
                  <v-list-item-subtitle>{{country.NewConfirmed}}</v-list-item-subtitle>
                </v-list-item>
                 <v-list-item>
                  <v-list-item-title> Recovered </v-list-item-title>
                  <v-list-item-subtitle>{{country.NewRecovered}}</v-list-item-subtitle>
                </v-list-item>
              </v-list>
              <v-list>
                <v-subheader class="day">Overall:</v-subheader>
                <v-list-item>
                  <v-list-item-title> Death </v-list-item-title>
                  <v-list-item-subtitle>{{country.TotalDeaths}}</v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title> Confirmed </v-list-item-title>
                  <v-list-item-subtitle>{{country.TotalConfirmed}}</v-list-item-subtitle>
                </v-list-item>
                 <v-list-item>
                  <v-list-item-title> Recovered </v-list-item-title>
                  <v-list-item-subtitle>{{country.TotalRecovered}}</v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card>
         </v-col>
       </v-row>
   </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'CountryCard',
  data: () => ({
    search: '',
  }),
  computed: {
    ...mapState({
      countries: (state) => state.corona.countries,
    }),
    filteredCountries() {
      return this.countries.filter((country) => country.Country.toLowerCase()
        .includes(this.search.toLowerCase()));
    },
  },
};
</script>

<style lang="scss">
.search {
  font-family: Volkron-Regular;
}
.covid {
  .v-list-item__title{
    font-family: Volkron-Regular;
  }
}
.country-code {
  font-size: 24px;
}
.country-name {
  font-family: Volkron-Bold;
  font-size: 1.3rem !important;
}
.day {
  font-family: Velkron-Medium;
  font-size: 18px !important;
  color: rgb(255, 70, 93) !important;
}
.perfect-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
