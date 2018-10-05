export const fetchAllPokemon = () => $.ajax({
  type: "GET",
  url: "/api/pokemon"
});

export const fetchOnePokemon = (id) => $.ajax({
  type: "GET",
  url: `/api/pokemon/${id}`
});

export const fetchAllItems = () => $.ajax({
  type: "GET",
  url: `/api/items`
});
