function loadCountries() {
   return {
      search: "",
      reinitializeSearch() {
        this.search = ""
      },
      isLoaded: false,
      allCountries: [],
      init() {
        fetch("https://restcountries.com/v3.1/all")
          .then(res => res.json())
          .then(data => {
            this.allCountries = data
            console.log(this.allCountries, 'init')
            this.isLoaded = true;
          })
        
        
      },
      get filteredCountries() {
          if (this.isLoaded)
        return this.allCountries.filter(
            i => i.name.common.toLowerCase().startsWith(this.search.toLowerCase())
        )
    },

    }
  }

  function handlePopUp ()  { return {
    openPopUp: false,
    country: {},
    togglePopUp(data) {
        this.openPopUp = !this.openPopUp
        if (data) {
            this.country = data
        }
    }}
}
  // let openPopUp = false
  // const informationPopUp = (country) => {
  //   console.log(country)
  //   openPopUp = true
  //     return {
  //         get getCountryInfos() {
  //           return country
  //         }
  //         get closePopUp() {
  //             this.openPopUp = false
  //         }
  //     }
  // }



