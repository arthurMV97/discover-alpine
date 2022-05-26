function loadCountries() {
    return {
      search: "",
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
      getFilteredCountries() {
        if (!this.allCountries || !this.search) {
          return this.allCountries
        }
        var result = this.allCountries.filter((item) => {
          return item.first_name
            .toLowerCase()
            .includes(this.search.toLowerCase());
        })
        return result
      },

      get filteredCountries() {
          if (this.isLoaded)
        return this.allCountries.filter(
            i => i.name.common.toLowerCase().startsWith(this.search.toLowerCase())
        )
    }
    }
  }



