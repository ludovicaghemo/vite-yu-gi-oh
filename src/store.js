import { reactive, } from "vue";

export const store = reactive({
  cardsList: [],
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
  apiArchUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype",
  loading: false,
  selectedOption: "",
});